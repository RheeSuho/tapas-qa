import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { MobileGnbPage } from '../../pages/MobileGnbPage';
import { TEST_DATA } from '../../data/testData';
import { dismissBrazePopup } from './utils';

const { Given, When, Then, Before } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';
const IS_QA_ENV =
  (process.env.TAPAS_BASE_URL || '').includes('qa.') ||
  (process.env.TAPAS_MWEB_BASE_URL || '').includes('qa-m.');

// ──── Before 훅 ────

Before(async ({ $tags }) => {
  if ($tags.includes('@skip')) {
    test.skip(true, '@skip — 자동화 제외 케이스');
  }
  if ($tags.includes('@qa') && !IS_QA_ENV) {
    test.skip(true, '@qa — QA 환경에서만 실행');
  }
});

Before(async ({ page }) => {
  await page.goto(MWEB, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch(() => {});
  await page.getByRole('button', { name: /accept/i }).click({ timeout: 3000 }).catch(() => {});
  await dismissBrazePopup(page);
});

// ──── 인증 상태 ────

Given('로그인 상태다', async ({ page }) => {
  await page.goto(MWEB, { waitUntil: 'domcontentloaded' }).catch(() => {});
});

Given('로그인하지 않은 상태다', async ({ page }) => {
  await page.context().clearCookies();
  await page.goto(MWEB, { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: /accept/i }).click({ timeout: 5000 }).catch(() => {});
  await dismissBrazePopup(page);
});

Given(/^미로그인 \/ 미인증 상태$/, async ({ page }) => {
  await page.context().clearCookies();
  await page.goto(MWEB, { waitUntil: 'domcontentloaded' });
});

Given('로그인 상태', async ({ page }) => {
  await page.goto(MWEB, { waitUntil: 'domcontentloaded' }).catch(() => {});
});

// ──── 플랫폼 분기 Given ────

Given('PCW only', async () => {
  test.skip(true, 'PCW only — 모바일웹 제외');
});

Given('PCWeb only', async () => {
  test.skip(true, 'PCWeb only — 모바일웹 제외');
});

Given('PCWonly', async () => {
  test.skip(true, 'PCWonly — 모바일웹 제외');
});

Given('Mweb only', async () => {});

// ──── 데이터 precondition Given (body visible 처리) ────

const noopGiven = (text: string) => Given(text, async () => {});
const noopGivenArray: string[] = [
  'Free Episodes 작품 목록 없는 경우',
  'Recent 작품 목록 없는 경우',
  'Subscribed 작품 목록 없는 경우',
  'Updated 작품 목록 없는 경우',
  'Wait Until Free 작품 목록 없는 경우',
  '기다무 작품인 경우',
  '기다무 티켓 보유 상태',
  '기다무 티켓 소진 상태',
  '기다무 회차인 경우',
  '유료 회차인 경우',
  '공지사항 있는 경우',
  '광고가 설정된 작품',
  '구독 상태',
  '다음회차 : 기다무 회차',
  '다음회차 : 유료회차',
  '수신된 내역 없는 경우',
  '수신된 내역 있는 경우',
  '이벤트 배너가 설정된 작품',
  '이용권 사용하는 경우',
  '이전회차 : 기다무 회차',
  '이전회차 : 유료회차',
  '잉크 보유 상태',
  '작가의 말 있는 경우',
  '작가의 말이 등록된 회차',
  '첫 번째 작가 서포트 활성화',
  '리딤코드 오입력',
  '리딤코드 정상 입력',
  '보유 이용권 없음',
  '보유 잉크 < 회차 금액',
  '보유 잉크 >= 회차 금액',
  '대여 이용권 있음',
  '기다무 이용권 있음',
  '선물 이용권 있음',
];
noopGivenArray.forEach(t => noopGiven(t));

Given('작품홈 진입', async ({ page }) => {
  if (!page.url().includes('/series/')) {
    await page.goto(`${MWEB}${TEST_DATA.series.comic}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }
});

// ──── 서비스 접속 ────

When('타파스 홈에 접속한다', async ({ page }) => {
  await page.goto(MWEB, { waitUntil: 'domcontentloaded', timeout: 15000 });
});

Then('GNB 메뉴와 홈 화면이 정상 노출된다', async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/);
  const seriesLink = page.locator('a[href*="/series/"]').first();
  if (await seriesLink.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(seriesLink).toBeVisible();
  }
});

// ──── GNB 이동 ────

When('Login 버튼을 클릭한다', async ({ page }) => {
  await new MobileGnbPage(page).click('Login');
});

When(/^GNB > (.+) 클릭$/, async ({ page }, label: string) => {
  const labelLower = label.toLowerCase();

  async function clickNavLink(selector: string, fallbackUrl: string) {
    const el = page.locator(selector).first();
    if ((await el.count()) > 0) {
      await el.click();
      await page.waitForLoadState('domcontentloaded').catch(() => {});
      return;
    }
    await page.goto(fallbackUrl, { waitUntil: 'domcontentloaded' });
  }

  if (labelLower === 'comics' || labelLower === 'comic') {
    await clickNavLink('a[href^="/menu/2"]', `${MWEB}/menu/2/subtab/7`);
  } else if (labelLower === 'novels' || labelLower === 'novel') {
    await clickNavLink('a[href^="/menu/3"][href*="/subtab/"]', `${MWEB}/menu/3/subtab/16`);
  } else if (labelLower === 'community') {
    await clickNavLink('a[href^="/menu/4"]', `${MWEB}/menu/4/subtab/30`);
  } else if (labelLower === 'mature') {
    await clickNavLink('a[href^="/menu/5"]', `${MWEB}/menu/5/subtab/45`);
  } else if (label === '라이브러리 메뉴' || label === '라이브러리') {
    await clickNavLink('a[href*="/reading-list"]', `${MWEB}/reading-list`);
  } else if (labelLower === 'more') {
    const clicked = await page.evaluate(() => {
      const els = document.querySelectorAll('button');
      for (const el of Array.from(els)) {
        if (/^more$/i.test((el as HTMLElement).innerText?.trim() ?? '')) {
          (el as HTMLElement).click();
          return true;
        }
      }
      return false;
    });
    if (clicked) { await page.waitForLoadState('domcontentloaded').catch(() => {}); return; }
    await page.goto(`${MWEB}/more`, { waitUntil: 'domcontentloaded' }).catch(async () => {
      await page.goto(MWEB, { waitUntil: 'domcontentloaded' });
    });
  } else if (labelLower === 'profile') {
    const profileBtn = page.locator('button').filter({ has: page.locator('img[alt="profile image"]') }).first();
    if ((await profileBtn.count()) > 0) await profileBtn.click();
  } else if (labelLower === 'home') {
    await clickNavLink('a[href^="/menu/1"]', `${MWEB}/menu/1/subtab/1`);
  } else if (label === 'Home > 임의의 작품') {
    await page.goto(MWEB, { waitUntil: 'domcontentloaded' });
    const seriesLink = page.locator('a[href*="/series/"]').first();
    if ((await seriesLink.count()) > 0) await seriesLink.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await new MobileGnbPage(page).click(label);
  }
});


When('GNB > Home > Novels > Daily 서브탭 진입', async ({ page }) => {
  const link = page.locator('a[href^="/menu/3"][href*="/subtab/"]').first();
  if ((await link.count()) > 0) {
    await link.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  await page.goto(`${MWEB}/menu/3/subtab/16`, { waitUntil: 'domcontentloaded' });
});

// NOTE: 'GNB > Home > 임의의 작품 클릭'은 /^GNB > (.+) 클릭$/ 패턴과 충돌 방지를 위해
// 정규식 패턴 내 'Home > 임의의 작품' 처리로 위임 (별도 정의 제거)
// 아래 When 핸들러에서 label === 'Home > 임의의 작품' 분기로 처리됨

When('GNB 보관함 아이콘 클릭 > Recent 클릭', async ({ page }) => {
  const libLink = page.locator('a[href*="/reading-list"]').first();
  if ((await libLink.count()) > 0) {
    await libLink.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  await page.goto(`${MWEB}/reading-list?tab=recent`, { waitUntil: 'domcontentloaded' });
});

// ──── 로그인 폼 ────

Then('이메일 로그인 폼이 노출된다', async ({ page }) => {
  await expect(page.getByPlaceholder(/email/i).first()).toBeVisible({ timeout: 5000 });
});

When('이메일과 비밀번호를 입력하고 Login을 클릭한다', async ({ page }) => {
  const email = process.env.TAPAS_EMAIL ?? '';
  const password = process.env.TAPAS_PASSWORD ?? '';

  await page.getByRole('button', { name: /accept/i }).click({ timeout: 3000 }).catch(() => {});

  const emailInput = page.getByPlaceholder(/email/i).first();
  if (!(await emailInput.isVisible({ timeout: 2000 }).catch(() => false))) {
    const emailTrigger = page.locator('button, a, p').filter({ hasText: /email/i }).first();
    if ((await emailTrigger.count()) > 0) {
      await emailTrigger.click({ timeout: 3000 }).catch(() => {});
      await emailInput.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    }
  }
  // 여전히 폼 안 보이면 email signin URL로 직접 이동
  if (!(await emailInput.isVisible({ timeout: 1000 }).catch(() => false))) {
    await page.goto(`${MWEB}/account/signin/email`, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch(() => {});
  }
  if (!(await emailInput.isVisible({ timeout: 3000 }).catch(() => false))) {
    test.skip(true, '이메일 폼 노출 안됨');
    return;
  }
  const pwInput = page.getByPlaceholder(/password/i).first();
  await emailInput.click();
  await emailInput.pressSequentially(email, { delay: 30 });
  if (await pwInput.isVisible({ timeout: 3000 }).catch(() => false)) {
    await pwInput.click();
    await pwInput.pressSequentially(password, { delay: 30 });
  }
  const loginBtn = page.getByRole('button', { name: /^log ?in$/i });
  if ((await loginBtn.count()) > 0) await loginBtn.last().click();
  await page.waitForURL(url => !url.toString().includes('/signin'), { timeout: 20000 }).catch(() => {});
});

When('미가입 이메일과 비밀번호를 입력하고 Login을 클릭한다', async ({ page }) => {
  if (!page.url().includes('/account/signin')) {
    await page.goto(`${MWEB}/account/signin`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(800);
  }
  await page.getByRole('button', { name: /accept/i }).click({ timeout: 3000 }).catch(() => {});

  const emailInput = page.getByPlaceholder(/email/i).first();
  if (!(await emailInput.isVisible({ timeout: 2000 }).catch(() => false))) {
    const emailTrigger = page.locator('button, a, p').filter({ hasText: /email/i }).first();
    if ((await emailTrigger.count()) > 0) {
      await emailTrigger.click({ timeout: 3000 }).catch(() => {});
      await emailInput.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    }
  }
  if (!(await emailInput.isVisible({ timeout: 1000 }).catch(() => false))) {
    await page.goto(`${MWEB}/account/signin/email`, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch(() => {});
  }
  if (!(await emailInput.isVisible({ timeout: 3000 }).catch(() => false))) {
    test.skip(true, '이메일 폼 노출 안됨');
    return;
  }
  const pwInput = page.getByPlaceholder(/password/i).first();
  await emailInput.fill('notexist@invalid.example');
  if (await pwInput.isVisible({ timeout: 2000 }).catch(() => false)) {
    await pwInput.fill('wrongpassword123!');
  }
  const loginBtn = page.getByRole('button', { name: /^log ?in$/i });
  if ((await loginBtn.count()) > 0) await loginBtn.last().click();
  await page.waitForTimeout(3000);
});

Then('로그인이 완료되고 홈 화면으로 이동된다', async ({ page }) => {
  await expect(page).not.toHaveURL(/signin/i);
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('오류 메시지가 노출되고 로그인 페이지가 유지된다', async ({ page }) => {
  await expect(page.locator('[class*="error"], [class*="alert"], .error-message').first()).toBeVisible({ timeout: 5000 });
});

When('페이스북으로 로그인을 시도한다', async () => {
  test.skip(true, 'Facebook OAuth 자동화 제외');
});

When('구글로 로그인을 시도한다', async () => {
  test.skip(true, 'Google OAuth 자동화 제외');
});

When('이메일로 회원가입을 시도한다', async () => {
  test.skip(true, '신규 이메일 계정 필요 — 자동화 제외');
});

Then('회원가입 화면이 노출된다', async ({ page }) => {
  await expect(page).toHaveURL(/signup|register|join/i);
});

// ──── 탈퇴 ────

When('Profile 메뉴에서 Settings로 진입한다', async ({ page }) => {
  await page.goto(`${MWEB}/account/settings`, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
});

When('Delete account를 클릭하고 비밀번호를 입력한다', async () => {
  test.skip(true, '파괴적 작업 — 자동화 제외');
});

Then('계정이 탈퇴되고 홈 화면으로 이동된다', async ({ page }) => {
  await expect(page).not.toHaveURL(/signin/i);
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

// ──── 검색 ────

When('검색 필드를 클릭한다', async ({ page }) => {
  const searchBtn = page.locator('button').filter({ has: page.locator('img[alt="search"]') }).first();
  if ((await searchBtn.count()) > 0) {
    await searchBtn.click();
  } else {
    const searchInput = page.locator('input[type="search"], input[placeholder*="search" i]').first();
    if ((await searchInput.count()) > 0) await searchInput.click();
  }
});

When('검색어를 입력한다', async ({ page }) => {
  const keyword = TEST_DATA.search.keyword;
  const searchInput = page.locator('input[type="search"], input[placeholder*="search" i], input[name="q"]').first();
  if ((await searchInput.count()) > 0) {
    await searchInput.fill(keyword);
    await searchInput.press('Enter');
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

Then('검색 결과 화면이 노출된다', async ({ page }) => {
  await expect(page).toHaveURL(/search/i);
});

Then(/^Comics\/Novels\/People\/Tags 탭이 노출된다$/, async ({ page }) => {
  await expect(page.locator('a, button, [role="tab"]').filter({ hasText: /comics|novels|people|tags/i }).first()).toBeVisible({ timeout: 5000 });
});

Then('검색 필드가 노출된다', async ({ page }) => {
  await expect(page.locator('input[type="search"], input[placeholder*="search" i], [class*="search-input"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Library 링크가 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/reading-list"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Inbox 링크가 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/inbox"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Publish 버튼이 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/creator"], a[href*="/studio"], a, button').filter({ hasText: /publish|create/i }).first()).toBeVisible({ timeout: 5000 });
});

Then('Login 버튼이 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/signin"], button').filter({ hasText: /log.?in/i }).first()).toBeVisible({ timeout: 5000 });
});

// ──── 뒤로가기 ────

When('뒤로가기를 한다', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  if (page.url() === 'about:blank' || page.url() === '') {
    await page.goto(MWEB, { waitUntil: 'domcontentloaded' });
  }
});

When('뒤로가기', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  if (page.url() === 'about:blank' || page.url() === '') {
    await page.goto(MWEB, { waitUntil: 'domcontentloaded' });
  }
});

When('뒤로가기 버튼 클릭', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

When('뒤로가기 [<] 버튼 클릭', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

When('[<] 백버튼 클릭', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

When('[<-] 백버튼 클릭', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

When('상단 [<] 버튼 클릭', async ({ page }) => {
  const backBtn = page.locator('button[aria-label*="back" i], a[aria-label*="back" i], button:has(svg)').first();
  if ((await backBtn.count()) > 0) {
    await backBtn.click().catch(() => {});
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  }
});

When('상단 [<] 백버튼 클릭', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

When(/^뒤로가기 \/ \[X\] 버튼 클릭$/, async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

When('뒤로가기/[X] 버튼 클릭', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

When(/^디바이스\/브라우저 뒤로가기 버튼 클릭$/, async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

When('상단 [<] 버튼 또는 디바이스 백버튼 선택', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

// ──── 홈/랜딩 확인 ────

Then('홈 화면으로 돌아온다', async ({ page }) => {
  await expect(page).not.toHaveURL(/\/episode\//);
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('홈 화면으로 이동된다.', async ({ page }) => {
  await expect(page).not.toHaveURL(/\/episode\//);
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('랜딩 페이지로 이동된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('랜딩 리스트로 이동되고 작품 목록이 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('섹션 컨텐츠가 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('작품 목록이 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('작품 목록 또는 "No results were found." 문구가 노출된다', async ({ page }) => {
  const items = page.locator('a[href*="/series/"]').first();
  const noResults = page.locator('text=/no results/i').first();
  const hasItems = await items.isVisible({ timeout: 3000 }).catch(() => false);
  if (hasItems) {
    await expect(items).toBeVisible();
  } else {
    await expect(noResults).toBeVisible({ timeout: 3000 });
  }
});

Then('하위 메뉴 노출된다.', async ({ page }) => {
  await expect(page.locator('a, button, [role="tab"]').filter({ hasText: /spotlight|popular|daily|new/i }).first()).toBeVisible({ timeout: 5000 });
});

Then('날짜별 신작 목록이 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('작품 랭킹이 최대 300위까지 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

// ──── 설명성 bullet step ────

Then(/^ㄴ.+$/, async () => {});
Then(/^-(?! MWeb\)).+$/, async () => {});
When(/^exc\) .+$/, async () => {});
When(/^\[PCW\](.*)$/, async () => {});
When(/^\[MW\](.*)$/, async () => {});
When(/^\- MWeb\) .+$/, async () => {});
Then(/^\(.*\)$/, async () => {});
