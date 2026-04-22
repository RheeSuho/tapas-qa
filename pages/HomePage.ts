import { Page, expect } from '@playwright/test';
import { URLS } from '../data/urls';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(URLS.home);
    await this.dismissCookieBanner();
  }

  async dismissCookieBanner() {
    // 첫 방문 시 쿠키 배너가 뜰 수 있음. 있으면 닫고, 없으면 조용히 패스
    const accept = this.page.getByRole('button', { name: /accept/i });
    if (await accept.isVisible().catch(() => false)) {
      await accept.click();
    }
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/tapas\.io/);
    await expect(this.page.locator('body')).toBeVisible();
  }

  async openSearch() {
    // Tapas의 검색은 버튼이 아니라 헤더에 항상 보이는 input임
    await this.page.getByPlaceholder('Search').click();
  }
}