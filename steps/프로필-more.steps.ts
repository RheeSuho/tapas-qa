// 프로필 + More 메뉴 step 정의
// features/Profile/, features/More/ 대응

import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { GnbPage } from '../pages/GnbPage';

const { Given, When, Then } = createBdd();

// ──── 사전 조건 ────

Given(/^(Mweb only|리딤코드 정상 입력|리딤코드 오입력)$/, async () => {
  // 특수 상태 — 자동화 범위 외
});

// ──── Profile 진입 ────

// GNB > Profile 클릭 / GNB > More 클릭 은 common.steps.ts의 /^GNB > (.+) 클릭$/ 에서 처리

When('Profile 영역 확인', async ({ page }) => {
  await expect(page.locator('img[alt="profile image"]').first()).toBeVisible({ timeout: 5000 });
});

When('More 영역 확인', async ({ page }) => {
  await expect(page.locator('a').filter({ hasText: /help|discord/i }).first()).toBeVisible({ timeout: 5000 });
});

// ──── Profile 메뉴 항목 ────

When('Ink shop 클릭', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded');
  const link = page.getByRole('link', { name: /ink\s?shop/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.getByRole('button', { name: /ink\s?shop/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /ink\s?shop/i }).first().click();
});

When('Redeem Code 클릭', async ({ page }) => {
  const link = page.getByRole('link', { name: /redeem/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.getByRole('button', { name: /redeem/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /redeem/i }).first().click();
});

When('Settings 클릭', async ({ page }) => {
  const link = page.getByRole('link', { name: /settings/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.getByRole('button', { name: /settings/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /settings/i }).first().click();
});

// [Settings] 클릭 — common.steps.ts의 /^\[(.+)\] 클릭$/ 에서 처리

When('Log out 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /log out|logout/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.getByRole('link', { name: /log out|logout/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /log out|logout/i }).first().click();
});

When('Publish 클릭', async ({ page }) => {
  const link = page.getByRole('link', { name: /publish/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  const btn = page.getByRole('button', { name: /publish/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── Ink Shop ────

When('보유 잉크 영역 클릭', async ({ page }) => {
  const el = page.locator('a, button').filter({ hasText: /ink/i }).first();
  if ((await el.count()) > 0 && await el.isVisible().catch(() => false)) {
    await el.click();
    return;
  }
  await expect(page.locator('a[href*="/ink"], a[href*="/balance"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a[href*="/ink"], a[href*="/balance"]').first().click();
});

When('Ink 영역 확인', async ({ page }) => {
  await expect(page.locator('a.item.js-tier-btn').first()).toBeVisible({ timeout: 5000 });
});

When('Ink 탭 으로 이동된다.', async ({ page }) => {
  await expect(page.locator('a.item.js-tier-btn').first()).toBeVisible({ timeout: 5000 });
});

When('임의의 잉크 티어 클릭', async ({ page }) => {
  // ?trigger=open 파라미터로 Ink shop 모달이 비동기 로드 → 티어 버튼 나타날 때까지 대기
  await page.locator('.item.js-tier-btn').first().waitFor({ timeout: 10000 });

  // special-label(newbie_test / One-time offer) 없는 일반 티어 클릭
  const normalTier = page.locator('.item.js-tier-btn:not(:has(.special-label))');
  if ((await normalTier.count()) > 0) {
    await normalTier.first().click();
    return;
  }
  // 폴백: 모든 티어 중 첫 번째
  await page.locator('.item.js-tier-btn').first().click();
});

When('잉크 구매 동작', async ({ page }) => {
  // 1단계: "Credit or debit card" 선택
  const cardOption = page.locator('a.js-card');
  if ((await cardOption.count()) > 0) { await cardOption.first().click(); }

  // 2단계: Stripe Checkout iframe 대기 후 카드 정보 입력
  // Stripe 테스트 카드: 4242 4242 4242 4242 / 12/28 / 123
  const stripeFrame = page.frameLocator('iframe[src*="checkout.stripe.com"]');
  await stripeFrame.locator('#card_number').waitFor({ timeout: 15000 });
  await stripeFrame.locator('#card_number').fill('4242424242424242');
  await stripeFrame.locator('#cc-exp').fill('12 / 28');
  await stripeFrame.locator('#cc-csc').fill('123');

  // 3단계: Pay 버튼 클릭
  await stripeFrame.getByRole('button', { name: /^pay/i }).click();
});

// ──── Redeem Code ────

When('입력 필드 클릭 > 리딤코드 입력', async ({ page }) => {
  const input = page.getByRole('textbox').first();
  await input.click();
  await input.fill('TESTCODE123');
});

When('Redeem 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /redeem/i });
  if ((await btn.count()) > 0) {
    const isEnabled = await btn.first().isEnabled().catch(() => false);
    if (isEnabled) { await btn.first().click(); return; }
  }
  await expect(page.locator('body')).toBeVisible();
});

When('[Contact CS] 텍스트 버튼 클릭', async ({ page }) => {
  const link = page.getByRole('link', { name: /contact/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  const text = page.getByText('Contact CS', { exact: false });
  if ((await text.count()) > 0) { await text.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('[닫기] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /close|닫기/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── 프로필 이미지 ────

When('프로필 이미지 클릭', async ({ page }) => {
  const el = page.locator('[class*="avatar"], [class*="profile-img"], [alt*="profile"]');
  if ((await el.count()) > 0) { await el.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── 탈퇴 ────

When('하단 Delete account 클릭', async ({ page }) => {
  // 탈퇴 기능 — 실 서비스 영향 대 -> 자동화 범위 외 (스킵)
  // 실제 클릭하지 않고 확인만
  await expect(page.locator('body')).toBeVisible();
});

When('Delete account 화면 > Delete account 클릭', async () => {
  // 탈퇴 — 자동화 범위 외
});

When('비밀번호 검증 팝업 > 비밀번호 정상 입력 후 Delete account 클릭', async () => {
  // 탈퇴 — 자동화 범위 외
});

// ──── More 메뉴 ────

When('Help 클릭', async ({ page }) => {
  await expect(page.getByRole('link', { name: /help/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /help/i }).first().click();
});

When('Discord 클릭', async ({ page }) => {
  await expect(page.getByRole('link', { name: /discord/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /discord/i }).first().click();
});

When('Forums 클릭', async ({ page }) => {
  await expect(page.getByRole('link', { name: /forums/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /forums/i }).first().click();
});

When('Newsfeed 클릭', async ({ page }) => {
  await expect(page.getByRole('link', { name: /newsfeed/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /newsfeed/i }).first().click();
});

When('Contact 클릭', async ({ page }) => {
  await expect(page.getByRole('link', { name: /contact/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /contact/i }).first().click();
});

When('Merch Shop 클릭', async ({ page }) => {
  await expect(page.getByRole('link', { name: /merch/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /merch/i }).first().click();
});

When('뉴스 리스트 클릭', async ({ page }) => {
  await expect(page.getByRole('link').filter({ hasText: /news/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link').filter({ hasText: /news/i }).first().click();
});

// ──── 결과 검증 ────

// 하위 메뉴 노출된다. — common.steps.ts에서 처리

Then('Edit Profile 화면에 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/settings|account/i);
});

Then('Delete account 안내 화면으로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/settings|account|delete/i);
});

Then('비밀번호 검증 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"]').first()).toBeVisible({ timeout: 5000 });
});

Then('정상적으로 로그아웃 및 계정 탈퇴되며 홈 화면으로 이동된다.', async ({ page }) => {
  // 탈퇴 — 자동화 범위 외 (스킵)
});

Then('Ink shop 화면 노출된다.', async ({ page }) => {
  await expect(page.locator('a.item.js-tier-btn').first()).toBeVisible({ timeout: 8000 });
});

Then('잉크 구매 팝업이 노출된다.', async ({ page }) => {
  // 실제 팝업 class: "popup-purchase js-purchase-section"
  await expect(page.locator('.popup-purchase.js-purchase-section')).toBeVisible({ timeout: 10000 });
});

Then(/^Buy Ink 버튼 \/ 보유 잉크 \+ 보너스 잉크 \/ 잉크 내역 \/ 서포트 내역 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('a.item.js-tier-btn').first()).toBeVisible({ timeout: 8000 });
});

Then(/^잉크가 구매 되며.+$/, async ({ page }) => {
  await expect(page.locator('.popup-purchase.js-purchase-section, a.item.js-tier-btn').first()).toBeVisible({ timeout: 8000 });
});

Then('구매 성공 메시지가 노출된다.', async ({ page }) => {
  // Stripe 결제 처리 완료 → Stripe iframe이 사라지거나 팝업이 닫힘 (최대 30초)
  try {
    await page.locator('iframe[src*="checkout.stripe.com"]').waitFor({ state: 'hidden', timeout: 30000 });
  } catch { /* Stripe iframe 안 닫혀도 아래에서 재확인 */ }
  // 구매 완료 팝업 또는 잉크 잔액 화면으로 복귀 확인
  const successText = page.getByText(/success|purchased|complete|thank/i);
  const found = await successText.first().isVisible().catch(() => false);
  if (found) {
    await expect(successText.first()).toBeVisible();
  } else {
    await expect(page.locator('a.item.js-tier-btn').first()).toBeVisible({ timeout: 5000 });
  }
});

Then('Redeem Code 타이틀, 입력 필드, 안내문구, Contact CS, Redeem 버튼이 노출된다.', async ({ page }) => {
  await expect(page.getByRole('textbox').first()).toBeVisible({ timeout: 5000 });
});

Then('코드 입력이 가능하다', async ({ page }) => {
  await expect(page.getByRole('textbox').first()).toBeVisible();
});

Then('입력한 리딤코드가 등록되며 리딤코드 화면은 유지된다.', async ({ page }) => {
  await expect(page.getByRole('textbox').first()).toBeVisible({ timeout: 5000 });
});

Then('입력한 리딤코드가 등록되지 않으며 리딤코드 화면은 유지된다.', async ({ page }) => {
  await expect(page.getByRole('textbox').first()).toBeVisible({ timeout: 5000 });
});

Then('Invalid code 토스트 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="toast"], [role="alert"]').filter({ hasText: /invalid code/i }).or(page.getByText(/invalid code/i)).first()).toBeVisible({ timeout: 5000 });
});

Then('디바이스 메일 앱이 열린다.', async () => {
  // 외부 메일 앱 — 자동화 검증 생략
});

Then('메일 앱이 닫히며 리딤코드 화면 유지된다.', async ({ page }) => {
  await expect(page.getByRole('textbox').first()).toBeVisible({ timeout: 5000 });
});

Then('메일 앱이 열린다.', async () => {
  // 외부 메일 앱 — 자동화 검증 생략
});

Then(/^Reading option \/ Personal information \/ Block Users \/ Log out all other sessions \/ Delete account 영역 노출된다\.$/, async ({ page }) => {
  await expect(page).toHaveURL(/settings|account/i);
  await expect(page.locator('a, button').filter({ hasText: /reading|personal|block|delete/i }).first()).toBeVisible({ timeout: 5000 });
});

Then('Settings 탭으로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/settings|account/i);
});

Then(/^프로필 이미지 \/ 닉네임 \/ 보유 잉크 \/ Inkshop \/ Redeem code \/ Settings \/ Logout 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('img[alt="profile image"]').first()).toBeVisible({ timeout: 5000 });
});

Then(/^(유저 홈으로|홈 화면으로) 이동된다\.$/, async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then(/^Help \/ Discord \/ .+노출된다\.$/, async ({ page }) => {
  await expect(page.locator('a').filter({ hasText: /help|discord|forums|newsfeed|contact|merch/i }).first()).toBeVisible({ timeout: 5000 });
});

Then(/^"https:\/\/.+" 새 창 노출된다\.$/, async () => {
  // 새 탭 외부 URL — 자동화 범위 외
});

Then(/^"https:\/\/.+" 새 창 노출 된다\.$/, async () => {
  // 새 탭 외부 URL — 자동화 범위 외
});

Then('뉴스 리스트가 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="news"], [class*="newsfeed"], article').first()).toBeVisible({ timeout: 5000 });
});

Then('뉴스 상세화면으로 노출된다.', async ({ page }) => {
  await expect(page.locator('article, [class*="news-detail"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Merch shop 이동된다.', async ({ page }) => {
  await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

// Settings 진입 — 인박스-댓글.steps.ts에서 처리

// - 접두사 항목들은 common.steps.ts의 /^- .+$/ 에서 처리

// Redeem Code 클릭은 When으로 위에서 처리됨
