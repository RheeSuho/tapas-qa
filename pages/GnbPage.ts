import { Page, expect } from '@playwright/test';
import { heal } from '../utils/healLocator';

export class GnbPage {
  constructor(private page: Page) {}

  async click(label: string) {
    switch (label) {
      case 'Login': {
        const el = await heal(this.page, [
          p => p.getByRole('link', { name: /^log ?in$/i }),
          p => p.getByRole('button', { name: /^log ?in$/i }),
          p => p.locator('a[href*="/signin"]'),
        ], 'GNB Login');
        if (el) { await el.click(); return; }
        await this.page.goto('https://tapas.io/account/signin');
        return;
      }

      case 'Profile':
      case '프로필': {
        const el = await heal(this.page, [
          p => p.locator('button:has(img[alt="profile image"])'),
          p => p.locator('button:has(img[alt*="profile"])'),
          p => p.locator('[class*="avatar"] button, [class*="profile"] button'),
        ], 'GNB Profile');
        if (el) await el.click();
        return;
      }

      case '라이브러리 메뉴':
      case '라이브러리': {
        const el = await heal(this.page, [
          p => p.getByRole('link', { name: /^library$/i }),
          p => p.locator('a[href*="/reading-list"]'),
          p => p.getByRole('link', { name: /library/i }),
        ], 'GNB Library');
        if (el) { await el.click(); return; }
        await this.page.goto('https://tapas.io/reading-list/');
        return;
      }

      case 'Inbox': {
        const el = await heal(this.page, [
          p => p.getByRole('link', { name: /^inbox$/i }),
          p => p.locator('a[href*="/inbox"]'),
          p => p.getByRole('link', { name: /inbox/i }),
        ], 'GNB Inbox');
        if (el) { await el.click(); return; }
        await this.page.goto('https://tapas.io/inbox/activity');
        return;
      }
    }

    // 일반 GNB 링크 (Home, Comics, Novels, Community, Mature, More 등)
    const el = await heal(this.page, [
      p => p.getByRole('link', { name: new RegExp(`^${label}$`, 'i') }),
      p => p.getByRole('button', { name: new RegExp(`^${label}$`, 'i') }),
      p => p.getByText(label, { exact: true }),
    ], `GNB ${label}`);
    if (el) await el.click();
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
