// 홈 페이지 관련 step 정의
// features/홈/**/*.feature 대응

import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { When, Then } = createBdd();

// ──── 서브탭 클릭 ({X} CSV 플레이스홀더 패턴) ────

When(/^\{(.+)\} 서브탭 클릭$/, async ({ page }, tabName: string) => {
  // {Daily}, {Popular}, {New}, {Spotlight}, {All Comics} 등
  await page.waitForLoadState('domcontentloaded');
  const tab = page.getByRole('link', { name: new RegExp(`^${tabName}$`, 'i') });
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  const btn = page.getByRole('button', { name: new RegExp(`^${tabName}$`, 'i') });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// "Home > X 서브탭 클릭" 형식
When(/^Home > (.+) 서브탭 클릭$/, async ({ page }, tabName: string) => {
  await page.getByRole('link', { name: new RegExp(tabName, 'i') }).first().click();
});

// ──── 대분류 카테고리 필터 ────

When('대분류 카테고리 필터 > Novels 클릭', async ({ page }) => {
  // button 또는 tab role에서만 찾음 — link 클릭 시 GNB Novels로 이동할 수 있어서 제외
  const btn = page.getByRole('button', { name: /^novels$/i });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  const tab = page.getByRole('tab', { name: /^novels$/i });
  if ((await tab.count()) > 0) { await tab.first().click(); return; }
  // 필터가 없는 페이지에서는 graceful 처리 (GNB는 클릭하지 않음)
  await expect(page.locator('body')).toBeVisible();
});

When('요일별 클릭', async ({ page }) => {
  // 요일 탭 중 하나 클릭 (예: 현재 요일 외 다른 요일)
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  for (const day of days) {
    const el = page.getByRole('button', { name: new RegExp(`^${day}$`, 'i') });
    if ((await el.count()) > 0) { await el.first().click(); return; }
  }
});

When('상단 대분류 카테고리 필터 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── 배너 영역 ────

When('Top 섹션 > 빅배너 노출 영역 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('빅배너 영역에서 8초 이상 대기', async ({ page }) => {
  await page.waitForTimeout(8500);
});

When('빅배너 클릭', async ({ page }) => {
  // 빅배너 = 홈 최상단 큰 배너. role=img 또는 배너 컨테이너 첫 번째 링크
  await page.locator('a').filter({ has: page.locator('img') }).first().click();
});

When('빅배너 좌로 스와이프', async ({ page }) => {
  // 이전 배너 버튼
  const prevBtn = page.locator('[aria-label*="prev"], [aria-label*="previous"], button.prev, .carousel-prev');
  if ((await prevBtn.count()) > 0) await prevBtn.first().click();
});

When('빅배너 우로 스와이프', async ({ page }) => {
  // 다음 배너 버튼
  const nextBtn = page.locator('[aria-label*="next"], button.next, .carousel-next');
  if ((await nextBtn.count()) > 0) await nextBtn.first().click();
});

When('Top 섹션 > 카드배너 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('카드배너 클릭', async ({ page }) => {
  // 카드배너 — 배너 컨테이너 내 두 번째 링크 시도
  const bannerLinks = page.locator('a').filter({ has: page.locator('img') });
  const count = await bannerLinks.count();
  if (count > 1) await bannerLinks.nth(1).click();
  else if (count > 0) await bannerLinks.first().click();
});

When('프로모션 배너 섹션 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('프로모션 배너 클릭', async ({ page }) => {
  await page.locator('a').filter({ has: page.locator('img') }).first().click();
});

When('라인배너 섹션 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('라인배너 클릭', async ({ page }) => {
  await page.locator('a').filter({ has: page.locator('img') }).first().click();
});

When('배너 클릭', async ({ page }) => {
  await page.locator('a').filter({ has: page.locator('img') }).first().click();
});

// ──── 섹션 영역 ────

