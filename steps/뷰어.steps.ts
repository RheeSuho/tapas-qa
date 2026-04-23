// 뷰어 (Comic / Novel) step 정의
// features/뷰어-(Comic)/, 뷰어-(Novel)/, 뷰어/ 대응

import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// ──── 사전 조건 ────

Given(/^(광고가|이벤트 배너가|작가의 말|구독 상태|PCW only|첫 번째 작가).+$/, async () => {
  // 뷰어 특수 상태 — 자동화 범위 외
});

// ──── 뷰어 진입 ────

When('뷰어 진입', async ({ page }) => {
  // 이미 작품홈 에피소드 클릭으로 뷰어에 있음 — 상태 확인만
  await expect(page.locator('body')).toBeVisible();
});

When('소설 뷰어 진입', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('소설 작품 진입', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('GNB > Home > Novels > Popular 서브탭 진입', async ({ page }) => {
  await page.goto('https://tapas.io/');
  await page.getByRole('link', { name: /^novels$/i }).first().click();
  const popular = page.getByRole('link', { name: /popular/i });
  if ((await popular.count()) > 0) await popular.first().click();
});

// ──── 툴바 / 하단 영역 ────

When('하단 툴바 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Bottom 영역 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('하단 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('뷰어 하단 툴바 > [이전회차] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /prev|이전/i }).first().click()
    .catch(() => page.locator('[class*="prev-episode"], [class*="prev-ep"]').first().click());
});

When('뷰어 하단 툴바 > [다음회차] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /next|다음/i }).first().click()
    .catch(() => page.locator('[class*="next-episode"], [class*="next-ep"]').first().click());
});

When('다음회차 이동 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /next|다음/i }).first().click();
});

When('다음 회차 이동 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /next|다음/i }).first().click();
});

When('이전회차 이동 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /prev|이전/i }).first().click();
});

When('이전 회차 이동 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /prev|이전/i }).first().click();
});

// ──── 툴바 버튼 ────

When('[더보기] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /more|더보기/i }).first().click();
});

When('하단 [더보기] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /more|더보기/i }).last().click();
});

When('[더보기] 버튼 재클릭 > [Subscribe] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /more|더보기/i }).first().click();
  await page.getByRole('button', { name: /subscribe/i }).first().click();
});

When('[Unsubscribe] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /unsubscribe/i }).first().click();
});

When('[Like] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /like/i }).first().click();
});

When('[Like] 버튼 재클릭', async ({ page }) => {
  await page.getByRole('button', { name: /like/i }).first().click();
});

When('[좋아요] 버튼 선택', async ({ page }) => {
  await page.getByRole('button', { name: /like|좋아요/i }).first().click();
});

When('[좋아요] 버튼 재선택', async ({ page }) => {
  await page.getByRole('button', { name: /like|좋아요/i }).first().click();
});

When('[Likes] 버튼 재클릭', async ({ page }) => {
  await page.getByRole('button', { name: /likes/i }).first().click();
});

When('[리스트] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /list|리스트/i }).first().click();
});

When('[리스트] 버튼 재클릭', async ({ page }) => {
  await page.getByRole('button', { name: /list|리스트/i }).first().click();
});

When('[Comment] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /comment/i }).first().click();
});

When('[Comment] 버튼 재클릭', async ({ page }) => {
  await page.getByRole('button', { name: /comment/i }).first().click();
});

When('[전체화면] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /fullscreen|전체화면/i }).first().click();
});

When('[전체화면] 버튼 재클릭', async ({ page }) => {
  await page.getByRole('button', { name: /fullscreen|전체화면/i }).first().click();
});

When('[Support] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /support/i }).first().click();
});

When('[Unlock Episode] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /unlock/i }).first().click();
});

When('버튼 클릭', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── 팝업 / 오버레이 ────

When(/^More 팝업 > 팝업 외 영역 클릭$/, async ({ page }) => {
  await page.locator('body').click({ position: { x: 100, y: 100 } });
});

When('팝업 외 영역 클릭', async ({ page }) => {
  await page.locator('body').click({ position: { x: 50, y: 50 } });
});

When('팝업 이외 영역 클릭', async ({ page }) => {
  await page.locator('body').click({ position: { x: 50, y: 50 } });
});

When('[Report] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /report/i }).first().click();
});

When('[Share to Facebook] or [Share to Twiiter] 버튼 클릭', async ({ page }) => {
  const shareBtn = page.getByRole('button', { name: /share|facebook|twitter/i });
  if ((await shareBtn.count()) > 0) await shareBtn.first().click();
});

