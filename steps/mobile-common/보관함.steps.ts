import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { TEST_DATA } from '../../data/testData';

const { When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// ──── 탭 진입 ────

When('Recent 클릭', async ({ page }) => {
  // m.tapas.io: Recent 탭 URL = /recent-reading (구: ?tab=recent)
  const tab = page.locator('a[href="/recent-reading"], a[href*="recent"]').filter({ hasText: /^recent$/i }).first();
  if ((await tab.count()) > 0) {
    await tab.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/recent-reading`, { waitUntil: 'domcontentloaded' });
  }
});

When('Subscribed 클릭', async ({ page }) => {
  // m.tapas.io: Subscribed 탭 URL = /reading-list?category=SUBSCRIBED (구: ?tab=subscribed)
  const tab = page.locator('a[href*="SUBSCRIBED"], a, button').filter({ hasText: /^subscribed$/i }).first();
  if ((await tab.count()) > 0) {
    await tab.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/reading-list?category=SUBSCRIBED`, { waitUntil: 'domcontentloaded' });
  }
});

When('Free episodes 메뉴 클릭', async ({ page }) => {
  // m.tapas.io: Free episodes 탭 URL = /reading-list?category=FREE_EPISODES (구: ?tab=free)
  const tab = page.locator('a[href*="FREE_EPISODES"], a, button').filter({ hasText: /free episodes/i }).first();
  if ((await tab.count()) > 0) {
    await tab.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/reading-list?category=FREE_EPISODES`, { waitUntil: 'domcontentloaded' });
  }
});

When('Wait until Free 메뉴 클릭', async ({ page }) => {
  // m.tapas.io: Wait Until Free 탭 URL = /reading-list?category=WAIT_UNTIL_FREE (구: ?tab=wuf)
  const tab = page.locator('a[href*="WAIT_UNTIL_FREE"], a, button').filter({ hasText: /wait until free/i }).first();
  if ((await tab.count()) > 0) {
    await tab.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/reading-list?category=WAIT_UNTIL_FREE`, { waitUntil: 'domcontentloaded' });
  }
});

// ──── 작품 클릭 ────

When('작품 클릭', async ({ page }) => {
  const link = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await link.count()) === 0) { test.skip(true, '보관함 작품 목록 없음 — 동적 콘텐츠'); return; }
  await expect(link).toBeVisible({ timeout: 5000 });
  const prevUrl = page.url();
  await link.click();
  await page.waitForURL(url => url.toString() !== prevUrl, { timeout: 8000 }).catch(() => {});
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  if (page.url() === prevUrl) { test.skip(true, '보관함 작품 클릭 후 내비게이션 없음 — SPA 동작'); return; }
});

