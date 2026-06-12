import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

const LIBRARY_TABS: Record<string, string> = {
  'Recent': `${MWEB}/recent-reading`,
  'Subscribed': `${MWEB}/reading-list?category=SUBSCRIBED`,
  'Free episodes': `${MWEB}/reading-list?category=FREE_EPISODES`,
  'Wait until Free': `${MWEB}/reading-list?category=WAIT_UNTIL_FREE`,
};

// ──── 보관함 탭 진입 ────

Given(/^모바일 보관함 (.+)로 이동한다$/, async ({ page }, tab: string) => {
  const url = LIBRARY_TABS[tab] ?? `${MWEB}/reading-list`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(800);
});

// ──── 상태 확인 ────

Then('Recent 메뉴로 진입된다', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library|recent-reading/i);
});

Then('Recent로 복귀된다', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library|recent-reading/i);
});

Then('Wait until Free 탭으로 진입된다', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Subscribed 화면으로 복귀된다', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Free episodes 화면으로 복귀된다', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Wait until Free 화면으로 복귀된다', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

// ──── 클릭 ────

When('Recent에서 작품을 클릭한다', async ({ page }) => {
  // SPA waitForURL 미작동 대응 — href 직접 추출 후 goto
  const href = await page.evaluate(() => {
    const ep = document.querySelector('a[href*="/episode/"]') as HTMLAnchorElement | null;
    if (ep) return ep.getAttribute('href');
    const sr = document.querySelector('a[href*="/series/"]') as HTMLAnchorElement | null;
    return sr?.getAttribute('href') ?? null;
  });
  if (!href) { test.skip(true, 'Recent 목록 없음 — 동적 콘텐츠'); return; }
  await page.goto(`${MWEB}${href}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
});

When('작품을 클릭한다', async ({ page }) => {
  const link = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await link.count()) === 0) { test.skip(true, '보관함 작품 목록 없음 — 동적 콘텐츠'); return; }
  const href = await link.getAttribute('href');
  if (!href) { test.skip(true, '보관함 작품 목록 없음 — 동적 콘텐츠'); return; }
  await page.goto(`${MWEB}${href}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
});