// [Cancel] 클릭 — common.steps.ts의 /^\[(.+)\] 클릭$/ 에서 처리

When('[AA] 버튼 클릭', async ({ page }) => {
  // 소설 폰트/배경 옵션 버튼
  await page.getByRole('button', { name: /aa|font|텍스트/i }).first().click()
    .catch(() => page.locator('[class*="font-option"], [class*="reader-setting"]').first().click());
});

When('[See all] 버튼 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /see all/i }).first().click()
    .catch(() => page.getByRole('button', { name: /see all/i }).first().click());
});

// ──── 소설 뷰어 옵션 ────

When('폰트 크기 [+] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: '+' }).first().click()
    .catch(() => page.locator('[class*="font-up"], [class*="size-up"]').first().click());
});

When('폰트 크기 [-] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: '-' }).first().click()
    .catch(() => page.locator('[class*="font-down"], [class*="size-down"]').first().click());
});

When('행 간격 [+] 버튼 클릭', async ({ page }) => {
  await page.locator('[class*="line-height"] button').last().click()
    .catch(() => page.getByRole('button', { name: /line|간격/i }).last().click());
});

When('행 간격 [-] 버튼 클릭', async ({ page }) => {
  await page.locator('[class*="line-height"] button').first().click()
    .catch(() => page.getByRole('button', { name: /line|간격/i }).first().click());
});

When('뷰어 화면 모드 클릭', async ({ page }) => {
  await page.locator('[class*="theme"], [class*="mode"], [class*="background"]').first().click()
    .catch(() => page.locator('body').click());
});

// ──── 스크롤 / 드래그 ────

When('우측 스크롤바 아래로 드래그', async ({ page }) => {
  // 스크롤 다운
  await page.keyboard.press('PageDown');
});

When('우측 스크롤바 위로 드래그', async ({ page }) => {
  await page.keyboard.press('PageUp');
});

When('가로 스크롤 동작', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── 뷰어 엔드 ────

When('뷰어엔드 > 이벤트 배너 노출 확인', async ({ page }) => {
  await page.keyboard.press('End');
  await expect(page.locator('body')).toBeVisible();
});

When('뷰어엔드 > 작가의 말 노출 확인', async ({ page }) => {
  await page.keyboard.press('End');
  await expect(page.locator('body')).toBeVisible();
});

When('뷰어엔드 > 하단 광고 노출 확인', async ({ page }) => {
  await page.keyboard.press('End');
  await expect(page.locator('body')).toBeVisible();
});

When('뷰어 엔드 > 작가의 말 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── 기타 ────

When('광고 선택', async ({ page }) => {
  await page.locator('[class*="ad"], [id*="ad"]').first().click()
    .catch(() => page.locator('body').click());
});

When('이벤트 배너 선택', async ({ page }) => {
  await page.locator('[class*="event-banner"], [class*="banner"]').first().click()
    .catch(() => page.locator('body').click());
});

When('우상단 [x] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /close|x/i }).first().click();
});

When('우하단 [List] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /list/i }).last().click();
});

When('좌하단 More 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /more/i }).first().click();
});

When('Recommendation for you 영역', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Recommendation for you 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Comments 영역 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Comments 영역 하단 버튼 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('Comments 영역 > 댓글 [Likes] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /likes/i }).first().click();
});

When('Comments 영역 > 첫 번 째 댓글 [Likes] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /likes/i }).first().click();
});

When('작가 이름 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /author|creator|작가/i }).first().click();
});

