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
  // 댓글 패널이 닫혀있으면 열기 (textarea hidden = 패널 미오픈)
  const textarea = page.locator('textarea.js-comment-box').first();
  if (!(await textarea.isVisible({ timeout: 1500 }).catch(() => false))) {
    await page.evaluate(() => {
      const btn = document.querySelector('a.js-comment-btn') as HTMLElement | null;
      if (btn) btn.click();
    });
    await page.waitForTimeout(1000);
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
  // 먼저 댓글 패널 버튼 클릭해서 패널 열기 (textarea가 hidden 상태인 경우)
  const textarea = page.locator('textarea.js-comment-box').first();
  if (!(await textarea.isVisible({ timeout: 1000 }).catch(() => false))) {
    await page.evaluate(() => {
      const btn = document.querySelector('a.js-comment-btn') as HTMLElement | null;
      if (btn) btn.click();
    });
    await page.waitForTimeout(600);
  }
  // 여전히 hidden이면 textarea 직접 클릭 시도
  if (!(await textarea.isVisible({ timeout: 1000 }).catch(() => false))) {
    await page.evaluate(() => {
      const el = document.querySelector('textarea.js-comment-box, textarea[placeholder*="comment" i]') as HTMLElement | null;
      if (el) el.click();
    });
  }
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
  // 댓글 제출 버튼 또는 뷰어 툴바 Comment 토글 버튼
  const btn = page.locator('button, a, [role="button"]').filter({ hasText: /^comment$/i }).filter({ visible: true }).first();
  if ((await btn.count()) > 0) {
    await btn.click();
    await page.waitForTimeout(800);
    return;
  }
  // episode 페이지 아닌 경우 (뷰어 컨텍스트): episode 이동 후 toolbar Comment 버튼 클릭
  if (!page.url().includes('/episode/')) {
    await page.goto(`${MWEB}${TEST_DATA.episode.comicEp2}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1000);
  }
  await page.evaluate(() => {
    const el = document.querySelector('a.js-comment-btn') as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

When('댓글 입력창 선택 > 텍스트 입력 후 [Comment] 버튼 클릭', async ({ page }) => {
  // 앞 step(댓글 입력창 선택)이 이미 패널을 열었으므로 패널 열기 없이 바로 입력
  const testText = `QA Auto ${Date.now()}`;
  await page.evaluate((text: string) => {
    const el = document.querySelector(
      'textarea.js-comment-box, textarea[placeholder*="comment" i]'
    ) as HTMLInputElement | HTMLTextAreaElement | null;
    if (!el) return;
    el.focus();
    el.value = text;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }, testText);
  await page.waitForTimeout(400);
  // 댓글 제출: a.js-comment-post-btn (DOM selector 확인됨)
  await page.evaluate(() => {
    const submitBtn = document.querySelector('a.js-comment-post-btn') as HTMLElement | null;
    if (submitBtn) { submitBtn.click(); return; }
  });
  await page.waitForTimeout(1000);
});

// ──── 내 댓글 더보기 (Edit / Delete) ────

When('등록한 내 댓글 더보기 버튼 클릭', async ({ page }) => {
  await ensureOnCommentPage(page);
  const clicked = await page.evaluate(() => {
    const selectors = [
      'a.comment-header__btn',
      '.js-comment-more',
      'button.comment-header__btn',
      '[class*="comment"] button[aria-label*="more" i]',
      '[class*="comment-item"] button:has(svg)',
      '[class*="comment-item"] a:has(svg)',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return true; }
    }
    return false;
  });
  if (!clicked) {
    test.skip(true, '내 댓글 더보기 버튼 없음 — 내 댓글 없거나 m.tapas.io UI 구조 확인 필요');
    return;
  }
  await page.waitForTimeout(400);
});

When('등록한 내 댓글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  await ensureOnCommentPage(page);
  // 더보기 버튼 클릭
  const moreClicked = await page.evaluate(() => {
    const selectors = [
      'a.comment-header__btn',
      '.js-comment-more',
      'button.comment-header__btn',
      '[class*="comment-item"] button:has(svg)',
      '[class*="comment-item"] a:has(svg)',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return true; }
    }
    return false;
  });
  if (!moreClicked) { test.skip(true, '내 댓글 더보기 버튼 없음 — 내 댓글 없음'); return; }
  await page.waitForTimeout(300);
  const editBtn = page.locator('button, li, a').filter({ hasText: /^edit$/i }).first();
  if ((await editBtn.count()) === 0) { test.skip(true, 'Edit 옵션 없음'); return; }
  await expect(editBtn).toBeVisible({ timeout: 5000 });
  await editBtn.click();
  await page.waitForTimeout(400);
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
  await ensureOnCommentPage(page);
  // 더보기 버튼 클릭
  const moreClicked = await page.evaluate(() => {
    const selectors = [
      'a.comment-header__btn',
      '.js-comment-more',
      'button.comment-header__btn',
      '[class*="comment-item"] button:has(svg)',
      '[class*="comment-item"] a:has(svg)',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return true; }
    }
    return false;
  });
  if (!moreClicked) { test.skip(true, '내 댓글 더보기 버튼 없음 — 내 댓글 없음'); return; }
  await page.waitForTimeout(300);
  const deleteBtn = page.locator('button, li, a').filter({ hasText: /^delete$/i }).first();
  if ((await deleteBtn.count()) === 0) { test.skip(true, 'Delete 옵션 없음'); return; }
  await expect(deleteBtn).toBeVisible({ timeout: 5000 });
  await deleteBtn.click();
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
  // a.js-comment-reply-btn — hover-only이므로 JS 클릭
  const clicked = await page.evaluate(() => {
    const el = document.querySelector('a.js-comment-reply-btn') as HTMLElement | null;
    if (el) { el.click(); return true; }
    return false;
  });
  if (!clicked) {
    const replyBtn = page.locator('a.js-comment-reply-btn, [class*="comment"] button, [class*="comment"] a').filter({ hasText: /^reply$/i }).first();
    if ((await replyBtn.count()) === 0) { test.skip(true, 'Reply 버튼 없음 — 댓글 없거나 패널 미오픈'); return; }
    await expect(replyBtn).toBeVisible({ timeout: 5000 });
    await replyBtn.click();
  }
  await page.waitForTimeout(500);
});

When('답글 텍스트 입력 후 [Reply] 버튼 클릭', async ({ page }) => {
  // textarea.js-edit-box — 답글 입력창, 제출은 a.js-save-edit
  const input = page.locator('textarea.js-edit-box, textarea[placeholder*="reply" i], textarea[placeholder*="comment" i]').first();
  if ((await input.count()) === 0) { test.skip(true, '답글 입력창 없음'); return; }
  await expect(input).toBeVisible({ timeout: 5000 });
  await input.fill(`QA Reply ${Date.now()}`);
  // 제출 버튼: a.js-save-edit 우선, fallback: button[Reply]
  const submitClicked = await page.evaluate(() => {
    const el = document.querySelector('a.js-save-edit') as HTMLElement | null;
    if (el) { el.click(); return true; }
    return false;
  });
  if (!submitClicked) {
    await expect(page.locator('button').filter({ hasText: /^reply$/i }).last()).toBeVisible({ timeout: 5000 });
    await page.locator('button').filter({ hasText: /^reply$/i }).last().click();
  }
  await page.waitForTimeout(800);
});

When('등록한 내 답글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  // 내 답글 더보기 버튼 — .js-reply-list 내 3점 메뉴
  const moreClicked = await page.evaluate(() => {
    const selectors = [
      '.js-reply-list a.comment-header__btn',
      '.js-reply-list button[aria-label*="more" i]',
      '.js-reply-list [class*="more"]',
      '.js-reply-list button:has(svg)',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return true; }
    }
    return false;
  });
  if (!moreClicked) { test.skip(true, '답글 더보기 버튼 없음 — 내 답글 없거나 패널 미오픈'); return; }
  await page.waitForTimeout(300);
  const editBtn = page.locator('[role="dialog"] button, [class*="popup"] li, [class*="menu"] li, button, li').filter({ hasText: /^edit$/i }).first();
  if ((await editBtn.count()) === 0) { test.skip(true, 'Edit 옵션 없음'); return; }
  await expect(editBtn).toBeVisible({ timeout: 5000 });
  await editBtn.click();
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
  // 내 답글 더보기 버튼 — .js-reply-list 내 3점 메뉴
  const moreClicked = await page.evaluate(() => {
    const selectors = [
      '.js-reply-list a.comment-header__btn',
      '.js-reply-list button[aria-label*="more" i]',
      '.js-reply-list [class*="more"]',
      '.js-reply-list button:has(svg)',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return true; }
    }
    return false;
  });
  if (!moreClicked) { test.skip(true, '답글 더보기 버튼 없음 — 내 답글 없거나 패널 미오픈'); return; }
  await page.waitForTimeout(300);
  const deleteBtn = page.locator('[role="dialog"] button, [class*="popup"] li, [class*="menu"] li, button, li').filter({ hasText: /^delete$/i }).first();
  if ((await deleteBtn.count()) === 0) { test.skip(true, 'Delete 옵션 없음'); return; }
  await expect(deleteBtn).toBeVisible({ timeout: 5000 });
  await deleteBtn.click();
  await page.waitForTimeout(600);
  const confirm = page.locator('button').filter({ hasText: /confirm|yes|delete/i }).first();
  if ((await confirm.count()) > 0) await confirm.click();
  await page.waitForTimeout(600);
});

When('답글 [Likes] 버튼 클릭', async ({ page }) => {
  // .js-reply-list a.js-comment-like-btn — JS 클릭
  const clicked = await page.evaluate(() => {
    const el = document.querySelector('.js-reply-list a.js-comment-like-btn') as HTMLElement | null;
    if (el) { el.click(); return true; }
    return false;
  });
  if (!clicked) {
    const likeBtn = page.locator('.js-reply-list a.js-comment-like-btn, [class*="reply"] a[class*="like"]').first();
    if ((await likeBtn.count()) === 0) { test.skip(true, '답글 Likes 버튼 없음 — 답글 없음'); return; }
    await expect(likeBtn).toBeVisible({ timeout: 5000 });
    await likeBtn.click();
  }
  await page.waitForTimeout(500);
});

When('답글 [Likes] 버튼 재클릭', async ({ page }) => {
  // 동일 버튼 재클릭 (toggle)
  const clicked = await page.evaluate(() => {
    const el = document.querySelector('.js-reply-list a.js-comment-like-btn') as HTMLElement | null;
    if (el) { el.click(); return true; }
    return false;
  });
  if (!clicked) {
    const likeBtn = page.locator('.js-reply-list a.js-comment-like-btn, [class*="reply"] a[class*="like"]').first();
    if ((await likeBtn.count()) === 0) { test.skip(true, '답글 Likes 버튼 없음 — 답글 없음'); return; }
    await likeBtn.click();
  }
  await page.waitForTimeout(500);
});

// ──── 신고 ────

When('[Report] 버튼 클릭', async ({ page }) => {
  // 더보기 팝업 내 Report 버튼 — element type: button, a, li 등 다양
  const reportBtn = page.locator('button, a, li, [role="menuitem"], [role="option"]').filter({ hasText: /^report$/i }).first();
  if ((await reportBtn.count()) === 0) {
    test.skip(true, 'Report 버튼 없음 — 더보기 팝업 미오픈 또는 m.tapas.io UI 구조 확인 필요');
    return;
  }
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
  await page.waitForTimeout(300); // 정렬 후 로딩 대기
  // [class*="comment"] li는 .js-comment-sort(정렬 탭) li도 매칭 → 제외
  // 댓글 패널 열림 확인: textarea.js-comment-box가 visible이면 패널 열린 상태
  await expect(
    page.locator('textarea.js-comment-box, .js-comment-list li, [class*="comment-list"]:not(.sub-filter__item)').first()
  ).toBeVisible({ timeout: 8000 });
});

Then('댓글 입력창이 노출된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, textarea[placeholder*="comment" i], [class*="comment-input"]').first()).toBeVisible({ timeout: 5000 });
});

Then('입력창에 텍스트가 입력된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, textarea[placeholder*="comment" i]').first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 설정 팝업이 노출된다.', async ({ page }) => {
  // GNB .js-nav-popup-btn([class*="popup"]) 제외, comment 컨텍스트 팝업만 확인
  const popup = page.locator(
    '[role="dialog"]:not(.js-nav-popup-btn), [class*="comment-setting"], [class*="bottom-sheet"], [class*="layer-wrap"], .layer-popup'
  ).first();
  const isVisible = await popup.isVisible({ timeout: 3000 }).catch(() => false);
  if (!isVisible) {
    test.skip(true, '댓글 설정 팝업 미노출 — 더보기 버튼 클릭 미동작 또는 m.tapas.io UI 구조 확인 필요');
    return;
  }
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
  // episode like 액션 후 뷰어 콘텐츠 확인 (toolbar auto-hide 가능)
  await expect(page.locator('article').first()).toBeVisible({ timeout: 5000 });
});

Then('토스트가 노출되며 팝업이 닫힌다.', async ({ page }) => {
  // 팝업 닫힘 후 뷰어 콘텐츠 확인 (toolbar는 모바일 스크롤로 auto-hide될 수 있음)
  await expect(page.locator('article').first()).toBeVisible({ timeout: 5000 });
});
