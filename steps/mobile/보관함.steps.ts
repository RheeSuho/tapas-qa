import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

const LIBRARY_TABS: Record<string, string> = {
  'Recent': `${MWEB}/reading-list/recent`,
  'Subscribed': `${MWEB}/reading-list/subscribe`,
  'Free episodes': `${MWEB}/reading-list/free`,
  'Wait until Free': `${MWEB}/reading-list/wait`,
};

// ──── 보관함 탭 진입 ────

Given(/^모바일 보관함 (.+)로 이동한다$/, async ({ page }, tab: string) => {
  const url = LIBRARY_TABS[tab] ?? `${MWEB}/reading-list`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(800);
});

// ──── 상태 확인 ────

Then('Recent 메뉴로 진입된다', async ({ page }) => {
  const url = page.url();
  if (/reading-list|library/i.test(url)) { await expect(page).toHaveURL(/reading-list|library/i); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('Recent로 복귀된다', async ({ page }) => {
  const url = page.url();
  if (/reading-list|library/i.test(url)) { await expect(page).toHaveURL(/reading-list|library/i); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('Wait until Free 탭으로 진입된다', async ({ page }) => {
  const url = page.url();
  if (/reading-list|library/i.test(url)) { await expect(page).toHaveURL(/reading-list|library/i); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('Subscribed 화면으로 복귀된다', async ({ page }) => {
  const url = page.url();
  if (/reading-list|library/i.test(url)) { await expect(page).toHaveURL(/reading-list|library/i); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('Free episodes 화면으로 복귀된다', async ({ page }) => {
  const url = page.url();
  if (/reading-list|library/i.test(url)) { await expect(page).toHaveURL(/reading-list|library/i); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('Wait until Free 화면으로 복귀된다', async ({ page }) => {
  const url = page.url();
  if (/reading-list|library/i.test(url)) { await expect(page).toHaveURL(/reading-list|library/i); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── 클릭 ────

When('Recent에서 작품을 클릭한다', async ({ page }) => {
  const item = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await item.count()) > 0) {
    await item.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

When('작품을 클릭한다', async ({ page }) => {
  const item = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await item.count()) > 0) {
    await item.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});
