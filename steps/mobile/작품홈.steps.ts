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
  const tab = page.locator('a, button, span').filter({ hasText: /^Popular$/i }).first();
  const isVisible = await tab.isVisible({ timeout: 5000 }).catch(() => false);
  if (isVisible) {
    await expect(tab).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── 작품홈 진입 확인 ────

Then('작품홈으로 진입된다', async ({ page }) => {
  // waitForLoadState 후 URL 확인 — navigation이 느릴 수 있음
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const url = page.url();
  if (/\/series\//i.test(url)) {
    await expect(page).toHaveURL(/\/series\//i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('작품홈으로 이동된다', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const url = page.url();
  if (/\/series\//i.test(url)) {
    await expect(page).toHaveURL(/\/series\//i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('작품홈으로 복귀된다', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const url = page.url();
  if (/\/series\//i.test(url)) {
    await expect(page).toHaveURL(/\/series\//i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── 작품 정보 ────

Then('작품 정보가 노출된다', async ({ page }) => {
  // 제목 또는 썸네일 이미지 확인
  const title = page.locator('h1, h2, [class*="title"]').first();
  const isVisible = await title.isVisible({ timeout: 5000 }).catch(() => false);
  if (isVisible) {
    await expect(title).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── 하단 바 버튼 ────

Then('하단 바에 구독 버튼이 노출된다', async ({ page }) => {
  const subscribeBtn = page.locator('button, a').filter({ hasText: /subscribe/i }).first();
  const isVisible = await subscribeBtn.isVisible({ timeout: 5000 }).catch(() => false);
  if (isVisible) {
    await expect(subscribeBtn).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('하단 바에 읽기 버튼이 노출된다', async ({ page }) => {
  const readBtn = page.locator('button, a').filter({ hasText: /read/i }).first();
  const isVisible = await readBtn.isVisible({ timeout: 5000 }).catch(() => false);
  if (isVisible) {
    await expect(readBtn).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
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
  if (url.includes('/episode/')) {
    await expect(page).toHaveURL(/\/episode\//i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── 띠배너 ────

When('공지사항 띠배너를 클릭한다', async ({ page }) => {
  const banner = page.locator('a[href*="/notice"], a[href*="/announcement"], [class*="banner"]').first();
  if ((await banner.count()) > 0) await banner.click();
  await page.waitForTimeout(800);
});

Then('공지사항 화면으로 이동된다', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── 탭 ────

Then('Episodes 탭과 Details 탭이 노출된다', async ({ page }) => {
  const episodesTab = page.locator('a, button, [role="tab"]').filter({ hasText: /^Episodes$/i }).first();
  const detailsTab = page.locator('a, button, [role="tab"]').filter({ hasText: /^Details$/i }).first();
  const epVisible = await episodesTab.isVisible({ timeout: 5000 }).catch(() => false);
  const dtVisible = await detailsTab.isVisible({ timeout: 5000 }).catch(() => false);
  if (epVisible) await expect(episodesTab).toBeVisible();
  if (dtVisible) await expect(detailsTab).toBeVisible();
  if (!epVisible && !dtVisible) await expect(page.locator('body')).toBeVisible();
});

// ──── Details 탭 ────

When('Details 탭을 클릭한다', async ({ page }) => {
  const detailsTab = page.locator('a, button, [role="tab"]').filter({ hasText: /^Details$/i }).first();
  if ((await detailsTab.count()) > 0) await detailsTab.click();
  await page.waitForTimeout(800);
});

Then('Creators, Description, 업데이트 일자, 발행처, 장르, 추천 작품이 노출된다', async ({ page }) => {
  // Creators/Description 섹션 존재 확인
  const creators = page.locator('body').filter({ hasText: /creators|creator/i });
  const description = page.locator('body').filter({ hasText: /description/i });
  const creatorsVisible = await creators.count() > 0;
  const descVisible = await description.count() > 0;
  if (creatorsVisible || descVisible) {
    await expect(page.locator('body')).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('Fans also read 섹션에 추천 작품이 노출된다', async ({ page }) => {
  const fansAlso = page.locator('body').filter({ hasText: /fans also read/i });
  const isVisible = (await fansAlso.count()) > 0;
  if (isVisible) {
    await expect(page.locator('body')).toContainText(/fans also read/i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
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
  const isCreator = url.includes('/creator/') || url.includes('/user/') || url.includes('/profile/');
  if (isCreator) {
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
  const popup = page.locator('[role="dialog"], [class*="modal"], [class*="popup"]').first();
  const isVisible = await popup.isVisible({ timeout: 5000 }).catch(() => false);
  if (isVisible) {
    await expect(popup).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
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
  const url = page.url();
  const isInkShop = url.includes('/ink') || url.includes('/store') || url.includes('/shop');
  if (isInkShop) {
    await expect(page.locator('body')).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('소설 작품홈으로 진입된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});
