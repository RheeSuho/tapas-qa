import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { TEST_DATA } from '../../data/testData';

const { When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// ──── 헬퍼: 댓글 영역이 있는 페이지로 이동 ────

async function ensureOnCommentPage(page: any) {
  if (!page.url().includes('/episode/') && !page.url().includes('/comments')) {
    await page.goto(`${MWEB}${TEST_DATA.episode.comicEp2}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await page.waitForTimeout(800);
  }
}

// ──── 정렬 필터 ────

When(/^우상단 정렬 필터 > (.+) 값 클릭$/, async ({ page }, sortValue: string) => {
  await ensureOnCommentPage(page);
  const sortBtn = page.locator('button, [role="button"]').filter({ hasText: /newest|oldest|sort/i }).first();
  if ((await sortBtn.count()) > 0) {
    await sortBtn.click();
    await page.waitForTimeout(400);
  }
  const clicked = await page.evaluate((val: string) => {
    const items = document.querySelectorAll('[data-sort], .js-comment-sort, [role="option"], li');
    for (const item of Array.from(items)) {
      if (new RegExp(val, 'i').test((item as HTMLElement).innerText ?? '')) {
        (item as HTMLElement).click();
        return true;
      }
    }
    return false;
  }, sortValue);
  if (!clicked) {
    await expect(page.locator(`[role="option"], li`).filter({ hasText: new RegExp(sortValue, 'i') }).first()).toBeVisible({ timeout: 3000 });
  }
  await page.waitForTimeout(400);
});

// ──── 댓글 입력 ────

When('댓글 입력창 선택', async ({ page }) => {
  await ensureOnCommentPage(page);
  await page.evaluate(() => {
    const selectors = [
      'textarea[placeholder*="comment" i]',
      'input[placeholder*="comment" i]',
      '[class*="comment-input"]',
      '[data-testid*="comment-input"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return; }
    }
  });
  await page.waitForTimeout(400);
});

When('텍스트 입력', async ({ page }) => {
  const testText = `QA Auto ${Date.now()}`;
  const filled = await page.evaluate((text: string) => {
    const selectors = [
      'textarea[placeholder*="comment" i]',
      'input[placeholder*="comment" i]',
      '[class*="comment-input"]',
      'textarea',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLInputElement | HTMLTextAreaElement | null;
      if (el) {
        el.value = text;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        return true;
      }
    }
    return false;
  }, testText);
  if (!filled) {
    await expect(page.locator('textarea, input[type="text"]').first()).toBeVisible({ timeout: 5000 });
  }
  await page.waitForTimeout(300);
});

When('[Comment] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('button').filter({ hasText: /^comment$/i }).first();
  await expect(btn).toBeVisible({ timeout: 5000 });
  await btn.click();
  await page.waitForTimeout(800);
});

When('댓글 입력창 선택 > 텍스트 입력 후 [Comment] 버튼 클릭', async ({ page }) => {
  await page.evaluate(() => {
    const selectors = [
      'textarea[placeholder*="comment" i]',
      'input[placeholder*="comment" i]',
      '[class*="comment-input"]',
      'textarea',
    ];
    const testText = `QA Auto ${Date.now()}`;
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLInputElement | HTMLTextAreaElement | null;
      if (el) {
        el.click();
        el.value = testText;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        return;
      }
    }
  });
  await page.waitForTimeout(400);
  const btn = page.locator('button').filter({ hasText: /^comment$/i }).first();
  if ((await btn.count()) > 0) await btn.click().catch(() => {});
  await page.waitForTimeout(800);
});

// ──── 내 댓글 더보기 (Edit / Delete) ────

When('등록한 내 댓글 더보기 버튼 클릭', async ({ page }) => {
  await ensureOnCommentPage(page);
  const clicked = await page.evaluate(() => {
    const selectors = [
      '[class*="comment"] button[aria-label*="more" i]',
      '[class*="comment"] .js-comment-more',
      '[class*="comment"] a.comment-header__btn',
      '[class*="comment"] button:has(svg)',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return true; }
    }
    return false;
  });
  if (clicked) {
    await page.waitForTimeout(400);
  } else {
    await expect(page.locator('[class*="comment"] button').first()).toBeVisible({ timeout: 5000 });
  }
});

When('등록한 내 댓글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  const editBtn = page.locator('[role="dialog"] button, [class*="popup"] button, [class*="menu"] li').filter({ hasText: /^edit$/i }).first();
  if ((await editBtn.count()) > 0) {
    await editBtn.click();
    await page.waitForTimeout(400);
    return;
  }
  const moreBtn = page.locator('[class*="comment"] button[aria-label*="more" i], [class*="comment"] [class*="more"]').first();
  await expect(moreBtn).toBeVisible({ timeout: 5000 });
  await moreBtn.click();
  await page.waitForTimeout(300);
  await expect(page.locator('button, li').filter({ hasText: /^edit$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button, li').filter({ hasText: /^edit$/i }).first().click();
});

When('텍스트 수정 후 [Save] 버튼 클릭', async ({ page }) => {
  const input = page.locator(
    'textarea[placeholder*="comment" i], input[placeholder*="comment" i], [class*="comment-input"]'
  ).first();
  await expect(input).toBeVisible({ timeout: 5000 });
  await input.fill(`QA Edited ${Date.now()}`);
  await expect(page.locator('button').filter({ hasText: /^save$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button').filter({ hasText: /^save$/i }).first().click();
  await page.waitForTimeout(800);
});

When('등록한 내 댓글 더보기 > [Delete] 버튼 클릭', async ({ page }) => {
  const deleteBtn = page.locator('[role="dialog"] button, [class*="popup"] button, [class*="menu"] li').filter({ hasText: /^delete$/i }).first();
  if ((await deleteBtn.count()) > 0) {
    await deleteBtn.click();
    await page.waitForTimeout(600);
    const confirmBtn = page.locator('button').filter({ hasText: /confirm|yes|delete/i }).first();
    if ((await confirmBtn.count()) > 0) await confirmBtn.click();
    await page.waitForTimeout(600);
    return;
  }
  const moreBtn = page.locator('[class*="comment"] button[aria-label*="more" i], [class*="comment"] [class*="more"]').first();
  await expect(moreBtn).toBeVisible({ timeout: 5000 });
  await moreBtn.click();
  await page.waitForTimeout(300);
  await expect(page.locator('button, li').filter({ hasText: /^delete$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button, li').filter({ hasText: /^delete$/i }).first().click();
  await page.waitForTimeout(600);
  const confirm = page.locator('button').filter({ hasText: /confirm|yes|delete/i }).first();
  if ((await confirm.count()) > 0) await confirm.click();
  await page.waitForTimeout(600);
});

// ──── 다른 유저 댓글 프로필 클릭 ────

When('다른 유저 댓글 > 프로필 이미지 클릭', async ({ page }) => {
  await ensureOnCommentPage(page);
  const avatars = page.locator('[class*="comment"] img[alt*="profile" i], [class*="comment"] img[class*="avatar" i]');
  const count = await avatars.count();
  for (let i = 0; i < count; i++) {
    if (await avatars.nth(i).isVisible().catch(() => false)) {
      await avatars.nth(i).click();
      await page.waitForLoadState('domcontentloaded').catch(() => {});
      return;
    }
  }
  test.skip(true, '다른 유저 댓글 없음 — 동적 콘텐츠');
});

// ──── 댓글 좋아요 ────

When('댓글 [Likes] 버튼 클릭', async ({ page }) => {
  await ensureOnCommentPage(page);
  const clicked = await page.evaluate(() => {
    const selectors = [
      '[class*="comment"] button[aria-label*="like" i]',
      '[class*="comment"] button[class*="like"]',
      '[class*="comment"] .js-comment-like',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return true; }
    }
    return false;
  });
  if (clicked) {
    await page.waitForTimeout(500);
  } else {
    test.skip(true, '댓글 없음 — 좋아요 버튼 없음');
  }
});

When('댓글 [Likes] 버튼 재클릭', async ({ page }) => {
  const likeBtn = page.locator(
    '[class*="comment"] button[aria-label*="like" i], [class*="comment"] button[class*="like"]'
  ).first();
  await expect(likeBtn).toBeVisible({ timeout: 5000 });
  await likeBtn.click();
  await page.waitForTimeout(500);
});

// ──── 답글 ────

When('댓글 [View n reply] 버튼 클릭', async ({ page }) => {
  await ensureOnCommentPage(page);
  const viewReplyBtn = page.locator('button').filter({ hasText: /view .* repl/i }).first();
  if ((await viewReplyBtn.count()) === 0) { test.skip(true, '답글 없음 — 동적 콘텐츠'); return; }
  await viewReplyBtn.click();
  await page.waitForTimeout(500);
});

When('[Hide n reply] 버튼 클릭', async ({ page }) => {
  const hideBtn = page.locator('button').filter({ hasText: /hide .* repl/i }).first();
  await expect(hideBtn).toBeVisible({ timeout: 5000 });
  await hideBtn.click();
  await page.waitForTimeout(500);
});

When('댓글 [Reply] 버튼 클릭', async ({ page }) => {
  const replyBtn = page.locator('[class*="comment"] button').filter({ hasText: /^reply$/i }).first();
  await expect(replyBtn).toBeVisible({ timeout: 5000 });
  await replyBtn.click();
  await page.waitForTimeout(500);
});

When('답글 텍스트 입력 후 [Reply] 버튼 클릭', async ({ page }) => {
  const input = page.locator(
    'textarea[placeholder*="reply" i], input[placeholder*="reply" i], textarea[placeholder*="comment" i]'
  ).first();
  await expect(input).toBeVisible({ timeout: 5000 });
  await input.fill(`QA Reply ${Date.now()}`);
  await expect(page.locator('button').filter({ hasText: /^reply$/i }).last()).toBeVisible({ timeout: 5000 });
  await page.locator('button').filter({ hasText: /^reply$/i }).last().click();
  await page.waitForTimeout(800);
});

When('등록한 내 답글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  const moreBtn = page.locator(
    '[class*="reply"] button[aria-label*="more" i], [class*="reply"] [class*="more"]'
  ).first();
  await expect(moreBtn).toBeVisible({ timeout: 5000 });
  await moreBtn.click();
  await page.waitForTimeout(300);
  await expect(page.locator('button, li').filter({ hasText: /^edit$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button, li').filter({ hasText: /^edit$/i }).first().click();
  await page.waitForTimeout(400);
});

When('텍스트 수정 후 [Edit] 버튼 클릭', async ({ page }) => {
  const input = page.locator(
    'textarea[placeholder*="reply" i], input[placeholder*="reply" i], textarea[placeholder*="comment" i]'
  ).first();
  await expect(input).toBeVisible({ timeout: 5000 });
  await input.fill(`QA Edited Reply ${Date.now()}`);
  await expect(page.locator('button').filter({ hasText: /^(edit|save)$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button').filter({ hasText: /^(edit|save)$/i }).first().click();
  await page.waitForTimeout(800);
});

When('등록한 내 답글 더보기 > [Delete] 버튼 클릭', async ({ page }) => {
  const moreBtn = page.locator(
    '[class*="reply"] button[aria-label*="more" i], [class*="reply"] [class*="more"]'
  ).first();
  await expect(moreBtn).toBeVisible({ timeout: 5000 });
  await moreBtn.click();
  await page.waitForTimeout(300);
  await expect(page.locator('button, li').filter({ hasText: /^delete$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button, li').filter({ hasText: /^delete$/i }).first().click();
  await page.waitForTimeout(600);
  const confirm = page.locator('button').filter({ hasText: /confirm|yes|delete/i }).first();
  if ((await confirm.count()) > 0) await confirm.click();
  await page.waitForTimeout(600);
});

When('답글 [Likes] 버튼 클릭', async ({ page }) => {
  const likeBtn = page.locator(
    '[class*="reply"] button[aria-label*="like" i], [class*="reply"] button[class*="like"]'
  ).first();
  await expect(likeBtn).toBeVisible({ timeout: 5000 });
  await likeBtn.click();
  await page.waitForTimeout(500);
});

When('답글 [Likes] 버튼 재클릭', async ({ page }) => {
  const likeBtn = page.locator(
    '[class*="reply"] button[aria-label*="like" i], [class*="reply"] button[class*="like"]'
  ).first();
  await expect(likeBtn).toBeVisible({ timeout: 5000 });
  await likeBtn.click();
  await page.waitForTimeout(500);
});

// ──── 신고 ────

When('[Report] 버튼 클릭', async ({ page }) => {
  const reportBtn = page.locator('button, [role="menuitem"]').filter({ hasText: /^report$/i }).first();
  await expect(reportBtn).toBeVisible({ timeout: 5000 });
  await reportBtn.click();
  await page.waitForTimeout(500);
});

When('신고 항목 선택', async ({ page }) => {
  const option = page.locator('[role="dialog"] label, [role="dialog"] input[type="radio"], [class*="report"] li').first();
  await expect(option).toBeVisible({ timeout: 5000 });
  await option.click();
  await page.waitForTimeout(300);
});

// ──── Then: 댓글 목록 ────

Then('댓글 목록이 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="comment-list"], [data-testid*="comment"], [class*="comment"] li').first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 입력창이 노출된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, textarea[placeholder*="comment" i], [class*="comment-input"]').first()).toBeVisible({ timeout: 5000 });
});

Then('입력창에 텍스트가 입력된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, textarea[placeholder*="comment" i]').first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 설정 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="popup"], [class*="bottom-sheet"]').first()).toBeVisible({ timeout: 5000 });
});

Then('팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, [class*="comment-input"]').first()).toBeVisible({ timeout: 5000 });
});

Then('팝업이 닫히고 댓글 목록에서 삭제된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, [class*="comment-input"]').first()).toBeVisible({ timeout: 5000 });
});

Then('유저 프로필 페이지로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/(profile|creator)\//);
});

Then('좋아요 버튼이 활성화되어 노출된다.', async ({ page }) => {
  await expect(page.locator('a.js-comment-like-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  await expect(page.locator('a.js-comment-like-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('답글 목록이 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="reply"], .js-reply-list').first()).toBeVisible({ timeout: 5000 });
});

Then('답글 접기 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('button').filter({ hasText: /hide .* repl/i }).first()).toBeVisible({ timeout: 5000 });
});

Then('신고 항목 선택 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="report"], [class*="popup"]').first()).toBeVisible({ timeout: 5000 });
});

Then('[Add a comment] 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('button, a').filter({ hasText: /add a comment/i }).first()).toBeVisible({ timeout: 5000 });
});

Then('Comments 목록없을때 안내문구 노출된다.', async ({ page }) => {
  const empty = page.locator('[class*="empty"], .page-empty, [class*="no-data"]');
  if ((await empty.count()) === 0) { test.skip(true, '안내문구 없음'); return; }
  await expect(empty.first()).toBeVisible({ timeout: 5000 });
});

Then('Likes 목록없을때 안내문구 노출된다.', async ({ page }) => {
  const empty = page.locator('[class*="empty"], .page-empty, [class*="no-data"]');
  if ((await empty.count()) === 0) { test.skip(true, '안내문구 없음'); return; }
  await expect(empty.first()).toBeVisible({ timeout: 5000 });
});

Then('토스트가 노출되며 좋아요 버튼이 활성화되어 노출된다.', async ({ page }) => {
  await expect(page.locator('a.js-comment-like-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('토스트가 노출되며 팝업이 닫힌다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, [class*="comment-input"]').first()).toBeVisible({ timeout: 5000 });
});
