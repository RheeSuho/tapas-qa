import { Page, expect } from '@playwright/test';

const MOBILE_BASE = 'https://m.tapas.io';

export class MobileGnbPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(MOBILE_BASE, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await this.dismissCookieBanner();
  }

  async dismissCookieBanner() {
    const accept = this.page.getByRole('button', { name: /accept/i });
    if (await accept.isVisible({ timeout: 3000 }).catch(() => false)) {
      await accept.click();
    }
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/m\.tapas\.io/);
    await expect(this.page.locator('body')).toBeVisible();
  }

  // 햄버거 메뉴 열기
  async openMenu() {
    // 모바일 GNB 햄버거 버튼 — aria-label 또는 class 기반
    const hamburger = this.page.locator('button[aria-label*="menu" i], button.btn-menu, button.js-btn-menu, [class*="hamburger"], [class*="btn-nav"]').first();
    if ((await hamburger.count()) > 0) {
      await hamburger.click();
      return;
    }
    // fallback: ≡ 텍스트 또는 nav toggle 버튼
    const navToggle = this.page.locator('button:has(span[class*="bar"]), button[class*="toggle"]').first();
    if ((await navToggle.count()) > 0) await navToggle.click();
  }

  async click(label: string) {
    switch (label) {
      case 'Login': {
        const gnbLogin = this.page.getByRole('link', { name: /^log ?in$/i });
        if ((await gnbLogin.count()) > 0) { await gnbLogin.first().click(); return; }
        const loginBtn = this.page.getByRole('button', { name: /^log ?in$/i }).first();
        if ((await loginBtn.count()) > 0 && await loginBtn.isEnabled()) {
          await loginBtn.click();
        } else {
          await this.page.goto(`${MOBILE_BASE}/account/signin`, { waitUntil: 'domcontentloaded' });
        }
        return;
      }
      case 'Profile':
      case '프로필': {
        const profileBtn = this.page.locator('button:has(img[alt="profile image"]), a[href*="/profile/"]').first();
        if ((await profileBtn.count()) > 0) { await profileBtn.click(); return; }
        await this.openMenu();
        const profileLink = this.page.getByRole('link', { name: /profile/i });
        if ((await profileLink.count()) > 0) await profileLink.first().click();
        return;
      }
      case '라이브러리':
      case '라이브러리 메뉴': {
        const libLink = this.page.getByRole('link', { name: /library/i });
        if ((await libLink.count()) > 0) { await libLink.first().click(); return; }
        await this.page.goto(`${MOBILE_BASE}/reading-list/`, { waitUntil: 'domcontentloaded' });
        return;
      }
      case 'Inbox': {
        const inboxLink = this.page.getByRole('link', { name: /inbox/i });
        if ((await inboxLink.count()) > 0) { await inboxLink.first().click(); return; }
        await this.page.goto(`${MOBILE_BASE}/inbox/activity`, { waitUntil: 'domcontentloaded' });
        return;
      }
    }

    // 일반 링크 시도 — 메뉴 열지 않고 직접 접근 가능한 경우
    const link = this.page.getByRole('link', { name: new RegExp(`^${label}$`, 'i') });
    if ((await link.count()) > 0) {
      const prevUrl = this.page.url();
      await link.first().click();
      await this.page.waitForURL(url => url.href !== prevUrl, { timeout: 5000 }).catch(() => {});
      return;
    }

    // 햄버거 메뉴 열고 재탐색
    await this.openMenu();
    await this.page.waitForTimeout(500);
    const menuLink = this.page.getByRole('link', { name: new RegExp(label, 'i') });
    if ((await menuLink.count()) > 0) {
      const prevUrl = this.page.url();
      await menuLink.first().click();
      await this.page.waitForURL(url => url.href !== prevUrl, { timeout: 5000 }).catch(() => {});
      return;
    }
    const menuBtn = this.page.getByRole('button', { name: new RegExp(label, 'i') });
    if ((await menuBtn.count()) > 0) await menuBtn.first().click();
  }
}
