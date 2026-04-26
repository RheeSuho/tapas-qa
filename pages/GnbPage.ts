import { Page, expect } from '@playwright/test';

export class GnbPage {
  constructor(private page: Page) {}

  async click(label: string) {
    switch (label) {
      case 'Login': {
        // 이미 로그인 상태면 Login 버튼이 없음 → signin 페이지로 직접 이동
        const loginBtn = this.page.getByRole('button', { name: /^log ?in$/i });
        if ((await loginBtn.count()) > 0) {
          await loginBtn.last().click();
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
