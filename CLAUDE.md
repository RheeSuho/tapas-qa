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

### 🔜 다음 작업 (우선순위 순)

1. **나머지 .feature 파일 BDD로 연결**
   - 74개 중 쉬운 것부터. 로그인 이미 셋업돼 있으니 인증 필요 시나리오도 가능.
   - 공통 step (예: "버튼 클릭", "페이지 이동" 등)을 `steps/common.steps.ts`로 분리하는 것 추천.

2. **Page Object 확장**
   - 현재 HomePage, SearchPage만 존재. LoginPage는 auth.setup.ts가 대체.
   - ViewerPage, ProfilePage, LibraryPage 등 추가 필요.

3. **공통 Step + Fixtures**
   - playwright-bdd의 fixture 기능으로 Page Object 자동 주입
   - 매 step에서 `new HomePage(page)` 반복 제거

4. **태그 시스템**
   - `@smoke` (5분, 모든 PR에서 실행)
   - `@regression` (15~30분, 스케줄 실행)

5. **CI/CD**
   - GitHub Actions로 PR마다 `@smoke` 자동 실행
   - `.env`는 GitHub Secrets로 주입

6. **팀장님 프로젝트 패턴 수렴** (선택)
   - pnpm + fnm으로 전환
   - CLAUDE.md + PLAN.md 문서 체계

### 💡 참고: 팀장님 qa-automation-web 패턴

다른 서비스 QA는 팀장님이 선행 중. 동일 스택(Playwright + BDD + POM). 나중에 합치거나 패턴 공유 고려.

---

## 11. AI 에이전트에게 당부

- **사용자 배경:** 개발 배경지식 많지 않음. 한 번에 방대한 정보 투하 금지. 단계별(1단계, 2단계)로 나누고 확인받으며 진행.
- **언어:** 한국어 대화. 코드/명령어/에러는 원문 유지.
- **실패 대응:** 추측 말고 증거(screenshot, trace)부터 요청. "HTML 리포트 열어서 스크린샷 공유해달라."
- **Tool 선택:** 녹화/Codegen 권유 금지 (사용자가 거부함). 항상 코드 우선.
- **locator 우선순위:** role > placeholder > text. CSS selector는 최후 수단.
- **검증 강도:** "뭐가 있음"보다 "뭐가 아님"이 강할 때 많음. 예: `not.toHaveURL(/signin/)`.
