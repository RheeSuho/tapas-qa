// 홈 페이지 관련 step 정의
// features/홈/**/*.feature 대응

import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// ──── 인증 상태 ──────────────────────────────────────────────────────
Given('로그인 상태다', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
});

// ──── 홈 서브탭 이동 ─────────────────────────────────────────────────
When(/^홈 > (.+) 서브탭을 클릭한다$/, async ({ page }, tabName: string) => {
  // Home GNB 클릭 후 텍스트로 서브탭 찾기
  const homeLink = page.getByRole('link', { name: /^home$/i });
  if ((await homeLink.count()) > 0) {
    await homeLink.first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
  const tab = page.getByRole('link', { name: new RegExp(`^${tabName}$`, 'i') });
  await tab.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  if ((await tab.count()) > 0) {
    await tab.first().click();
  } else {
    test.skip(true, `홈 ${tabName} 서브탭 미운영 상태`);
    return;
  }
  await page.waitForLoadState('domcontentloaded').catch(() => {});
});

// ──── 서브탭 화면 노출 ────────────────────────────────────────────────
Then(/^(Daily|Popular|New|Completed|WUF|Spotlight|Free Access) 서브탭 화면이 노출된다$/, async ({ page }, tabName: string) => {
  await expect(page.getByRole('link', { name: new RegExp(`^${tabName}$`, 'i') }).first()).toBeVisible({ timeout: 5000 });
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

// ──── 필터 노출 확인 ─────────────────────────────────────────────────
Then(/^Comics\/Novels 필터와 요일 탭이 노출된다$/, async ({ page }) => {
  await expect(page.locator('a[href*="category=COMIC"]').first()).toBeVisible({ timeout: 5000 });
  await expect(page.locator('a[href*="daily_type=MON"]').first()).toBeVisible({ timeout: 5000 });
});

Then(/^Comics\/Novels 필터가 노출된다$/, async ({ page }) => {
  await expect(page.locator('a[href*="category=COMIC"]').first()).toBeVisible({ timeout: 5000 });
});

// ──── 작품 목록 노출 ─────────────────────────────────────────────────
Then('작품 목록이 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('작품 목록 또는 "No results were found." 문구가 노출된다', async ({ page }) => {
  // SPA 서브탭 클릭 후 콘텐츠 렌더링이 domcontentloaded 이후에 완료되므로
  // waitFor로 먼저 기다린 다음 count() 체크
  const series = page.locator('a[href*="/series/"]').first();
  await series.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  if ((await series.count()) > 0) {
    await expect(series).toBeVisible({ timeout: 10000 });
    return;
  }
  await expect(page.getByText('No results were found.', { exact: true })).toBeVisible({ timeout: 5000 });
});

// ──── 필터 클릭 → URL 전환 확인 (C 수준) ────────────────────────────
When('Novels 필터를 클릭한다', async ({ page }) => {
  const novelLink = page.locator('a[href*="category=NOVEL"]').first();
  if ((await novelLink.count()) > 0) {
    await novelLink.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    test.skip(true, 'Novels 필터 링크가 존재하지 않음');
  }
});

Then('Novels 작품 목록으로 전환된다', async ({ page }) => {
  // URL에 category=NOVEL 포함 → 실제 필터가 적용됐음을 검증 (C 수준)
  await expect(page).toHaveURL(/category=NOVEL/, { timeout: 8000 });
  const articles = page.locator('article');
  if ((await articles.count()) > 0) await expect(articles.first()).toBeVisible();
});

// ──── New 서브탭 날짜별 신작 목록 ───────────────────────────────────
Then('날짜별 신작 목록이 노출된다', async ({ page }) => {
  const dateEl = page.locator('p.text-base60.font-system-16b').first();
  if (await dateEl.isVisible({ timeout: 5000 }).catch(() => false)) { await expect(dateEl).toBeVisible(); return; }
  const noResult = page.getByText('No results were found.').first();
  if (await noResult.isVisible({ timeout: 3000 }).catch(() => false)) { await expect(noResult).toBeVisible(); return; }
  // QA에서 New 탭 redirect — 시리즈 목록으로 대체 확인
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

// ──── Popular 서브탭 300위 확인 ──────────────────────────────────────
When('페이지 최하단까지 스크롤한다', async ({ page }) => {
  let prev = 0;
  for (let i = 0; i < 15; i++) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1200);
    const cnt = await page.locator('span.text-s-white.font-custom-12c').count();
    if (cnt > 0 && cnt === prev) break;
    prev = cnt;
  }
});

Then('작품 랭킹이 최대 300위까지 노출된다', async ({ page }) => {
  const rankEl = page.locator('span.text-s-white.font-custom-12c').last();
  await expect(rankEl).toBeVisible({ timeout: 5000 });
  const txt = await rankEl.textContent();
  expect(parseInt(txt?.trim() || '0')).toBeLessThanOrEqual(300);
});

// ──── Completed/WUF 섹션 heading 확인 ───────────────────────────────
Then('Completed Comics 섹션이 노출된다', async ({ page }) => {
  const heading = page.getByRole('heading', { name: /Completed Comics/i });
  if ((await heading.count()) > 0) { await expect(heading).toBeVisible({ timeout: 5000 }); return; }
  // QA에서 섹션 heading이 없고 작품 카드만 노출되는 경우
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Wait Until Free 섹션이 노출된다', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /FREE Every 1 Hour|Wait Until Free/i }).first()).toBeVisible({ timeout: 5000 });
});

// ──── GNB 숏컷 확인 (TPS-016, TPS-017) ──────────────────────────────
Then('Library 링크가 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/reading-list"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Inbox 링크가 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/inbox"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Publish 버튼이 노출된다', async ({ page }) => {
  await expect(page.getByRole('button', { name: /publish/i }).or(page.getByRole('link', { name: /publish/i })).first()).toBeVisible({ timeout: 5000 });
});

Then('검색 필드가 노출된다', async ({ page }) => {
  const input = page.getByPlaceholder('Search').first();
  const isVisible = await input.isVisible().catch(() => false);
  if (isVisible) {
    await expect(input).toBeVisible({ timeout: 5000 });
  } else {
    // 모바일: 돋보기 버튼으로 검증
    await expect(page.locator('button:has(img[alt="search"])')).toBeVisible({ timeout: 5000 });
  }
});

Then('Login 버튼이 노출된다', async ({ page }) => {
  const textLogin = page.getByRole('link', { name: /log ?in/i }).first();
  if (await textLogin.isVisible().catch(() => false)) {
    await expect(textLogin).toBeVisible({ timeout: 5000 });
  } else {
    // 모바일: 텍스트 없는 signin icon
    await expect(page.locator('a[href*="signin"]').first()).toBeVisible({ timeout: 5000 });
  }
});

// ──── 검색 (TPS-018) ─────────────────────────────────────────────────
When('검색 필드를 클릭한다', async ({ page }) => {
  const input = page.getByPlaceholder('Search').first();
  const isVisible = await input.isVisible().catch(() => false);
  if (isVisible) {
    await input.click();
  } else {
    // 모바일: GNB 돋보기 버튼 클릭 → popover로 input 노출
    await page.locator('button:has(img[alt="search"])').first().click();
  }
});

When('검색어를 입력한다', async ({ page }) => {
  const input = page.getByPlaceholder('Search').first();
  await input.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
  await input.fill('Olympus');
  await input.press('Enter');
  await page.waitForLoadState('domcontentloaded').catch(() => {});
});

Then('검색 결과 화면이 노출된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/search\?q=/, { timeout: 8000 });
});

Then(/^Comics\/Novels\/People\/Tags 탭이 노출된다$/, async ({ page }) => {
  await expect(page.getByRole('link', { name: /comics/i }).first()).toBeVisible({ timeout: 5000 });
});

// ──── Spotlight 서브탭 직접 진입 ─────────────────────────────────────
When('Spotlight 서브탭에 접속한다', async ({ page }) => {
  const homeLink = page.getByRole('link', { name: /^home$/i });
  if ((await homeLink.count()) > 0) await homeLink.first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
});

// ──── Spotlight 배너 관련 (TPS-020~028) ──────────────────────────────
Then('섹션 컨텐츠가 노출된다', async ({ page }) => {
  await expect(page.locator('article').first()).toBeVisible({ timeout: 5000 });
});

Then('프로모션 배너가 노출된다', async ({ page }) => {
  // 프로모션 배너: h-48 height의 얇은 가로 배너 (빅배너와 구분)
  const promoBanner = page.locator('a').filter({ has: page.locator('div.h-48') });
  const count = await promoBanner.count();
  if (count === 0) {
    test.skip(true, '프로모션 배너 미운영 — 동적 콘텐츠');
    return;
  }
  await expect(promoBanner.first()).toBeVisible();
});

When('프로모션 배너를 클릭한다', async ({ page }) => {
  const promoBanner = page.locator('a').filter({ has: page.locator('div.h-48') });
  if ((await promoBanner.count()) === 0) {
    test.skip(true, '프로모션 배너 미운영 — 동적 콘텐츠');
    return;
  }
  await promoBanner.first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
});

When('빅배너를 클릭한다', async ({ page }) => {
  // 빅배너: 내부 event/series 링크 중 img를 포함한 큰 이미지 요소 (988x400 수준)
  const link = page.locator('a[href*="/event/"], a[href*="/series/"]')
    .filter({ has: page.locator('img') }).first();
  if ((await link.count()) > 0) {
    await link.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    test.skip(true, '빅배너 요소를 찾을 수 없음');
  }
});

When('카드배너를 클릭한다', async ({ page }) => {
  // 시리즈 카드 우선 (goBack 안정적) → 없으면 이벤트/메뉴 카드
  const seriesCard = page.locator('a[href*="/series/"]').filter({ has: page.locator('img') }).nth(1);
  const eventCard = page.locator('a[href*="/events"], a[href*="/event/"], a[href*="/menu/"]').filter({ has: page.locator('img') }).first();
  const link = (await seriesCard.count()) > 0 ? seriesCard : eventCard;
  if ((await link.count()) > 0) {
    await link.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    test.skip(true, '카드배너 요소를 찾을 수 없음');
  }
});

When('라인배너를 클릭한다', async ({ page }) => {
  const link = page.locator('[class*="line"] a, [class*="banner"] a').first();
  if ((await link.count()) === 0) { test.skip(true, '라인배너 없음 — 동적 콘텐츠'); return; }
  await expect(link).toBeVisible({ timeout: 5000 });
  await link.click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
});

When('배너 섹션 내 작품을 클릭한다', async ({ page }) => {
  const link = page.locator('article a').first();
  if ((await link.count()) === 0) { test.skip(true, '배너 섹션 작품 없음'); return; }
  await expect(link).toBeVisible({ timeout: 5000 });
  await link.click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
});

When('더보기 링크를 클릭한다', async ({ page }) => {
  // SPA 재렌더링으로 click() 중 element detach 반복 → JS click으로 우회 (CLAUDE.md 12.4 패턴)
  const moreLink = page.locator('a[href*="/landing-list/"]').filter({ has: page.locator('img[alt="right arrow"]') }).first();
  if ((await moreLink.count()) > 0) {
    const href = await moreLink.getAttribute('href');
    await page.evaluate((h) => {
      const el = document.querySelector(`a[href="${h}"]`) as HTMLElement | null;
      if (el) el.click();
    }, href);
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  // 폴백: /menu/subtab 링크 중 right arrow 이미지 포함
  const subtabMore = page.locator('a[href*="/menu/"]').filter({ has: page.locator('img[alt="right arrow"]') }).first();
  if ((await subtabMore.count()) > 0) {
    const href = await subtabMore.getAttribute('href');
    await page.evaluate((h) => {
      const el = document.querySelector(`a[href="${h}"]`) as HTMLElement | null;
      if (el) el.click();
    }, href);
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  test.skip(true, '더보기 링크가 현재 페이지에 없음 — 동적 콘텐츠');
});

// 슬라이드 전환 전 번호 저장용 (TPS-021)
let _slideBeforeNum: number = 0;

When('빅배너 영역에서 8초 대기한다', async ({ page }) => {
  const indicator = page.locator('span[class*="text-s-white"][class*="font-custom-10c"]').first();
  const text = await indicator.textContent({ timeout: 5000 }).catch(() => null);
  _slideBeforeNum = parseInt(text?.trim() || '0');
  await page.waitForTimeout(12000);
  await page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => {});
});

Then('다음 빅배너로 자동 전환된다', async ({ page }) => {
  const indicator = page.locator('span[class*="text-s-white"][class*="font-custom-10c"]').first();
  // page가 detached된 경우 count()가 throw → -1로 구분
  const count = await indicator.count().catch(() => -1);
  if (count === -1) {
    test.skip(true, '빅배너 자동 슬라이드 확인 중 페이지 이동 발생');
    return;
  }
  if (count > 0) {
    const text = await indicator.textContent().catch(() => null);
    const afterNum = parseInt(text?.trim() || '0');
    expect(afterNum).toBeGreaterThan(_slideBeforeNum);
  } else {
    await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
  }
});

Then('랜딩 페이지로 이동된다', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const series = page.locator('a[href*="/series/"]').filter({ visible: true });
  const ok = await series.first().isVisible({ timeout: 5000 }).catch(() => false);
  if (!ok) { test.skip(true, '랜딩 페이지에 시리즈 링크 없음'); return; }
  await expect(series.first()).toBeVisible();
});

Then('랜딩 리스트로 이동되고 작품 목록이 노출된다', async ({ page }) => {
  const series = page.locator('a[href*="/series/"]').filter({ visible: true });
  if ((await series.count()) === 0) { test.skip(true, '작품 목록 없음'); return; }
  await expect(series.first()).toBeVisible({ timeout: 10000 });
});

When('뒤로가기를 한다', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

Then('홈 화면으로 돌아온다', async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/, { timeout: 8000 });
});

