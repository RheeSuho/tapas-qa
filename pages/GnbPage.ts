import { Page, expect } from '@playwright/test';
import { URLS } from '../data/urls';

export class GnbPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(URLS.home);
    await this.dismissCookieBanner();
  }

  async dismissCookieBanner() {
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
    await this.page.getByPlaceholder('Search').click();
  }

  async click(label: string) {
    switch (label) {
      case 'Login': {
        // GNB의 Login 링크/버튼만 클릭 (signin form의 submit 버튼 제외)
        const gnbLogin = this.page.getByRole('link', { name: /^log ?in$/i });
        if ((await gnbLogin.count()) > 0) { await gnbLogin.first().click(); return; }
        const loginBtn = this.page.getByRole('button', { name: /^log ?in$/i }).first();
        if ((await loginBtn.count()) > 0 && await loginBtn.isEnabled()) {
          await loginBtn.click();
        } else {
          await this.page.goto('https://tapas.io/account/signin');
          await this.page.waitForLoadState('domcontentloaded');
        }
        return;
      }
      case 'Profile':
      case '프로필':
        await this.page.locator('button:has(img[alt="profile image"])').first().click();
        return;
      case '라이브러리 메뉴':
      case '라이브러리': {
        const libLink = this.page.getByRole('link', { name: /library/i });
        if ((await libLink.count()) > 0) { await libLink.first().click(); } else { await this.page.goto('https://tapas.io/reading-list/'); }
        return;
      }
      case 'Inbox': {
        const inboxLink = this.page.getByRole('link', { name: /inbox/i });
        if ((await inboxLink.count()) > 0) { await inboxLink.first().click(); } else { await this.page.goto('https://tapas.io/inbox/activity'); }
        return;
      }
    }
    // 일반 링크 (Home, Comics, Novels, Community, Mature, More, Profile 등)
    const link = this.page.getByRole('link', { name: new RegExp(`^${label}$`, 'i') });
    if ((await link.count()) > 0) {
      await link.first().click();
      return;
    }
    // 버튼으로 재시도
    const fallbackBtn = this.page.getByRole('button', { name: new RegExp(label, 'i') });
    if ((await fallbackBtn.count()) > 0) { await fallbackBtn.first().click(); }
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
