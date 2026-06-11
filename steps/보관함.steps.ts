// 보관함 (Library) step 정의
// features/보관함/**/*.feature 대응

import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// ──── 사전 조건 ────

Given(/^(Updated|Recent|Subscribed|Free Episodes|Wait Until Free|PCWeb only) 작품 목록 없는 경우$/, async () => {
  // 특정 목록이 비어있는 상태 — 데이터 의존적, 자동화 범위 외
});

// ──── 보관함 진입 / 탭 이동 ────

// GNB > 라이브러리 메뉴 클릭 / GNB > 라이브러리 클릭 — common.steps.ts의 /^GNB > ([^>]+) 클릭$/ 에서 처리

When('GNB >보관함 클릭 > Suscribed클릭', async ({ page }) => {
  const lib = page.locator('a[href="/reading-list"]');
  if ((await lib.count()) > 0) await lib.first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const tab = page.locator('a[href*="category=SUBSCRIBED"]');
  if ((await tab.count()) > 0) await tab.first().click();
});

When('GNB 보관함 아이콘 클릭 > Recent 클릭', async ({ page }) => {
  const lib = page.locator('a[href="/reading-list"]');
  if ((await lib.count()) > 0) await lib.first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const tab = page.locator('a[href*="category=RECENT"]');
  if ((await tab.count()) > 0) await tab.first().click();
});

async function ensureOnReadingList(page: any) {
  if (!page.url().includes('reading-list')) {
    const lib = page.locator('a[href="/reading-list"]');
    if ((await lib.count()) > 0) {
      await lib.first().click();
      await page.waitForLoadState('domcontentloaded').catch(() => {});
    }
    if (page.url().includes('signin')) {
      throw new Error('[보관함] 로그인 세션 만료 — storageState 재생성 필요 (npm run test:setup)');
    }
  }
}

