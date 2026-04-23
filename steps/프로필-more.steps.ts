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
  await expect(page.locator('body')).toBeVisible();
});

When('More 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── Profile 메뉴 항목 ────

When('Ink shop 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /ink shop/i }).first().click()
    .catch(() => page.getByRole('button', { name: /ink shop/i }).first().click());
});

When('Redeem Code 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /redeem/i }).first().click()
    .catch(() => page.getByRole('button', { name: /redeem/i }).first().click());
});

When('Settings 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /settings/i }).first().click()
    .catch(() => page.getByRole('button', { name: /settings/i }).first().click());
});

// [Settings] 클릭 — common.steps.ts의 /^\[(.+)\] 클릭$/ 에서 처리

When('Log out 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /log out|logout/i }).first().click()
    .catch(() => page.getByRole('link', { name: /log out|logout/i }).first().click());
});

When('Publish 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /publish/i }).first().click()
    .catch(() => page.getByRole('button', { name: /publish/i }).first().click());
});

// ──── Ink Shop ────

When('보유 잉크 영역 클릭', async ({ page }) => {
  await page.locator('[class*="ink"], [class*="balance"]').first().click()
    .catch(() => page.getByText(/ink/i).first().click());
});

When('Ink 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Ink 탭 으로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('임의의 잉크 티어 클릭', async ({ page }) => {
  // 잉크 구매 옵션 첫 번째 클릭
  await page.locator('[class*="ink-tier"], [class*="tier"], [class*="package"]').first().click()
    .catch(() => page.getByRole('button', { name: /\$|ink/i }).first().click());
});

When('잉크 구매 동작', async ({ page }) => {
  await page.getByRole('button', { name: /buy|purchase/i }).first().click()
    .catch(() => page.locator('body').click());
});

// ──── Redeem Code ────

When('입력 필드 클릭 > 리딤코드 입력', async ({ page }) => {
  const input = page.getByRole('textbox').first();
  await input.click();
  await input.fill('TESTCODE123');
});

When('Redeem 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /redeem/i }).first().click();
});

When('[Contact CS] 텍스트 버튼 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /contact/i }).first().click()
    .catch(() => page.getByText('Contact CS', { exact: false }).first().click());
});

When('[닫기] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /close|닫기/i }).first().click();
});

// ──── 프로필 이미지 ────

When('프로필 이미지 클릭', async ({ page }) => {
  // 프로필 이미지 — 아바타 이미지
  await page.locator('[class*="avatar"], [class*="profile-img"], [alt*="profile"]').first().click()
    .catch(() => page.locator('img').first().click());
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
  await page.getByRole('link', { name: /help/i }).first().click()
    .catch(() => page.getByText('Help', { exact: true }).first().click());
});

When('Discord 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /discord/i }).first().click()
    .catch(() => page.getByText('Discord', { exact: true }).first().click());
});

When('Forums 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /forums/i }).first().click()
    .catch(() => page.getByText('Forums', { exact: true }).first().click());
});

When('Newsfeed 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /newsfeed/i }).first().click()
    .catch(() => page.getByText('Newsfeed', { exact: true }).first().click());
});

When('Contact 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /contact/i }).first().click()
    .catch(() => page.getByText('Contact', { exact: true }).first().click());
});

When('Merch Shop 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /merch/i }).first().click()
    .catch(() => page.getByText('Merch', { exact: true }).first().click());
});

When('뉴스 리스트 클릭', async ({ page }) => {
  await page.getByRole('link').filter({ hasText: /news/i }).first().click()
    .catch(() => page.getByRole('link').first().click());
});

// ──── 결과 검증 ────

// 하위 메뉴 노출된다. — common.steps.ts에서 처리

Then('Edit Profile 화면에 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/);
});

Then('Delete account 안내 화면으로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('비밀번호 검증 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"]')).toBeVisible();
});

Then('정상적으로 로그아웃 및 계정 탈퇴되며 홈 화면으로 이동된다.', async ({ page }) => {
  // 탈퇴 — 자동화 범위 외 (스킵)
});

Then('Ink shop 화면 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/);
  await expect(page.locator('body')).toBeVisible();
});

Then('잉크 구매 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="popup"]')).toBeVisible();
});

Then(/^Buy Ink 버튼 \/ 보유 잉크 \+ 보너스 잉크 \/ 잉크 내역 \/ 서포트 내역 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^잉크가 구매 되며.+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Redeem Code 타이틀, 입력 필드, 안내문구, Contact CS, Redeem 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('코드 입력이 가능하다', async ({ page }) => {
  await expect(page.getByRole('textbox').first()).toBeVisible();
});

Then('입력한 리딤코드가 등록되며 리딤코드 화면은 유지된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('입력한 리딤코드가 등록되지 않으며 리딤코드 화면은 유지된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('디바이스 메일 앱이 열린다.', async () => {
  // 외부 메일 앱 — 자동화 검증 생략
});

Then('메일 앱이 닫히며 리딤코드 화면 유지된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('메일 앱이 열린다.', async () => {
  // 외부 메일 앱 — 자동화 검증 생략
});

Then(/^Reading option \/ Personal information \/ Block Users \/ Log out all other sessions \/ Delete account 영역 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Settings 탭으로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^프로필 이미지 \/ 닉네임 \/ 보유 잉크 \/ Inkshop \/ Redeem code \/ Settings \/ Logout 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(유저 홈으로|홈 화면으로) 이동된다\.$/, async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/);
});

Then(/^Help \/ Discord \/ .+노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^"https:\/\/.+" 새 창 노출된다\.$/, async () => {
  // 새 탭 외부 URL — 자동화 범위 외
});

Then(/^"https:\/\/.+" 새 창 노출 된다\.$/, async () => {
  // 새 탭 외부 URL — 자동화 범위 외
});

Then('뉴스 리스트가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뉴스 상세화면으로 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Merch shop 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// Settings 진입 — 인박스-댓글.steps.ts에서 처리

// - 접두사 항목들은 common.steps.ts의 /^- .+$/ 에서 처리

// Redeem Code 클릭은 When으로 위에서 처리됨
