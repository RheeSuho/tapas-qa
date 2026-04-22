// steps/search.steps.ts
// features/검색.feature의 각 줄을 실제 동작으로 연결

import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';

const { Given, When, Then } = createBdd();

// Given ─────────────────────────────────────
Given('홈에 접속한다', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.expectLoaded();
});

// When ─────────────────────────────────────
When('검색을 연다', async ({ page }) => {
  const home = new HomePage(page);
  await home.openSearch();
});

When('{string}로 검색한다', async ({ page }, keyword: string) => {
  const search = new SearchPage(page);
  await search.enterKeyword(keyword);
});

When('{string} 작품을 클릭한다', async ({ page }, workTitle: string) => {
  const search = new SearchPage(page);
  await search.clickWork(workTitle);
});

When('뒤로가기를 누른다', async ({ page }) => {
  await page.goBack();
});

When('뒤로가기를 다시 누른다', async ({ page }) => {
  await page.goBack();
});

// Then ─────────────────────────────────────
Then('검색 결과가 보인다', async ({ page }) => {
  const search = new SearchPage(page);
  await search.expectResultsVisible();
});

Then('결과 탭들이 모두 보인다', async ({ page }) => {
  const search = new SearchPage(page);
  await search.expectResultTabsVisible();
});

Then('작품 상세 페이지로 이동한다', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

Then('검색 결과로 돌아온다', async ({ page }) => {
  const search = new SearchPage(page);
  await search.expectResultsVisible();
});

Then('홈으로 돌아온다', async ({ page }) => {
  const home = new HomePage(page);
  await home.expectLoaded();
});