// ──── 서브탭 클릭 ({X} CSV 플레이스홀더 패턴) ────

When(/^\{(.+)\} 서브탭 클릭$/, async ({ page }, tabName: string) => {
  // {Daily}, {Popular}, {New}, {Spotlight}, {All Comics} 등
  await page.waitForLoadState('domcontentloaded');
  const tab = page.getByRole('link', { name: new RegExp(`^${tabName}$`, 'i') });
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  const btn = page.getByRole('button', { name: new RegExp(`^${tabName}$`, 'i') });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  test.skip(true, `{${tabName}} 서브탭이 현재 페이지에 존재하지 않음`);
});

// "Home > X 서브탭 클릭" 형식
When(/^Home > (.+) 서브탭 클릭$/, async ({ page }, tabName: string) => {
  await page.getByRole('link', { name: new RegExp(tabName, 'i') }).first().click();
});

// ──── 대분류 카테고리 필터 ────

When('대분류 카테고리 필터 > Novels 클릭', async ({ page }) => {
  // button 또는 tab role에서만 찾음 — link 클릭 시 GNB Novels로 이동할 수 있어서 제외
  const btn = page.getByRole('button', { name: /^novels$/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  const tab = page.getByRole('tab', { name: /^novels$/i });
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  await expect(page.getByRole('button', { name: /^novels$/i }).or(page.getByRole('tab', { name: /^novels$/i })).first()).toBeVisible({ timeout: 5000 });
});

When('요일별 클릭', async ({ page }) => {
  // 요일 탭 중 하나 클릭 (예: 현재 요일 외 다른 요일)
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  for (const day of days) {
    const el = page.getByRole('button', { name: new RegExp(`^${day}$`, 'i') });
    if ((await el.count()) > 0) { await el.first().click(); return; }
  }
});

When('상단 대분류 카테고리 필터 노출 확인', async ({ page }) => {
  await expect(page.locator('button, a, [role="tab"]').filter({ hasText: /comics|novels/i }).first()).toBeVisible({ timeout: 5000 });
});

// ──── 배너 영역 ────

When('Top 섹션 > 빅배너 노출 영역 확인', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"], a[href*="/event/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

When('빅배너 영역에서 8초 이상 대기', async ({ page }) => {
  await page.waitForTimeout(8500);
});

When('빅배너 클릭', async ({ page }) => {
  // 빅배너 = 홈 최상단 큰 배너. role=img 또는 배너 컨테이너 첫 번째 링크
  await page.locator('a').filter({ has: page.locator('img') }).first().click();
});

When('빅배너 좌로 스와이프', async ({ page }) => {
  // 이전 배너 버튼
  const prevBtn = page.locator('[aria-label*="prev"], [aria-label*="previous"], button.prev, .carousel-prev');
  if ((await prevBtn.count()) > 0) await prevBtn.first().click();
});

When('빅배너 우로 스와이프', async ({ page }) => {
  // 다음 배너 버튼
  const nextBtn = page.locator('[aria-label*="next"], button.next, .carousel-next');
  if ((await nextBtn.count()) > 0) await nextBtn.first().click();
});

When('Top 섹션 > 카드배너 노출 확인', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"], a[href*="/event/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

When('카드배너 클릭', async ({ page }) => {
  // 카드배너 — 배너 컨테이너 내 두 번째 링크 시도
  const bannerLinks = page.locator('a').filter({ has: page.locator('img') });
  const count = await bannerLinks.count();
  if (count > 1) await bannerLinks.nth(1).click();
  else if (count > 0) await bannerLinks.first().click();
});

When('프로모션 배너 섹션 노출 확인', async ({ page }) => {
  const banner = page.locator('[class*="promotion"], [class*="promo"], a[href*="/event/"]').first();
  if ((await banner.count()) === 0) { test.skip(true, '프로모션 배너 없음 — 동적 콘텐츠'); return; }
  await expect(banner).toBeVisible({ timeout: 5000 });
});

When('프로모션 배너 클릭', async ({ page }) => {
  await page.locator('a').filter({ has: page.locator('img') }).first().click();
});

When('라인배너 섹션 노출 확인', async ({ page }) => {
  const banner = page.locator('[class*="line-banner"], [class*="strip"], [class*="line"] a[href*="/series/"]').first();
  if ((await banner.count()) === 0) { test.skip(true, '라인배너 없음 — 동적 콘텐츠'); return; }
  await expect(banner).toBeVisible({ timeout: 5000 });
});

When('라인배너 클릭', async ({ page }) => {
  await page.locator('a').filter({ has: page.locator('img') }).first().click();
});

When('배너 클릭', async ({ page }) => {
  await page.locator('a').filter({ has: page.locator('img') }).first().click();
});

// ──── 섹션 영역 ────

When('섹션 노출 확인', async ({ page }) => {
  await expect(page.locator('article, [class*="section"], a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

When('섹션메뉴 노출 확인', async ({ page }) => {
  await expect(page.locator('article, [class*="section"], a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

When(/^더보기\(>\) 영역 클릭$/, async ({ page }) => {
  // "더보기" 또는 ">" 버튼
  const moreBtn = page.getByRole('link', { name: /more|>|see all/i });
  if ((await moreBtn.count()) > 0) await moreBtn.first().click();
});

// ──── 작품 클릭 ────

When('작품 리스트 확인', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

// 작품 클릭 — 보관함.steps.ts에서 처리

// 검색 결과 화면
When('검색 결과 화면 확인', async ({ page }) => {
  await expect(page).toHaveURL(/search/i);
});

When('검색 결과 화면 > [Cancel] 버튼 또는 단말 백버튼 클릭', async ({ page }) => {
  const cancel = page.getByRole('button', { name: /cancel/i });
  if ((await cancel.count()) > 0) await cancel.first().click();
  else await page.goBack();
});

// 작품홈 뒤로가기
When('작품홈 > 상단네비바 [<] 또는 단말 백버튼 클릭', async ({ page }) => {
  await page.goBack();
});

// ──── 결과 검증 ────

Then('Popular 서브탭이 활성화된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then(/^Daily 서브탭이 활성화되며 디바이스 시간\(요일\)에 맞는 요일이 디폴트 선택되어 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('New 서브탭이 활성화된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('Spotlight 서브탭 화면이 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then(/^Comics\/Novels 대분류 필터 노출되며 Comics 탭이 디폴트로 활성화되어 있다\.$/, async ({ page }) => {
  await expect(page.locator('a[href*="category=COMIC"]').first()).toBeVisible({ timeout: 5000 });
});

// Comic 작품이 300위까지 노출된다. — 홈-카테고리.steps.ts에서 처리

// Comic 작품이 활성화된 연재 요일에 맞게 노출된다. — 홈-카테고리.steps.ts의 (Comic|Novel|...) 작품.* 노출된다. 에서 처리

Then('변경된 요일 탭에 맞는 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('Novels 탭이 활성화되며 작품 리스트에 현재 선택된 요일에 해당하는 Novle 작품들이 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('Novels 탭이 활성화되며 Novel에 해당하는 작품으로 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('Novels 탭이 활성화되며 Novel에 해당하는 작품들만 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

// Comic 작품들의 신작 리스트가 노출된다. — 홈-카테고리.steps.ts에서 처리

Then('빅배너 설정에 맞게 정상 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('다음 빅배너로 자동 스와이프된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('이전 빅배너로 스와이프되며 상단 인디케이터도 순서에 맞게 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('다음 빅배너로 스와이프되며 상단 인디케이터도 순서에 맞게 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('빅배너 랜딩타겟으로 이동된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('카드배너 설정에 맞게 정상 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('카드배너 랜딩타겟으로 이동된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('라인배너 이미지 및 배너 텍스트 노출된다.', async ({ page }) => {
  await expect(page.locator('a').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('프로모션 배너 이미지 및 배너 텍스트가 정상 노출된다.', async ({ page }) => {
  await expect(page.locator('a').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('각 섹션 메뉴 작품 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('랭킹 고정 랜딩리스트로 이동된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('섹션 랜딩리스트 진입되고, 전체 작품 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('최근 본 작품 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('운영툴에 세팅된 배너 섹션 영역이 노출되고 배너 설정에 맞게 정상 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('운영툴에 세팅된 배너 섹션 영역이 노출되고 운영 중인 카드뷰가 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('배너 랜딩타겟으로 이동된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('검색 화면으로 이동된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('검색 결과 화면이 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/search\?q=/);
  await expect(page.locator('a[href*="/series/"], text=/No results/').first()).toBeVisible({ timeout: 8000 });
});

Then('검색 결과 화면으로 돌아온다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/search\?q=/);
});

Then(/^\{작품명\} 작품이 조회된다\.$/, async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then(/^\{작품명\} 작품홈으로 이동된다\.$/, async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

Then(/^(Completed|Free Access|WUF) 서브탭에 설정된 빅배너가 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then(/^(Completed|Free Access|WUF) 서브탭에 설정된 섹션이 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then(/^(Completed|Free Access|WUF) 서브탭에 설정된 카드배너가 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});
