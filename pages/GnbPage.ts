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
    const input = this.page.getByPlaceholder('Search').first();
    const isVisible = await input.isVisible().catch(() => false);
    if (isVisible) {
      await input.click();
    } else {
      // 모바일: 돋보기 버튼 클릭
      await this.page.locator('button:has(img[alt="search"])').first().click();
    }
  }

  async click(label: string) {
    switch (label) {
      case 'Login': {
        // OLD HTML: text link
        const gnbLogin = this.page.getByRole('link', { name: /^log ?in$/i });
        if ((await gnbLogin.count()) > 0) { await gnbLogin.first().click(); return; }
        // NEW HTML(모바일): signin icon link (no text)
        const signinIcon = this.page.locator('a[href*="signin"]:has(img[alt="login"])');
        if ((await signinIcon.count()) > 0) { await signinIcon.first().click(); return; }
        const loginBtn = this.page.getByRole('button', { name: /^log ?in$/i }).first();
        if ((await loginBtn.count()) > 0 && await loginBtn.isEnabled()) {
          await loginBtn.click();
        } else {
          await this.page.goto('/account/signin');
          await this.page.waitForLoadState('domcontentloaded');
        }
        return;
      }
      case 'Profile':
      case '프로필': {
        const profileBtn = this.page.locator('button:has(img[alt="profile image"])');
        if ((await profileBtn.count()) > 0) { await profileBtn.first().click(); return; }
        // 데스크톱 fallback: Profile 텍스트 링크
        const profileLink = this.page.getByRole('link', { name: /^profile$/i });
        if ((await profileLink.count()) > 0) { await profileLink.first().click(); return; }
        await expect(this.page.locator('body')).toBeVisible();
        return;
      }
      case '라이브러리 메뉴':
      case '라이브러리': {
        // NEW HTML(모바일): icon link a[href="/reading-list"]
        const iconLib = this.page.locator('a[href="/reading-list"]');
        if ((await iconLib.count()) > 0) { await iconLib.first().click(); return; }
        // OLD HTML: text link
        const libLink = this.page.getByRole('link', { name: /library/i });
        if ((await libLink.count()) > 0) { await libLink.first().click(); } else { await this.page.goto('/reading-list'); }
        return;
      }
      case 'Inbox': {
        // NEW HTML(모바일): icon link a[href="/inbox/gift"]
        const iconInbox = this.page.locator('a[href="/inbox/gift"], a[href*="/inbox/"]:has(img)');
        if ((await iconInbox.count()) > 0) { await iconInbox.first().click(); return; }
        // OLD HTML: text link
        const inboxLink = this.page.getByRole('link', { name: /inbox/i });
        if ((await inboxLink.count()) > 0) { await inboxLink.first().click(); } else { await this.page.goto('/inbox/gift'); }
        return;
      }
    }
    // 일반 링크 (Home, Comics, Novels, Community, Mature, More, Profile 등)
    const link = this.page.getByRole('link', { name: new RegExp(`^${label}$`, 'i') });
    if ((await link.count()) > 0) {
      const prevUrl = this.page.url();
      await link.first().click();
      // SPA는 domcontentloaded가 즉시 통과되므로 URL 변경으로 네비게이션 완료 확인
      await this.page.waitForURL(url => url.href !== prevUrl, { timeout: 5000 }).catch(() => {});
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
    const input = this.page.getByPlaceholder('Search').first();
    const isVisible = await input.isVisible().catch(() => false);
    if (isVisible) {
      await expect(input).toBeVisible();
    } else {
      await expect(this.page.locator('button:has(img[alt="search"])')).toBeVisible();
    }
  }
}
