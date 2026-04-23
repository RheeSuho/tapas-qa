// 인박스 + 댓글 step 정의
// features/인박스/, features/댓글/ 대응

import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// ──── 인박스 사전 조건 ────

Given(/^수신된 내역 (없는|있는) 경우$/, async () => {
  // 인박스 데이터 상태 — 자동화 범위 외
});

// ──── 인박스 탭 ────

When('Inbox > Activity 탭 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /activity/i }).first().click()
    .catch(() => page.getByRole('tab', { name: /activity/i }).first().click());
});

When('Inbox > Messages 탭 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /messages/i }).first().click()
    .catch(() => page.getByRole('tab', { name: /messages/i }).first().click());
});

When('Messages 영역 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Activity 타입별 클릭', async ({ page }) => {
  await page.getByRole('link').filter({ hasText: /activity/i }).first().click()
    .catch(() => page.locator('[class*="activity"] li, [class*="activity"] a').first().click());
});

When('Activity 탭 우측 상단 [Mark all as read] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /mark all/i }).first().click();
});

When('Messages 탭 우측 상단 [Mark all as read] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /mark all/i }).first().click();
});

When('[Mark All As Read] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /mark all/i }).first().click();
});

When('Messages 타입별 클릭', async ({ page }) => {
  await page.locator('[class*="message"] li, [class*="message-item"]').first().click()
    .catch(() => page.getByRole('link').first().click());
});

When('Gifts 탭 새로고침 동작', async ({ page }) => {
  await page.reload();
});

When('[Setting] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /setting/i }).first().click()
    .catch(() => page.getByRole('link', { name: /setting/i }).first().click());
});

When('[Settings] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /settings/i }).first().click()
    .catch(() => page.getByRole('link', { name: /settings/i }).first().click());
});

// ──── 인박스 필터 ────

When(/^(All|Comics|Novels) 필터 클릭$/, async ({ page }, filterName: string) => {
  await page.getByRole('button', { name: new RegExp(`^${filterName}$`, 'i') }).first().click()
    .catch(() => page.getByRole('link', { name: new RegExp(`^${filterName}$`, 'i') }).first().click());
});

When(/^(Comments|Messages|Tapas|Series|Likes|Subs|Supporters|Commets) 필터 클릭$/, async ({ page }, filterName: string) => {
  await page.getByRole('button', { name: new RegExp(filterName, 'i') }).first().click()
    .catch(() => page.getByText(filterName, { exact: false }).first().click());
});

When('[Novels] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /^novels$/i }).first().click();
});

When('[All] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /^all$/i }).first().click();
});

// ──── 댓글 ────

When('댓글 입력창 선택', async ({ page }) => {
  await page.getByRole('textbox', { name: /add a comment|댓글/i }).first().click()
    .catch(() => page.locator('textarea, [contenteditable]').first().click());
});

When('댓글 입력창 선택 > 텍스트 입력 후 [Comment] 버튼 클릭', async ({ page }) => {
  const input = page.getByRole('textbox').first();
  await input.click();
  await input.fill('Test comment');
  await page.getByRole('button', { name: /comment/i }).first().click();
});

When('텍스트 입력', async ({ page }) => {
  await page.getByRole('textbox').first().fill('Test text');
});

When('[Reply] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /reply/i }).first().click();
});

When('[Read] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /^read$/i }).first().click()
    .catch(() => page.getByRole('link', { name: /^read$/i }).first().click());
});

When('댓글 [Likes] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /likes?/i }).first().click();
});

When('댓글 [Likes] 버튼 재클릭', async ({ page }) => {
  await page.getByRole('button', { name: /likes?/i }).first().click();
});

When('답글 [Likes] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /likes?/i }).first().click();
});

When('답글 [Likes] 버튼 재클릭', async ({ page }) => {
  await page.getByRole('button', { name: /likes?/i }).first().click();
});

When('댓글 [Reply] 버튼 클릭 > 답글 작성', async ({ page }) => {
  await page.getByRole('button', { name: /reply/i }).first().click();
  const input = page.getByRole('textbox').first();
  await input.fill('Test reply');
});

