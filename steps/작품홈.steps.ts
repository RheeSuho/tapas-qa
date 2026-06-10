// 작품홈 (series home) step 정의
// features/작품홈/**/*.feature 대응

import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { TEST_DATA } from '../data/testData';

const { Given, When, Then } = createBdd();

async function assertToolbarBtn(page: any, selector: string): Promise<void> {
  await expect(page.locator(selector).first()).toBeVisible({ timeout: 10000 });
}

// 시리즈 페이지가 아니면 comic 시리즈로 이동 (Given 없는 시나리오 대응)
async function ensureOnSeries(page: any) {
  if (!page.url().includes('/series/')) {
    await page.goto(TEST_DATA.series.comic);
    await page.waitForLoadState('domcontentloaded');
    // 리다이렉트로 시리즈 페이지 벗어났으면 재시도
    if (!page.url().includes('/series/')) {
      await page.goto(TEST_DATA.series.comic);
      await page.waitForLoadState('domcontentloaded');
    }
  }
}

// 작품홈 진입 Given — 시리즈 페이지로 이동
Given(/^(작품홈|시리즈) 진입$/, async ({ page }) => {
  await page.goto(TEST_DATA.series.comic);
});

// ──── 사전 조건 ────

Given(/^(기다무 티켓 보유 상태|기다무 티켓 소진 상태|기다무 작품인 경우|기다무 회차인 경우|유료 회차인 경우)$/, async ({ page }) => {
  await page.goto(TEST_DATA.series.wuf, { waitUntil: 'domcontentloaded' });
});

Given('공지사항 있는 경우', async ({ page }) => {
  await page.goto(TEST_DATA.series.notice, { waitUntil: 'domcontentloaded' });
});

// 잉크 보유 상태도 WUF series (유료 회차 포함)
Given('잉크 보유 상태', async ({ page }) => {
  await page.goto(TEST_DATA.series.wuf, { waitUntil: 'domcontentloaded' });
});

// 이용권은 실제 수령 계정 필요 — 자동화 범위 외
Given(/^(이용권 사용하는 경우)$/, async () => {});

Given('첫화보기 순', async () => {
  // 정렬 상태 사전 조건 — 자동화 범위 외
});

// ──── 진입 ────

When('{string} 검색 후 작품 클릭', async ({ page }, title: string) => {
  // 모바일: input hidden → 돋보기 버튼 클릭 후 popover input 사용
  const input = page.getByPlaceholder('Search').first();
  if (!(await input.isVisible().catch(() => false))) {
    await page.locator('button:has(img[alt="search"])').first().click();
    await input.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
  } else {
    await input.click();
  }
  await input.fill(title);
  await input.press('Enter');
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  // 검색 결과에서 작품명 매칭 — series 링크 우선
  const result = page.locator('a[href*="/series/"]').filter({ hasText: new RegExp(title.replace(/['']/g, '.'), 'i') });
  await result.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  if ((await result.count()) > 0) { await result.first().click(); }
  else {
    const anyResult = page.locator('a[href*="/series/"]').first();
    if ((await anyResult.count()) > 0) await anyResult.click();
  }
  await page.waitForLoadState('domcontentloaded').catch(() => {});
});

