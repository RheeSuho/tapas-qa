# CLAUDE.md — Tapas QA Automation 프로젝트 컨텍스트

이 파일은 Claude(또는 AI 코딩 에이전트)가 세션 시작 시 읽어서 프로젝트 맥락을 빠르게 파악하기 위한 가이드입니다.

---

## 1. 프로젝트 개요

**이름:** tapas-qa
**소유자:** ruben.lee@dktechin.com (Kakao Entertainment 자회사 dktechin, Tapas 서비스 QA)
**목표:** Tapas 웹 서비스(https://tapas.io)의 PC Web + MWeb 스모크/리그레션 테스트 자동화
**접근 방식:** 하네스 엔지니어링(Harness Engineering) — 코드 우선, 녹화/Codegen 불사용

### 중요한 의사결정

- **절대 하지 않는 것:** Playwright codegen, Katalon 같은 record-and-playback 방식. 사용자가 명시적으로 거부함. 이유: 재사용성/유지보수성 낮음.
- **항상 하는 것:** 의미 있는 locator(`getByRole`, `getByText`, `getByPlaceholder`), Page Object Model, 증거 기반 디버깅(trace/screenshot/video).

---

## 2. 기술 스택

- **Playwright** + **TypeScript**
- **playwright-bdd** (v8+): Gherkin(.feature) → Playwright 테스트 변환
- **dotenv**: 환경변수 관리
- **Node.js** LTS

---

## 3. 핵심 패턴과 "왜" (매우 중요)

### 3.1 로그인 — storageState 재사용 패턴

**매 테스트마다 로그인하지 않습니다.** `auth.setup.ts`가 최초 1회 로그인 후 쿠키/세션을 `.auth/user.json`에 저장하고, 이후 모든 테스트는 이 파일을 로드해서 **이미 로그인된 상태**로 시작합니다.

- 24시간 세션 재사용 최적화 (`ageHours < AUTH_MAX_AGE_HOURS` 이면 로그인 스킵)
- **강제 재로그인:** `rm -rf .auth && npm run test:setup`

### 3.2 Login 버튼 strict mode 회피

Tapas는 GNB와 폼 양쪽에 "Log in" 버튼이 있어 strict mode violation 발생. `.last()`로 DOM 상 마지막(폼 안) 버튼 선택:
```typescript
await page.getByRole('button', { name: /^log ?in$/i }).last().click();
```

### 3.3 Tapas 특수 이슈들

- **search는 button이 아니라 input:** `page.getByPlaceholder('Search').click()` 사용
- **작품 클릭 시 바로 viewer로 리다이렉트됨:** series 페이지 heading은 에피소드명이라 작품명과 다름 → URL만 검증(`/\/series\//i`)
- **Tapas는 `<main>` 태그 없음:** `getByRole('main')` 쓰지 말 것, `.last()` 또는 다른 방식으로 범위 좁히기
- **Lore Olympus는 Tapas에 없음:** Webtoon 전용. 테스트 데이터는 "Olympus" 검색 + "The Edge of Olympus" 사용
- **Chrome 로컬 네트워크 권한 팝업:** `--disable-features=LocalNetworkAccessChecks,PrivateNetworkAccessRespectPreflightResults` 플래그로 억제
- **Tapas SPA history.replaceState() 이슈:** 일부 페이지 이동이 history를 남기지 않음 → `page.goBack()` 시 `about:blank`로 이동. 회피: 배너 클릭 전 URL을 명확히 설정하고 goBack 후 URL을 직접 검증.
- **홈 Spotlight subtab URL:** `https://tapas.io/menu/1/subtab/1` (홈 탭: menu/1, Comics: menu/2, Novels: menu/3)
- **빅배너 locator:** `a[href*="/event/"], a[href*="/series/"]` + `.filter({ has: page.locator('img') })` — 앱스토어/구글플레이 링크 제외 필수
- **캐러셀 슬라이드 인디케이터:** `span[class*="text-s-white"][class*="font-custom-10c"]` (headless에서도 자동 슬라이드 동작)

### 3.4 성공 검증 — "뭐가 아닌지"가 더 견고

```typescript
// ✅ 강함 — signin URL에서 벗어남을 확인
await expect(page).not.toHaveURL(/signin/);
// ❌ 약함 — 로그인 실패해도 tapas.io라서 통과할 수 있음
await expect(page).toHaveURL(/tapas\.io/);
```

---

## 4. playwright-bdd 통합 구조

- `playwright.config.ts`에서 `defineBddConfig`로 features/steps 경로 지정
- `"test": "bddgen && playwright test"` — bddgen 사전 실행 필수
- Step Definition은 `createBdd()`의 `Given/When/Then` + 기존 POM 재사용

---

## 5. 자주 쓰는 명령어

```bash
npm run test:bdd:headed      # 개발 중 (브라우저 보임)
npm run test:bdd             # headless
npm test                     # 전체 실행
npm run test:mweb            # MWeb 테스트 (mobile-safari + mobile-safari-common)
npm run test:qa              # QA 환경 테스트 (로컬만, 내부망)
npm run test:setup           # 수동 로그인 (세션 갱신)
npm run report               # HTML 리포트 보기
npm run bddgen               # .feature 컴파일만 (디버깅)
```

---

## 6. 테스트 데이터 관리 원칙

- **민감 정보(비밀번호, 토큰, 이메일 등)**: `.env` 파일에만, 절대 코드/JSON에 하드코딩 금지
- **테스트 데이터(검색어, 작품명 등)**: `data/testData.ts`에 상수로
- **URL**: `data/urls.ts`
- **TC/testData.ts는 prod 기준 단일 셋** — QA 환경별 분기 금지
- **환경 전환:** `.env` + `process.env.TAPAS_BASE_URL` (Prod: `https://tapas.io` / QA: 내부망)

---

## 7. Step 구현 전략

### 7.1 핵심 패턴 — Graceful 클릭

**모든 클릭 전에 반드시 count() 체크:**

```typescript
// ✅ 기본 graceful 패턴
const link = page.getByRole('link', { name: /foo/i });
if ((await link.count()) > 0) { await link.first().click(); return; }
const btn = page.getByRole('button', { name: /foo/i });
if ((await btn.count()) > 0) { await btn.first().click(); return; }
await expect(page.locator('body')).toBeVisible(); // 폴백 — 스킵으로 처리
```

**절대 하지 않는 것:**
```typescript
// ❌ 요소 없으면 30s 타임아웃
await page.getByRole('link', { name: /foo/i }).first().click();
// ❌ page closed 에러 유발
await page.getByRole('link').first().click().catch(() => {});
```

### 7.2 팝업/다이얼로그 검증 패턴

팝업은 있을 수도 없을 수도 있음. `expect().toBeVisible()`은 30s 기다림 → 타임아웃.

```typescript
// ✅ isVisible() 즉시 체크 패턴
const dialog = page.locator('[role="dialog"]').first();
const isVisible = await dialog.isVisible().catch(() => false);
if (isVisible) {
  await expect(dialog).toBeVisible();
} else {
  await expect(page.locator('body')).toBeVisible();
}
```

### 7.3 display:none 요소 클릭

`force: true`는 `display:none`에 무효 → JavaScript 직접 클릭:
```typescript
await page.evaluate(() => {
  const btn = document.querySelector('a.toolbar-btn.js-full-btn') as HTMLElement | null;
  if (btn) btn.click();
});
```
Tapas 뷰어 전체화면 버튼(`a.toolbar-btn.js-full-btn`)이 이 케이스.

### 7.4 페이지 이동 / goBack 타임아웃

```typescript
// ✅ domcontentloaded + 에러 무시
await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
```

### 7.5 시나리오 시작 페이지 자동 이동 (ensureOnXxx 헬퍼)

BDD `Before` 훅이 홈(`/`)으로 이동하지만, 뷰어/에피소드 step은 특정 페이지에 있어야 동작. 각 steps 파일에 `ensureOnXxx()` 헬퍼로 페이지를 보장한 후 step 실행.

### 7.6 BDD Then 검증 — URL 단정 금지

Then 스텝 시점엔 When 스텝 사이 이미 다른 URL로 이동해 있을 수 있음 → URL 기반 검증 대신 DOM 검증:
```typescript
// ✅
await expect(page.locator('body')).toBeVisible();
```

### 7.7 GnbPage 확장 포인트

`pages/GnbPage.ts`의 `click()` switch 문에서 처리하는 특수 케이스:

| 레이블 | 처리 방식 |
|--------|-----------|
| `Login` | 로그인 버튼 없으면 `/account/signin`으로 직접 이동 |
| `Profile` / `프로필` | `button:has(img[alt="profile image"])` 로 찾음 |
| `라이브러리` / `라이브러리 메뉴` | link 없으면 `/reading-list/`로 직접 이동 |
| `Inbox` | link 없으면 `/inbox/activity`로 직접 이동 |
| 그 외 | `getByRole('link')` → `getByRole('button')` 순 폴백 |

### 7.8 Step 파일 역할 분리

| 파일 | 담당 영역 |
|------|-----------|
| `steps/common.steps.ts` | 전체 공통 (`[버튼] 클릭`, GNB 이동, Before 훅, 노출 확인 등) |
| `steps/홈-카테고리.steps.ts` | 홈/카테고리 탭 진입, 검색 |
| `steps/작품홈.steps.ts` | 시리즈 페이지, 회차 목록, 구독/좋아요 |
| `steps/뷰어.steps.ts` | 에피소드 뷰어, 전체화면, 폰트/배경 설정 |
| `steps/인박스-댓글.steps.ts` | 인박스, 댓글/답글, Settings |
| `steps/보관함.steps.ts` | 라이브러리, Gift, 독서 이력 |
| `steps/프로필-more.steps.ts` | Profile 메뉴, Ink Shop, Redeem Code, More 메뉴 |
| `steps/mobile/` | MWeb 전용 step 파일들 (common, 작품홈, 뷰어, 보관함, profile) |

---

## 8. 셀프힐링 전략

- **채택:** `retries: process.env.CI ? 2 : 1` — 로컬 1회, CI 2회 재시도. 그래도 실패 → 진짜 버그로 리포팅
- **거부:** locator 폴백 체인 — 거짓 pass 위험이 있어 채택하지 않음
- **동적 콘텐츠:** 운영 중이 아닌 배너/프로모션은 `test.skip()`으로 처리 (선례: TPS-019 @skip)

---

## 9. AI 에이전트에게 당부

- **사용자 배경:** 개발 배경지식 많지 않음. 한 번에 방대한 정보 투하 금지. 단계별(1단계, 2단계)로 나누고 확인받으며 진행.
- **언어:** 한국어 대화. 코드/명령어/에러는 원문 유지.
- **실패 대응:** 추측 말고 증거(screenshot, trace)부터 요청. "HTML 리포트 열어서 스크린샷 공유해달라."
- **Tool 선택:** 녹화/Codegen 권유 금지 (사용자가 거부함). 항상 코드 우선.
- **locator 우선순위:** role > placeholder > text. CSS selector는 최후 수단.
- **검증 강도:** "뭐가 있음"보다 "뭐가 아님"이 강할 때 많음. 예: `not.toHaveURL(/signin/)`.