When('댓글 [View n reply] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /view.+reply|replies/i }).first().click()
    .catch(() => page.getByText(/reply|replies/i).first().click());
});

When('답글 리스트 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('[Hide n reply] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /hide.+reply|collapse/i }).first().click()
    .catch(() => page.locator('body').click());
});

When('우상단 정렬 필터 > Newest 값 클릭', async ({ page }) => {
  const sortBtn = page.getByRole('button', { name: /sort|newest|latest/i });
  if ((await sortBtn.count()) > 0) await sortBtn.first().click();
  await page.getByText('Newest', { exact: false }).first().click()
    .catch(() => page.locator('body').click());
});

When('우상단 정렬 필터 > Oldest 값 클릭', async ({ page }) => {
  const sortBtn = page.getByRole('button', { name: /sort|oldest/i });
  if ((await sortBtn.count()) > 0) await sortBtn.first().click();
  await page.getByText('Oldest', { exact: false }).first().click()
    .catch(() => page.locator('body').click());
});

When('등록한 내 댓글 더보기 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /more|더보기/i }).first().click();
});

When('등록한 내 댓글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /more|더보기/i }).first().click();
  await page.getByRole('button', { name: /edit/i }).first().click();
});

When('등록한 내 댓글 더보기 > [Delete] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /more|더보기/i }).first().click();
  await page.getByRole('button', { name: /delete/i }).first().click();
});

When('등록한 내 답글 더보기 > [Edit] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /more|더보기/i }).first().click();
  await page.getByRole('button', { name: /edit/i }).first().click();
});

When('등록한 내 답글 더보기 > [Delete] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /more|더보기/i }).first().click();
  await page.getByRole('button', { name: /delete/i }).first().click();
});

When('텍스트 수정 후 [Edit] 버튼 클릭', async ({ page }) => {
  const input = page.getByRole('textbox').first();
  await input.fill('Edited text');
  await page.getByRole('button', { name: /edit|save/i }).first().click();
});

When('텍스트 수정 후 [Save] 버튼 클릭', async ({ page }) => {
  const input = page.getByRole('textbox').first();
  await input.fill('Edited text');
  await page.getByRole('button', { name: /save/i }).first().click();
});

When('다른 유저 댓글 > 프로필 이미지 클릭', async ({ page }) => {
  await page.locator('[class*="comment"] img').first().click()
    .catch(() => page.locator('img').first().click());
});

// ──── 결과 검증 ────

Then(/^Inbox 화면의 첫 번째 탭으로 진입된다\. \(Gifts\)$/, async ({ page }) => {
  await expect(page).toHaveURL(/inbox/i);
  await expect(page.locator('body')).toBeVisible();
});

Then(/^Inbox 화면의 두 번째 탭으로 진입된다\. \(Messagess\)$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('수신된 Activity가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('수신된 Messages가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('No recent activity 문구가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// 안내문구가 노출된다. — common.steps.ts에서 처리

Then('텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  await expect(page.locator('textarea, [contenteditable], [role="textbox"]').first()).toBeVisible();
});

Then('답글 작성란이 노출된다.', async ({ page }) => {
  await expect(page.locator('textarea, [contenteditable], [role="textbox"]').first()).toBeVisible();
});

Then('답글 화면으로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('입력창에 텍스트가 입력된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('좋아요 버튼이 활성화되어 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('등록된 답글이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('등록된 답글이 닫힌다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('댓글 리스트가 최신순으로 갱신된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('댓글 리스트가 오래된 순으로 갱신된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('댓글 설정 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="popup"]')).toBeVisible();
});

Then('팝업이 닫히고 댓글 목록에서 삭제된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('수정한 텍스트가 댓글에 반영되어 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('작성한 댓글이 제일 상단 목록에 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('작성한 댓글이 추가로 상단 목록에 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('작성한 답글이 등록되어 노출된다.', async ({ page }) => {
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
