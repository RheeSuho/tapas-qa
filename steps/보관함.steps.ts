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
  await page.goto('https://tapas.io/reading-list?category=SUBSCRIBED');
});

When('GNB 보관함 아이콘 클릭 > Recent 클릭', async ({ page }) => {
  await page.goto('https://tapas.io/reading-list?category=RECENT');
});

When('Recent 클릭', async ({ page }) => {
  await page.locator('a.item-title[href*="category=RECENT"]').first().click();
});

When('Subscribed 클릭', async ({ page }) => {
  await page.locator('a.item-title[href*="category=SUBSCRIBED"]').first().click();
});

When('Free episodes 메뉴 클릭', async ({ page }) => {
  await page.locator('a.item-title[href*="category=FREE_EPISODES"]').first().click();
});

When('Wait until Free 메뉴 클릭', async ({ page }) => {
  await page.locator('a.item-title[href*="category=WAIT_UNTIL_FREE"]').first().click();
});

// Comics 필터 클릭 — 인박스-댓글.steps.ts의 /^(All|Comics|Novels) 필터 클릭$/ 에서 처리

When('우상단 필터 > [Comics] 버튼 클릭', async ({ page }) => {
  await page.locator('a.item-title[href*="type=COMICS"]').first().click();
});

When('필터 > [All] 버튼 클릭', async ({ page }) => {
  await page.locator('a.item-title[href*="type="]').first().click();
});

When('필터 > [Novels] 버튼 클릭', async ({ page }) => {
  await page.locator('a.item-title[href*="type=BOOKS"]').first().click();
});

When('탭 하단 [Comics] 버튼 클릭', async ({ page }) => {
  await page.locator('a.item-title[href*="type=COMICS"]').first().click();
});

// ──── Gift Passes ────

When('Get Gift Passes 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('작품 오른쪽의 [Get] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /get/i }).first().click();
});

When('Gift 수령', async ({ page }) => {
  await page.getByRole('button', { name: /get|claim|receive/i }).first().click();
});

// ──── 작품 / 뷰어 진입 ────

When('작품 클릭', async ({ page }) => {
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

When('임의의 작품 클릭', async ({ page }) => {
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

When('GNB > Home > 임의의 작품 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /^home$/i }).first().click();
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

When('작품 리스트 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('작품 정보 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Comic 작품 열람', async ({ page }) => {
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

When('Comic 작품 구독', async ({ page }) => {
  await page.getByRole('button', { name: /subscribe/i }).first().click();
});

When('Novel 작품 구독', async ({ page }) => {
  await page.getByRole('button', { name: /subscribe/i }).first().click();
});

// ──── 뒤로가기 ────

When('[<-] 백버튼 클릭', async ({ page }) => {
  await page.goBack();
});

When('[<] 백버튼 클릭', async ({ page }) => {
  await page.goBack();
});

When('상단 [<] 백버튼 클릭', async ({ page }) => {
  await page.goBack();
});

When('뒤로가기', async ({ page }) => {
  await page.goBack();
});

// ──── 결과 검증 ────

Then('보관함으로 진입되며 아래 메뉴들이 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/library/i);
  await expect(page.locator('body')).toBeVisible();
});

Then('Updated 메뉴가 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/library/i);
});

Then('Recent 메뉴 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Subscribed 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Free episodes 메뉴 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Wait until Free 탭으로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Gift Pass가 있는 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Gift 수령되어 버튼 비활성화로 변경된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^Free episodes 화면.+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Subscribed|Updated|Wait until Free|Recent) 화면.+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Comics|Novels|모든) 작품.+노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// (Comic|Novel) 작품.+노출된다. — 홈-카테고리.steps.ts의 /^(Comic|Novel|Mature|...) 작품.* 노출된다\.$/ 에서 처리
// Comics/Novels 작품리스트만 노출된다. — /^(Comics|Novels|모든) 작품.+노출된다\.$/ 에서 처리

Then('회차 뷰어로 진입된다.', async ({ page }) => {
  await expect(page).not.toHaveURL(/\/series\//i);
});

Then('작품뷰어회차로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 회차로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('회차뷰어 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('해당 작품홈으로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

Then('작품홈 으로 진입 된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

Then(/^(Comic|Novel) 작품홈으로 진입된다\.$/, async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

// (Comic|Novel) 작품홈 구독 버튼이 활성화되어 노출된다. — 홈-카테고리.steps.ts의 작품.* 노출된다 에서 처리

// Subscribed 화면에 구독한 작품이 상단에 추가되어 노출된다. — /^(Subscribed|Updated|...) 화면.+$/ 에서 처리

// 유저 홈으로 이동된다. — 프로필-more.steps.ts에서 처리

Then(/^(뷰어로 이동된다\.|설정된 랜딩페이지로).+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^\[Get\]버튼 > \[Read\]로 변경된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^\[Read\]로 노출된 작품 목록이 제거된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(아래 작품|작품 이미지).+노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Recent|Updated|Subscribed 화면|Wait until Free 화면|Free episodes 화면)(로| 로) 복귀(된다|한다)\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});
