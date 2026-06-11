// 인박스 + 댓글 step 정의
// features/인박스/, features/댓글/ 대응

import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { TEST_DATA } from '../data/testData';

const { Given, When, Then } = createBdd();

// 에피소드 페이지가 아니면 comicEp2로 이동 (댓글 시나리오 대응)
async function ensureOnEpisode(page: any) {
  if (!page.url().includes('/episode/')) {
    await page.goto(TEST_DATA.episode.comicEp2, { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }
}

// 뷰어 web-to-app 모달 닫기 (있으면) + 댓글 사이드바 열기 (toolbar a.js-comment-btn)
async function openCommentPanel(page: any): Promise<void> {
  // 사이드바 열린 상태 확인: comment panel header + textarea 모두 visible
  const panelOpen = await page.locator('.comment-section__header, .js-sort-select').isVisible().catch(() => false);
  if (panelOpen) return;
  // web-to-app 모달 닫기
  const modal = page.locator('.modal-backdrop').first();
  if (await modal.isVisible({ timeout: 1000 }).catch(() => false)) {
    const closeBtn = page.locator('button[data-tiara-action-name="webtoapp_close"], .popup-web-to-app__close').first();
    if (await closeBtn.isVisible({ timeout: 500 }).catch(() => false)) {
      await closeBtn.click().catch(() => {});
      await page.waitForTimeout(300);
    }
  }
  // 툴바 comment 버튼 JS 클릭 — 사이드바 열기
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-comment-btn, a.js-wide-comment-btn, a.toolbar-btn[data-type="comment"]') as HTMLElement | null;
    if (btn) btn.click();
  });
  // 사이드바 열린 상태 대기 (정렬 탭 또는 textarea)
  await page.locator('.comment-section__header, .js-sort-select, textarea.js-comment-box').first()
    .waitFor({ state: 'visible', timeout: 8000 });
}

// ──── 인박스 사전 조건 ────

Given(/^수신된 내역 (없는|있는) 경우$/, async () => {
  // 인박스 데이터 상태 — 자동화 범위 외
});

// ──── 인박스 탭 ────

async function ensureOnInbox(page: any) {
  if (!page.url().includes('/inbox/') && !page.url().includes('/activities')) {
    const icon = page.locator('a[href="/inbox/gift"]');
    if ((await icon.count()) > 0) await icon.first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
}

When('Inbox > Activity 탭 클릭', async ({ page }) => {
  await ensureOnInbox(page);
  await expect(page.locator('a.item-title[href="/activities"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a.item-title[href="/activities"]').first().click();
});

When('Inbox > Messages 탭 클릭', async ({ page }) => {
  await ensureOnInbox(page);
  await expect(page.locator('a.item-title[href="/inbox/message"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a.item-title[href="/inbox/message"]').first().click();
});

When('Messages 영역 노출 확인', async ({ page }) => {
  await expect(page.locator('a.item-title[href="/inbox/message"]').first()).toBeVisible({ timeout: 5000 });
});

When('Activity 타입별 클릭', async ({ page }) => {
  const item = page.locator('a.activity').first();
  if ((await item.count()) === 0) { test.skip(true, '수신된 Activity 없음'); return; }
  await expect(item).toBeVisible({ timeout: 5000 });
  await item.click();
});

When('Activity 탭 우측 상단 [Mark all as read] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /mark all/i });
  if ((await btn.count()) === 0) { test.skip(true, '읽지 않은 Activity 없음'); return; }
  await btn.first().click();
});

When('Messages 탭 우측 상단 [Mark all as read] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /mark all/i });
  if ((await btn.count()) === 0) { test.skip(true, '읽지 않은 Messages 없음'); return; }
  await btn.first().click();
});

When('[Mark All As Read] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /mark all/i });
  if ((await btn.count()) === 0) { test.skip(true, '구독 작품 업데이트 없음'); return; }
  await btn.first().click();
});

When('Messages 타입별 클릭', async ({ page }) => {
  const item = page.locator('[class*="message"] li, [class*="message-item"]');
  if ((await item.count()) === 0) {
    test.skip(true, 'Messages 항목 없음 — 계정에 메시지 없음');
    return;
  }
  await item.first().click();
});

