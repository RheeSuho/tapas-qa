import { Page, expect } from '@playwright/test';

export class GnbPage {
  constructor(private page: Page) {}

  async click(label: string) {
    switch (label) {
      case 'Login':
        await this.page.getByRole('button', { name: /^log ?in$/i }).last().click();
        return;
      case '라이브러리 메뉴':
      case '라이브러리':
        await this.page.getByRole('link', { name: /library/i }).first().click();
        return;
      case 'Inbox':
        await this.page.getByRole('link', { name: /inbox/i }).first().click();
        return;
    }
    // 일반 링크 (Home, Comics, Novels, Community, Mature, More, Profile 등)
    const link = this.page.getByRole('link', { name: new RegExp(`^${label}$`, 'i') });
    if ((await link.count()) > 0) {
      await link.first().click();
      return;
    }
    // 버튼으로 재시도
    await this.page.getByRole('button', { name: new RegExp(label, 'i') }).first().click();
  }

  async expectNavItems() {
    for (const item of ['Home', 'Comics', 'Novels', 'Community', 'Mature', 'More']) {
      await expect(
        this.page.getByRole('link', { name: new RegExp(`^${item}$`, 'i') }).first()
      ).toBeVisible();
    }
  }

  async expectSearchVisible() {
    await expect(this.page.getByPlaceholder('Search')).toBeVisible();
  }
}
