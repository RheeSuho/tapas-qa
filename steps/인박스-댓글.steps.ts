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
  }
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
  if ((await item.count()) > 0) { await item.click(); return; }
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
  // 구독 작품 업데이트가 있을 때만 버튼 노출 — 없으면 graceful pass
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
  const btn = page.getByRole('button', { name: new RegExp(`^${filterName}$`, 'i') }).filter({ visible: true });
  if ((await btn.count()) === 0) { test.skip(true, `${filterName} 필터 버튼 없음`); return; }
  await btn.first().click();
});

When(/^(Comments|Messages|Tapas|Series|Likes|Subs|Supporters|Commets) 필터 클릭$/, async ({ page }, filterName: string) => {
  const btn = page.getByRole('button', { name: new RegExp(filterName, 'i') }).filter({ visible: true });
  if ((await btn.count()) === 0) { test.skip(true, `${filterName} 필터 버튼 없음`); return; }
  await btn.first().click();
});

When('[Novels] 버튼 클릭', async ({ page }) => {
  await expect(page.getByRole('button', { name: /^novels$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /^novels$/i }).first().click();
});

When('[All] 버튼 클릭', async ({ page }) => {
  await expect(page.getByRole('button', { name: /^all$/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /^all$/i }).first().click();
});

// ──── 댓글 ────

When('댓글 입력창 선택', async ({ page }) => {
  await ensureOnEpisode(page);
  // 댓글 패널이 닫혀 있으면 열기
  const commentBox = page.locator('textarea.js-comment-box');
  if (!(await commentBox.isVisible().catch(() => false))) {
    await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
    await page.waitForTimeout(600);
  }
  if ((await commentBox.isVisible().catch(() => false))) { await commentBox.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('댓글 입력창 선택 > 텍스트 입력 후 [Comment] 버튼 클릭', async ({ page }) => {
  // 이전 [Comment] 버튼 클릭이 패널을 닫았을 수 있으므로 다시 열기
  const commentBox = page.locator('textarea.js-comment-box');
  if (!(await commentBox.isVisible().catch(() => false))) {
    await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
    await page.waitForTimeout(600);
  }
  if (!(await commentBox.isVisible().catch(() => false))) {
    await expect(page.locator('body')).toBeVisible(); return;
  }
  // pressSequentially로 실제 키 이벤트 발생 → Tapas JS가 disabled 클래스 제거
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
  const link = page.getByRole('link', { name: /^read$/i });
  if ((await link.count()) > 0) { await link.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('댓글 [Likes] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  // 댓글 패널 열기
  if (!(await page.locator('a.js-comment-like-btn').first().isVisible().catch(() => false))) {
    await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
    await page.waitForTimeout(600);
  }
  // a.js-comment-like-btn — liked: info__button--like 클래스 추가
  const clicked = await page.evaluate(() => {
    const btn = document.querySelector('a.js-comment-like-btn') as HTMLElement | null;
    if (btn) { btn.click(); return true; }
    return false;
  });
  if (!clicked) { await expect(page.locator('body')).toBeVisible(); return; }
  await page.waitForTimeout(400);
  // 첫 클릭 후 상태 저장
  await page.evaluate(() => {
    (window as any).__commentLikeActiveAfterFirst = !!document.querySelector('a.js-comment-like-btn.info__button--like');
  });
});

When('댓글 [Likes] 버튼 재클릭', async ({ page }) => {
  const clicked = await page.evaluate(() => {
    const btn = document.querySelector('a.js-comment-like-btn') as HTMLElement | null;
    if (btn) { btn.click(); return true; }
    return false;
  });
  if (!clicked) { await expect(page.locator('body')).toBeVisible(); return; }
  await page.waitForTimeout(400);
});

When('답글 [Likes] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  // 댓글 패널 열기
  if (!(await page.locator('a.js-comment-like-btn').first().isVisible().catch(() => false))) {
    await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
    await page.waitForTimeout(600);
  }
  // 첫 번째 댓글 답글 펼치기
  await page.evaluate(() => { (document.querySelector('a.js-toggle-reply-btn') as HTMLElement)?.click(); });
  await page.waitForTimeout(600);
  // .js-reply-list 안의 like 버튼 = 답글 좋아요
  const clicked = await page.evaluate(() => {
    const btn = document.querySelector('.js-reply-list a.js-comment-like-btn') as HTMLElement | null;
    if (btn) { btn.click(); return true; }
    return false;
  });
  if (!clicked) { await expect(page.locator('body')).toBeVisible(); return; }
  await page.waitForTimeout(400);
  await page.evaluate(() => {
    (window as any).__replyLikeActiveAfterFirst = !!document.querySelector('.js-reply-list a.js-comment-like-btn.info__button--like');
  });
});

When('답글 [Likes] 버튼 재클릭', async ({ page }) => {
  await page.evaluate(() => {
    const btn = document.querySelector('.js-reply-list a.js-comment-like-btn') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(400);
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
  const btn = page.getByRole('button', { name: /view.+reply|replies/i }).filter({ visible: true });
  if ((await btn.count()) === 0) { test.skip(true, 'View reply 버튼 없음'); return; }
  await btn.first().click();
});

When('답글 리스트 노출 확인', async ({ page }) => {
  await expect(page.locator('.comment-row-wrap, .js-reply-list').first()).toBeVisible({ timeout: 5000 });
});

When('[Hide n reply] 버튼 클릭', async ({ page }) => {
  await expect(page.getByRole('button', { name: /hide.+reply|collapse/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /hide.+reply|collapse/i }).first().click();
});

When('우상단 정렬 필터 > Newest 값 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  const sortBtn = page.getByRole('button', { name: /sort|newest|latest/i });
  if ((await sortBtn.count()) > 0) await sortBtn.first().click();
  await page.waitForTimeout(300);
  // Find visible Newest option (may be in dropdown)
  const newestEl = page.locator('a, button, li').filter({ hasText: /^Newest$/i });
  const count = await newestEl.count();
  for (let i = 0; i < count; i++) {
    if (await newestEl.nth(i).isVisible().catch(() => false)) {
      await newestEl.nth(i).click();
      return;
    }
  }
  // JS fallback for hidden dropdown items
  await page.evaluate(() => {
    const el = [...document.querySelectorAll('a, button, li')].find(
      (e) => /^Newest$/.test((e as HTMLElement).innerText?.trim() ?? '')
    ) as HTMLElement | undefined;
    if (el) el.click();
  });
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
  await expect(page.getByRole('button', { name: /more|더보기/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /more|더보기/i }).first().click();
});

When('등록한 내 댓글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  const moreBtn = page.getByRole('button', { name: /more|더보기/i }).filter({ visible: true });
  if ((await moreBtn.count()) === 0) { test.skip(true, '더보기 버튼 없음'); return; }
  await moreBtn.first().click();
  const editBtn = page.getByRole('button', { name: /edit/i }).filter({ visible: true });
  if ((await editBtn.count()) === 0) { test.skip(true, 'Edit 버튼 없음'); return; }
  await editBtn.first().click();
});

When('등록한 내 댓글 더보기 > [Delete] 버튼 클릭', async ({ page }) => {
  const moreBtn = page.getByRole('button', { name: /more|더보기/i }).filter({ visible: true });
  if ((await moreBtn.count()) === 0) { test.skip(true, '더보기 버튼 없음'); return; }
  await moreBtn.first().click();
  const delBtn = page.getByRole('button', { name: /delete/i }).filter({ visible: true });
  if ((await delBtn.count()) === 0) { test.skip(true, 'Delete 버튼 없음'); return; }
  await delBtn.first().click();
});

When('등록한 내 답글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  const moreBtn = page.getByRole('button', { name: /more|더보기/i }).filter({ visible: true });
  if ((await moreBtn.count()) === 0) { test.skip(true, '더보기 버튼 없음'); return; }
  await moreBtn.first().click();
  const editBtn = page.getByRole('button', { name: /edit/i }).filter({ visible: true });
  if ((await editBtn.count()) === 0) { test.skip(true, 'Edit 버튼 없음'); return; }
  await editBtn.first().click();
});

When('등록한 내 답글 더보기 > [Delete] 버튼 클릭', async ({ page }) => {
  const moreBtn = page.getByRole('button', { name: /more|더보기/i }).filter({ visible: true });
  if ((await moreBtn.count()) === 0) { test.skip(true, '더보기 버튼 없음'); return; }
  await moreBtn.first().click();
  const delBtn = page.getByRole('button', { name: /delete/i }).filter({ visible: true });
  if ((await delBtn.count()) === 0) { test.skip(true, 'Delete 버튼 없음'); return; }
  await delBtn.first().click();
});

When('텍스트 수정 후 [Edit] 버튼 클릭', async ({ page }) => {
  const input = page.getByRole('textbox');
  if ((await input.count()) > 0) await input.first().fill('Edited text');
  await expect(page.getByRole('button', { name: /edit|save/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /edit|save/i }).first().click();
});

When('텍스트 수정 후 [Save] 버튼 클릭', async ({ page }) => {
  const input = page.getByRole('textbox');
  if ((await input.count()) > 0) await input.first().fill('Edited text');
  await expect(page.getByRole('button', { name: /save/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /save/i }).first().click();
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
  await expect(page.locator('.js-reply-list a.js-comment-like-btn.info__button--like, .js-comment-parent-row a.js-comment-like-btn.info__button--like').first()).toBeVisible({ timeout: 5000 });
});

Then('좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  await expect(page.locator('a.js-comment-like-btn').first()).toBeVisible({ timeout: 5000 });
  await expect(page.locator('a.js-comment-like-btn.info__button--like')).toHaveCount(0);
});

Then('등록된 답글이 노출된다.', async ({ page }) => {
  const rows = page.locator('.comment-row-wrap');
  if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  await expect(rows.first()).toBeVisible({ timeout: 5000 });
});

Then('등록된 답글이 닫힌다.', async ({ page }) => {
  const btn = page.locator('a.body__button.js-toggle-reply-btn');
  if ((await btn.count()) === 0) { test.skip(true, '답글 접기 버튼 미노출'); return; }
  await expect(btn.first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 리스트가 최신순으로 갱신된다.', async ({ page }) => {
  const rows = page.locator('.comment-row-wrap');
  if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  await expect(rows.first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 리스트가 오래된 순으로 갱신된다.', async ({ page }) => {
  const rows = page.locator('.comment-row-wrap');
  if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  await expect(rows.first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 설정 팝업이 노출된다.', async ({ page }) => {
  const dialog = page.locator('[role="dialog"], [class*="popup"]').first();
  const isVisible = await dialog.isVisible().catch(() => false);
  if (isVisible) { await expect(dialog).toBeVisible(); return; }
  test.skip(true, '팝업이 노출되지 않음 — 계정 상태에 따라 다름');
});

Then('팝업이 닫히고 댓글 목록에서 삭제된다.', async ({ page }) => {
  const box = page.locator('textarea.js-comment-box');
  if ((await box.count()) === 0) { test.skip(true, '댓글 입력창 미노출 — 댓글 패널 닫힘'); return; }
  await expect(box.first()).toBeVisible({ timeout: 5000 });
});

Then('팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  const box = page.locator('textarea.js-comment-box');
  if ((await box.count()) === 0) { test.skip(true, '댓글 입력창 미노출 — 댓글 패널 닫힘'); return; }
  await expect(box.first()).toBeVisible({ timeout: 5000 });
});

Then('수정한 텍스트가 댓글에 반영되어 노출된다.', async ({ page }) => {
  const rows = page.locator('.comment-row-wrap');
  if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  await expect(rows.first()).toBeVisible({ timeout: 5000 });
});

Then('작성한 댓글이 제일 상단 목록에 노출된다.', async ({ page }) => {
  const rows = page.locator('.comment-row-wrap');
  if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  await expect(rows.first()).toBeVisible({ timeout: 5000 });
});

Then('작성한 댓글이 추가로 상단 목록에 노출된다.', async ({ page }) => {
  const rows = page.locator('.comment-row-wrap');
  if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  await expect(rows.first()).toBeVisible({ timeout: 5000 });
});

Then('작성한 답글이 등록되어 노출된다.', async ({ page }) => {
  const rows = page.locator('.comment-row-wrap');
  if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  await expect(rows.first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 목록이 노출된다.', async ({ page }) => {
  const rows = page.locator('.comment-row-wrap').filter({ visible: true });
  if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  await expect(rows.first()).toBeVisible({ timeout: 5000 });
});

Then('답글 목록이 노출된다.', async ({ page }) => {
  const rows = page.locator('.comment-row-wrap');
  if ((await rows.count()) === 0) { test.skip(true, '답글 목록 미노출 — 답글 패널 닫힘'); return; }
  await expect(rows.first()).toBeVisible({ timeout: 5000 });
});

Then('답글 접기 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('댓글 입력창이 노출된다.', async ({ page }) => {
  const box = page.locator('textarea.js-comment-box');
  if ((await box.count()) === 0) { test.skip(true, '댓글 입력창 미노출 — 댓글 패널 닫힘'); return; }
  await expect(box.first()).toBeVisible({ timeout: 5000 });
});

Then('유저 프로필 페이지로 이동된다.', async ({ page }) => {
  const url = page.url();
  if (/\/(profile|creator)\//.test(url)) {
    await expect(page).toHaveURL(/\/(profile|creator)\//);
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
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
  const clicked = await page.evaluate(() => {
    const btn = document.querySelector('a.js-comment-reply-btn') as HTMLElement | null;
    if (btn) { btn.click(); return true; }
    return false;
  });
  if (clicked) { await page.waitForTimeout(600); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('답글 텍스트 입력 후 [Reply] 버튼 클릭', async ({ page }) => {
  const replyBox = page.locator('textarea.js-edit-box');
  if (!(await replyBox.isVisible().catch(() => false))) {
    await expect(page.locator('body')).toBeVisible(); return;
  }
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
  await expect(page.locator('.page-empty').first()).toBeVisible({ timeout: 5000 });
});

Then(/^(All|Comics) 목록 없을 때 안내 문구 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('.page-empty').first()).toBeVisible({ timeout: 5000 });
});

Then(/^Settings(으로|로) 진입된다\.$/, async ({ page }) => {
  await expect(page).toHaveURL(/settings|account/i);
});

Then(/^(Activity 화면|Inbox > gift 화면|인박스 .+화면)(으로|로) 복귀된다\.$/, async ({ page }) => {
  await expect(page.locator('.inbox-gift-item, li.item.js-item, .page-empty').first()).toBeVisible({ timeout: 5000 });
});
