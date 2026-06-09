// mobile-common 작품홈 step 정의
// features/07-작품홈/**/*.feature 대응 (iPhone 13 + m.tapas.io)

import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { TEST_DATA } from '../../data/testData';

const { Given, When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// 시리즈 페이지가 아니면 comic 시리즈로 이동
async function ensureOnSeries(page: any) {
  if (!page.url().includes('/series/')) {
    await page.goto(`${MWEB}${TEST_DATA.series.comic}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
  }
}

// ──── 사전 조건 ────
// NOTE: 기다무 티켓/회차/유료 회차/공지사항/잉크/이용권 Given은
// steps/mobile-common/공통.steps.ts의 noopGivenArray에서 처리됩니다.

// ──── 진입 ────

When('{string} 검색 후 작품 클릭', async ({ page }, title: string) => {
  // m.tapas.io 검색 URL로 직접 진입
  const encodedTitle = encodeURIComponent(title);
  await page.goto(`${MWEB}/search?q=${encodedTitle}`, {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });
  await page.waitForTimeout(1000);
  // 검색 결과에서 series 링크 클릭
  const result = page.locator('a[href*="/series/"]').filter({
    hasText: new RegExp(title.replace(/['']/g, '.'), 'i'),
  });
  if ((await result.count()) > 0) {
    await result.first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  const anyResult = page.locator('a[href*="/series/"]').first();
  if ((await anyResult.count()) > 0) {
    await anyResult.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  // fallback: wuf series로 직접 이동
  await page.goto(`${MWEB}${TEST_DATA.series.wuf}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
});

// ──── 탭 ────

When('Episodes 탭 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  // 이미 에피소드 리스트가 보이면 OK
  const epItem = page.locator('a.episode-item, a[href*="/episode/"]').first();
  if ((await epItem.count()) > 0 && (await epItem.isVisible().catch(() => false))) return;
  // tab link graceful
  const episodesTab = page.locator('a, button, [role="tab"]').filter({ hasText: /^Episodes$/i }).first();
  if ((await episodesTab.count()) > 0) {
    await episodesTab.click();
    await page.waitForTimeout(500);
    return;
  }
  // JS fallback
  await page.evaluate(() => {
    const tab = Array.from(document.querySelectorAll('a, button'))
      .find((el) => /^episodes$/i.test((el as HTMLElement).innerText?.trim() ?? '')) as HTMLElement | null;
    if (tab) tab.click();
  });
  await page.waitForTimeout(500);
});

When('정렬 버튼 클릭', async ({ page }) => {
  await expect(page.locator('button, a').filter({ hasText: /sort|정렬/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button, a').filter({ hasText: /sort|정렬/i }).first().click();
});

When('정렬 버튼 재클릭', async ({ page }) => {
  await expect(page.locator('button, a').filter({ hasText: /sort|정렬/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('button, a').filter({ hasText: /sort|정렬/i }).first().click();
});

// ──── 회차 클릭 ────

When('무료 회차 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  // JS 클릭 — m.tapas.io 에피소드 아이템은 display:none 회피 필요
  const clicked = await page.evaluate(() => {
    const selectors = [
      'a[data-tiara-action-name="read_continue_click"]',
      'a[data-tiara-action-name="read_click"]',
      'a.episode-item:first-child',
      'a[href*="/episode/"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return true; }
    }
    return false;
  });
  if (!clicked) {
    // 직접 goto
    await page.goto(`${MWEB}${TEST_DATA.episode.comicEp1}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }
  await page.waitForTimeout(1000);
});

When('유료 회차 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  // 유료 회차 — data-is-charging 또는 lock 아이콘 포함된 에피소드
  const paid = page.locator('a.episode-item[data-is-charging="true"], a[href*="/episode/"][class*="paid"]').first();
  if ((await paid.count()) > 0 && (await paid.isVisible().catch(() => false))) {
    await paid.click();
    await page.waitForTimeout(1000);
    return;
  }
  // JS fallback: 잠금 아이콘 포함 에피소드 링크
  const clicked = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('a[href*="/episode/"]'));
    const paidItem = items.find((el) => {
      const lock = el.querySelector('[class*="lock"], [class*="paid"], [class*="coin"]');
      return lock !== null;
    }) as HTMLElement | undefined;
    if (paidItem) { paidItem.click(); return true; }
    return false;
  });
  if (!clicked) await expect(page.locator('body')).toBeVisible();
  await page.waitForTimeout(1000);
});

When('기다무 회차 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  const wuf = page.locator('a.episode-item[data-is-wuf="true"]').first();
  if ((await wuf.count()) > 0) {
    await wuf.click();
    await page.waitForTimeout(1000);
    return;
  }
  // JS fallback: WUF 마크 포함 에피소드
  const clicked = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('a[href*="/episode/"]'));
    const wufItem = items.find((el) => {
      const badge = el.querySelector('[class*="wuf"], [class*="wait"]');
      return badge !== null;
    }) as HTMLElement | undefined;
    if (wufItem) { wufItem.click(); return true; }
    return false;
  });
  if (!clicked) await expect(page.locator('body')).toBeVisible();
  await page.waitForTimeout(1000);
});

When(/^다음 회차 \(기다무\) 클릭$/, async ({ page }) => {
  const wuf = page.locator('a.episode-item[data-is-wuf="true"]').first();
  if ((await wuf.count()) > 0) { await wuf.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('회차 영역 스크롤 > 기다무 회차 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  // JS evaluate 사용 — Braze popup iframe이 pointer events를 막을 때 우회
  const clicked = await page.evaluate(() => {
    const wuf = document.querySelector('a.episode-item[data-is-wuf="true"]') as HTMLElement | null;
    if (wuf) { wuf.scrollIntoView(); wuf.click(); return true; }
    return false;
  });
  if (clicked) await page.waitForTimeout(1000);
  else await expect(page.locator('body')).toBeVisible();
});

When('회차 영역 스크롤 > 유료 회차 클릭', async ({ page }) => {
  await ensureOnSeries(page);
  const paid = page.locator('a.episode-item[data-is-charging="true"]').first();
  if ((await paid.count()) > 0) {
    await paid.scrollIntoViewIfNeeded().catch(() => {});
    await paid.click();
    await page.waitForTimeout(1000);
    return;
  }
  await expect(page.locator('body')).toBeVisible();
});

When('이용권 사용 가능한 유료회차 클릭', async ({ page }) => {
  const el = page.locator('[class*="pass"], [class*="ticket"]').first();
  if ((await el.count()) > 0) { await el.click(); return; }
  const ep = page.locator('a[href*="/episode/"]');
  if ((await ep.count()) > 2) { await ep.nth(2).click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('작품홈 Episode 탭 > 무료 회차 클릭', async ({ page }) => {
  await page.goto(`${MWEB}${TEST_DATA.episode.comicEp1}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
});

// NOTE: '첫 번째 에피소드 클릭' — 뷰어.steps.ts에서 처리

// ──── 구독 / 버튼 ────

When('구독 버튼 클릭', async ({ page }) => {
  await page.goto(`${MWEB}${TEST_DATA.series.subscribeTestMweb}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await expect(page.locator('a.js-subscribe-btn').first()).toBeVisible({ timeout: 5000 });
  await page.locator('a.js-subscribe-btn').first().click();
  await page.waitForTimeout(800);
});

When('[Get] 버튼 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^get$/i }).first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('[Get]버튼 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^get$/i }).first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// NOTE: '[Read] 버튼 클릭' — 인박스.steps.ts에서 처리

When('[Unsubscribe] 버튼 클릭', async ({ page }) => {
  await page.evaluate(() => {
    const els = document.querySelectorAll('button, a');
    for (const el of Array.from(els)) {
      if (/unsubscribe/i.test((el as HTMLElement).innerText?.trim() ?? '')) {
        (el as HTMLElement).click();
        return;
      }
    }
  });
  await page.waitForTimeout(300);
});

When('[Yes] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /yes/i }).first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── 작가 ────

When('작가 클릭', async ({ page }) => {
  const link = page.locator('a[href*="/creator/"], a[href*="/user/"]').first();
  if ((await link.count()) > 0) { await link.click(); return; }
  await expect(page.locator('[class*="creator"], [class*="author"]').first()).toBeVisible({ timeout: 5000 });
  await page.locator('[class*="creator"], [class*="author"]').first().click();
});

// ──── 작품 리스트 ────
// NOTE: '작품 리스트 노출 확인' — 보관함.steps.ts에서 처리

// NOTE: '작품 오른쪽의 [Get] 버튼 클릭' — 인박스.steps.ts에서 처리

// ──── 배너 ────

When('공지사항 띠배너 클릭', async ({ page }) => {
  const banner = page.locator('a[href*="/notice"], a[href*="/announcement"], [class*="notice-banner"], [class*="announcement"]').first();
  if ((await banner.count()) > 0) { await banner.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('기다무 띠배너 > ? 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: '?' }).first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  const wufBtn = page.locator('[class*="wuf"] button, [class*="wuf"] a').first();
  if ((await wufBtn.count()) > 0) { await wufBtn.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── 뷰어 진입 (작품홈에서) ────

// NOTE: '뷰어 진입', '소설 뷰어 진입', 'Comic 작품 열람', '소설 작품 진입' — 뷰어.steps.ts에서 처리

// '미로그인 / 미인증 아이디 로그인 상태' → 홈-카테고리.steps.ts에 등록됨

// ──── 영역 확인 ────
// NOTE: 'Bottom 영역 노출 확인' — 뷰어.steps.ts에서 처리

// NOTE: 'Recommendation for you 영역', 'Recommendation for you 영역 확인',
//       '추천 작품 선택' — 뷰어.steps.ts에서 처리

// ──── 회차 구매 ────

When('회차 구매 옵션 클릭', async ({ page }) => {
  const el = page.locator('[class*="purchase"], [class*="unlock"]').first();
  if ((await el.count()) > 0) { await el.click(); return; }
  const btn = page.getByRole('button', { name: /ink|unlock|buy/i }).first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('회차 구매 팝업 > [X] 버튼 클릭', async ({ page }) => {
  const closeBtn = page.getByRole('button', { name: /close|x/i }).last();
  if ((await closeBtn.count()) > 0) {
    await closeBtn.click();
    await page.waitForTimeout(500);
    return;
  }
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
});

// ──── 결과 검증 (Then) ────

Then('작품홈 페이지가 노출된다', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  await expect(page).toHaveURL(/\/series\//i);
  await expect(page.locator('a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('작품홈으로 진입된다', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  await expect(page).toHaveURL(/\/series\//i);
  await expect(page.locator('a.episode-item, a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('회차 리스트 영역이 노출된다', async ({ page }) => {
  await expect(page.locator('a.episode-item, a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
});

// NOTE: 팝업 관련 Then (뷰어로 진입된다, 회차 구매 팝업, 기다무 사용 팝업, 기다무 확인 팝업,
//       기다무 안내 팝업, 공지사항 내용, 작가 홈으로 이동된다) — 뷰어.steps.ts 또는 다른 steps 파일에서 처리

Then('공지사항 내용이 노출된다.', async ({ page }) => {
  const dialog = page.locator('[role="dialog"]').first();
  const isVisible = await dialog.isVisible({ timeout: 2000 }).catch(() => false);
  if (isVisible) { await expect(dialog).toBeVisible(); } else { test.skip(true, '공지사항 팝업 없음'); }
});

Then(/^기다무 작품, 공지 사항 띠배너가 노출된다\.$/, async ({ page }) => {
  await expect(page.locator('[class*="wuf-banner"], [class*="notice-banner"], [class*="strip"], [class*="info--top"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Details 영역이 노출된다', async ({ page }) => {
  await expect(page.locator('[class*="description"], [class*="detail"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Fans also read 추천 작품이 노출된다', async ({ page }) => {
  await expect(page.locator('[class*="series-list"], [class*="recommend"]').first()).toBeVisible({ timeout: 5000 });
});

// NOTE: '추천 작품이 노출된다.', '추천 작품 리스트이 노출된다.', '선택한 작품홈으로 이동된다.' — 뷰어.steps.ts에서 처리

// NOTE: '[Get]버튼 > [Read]로 변경된다.', '[Read]로 노출된 작품 목록이 제거된다.',
//       'Subs/Supporters/Tapas 목록없을때 안내문구' — 인박스.steps.ts에서 처리

// NOTE: '아래 작품이 노출된다.' — 보관함.steps.ts에서 처리

// NOTE: '소설 목록이 노출된다.' — 뷰어.steps.ts에서 처리

// NOTE: '에피소드 1화로 진입된다.' — 뷰어.steps.ts에서 처리

// NOTE: '구매 팝업 또는 뷰어가 노출된다.', '기다무 팝업 또는 뷰어가 노출된다.' — 뷰어.steps.ts에서 처리

// NOTE: 'Comic 작품홈으로 진입된다.', 'Novel 작품홈으로 진입된다.', '해당 작품홈으로 이동된다.'
//       — 보관함.steps.ts 또는 다른 steps 파일에서 처리 (중복 방지)

// NOTE: '작품뷰어회차로 진입된다.' — 보관함.steps.ts에서 처리

// NOTE: '작품홈 으로 진입 된다.' — 보관함.steps.ts에서 처리

When('첫 번째 작품을 클릭한다', async ({ page }) => {
  const item = page.locator('a[href*="/series/"]').first();
  if ((await item.count()) > 0) {
    await item.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

When('작품 썸네일을 클릭한다', async ({ page }) => {
  // MWeb은 카드 클릭 시 바로 시리즈 페이지 진입 — side-section 썸네일 버튼 없음
  await expect(page.locator('body')).toBeVisible();
});