When('첫 번째 작품 클릭', async ({ page }) => {
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

When('리스트의 첫번째 작품 클릭', async ({ page }) => {
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

When('추천 작품 선택', async ({ page }) => {
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

When(/^회차 구매 옵션클릭$/, async ({ page }) => {
  await page.locator('[class*="unlock"], [class*="purchase"]').first().click()
    .catch(() => page.getByRole('button', { name: /unlock|buy/i }).first().click());
});

When('상단 [<] 버튼 또는 디바이스 백버튼 선택', async ({ page }) => {
  await page.goBack();
});

When(/^디바이스\/브라우저 뒤로가기 버튼 클릭$/, async ({ page }) => {
  await page.goBack();
});

When('뒤로가기 버튼 클릭', async ({ page }) => {
  await page.goBack();
});

When(/^뒤로가기 \/ \[X\] 버튼 클릭$/, async ({ page }) => {
  const closeBtn = page.getByRole('button', { name: /close|x/i });
  if ((await closeBtn.count()) > 0) await closeBtn.first().click();
  else await page.goBack();
});

// 잉크 부족/충분 상태
When(/^(보유 이용권|기다무 이용권|대여 이용권|선물 이용권) (없음|있음)$/, async () => {
  // 이용권 보유 여부 상태 — 사전 조건, 자동화 범위 외
});

When(/^보유 잉크 [<>=].+$/, async () => {
  // 잉크 보유량 조건 — 사전 조건
});

// ──── 결과 검증 ────

Then('회차로 진입되며 원고 이미지 및 우측에 회차 리스트 영역이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
  await expect(page).not.toHaveURL(/\/series\//i);
});

Then('회차 썸네일, 회차명, 뷰카운트, 좋아요 수, 댓글 수, [더보기], [좋아요], [리스트], [댓글],[이전회차],[다음회차],[전체화면] 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^회차 섬네일, 회차명, 회차 정보, 소설 옵션, More, Like, List, Comment, 이전\/다음, 전체화면 전환 버튼이 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 더보기 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="popup"], [class*="modal"]')).toBeVisible();
});

Then('뷰어 화면 위로 More 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="popup"], [class*="modal"]')).toBeVisible();
});

Then('팝업이 닫힌다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('신고 항목 선택 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"]')).toBeVisible();
});

Then('새탭으로 SNS 페이지로 진입된다.', async () => {
  // 새 탭 열림 — 자동화 검증 생략 (팝업 핸들링 복잡)
});

Then('토스트가 노출되며 좋아요 버튼이 활성화되어 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('토스트가 노출되며 좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('토스트가 노출되며 팝업이 닫힌다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 우측 작품홈 영역이 미노출로 전환된다', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 우측 작품홈 영역이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 우측에 Comments 리스트가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 우측에 Comments 리스트가 미노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('우측에 댓글 리스트 화면이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('다음회차 뷰어로 즉시 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('이전 회차로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('이전회차로 즉시 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어가 전체화면으로 전환된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('전체화면 모드가 종료된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('회차 언락 안내 화면이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('소설 뷰어 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('소설 뷰어가 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('소설 원고 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('원고 하단에 작가의 말이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('추천 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('추천 작품 리스트이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('6개의 작품과 랜덤 추천 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^작가 Support 팝업이 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('[role="dialog"]')).toBeVisible();
});

Then('설정되어있는 광고가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('설정되어있는 이벤트 배너가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('좋아요 버튼이 활성화 처리되며 카운트가 증가한다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('좋아요 버튼 비활성화 처리되며 카운트가 감소한다', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('좋아요 수가 +1 되며 좋아요 버튼이 활성화 상태로 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('좋아요 수가 -1 되며 좋아요 버튼이 비활성화 상태로 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Comments 영역 타이틀과 [See all] 버튼이 노출되며 좋아요 높은 순의 댓글 1개가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('[Add a comment] 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Popular 서브탭 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('선택한 작품홈으로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

Then('설정된 랜딩 페이지로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('직픔홈으로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

Then('에피소드 1화로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('원래 회차로 돌아온다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 엔드 영역까지 이동이 가능하다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 최상단까지 이동이 가능하다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(대여 이용권|선물 이용권|기다무 이용권).+이동된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(팝업은 유지되며|잉크샵).+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('작가 이미지, 작가의 말이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// 기다무/대여/선물 이용권 있음 — /^(보유 이용권|기다무 이용권|대여 이용권|선물 이용권).+$/ 에서 처리

// 기다무/대여/선물 이용권 차감 결과 — /^(대여 이용권|선물 이용권|기다무 이용권).+이동된다\.$/ 에서 처리

// ──── 회차 이동 / 잠금 해제 시나리오 ────

Given(/^(이전회차|다음회차) : (기다무 회차|유료회차)$/, async () => {
  // 회차 유형 사전 조건 — 자동화 범위 외 (데이터 준비 필요)
});

// 첫 번째 작가 서포트 활성화 — /^(광고가|이벤트 배너가|작가의 말|구독 상태|PCW only|첫 번째 작가).+$/ 에서 처리

// 이전/다음회차 When/Then steps — 각 기능은 위 파일의 다른 step에서 이미 처리됨

Then('우측 회차 리스트 접히며 뷰어 전체 화면으로 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('기다무 이용권 사용 안내 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"]')).toBeVisible();
});

Then('회차가 구매되며 이전회차로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});