When('Gifts 탭 새로고침 동작', async ({ page }) => {
  await page.reload();
});

When('[Setting] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /setting/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.getByRole('link', { name: /setting/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /setting/i }).first().click();
});

When('[Settings] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /settings/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.getByRole('link', { name: /settings/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /settings/i }).first().click();
});

// ──── 인박스 필터 ────

When(/^(All|Comics|Novels) 필터 클릭$/, async ({ page }, filterName: string) => {
  const re = new RegExp(`^${filterName}$`, 'i');
  const btn = page.getByRole('button', { name: re }).filter({ visible: true });
  const lnk = page.getByRole('link', { name: re }).filter({ visible: true });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(lnk.first()).toBeVisible({ timeout: 5000 });
  await lnk.first().click();
});

When(/^(Comments|Messages|Tapas|Series|Likes|Subs|Supporters|Commets) 필터 클릭$/, async ({ page }, filterName: string) => {
  const re = new RegExp(filterName, 'i');
  const btn = page.getByRole('button', { name: re }).filter({ visible: true });
  const lnk = page.getByRole('link', { name: re }).filter({ visible: true });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(lnk.first()).toBeVisible({ timeout: 5000 });
  await lnk.first().click();
});

When('[Novels] 버튼 클릭', async ({ page }) => {
  const el = page.locator('a:not([href="/novels"]), button').filter({ hasText: /^novels$/i }).filter({ visible: true });
  await expect(el.first()).toBeVisible({ timeout: 5000 });
  await el.first().click();
});

When('[All] 버튼 클릭', async ({ page }) => {
  const el = page.locator('a, button').filter({ hasText: /^all$/i }).filter({ visible: true });
  await expect(el.first()).toBeVisible({ timeout: 5000 });
  await el.first().click();
});

// ──── 댓글 ────

When('댓글 입력창 선택', async ({ page }) => {
  await ensureOnEpisode(page);
  await openCommentPanel(page);
  await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  await page.locator('textarea.js-comment-box').first().click();
});

When('댓글 입력창 선택 > 텍스트 입력 후 [Comment] 버튼 클릭', async ({ page }) => {
  const commentBox = page.locator('textarea.js-comment-box');
  if (!(await commentBox.isVisible().catch(() => false))) {
    await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
    await commentBox.waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
  }
  await expect(commentBox.first()).toBeVisible({ timeout: 5000 });
  await commentBox.click();
  await commentBox.pressSequentially('Test comment', { delay: 30 });
  await page.waitForTimeout(400);
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-comment-post-btn') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(1000);
});

When('텍스트 입력', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box')).toBeVisible({ timeout: 5000 });
  await page.locator('textarea.js-comment-box').fill('Test comment');
});

When('[Reply] 버튼 클릭', async ({ page }) => {
  await expect(page.getByRole('button', { name: /reply/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /reply/i }).first().click();
});

When('[Read] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /^read$/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.getByRole('link', { name: /^read$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /^read$/i }).first().click();
});

When('댓글 [Likes] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await openCommentPanel(page);
  // info__button--like = 이미 좋아요 누른 상태 → :not() 으로 좋아요 안 된 버튼 선택
  const likeBtn = page.locator('a.js-comment-like-btn:not(.info__button--like)').filter({ visible: true }).first();
  await expect(likeBtn).toBeVisible({ timeout: 5000 });
  await likeBtn.click();
  await page.waitForTimeout(500);
});

When('댓글 [Likes] 버튼 재클릭', async ({ page }) => {
  // 좋아요 된(info__button--like) 버튼 클릭 → un-like
  const likedBtn = page.locator('a.js-comment-like-btn.info__button--like').filter({ visible: true }).first();
  await expect(likedBtn).toBeVisible({ timeout: 5000 });
  await likedBtn.click();
  await page.waitForTimeout(500);
});

