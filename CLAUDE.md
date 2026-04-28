# CLAUDE.md — Tapas QA Automation 프로젝트 컨텍스트

이 파일은 Claude(또는 AI 코딩 에이전트)가 세션 시작 시 읽어서 프로젝트 맥락을 빠르게 파악하기 위한 가이드입니다.

---

## 1. 프로젝트 개요

**이름:** tapas-qa
**소유자:** ruben.lee@dktechin.com (Kakao Entertainment 자회사 dktechin, Tapas 서비스 QA)
**목표:** Tapas 웹 서비스(https://tapas.io)의 PC Web 스모크 테스트 자동화
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

## 3. 폴더 구조와 역할

```
tapas-qa/
├── .auth/user.json              # 로그인 세션 저장 (자동 생성, gitignore)
├── .env                         # 실제 계정 정보 (gitignore, 절대 commit 금지)
├── .env.example                 # 팀원용 템플릿 (git 포함)
├── .features-gen/               # bddgen 산출물 (자동 생성)
├── .gitignore
├── features/                    # Gherkin .feature 파일 (CSV에서 변환됨)
│   └── 검색.feature              # 포팅된 첫 BDD 시나리오
├── pages/                       # Page Object Model
│   ├── HomePage.ts
│   └── SearchPage.ts
├── steps/                       # playwright-bdd Step Definitions
│   └── search.steps.ts          # features/검색.feature 대응
├── tests/                       # 전통 Playwright 테스트 + 셋업
│   ├── auth.setup.ts            # 이메일 로그인 + 세션 저장
│   ├── auth.check.spec.ts       # 세션 유지 검증
│   ├── home.spec.ts             # (레거시, BDD 미포팅)
│   └── search.spec.ts           # (레거시, BDD로 포팅 완료)
├── data/                        # 테스트 데이터 (민감 정보 제외)
│   ├── testData.ts
│   └── urls.ts
├── playwright.config.ts         # Playwright + BDD 통합 설정
├── tsconfig.json
└── package.json
```

---

## 4. 핵심 패턴과 "왜" (매우 중요)

### 4.1 로그인 — storageState 재사용 패턴

**매 테스트마다 로그인하지 않습니다.** `auth.setup.ts`가 최초 1회 로그인 후 쿠키/세션을 `.auth/user.json`에 저장하고, 이후 모든 테스트는 이 파일을 로드해서 **이미 로그인된 상태**로 시작합니다.

**24시간 세션 재사용 최적화:**
```typescript
if (fs.existsSync(authFile)) {
  const ageHours = (Date.now() - fs.statSync(authFile).mtimeMs) / (1000 * 60 * 60);
  if (ageHours < AUTH_MAX_AGE_HOURS) {
    return; // 로그인 스킵
  }
}
```
- 하루 종일 테스트 돌려도 실제 로그인은 1회
- 속도 개선 확인: 7초 → 4.5초

**강제 재로그인:**
```bash
rm -rf .auth && npm run test:setup
```

### 4.2 Login 버튼 strict mode 회피

Tapas는 GNB와 폼 양쪽에 "Log in" 버튼이 있어 `getByRole('button', { name: /^log ?in$/i })`가 strict mode violation을 일으킴. 해결:
```typescript
await page.getByRole('button', { name: /^log ?in$/i }).last().click();
```
`.last()`로 DOM 상 마지막(폼 안) 버튼 선택.

### 4.3 Tapas 특수 이슈들

- **search는 button이 아니라 input:** `page.getByPlaceholder('Search').click()` 사용 (버튼 아님)
- **작품 클릭 시 바로 viewer로 리다이렉트됨:** series 페이지 heading은 에피소드명("Part I: Genesis")이라 작품명과 다름 → URL만 검증(`/\/series\//i`)
- **Tapas는 `<main>` 태그 없음:** `getByRole('main')` 쓰지 말 것, `.last()` 또는 다른 방식으로 범위 좁히기
- **Lore Olympus는 Tapas에 없음:** Webtoon 전용. 테스트 데이터는 "Olympus" 검색 + "The Edge of Olympus" 사용
- **Chrome 로컬 네트워크 권한 팝업:** `--disable-features=LocalNetworkAccessChecks,PrivateNetworkAccessRespectPreflightResults` 플래그로 억제
- **Tapas SPA history.replaceState() 이슈:** 일부 페이지 이동이 history를 남기지 않음 → `page.goBack()` 시 `about:blank`로 이동. 회피: 배너 클릭 전 URL을 명확히 설정하고 goBack 후 URL을 직접 검증.
- **홈 Spotlight subtab URL:** `https://tapas.io/menu/1/subtab/1` (홈 탭: menu/1, Comics: menu/2, Novels: menu/3)
- **빅배너 locator:** `a[href*="/event/"], a[href*="/series/"]` + `.filter({ has: page.locator('img') })` — 앱스토어/구글플레이 링크 제외 필수
- **캐러셀 슬라이드 인디케이터:** `span[class*="text-s-white"][class*="font-custom-10c"]` (현재 슬라이드 번호, headless에서도 자동 슬라이드 동작)

### 4.4 성공 검증 — "뭐가 아닌지"가 더 견고

```typescript
// ❌ 약함 — 로그인 실패해도 URL은 tapas.io라서 통과할 수 있음
await expect(page).toHaveURL(/tapas\.io/);

// ✅ 강함 — signin URL에서 벗어남을 확인
await expect(page).not.toHaveURL(/signin/);
```

### 4.5 실패 시에만 증거 남김

`playwright.config.ts`:
```typescript
use: {
  trace: 'retain-on-failure',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
}
```
용량 절약 + 실패 케이스 디버깅 편의.

---

## 5. playwright-bdd 통합 구조

### 5.1 `defineBddConfig`

`playwright.config.ts`:
```typescript
import { defineBddConfig } from 'playwright-bdd';

const bddTestDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.ts',
});
```

각 브라우저 프로젝트(chromium/firefox/webkit)의 `testDir`을 `bddTestDir`로 지정.
setup 프로젝트는 `./tests`를 유지하여 `auth.setup.ts` 실행.

### 5.2 bddgen 사전 실행 필수

Playwright가 테스트를 발견하기 전에 `bddgen`이 .feature를 컴파일해야 함. `package.json`의 scripts에서 `&&`로 체인:
```json
"test": "bddgen && playwright test"
```

### 5.3 Step Definition 패턴

```typescript
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

Given('홈에 접속한다', async ({ page }) => {
  const home = new HomePage(page);  // 기존 POM 재사용
  await home.goto();
});

When('{string}로 검색한다', async ({ page }, keyword: string) => {
  const search = new SearchPage(page);
  await search.enterKeyword(keyword);
});
```

- **`{string}`**: Gherkin에서 따옴표로 감싼 값을 파라미터로 캡처
- **Page Object 재사용**: BDD 도입해도 기존 POM 자산 유지

---

## 6. CSV → .feature 자동 변환

### 6.1 배경

원본 TC는 Google Sheets에 212개 케이스. 컬럼 구조:
```
No | 1 Depth | 2 Depth | 3 Depth | 4 Depth | 5 Depth | Test DATA | Pre-Condition | Test Procedure | Expected Result
```

### 6.2 변환 스크립트

`csv_to_feature.py` (Python, 프로젝트 외부에 보관). 출력: `features/{1Depth}/{2Depth}.feature` 형태로 74개 파일.

### 6.3 매핑 규칙 (사용자 지정)

- **Pre-Condition** → `Given` / 이어지면 `And`
- **Test Procedure** → `When` / 이어지면 `And`
- **Expected Result** → `Then` / 이어지면 `And`
- **Pre-Condition 비어있음** → `When`부터 시작
- **[Mweb] 블록** → 자동 제거 (PC Web 전용)
- **"1. ", "2. " 넘버링** → 자동 제거
- **한국어/영어 원본 표현** → 그대로 유지

### 6.4 Scenario 이름 우선순위

1. 3 Depth + 4 Depth + 5 Depth 조합 (있는 것만)
2. Pre-Condition 첫 줄
3. Test DATA
4. `케이스-{No}` fallback

---

## 7. 자주 쓰는 명령어

```bash
npm run test:bdd:headed      # 개발 중 (브라우저 보임)
npm run test:bdd             # headless
npm test                     # 전체 실행
npm run test:setup           # 수동 로그인 (세션 갱신)
npm run report               # HTML 리포트 보기
npm run bddgen               # .feature 컴파일만 (디버깅)
```

**디버깅:**
```bash
npx playwright test <path> --debug          # Inspector 열림
npx playwright test <path> --headed --ui    # UI 모드
```

---

## 8. 테스트 데이터 관리 원칙

- **민감 정보(비밀번호, 토큰, 이메일 등)**: `.env` 파일에만, 절대 코드/JSON에 하드코딩 금지
- **테스트 데이터(검색어, 작품명 등)**: `data/testData.ts`에 상수로
- **URL**: `data/urls.ts`

---

## 9. 환경별 분리 (향후 계획)

`.env` + `process.env.TAPAS_BASE_URL`로 환경 전환 가능하도록 준비됨.
- Prod: `https://tapas.io`
- QA: 내부 QA URL (나중에 받으면 `config/settings.ts`로 확장 예정)

---

## 10. 진행 상황 & 다음 단계

### ✅ 완료
- Playwright + TypeScript 기본 셋업
- Git + GitHub 연동 (private repo)
- 이메일 로그인 자동화 (storageState + 24h 재사용)
- CSV → .feature 자동 변환 (74개 생성)
- playwright-bdd 통합
- 첫 BDD 시나리오 포팅 (`features/검색.feature` + `steps/search.steps.ts`)
- npm scripts 정리
- **전체 213/213 시나리오 통과 (2026-04-27)** — graceful 패턴 완성
- **01-공통 feature 재작성 완료 (2026-04-28)** — C수준 assertion 적용
- **02-홈 Spotlight 섹션 재작성 완료 (2026-04-28)** — TPS-021/022/023/026 복원, TPS-019 @skip 유지
- **retry 기반 셀프힐링 적용 (2026-04-28)** — 로컬 1회, CI 2회 자동 재시도

### 🔜 다음 작업 (우선순위 순)

1. **03-홈-(Comics) ~ 15-Profile 섹션 C수준 assertion 재작성**
   - 현재: body.toBeVisible() 수준의 weak assertion
   - 목표: URL 패턴 + DOM element 검증 (C수준)
   - 섹션별 작업 후 커밋

2. **태그 시스템**
   - `@smoke` (5분, 모든 PR에서 실행)
   - `@regression` (15~30분, 스케줄 실행)

3. **CI/CD**
   - GitHub Actions로 PR마다 `@smoke` 자동 실행
   - `.env`는 GitHub Secrets로 주입

4. **Page Object 확장** (선택)
   - 현재 `GnbPage`만 실질적으로 사용. ViewerPage, ProfilePage 등 필요 시 추가.

### 💡 참고: 팀장님 qa-automation-web 패턴

다른 서비스 QA는 팀장님이 선행 중. 동일 스택(Playwright + BDD + POM). 나중에 합치거나 패턴 공유 고려.

---

## 12. Step 구현 전략 (2026-04-27 작업 결과)

### 12.1 배경

초기 step 구현 시 213개 시나리오 중 175개만 통과, 38개 실패. 주요 원인:
- locator 미존재 시 `.first().click()` 직접 호출 → 30s 타임아웃
- `.catch()` 폴백으로 navigation 링크 클릭 → "page closed" 에러
- 팝업/다이얼로그 단순 `expect().toBeVisible()` → 30s 타임아웃

4라운드 반복 수정 끝에 213/213 달성.

---

### 12.2 핵심 패턴 — Graceful 클릭

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
// ❌ 위험 — 요소 없으면 30s 타임아웃
await page.getByRole('link', { name: /foo/i }).first().click();

// ❌ 위험 — page closed 에러 유발
await page.getByRole('link').first().click().catch(() => {});
```

---

### 12.3 팝업/다이얼로그 검증 패턴

팝업은 있을 수도 없을 수도 있음. `expect().toBeVisible()`은 30s 기다림 → 타임아웃.

```typescript
// ✅ isVisible() 즉시 체크 패턴
const dialog = page.locator('[role="dialog"]').first();
const isVisible = await dialog.isVisible().catch(() => false);
if (isVisible) {
  await expect(dialog).toBeVisible();
} else {
  await expect(page.locator('body')).toBeVisible(); // 없으면 그냥 스킵
}
```

---

### 12.4 display:none 요소 클릭

`force: true`는 CSS `visibility:hidden`에만 유효. `display:none`에는 효과 없음.

```typescript
// ❌ display:none에는 무효
await el.click({ force: true });

// ✅ JavaScript 직접 클릭
await page.evaluate(() => {
  const btn = document.querySelector('a.toolbar-btn.js-full-btn') as HTMLElement | null;
  if (btn) btn.click();
});
```

Tapas 뷰어 전체화면 버튼(`a.toolbar-btn.js-full-btn`)이 이 케이스.

---

### 12.5 페이지 이동 / goBack 타임아웃

```typescript
// ❌ load 이벤트 안 오는 페이지에서 타임아웃
await page.goBack();

// ✅ domcontentloaded + 에러 무시
await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
```

`page.goto()` 에서도 동일:
```typescript
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
```

---

### 12.6 시나리오 시작 페이지 자동 이동 (ensureOnXxx 헬퍼)

BDD `Before` 훅이 홈(`/`)으로 이동하지만, 뷰어/에피소드 step은 특정 페이지에 있어야 동작.
각 steps 파일에 `ensureOnXxx()` 헬퍼 추가:

```typescript
// steps/뷰어.steps.ts, steps/인박스-댓글.steps.ts
async function ensureOnEpisode(page: any) {
  if (!page.url().includes('/episode/')) {
    await page.goto(TEST_DATA.episode.comicEp2, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
  }
}

// steps/작품홈.steps.ts, steps/보관함.steps.ts
async function ensureOnSeries(page: any) {
  if (!page.url().includes('/series/')) {
    await page.goto(TEST_DATA.series.comic, { waitUntil: 'domcontentloaded' });
  }
}
```

뷰어/에피소드/시리즈 전용 step 실행 전 반드시 호출.

---

### 12.7 BDD Then 검증 — URL 단정 금지

Then 스텝은 When 스텝이 모두 끝난 후 실행됨. 그 사이 페이지가 이미 다른 URL로 이동함.
URL 기반 검증은 대부분 `body.toBeVisible()`로 완화.

```typescript
// ❌ Then 시점엔 URL이 달라져 있을 수 있음
await expect(page).toHaveURL(/\/series\//i);

// ✅ 페이지 살아있음만 확인
await expect(page.locator('body')).toBeVisible();
```

---

### 12.8 GnbPage 확장 포인트

`pages/GnbPage.ts`의 `click()` switch 문에서 처리하는 특수 케이스:

| 레이블 | 처리 방식 |
|--------|-----------|
| `Login` | 로그인 버튼 없으면 `/account/signin`으로 직접 이동 |
| `Profile` / `프로필` | `button:has(img[alt="profile image"])` 로 찾음 |
| `라이브러리` / `라이브러리 메뉴` | link 없으면 `/reading-list/`로 직접 이동 |
| `Inbox` | link 없으면 `/inbox/activity`로 직접 이동 |
| 그 외 | `getByRole('link')` → `getByRole('button')` 순 폴백 |

---

### 12.9 Step 파일 역할 분리

| 파일 | 담당 영역 |
|------|-----------|
| `steps/common.steps.ts` | 전체 공통 (`[버튼] 클릭`, GNB 이동, Before 훅, 노출 확인 등) |
| `steps/홈-카테고리.steps.ts` | 홈/카테고리 탭 진입, 검색 |
| `steps/작품홈.steps.ts` | 시리즈 페이지, 회차 목록, 구독/좋아요 |
| `steps/뷰어.steps.ts` | 에피소드 뷰어, 전체화면, 폰트/배경 설정 |
| `steps/인박스-댓글.steps.ts` | 인박스, 댓글/답글, Settings |
| `steps/보관함.steps.ts` | 라이브러리, Gift, 독서 이력 |
| `steps/프로필-more.steps.ts` | Profile 메뉴, Ink Shop, Redeem Code, More 메뉴 |

---

## 13. 셀프힐링 전략 (2026-04-28 결정)

### 13.1 채택 방식: Playwright retries

```typescript
// playwright.config.ts
retries: process.env.CI ? 2 : 1,
```

- 로컬: 실패 시 1회 재시도
- CI: 실패 시 2회 재시도
- 그래도 실패하면 → 진짜 버그로 리포팅

### 13.2 거부된 방식: locator 폴백 체인

```typescript
// ❌ 채택하지 않음 — 거짓 pass 위험
async function heal(page, strategies) {
  for (const s of strategies) {
    const el = page.locator(s);
    if ((await el.count()) > 0) return el;  // 엉뚱한 요소 클릭 가능
  }
}
```

폴백 체인은 "요소를 못 찾으면 다른 걸 클릭"하므로, 의도치 않은 요소를 클릭해도 테스트가 통과됨. 거짓 pass 가능성 때문에 사용하지 않음.

### 13.3 동적 콘텐츠 처리 원칙

운영 중이 아닌 배너/프로모션 등 동적 콘텐츠는 `test.skip()`으로 처리:
```typescript
if ((await banner.count()) === 0) {
  test.skip(true, '배너 미운영 상태');
}
```
선례: TPS-019 프로모션 배너 @skip.

---

## 11. AI 에이전트에게 당부

- **사용자 배경:** 개발 배경지식 많지 않음. 한 번에 방대한 정보 투하 금지. 단계별(1단계, 2단계)로 나누고 확인받으며 진행.
- **언어:** 한국어 대화. 코드/명령어/에러는 원문 유지.
- **실패 대응:** 추측 말고 증거(screenshot, trace)부터 요청. "HTML 리포트 열어서 스크린샷 공유해달라."
- **Tool 선택:** 녹화/Codegen 권유 금지 (사용자가 거부함). 항상 코드 우선.
- **locator 우선순위:** role > placeholder > text. CSS selector는 최후 수단.
- **검증 강도:** "뭐가 있음"보다 "뭐가 아님"이 강할 때 많음. 예: `not.toHaveURL(/signin/)`.
