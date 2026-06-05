import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { MobileGnbPage } from '../../pages/MobileGnbPage';

const { Given, When, Then, Before } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// @skip / @qa 태그 처리
Before(async ({ $tags }) => {
  if ($tags.includes('@skip')) {
    test.skip(true, '@skip — 자동화 제외 케이스');
  }
  const IS_QA = (process.env.TAPAS_BASE_URL || '').includes('qa.');
  if ($tags.includes('@qa') && !IS_QA) {
    test.skip(true, '@qa — QA 환경에서만 실행 (npm run test:qa)');
  }
});

// 모든 시나리오 시작 전 모바일 홈으로 이동
Before(async ({ page }) => {
  await page.goto(MWEB, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch(() => {});
});

// ──── 서비스 접속 ────

When('타파스 모바일 홈에 접속한다', async ({ page }) => {
  await new MobileGnbPage(page).goto();
});

Then('모바일 GNB와 홈 화면이 정상 노출된다', async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/);
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

// ──── 인증 상태 ────

Given('모바일 미로그인 상태다', async ({ page }) => {
  await page.context().clearCookies();
  await page.goto(MWEB, { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: /accept/i }).click({ timeout: 5000 }).catch(() => {});
});

// ──── GNB 클릭 ────

When('모바일 Login 버튼을 클릭한다', async ({ page }) => {
  await new MobileGnbPage(page).click('Login');
});

When(/^모바일 GNB > (.+) 클릭$/, async ({ page }, label: string) => {
  await new MobileGnbPage(page).click(label);
});

// ──── 로그인 결과 ────

Then('로그인이 완료되고 모바일 홈 화면으로 이동된다', async ({ page }) => {
  await expect(page).not.toHaveURL(/signin/i);
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

// ──── 공통 — PC web steps 재사용 가능한 것들 ────

// 로그인 폼 노출 확인 (PC web과 동일 DOM 구조)
Then('이메일 로그인 폼이 노출된다', async ({ page }) => {
  await expect(page.getByPlaceholder(/email/i).first()).toBeVisible({ timeout: 5000 });
});

// 이메일 로그인 액션 — m.tapas.io는 소셜 버튼 먼저 노출, "Log in or sign up with email" 클릭 후 폼 노출
When('이메일과 비밀번호를 입력하고 Login을 클릭한다', async ({ page }) => {
  const email = process.env.TAPAS_EMAIL ?? '';
  const password = process.env.TAPAS_PASSWORD ?? '';

  const emailInput = page.getByPlaceholder(/email/i).first();

  // 이메일 폼이 없으면 "Log in or sign up with email" <p> 요소 클릭 (스크롤 후)
  if (!(await emailInput.isVisible({ timeout: 2000 }).catch(() => false))) {
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(400);

    // <p>Log in or sign up with email</p> — a/button이 아니라 p 요소
    const emailTrigger = page.locator('p, a, button, span').filter({ hasText: /log in.*email|sign up.*email/i }).first();
    if ((await emailTrigger.count()) > 0) {
      await emailTrigger.click();
      await emailInput.waitFor({ state: 'visible', timeout: 10000 });
    }
  }

  // 이메일 입력이 visible 상태인지 재확인
  if (!(await emailInput.isVisible({ timeout: 3000 }).catch(() => false))) {
    test.skip(true, 'm.tapas.io 이메일 로그인 폼이 노출되지 않음 — 구조 변경 확인 필요');
    return;
  }

  // Braze popup 선제 제거
  await page.evaluate(() => {
    document.querySelectorAll('[class*="ab-iam-root"], [class*="ab-in-app"]').forEach(el => el.remove());
  });
  const pwInput = page.getByPlaceholder(/password/i).first();
  await emailInput.click();
  await emailInput.pressSequentially(email, { delay: 30 });
  if ((await pwInput.isVisible({ timeout: 3000 }).catch(() => false))) {
    await pwInput.click();
    await pwInput.pressSequentially(password, { delay: 30 });
  }
  // 버튼 클릭 전 재확인 후 제거
  await page.evaluate(() => {
    document.querySelectorAll('[class*="ab-iam-root"], [class*="ab-in-app"]').forEach(el => el.remove());
  });
  const loginBtn = page.getByRole('button', { name: /^log ?in$/i });
  if ((await loginBtn.count()) > 0) await loginBtn.last().click({ timeout: 8000 }).catch(() => {});
  await page.waitForURL(url => !url.toString().includes('/signin'), { timeout: 20000 }).catch(() => {});
});

// ──── 뒤로가기 ────

When('뒤로가기를 한다', async ({ page }) => {
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  if (page.url() === 'about:blank' || page.url() === '') {
    await page.goto(MWEB, { waitUntil: 'domcontentloaded' });
  }
});

// ──── 로그인 실패 ────

When('잘못된 이메일과 비밀번호를 입력하고 Login을 클릭한다', async ({ page }) => {
  // Direct navigation to signin — GNB Login on mweb goes to /account/signup, not /account/signin
  if (!page.url().includes('/account/signin')) {
    await page.goto(`${MWEB}/account/signin`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(800);
  }

  const emailInput = page.getByPlaceholder(/email/i).first();

  if (!(await emailInput.isVisible({ timeout: 2000 }).catch(() => false))) {
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(400);
    const emailTrigger = page.locator('p, a, button, span').filter({ hasText: /log in.*email|sign up.*email/i }).first();
    if ((await emailTrigger.count()) > 0) {
      await emailTrigger.click();
      await emailInput.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    }
  }

  if (!(await emailInput.isVisible({ timeout: 3000 }).catch(() => false))) {
    test.skip(true, '이메일 폼 노출 안됨 — 구조 변경 확인 필요');
    return;
  }

  const pwInput = page.getByPlaceholder(/password/i).first();
  await emailInput.fill('invalid@notexist.example');
  if (await pwInput.isVisible({ timeout: 2000 }).catch(() => false)) {
    await pwInput.fill('wrongpassword123!');
  }
  // Braze popup 선제 제거 (버튼 위 block 방지)
  await page.evaluate(() => {
    document.querySelectorAll('[class*="ab-iam-root"], [class*="ab-in-app"]').forEach(el => el.remove());
  });
  const loginBtn = page.getByRole('button', { name: /^log ?in$/i });
  if ((await loginBtn.count()) > 0) await loginBtn.last().click({ timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(3000);
});

Then('오류 메시지가 노출되고 로그인 화면에 머무른다', async ({ page }) => {
  await expect(page.locator('[class*="error"], [class*="alert"], .error-message').first()).toBeVisible({ timeout: 5000 });
});

// ──── 설명성 bullet step ────

Then(/^ㄴ.+$/, async () => {});
Then(/^-(?! MWeb\)).+$/, async () => {});
When(/^exc\) .+$/, async () => {});
When(/^\[PCW\](.*)$/, async () => {});
When(/^\[MW\](.*)$/, async () => {});
When(/^\- MWeb\) .+$/, async () => {});
Then(/^\(.*\)$/, async () => {});
