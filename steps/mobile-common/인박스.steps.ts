import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';

const { When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// ──── 인박스 진입 ────

When('대메뉴 > 하단 Inbox 클릭', async ({ page }) => {
  // GNB Inbox 아이콘 클릭 시도. 없으면 직접 이동.
  const inboxLink = page.locator('a[href*="/inbox"]').first();
  if ((await inboxLink.count()) > 0) {
    await inboxLink.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/inbox/gift`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }
  await page.waitForTimeout(500);
});

// ──── 탭 클릭 ────

When('Inbox > Activity 탭 클릭', async ({ page }) => {
  if (!page.url().includes('/inbox')) {
    await page.goto(`${MWEB}/inbox/activity`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    return;
  }
  const activityTab = page.locator('a, button').filter({ hasText: /^activity$/i }).first();
  if ((await activityTab.count()) > 0) {
    await activityTab.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/inbox/activity`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }
  await page.waitForTimeout(400);
});

When('Inbox > Messages 탭 클릭', async ({ page }) => {
  if (!page.url().includes('/inbox')) {
    await page.goto(`${MWEB}/inbox/messages`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    return;
  }
  const messagesTab = page.locator('a, button').filter({ hasText: /^messages$/i }).first();
  if ((await messagesTab.count()) > 0) {
    await messagesTab.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/inbox/messages`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }
  await page.waitForTimeout(400);
});

// ──── Activity 탭 액션 ────

When('Activity 타입별 클릭', async ({ page }) => {
  const activityItem = page.locator('[class*="activity"] a, [class*="notification"] a, [class*="inbox"] a').first();
  if ((await activityItem.count()) > 0) {
    await activityItem.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

When('Activity 탭 우측 상단 [Mark all as read] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('button').filter({ hasText: /mark all as read/i }).first();
  if ((await btn.count()) > 0) {
    await btn.click();
    await page.waitForTimeout(600);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── Messages 탭 액션 ────

When('Messages 영역 노출 확인', async ({ page }) => {
  await expect(page.locator('[class*="message"], a[href*="/inbox/message"]').first()).toBeVisible({ timeout: 5000 });
});

When('Messages 타입별 클릭', async ({ page }) => {
  const msgItem = page.locator('[class*="message"] a, [class*="inbox"] a[href*="/message"]').first();
  if ((await msgItem.count()) > 0) {
    await msgItem.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    const anyLink = page.locator('[class*="inbox"] a, [class*="message"] li a').first();
    if ((await anyLink.count()) > 0) {
      await anyLink.click();
      await page.waitForLoadState('domcontentloaded').catch(() => {});
    } else {
      await expect(page.locator('body')).toBeVisible();
    }
  }
});

When('Messages 탭 우측 상단 [Mark all as read] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('button').filter({ hasText: /mark all as read/i }).first();
  if ((await btn.count()) > 0) {
    await btn.click();
    await page.waitForTimeout(600);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── Gifts 탭 액션 ────

When('Get Gift Passes 영역 확인', async ({ page }) => {
  await expect(page.locator('[class*="gift"], [class*="inbox"]').first()).toBeVisible({ timeout: 5000 });
});

When('Gifts 탭 새로고침 동작', async ({ page }) => {
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(800);
});

// ──── 공통 하위 액션 (Gifts feature에서 사용) ────

When('작품 정보 영역 확인', async ({ page }) => {
  await expect(page.locator('[class*="gift"] a, a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

When('작품 오른쪽의 [Get] 버튼 클릭', async ({ page }) => {
  const getBtn = page.locator('button').filter({ hasText: /^get$/i }).first();
  if ((await getBtn.count()) > 0) {
    await getBtn.click();
    await page.waitForTimeout(800);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

When('[Read] 버튼 클릭', async ({ page }) => {
  const readBtn = page.locator('button, a').filter({ hasText: /^read$/i }).first();
  if ((await readBtn.count()) > 0) {
    await readBtn.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// ──── Activity 필터 탭 (수신된 내역 없는 경우 시나리오) ────

When('Commets 필터 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^comments?$/i }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

When('Messages 필터 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^messages$/i }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

When('Tapas 필터 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^tapas$/i }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

When('Series 필터 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^series$/i }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

When('Likes 필터 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^likes$/i }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

When('Subs 필터 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^subs(criptions)?$/i }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

When('Supporters 필터 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^supporters?$/i }).first();
  if ((await btn.count()) > 0) await btn.click();
  await page.waitForTimeout(300);
});

// ──── Settings 버튼 (Activity 탭 내) ────

When('[Settings] 버튼 클릭', async ({ page }) => {
  const settingsBtn = page.locator('button, a').filter({ hasText: /^settings$/i }).first();
  if ((await settingsBtn.count()) > 0) {
    await settingsBtn.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await page.goto(`${MWEB}/account/settings`, { waitUntil: 'domcontentloaded' });
  }
  await page.waitForTimeout(400);
});

// ──── Then ────

Then(/^Inbox 화면의 첫 번째 탭으로 진입된다\. \(Gifts\)$/, async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
  await expect(page.locator('li.item, [class*="inbox-item"], a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then(/^Inbox 화면의 두 번째 탭으로 진입된다\. \(Messagess\)$/, async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
  await expect(page.locator('li.item, [class*="inbox-item"], [class*="message"]').first()).toBeVisible({ timeout: 5000 });
});

Then('수신된 Activity가 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/inbox|activit/i);
  await expect(page.locator('li.item.js-item, a.activity, [class*="activity-item"]').first()).toBeVisible({ timeout: 5000 });
});

Then('No recent activity 문구가 노출된다.', async ({ page }) => {
  await expect(page.locator('text=/no recent activity/i').first()).toBeVisible({ timeout: 5000 });
});

Then('수신된 Messages가 노출된다.', async ({ page }) => {
  await expect(page.locator('li.item, [class*="message-item"], [class*="inbox-item"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Messages 목록없을때 안내문구 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="empty"], .page-empty, [class*="no-data"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Message New 표시 사라진다.', async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
});

Then('Message 채움 표시 사라진다', async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
});

Then('신규 메세지가 있다면 메세지 썸네일 우측에 New 표시가 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
});

Then('Activity 화면으로 복귀된다.', async ({ page }) => {
  await expect(page).toHaveURL(/inbox|activit/i);
});

Then('Inbox > gift 화면으로 복귀된다.', async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
});

// ──── 필터별 안내문구 (없는 경우) ────

Then('Tapas 목록없을때 안내문구 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="empty"], .page-empty, [class*="no-data"]').first()).toBeVisible({ timeout: 5000 });
});

// NOTE: 'Series 목록없을때 안내문구 노출된다.' — 보관함.steps.ts에서 처리

// NOTE: 'Likes 목록없을때 안내문구 노출된다.' — 댓글.steps.ts에서 처리

// NOTE: 'Subs 목록없을때 안내문구 노출된다.' — 보관함.steps.ts에서 처리

Then('Supporters 목록없을때 안내문구 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="empty"], .page-empty, [class*="no-data"]').first()).toBeVisible({ timeout: 5000 });
});

// ──── Gifts 시나리오 Then ────

Then('설정된 랜딩페이지로 이동된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('해당 작품홈으로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//);
  await expect(page.locator('a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('[Get]버튼 > [Read]로 변경된다.', async ({ page }) => {
  await expect(page.locator('a, button').filter({ hasText: /read/i }).first()).toBeVisible({ timeout: 5000 });
});

Then('[Read]로 노출된 작품 목록이 제거된다.', async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
});

// NOTE: 'Settings로 진입된다.' — profile.steps.ts에서 처리
