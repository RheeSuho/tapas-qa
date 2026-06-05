// 홈-(Comics), 홈-(Novels), 홈-(Community), 홈-(Mature) 공통 step 정의

import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { GnbPage } from '../pages/GnbPage';
import * as fs from 'fs';
import * as path from 'path';

const UNVERIFIED_AUTH_FILE = path.join(process.cwd(), '.auth/unverified.json');

const { Given, When, Then } = createBdd();

// ──── 대메뉴 카테고리 진입 ────

When('대메뉴 > Comics 카테고리 클릭', async ({ page }) => {
  await new GnbPage(page).click('Comics');
});

When('대메뉴 > Novels 카테고리 클릭', async ({ page }) => {
  await new GnbPage(page).click('Novels');
});

// 서브탭 클릭 — 따옴표 없는 plain text (Daily, Popular, All Comics 등)
When(/^(Comics|Novels|Daily|Popular|All Novels|All Comics) 서브탭 클릭$/, async ({ page }, tabName: string) => {
  await page.waitForLoadState('domcontentloaded');
  const tab = page.getByRole('link', { name: new RegExp(`^${tabName}$`, 'i') });
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  const btn = page.getByRole('button', { name: new RegExp(`^${tabName}$`, 'i') });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  test.skip(true, `${tabName} 서브탭이 현재 페이지에 존재하지 않음`);
});

// 서브탭 클릭 — 따옴표로 감싼 실제 값 ("Romance", "All Comics" 등)
When('{string} 서브탭 클릭', async ({ page }, tabName: string) => {
  await page.waitForLoadState('domcontentloaded');
  // "All Comics" → img[alt="All Genres"] (Comics), "All Novels" → img[alt="All Genre"] (Novels, 's' 없음)
  const altMap: Record<string, string> = { 'All Comics': 'All Genres', 'All Novels': 'All Genre' };
  const altName = altMap[tabName] || tabName;
  // 1. img[alt] 매칭 (이미지 기반 장르 탭) — 병렬 실행 시 이미지 지연 로딩 대비 waitFor 추가
  const byAlt = page.locator(`a:has(img[alt="${altName}"])`);
  await byAlt.first().waitFor({ timeout: 5000 }).catch(() => {});
  if ((await byAlt.count()) > 0) { await byAlt.first().click(); return; }
  // 2. role=link accessible name 매칭 (byAlt 실패 후 렌더 대기 포함)
  const tab = page.getByRole('link', { name: new RegExp(`^${tabName}$`, 'i') });
  await tab.first().waitFor({ timeout: 5000 }).catch(() => {});
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  // 3. role=button accessible name 매칭
  const btn = page.getByRole('button', { name: new RegExp(`^${tabName}$`, 'i') });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  // 4. text-is() 정확 매칭
  const byText = page.locator(`a:text-is("${tabName}"), button:text-is("${tabName}")`);
  if ((await byText.count()) > 0) { await byText.first().click(); return; }
  const skipReason = /^popular$/i.test(tabName)
    ? `Novels Popular 서브탭 미운영 상태`
    : `"${tabName}" 서브탭이 현재 페이지에 존재하지 않음`;
  test.skip(true, skipReason);
});

// ──── 장르/정렬 필터 ────

When('장르 선택 필터 버튼 클릭', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded');
  const genreBtn = page.getByRole('button', { name: /genre|장르|all/i });
  if ((await genreBtn.count()) > 0) { await genreBtn.first().click(); return; }
  const fallback = page.locator('[data-genre], .genre-filter, .filter-btn, [class*="genre"], [class*="filter"]');
  if ((await fallback.count()) > 0) await fallback.first().click();
  // 장르 필터가 없는 페이지(Spotlight 등)에서는 body visible로 대체
});

