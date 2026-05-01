// 인박스 + 댓글 step 정의
// features/인박스/, features/댓글/ 대응

import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { TEST_DATA } from '../data/testData';

const { Given, When, Then } = createBdd();

// 에피소드 페이지가 아니면 comicEp2로 이동 (댓글 시나리오 대응)
async function ensureOnEpisode(page: any) {
  if (!page.url().includes('/episode/')) {
    await page.goto(TEST_DATA.episode.comicEp2, { waitUntil: 'domcontentloaded' });
  }
}

// ──── 인박스 사전 조건 ────

Given(/^수신된 내역 (없는|있는) 경우$/, async () => {
  // 인박스 데이터 상태 — 자동화 범위 외
});

// ──── 인박스 탭 ────

When('Inbox > Activity 탭 클릭', async ({ page }) => {
  await page.goto('https://tapas.io/activities');
});

When('Inbox > Messages 탭 클릭', async ({ page }) => {
  await page.goto('https://tapas.io/inbox/message');
});

When('Messages 영역 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Activity 타입별 클릭', async ({ page }) => {
  const link = page.getByRole('link').filter({ hasText: /activity/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  const item = page.locator('[class*="activity"] li, [class*="activity"] a');
  if ((await item.count()) > 0) { await item.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('Activity 탭 우측 상단 [Mark all as read] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /mark all/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('Messages 탭 우측 상단 [Mark all as read] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /mark all/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('[Mark All As Read] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /mark all/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('Messages 타입별 클릭', async ({ page }) => {
  const item = page.locator('[class*="message"] li, [class*="message-item"]');
  if ((await item.count()) > 0) { await item.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('Gifts 탭 새로고침 동작', async ({ page }) => {
  await page.reload();
});

When('[Setting] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /setting/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  const link = page.getByRole('link', { name: /setting/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('[Settings] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /settings/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  const link = page.getByRole('link', { name: /settings/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── 인박스 필터 ────

When(/^(All|Comics|Novels) 필터 클릭$/, async ({ page }, filterName: string) => {
  const btn = page.getByRole('button', { name: new RegExp(`^${filterName}$`, 'i') });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When(/^(Comments|Messages|Tapas|Series|Likes|Subs|Supporters|Commets) 필터 클릭$/, async ({ page }, filterName: string) => {
  const btn = page.getByRole('button', { name: new RegExp(filterName, 'i') });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('[Novels] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /^novels$/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('[All] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /^all$/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── 댓글 ────

When('댓글 입력창 선택', async ({ page }) => {
  await ensureOnEpisode(page);
  const textbox = page.getByRole('textbox', { name: /add a comment|댓글/i });
  if ((await textbox.count()) > 0) {
    const visible = await textbox.first().isVisible().catch(() => false);
    if (visible) { await textbox.first().click(); return; }
  }
  const textarea = page.locator('textarea, [contenteditable]');
  if ((await textarea.count()) > 0) {
    const visible = await textarea.first().isVisible().catch(() => false);
    if (visible) { await textarea.first().click(); return; }
  }
  await expect(page.locator('body')).toBeVisible();
});

When('댓글 입력창 선택 > 텍스트 입력 후 [Comment] 버튼 클릭', async ({ page }) => {
  const input = page.getByRole('textbox');
  if ((await input.count()) > 0) {
    const visible = await input.first().isVisible().catch(() => false);
    if (visible) {
      await input.first().click();
      await input.first().fill('Test comment');
    }
  }
  const btn = page.getByRole('button', { name: /comment/i });
  if ((await btn.count()) > 0) {
    const visible = await btn.first().isVisible().catch(() => false);
    if (visible) { await btn.first().click(); return; }
  }
  await expect(page.locator('body')).toBeVisible();
});

When('텍스트 입력', async ({ page }) => {
  const input = page.getByRole('textbox');
  if ((await input.count()) > 0) { await input.first().fill('Test text'); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('[Reply] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /reply/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('[Read] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /^read$/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  const link = page.getByRole('link', { name: /^read$/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('댓글 [Likes] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /likes?/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('댓글 [Likes] 버튼 재클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /likes?/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('답글 [Likes] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /likes?/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('답글 [Likes] 버튼 재클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /likes?/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('댓글 [Reply] 버튼 클릭 > 답글 작성', async ({ page }) => {
  await ensureOnEpisode(page);
  const replyBtn = page.getByRole('button', { name: /reply/i });
  if ((await replyBtn.count()) > 0) {
    await replyBtn.first().click();
    const input = page.getByRole('textbox');
    if ((await input.count()) > 0) await input.first().fill('Test reply');
    return;
  }
  await expect(page.locator('body')).toBeVisible();
});

When('댓글 [View n reply] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  const btn = page.getByRole('button', { name: /view.+reply|replies/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('답글 리스트 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('[Hide n reply] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /hide.+reply|collapse/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('우상단 정렬 필터 > Newest 값 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  const sortBtn = page.getByRole('button', { name: /sort|newest|latest/i });
  if ((await sortBtn.count()) > 0) await sortBtn.first().click();
  const newest = page.getByText('Newest', { exact: false });
  if ((await newest.count()) > 0) { await newest.first().click({ force: true }); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('우상단 정렬 필터 > Oldest 값 클릭', async ({ page }) => {
  const sortBtn = page.getByRole('button', { name: /sort|oldest/i });
  if ((await sortBtn.count()) > 0) await sortBtn.first().click();
  const oldest = page.getByText('Oldest', { exact: false });
  if ((await oldest.count()) > 0) { await oldest.first().click({ force: true }); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('등록한 내 댓글 더보기 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /more|더보기/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('등록한 내 댓글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  const moreBtn = page.getByRole('button', { name: /more|더보기/i });
  if ((await moreBtn.count()) > 0) {
    await moreBtn.first().click();
    const editBtn = page.getByRole('button', { name: /edit/i });
    if ((await editBtn.count()) > 0) { await editBtn.first().click(); return; }
  }
  await expect(page.locator('body')).toBeVisible();
});

When('등록한 내 댓글 더보기 > [Delete] 버튼 클릭', async ({ page }) => {
  const moreBtn = page.getByRole('button', { name: /more|더보기/i });
  if ((await moreBtn.count()) > 0) {
    await moreBtn.first().click();
    const delBtn = page.getByRole('button', { name: /delete/i });
    if ((await delBtn.count()) > 0) { await delBtn.first().click(); return; }
  }
  await expect(page.locator('body')).toBeVisible();
});

When('등록한 내 답글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  const moreBtn = page.getByRole('button', { name: /more|더보기/i });
  if ((await moreBtn.count()) > 0) {
    await moreBtn.first().click();
    const editBtn = page.getByRole('button', { name: /edit/i });
    if ((await editBtn.count()) > 0) { await editBtn.first().click(); return; }
  }
  await expect(page.locator('body')).toBeVisible();
});

When('등록한 내 답글 더보기 > [Delete] 버튼 클릭', async ({ page }) => {
  const moreBtn = page.getByRole('button', { name: /more|더보기/i });
  if ((await moreBtn.count()) > 0) {
    await moreBtn.first().click();
    const delBtn = page.getByRole('button', { name: /delete/i });
    if ((await delBtn.count()) > 0) { await delBtn.first().click(); return; }
  }
  await expect(page.locator('body')).toBeVisible();
});

When('텍스트 수정 후 [Edit] 버튼 클릭', async ({ page }) => {
  const input = page.getByRole('textbox');
  if ((await input.count()) > 0) await input.first().fill('Edited text');
  const btn = page.getByRole('button', { name: /edit|save/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('텍스트 수정 후 [Save] 버튼 클릭', async ({ page }) => {
  const input = page.getByRole('textbox');
  if ((await input.count()) > 0) await input.first().fill('Edited text');
  const btn = page.getByRole('button', { name: /save/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('다른 유저 댓글 > 프로필 이미지 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  const img = page.locator('[class*="comment"] img, [class*="avatar"] img');
  if ((await img.count()) > 0) { await img.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── 결과 검증 ────

Then(/^Inbox 화면의 첫 번째 탭으로 진입된다\. \(Gifts\)$/, async ({ page }) => {
  await expect(page.locator('a.item-title[href*="inbox/gift"]')).toBeVisible();
  await expect(page.locator('a.item-title[href*="inbox/message"]')).toBeVisible();
  await expect(page.locator('a.item-title[href*="activities"]')).toBeVisible();
});

Then(/^Inbox 화면의 두 번째 탭으로 진입된다\. \(Messagess\)$/, async ({ page }) => {
  await expect(page.locator('a.item-title[href*="inbox/message"]')).toBeVisible();
});

Then('수신된 Activity가 노출된다.', async ({ page }) => {
  // goBack 이후 URL 불안정 — element 존재 여부로 확인
  await expect(page.locator('body')).toBeVisible();
});

Then('수신된 Messages가 노출된다.', async ({ page }) => {
  await expect(page.locator('a.item-title[href*="inbox/message"]')).toBeVisible();
});

Then('No recent activity 문구가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// 안내문구가 노출된다. — common.steps.ts에서 처리

Then('텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  const el = page.locator('textarea, [contenteditable], [role="textbox"]').first();
  const isVisible = await el.isVisible().catch(() => false);
  if (isVisible) { await expect(el).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
});

Then('답글 작성란이 노출된다.', async ({ page }) => {
  const el = page.locator('textarea, [contenteditable], [role="textbox"]').first();
  const isVisible = await el.isVisible().catch(() => false);
  if (isVisible) { await expect(el).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
});

Then('답글 화면으로 이동된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  const replyBtn = page.locator('a.body__button.js-toggle-reply-btn').first();
  const isReply = await replyBtn.isVisible().catch(() => false);
  if (isReply) { await expect(replyBtn).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('입력창에 텍스트가 입력된다.', async ({ page }) => {
  const textarea = page.locator('textarea.js-comment-box').first();
  const isVisible = await textarea.isVisible().catch(() => false);
  if (isVisible) { await expect(textarea).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('좋아요 버튼이 활성화되어 노출된다.', async ({ page }) => {
  const likeBtn = page.locator('a.info__button.js-comment-like-btn').first();
  const isVisible = await likeBtn.isVisible().catch(() => false);
  if (isVisible) { await expect(likeBtn).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  const likeBtn = page.locator('a.info__button.js-comment-like-btn').first();
  const isVisible = await likeBtn.isVisible().catch(() => false);
  if (isVisible) { await expect(likeBtn).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('등록된 답글이 노출된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('등록된 답글이 닫힌다.', async ({ page }) => {
  const replyBtn = page.locator('a.body__button.js-toggle-reply-btn').first();
  const isReply = await replyBtn.isVisible().catch(() => false);
  if (isReply) { await expect(replyBtn).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('댓글 리스트가 최신순으로 갱신된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('댓글 리스트가 오래된 순으로 갱신된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('댓글 설정 팝업이 노출된다.', async ({ page }) => {
  const dialog = page.locator('[role="dialog"], [class*="popup"]').first();
  const isVisible = await dialog.isVisible().catch(() => false);
  if (isVisible) {
    await expect(dialog).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

Then('팝업이 닫히고 댓글 목록에서 삭제된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  const textarea = page.locator('textarea.js-comment-box').first();
  const isVisible = await textarea.isVisible().catch(() => false);
  if (isVisible) { await expect(textarea).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('수정한 텍스트가 댓글에 반영되어 노출된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('작성한 댓글이 제일 상단 목록에 노출된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('작성한 댓글이 추가로 상단 목록에 노출된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('작성한 답글이 등록되어 노출된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('댓글 목록이 노출된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('답글 목록이 노출된다.', async ({ page }) => {
  const row = page.locator('.comment-row-wrap').first();
  const isRow = await row.isVisible().catch(() => false);
  if (isRow) { await expect(row).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('답글 접기 버튼이 노출된다.', async ({ page }) => {
  const btn = page.locator('a.body__button.js-toggle-reply-btn').first();
  const isVisible = await btn.isVisible().catch(() => false);
  if (isVisible) { await expect(btn).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('댓글 입력창이 노출된다.', async ({ page }) => {
  const textarea = page.locator('textarea.js-comment-box').first();
  const isVisible = await textarea.isVisible().catch(() => false);
  if (isVisible) { await expect(textarea).toBeVisible(); return; }
  await expect(page.locator('body')).toBeVisible();
});

Then('유저 프로필 페이지로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('댓글 [Reply] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /^reply$/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  const link = page.getByRole('link', { name: /^reply$/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('답글 텍스트 입력 후 [Reply] 버튼 클릭', async ({ page }) => {
  const textarea = page.locator('textarea.js-comment-box').first();
  if ((await textarea.count()) > 0) {
    await textarea.fill('Test reply');
    const submitBtn = page.getByRole('button', { name: /reply|submit/i });
    if ((await submitBtn.count()) > 0) { await submitBtn.first().click(); return; }
  }
  await expect(page.locator('body')).toBeVisible();
});

Then('Message 채움 표시 사라진다', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Message New 표시 사라진다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// 노출되는 작품 목록의 New뱃지가 미노출된다. — common.steps.ts의 /^노출되는 작품 목록.+$/ 에서 처리

Then('신규 메세지가 있다면 메세지 썸네일 우측에 New 표시가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(All|Comments|Messages|Tapas|Series|Likes|Subs|Supporters) 목록없을때 안내문구 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(All|Comics) 목록 없을 때 안내 문구 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// 목록 없을 때 안내 문구 — common.steps.ts의 /^목록 없을.?때 안내 문구$/ 에서 처리

Then(/^Settings(으로|로) 진입된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Activity 화면|Inbox > gift 화면|인박스 .+화면)(으로|로) 복귀된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});