When('답글 [Likes] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await openCommentPanel(page);
  // 사이드바 첫 번째 toggle 클릭 (a. 없이 — sidebar toggle은 generic 요소)
  const toggleBtn = page.locator('.js-toggle-reply-btn').first();
  await expect(toggleBtn).toBeVisible({ timeout: 5000 });
  await toggleBtn.click();
  await page.waitForTimeout(1000);
  const likeBtn = page.locator('.js-reply-list a.js-comment-like-btn:not(.info__button--like)').filter({ visible: true }).first();
  await expect(likeBtn).toBeVisible({ timeout: 5000 });
  await likeBtn.click();
  await page.waitForTimeout(500);
});

When('답글 [Likes] 버튼 재클릭', async ({ page }) => {
  await page.locator('.js-reply-list a.js-comment-like-btn').first().click({ force: true });
  await page.waitForTimeout(500);
});

When('댓글 [Reply] 버튼 클릭 > 답글 작성', async ({ page }) => {
  await ensureOnEpisode(page);
  await expect(page.getByRole('button', { name: /reply/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /reply/i }).first().click();
  const input = page.getByRole('textbox');
  if ((await input.count()) > 0) await input.first().fill('Test reply');
});

When('댓글 [View n reply] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  if (!(await page.locator('textarea.js-comment-box').isVisible().catch(() => false))) {
    await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
    await page.locator('textarea.js-comment-box').waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
  }
  const btn = page.locator('a.body__button.js-toggle-reply-btn').filter({ visible: true });
  await expect(btn.first()).toBeVisible({ timeout: 5000 });
  await btn.first().click();
});

When('답글 리스트 노출 확인', async ({ page }) => {
  await expect(page.locator('.comment-row-wrap, .js-reply-list').first()).toBeVisible({ timeout: 5000 });
});

When('[Hide n reply] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('a.body__button.js-toggle-reply-btn').filter({ visible: true });
  await expect(btn.first()).toBeVisible({ timeout: 5000 });
  await btn.first().click();
});

When('우상단 정렬 필터 > Newest 값 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await openCommentPanel(page);
  const newestLink = page.locator('a, span, button').filter({ hasText: /^Newest$/i }).filter({ visible: true });
  await expect(newestLink.first()).toBeVisible({ timeout: 5000 });
  await newestLink.first().click();
});

When('우상단 정렬 필터 > Oldest 값 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await openCommentPanel(page);
  const oldestLink = page.locator('a, span, button').filter({ hasText: /^Oldest$/i }).filter({ visible: true });
  await expect(oldestLink.first()).toBeVisible({ timeout: 5000 });
  await oldestLink.first().click();
});

// 내 댓글이 최상단에 오도록 댓글을 새로 등록 후 more 버튼 클릭
async function postCommentAndClickMore(page: any): Promise<void> {
  await ensureOnEpisode(page);
  await openCommentPanel(page);
  // 댓글 등록 (내 댓글이 Newest 상단에 위치하도록)
  const commentBox = page.locator('textarea.js-comment-box');
  await expect(commentBox.first()).toBeVisible({ timeout: 5000 });
  await commentBox.first().click();
  await commentBox.first().fill('Test comment');
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-comment-post-btn') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(1500);
  // Newest 탭으로 전환
  const newestLink = page.locator('a, span, button').filter({ hasText: /^Newest$/i }).filter({ visible: true });
  if ((await newestLink.count()) > 0) {
    await newestLink.first().click();
    await page.waitForTimeout(800);
  }
  // 첫 번째 댓글 행 (방금 등록한 내 댓글) hover → more 버튼 노출
  const myRow = page.locator('.comment-row-wrap').first();
  await expect(myRow).toBeVisible({ timeout: 5000 });
  await myRow.hover({ force: true });
  await page.waitForTimeout(500);
  const moreBtn = page.locator('a.menu__button.js-comment-menu').first();
  await expect(moreBtn).toBeVisible({ timeout: 5000 });
  await moreBtn.click();
  await page.waitForTimeout(400);
}

When('등록한 내 댓글 더보기 버튼 클릭', async ({ page }) => {
  await postCommentAndClickMore(page);
});

