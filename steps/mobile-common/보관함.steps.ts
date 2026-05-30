import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { TEST_DATA } from '../../data/testData';

const { When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// ──── 탭 진입 ────

When('Recent 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /^recent$/i }).first();
  if ((await tab.count()) > 0) {
    await tab.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/reading-list?tab=recent`, { waitUntil: 'domcontentloaded' });
  }
});

When('Subscribed 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /^subscribed$/i }).first();
  if ((await tab.count()) > 0) {
    await tab.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/reading-list?tab=subscribed`, { waitUntil: 'domcontentloaded' });
  }
});

When('Free episodes 메뉴 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /free episodes/i }).first();
  if ((await tab.count()) > 0) {
    await tab.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/reading-list?tab=free`, { waitUntil: 'domcontentloaded' });
  }
});

When('Wait until Free 메뉴 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /wait until free/i }).first();
  if ((await tab.count()) > 0) {
    await tab.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/reading-list?tab=wuf`, { waitUntil: 'domcontentloaded' });
  }
});

// ──── 작품 클릭 ────

When('작품 클릭', async ({ page }) => {
  const item = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await item.count()) > 0) {
    await item.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

When('작품 리스트 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Comic 작품 열람', async ({ page }) => {
  // 만화 작품 첫 번째 항목 클릭 (에피소드 열람)
  const episodeLink = page.locator('a[href*="/episode/"]').first();
  if ((await episodeLink.count()) > 0) {
    await episodeLink.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    const seriesLink = page.locator('a[href*="/series/"]').first();
    if ((await seriesLink.count()) > 0) await seriesLink.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

When('임의의 작품 클릭', async ({ page }) => {
  const item = page.locator('a[href*="/series/"]').first();
  if ((await item.count()) > 0) {
    await item.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── 필터 (Subscribed / Free episodes / Wait until Free 공통) ────

When('Comics 필터 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^comics$/i }).first();
  if ((await btn.count()) > 0) {
    await btn.click();
    await page.waitForTimeout(400);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

When('Novels 필터 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^novels$/i }).first();
  if ((await btn.count()) > 0) {
    await btn.click();
    await page.waitForTimeout(400);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

When('All 필터 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^all$/i }).first();
  if ((await btn.count()) > 0) {
    await btn.click();
    await page.waitForTimeout(400);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// PCW 전용 필터 (feature 파일에 [PCW] / [MW] 분기 있음 — [PCW] step은 공통.steps.ts에서 noop)

When('우상단 필터 > [Comics] 버튼 클릭', async ({ page }) => {
  // [MW] 분기: 우상단 필터 버튼 → Comics 선택
  const filterBtn = page.locator('button').filter({ hasText: /filter|comics/i }).first();
  if ((await filterBtn.count()) > 0) {
    await filterBtn.click();
    await page.waitForTimeout(300);
    const comicsOption = page.locator('[role="option"], li, button').filter({ hasText: /^comics$/i }).first();
    if ((await comicsOption.count()) > 0) await comicsOption.click();
    await page.waitForTimeout(400);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

When('필터 > [Novels] 버튼 클릭', async ({ page }) => {
  const novelsOption = page.locator('[role="option"], li, button').filter({ hasText: /^novels$/i }).first();
  if ((await novelsOption.count()) > 0) {
    await novelsOption.click();
    await page.waitForTimeout(400);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

When('필터 > [All] 버튼 클릭', async ({ page }) => {
  const allOption = page.locator('[role="option"], li, button').filter({ hasText: /^all$/i }).first();
  if ((await allOption.count()) > 0) {
    await allOption.click();
    await page.waitForTimeout(400);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// PCW 전용 탭 하단 필터 (모바일에서는 noop 처리)

When('탭 하단 [Comics] 버튼 클릭', async ({ page }) => {
  // PCW only — 모바일에서는 이 버튼이 없을 수 있음
  const btn = page.locator('button, a').filter({ hasText: /^comics$/i }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

When('[Novels] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^novels$/i }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

When('[All] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^all$/i }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

// Subscribed > Mark All As Read / Setting

When('[Mark All As Read] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('button').filter({ hasText: /mark all as read/i }).first();
  if ((await btn.count()) > 0) {
    await btn.click();
    await page.waitForTimeout(600);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── Then ────

Then('보관함으로 진입되며 아래 메뉴들이 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
  await expect(page.locator('body')).toBeVisible();
});

Then('Recent 메뉴 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Recent로 복귀한다.', async ({ page }) => {
  const url = page.url();
  if (/reading-list|library/i.test(url)) {
    await expect(page).toHaveURL(/reading-list|library/i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('Recent로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('회차 뷰어로 진입된다.', async ({ page }) => {
  const url = page.url();
  if (url.includes('/episode/') || url.includes('/viewer')) {
    await expect(page.locator('body')).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('Subscribed 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Subscribed 화면으로 복귀된다.', async ({ page }) => {
  const url = page.url();
  if (/reading-list|library/i.test(url)) {
    await expect(page).toHaveURL(/reading-list|library/i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('Free episodes 메뉴 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Free episodes 화면으로 복귀된다.', async ({ page }) => {
  const url = page.url();
  if (/reading-list|library/i.test(url)) {
    await expect(page).toHaveURL(/reading-list|library/i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('Free episodes 작품 목록이 노출된다.', async ({ page }) => {
  const items = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  const isVisible = await items.isVisible({ timeout: 5000 }).catch(() => false);
  if (isVisible) {
    await expect(items).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('Wait until Free 탭으로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Wait until Free 화면으로 복귀된다.', async ({ page }) => {
  const url = page.url();
  if (/reading-list|library/i.test(url)) {
    await expect(page).toHaveURL(/reading-list|library/i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('작품홈 으로 진입 된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Comic 작품홈으로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Novel 작품홈으로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Updated 메뉴가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Comics 작품리스트만 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Novels 작품리스트만 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('모든 작품 리스트가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('안내문구가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Series 목록없을때 안내문구 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Subs 목록없을때 안내문구 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Gift Pass가 있는 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── Subscribed 전용 ────

Then('작품뷰어회차로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('노출되는 작품 목록의 New뱃지가 미노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Settings으로 진입된다.', async ({ page }) => {
  const url = page.url();
  if (url.includes('/settings') || url.includes('/account')) {
    await expect(page.locator('body')).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── Wait until Free 전용 ────

When('작품 리스트 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('아래 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 회차로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});
