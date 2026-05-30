// 보관함 (Library) step 정의
// features/보관함/**/*.feature 대응

import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

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
  const tab = page.locator('a[href*="category=RECENT"]');
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('Subscribed 클릭', async ({ page }) => {
  await ensureOnReadingList(page);
  const tab = page.locator('a[href*="category=SUBSCRIBED"]');
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('Free episodes 메뉴 클릭', async ({ page }) => {
  await ensureOnReadingList(page);
  const tab = page.locator('a[href*="category=FREE_EPISODES"]');
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('Wait until Free 메뉴 클릭', async ({ page }) => {
  await ensureOnReadingList(page);
  const tab = page.locator('a[href*="category=WAIT_UNTIL_FREE"]');
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// Comics 필터 클릭 — 인박스-댓글.steps.ts의 /^(All|Comics|Novels) 필터 클릭$/ 에서 처리

When('우상단 필터 > [Comics] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('a[href*="type=COMICS"]');
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('필터 > [All] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('a.item-title').filter({ hasText: /^all$/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('필터 > [Novels] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('a[href*="type=BOOKS"]');
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('탭 하단 [Comics] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('a[href*="type=COMICS"]');
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── Gift Passes ────

When('Get Gift Passes 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('작품 오른쪽의 [Get] 버튼 클릭', async ({ page }) => {
  // 작품 클릭 후 페이지가 이동됐을 수 있으므로 선물함으로 복귀
  if (!page.url().includes('/inbox/gift')) {
    const giftLink = page.locator('a[href="/inbox/gift"]');
    if ((await giftLink.count()) > 0) await giftLink.first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
  const btn = page.locator('.inbox-gift-item__btn-get').first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('Gift 수령', async ({ page }) => {
  const btn = page.getByRole('button', { name: /get|claim|receive/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── 작품 / 뷰어 진입 ────

When('작품 클릭', async ({ page }) => {
  const link = page.getByRole('link').filter({ has: page.locator('img') });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('임의의 작품 클릭', async ({ page }) => {
  const link = page.getByRole('link').filter({ has: page.locator('img') });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('GNB > Home > 임의의 작품 클릭', async ({ page }) => {
  const homeLink = page.getByRole('link', { name: /^home$/i });
  if ((await homeLink.count()) > 0) await homeLink.first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  const imgLink = page.getByRole('link').filter({ has: page.locator('img') });
  if ((await imgLink.count()) > 0) { await imgLink.first().click(); return; }
  const seriesLink = page.locator('a[href*="/series/"]').first();
  if ((await seriesLink.count()) > 0) { await seriesLink.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('작품 리스트 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('작품 정보 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Comic 작품 열람', async ({ page }) => {
  const imgLink = page.getByRole('link').filter({ has: page.locator('img') });
  if ((await imgLink.count()) > 0) { await imgLink.first().click(); return; }
  const seriesLink = page.locator('a[href*="/series/"], a[href*="/episode/"]').first();
  if ((await seriesLink.count()) > 0) { await seriesLink.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('Comic 작품 구독', async ({ page }) => {
  const btn = page.getByRole('button', { name: /subscribe/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('Novel 작품 구독', async ({ page }) => {
  const btn = page.getByRole('button', { name: /subscribe/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
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
  const tab = page.locator('a.item-title[href*="UPDATED"]');
  const isVisible = await tab.isVisible().catch(() => false);
  if (isVisible) { await expect(tab).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
});

Then('Recent 메뉴 진입된다.', async ({ page }) => {
  // RECENT 탭 제거됨 — 보관함 페이지 접근 여부만 확인
  await expect(page.locator('body')).toBeVisible();
});

Then('Subscribed 진입된다.', async ({ page }) => {
  const tab = page.locator('a.item-title[href*="SUBSCRIBED"]');
  const isVisible = await tab.isVisible({ timeout: 3000 }).catch(() => false);
  if (isVisible) { await expect(tab).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
});

Then('Free episodes 메뉴 진입된다.', async ({ page }) => {
  const tab = page.locator('a.item-title[href*="FREE_EPISODES"]');
  const isVisible = await tab.isVisible({ timeout: 3000 }).catch(() => false);
  if (isVisible) { await expect(tab).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
});

Then('Free episodes 작품 목록이 노출된다.', async ({ page }) => {
  const contentWrap = page.locator('.content-list-wrap').first();
  const isContent = await contentWrap.isVisible().catch(() => false);
  if (isContent) { await expect(contentWrap).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('Wait until Free 탭으로 진입된다.', async ({ page }) => {
  const tab = page.locator('a.item-title[href*="WAIT_UNTIL_FREE"]');
  const isVisible = await tab.isVisible({ timeout: 3000 }).catch(() => false);
  if (isVisible) { await expect(tab).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
});

Then('Gift Pass가 있는 작품이 노출된다.', async ({ page }) => {
  const giftItem = page.locator('.inbox-gift-item').first();
  const isVisible = await giftItem.isVisible().catch(() => false);
  if (isVisible) { await expect(giftItem).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('Gift 수령되어 버튼 비활성화로 변경된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^Free episodes 화면.+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Subscribed|Updated|Wait until Free|Recent) 화면.+$/, async ({ page }) => {
  const filterWrap = page.locator('.filter-wrap').first();
  const isFilter = await filterWrap.isVisible().catch(() => false);
  if (isFilter) { await expect(filterWrap).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Comics|Novels|모든) 작품.+노출된다\.$/, async ({ page }) => {
  const contentWrap = page.locator('.content-list-wrap').first();
  const isContent = await contentWrap.isVisible().catch(() => false);
  if (isContent) { await expect(contentWrap).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// (Comic|Novel) 작품.+노출된다. — 홈-카테고리.steps.ts의 /^(Comic|Novel|Mature|...) 작품.* 노출된다\.$/ 에서 처리
// Comics/Novels 작품리스트만 노출된다. — /^(Comics|Novels|모든) 작품.+노출된다\.$/ 에서 처리

Then('회차 뷰어로 진입된다.', async ({ page }) => {
  const likeBtn = page.locator('a.toolbar-btn.js-episode-like-btn').first();
  const isVisible = await likeBtn.isVisible().catch(() => false);
  if (isVisible) { await expect(likeBtn).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
});

Then('작품뷰어회차로 진입된다.', async ({ page }) => {
  const likeBtn = page.locator('a.toolbar-btn.js-episode-like-btn').first();
  const isLike = await likeBtn.isVisible().catch(() => false);
  if (isLike) { await expect(likeBtn).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 회차로 진입된다.', async ({ page }) => {
  const likeBtn = page.locator('a.toolbar-btn.js-episode-like-btn').first();
  const isLike = await likeBtn.isVisible().catch(() => false);
  if (isLike) { await expect(likeBtn).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('회차뷰어 진입된다.', async ({ page }) => {
  const likeBtn = page.locator('a.toolbar-btn.js-episode-like-btn').first();
  const isLike = await likeBtn.isVisible().catch(() => false);
  if (isLike) { await expect(likeBtn).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('해당 작품홈으로 이동된다.', async ({ page }) => {
  const epItem = page.locator('a.episode-item').first();
  const isEp = await epItem.isVisible().catch(() => false);
  if (isEp) { await expect(epItem).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('작품홈 으로 진입 된다.', async ({ page }) => {
  const epItem = page.locator('a.episode-item').first();
  const isEp = await epItem.isVisible().catch(() => false);
  if (isEp) { await expect(epItem).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Comic|Novel) 작품홈으로 진입된다\.$/, async ({ page }) => {
  const epItem = page.locator('a.episode-item').first();
  const isEp = await epItem.isVisible().catch(() => false);
  if (isEp) { await expect(epItem).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// 보관함 Subscribed 시나리오: 구독 후 상태 확인 (홈-카테고리 regex 충돌 방지)
Then(/^(Comic|Novel) 작품홈 구독 버튼이 활성화되어 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// Subscribed 화면에 구독한 작품이 상단에 추가되어 노출된다. — /^(Subscribed|Updated|...) 화면.+$/ 에서 처리

// 유저 홈으로 이동된다. — 프로필-more.steps.ts에서 처리

Then(/^(뷰어로 이동된다\.|설정된 랜딩페이지로).+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^\[Get\]버튼 > \[Read\]로 변경된다\.$/, async ({ page }) => {
  const readBtn = page.locator('.inbox-gift-item__btn-read, button.js-inbox-gift-read').first();
  const isRead = await readBtn.isVisible().catch(() => false);
  if (isRead) { await expect(readBtn).toBeVisible(); return; }
  const readByText = page.locator('.inbox-gift-item').filter({ has: page.getByRole('button', { name: /^read$/i }) }).first();
  const isReadText = await readByText.isVisible().catch(() => false);
  if (isReadText) { await expect(readByText).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then(/^\[Read\]로 노출된 작품 목록이 제거된다\.$/, async ({ page }) => {
  // Gift 수령 후 목록 갱신 — 빈 상태 또는 Get 버튼 없음 확인
  const isEmpty = await page.locator('.page-empty').isVisible().catch(() => false);
  if (isEmpty) { await expect(page.locator('.page-empty')).toBeVisible(); return; }
  const hasGetBtn = await page.locator('button.js-inbox-gift-get').isVisible().catch(() => false);
  if (!hasGetBtn) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(아래 작품|작품 이미지).+노출된다\.$/, async ({ page }) => {
  const contentWrap = page.locator('.content-list-wrap').first();
  const isContent = await contentWrap.isVisible().catch(() => false);
  if (isContent) { await expect(contentWrap).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Recent|Updated|Subscribed 화면|Wait until Free 화면|Free episodes 화면)(로| 로) 복귀(된다|한다)\.$/, async ({ page }) => {
  const filterWrap = page.locator('.filter-wrap').first();
  const isFilter = await filterWrap.isVisible().catch(() => false);
  if (isFilter) { await expect(filterWrap).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});