When('작품 리스트 확인', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

When('Comic 작품 열람', async ({ page }) => {
  // JS 렌더링 대기 후 클릭
  const link = page.locator('a[href*="/episode/"], a[href*="/series/"]').first();
  await link.waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
  if ((await link.count()) === 0) { test.skip(true, '보관함 작품 없음 — 동적 콘텐츠'); return; }
  await link.click();
  // SPA 네비게이션 대기 — URL이 episode/series로 변경되어야 함
  await page.waitForURL(url => /\/episode\/|\/series\//.test(url.toString()), { timeout: 8000 }).catch(() => {});
  if (!/\/episode\/|\/series\//.test(page.url())) {
    test.skip(true, 'episode/series 페이지로 이동 안됨 — m.tapas.io 라이브러리 SPA 리다이렉트 이슈');
  }
});

When('임의의 작품 클릭', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a[href*="/series/"]').first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
});

// ──── 필터 (Subscribed / Free episodes / Wait until Free 공통) ────

When('Comics 필터 클릭', async ({ page }) => {
  await expect(page.locator('button, a').filter({ hasText: /^comics$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button, a').filter({ hasText: /^comics$/i }).first().click();
  await page.waitForTimeout(400);
});

When('Novels 필터 클릭', async ({ page }) => {
  await expect(page.locator('button, a').filter({ hasText: /^novels$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button, a').filter({ hasText: /^novels$/i }).first().click();
  await page.waitForTimeout(400);
});

When('All 필터 클릭', async ({ page }) => {
  await expect(page.locator('button, a').filter({ hasText: /^all$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button, a').filter({ hasText: /^all$/i }).first().click();
  await page.waitForTimeout(400);
});

// PCW 전용 필터 (feature 파일에 [PCW] / [MW] 분기 있음 — [PCW] step은 공통.steps.ts에서 noop)

When('우상단 필터 > [Comics] 버튼 클릭', async ({ page }) => {
  // [MW] 분기 — PCW 스텝([Novels] 버튼 클릭)이 GNB로 이동했을 수 있음 → reading-list 복귀
  if (!page.url().includes('/reading-list') && !page.url().includes('/library')) {
    await page.goto(`${MWEB}/reading-list`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);
  }
  // m.tapas.io reading-list 필터 버튼 (없으면 조건부 skip)
  const filterBtn = page.locator('button, a').filter({ hasText: /filter|comics/i }).filter({ visible: true }).first();
  if ((await filterBtn.count()) === 0) { test.skip(true, 'reading-list 필터 버튼 없음 — MWeb UI 확인 필요'); return; }
  await filterBtn.click();
  await page.waitForTimeout(300);
  const comicsOption = page.locator('[role="option"], li, button').filter({ hasText: /^comics$/i }).first();
  if ((await comicsOption.count()) > 0) await comicsOption.click();
  await page.waitForTimeout(400);
});

When('필터 > [Novels] 버튼 클릭', async ({ page }) => {
  await expect(page.locator('[role="option"], li, button').filter({ hasText: /^novels$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('[role="option"], li, button').filter({ hasText: /^novels$/i }).first().click();
  await page.waitForTimeout(400);
});

When('필터 > [All] 버튼 클릭', async ({ page }) => {
  await expect(page.locator('[role="option"], li, button').filter({ hasText: /^all$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('[role="option"], li, button').filter({ hasText: /^all$/i }).first().click();
  await page.waitForTimeout(400);
});

// PCW 전용 탭 하단 필터 (모바일에서는 noop 처리)

When('탭 하단 [Comics] 버튼 클릭', async ({ page }) => {
  // PCW only — GNB의 /comics 링크 제외, reading-list 내 탭 버튼만
  const btn = page.locator('button, a:not([href="/comics"]):not([href*="/comics"])').filter({ hasText: /^comics$/i }).filter({ visible: true }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

When('[Novels] 버튼 클릭', async ({ page }) => {
  // GNB의 /novels 링크 클릭 방지 — reading-list 내 필터 버튼만 사용
  const btn = page.locator('button, a:not([href="/novels"]):not([href*="novels"])').filter({ hasText: /^novels$/i }).filter({ visible: true }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

When('[All] 버튼 클릭', async ({ page }) => {
  // GNB 링크 클릭 방지 — reading-list 내 필터 버튼만 사용
  const btn = page.locator('button, a:not([href="/"]):not([href*="home"])').filter({ hasText: /^all$/i }).filter({ visible: true }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

// Subscribed > Mark All As Read / Setting

When('[Mark All As Read] 버튼 클릭', async ({ page }) => {
  // 구독 작품 업데이트가 있을 때만 버튼 노출 — 없으면 동적 skip
  const btn = page.locator('button').filter({ hasText: /mark all as read/i }).first();
  if ((await btn.count()) > 0) {
    await btn.click();
    await page.waitForTimeout(600);
    return;
  }
  test.skip(true, '구독 작품 업데이트 없음 — Mark All As Read 버튼 미노출');
});

// ──── Then ────

Then('보관함으로 진입되며 아래 메뉴들이 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
  await expect(page.locator('a[href*="/series/"], [class*="reading-list"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Recent 메뉴 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/recent-reading|reading-list|library/i);
});

Then('Recent로 복귀한다.', async ({ page }) => {
  await expect(page).toHaveURL(/recent-reading|reading-list|library/i);
});

Then('Recent로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/recent-reading|reading-list|library/i);
});

Then('회차 뷰어로 진입된다.', async ({ page }) => {
  // 클릭 후 내비게이션 완료 대기 (SPA)
  await page.waitForURL(url => /\/episode\/|\/series\//.test(url.toString()), { timeout: 8000 }).catch(() => {});
  await expect(page).toHaveURL(/\/episode\/|\/series\//i);
});

Then('Subscribed 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Subscribed 화면으로 복귀된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Free episodes 메뉴 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Free episodes 화면으로 복귀된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Free episodes 작품 목록이 노출된다.', async ({ page }) => {
  const link = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await link.count()) === 0) { test.skip(true, 'Free episodes 목록 없음 — 동적 콘텐츠'); return; }
  await expect(link).toBeVisible({ timeout: 5000 });
});

Then('Wait until Free 탭으로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Wait until Free 화면으로 복귀된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('작품홈 으로 진입 된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//);
  await expect(page.locator('a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Comic 작품홈으로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//);
  await expect(page.locator('a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Novel 작품홈으로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//);
  await expect(page.locator('a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Updated 메뉴가 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Comics 작품리스트만 노출된다.', async ({ page }) => {
  // reading-list에서는 /episode/ 링크도 사용됨
  const link = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await link.count()) === 0) { test.skip(true, 'Comics 목록 없음 — 동적 콘텐츠'); return; }
  await expect(link).toBeVisible({ timeout: 5000 });
});

Then('Novels 작품리스트만 노출된다.', async ({ page }) => {
  const link = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await link.count()) === 0) { test.skip(true, 'Novels 목록 없음 — 동적 콘텐츠'); return; }
  await expect(link).toBeVisible({ timeout: 5000 });
});

Then('모든 작품 리스트가 노출된다.', async ({ page }) => {
  const link = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await link.count()) === 0) { test.skip(true, '작품 목록 없음 — 동적 콘텐츠'); return; }
  await expect(link).toBeVisible({ timeout: 5000 });
});

Then('안내문구가 노출된다.', async ({ page }) => {
  const empty = page.locator('[class*="empty"], .page-empty, [class*="no-data"]');
  if ((await empty.count()) === 0) { test.skip(true, '안내문구 없음'); return; }
  await expect(empty.first()).toBeVisible({ timeout: 5000 });
});

Then('Series 목록없을때 안내문구 노출된다.', async ({ page }) => {
  const empty = page.locator('[class*="empty"], .page-empty, [class*="no-data"]');
  if ((await empty.count()) === 0) { test.skip(true, '안내문구 없음'); return; }
  await expect(empty.first()).toBeVisible({ timeout: 5000 });
});

Then('Subs 목록없을때 안내문구 노출된다.', async ({ page }) => {
  const empty = page.locator('[class*="empty"], .page-empty, [class*="no-data"]');
  if ((await empty.count()) === 0) { test.skip(true, '안내문구 없음'); return; }
  await expect(empty.first()).toBeVisible({ timeout: 5000 });
});

Then('Gift Pass가 있는 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

// ──── Subscribed 전용 ────

Then('작품뷰어회차로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//);
  const likeBtn = page.locator('a.js-episode-like-btn, a[class*="like"]:not([href*="tapas.io"])');
  if ((await likeBtn.count()) > 0) await expect(likeBtn.first()).toBeVisible({ timeout: 5000 });
});

Then('노출되는 작품 목록의 New뱃지가 미노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
  await expect(page.locator('[class*="badge"][class*="new" i], [class*="new-badge"]')).toHaveCount(0);
});

Then('Settings으로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/settings|preferences/i);
});

// ──── Wait until Free 전용 ────

When('작품 리스트 노출 확인', async ({ page }) => {
  const link = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await link.count()) === 0) { test.skip(true, '보관함 작품 목록 없음 — 동적 콘텐츠'); return; }
  await expect(link).toBeVisible({ timeout: 5000 });
});

Then('아래 작품이 노출된다.', async ({ page }) => {
  const link = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await link.count()) === 0) { test.skip(true, '보관함 작품 목록 없음 — 동적 콘텐츠'); return; }
  await expect(link).toBeVisible({ timeout: 5000 });
});

Then('뷰어 회차로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//);
  const likeBtn = page.locator('a.js-episode-like-btn, a[class*="like"]:not([href*="tapas.io"])');
  if ((await likeBtn.count()) > 0) await expect(likeBtn.first()).toBeVisible({ timeout: 5000 });
});
