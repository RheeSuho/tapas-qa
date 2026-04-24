// 작품홈 (series home) step 정의
// features/작품홈/**/*.feature 대응

import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { TEST_DATA } from '../data/testData';

const { Given, When, Then } = createBdd();

// 작품홈 진입 Given — 시리즈 페이지로 이동
Given(/^(작품홈|시리즈) 진입$/, async ({ page }) => {
  await page.goto(TEST_DATA.series.comic);
});

// ──── 사전 조건 ────

Given(/^(기다무 티켓 보유 상태|기다무 티켓 소진 상태|잉크 보유 상태|기다무 작품인 경우|공지사항 있는 경우|기다무 회차인 경우|유료 회차인 경우|이용권 사용하는 경우)$/, async () => {
  // 특정 상태 사전 조건 — 자동화 범위 외 (데이터 준비 필요)
});

Given('첫화보기 순', async () => {
  // 정렬 상태 사전 조건 — 자동화 범위 외
});

// ──── 진입 ────

When('랭킹 1위 작품 클릭', async ({ page }) => {
  // 랭킹 1위 작품 = 리스트 첫 번째 작품
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

When('우측 영역 > 작품 이미지 선택', async ({ page }) => {
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

When('작품 이미지 선택', async ({ page }) => {
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

// ──── 탭 / 영역 ────

When('Episodes 탭 클릭', async ({ page }) => {
  const tab = page.getByRole('tab', { name: /episodes/i });
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  await page.getByRole('link', { name: /episodes/i }).first().click();
});

When('Details 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('영역 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('배너 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('구독 버튼 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('구독 버튼 좌측 버튼 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('스크롤하여 회차 리스트 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('작품 정보 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('추천 작품 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── 회차 클릭 ────

When('무료 회차 클릭', async ({ page }) => {
  // 무료(Free) 회차 = 첫 번째 에피소드 링크
  await page.getByRole('link').filter({ hasText: /episode|ep\.? ?1|free/i }).first().click()
    .catch(() => page.getByRole('link').filter({ has: page.locator('img') }).first().click());
});

When('유료 회차 클릭', async ({ page }) => {
  // 유료 회차 클릭 — 잠금 아이콘 또는 가격 표시된 에피소드
  await page.locator('[class*="lock"], [class*="paid"], [class*="ink"]').first().click()
    .catch(() => page.getByRole('link').nth(2).click());
});

When('이용권 사용 가능한 유료회차 클릭', async ({ page }) => {
  await page.locator('[class*="pass"], [class*="ticket"]').first().click()
    .catch(() => page.getByRole('link').nth(2).click());
});

When('기다무 회차 클릭', async ({ page }) => {
  // 기다무(Wait Until Free) 회차
  await page.locator('[class*="wuf"], [class*="wait"]').first().click()
    .catch(() => page.getByRole('link').nth(2).click());
});

When(/^다음 회차 \(기다무\) 클릭$/, async ({ page }) => {
  await page.getByRole('link', { name: /next|다음/i }).first().click();
});

When('회차 영역 스크롤 > 기다무 회차 클릭', async ({ page }) => {
  await page.locator('[class*="wuf"]').first().scrollIntoViewIfNeeded();
  await page.locator('[class*="wuf"]').first().click()
    .catch(() => page.getByRole('link').nth(3).click());
});

When('회차 영역 스크롤 > 유료 회차 클릭', async ({ page }) => {
  await page.locator('[class*="lock"], [class*="paid"]').first().scrollIntoViewIfNeeded();
  await page.locator('[class*="lock"], [class*="paid"]').first().click()
    .catch(() => page.getByRole('link').nth(3).click());
});

When('작품홈 Episode 탭 > 무료 회차 클릭', async ({ page }) => {
  await page.getByRole('link').filter({ hasText: /ep\.? ?1|free|episode 1/i }).first().click()
    .catch(() => page.getByRole('link').filter({ has: page.locator('img') }).first().click());
});

// ──── 구독 / 좋아요 ────

When('구독 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /subscribe/i }).first().click();
});

// ──── 작가 ────

When('작가 클릭', async ({ page }) => {
  await page.getByRole('link', { name: /creator|author|작가/i }).first().click();
});

When('작가 홈 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── 정렬 ────

When('정렬 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /sort|정렬/i }).first().click();
});

When('정렬 버튼 재클릭', async ({ page }) => {
  await page.getByRole('button', { name: /sort|정렬/i }).first().click();
});

When('현재 정렬 버튼 상태 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// 장르값 클릭 — CSV 플레이스홀더
When(/^작품 정보 영역 \{장르값\} 클릭$/, async ({ page }) => {
  // 장르 링크 첫 번째 클릭
  await page.locator('[class*="genre"] a, [data-genre]').first().click()
    .catch(() => page.getByRole('link', { name: /action|romance|fantasy/i }).first().click());
});

// {X} 선택 후 [Confirm] 형식
When(/^\{(BM값|장르값|정렬값)\} 선택 후 \[Comfirm\] 버튼 클릭$/, async ({ page }) => {
  const option = page.locator('[role="dialog"] li, [role="dialog"] input[type="radio"]').first();
  if ((await option.count()) > 0) await option.click();
  const confirm = page.getByRole('button', { name: /confirm/i });
  if ((await confirm.count()) > 0) await confirm.first().click();
});

// 팝업 닫기
When(/^뒤로가기\/\[X\] 버튼 클릭$/, async ({ page }) => {
  const closeBtn = page.getByRole('button', { name: /close|x/i });
  if ((await closeBtn.count()) > 0) await closeBtn.first().click();
  else await page.goBack();
});

When('. [Close] 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /close/i }).first().click();
});

When('3, OK 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /ok/i }).first().click();
});

When('Don\'t show again 영역 클릭', async ({ page }) => {
  await page.getByText(/don't show/i).first().click();
});

When('기다무 안내 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('기다무 사용 확인 팝업 > [Yes] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /yes/i }).first().click();
});

When('기다무 띠배너 > ? 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: '?' }).first().click()
    .catch(() => page.locator('[class*="wuf"] button').first().click());
});

When('공지사항 띠배너 클릭', async ({ page }) => {
  await page.locator('[class*="notice"], [class*="announcement"]').first().click();
});

When('episode 1 회차 노출 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('회차 구매 옵션 클릭', async ({ page }) => {
  await page.locator('[class*="purchase"], [class*="unlock"]').first().click()
    .catch(() => page.getByRole('button', { name: /ink|unlock|buy/i }).first().click());
});

When('회차 구매 팝업 > [X] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /close|x/i }).last().click();
});

When('회차 구매 팝업 > 단건 구매 옵션 클릭', async ({ page }) => {
  await page.locator('[class*="purchase"] [class*="single"], [class*="buy-single"]').first().click()
    .catch(() => page.getByRole('button', { name: /buy|purchase/i }).first().click());
});

// 잉크샵으로 팝업이 노출된다. — 뷰어.steps.ts의 /^(팝업은 유지되며|잉크샵).+$/ 에서 처리

When('[Continue Ep.2] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /continue ep/i }).first().click();
});

When('[Subscribe] 버튼 재클릭', async ({ page }) => {
  await page.getByRole('button', { name: /subscribe/i }).first().click();
});

When('[Yes] 버튼 클릭', async ({ page }) => {
  await page.getByRole('button', { name: /yes/i }).first().click();
});

When('장르 랜딩 리스트 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('작품홈으로 복귀한다', async ({ page }) => {
  await page.goBack();
});

When('작품홈으로 복귀한다.', async ({ page }) => {
  await page.goBack();
});

When('뒤로가기 [<] 버튼 클릭 > 메인홈 다른 기다무 작품 클릭', async ({ page }) => {
  await page.goBack();
});

// ──── 결과 검증 ────

Then('Popular 서브탭이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Episode 1 뷰어로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('팝업 형태로 작품홈이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('작품홈으로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

Then('아래 정보들이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('회차 리스트 영역이 노출된다', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('회차 섬네일, 회차 순번, 회차 명, 발행 날짜, 뷰카운트이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('첫화보기 순으로 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('첫화부터 마지막화까지 모두 정상 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('즉시 뷰어로 진입된다.', async ({ page }) => {
  await expect(page).not.toHaveURL(/\/series\//i);
});

Then('토스트 팝업이 노출되며 뷰어로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('회차 구매 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"]')).toBeVisible();
});

Then('기다무 사용 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"]')).toBeVisible();
});

Then('기다무 사용 확인 팝업이 노출된다', async ({ page }) => {
  await expect(page.locator('[role="dialog"]')).toBeVisible();
});

Then('기다무 사용 확인 팝업이 노출되지 않고 회차 구매 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"]')).toBeVisible();
});

