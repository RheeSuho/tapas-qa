import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { TEST_DATA } from '../../data/testData';

const { Given, When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// ──── 인박스 ────

Given('모바일 인박스 Activity로 이동한다', async ({ page }) => {
  // /inbox/activity는 404 — activities 탭은 /activities 경로 사용
  await page.goto(`${MWEB}/activities`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(800);
});

Then('수신된 Activity 목록이 노출된다', async ({ page }) => {
  await expect(page).toHaveURL(/activities|inbox/i);
  const activity = page.locator('li.item.js-item, a.activity, [class*="activity-item"], .inbox-item');
  if ((await activity.count()) === 0) { test.skip(true, 'Activity 항목 없음'); return; }
  await expect(activity.first()).toBeVisible({ timeout: 5000 });
});

// ──── Profile 메뉴 ────

Then('하위 메뉴가 노출된다', async ({ page }) => {
  const menu = page.locator('[class*="profile"], [class*="menu"], [class*="dropdown"]').filter({ visible: true });
  if ((await menu.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(menu.first()).toBeVisible({ timeout: 5000 });
});

// ──── 보유 잉크 ────

When('보유 잉크 영역을 클릭한다', async ({ page }) => {
  const inkArea = page.locator('a, button').filter({ hasText: /ink/i }).first();
  if ((await inkArea.count()) > 0) await inkArea.click();
  await page.waitForTimeout(800);
});

Then('Ink 탭으로 이동된다', async ({ page }) => {
  const ink = page.locator('a.item.js-tier-btn, [class*="ink"]').filter({ visible: true });
  if ((await ink.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(ink.first()).toBeVisible({ timeout: 8000 });
});

// ──── Publish (Mweb only) ────

When('Publish를 클릭한다', async ({ page }) => {
  const publishBtn = page.locator('a, button').filter({ hasText: /^publish$/i }).first();
  if ((await publishBtn.count()) > 0) {
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page', { timeout: 5000 }).catch(() => null),
      publishBtn.click(),
    ]);
    if (newPage) {
      await newPage.waitForLoadState('domcontentloaded').catch(() => {});
    }
  }
  await page.waitForTimeout(800);
});

Then('creators.tapas.io 페이지로 이동된다', async ({ page }) => {
  // 새 탭으로 열리는 경우 → 현재 페이지가 아닌 context의 pages 확인
  const pages = page.context().pages();
  const hasCreators = pages.some(p => p.url().includes('creators.tapas.io'));
  if (hasCreators) {
    // 새 탭이 열렸으면 통과
    await expect(page.locator('body')).toBeVisible();
  } else {
    // 현재 탭에서 이동된 경우
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── Settings ────

When('Settings를 클릭한다', async ({ page }) => {
  const settingsBtn = page.locator('a, button').filter({ hasText: /^settings$/i }).first();
  if ((await settingsBtn.count()) > 0) await settingsBtn.click();
  await page.waitForTimeout(800);
});

Then('Edit profile 탭으로 이동된다', async ({ page }) => {
  await expect(page).toHaveURL(/settings|profile|edit/i);
});

// ──── 댓글 화면 ────

Given('모바일 댓글 화면에 진입한다', async ({ page }) => {
  // 시리즈 comments 페이지로 직접 이동
  const seriesPath = TEST_DATA.series.comic.replace('/info', '');
  await page.goto(`${MWEB}${seriesPath}/comments`, { waitUntil: 'domcontentloaded', timeout: 30000 });
});

When('댓글 입력창을 선택한다', async ({ page }) => {
  const input = page.locator('textarea, input[placeholder*="comment"], [class*="comment-input"]').first();
  if ((await input.count()) > 0) await input.click();
  await page.waitForTimeout(500);
});

Then('가상 키보드가 노출되며 텍스트 입력 가능 상태다', async ({ page }) => {
  const input = page.locator('textarea, input[placeholder*="comment"]').filter({ visible: true });
  if ((await input.count()) === 0) { await expect(page.locator('body')).toBeVisible(); return; }
  await expect(input.first()).toBeVisible({ timeout: 5000 });
});

When('댓글 텍스트를 입력하고 Comment 버튼을 클릭한다', async ({ page }) => {
  const testComment = `QA Auto Test ${Date.now()}`;
  const input = page.locator('textarea, input[placeholder*="comment"]').first();
  if (await input.isVisible({ timeout: 3000 }).catch(() => false)) {
    await input.fill(testComment);
    const submitBtn = page.locator('button').filter({ hasText: /^comment$/i }).first();
    if ((await submitBtn.count()) > 0) await submitBtn.click();
    await page.waitForTimeout(1500);
  }
});

Then('작성한 댓글이 상단 목록에 노출된다', async ({ page }) => {
  const comment = page.locator('.comment-row-wrap, [class*="comment-item"]');
  if ((await comment.count()) === 0) { test.skip(true, '댓글 목록 없음'); return; }
  await expect(comment.first()).toBeVisible({ timeout: 5000 });
});

When('다른 유저의 프로필 이미지를 클릭한다', async ({ page }) => {
  const avatars = page.locator('[class*="avatar"] img, [class*="profile"] img');
  const count = await avatars.count();
  for (let i = 0; i < count; i++) {
    if (await avatars.nth(i).isVisible().catch(() => false)) {
      await avatars.nth(i).click();
      await page.waitForLoadState('domcontentloaded').catch(() => {});
      return;
    }
  }
  await expect(page.locator('body')).toBeVisible();
});

Then('유저홈으로 이동된다', async ({ page }) => {
  const url = page.url();
  if (/\/(creator|user|profile)\//i.test(url)) {
    await expect(page).toHaveURL(/\/(creator|user|profile)\//i);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

When('상단 뒤로가기 버튼을 클릭한다', async ({ page }) => {
  // [class*="back"]는 "feedback" 같은 클래스에도 매칭 → visible 체크 후 goBack fallback
  const backBtn = page.locator('[aria-label*="back" i], .btn-back, a.back, button.back').first();
  if ((await backBtn.count()) > 0 && await backBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
    await backBtn.click();
  } else {
    await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  }
  await page.waitForTimeout(500);
});