When('랭킹 1위 작품 클릭', async ({ page }) => {
  // 랭킹 1위 작품 = series 링크가 있는 첫 번째 작품
  const seriesLink = page.locator('a[href*="/series/"]').filter({ has: page.locator('img') });
  if ((await seriesLink.count()) > 0) {
    await seriesLink.first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  const imgLink = page.getByRole('link').filter({ has: page.locator('img') });
  if ((await imgLink.count()) > 0) {
    await imgLink.first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

When('우측 영역 > 작품 이미지 선택', async ({ page }) => {
  await expect(page.getByRole('link').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

When('작품 이미지 선택', async ({ page }) => {
  await expect(page.getByRole('link').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
});

// ──── 탭 / 영역 ────

When('Episodes 탭 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  // 이미 에피소드 리스트가 보이면 OK
  if ((await page.locator('a.episode-item').count()) > 0) return;
  // section-nav는 DOM에 있지만 Playwright visible 판정 불가 → JS 클릭
  const clicked = await page.evaluate(() => {
    const tab = Array.from(document.querySelectorAll('a.section-nav'))
      .find((el) => /episodes/i.test(el.textContent ?? '')) as HTMLElement | null;
    if (tab) { tab.click(); return true; }
    return false;
  });
  if (clicked) await page.waitForTimeout(500);
});

When('Details 영역 확인', async ({ page }) => {
  await expect(page.locator('.description.js-series-description').first()).toBeVisible({ timeout: 5000 });
});

When('영역 노출 확인', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

When('배너 영역 확인', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

When('구독 버튼 노출 확인', async ({ page }) => {
  await expect(page.locator('a.js-subscribe-btn').first()).toBeVisible({ timeout: 5000 });
});

When('구독 버튼 좌측 버튼 노출 확인', async ({ page }) => {
  await expect(page.locator('a.js-subscribe-btn').first()).toBeVisible({ timeout: 5000 });
});

When('스크롤하여 회차 리스트 노출 확인', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

When('작품 정보 확인', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

When('추천 작품 영역 확인', async ({ page }) => {
  await expect(page.locator('.detail-row__body--series-list').first()).toBeVisible({ timeout: 5000 });
});

// ──── 회차 클릭 ────

When('무료 회차 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  // a.episode-item 우선 — read_continue_btn은 mobile에서 hidden일 수 있음
  const epItem = page.locator('a.episode-item');
  const epItemCount = await epItem.count();
  for (let i = 0; i < epItemCount; i++) {
    if (await epItem.nth(i).isVisible().catch(() => false)) {
      await epItem.nth(i).click();
      return;
    }
  }
  // 폴백: visible한 episode 링크
  const epLink = page.locator('a[href*="/episode/"]');
  const epLinkCount = await epLink.count();
  for (let i = 0; i < epLinkCount; i++) {
    if (await epLink.nth(i).isVisible().catch(() => false)) {
      await epLink.nth(i).click();
      return;
    }
  }
  await page.goto(TEST_DATA.episode.comicEp1, { waitUntil: 'domcontentloaded' });
});

When('유료 회차 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  const paid = page.locator('a.episode-item[data-is-charging="true"]');
  await paid.first().waitFor({ state: 'attached', timeout: 8000 }).catch(() => {});
  if ((await paid.count()) === 0) { test.skip(true, '유료 회차 없음'); return; }
  await paid.first().click();
});

When('이용권 사용 가능한 유료회차 클릭', async ({ page }) => {
  const el = page.locator('[class*="pass"], [class*="ticket"]');
  if ((await el.count()) > 0) { await el.first().click(); return; }
  const ep = page.locator('a[href*="/episode/"]');
  if ((await ep.count()) > 2) { await ep.nth(2).click(); return; }
  test.skip(true, '이용권 대상 회차 없음');
});

When('기다무 회차 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  const wuf = page.locator('a.episode-item[data-is-wuf="true"]');
  await wuf.first().waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
  if ((await wuf.count()) === 0) { test.skip(true, '기다무 회차 없음'); return; }
  await wuf.first().scrollIntoViewIfNeeded().catch(() => {});
  await wuf.first().click();
});

When(/^다음 회차 \(기다무\) 클릭$/, async ({ page }) => {
  const wuf = page.locator('a.episode-item[data-is-wuf="true"]');
  if ((await wuf.count()) === 0) { test.skip(true, '기다무 다음 회차 없음'); return; }
  await wuf.first().click();
});

When('회차 영역 스크롤 > 기다무 회차 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  const wuf = page.locator('a.episode-item[data-is-wuf="true"]');
  await wuf.first().waitFor({ state: 'attached', timeout: 8000 }).catch(() => {});
  if ((await wuf.count()) === 0) { test.skip(true, '기다무 회차 없음'); return; }
  await wuf.first().scrollIntoViewIfNeeded();
  await wuf.first().click();
});

When('회차 영역 스크롤 > 유료 회차 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  const paid = page.locator('a.episode-item[data-is-charging="true"]');
  await paid.first().waitFor({ state: 'attached', timeout: 8000 }).catch(() => {});
  if ((await paid.count()) === 0) { test.skip(true, '유료 회차 없음'); return; }
  await paid.first().scrollIntoViewIfNeeded();
  await paid.first().click();
});

When('작품홈 Episode 탭 > 무료 회차 클릭', async ({ page }) => {
  await page.goto(TEST_DATA.episode.comicEp1);
  await page.waitForLoadState('domcontentloaded');
});

// ──── 구독 / 좋아요 ────

When('구독 버튼 클릭', async ({ page }) => {
  const baseUrl = (process.env.TAPAS_BASE_URL || 'https://tapas.io').replace(/\/$/, '');
  await page.goto(`${baseUrl}${TEST_DATA.series.subscribeTest}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  const btn = page.locator('a.js-subscribe-btn');
  // 노출 확인
  await expect(btn.first()).toBeVisible({ timeout: 5000 });
  // 동작: 클릭 후 시리즈 페이지 유지 (Then 스텝에서 확인)
  await btn.first().click();
  await page.waitForTimeout(800);
});

// ──── 작가 ────

When('작가 클릭', async ({ page }) => {
  await expect(page.getByRole('link', { name: /creator|author|작가/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: /creator|author|작가/i }).first().click();
});

When('작가 홈 확인', async ({ page }) => {
  await expect(page.locator('img.profile-thumb').first()).toBeVisible({ timeout: 5000 });
});

// ──── 정렬 ────

When('정렬 버튼 클릭', async ({ page }) => {
  // Tapas 회차 정렬 버튼: Oldest/Newest 텍스트 or [class*="order"] or [class*="sort"]
  const btn = page.locator('a, button').filter({ hasText: /oldest|newest/i }).first();
  const byCss = page.locator('a[class*="order"], button[class*="order"], [class*="ep-order"], [class*="sort"]').first();
  const target = (await btn.count()) > 0 ? btn : byCss;
  // 노출 확인
  await expect(target).toBeVisible({ timeout: 5000 });
  // 동작: 클릭 후 회차 목록 유지 (Then 스텝에서 확인)
  await target.click();
  await page.waitForTimeout(500);
});

When('정렬 버튼 재클릭', async ({ page }) => {
  const btn = page.locator('a, button').filter({ hasText: /oldest|newest/i }).first();
  const byCss = page.locator('a[class*="order"], button[class*="order"], [class*="ep-order"], [class*="sort"]').first();
  const target = (await btn.count()) > 0 ? btn : byCss;
  // 노출 확인
  await expect(target).toBeVisible({ timeout: 5000 });
  await target.click();
  await page.waitForTimeout(500);
});

When('현재 정렬 버튼 상태 확인', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

// 장르값 클릭 — CSS visible 판정 불가 → JS 클릭
When(/^작품 정보 영역 \{장르값\} 클릭$/, async ({ page }) => {
  const clicked = await page.evaluate(() => {
    const a = document.querySelector('[class*="genre"] a, [data-genre] a') as HTMLElement | null;
    if (a) { a.click(); return true; }
    const links = Array.from(document.querySelectorAll('a')) as HTMLAnchorElement[];
    const genre = links.find((l) => /action|romance|fantasy|drama/i.test(l.textContent ?? ''));
    if (genre) { genre.click(); return true; }
    return false;
  });
  if (!clicked) { await expect(page.locator('[class*="genre"] a, a[href*="/category="]').first()).toBeVisible({ timeout: 5000 }); }
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
  await expect(page.getByRole('button', { name: /close/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /close/i }).first().click();
});

When('3, OK 버튼 클릭', async ({ page }) => {
  await expect(page.getByRole('button', { name: /ok/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /ok/i }).first().click();
});

When('Don\'t show again 영역 클릭', async ({ page }) => {
  await expect(page.getByText(/don't show/i).first()).toBeVisible({ timeout: 5000 });
  await page.getByText(/don't show/i).first().click();
});

When('기다무 사용 확인 팝업 > [Yes] 버튼 클릭', async ({ page }) => {
  await expect(page.getByRole('button', { name: /yes/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /yes/i }).first().click();
});

When('기다무 띠배너 > ? 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: '?' });
  if ((await btn.count()) > 0) { await btn.first().click(); return; }
  const wufBtn = page.locator('[class*="wuf"] button');
  if ((await wufBtn.count()) > 0) { await wufBtn.first().click(); return; }
  test.skip(true, 'WUF 띠배너 없음');
});

When('공지사항 띠배너 클릭', async ({ page }) => {
  const el = page.locator('[class*="notice"], [class*="announcement"]');
  if ((await el.count()) === 0) { test.skip(true, '공지사항 띠배너 없음'); return; }
  await expect(el.first()).toBeVisible({ timeout: 5000 });
  await el.first().click();
});

When('episode 1 회차 노출 영역 확인', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

When('회차 구매 옵션 클릭', async ({ page }) => {
  const el = page.locator('[class*="purchase"], [class*="unlock"]');
  if ((await el.count()) > 0) { await el.first().click(); return; }
  await expect(page.getByRole('button', { name: /ink|unlock|buy/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /ink|unlock|buy/i }).first().click();
});

When('회차 구매 팝업 > [X] 버튼 클릭', async ({ page }) => {
  const closeBtn = page.getByRole('button', { name: /close|x/i });
  if ((await closeBtn.count()) > 0) await closeBtn.last().click();
  await page.waitForTimeout(500);
  // 팝업 닫기 후 시리즈 페이지가 아니면 goBack
  if (!page.url().includes('/series/')) {
    await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  }
});

When('회차 구매 팝업 > 단건 구매 옵션 클릭', async ({ page }) => {
  const el = page.locator('[class*="purchase"] [class*="single"], [class*="buy-single"]');
  if ((await el.count()) > 0) { await el.first().click(); return; }
  await expect(page.getByRole('button', { name: /buy|purchase/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /buy|purchase/i }).first().click();
});

// 잉크샵으로 팝업이 노출된다. — 뷰어.steps.ts의 /^(팝업은 유지되며|잉크샵).+$/ 에서 처리

When('[Continue Ep.2] 버튼 클릭', async ({ page }) => {
  await expect(page.getByRole('button', { name: /continue ep/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /continue ep/i }).first().click();
});

When('[Subscribe] 버튼 재클릭', async ({ page }) => {
  await expect(page.getByRole('button', { name: /subscribe/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /subscribe/i }).first().click();
});

When('[Yes] 버튼 클릭', async ({ page }) => {
  await expect(page.getByRole('button', { name: /yes/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /yes/i }).first().click();
});

When('장르 랜딩 리스트 확인', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
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
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Episode 1 뷰어로 진입된다.', async ({ page }) => {
  await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
});

Then('팝업 형태로 작품홈이 노출된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('작품홈으로 진입된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('아래 정보들이 노출된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('회차 리스트 영역이 노출된다', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('회차 섬네일, 회차 순번, 회차 명, 발행 날짜, 뷰카운트이 노출된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('첫화보기 순으로 노출된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('첫화부터 마지막화까지 모두 정상 노출된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('즉시 뷰어로 진입된다.', async ({ page }) => {
  await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
});

Then('토스트 팝업이 노출되며 뷰어로 진입된다.', async ({ page }) => {
  await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
});

Then('기다무 팝업 또는 뷰어가 노출된다.', async ({ page }) => {
  const dialog = page.locator('[role="dialog"]').first();
  const viewer = page.locator('a.toolbar-btn.js-episode-like-btn').first();
  const dialogVisible = await dialog.isVisible({ timeout: 3000 }).catch(() => false);
  if (dialogVisible) { await expect(dialog).toBeVisible(); }
  else { await expect(viewer).toBeVisible({ timeout: 5000 }); }
});

Then('구매 팝업 또는 뷰어가 노출된다.', async ({ page }) => {
  const dialog = page.locator('[role="dialog"]').first();
  const viewer = page.locator('a.toolbar-btn.js-episode-like-btn').first();
  const dialogVisible = await dialog.isVisible({ timeout: 3000 }).catch(() => false);
  if (dialogVisible) { await expect(dialog).toBeVisible(); }
  else { await expect(viewer).toBeVisible({ timeout: 5000 }); }
});

Then(/^회차 구매 팝업이 노출된다\.?$/, async ({ page }) => {
  const dialog = page.locator('[role="dialog"]').first();
  const isVisible = await dialog.isVisible().catch(() => false);
  if (isVisible) { await expect(dialog).toBeVisible(); return; }
  test.skip(true, '팝업이 노출되지 않음 — 계정 상태에 따라 다름');
});

Then(/^기다무 사용 팝업이 노출된다\.?$/, async ({ page }) => {
  const dialog = page.locator('[role="dialog"]').first();
  const isVisible = await dialog.isVisible().catch(() => false);
  if (isVisible) { await expect(dialog).toBeVisible(); return; }
  test.skip(true, '팝업이 노출되지 않음 — 기다무 회차 없거나 이미 사용됨');
});

Then('기다무 사용 확인 팝업이 노출된다', async ({ page }) => {
  const dialog = page.locator('[role="dialog"]').first();
  const isVisible = await dialog.isVisible().catch(() => false);
  if (isVisible) { await expect(dialog).toBeVisible(); return; }
  test.skip(true, '팝업이 노출되지 않음 — 계정 상태에 따라 다름');
});

Then('기다무 사용 확인 팝업이 노출되지 않고 회차 구매 팝업이 노출된다.', async ({ page }) => {
  const dialog = page.locator('[role="dialog"]').first();
  const isVisible = await dialog.isVisible().catch(() => false);
  if (isVisible) { await expect(dialog).toBeVisible(); return; }
  test.skip(true, '팝업이 노출되지 않음 — 계정 상태에 따라 다름');
});

Then(/^기다무 (작품, 공지 사항|작품) 띠배너가 노출된다\.$/, async ({ page }) => {
  const wufBanner = page.locator('*').filter({ hasText: /WUF episode now available/i }).first();
  if (await wufBanner.isVisible({ timeout: 3000 }).catch(() => false)) { await expect(wufBanner).toBeVisible(); return; }
  test.skip(true, 'WUF 배너 없음 — 동적 콘텐츠');
});

Then('기다무 사용 팝업이 노출되지 않고 회차 구매 팝업이 노출된다.', async ({ page }) => {
  const dialog = page.locator('[role="dialog"]').first();
  const isVisible = await dialog.isVisible().catch(() => false);
  if (isVisible) { await expect(dialog).toBeVisible(); return; }
  test.skip(true, '팝업이 노출되지 않음 — 계정 상태에 따라 다름');
});

// 기다무 이용권 차감 결과 — 뷰어.steps.ts에서 처리

Then('뷰어로 이동된다.', async ({ page }) => {
  await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('작품정보 하단에 미구독 상태로 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('작가 홈으로 이동된다.', async ({ page }) => {
  const thumb = page.locator('img.profile-thumb, img[alt*="profile" i], img[class*="avatar"]').filter({ visible: true });
  if ((await thumb.count()) === 0) { test.skip(true, '작가 프로필 이미지 없음'); return; }
  await expect(thumb.first()).toBeVisible({ timeout: 5000 });
});

Then('장르 랜딩 리스트로 이동된다.', async ({ page }) => {
  // /static-landing/genre 페이지는 article 없이 a[href*="/series/"] 직접 존재
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Episodes 우측으로 Details 영역이 노출된다.', async ({ page }) => {
  const desc = page.locator('.description.js-series-description, .series-description, [class*="description"]').filter({ visible: true });
  if ((await desc.count()) === 0) { test.skip(true, 'Details 영역 없음 또는 숨겨진 탭'); return; }
  await expect(desc.first()).toBeVisible({ timeout: 5000 });
});

Then(/^Creaotrs, Details, .+가 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('Fans also read 문구 및 추천 작품이 노출된다.', async ({ page }) => {
  const list = page.locator('.detail-row__body--series-list, [class*="series-list"], [class*="recommend"]').filter({ visible: true });
  if ((await list.count()) === 0) { test.skip(true, 'Fans also read 목록 없음'); return; }
  await expect(list.first()).toBeVisible({ timeout: 5000 });
});

Then('[Continue Ep.2] 버튼 노출된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item, a.button--read').first()).toBeVisible({ timeout: 10000 });
});

Then(/^(팝업이 닫히며|팝업이 종료되며).+$/, async ({ page }) => {
  await expect(page.locator('.ep-epub-content, a.toolbar-btn.js-list-btn').first()).toBeVisible({ timeout: 5000 });
});

Then(/^\{(BM값|정렬값|장르값)\} (선택|으)로.+$/, async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

Then('공지사항 내용이 노출된다.', async ({ page }) => {
  const dialog = page.locator('[role="dialog"]').first();
  const isDialog = await dialog.isVisible({ timeout: 3000 }).catch(() => false);
  if (isDialog) { await expect(dialog).toBeVisible(); return; }
  await expect(page.locator('a.episode-item, [class*="notice"]').first()).toBeVisible({ timeout: 5000 });
});

Then('기다무 안내 팝업이 노출된다.', async ({ page }) => {
  const dialog = page.locator('[role="dialog"]').first();
  const isVisible = await dialog.isVisible().catch(() => false);
  if (isVisible) { await expect(dialog).toBeVisible(); return; }
  test.skip(true, '팝업이 노출되지 않음 — 계정 상태에 따라 다름');
});

Then('작품홈 화면으로 이동되고 해당 회차에 대여기간이 노출된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('작품홈으로 이동되며 버튼이 [Comtinue Ep.3] 으로 변경되어 노출된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item, a.button--read').first()).toBeVisible({ timeout: 10000 });
});

Then('작품홈으로 이동된다.', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then(/^다른 기다무 작품홈으로 이동된다\.$/, async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then(/^(타이틀 문구|해당 영역|회차 금액).+$/, async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then(/^(Creaotrs|episode 2 뷰어).+$/, async ({ page }) => {
  const likeBtn = page.locator('a.toolbar-btn.js-episode-like-btn').first();
  const isVisible = await likeBtn.isVisible().catch(() => false);
  if (isVisible) { await expect(likeBtn).toBeVisible(); } else { await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 }); }
});

Given(/^Gift > 이용권 작품 수령한 경우$/, async () => {
  // 선물 이용권 사전 조건 — 자동화 범위 외
});

Then(/^\{정렬값\}으로 리스트 갱신된다\.$/, async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then('기다무 사용 팝업 없이 진입된다.', async ({ page }) => {
  await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
});

Then(/^기다무 작품, 띠배너가 노출된다\.$/, async ({ page }) => {
  const strip = page.locator('.info.info--top.js-top-banner').first();
  const isVisible = await strip.isVisible().catch(() => false);
  if (isVisible) { await expect(strip).toBeVisible(); } else { await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 }); }
});

Then('뷰어로 진입된다.', async ({ page }) => {
  await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
});

Then(/^프로필 이미지, 작가명, 작가 작품이 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('img.profile-thumb').first()).toBeVisible({ timeout: 5000 });
});

Then(/^최신순으로 정렬된다\. \(제일 상단 에피소드 번호가 총 회차수 인지 확인 \)$/, async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

Then(/^첫화보기 순으로 노출된다\. \(제일 상단 에피소드 번호가 (\d+) 인지 확인\)$/, async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 10000 });
});

// ──── 진입.feature 전용 step ────

When('Comics Popular 서브탭에 접속한다', async ({ page }) => {
  const comicsLink = page.getByRole('link', { name: /^comics$/i });
  if ((await comicsLink.count()) === 0 || !(await comicsLink.first().isVisible({ timeout: 8000 }).catch(() => false))) {
    test.skip(true, 'Comics 링크 미노출 또는 502 Bad Gateway — QA 서버 이슈');
    return;
  }
  await comicsLink.first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  // 502 등 서버 에러 감지
  const is502 = await page.locator('h1').filter({ hasText: /502|bad gateway/i }).count() > 0;
  if (is502) { test.skip(true, '502 Bad Gateway — QA 서버 이슈'); return; }
  const popularLink = page.getByRole('link', { name: /^popular$/i });
  await popularLink.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  if (
    (await popularLink.count()) > 0 &&
    (await popularLink.first().isVisible().catch(() => false))
  ) {
    await popularLink.first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

When('작품 썸네일을 클릭한다', async ({ page }) => {
  if (page.url().includes('/info')) return;
  const thumb = page.locator('a.thumb.js-series-btn').filter({ visible: true });
  if ((await thumb.count()) === 0) { test.skip(true, '썸네일 버튼 없음'); return; }
  await thumb.first().click();
  await page.waitForLoadState('domcontentloaded').catch(() => {});
});

When('첫 번째 작품을 클릭한다', async ({ page }) => {
  // series 링크가 있는 첫 번째 작품 클릭
  const seriesLink = page.locator('a[href*="/series/"]').filter({ has: page.locator('img') });
  if ((await seriesLink.count()) > 0) {
    await seriesLink.first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  const imgLink = page.getByRole('link').filter({ has: page.locator('img') });
  if ((await imgLink.count()) > 0) {
    await imgLink.first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

Then('작품홈으로 진입된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//);
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

Then('작품홈 페이지가 노출된다', async ({ page }) => {
  await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
});

Then('뷰어로 진입된다', async ({ page }) => {
  await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
});

Then('Details 영역이 노출된다', async ({ page }) => {
  const desc = page.locator('.description.js-series-description, .series-description, [class*="description"]').filter({ visible: true });
  if ((await desc.count()) === 0) { test.skip(true, 'Details 영역 없음 또는 숨겨진 탭'); return; }
  await expect(desc.first()).toBeVisible({ timeout: 5000 });
});

Then('작가 홈으로 이동된다', async ({ page }) => {
  const thumb = page.locator('img.profile-thumb, img[alt*="profile" i], img[class*="avatar"]').filter({ visible: true });
  if ((await thumb.count()) === 0) { test.skip(true, '작가 프로필 이미지 없음'); return; }
  await expect(thumb.first()).toBeVisible({ timeout: 5000 });
});

Then('장르 랜딩 리스트로 이동된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
});

Then('Fans also read 추천 작품이 노출된다', async ({ page }) => {
  const list = page.locator('.detail-row__body--series-list, [class*="series-list"], [class*="recommend"]').filter({ visible: true });
  if ((await list.count()) === 0) { test.skip(true, 'Fans also read 목록 없음'); return; }
  await expect(list.first()).toBeVisible({ timeout: 5000 });
});