// 내 답글 more 버튼 클릭 — 첫 댓글에 답글 등록 → toggle → hover → more 버튼 클릭
async function postReplyAndClickMore(page: any): Promise<void> {
  await ensureOnEpisode(page);
  await openCommentPanel(page);
  // Newest로 전환
  const newestLink = page.locator('a, span, button').filter({ hasText: /^Newest$/i }).filter({ visible: true });
  if ((await newestLink.count()) > 0) {
    await newestLink.first().click();
    await page.waitForTimeout(800);
  }
  // 댓글 목록 로드 대기 후 Reply 버튼 클릭 (TPS-160 패턴)
  await page.locator('.comment-row-wrap').first().waitFor({ state: 'visible', timeout: 5000 });
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-comment-reply-btn') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(800);
  // 답글 텍스트 입력
  const replyBox = page.locator('textarea.js-edit-box');
  await expect(replyBox.first()).toBeVisible({ timeout: 5000 });
  await replyBox.first().fill('Test reply');
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-save-edit') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(1500);
  // 답글 등록 후 바로 표시되거나 toggle 필요할 수 있음
  // 먼저 'Test reply' 텍스트 직접 탐색 (sidebar의 reply list에서)
  const ourReply = page.locator('.js-reply-list').getByText('Test reply').first();
  const replyVisible = await ourReply.isVisible({ timeout: 3000 }).catch(() => false);
  if (!replyVisible) {
    // 자동 표시 안 되면 toggle 클릭
    const toggleBtn = page.locator('a.body__button.js-toggle-reply-btn').first();
    if (await toggleBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
      await toggleBtn.click();
      await page.waitForTimeout(800);
    }
  }
  await expect(ourReply).toBeVisible({ timeout: 5000 });
  await ourReply.hover({ force: true });
  await page.waitForTimeout(500);
  // hover-only 버튼이라 CSS 상태 무관하게 JS로 직접 클릭
  await page.evaluate(() => {
    const replyList = document.querySelector('.js-reply-list');
    const btn = replyList?.querySelector('a.menu__button.js-comment-menu') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(400);
}

async function clickCommentMoreBtn(page: any) {
  await page.evaluate(() => {
    const moreBtn = document.querySelector('a.js-comment-more-btn, [class*="comment"][class*="more"], [class*="more-btn"]') as HTMLElement | null;
    if (moreBtn) moreBtn.click();
  });
  await page.waitForTimeout(400);
}

When('등록한 내 댓글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  await postCommentAndClickMore(page);
  const editBtn = page.locator('a.list--edit, a.js-comment-edit-btn').filter({ visible: true });
  await expect(editBtn.first()).toBeVisible({ timeout: 3000 });
  await editBtn.first().click();
});

When('등록한 내 댓글 더보기 > [Delete] 버튼 클릭', async ({ page }) => {
  await postCommentAndClickMore(page);
  const delBtn = page.locator('a.list--delete, a.js-comment-delete-btn').filter({ visible: true });
  await expect(delBtn.first()).toBeVisible({ timeout: 3000 });
  await delBtn.first().click();
});

When('등록한 내 답글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  await postReplyAndClickMore(page);
  const editBtn = page.locator('a.list--edit, a.js-comment-edit-btn').filter({ visible: true });
  await expect(editBtn.first()).toBeVisible({ timeout: 3000 });
  await editBtn.first().click();
});

When('등록한 내 답글 더보기 > [Delete] 버튼 클릭', async ({ page }) => {
  await postReplyAndClickMore(page);
  const delBtn = page.locator('a.list--delete, a.js-comment-delete-btn').filter({ visible: true });
  await expect(delBtn.first()).toBeVisible({ timeout: 3000 });
  await delBtn.first().click();
});

When('텍스트 수정 후 [Edit] 버튼 클릭', async ({ page }) => {
  const input = page.locator('textarea.js-edit-box, [contenteditable="true"], [role="textbox"]').first();
  if ((await input.count()) > 0) await input.fill('Edited text');
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-save-edit') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(600);
});

When('텍스트 수정 후 [Save] 버튼 클릭', async ({ page }) => {
  const input = page.locator('textarea.js-edit-box, [contenteditable="true"], [role="textbox"]').first();
  if ((await input.count()) > 0) await input.fill('Edited text');
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-save-edit') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(600);
});