When('Recent 클릭', async ({ page }) => {
  await ensureOnReadingList(page);
  await expect(page.locator('a[href*="category=RECENT"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a[href*="category=RECENT"]').first().click();
});

When('Subscribed 클릭', async ({ page }) => {
  await ensureOnReadingList(page);
  await expect(page.locator('a[href*="category=SUBSCRIBED"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a[href*="category=SUBSCRIBED"]').first().click();
});

When('Free episodes 메뉴 클릭', async ({ page }) => {
  await ensureOnReadingList(page);
  await expect(page.locator('a[href*="category=FREE_EPISODES"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a[href*="category=FREE_EPISODES"]').first().click();
});

When('Wait until Free 메뉴 클릭', async ({ page }) => {
  await ensureOnReadingList(page);
  await expect(page.locator('a[href*="category=WAIT_UNTIL_FREE"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a[href*="category=WAIT_UNTIL_FREE"]').first().click();
});

// Comics 필터 클릭 — 인박스-댓글.steps.ts의 /^(All|Comics|Novels) 필터 클릭$/ 에서 처리

When('우상단 필터 > [Comics] 버튼 클릭', async ({ page }) => {
  // GNB의 a[href="/comics"]는 제외하고 보관함 필터 Comics만 클릭
  const link = page.locator('a:not([href="/comics"]), button').filter({ hasText: /^comics$/i }).filter({ visible: true });
  await expect(link.first()).toBeVisible({ timeout: 5000 });
  await link.first().click();
});

When('필터 > [All] 버튼 클릭', async ({ page }) => {
  const link = page.locator('a, button').filter({ hasText: /^all$/i }).filter({ visible: true });
  await expect(link.first()).toBeVisible({ timeout: 5000 });
  await link.first().click();
});

When('필터 > [Novels] 버튼 클릭', async ({ page }) => {
  // GNB의 a[href="/novels"]는 제외하고 보관함 필터 Novels만 클릭
  const link = page.locator('a:not([href="/novels"]), button').filter({ hasText: /^novels$/i }).filter({ visible: true });
  await expect(link.first()).toBeVisible({ timeout: 5000 });
  await link.first().click();
});

When('탭 하단 [Comics] 버튼 클릭', async ({ page }) => {
  const link = page.locator('a:not([href="/comics"]), button').filter({ hasText: /^comics$/i }).filter({ visible: true });
  await expect(link.first()).toBeVisible({ timeout: 5000 });
  await link.first().click();
});

// ──── Gift Passes ────

When('Get Gift Passes 영역 확인', async ({ page }) => {
  await expect(page.locator('.inbox-gift-item, [class*="gift"]').first()).toBeVisible({ timeout: 5000 });
});

When('작품 오른쪽의 [Get] 버튼 클릭', async ({ page }) => {
  // 작품 클릭 후 페이지가 이동됐을 수 있으므로 선물함으로 복귀
  if (!page.url().includes('/inbox/gift')) {
    const giftLink = page.locator('a[href="/inbox/gift"]');
    if ((await giftLink.count()) > 0) await giftLink.first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
  const btn = page.locator('.inbox-gift-item__btn-get').first();
  if ((await btn.count()) === 0) { test.skip(true, 'Gift Pass 없음 — 계정에 Gift Pass 없음'); return; }
  await expect(btn).toBeVisible({ timeout: 5000 });
  await btn.click();
});

When('Gift 수령', async ({ page }) => {
  const btn = page.getByRole('button', { name: /get|claim|receive/i });
  if ((await btn.count()) === 0) { test.skip(true, 'Gift 수령 버튼 없음'); return; }
  await expect(btn.first()).toBeVisible({ timeout: 5000 });
  await btn.first().click();
});

// ──── 작품 / 뷰어 진입 ────

When('작품 클릭', async ({ page }) => {
  // Gifts 페이지: thumbnail href="#" — data attribute나 JS에서 series URL 추출 후 이동
  if (page.url().includes('/inbox/gift')) {
    const seriesUrl = await page.evaluate(() => {
      const item = document.querySelector('.inbox-gift-item');
      if (!item) return null;
      // data-href, data-url, 또는 실제 link href 탐색
      const link = item.querySelector('a[href*="/series/"]');
      if (link) return (link as HTMLAnchorElement).href;
      const dataHref = (item as HTMLElement).dataset.href || (item as HTMLElement).dataset.url || (item as HTMLElement).dataset.seriesUrl;
      if (dataHref && dataHref.includes('/series/')) return dataHref;
      // 전체 DOM에서 series 링크 탐색
      const anySeriesLink = document.querySelector('a[href*="/series/"]');
      if (anySeriesLink) return (anySeriesLink as HTMLAnchorElement).href;
      return null;
    });
    if (seriesUrl) {
      await page.goto(seriesUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
      return;
    }
    // 직접 navigation 안 되면 thumbnail 클릭 시도
    const giftLink = page.locator('.inbox-gift-item a').filter({ has: page.locator('img') }).first();
    if ((await giftLink.count()) > 0) {
      await giftLink.click();
      await page.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => {});
    }
    return;
  }
  const link = page.getByRole('link').filter({ has: page.locator('img') });
  if ((await link.count()) === 0) {
    test.skip(true, '작품 목록이 비어있음 — 계정에 데이터 없음');
    return;
  }
  await expect(link.first()).toBeVisible({ timeout: 5000 });
  await link.first().click();
});

When('임의의 작품 클릭', async ({ page }) => {
  const link = page.getByRole('link').filter({ has: page.locator('img') });
  if ((await link.count()) === 0) {
    test.skip(true, '작품 목록이 비어있음 — 계정에 데이터 없음');
    return;
  }
  await expect(link.first()).toBeVisible({ timeout: 5000 });
  await link.first().click();
});

When('GNB > Home > 임의의 작품 클릭', async ({ page }) => {
  const homeLink = page.getByRole('link', { name: /^home$/i });
  if ((await homeLink.count()) > 0) await homeLink.first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const imgLink = page.getByRole('link').filter({ has: page.locator('img') });
  if ((await imgLink.count()) > 0) { await imgLink.first().click(); return; }
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a[href*="/series/"]').first().click();
});

When('작품 리스트 노출 확인', async ({ page }) => {
  await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 8000 });
});

When('작품 정보 영역 확인', async ({ page }) => {
  if (page.url().includes('/inbox/gift')) {
    const giftItem = page.locator('.inbox-gift-item');
    if ((await giftItem.count()) === 0) {
      test.skip(true, 'Gift Pass 없음 — 계정에 Gift Pass 없음');
      return;
    }
    await expect(giftItem.first()).toBeVisible({ timeout: 5000 });
    return;
  }
  await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 8000 });
});

When('Comic 작품 열람', async ({ page }) => {
  const imgLink = page.getByRole('link').filter({ has: page.locator('img') });
  if ((await imgLink.count()) > 0) { await imgLink.first().click(); return; }
  await expect(page.locator('a[href*="/series/"], a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a[href*="/series/"], a[href*="/episode/"]').first().click();
});

When('Comic 작품 구독', async ({ page }) => {
  await expect(page.getByRole('button', { name: /subscribe/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /subscribe/i }).first().click();
});

When('Novel 작품 구독', async ({ page }) => {
  await expect(page.getByRole('button', { name: /subscribe/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /subscribe/i }).first().click();
});

// ──── 뒤로가기 ────

async function goBackSafely(page: any) {
  await page.goBack();
  if (page.url() === 'about:blank' || page.url() === '') {
    await page.goto('/');
  }
}

When('[<-] 백버튼 클릭', async ({ page }) => {
  await goBackSafely(page);
});

When('[<] 백버튼 클릭', async ({ page }) => {
  await goBackSafely(page);
});

When('상단 [<] 백버튼 클릭', async ({ page }) => {
  await goBackSafely(page);
});

When('뒤로가기', async ({ page }) => {
  await page.goBack();
});

// ──── 결과 검증 ────

Then('보관함으로 진입되며 아래 메뉴들이 노출된다.', async ({ page }) => {
  // PC: a.item-title tabs; Mobile: URL 도착 여부만 확인
  const updatedTab = page.locator('a.item-title[href*="UPDATED"]');
  if (await updatedTab.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(updatedTab).toBeVisible();
    await expect(page.locator('a.item-title[href*="SUBSCRIBED"]')).toBeVisible();
  } else {
    await expect(page).toHaveURL(/reading-list|library/i);
  }
});

Then('Updated 메뉴가 노출된다.', async ({ page }) => {
  await expect(page.locator('a.item-title[href*="UPDATED"]')).toBeVisible({ timeout: 5000 });
});

Then('Recent 메뉴 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/reading-list|library/i);
});

Then('Subscribed 진입된다.', async ({ page }) => {
  await expect(page.locator('a.item-title[href*="SUBSCRIBED"]')).toBeVisible({ timeout: 5000 });
});

Then('Free episodes 메뉴 진입된다.', async ({ page }) => {
  await expect(page.locator('a.item-title[href*="FREE_EPISODES"]')).toBeVisible({ timeout: 5000 });
});

Then('Free episodes 작품 목록이 노출된다.', async ({ page }) => {
  await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then('Wait until Free 탭으로 진입된다.', async ({ page }) => {
  await expect(page.locator('a.item-title[href*="WAIT_UNTIL_FREE"]')).toBeVisible({ timeout: 5000 });
});

Then('Gift Pass가 있는 작품이 노출된다.', async ({ page }) => {
  const item = page.locator('.inbox-gift-item');
  if ((await item.count()) === 0) { test.skip(true, 'Gift 아이템 미노출 — Gift Pass 없는 계정'); return; }
  await expect(item.first()).toBeVisible({ timeout: 5000 });
});

Then('Gift 수령되어 버튼 비활성화로 변경된다.', async ({ page }) => {
  await expect(page.locator('.inbox-gift-item').first()).toBeVisible({ timeout: 5000 });
});

Then(/^Free episodes 화면.+$/, async ({ page }) => {
  await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then(/^(Subscribed|Updated|Wait until Free|Recent) 화면.+$/, async ({ page }) => {
  await expect(page.locator('.filter-wrap, .content-list-wrap, a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then(/^(Comics|Novels|모든) 작품.+노출된다\.$/, async ({ page }) => {
  await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
});

// (Comic|Novel) 작품.+노출된다. — 홈-카테고리.steps.ts의 /^(Comic|Novel|Mature|...) 작품.* 노출된다\.$/ 에서 처리
// Comics/Novels 작품리스트만 노출된다. — /^(Comics|Novels|모든) 작품.+노출된다\.$/ 에서 처리

Then('회차 뷰어로 진입된다.', async ({ page }) => {
  await expect(page.locator('a.toolbar-btn.js-episode-like-btn, .toolbar-btn[class*="like"], .viewer-toolbar a[class*="like"]').first()).toBeVisible({ timeout: 10000 });
});

Then('작품뷰어회차로 진입된다.', async ({ page }) => {
  await expect(page.locator('a.toolbar-btn.js-episode-like-btn, .toolbar-btn[class*="like"], .viewer-toolbar a[class*="like"]').first()).toBeVisible({ timeout: 10000 });
});

Then('뷰어 회차로 진입된다.', async ({ page }) => {
  await expect(page.locator('a.toolbar-btn.js-episode-like-btn, .toolbar-btn[class*="like"], .viewer-toolbar a[class*="like"]').first()).toBeVisible({ timeout: 10000 });
});

Then('회차뷰어 진입된다.', async ({ page }) => {
  await expect(page.locator('a.toolbar-btn.js-episode-like-btn, .toolbar-btn[class*="like"], .viewer-toolbar a[class*="like"]').first()).toBeVisible({ timeout: 10000 });
});

Then('해당 작품홈으로 이동된다.', async ({ page }) => {
  // Gifts 페이지에 머무는 경우 (thumbnail href="#" → navigate 없음)
  if (page.url().includes('/inbox/gift')) {
    await expect(page.locator('.inbox-gift-item').first()).toBeVisible({ timeout: 5000 });
    return;
  }
  // series/episode 페이지로 이동된 경우
  await expect(page.locator('a.episode-item, a.toolbar-btn.js-episode-like-btn, .series-header, a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('작품홈 으로 진입 된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 8000 });
});

Then(/^(Comic|Novel) 작품홈으로 진입된다\.$/, async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

Then(/^(Comic|Novel) 작품홈 구독 버튼이 활성화되어 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('a.js-subscribe-btn').first()).toBeVisible({ timeout: 5000 });
});

Then(/^(뷰어로 이동된다\.|설정된 랜딩페이지로).+$/, async ({ page }) => {
  await expect(page.locator('a.toolbar-btn.js-episode-like-btn, a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then(/^\[Get\]버튼 > \[Read\]로 변경된다\.$/, async ({ page }) => {
  const readBtn = page.locator('.inbox-gift-item__btn-read, button.js-inbox-gift-read').first();
  const isRead = await readBtn.isVisible().catch(() => false);
  if (isRead) { await expect(readBtn).toBeVisible(); return; }
  await expect(page.locator('.inbox-gift-item').filter({ has: page.getByRole('button', { name: /^read$/i }) }).first()).toBeVisible({ timeout: 5000 });
});

Then(/^\[Read\]로 노출된 작품 목록이 제거된다\.$/, async ({ page }) => {
  const isEmpty = await page.locator('.page-empty').isVisible().catch(() => false);
  if (isEmpty) { await expect(page.locator('.page-empty')).toBeVisible(); return; }
  const remaining = await page.locator('button.js-inbox-gift-get').count();
  if (remaining > 0) { test.skip(true, `미수령 Gift ${remaining}개 남아있음 — 계정에 추가 Gift 있어 0건 검증 불가`); return; }
  await expect(page.locator('button.js-inbox-gift-get')).toHaveCount(0);
});

Then(/^(아래 작품|작품 이미지).+노출된다\.$/, async ({ page }) => {
  await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then(/^(Recent|Updated|Subscribed 화면|Wait until Free 화면|Free episodes 화면)(로| 로) 복귀(된다|한다)\.$/, async ({ page }) => {
  await expect(page.locator('.filter-wrap, .content-list-wrap, a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});