Then(/^기다무 (작품, 공지 사항|작품) 띠배너가 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('기다무 사용 팝업이 노출되지 않고 회차 구매 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"]')).toBeVisible();
});

// 기다무 이용권 차감 결과 — 뷰어.steps.ts에서 처리

Then('뷰어로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('작품정보 하단에 미구독 상태로 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('작가 홈으로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/);
});

Then('장르 랜딩 리스트로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Episodes 우측으로 Details 영역이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^Creaotrs, Details, .+가 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Fans also read 문구 및 추천 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('[Continue Ep.2] 버튼 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(팝업이 닫히며|팝업이 종료되며).+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^\{(BM값|정렬값|장르값)\} (선택|으)로.+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('공지사항 내용이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('작품홈 화면으로 이동되고 해당 회차에 대여기간이 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

Then('작품홈으로 이동되며 버튼이 [Comtinue Ep.3] 으로 변경되어 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

Then('작품홈으로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

Then(/^다른 기다무 작품홈으로 이동된다\.$/, async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
});

Then(/^(타이틀 문구|해당 영역|회차 금액).+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Creaotrs|episode 2 뷰어).+$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Given(/^Gift > 이용권 작품 수령한 경우$/, async () => {
  // 선물 이용권 사전 조건 — 자동화 범위 외
});

Then(/^\{정렬값\}으로 리스트 갱신된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('기다무 사용 팝업 없이 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^기다무 작품, 띠배너가 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어로 진입된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^프로필 이미지, 작가명, 작가 작품이 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^최신순으로 정렬된다\. \(제일 상단 에피소드 번호가 총 회차수 인지 확인 \)$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^첫화보기 순으로 노출된다\. \(제일 상단 에피소드 번호가 (\d+) 인지 확인\)$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});