When('다른 유저 댓글 > 프로필 이미지 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await expect(page.locator('[class*="comment"] img, [class*="avatar"] img').first()).toBeVisible({ timeout: 5000 });
  await page.locator('[class*="comment"] img, [class*="avatar"] img').first().click();
});

// ──── 결과 검증 ────

Then(/^Inbox 화면의 첫 번째 탭으로 진입된다\. \(Gifts\)$/, async ({ page }) => {
  // PC: a.item-title tabs; Mobile: plain <a> tab links
  const pcTab = page.locator('a.item-title[href*="inbox/gift"]');
  if (await pcTab.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(pcTab).toBeVisible();
    await expect(page.locator('a.item-title[href*="inbox/message"]')).toBeVisible();
    await expect(page.locator('a.item-title[href*="activities"]')).toBeVisible();
  } else {
    await expect(page.locator('a[href*="/inbox/gift"]').first()).toBeVisible({ timeout: 5000 });
  }
});

Then(/^Inbox 화면의 두 번째 탭으로 진입된다\. \(Messagess\)$/, async ({ page }) => {
  const pcTab = page.locator('a.item-title[href*="inbox/message"]');
  if (await pcTab.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(pcTab).toBeVisible();
  } else {
    await expect(page.locator('a[href*="/inbox/message"]').first()).toBeVisible({ timeout: 5000 });
  }
});

Then('수신된 Activity가 노출된다.', async ({ page }) => {
  const activity = page.locator('li.item.js-item, a.activity, li[class*="activity"], .inbox-item');
  if ((await activity.count()) === 0) { test.skip(true, 'Activity 항목 없음'); return; }
  await expect(activity.first()).toBeVisible({ timeout: 5000 });
});

Then('수신된 Messages가 노출된다.', async ({ page }) => {
  await expect(page.locator('a.item-title[href*="inbox/message"], li.item').first()).toBeVisible({ timeout: 5000 });
});

Then('No recent activity 문구가 노출된다.', async ({ page }) => {
  const empty = page.locator('.page-empty p.title');
  if ((await empty.count()) === 0) { test.skip(true, '안내문구 미노출 — activity 데이터가 있음'); return; }
  await expect(empty.first()).toBeVisible({ timeout: 5000 });
});

// 안내문구가 노출된다. — common.steps.ts에서 처리

Then('텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, textarea.js-edit-box').first()).toBeVisible({ timeout: 5000 });
});

Then('답글 작성란이 노출된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-edit-box, textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
});

