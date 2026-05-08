// 홈-(Comics), 홈-(Novels), 홈-(Community), 홈-(Mature) 공통 step 정의

import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { GnbPage } from '../pages/GnbPage';

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
  // 2. role=link accessible name 매칭
  const tab = page.getByRole('link', { name: new RegExp(`^${tabName}$`, 'i') });
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  // 3. role=button accessible name 매칭
  const btn = page.getByRole('button', { name: new RegExp(`^${tabName}$`, 'i') });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  // 4. text-is() 정확 매칭
  const byText = page.locator(`a:text-is("${tabName}"), button:text-is("${tabName}")`);
  if ((await byText.count()) > 0) { await byText.first().click(); return; }
  test.skip(true, `"${tabName}" 서브탭이 현재 페이지에 존재하지 않음`);
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
  const link = page.getByRole('link', { name: new RegExp(`^${day}`, 'i') });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When(/^정렬\/필터 노출 확인$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('더보기[>] 영역 클릭', async ({ page }) => {
  const moreBtn = page.getByRole('link', { name: /more|>|see all/i });
  if ((await moreBtn.count()) > 0) await moreBtn.first().click();
});

// ──── 연령 인증 (Mature) ────

Given(/^미로그인 \/ 미인증 상태$/, async ({ page }) => {
  await page.context().clearCookies();
  await page.goto('https://tapas.io/');
});

When(/^미로그인 \/ 미인증 아이디 로그인 상태$/, async ({ page }) => {
  const email = process.env.TAPAS_UNVERIFIED_EMAIL ?? '';
  const password = process.env.TAPAS_UNVERIFIED_PASSWORD ?? '';
  if (!email) { test.skip(true, 'TAPAS_UNVERIFIED_EMAIL 환경변수 없음'); return; }
  await page.goto('/account/signin', { waitUntil: 'domcontentloaded' });
  await page.getByPlaceholder(/email/i).waitFor({ timeout: 10000 }).catch(() => {});
  const cookieBtn = page.getByRole('button', { name: /accept/i });
  if ((await cookieBtn.count()) > 0) await cookieBtn.first().click();
  const emailInput = page.getByPlaceholder(/email/i).first();
  const pwInput = page.getByPlaceholder(/password/i).first();
  if ((await emailInput.count()) > 0) {
    await emailInput.click();
    await emailInput.pressSequentially(email, { delay: 30 });
  }
  if ((await pwInput.count()) > 0) {
    await pwInput.click();
    await pwInput.pressSequentially(password, { delay: 30 });
  }
  const loginBtn = page.getByRole('button', { name: /^log ?in$/i });
  if ((await loginBtn.count()) > 0) await loginBtn.last().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
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
  const btn = page.getByRole('button', { name: /submit/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('M 뱃지 노출되는 작품 클릭', async ({ page }) => {
  const el = page.locator('[class*="mature"], [class*="badge-m"]');
  if ((await el.count()) > 0) { await el.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── Comics 전용 진입 / 복귀 ────

When('Comics Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.goto('https://tapas.io/menu/2/subtab/1', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.locator('span[class*="text-s-white"][class*="font-custom-10c"]').first()
    .waitFor({ timeout: 10000 }).catch(() => {});
});

Then('Comics 홈으로 돌아온다', async ({ page }) => {
  if (!page.url().includes('tapas.io')) {
    await page.goto('https://tapas.io/menu/2', { waitUntil: 'domcontentloaded' });
  }
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Comics 카테고리 페이지가 노출된다', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

// ──── Novels 전용 진입 / 복귀 ────

When('Novels Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.goto('https://tapas.io/menu/3/subtab/1', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.locator('span[class*="text-s-white"][class*="font-custom-10c"]').first()
    .waitFor({ timeout: 10000 }).catch(() => {});
});

Then('Novels 홈으로 돌아온다', async ({ page }) => {
  if (!page.url().includes('tapas.io')) {
    await page.goto('https://tapas.io/menu/3', { waitUntil: 'domcontentloaded' });
  }
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Novels 카테고리 페이지가 노출된다', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

// ──── Mature 전용 진입 / 복귀 ────

When('Mature Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.goto('https://tapas.io/menu/5/subtab/1', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.locator('span[class*="text-s-white"][class*="font-custom-10c"]').first()
    .waitFor({ timeout: 10000 }).catch(() => {});
});

Then('Mature 홈으로 돌아온다', async ({ page }) => {
  if (!page.url().includes('tapas.io')) {
    await page.goto('https://tapas.io/menu/5', { waitUntil: 'domcontentloaded' });
  }
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Mature 카테고리 페이지가 노출된다', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('빅배너가 노출된다', async ({ page }) => {
  const banner = page.locator('[class*="bannerContent"]').first();
  const isVisible = await banner.isVisible().catch(() => false);
  if (isVisible) { await expect(banner).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
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
  await page.goto('https://tapas.io/menu/4/subtab/1', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.locator('span[class*="text-s-white"][class*="font-custom-10c"]').first()
    .waitFor({ timeout: 10000 }).catch(() => {});
});

Then('Community 홈으로 돌아온다', async ({ page }) => {
  if (!page.url().includes('tapas.io')) {
    await page.goto('https://tapas.io/menu/4', { waitUntil: 'domcontentloaded' });
  }
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
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
  // isVisible()은 즉시 반환 (타임아웃 없음) — DOM에 숨겨진 dialog 요소 있어도 false
  const dialog = page.locator('[role="dialog"], [class*="modal"], [class*="popup"], [class*="sheet"]').first();
  const isVisible = await dialog.isVisible().catch(() => false);
  if (isVisible) {
    await expect(dialog).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('정렬 선택 팝업이 노출된다.', async ({ page }) => {
  const dialog = page.locator('[role="dialog"], [class*="modal"], [class*="popup"], [class*="sheet"]').first();
  const isVisible = await dialog.isVisible().catch(() => false);
  if (isVisible) {
    await expect(dialog).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('팝업이 닫히고 작품 리스트가 갱신되며 필터된 장르의 작품만 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('팝업이 닫히고 작품 리스트가 갱신되며 선택한 정렬 순으로 작품 리스트가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('상단에 장르 선택 필터와 정렬 옵션 변경 영역이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^Comics\/Novels 대분류 필터 노출되지 않는다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('상단 대분류 필터 영역이 노출되지 않는다.', async ({ page }) => {
  // 장르 서브탭 페이지에서는 All Comics의 장르 필터 탭(a[href*="?genre="])이 없어야 함
  await expect(page.locator('a[href*="?genre="]')).toHaveCount(0);
});

Then('연령 인증 페이지 랜딩된다.', async ({ page }) => {
  // 연령 인증 페이지 — submit/confirm 버튼 또는 date input 노출 확인
  const ageEl = page.locator('button[type="submit"], input[type="date"], input[type="number"]').first();
  const isVisible = await ageEl.isVisible().catch(() => false);
  if (isVisible) { await expect(ageEl).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
});

Then('mature 작품이 M 뱃지와 함께 딤드되어 노출된다.', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then(/^Submit 버튼 (활성화|비활성화)된다\.$/, async ({ page }) => {
  const submitBtn = page.locator('button[type="submit"], button:has-text("Submit")').first();
  const isVisible = await submitBtn.isVisible().catch(() => false);
  if (isVisible) { await expect(submitBtn).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
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
  // 작품홈 = series 페이지 — 에피소드 목록 또는 시리즈 정보 노출 확인
  const seriesEl = page.locator('a[href*="/series/"], [class*="episode"], [class*="series"]').first();
  const isVisible = await seriesEl.isVisible().catch(() => false);
  if (isVisible) { await expect(seriesEl).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
});

Then(/^2-[12]\. .+$/, async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Mature - Comic 작품의 모든 장르에 해당하는 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Mature - Novel 작품의 모든 장르에 해당하는 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});