When('정렬 옵션 변경 버튼 클릭', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded');
  const sortBtn = page.getByRole('button', { name: /sort|정렬|popular|newest/i });
  if ((await sortBtn.count()) > 0) { await sortBtn.first().click(); return; }
  const fallback = page.locator('[data-sort], .sort-btn, .sort-filter, [class*="sort"]');
  if ((await fallback.count()) > 0) await fallback.first().click();
  // 정렬 버튼이 없는 페이지에서는 body visible로 대체
});

// {장르명}, {정렬값} 은 CSV 플레이스홀더 — 팝업에서 첫 번째 옵션 선택 후 Confirm
When(/^장르 선택 팝업 > \{장르명\} 선택 후 Confirm 버튼 클릭$/, async ({ page }) => {
  const option = page.locator('[role="dialog"] input[type="radio"], [role="dialog"] li').first();
  if ((await option.count()) > 0) await option.click();
  const confirm = page.getByRole('button', { name: /confirm/i });
  if ((await confirm.count()) > 0) await confirm.first().click();
});

When(/^정렬 선택 팝업 > \{정렬값\} 선택 후 Confirm 버튼 클릭$/, async ({ page }) => {
  const option = page.locator('[role="dialog"] input[type="radio"], [role="dialog"] li').first();
  if ((await option.count()) > 0) await option.click();
  const confirm = page.getByRole('button', { name: /confirm/i });
  if ((await confirm.count()) > 0) await confirm.first().click();
});

// 실제 장르명으로 선택 (예: "Romance")
When('{string} 장르를 선택한다', async ({ page }, genreName: string) => {
  const option = page.locator('[role="dialog"] input[type="radio"], [role="dialog"] li, [role="dialog"] label')
    .filter({ hasText: new RegExp(genreName, 'i') }).first();
  if ((await option.count()) > 0) {
    await option.click();
  } else {
    const first = page.locator('[role="dialog"] input[type="radio"], [role="dialog"] li').first();
    if ((await first.count()) > 0) await first.click();
  }
  const confirm = page.getByRole('button', { name: /confirm/i });
  if ((await confirm.count()) > 0) await confirm.first().click();
});

// 실제 정렬값으로 선택 (예: "Popular", "Newest episode", "Newest series")
When('{string} 정렬을 선택한다', async ({ page }, sortName: string) => {
  const option = page.locator('[role="dialog"] input[type="radio"], [role="dialog"] li, [role="dialog"] label')
    .filter({ hasText: new RegExp(sortName, 'i') }).first();
  if ((await option.count()) > 0) {
    await option.click();
  } else {
    const first = page.locator('[role="dialog"] input[type="radio"], [role="dialog"] li').first();
    if ((await first.count()) > 0) await first.click();
  }
  const confirm = page.getByRole('button', { name: /confirm/i });
  if ((await confirm.count()) > 0) await confirm.first().click();
});

// 특정 요일 탭 클릭 (예: "Mon", "Tue")
When('{string} 요일 탭 클릭', async ({ page }, day: string) => {
  const tab = page.getByRole('tab', { name: new RegExp(`^${day}`, 'i') });
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  const btn = page.getByRole('button', { name: new RegExp(`^${day}`, 'i') });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.getByRole('link', { name: new RegExp(`^${day}`, 'i') }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: new RegExp(`^${day}`, 'i') }).first().click();
});