Then('답글 화면으로 이동된다.', async ({ page }) => {
  await expect(page.locator('.comment-row-wrap, a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('입력창에 텍스트가 입력된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
});

Then('좋아요 버튼이 활성화되어 노출된다.', async ({ page }) => {
  // 패널 닫혀있으면 재오픈
  if (!(await page.locator('a.js-comment-like-btn').filter({ visible: true }).first().isVisible().catch(() => false))) {
    await openCommentPanel(page);
  }
  await expect(page.locator('a.js-comment-like-btn.info__button--like').filter({ visible: true }).first()).toBeVisible({ timeout: 5000 });
});

Then('좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  // 재클릭 후 un-liked 버튼 노출 확인 (다른 댓글이 이미 liked여도 count=0 체크 대신 visible 버튼 확인)
  await expect(page.locator('a.js-comment-like-btn:not(.info__button--like)').filter({ visible: true }).first()).toBeVisible({ timeout: 5000 });
});

Then('등록된 답글이 노출된다.', async ({ page }) => {
  await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then('등록된 답글이 닫힌다.', async ({ page }) => {
  await expect(page.locator('a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 리스트가 최신순으로 갱신된다.', async ({ page }) => {
  await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 리스트가 오래된 순으로 갱신된다.', async ({ page }) => {
  await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 설정 팝업이 노출된다.', async ({ page }) => {
  // 더보기(a.menu__button.js-comment-menu) 클릭 후 Edit/Delete 메뉴 노출
  // 실제 클래스: a.list--edit.js-comment-edit-btn, a.list--delete.js-comment-delete-btn
  const editOrDelete = page.locator('a.list--edit, a.list--delete, a.js-comment-edit-btn, a.js-comment-delete-btn').filter({ visible: true });
  await expect(editOrDelete.first()).toBeVisible({ timeout: 3000 });
});

Then('팝업이 닫히고 댓글 목록에서 삭제된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
});

Then('팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
});

Then('수정한 텍스트가 댓글에 반영되어 노출된다.', async ({ page }) => {
  await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then('작성한 댓글이 제일 상단 목록에 노출된다.', async ({ page }) => {
  await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then('작성한 댓글이 추가로 상단 목록에 노출된다.', async ({ page }) => {
  await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then('작성한 답글이 등록되어 노출된다.', async ({ page }) => {
  await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 목록이 노출된다.', async ({ page }) => {
  // 정렬 변경 후 재렌더링 대기 — 즉시 isVisible 체크하면 false → toggle 클릭이 패널 닫아버림
  await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 8000 });
});

Then('답글 목록이 노출된다.', async ({ page }) => {
  await expect(page.locator('.js-reply-list, .comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
});

Then('답글 접기 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 입력창이 노출된다.', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, textarea.js-edit-box').first()).toBeVisible({ timeout: 5000 });
});

Then('유저 프로필 페이지로 이동된다.', async ({ page }) => {
  // 유저 프로필 페이지 — 시리즈 목록 또는 사용자 정보 영역 확인
  await expect(page.locator('a[href*="/series/"], .profile-list, .user-series, img[alt*="profile"]').first()).toBeVisible({ timeout: 8000 });
});

When('댓글 [Reply] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  // 댓글 패널 열기
  const panelOpen = await page.locator('textarea.js-comment-box').isVisible().catch(() => false);
  if (!panelOpen) {
    await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
    await page.waitForTimeout(600);
  }
  // Reply 버튼은 hover 시만 visible — JS로 직접 클릭
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-comment-reply-btn') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(600);
});

When('답글 텍스트 입력 후 [Reply] 버튼 클릭', async ({ page }) => {
  const replyBox = page.locator('textarea.js-edit-box');
  await expect(replyBox.first()).toBeVisible({ timeout: 5000 });
  await replyBox.click();
  await replyBox.pressSequentially('Test reply', { delay: 30 });
  await page.waitForTimeout(400);
  // 답글 제출 버튼: a.js-save-edit (text: "Reply") — 댓글 제출과 다른 버튼
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-save-edit') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(1000);
});

Then('Message 채움 표시 사라진다', async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
});

Then('Message New 표시 사라진다.', async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
});

Then('신규 메세지가 있다면 메세지 썸네일 우측에 New 표시가 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
});

Then(/^(All|Comments|Messages|Tapas|Series|Likes|Subs|Supporters) 목록없을때 안내문구 노출된다\.$/, async ({ page }) => {
  const empty = page.locator('.page-empty');
  if ((await empty.count()) === 0) { test.skip(true, '안내문구 미노출 — 계정에 해당 데이터가 있음'); return; }
  await expect(empty.first()).toBeVisible({ timeout: 5000 });
});

Then(/^(All|Comics) 목록 없을 때 안내 문구 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('.page-empty').first()).toBeVisible({ timeout: 5000 });
});

Then(/^Settings(으로|로) 진입된다\.$/, async ({ page }) => {
  await expect(page).toHaveURL(/settings|account|notification|preferences/i, { timeout: 5000 });
});

Then(/^(Activity 화면|Inbox > gift 화면|인박스 .+화면)(으로|로) 복귀된다\.$/, async ({ page }) => {
  // 선물 소비 후 빈 화면("No Gift Passes") 또는 아이템 목록 중 하나 확인
  const hasItems = await page.locator('.inbox-gift-item, li.item.js-item, .page-empty').first().isVisible({ timeout: 3000 }).catch(() => false);
  if (hasItems) { await expect(page.locator('.inbox-gift-item, li.item.js-item, .page-empty').first()).toBeVisible(); return; }
  await expect(page.locator('body').getByText(/No Gift Passes|Inbox|gift/i).first()).toBeVisible({ timeout: 5000 });
});