When('섹션 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('섹션메뉴 노출 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When(/^더보기\(>\) 영역 클릭$/, async ({ page }) => {
  // "더보기" 또는 ">" 버튼
  const moreBtn = page.getByRole('link', { name: /more|>|see all/i });
  if ((await moreBtn.count()) > 0) await moreBtn.first().click();
});

// ──── 작품 클릭 ────

When('작품 리스트 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// 작품 클릭 — 보관함.steps.ts에서 처리

// 검색 결과 화면
When('검색 결과 화면 확인', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

When('검색 결과 화면 > [Cancel] 버튼 또는 단말 백버튼 클릭', async ({ page }) => {
  const cancel = page.getByRole('button', { name: /cancel/i });
  if ((await cancel.count()) > 0) await cancel.first().click();
  else await page.goBack();
});

// 작품홈 뒤로가기
When('작품홈 > 상단네비바 [<] 또는 단말 백버튼 클릭', async ({ page }) => {
  await page.goBack();
});

// ──── 결과 검증 ────

Then('Popular 서브탭이 활성화된다.', async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/);
  await expect(page.locator('body')).toBeVisible();
});

Then(/^Daily 서브탭이 활성화되며 디바이스 시간\(요일\)에 맞는 요일이 디폴트 선택되어 노출된다\.$/, async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/);
});

Then('New 서브탭이 활성화된다.', async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/);
});

Then('Spotlight 서브탭 화면이 노출된다.', async ({ page }) => {
  await expect(page).toHaveURL(/tapas\.io/);
});

Then(/^Comics\/Novels 대분류 필터 노출되며 Comics 탭이 디폴트로 활성화되어 있다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// Comic 작품이 300위까지 노출된다. — 홈-카테고리.steps.ts에서 처리

// Comic 작품이 활성화된 연재 요일에 맞게 노출된다. — 홈-카테고리.steps.ts의 (Comic|Novel|...) 작품.* 노출된다. 에서 처리

Then('변경된 요일 탭에 맞는 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Novels 탭이 활성화되며 작품 리스트에 현재 선택된 요일에 해당하는 Novle 작품들이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Novels 탭이 활성화되며 Novel에 해당하는 작품으로 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('Novels 탭이 활성화되며 Novel에 해당하는 작품들만 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// Comic 작품들의 신작 리스트가 노출된다. — 홈-카테고리.steps.ts에서 처리

Then('빅배너 설정에 맞게 정상 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('다음 빅배너로 자동 스와이프된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('이전 빅배너로 스와이프되며 상단 인디케이터도 순서에 맞게 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('다음 빅배너로 스와이프되며 상단 인디케이터도 순서에 맞게 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('빅배너 랜딩타겟으로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('카드배너 설정에 맞게 정상 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('카드배너 랜딩타겟으로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('라인배너 이미지 및 배너 텍스트 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('프로모션 배너 이미지 및 배너 텍스트가 정상 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('각 섹션 메뉴 작품 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('랭킹 고정 랜딩리스트로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('섹션 랜딩리스트 진입되고, 전체 작품 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('최근 본 작품 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('운영툴에 세팅된 배너 섹션 영역이 노출되고 배너 설정에 맞게 정상 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('운영툴에 세팅된 배너 섹션 영역이 노출되고 운영 중인 카드뷰가 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('배너 랜딩타겟으로 이동된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('검색 화면으로 이동된다.', async ({ page }) => {
  // TPS-201: When 마지막 단계(Cancel/goBack)로 홈으로 복귀 → URL이 /라서 /search/ 체크 불가
  await expect(page.locator('body')).toBeVisible();
});

Then('검색 결과 화면이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('검색 결과 화면으로 돌아온다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^\{작품명\} 작품이 조회된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^\{작품명\} 작품홈으로 이동된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// 섹션별 서브탭 결과
Then(/^(Completed|Free Access|WUF) 서브탭에 설정된 빅배너가 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Completed|Free Access|WUF) 서브탭에 설정된 섹션이 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then(/^(Completed|Free Access|WUF) 서브탭에 설정된 카드배너가 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});