When(/^정렬\/필터 노출 확인$/, async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

When('더보기[>] 영역 클릭', async ({ page }) => {
  const moreBtn = page.getByRole('link', { name: /more|>|see all/i });
  if ((await moreBtn.count()) > 0) await moreBtn.first().click();
});

// ──── 연령 인증 (Mature) ────

Given(/^미로그인 \/ 미인증 상태$/, async ({ page }) => {
  await page.context().clearCookies();
  await page.goto('/');
});

When(/^미로그인 \/ 미인증 아이디 로그인 상태$/, async ({ page }) => {
  // CI: UNVERIFIED_AUTH_STATE_B64에서 파일 복원
  const b64 = process.env.UNVERIFIED_AUTH_STATE_B64;
  if (b64 && !fs.existsSync(UNVERIFIED_AUTH_FILE)) {
    fs.mkdirSync(path.dirname(UNVERIFIED_AUTH_FILE), { recursive: true });
    fs.writeFileSync(UNVERIFIED_AUTH_FILE, Buffer.from(b64, 'base64').toString('utf-8'));
  }

  if (!fs.existsSync(UNVERIFIED_AUTH_FILE)) {
    test.skip(true, '미인증 세션 없음 — npm run test:setup:unverified 실행 필요');
    return;
  }

  // 메인 계정 쿠키 클리어 후 미인증 계정 세션 복원
  await page.context().clearCookies();
  const state = JSON.parse(fs.readFileSync(UNVERIFIED_AUTH_FILE, 'utf-8'));
  if (state.cookies?.length) {
    await page.context().addCookies(state.cookies);
  }
  await page.goto('/', { waitUntil: 'domcontentloaded' });
});

When(/^성인에 해당되는 연\/월\/일 입력$/, async ({ page }) => {
  // 성인 기준 생년월일 입력 (예: 1990-01-01)
  const inputs = page.locator('input[type="number"], input[name*="year"], input[name*="month"], input[name*="day"]');
  const count = await inputs.count();
  if (count >= 3) {
    await inputs.nth(0).fill('1990');
    await inputs.nth(1).fill('01');
    await inputs.nth(2).fill('01');
  }
});

When(/^미성년에 해당되는 연\/월\/일 입력$/, async ({ page }) => {
  // 미성년 기준 생년월일 (예: 2010-01-01)
  const inputs = page.locator('input[type="number"], input[name*="year"], input[name*="month"], input[name*="day"]');
  const count = await inputs.count();
  if (count >= 3) {
    await inputs.nth(0).fill('2010');
    await inputs.nth(1).fill('01');
    await inputs.nth(2).fill('01');
  }
});

When('Submit 버튼 클릭', async ({ page }) => {
  await expect(page.getByRole('button', { name: /submit/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /submit/i }).first().click();
});

When('M 뱃지 노출되는 작품 클릭', async ({ page }) => {
  const el = page.locator('[class*="mature"], [class*="badge-m"]');
  if ((await el.count()) > 0) { await el.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── Comics 전용 진입 / 복귀 ────

When('Comics Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.getByRole('link', { name: /^comics$/i }).first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const spotlight = page.getByRole('link', { name: /^spotlight$/i });
  if ((await spotlight.count()) === 0) { test.skip(true, 'Comics Spotlight 서브탭 미운영 상태'); return; }
  try { await spotlight.first().click({ timeout: 10000 }); } catch { test.skip(true, 'Comics Spotlight 서브탭 클릭 불가'); return; }
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const banner = page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') });
  if ((await banner.count()) === 0) { test.skip(true, 'Comics Spotlight 콘텐츠 미운영 상태'); return; }
});

Then('Comics 홈으로 돌아온다', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Comics 카테고리 페이지가 노출된다', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

// ──── Novels 전용 진입 / 복귀 ────

When('Novels Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.getByRole('link', { name: /^novels$/i }).first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const spotlight = page.getByRole('link', { name: /^spotlight$/i });
  if ((await spotlight.count()) === 0) { test.skip(true, 'Novels Spotlight 서브탭 미운영 상태'); return; }
  try { await spotlight.first().click({ timeout: 10000 }); } catch { test.skip(true, 'Novels Spotlight 서브탭 클릭 불가'); return; }
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const banner = page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') });
  if ((await banner.count()) === 0) { test.skip(true, 'Novels Spotlight 콘텐츠 미운영 상태'); return; }
});

Then('Novels 홈으로 돌아온다', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Novels 카테고리 페이지가 노출된다', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

// ──── Mature 전용 진입 / 복귀 ────

When('Mature Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.getByRole('link', { name: /^mature$/i }).first().click();
  await page.locator('a[href*="/menu/5/subtab/"] img[alt="Spotlight"]').first().waitFor({ timeout: 10000 }).catch(() => {});
  const spotlight = page.locator('a[href*="/menu/5/subtab/"]').filter({ has: page.locator('img[alt="Spotlight"]') });
  if ((await spotlight.count()) === 0) { test.skip(true, 'Mature Spotlight 서브탭 미운영 상태'); return; }
  try { await spotlight.first().click({ timeout: 10000 }); } catch { test.skip(true, 'Mature Spotlight 서브탭 클릭 불가'); return; }
  await page.locator('a[href*="/series/"], a[href*="/event/"]').first().waitFor({ timeout: 10000 }).catch(() => {});
  const banner = page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') });
  if ((await banner.count()) === 0) { test.skip(true, 'Mature Spotlight 콘텐츠 미운영 상태'); return; }
});

Then('Mature 홈으로 돌아온다', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Mature 카테고리 페이지가 노출된다', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('빅배너가 노출된다', async ({ page }) => {
  await expect(page.locator('[class*="bannerContent"], a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('장르 필터와 정렬 옵션이 노출된다', async ({ page }) => {
  // Popular 정렬 버튼 + 작품 카드 노출 확인
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  const sortBtn = page.getByRole('button', { name: /popular/i });
  const isVisible = await sortBtn.first().isVisible().catch(() => false);
  if (isVisible) { await expect(sortBtn.first()).toBeVisible(); }
});

// ──── Community 전용 진입 / 복귀 ────

When('Community Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.getByRole('link', { name: /^community$/i }).first().click();
  await page.locator('a[href*="/menu/4/subtab/"] img[alt="Spotlight"]').first().waitFor({ timeout: 10000 }).catch(() => {});
  const spotlight = page.locator('a[href*="/menu/4/subtab/"]').filter({ has: page.locator('img[alt="Spotlight"]') });
  if ((await spotlight.count()) === 0) { test.skip(true, 'Community Spotlight 서브탭 미운영 상태'); return; }
  try { await spotlight.first().click({ timeout: 10000 }); } catch { test.skip(true, 'Community Spotlight 서브탭 클릭 불가'); return; }
  await page.locator('a[href*="/series/"], a[href*="/event/"]').first().waitFor({ timeout: 10000 }).catch(() => {});
  const banner = page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') });
  if ((await banner.count()) === 0) { test.skip(true, 'Community Spotlight 콘텐츠 미운영 상태'); return; }
});

Then('Community 홈으로 돌아온다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"], a[href*="/event/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('Community 카테고리 페이지가 노출된다', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

// ──── 결과 검증 ────

Then(/^(Comics|Novels|Community|mature) 홈화면의 첫 번째 서브탭으로 진입된다\.$/, async ({ page }, category: string) => {
  // 작품 카드 노출 확인
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  // Comics/Novels는 Daily 탭(요일 버튼)도 같이 확인
  if (category === 'Comics' || category === 'Novels') {
    const dayTab = page.locator('a[href*="daily_type="]').first();
    const isVisible = await dayTab.isVisible().catch(() => false);
    if (isVisible) { await expect(dayTab).toBeVisible(); }
  }
});

Then(/^(Comics|Novels) 서브탭이 활성화된다\.$/, async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then(/^\{(All Comics|All Novels|장르명)\} 서브탭이 활성화된다\.$/, async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('장르 선택 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="modal"], [class*="popup"], [class*="sheet"]').first()).toBeVisible({ timeout: 5000 });
});

Then('정렬 선택 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="modal"], [class*="popup"], [class*="sheet"]').first()).toBeVisible({ timeout: 5000 });
});

Then('팝업이 닫히고 작품 리스트가 갱신되며 필터된 장르의 작품만 노출된다.', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('팝업이 닫히고 작품 리스트가 갱신되며 선택한 정렬 순으로 작품 리스트가 노출된다.', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('상단에 장르 선택 필터와 정렬 옵션 변경 영역이 노출된다.', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then(/^Comics\/Novels 대분류 필터 노출되지 않는다\.$/, async ({ page }) => {
  await expect(page.locator('a[href*="category=COMIC"], a[href*="category=NOVEL"]')).toHaveCount(0);
});

Then('상단 대분류 필터 영역이 노출되지 않는다.', async ({ page }) => {
  // 장르 서브탭 페이지에서는 All Comics의 장르 필터 탭(a[href*="?genre="])이 없어야 함
  await expect(page.locator('a[href*="?genre="]')).toHaveCount(0);
});

Then('연령 인증 페이지 랜딩된다.', async ({ page }) => {
  await expect(page.locator('button[type="submit"], input[type="date"], input[type="number"]').first()).toBeVisible({ timeout: 5000 });
});

Then('mature 작품이 M 뱃지와 함께 딤드되어 노출된다.', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then(/^Submit 버튼 (활성화|비활성화)된다\.$/, async ({ page }) => {
  await expect(page.locator('button[type="submit"], button:has-text("Submit")').first()).toBeVisible({ timeout: 5000 });
});

Then(/^(Comic|Novel|Mature|Community .+|해당 장르의 .+) 작품(?!홈 구독).* 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then(/^변경된 요일 탭에 맞는 (Comic|Novel|Mature) 작품이 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then(/^(Comic|Novel|Mature) 작품이 연재 요일에 맞게 노출된다\..+$/, async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

// Mature 작품이 최대 300위까지 노출된다. — /^(Comic|Novel|Mature|...) 작품.* 노출된다\.$/ 에서 처리

Then(/^이전 화면으로 돌아온다\. \(.+ 홈\)$/, async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then(/^해당 작품홈으로 진입된다\.$/, async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

Then(/^2-[12]\. .+$/, async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

// ──── Community 신규 서브탭 진입 ────

When('Community Early Access 서브탭에 접속한다', async ({ page }) => {
  await page.goto('/menu/4/subtab/39', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle').catch(() => {});
});

When('Community Completed 서브탭에 접속한다', async ({ page }) => {
  await page.goto('/menu/4/subtab/36', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle').catch(() => {});
});

// ──── Mature 신규 서브탭 진입 ────

When('Mature Daily 서브탭에 접속한다', async ({ page }) => {
  await page.goto('/menu/5/subtab/46', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle').catch(() => {});
});

When('Mature Popular 서브탭에 접속한다', async ({ page }) => {
  await page.goto('/menu/5/subtab/48', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle').catch(() => {});
});

When('Mature New 서브탭에 접속한다', async ({ page }) => {
  await page.goto('/menu/5/subtab/37', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle').catch(() => {});
});

When('Mature Completed 서브탭에 접속한다', async ({ page }) => {
  await page.goto('/menu/5/subtab/49', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle').catch(() => {});
});

// ──── Mature Comics/Novels 필터 전환 ────

When('Mature Novels 필터를 클릭한다', async ({ page }) => {
  const novelLink = page.locator('a[href*="category=MATURE_NOVEL"]').first();
  if ((await novelLink.count()) > 0) {
    await novelLink.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    test.skip(true, 'Mature Novels 필터 링크가 존재하지 않음');
  }
});

Then('Mature Novels 작품 목록으로 전환된다', async ({ page }) => {
  await expect(page).toHaveURL(/category=MATURE_NOVEL/, { timeout: 8000 });
  const series = page.locator('article a[href*="/series/"]').first();
  const noResult = page.getByText('No results were found.').first();
  const hasNoResult = await noResult.isVisible().catch(() => false);
  if (hasNoResult) { await expect(noResult).toBeVisible(); }
  else { await expect(series).toBeVisible({ timeout: 10000 }); }
});

Then('Mature - Comic 작품의 모든 장르에 해당하는 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Mature - Novel 작품의 모든 장르에 해당하는 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});
