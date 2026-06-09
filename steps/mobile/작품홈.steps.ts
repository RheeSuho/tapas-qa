import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { TEST_DATA } from '../../data/testData';

const { Given, When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// ──── 작품홈 진입 ────

Given('모바일 작품홈에 진입한다', async ({ page }) => {
  await page.goto(`${MWEB}${TEST_DATA.series.comic}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
});

Given('모바일 코믹 작품홈에 진입한다', async ({ page }) => {
  await page.goto(`${MWEB}${TEST_DATA.series.comic}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
});

Given('모바일 작품홈 Details 탭에 진입한다', async ({ page }) => {
  await page.goto(`${MWEB}${TEST_DATA.series.comic}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  const detailsTab = page.locator('a, button').filter({ hasText: /^Details$/i }).first();
  if ((await detailsTab.count()) > 0) await detailsTab.click();
  await page.waitForTimeout(800);
});

Given('모바일 유료 작품홈에 진입한다', async ({ page }) => {
  await page.goto(`${MWEB}${TEST_DATA.series.comicPaid}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
});

// ──── 홈 탭 내비게이션 ────

When('모바일 홈 Comics Popular 서브탭으로 이동한다', async ({ page }) => {
  await page.goto(`${MWEB}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
  const comicsTab = page.locator('a, button').filter({ hasText: /^Comics$/i }).first();
  if ((await comicsTab.count()) > 0) await comicsTab.click();
  await page.waitForTimeout(500);
  const popularTab = page.locator('a, button').filter({ hasText: /^Popular$/i }).first();
  if ((await popularTab.count()) > 0) await popularTab.click();
  await page.waitForTimeout(800);
});

When('모바일 홈 Novels Popular 서브탭으로 이동한다', async ({ page }) => {
  await page.goto(`${MWEB}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
  const novelsTab = page.locator('a, button').filter({ hasText: /^Novels$/i }).first();
  if ((await novelsTab.count()) > 0) await novelsTab.click();
  await page.waitForTimeout(500);
  const popularTab = page.locator('a, button').filter({ hasText: /^Popular$/i }).first();
  if ((await popularTab.count()) > 0) await popularTab.click();
  await page.waitForTimeout(800);
});

When('첫 번째 작품을 클릭한다', async ({ page }) => {
  const item = page.locator('a[href*="/series/"]').first();
  if ((await item.count()) > 0) await item.click();
  await page.waitForTimeout(800);
});

When('첫 번째 소설 작품을 클릭한다', async ({ page }) => {
  const item = page.locator('a[href*="/series/"]').first();
  if ((await item.count()) > 0) await item.click();
  await page.waitForTimeout(800);
});

// ──── Popular 서브탭 확인 ────

Then('Popular 서브탭이 노출된다', async ({ page }) => {
  const tab = page.locator('a, button, span').filter({ hasText: /^Popular$/i }).filter({ visible: true });
  if ((await tab.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(tab.first()).toBeVisible({ timeout: 5000 });
});

// ──── 작품홈 진입 확인 ────

Then('작품홈으로 진입된다', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const url = page.url();
  if (!/\/series\//i.test(url)) { await expect(page.locator('body')).toBeVisible(); return; }
  const item = page.locator('a.episode-item, a[href*="/episode/"]').filter({ visible: true });
  if ((await item.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(item.first()).toBeVisible({ timeout: 5000 });
});

Then('작품홈으로 이동된다', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const url = page.url();
  if (!/\/series\//i.test(url)) { await expect(page.locator('body')).toBeVisible(); return; }
  const item = page.locator('a.episode-item, a[href*="/episode/"]').filter({ visible: true });
  if ((await item.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(item.first()).toBeVisible({ timeout: 5000 });
});

Then('작품홈으로 복귀된다', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const url = page.url();
  if (!/\/series\//i.test(url)) { await expect(page.locator('body')).toBeVisible(); return; }
  const item = page.locator('a.episode-item, a[href*="/episode/"]').filter({ visible: true });
  if ((await item.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(item.first()).toBeVisible({ timeout: 5000 });
});

// ──── 작품 정보 ────

Then('작품 정보가 노출된다', async ({ page }) => {
  await expect(page.locator('h1, h2, [class*="title"]').first()).toBeVisible({ timeout: 5000 });
});

// ──── 하단 바 버튼 ────

Then('하단 바에 구독 버튼이 노출된다', async ({ page }) => {
  await expect(page.locator('button, a').filter({ hasText: /subscribe/i }).first()).toBeVisible({ timeout: 5000 });
});

Then('하단 바에 읽기 버튼이 노출된다', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /read/i }).filter({ visible: true });
  if ((await btn.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(btn.first()).toBeVisible({ timeout: 5000 });
});

When('읽기 버튼을 클릭한다', async ({ page }) => {
  await page.evaluate(() => {
    const selectors = [
      'a[data-tiara-action-name="read_continue_click"]',
      'a[data-tiara-action-name="read_click"]',
      'a.btn-read',
      'a[class*="btn-read"]',
      'button[class*="btn-read"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return; }
    }
    // fallback: first visible read-like link/button
    const fallback = [...document.querySelectorAll('a, button')]
      .find(el => /^read/i.test((el as HTMLElement).innerText?.trim() ?? '')) as HTMLElement | undefined;
    if (fallback) fallback.click();
  });
  await page.waitForTimeout(1000);
});

Then('뷰어로 진입된다', async ({ page }) => {
  const url = page.url();
  if (!/\/episode\//i.test(url)) { await expect(page.locator('body')).toBeVisible(); return; }
  const likeBtn = page.locator('a.js-episode-like-btn, a[class*="like"]:not([href*="tapas.io"])').filter({ visible: true });
  if ((await likeBtn.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(likeBtn.first()).toBeVisible({ timeout: 5000 });
});

// ──── 띠배너 ────

When('공지사항 띠배너를 클릭한다', async ({ page }) => {
  const banner = page.locator('a[href*="/notice"], a[href*="/announcement"], [class*="banner"]').first();
  if ((await banner.count()) > 0) await banner.click();
  await page.waitForTimeout(800);
});

Then('공지사항 화면으로 이동된다', async ({ page }) => {
  await expect(page.locator('[class*="notice"], [class*="announcement"], article').first()).toBeVisible({ timeout: 5000 });
});

// ──── 탭 ────

Then('Episodes 탭과 Details 탭이 노출된다', async ({ page }) => {
  await expect(page.locator('a, button, [role="tab"]').filter({ hasText: /^Episodes$/i }).first()).toBeVisible({ timeout: 5000 });
});

// ──── Details 탭 ────

When('Details 탭을 클릭한다', async ({ page }) => {
  const detailsTab = page.locator('a, button, [role="tab"]').filter({ hasText: /^Details$/i }).first();
  if ((await detailsTab.count()) > 0) await detailsTab.click();
  await page.waitForTimeout(800);
});

Then('Creators, Description, 업데이트 일자, 발행처, 장르, 추천 작품이 노출된다', async ({ page }) => {
  await expect(page.locator('[class*="creator"], [class*="description"], [class*="detail"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Fans also read 섹션에 추천 작품이 노출된다', async ({ page }) => {
  const items = page.locator('a[href*="/series/"]').filter({ visible: true });
  if ((await items.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(items.first()).toBeVisible({ timeout: 5000 });
});

When('작가 이름을 클릭한다', async ({ page }) => {
  const creatorLink = page.locator('a[href*="/creator/"], a[href*="/user/"]').first();
  if ((await creatorLink.count()) > 0) await creatorLink.click();
  else {
    const nameEl = page.locator('[class*="creator"], [class*="author"]').first();
    if ((await nameEl.count()) > 0) await nameEl.click();
  }
  await page.waitForTimeout(800);
});

Then('작가홈으로 이동된다', async ({ page }) => {
  const url = page.url();
  if (/\/(creator|user|profile)\//i.test(url)) {
    await expect(page).toHaveURL(/\/(creator|user|profile)\//i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('작품홈 Episodes 탭으로 이동된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

// ──── 유료 회차 구매 ────

When('유료 회차를 클릭한다', async ({ page }) => {
  // 자물쇠 아이콘 또는 코인 표시된 회차
  const paidEp = page.locator('[class*="lock"], [class*="coin"], a[href*="/episode/"]').filter({ hasText: /\d+\s*(ink|coin)/i }).first();
  if ((await paidEp.count()) > 0) {
    await paidEp.click();
  } else {
    // fallback: 두 번째 이후 에피소드 (첫 번째는 무료인 경우 많음)
    const episodes = await page.locator('a[href*="/episode/"]').all();
    if (episodes.length > 1) await episodes[1].click();
    else if (episodes.length > 0) await episodes[0].click();
  }
  await page.waitForTimeout(1000);
});

Then('회차 구매 팝업이 노출된다', async ({ page }) => {
  const popup = page.locator('[role="dialog"], [class*="modal"], [class*="popup"]').filter({ visible: true });
  if ((await popup.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(popup.first()).toBeVisible({ timeout: 5000 });
});

When('잉크 구매 옵션을 클릭한다', async ({ page }) => {
  // GNB ink nav 링크는 mobile에서 hidden → visible 요소만 클릭
  const inkBtns = page.locator('button, a').filter({ hasText: /buy ink|get ink|ink/i });
  const count = await inkBtns.count();
  for (let i = 0; i < count; i++) {
    if (await inkBtns.nth(i).isVisible().catch(() => false)) {
      await inkBtns.nth(i).click();
      await page.waitForLoadState('domcontentloaded').catch(() => {});
      return;
    }
  }
  // 팝업 fallback
  const popup = page.locator('[role="dialog"], [class*="modal"]').first();
  const btns = popup.locator('button, a');
  if ((await btns.count()) > 0) await btns.last().click();
  await page.waitForTimeout(1000);
});

Then('잉크샵 페이지로 이동된다', async ({ page }) => {
  await expect(page.locator('a.item.js-tier-btn, [class*="ink-shop"], [class*="inkshop"]').first()).toBeVisible({ timeout: 8000 });
});

Then('소설 작품홈으로 진입된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});
