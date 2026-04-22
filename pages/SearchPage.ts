import { Page, expect, Locator } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  private get searchInput(): Locator {
    return this.page.getByPlaceholder('Search');
  }

  async enterKeyword(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
  }

  async expectResultsVisible() {
    await expect(this.page).toHaveURL(/search/i);
    // "Search Results" 제목으로 결과 페이지 도달 확인 (더 견고함)
    await expect(
      this.page.getByRole('heading', { name: /search results/i })
    ).toBeVisible();
  }

  async expectResultTabsVisible() {
  // 4개 탭 텍스트가 페이지에 보이는지 확인.
  // exact: true 빼고 .first() 써서 다중 매치/whitespace 유연성 확보
  for (const tab of ['Comics', 'Novels', 'People', 'Tags']) {
    await expect(this.page.getByText(tab).first()).toBeVisible();
  }
}

  async clickWork(workTitle: string) {
    await this.page.getByRole('link', { name: new RegExp(workTitle, 'i') }).first().click();
  }

  async expectOnSeriesPage(workTitle: string) {
  // 작품홈 도달은 URL로 판단 (/series/{slug})
  // UI 요소는 로그인/AB테스트에 따라 달라질 수 있어 사용하지 않음
  await expect(this.page).toHaveURL(/\/series\//i);
}
}