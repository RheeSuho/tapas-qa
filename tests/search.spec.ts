import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { TEST_DATA } from '../data/testData';

test('검색 → 작품 진입 → 뒤로가기로 홈 복귀', async ({ page }) => {
  const home = new HomePage(page);
  const search = new SearchPage(page);

  await home.goto();
  await home.expectLoaded();

  // 1. 검색 필드 클릭 → 2. 키워드 입력
  await home.openSearch();
  await search.enterKeyword(TEST_DATA.search.keyword);

  // 3. 검색 결과 + 탭 노출 확인
  await search.expectResultsVisible();
  await search.expectResultTabsVisible();

  // 4. 작품 클릭 → 작품홈 이동
  await search.clickWork(TEST_DATA.search.workTitle);
  await search.expectOnSeriesPage(TEST_DATA.search.workTitle);

  // 5. 뒤로가기 → 검색 결과 복귀
  await page.goBack();
  await search.expectResultsVisible();

  // 6. 뒤로가기 → 홈 복귀 (PC 웹엔 Cancel 버튼이 없어 뒤로가기로 대체)
  await page.goBack();
  await home.expectLoaded();
});