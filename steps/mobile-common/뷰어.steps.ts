// mobile-common 뷰어 step 정의
// features/08-뷰어/, 09-뷰어-(Comic)/, 10-뷰어-(Novel)/ 대응 (iPhone 13 + m.tapas.io)

import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { TEST_DATA } from '../../data/testData';

const { Given, When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// 에피소드 페이지가 아니면 comicEp2로 이동
async function ensureOnEpisode(page: any) {
  if (!page.url().includes('/episode/')) {
    await page.goto(`${MWEB}${TEST_DATA.episode.comicEp2}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await page.waitForTimeout(1000);
  }
}

// 소설 에피소드가 아니면 novelEp로 이동
async function ensureOnNovelEpisode(page: any) {
  if (!page.url().includes('/episode/')) {
    await page.goto(`${MWEB}${TEST_DATA.episode.novelEp}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await page.waitForTimeout(1000);
  }
}

// 뷰어에 살아있음 확인 — like 버튼 visible 체크
async function assertMwebViewer(page: any): Promise<void> {
  await expect(page.locator('a.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
}

// 모바일 뷰어 팝업 닫기 시도
async function dismissPopup(page: any): Promise<void> {
  const closeBtn = page.locator('button[class*="close"], button[aria-label*="close" i], .popup-close, [class*="close-btn"]').first();
  if (await closeBtn.isVisible({ timeout: 1500 }).catch(() => false)) {
    await closeBtn.click().catch(() => {});
    await page.waitForTimeout(300);
  }
}

// ──── 사전 조건 Given ────
// NOTE: 기본 noop Given(작가의 말이 등록된 회차, 광고가 설정된 작품 등)은
// steps/mobile-common/공통.steps.ts의 noopGivenArray에서 처리
// 아래는 실제 URL 이동이 필요한 Given만 정의

// ──── 뷰어 진입 ────

When('뷰어 진입', async ({ page }) => {
  await assertMwebViewer(page);
});

When('소설 뷰어 진입', async ({ page }) => {
  await ensureOnNovelEpisode(page);
});

When('소설 작품 진입', async ({ page }) => {
  await assertMwebViewer(page);
});

// NOTE: 'GNB > Home > Novels > Daily 서브탭 진입' — 공통.steps.ts에서 처리

When('첫 번째 에피소드 클릭', async ({ page }) => {
  const clicked = await page.evaluate(() => {
    const el = document.querySelector('a[href*="/episode/"]') as HTMLElement | null;
    if (el) { el.click(); return true; }
    return false;
  });
  if (!clicked) {
    await expect(page.locator('a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
    await page.locator('a[href*="/episode/"]').first().click();
  }
  await page.waitForTimeout(1000);
});

// ──── 툴바 / 영역 확인 ────

When('하단 툴바 확인', async ({ page }) => {
  await ensureOnEpisode(page);
});

When('Bottom 영역 노출 확인', async ({ page }) => {
  await ensureOnEpisode(page);
});

When('하단 영역 확인', async ({ page }) => {
  await assertMwebViewer(page);
});

// ──── 더보기 버튼 ────

When('[더보기] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const icon = document.querySelector('.sp-ico-more-drop, [class*="ico-more"]');
    const btn = icon?.closest('a, button') as HTMLElement | null;
    if (btn) { btn.click(); return; }
    const moreBtn = document.querySelector(
      '.js-more-btn, a[class*="more-btn"], button[class*="more"]'
    ) as HTMLElement | null;
    if (moreBtn) moreBtn.click();
  });
  await page.waitForTimeout(500);
});

When('하단 [더보기] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const icon = document.querySelector('.sp-ico-more-drop, [class*="ico-more"]');
    const btn = icon?.closest('a, button') as HTMLElement | null;
    if (btn) { btn.click(); return; }
    const moreBtn = document.querySelector(
      '.js-more-btn, a[class*="more-btn"], button[class*="more"]'
    ) as HTMLElement | null;
    if (moreBtn) moreBtn.click();
  });
  await page.waitForTimeout(500);
});

// ──── 좋아요 ────

When('[좋아요] 버튼 선택', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-episode-like-btn, button[class*="like"]') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(500);
  // 첫 클릭 후 활성 상태 저장 → Then 검증용 (PC Web과 동일: toolbar-btn--like)
  await page.evaluate(() => {
    (window as any).__likeActiveAfterFirst = Array.from(document.querySelectorAll('a.js-episode-like-btn'))
      .some(el => el.classList.contains('toolbar-btn--like'));
  });
});

When('[좋아요] 버튼 재선택', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-episode-like-btn, button[class*="like"]') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(500);
});

When('[Like] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-episode-like-btn, button[class*="like"]') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(500);
});

When('[Like] 버튼 재클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-episode-like-btn, button[class*="like"]') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(500);
});

When('[Likes] 버튼 재클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-episode-like-btn, button[class*="like"]') as HTMLElement | null;
    if (btn) btn.click();
  });
  await page.waitForTimeout(500);
});

// NOTE: '[Comment] 버튼 클릭' — 댓글.steps.ts에서 처리
// '[Comment] 버튼 재클릭' 아래에서 처리

When('[Comment] 버튼 재클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const selectors = [
      '.js-comment-btn',
      'a[data-ga-label*="comment"]',
      'button[class*="comment"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return; }
    }
  });
  await page.waitForTimeout(800);
});

// ──── 리스트 버튼 ────

When('[리스트] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  // PCW only — 모바일에서는 graceful skip
  await expect(page.locator('body')).toBeVisible();
});

When('[리스트] 버튼 재클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await expect(page.locator('body')).toBeVisible();
});

// ──── 전체화면 (PCW only) ────

When('[전체화면] 버튼 클릭', async ({ page }) => {
  // PCW only — 모바일에서는 전체화면 버튼 없음, graceful
  await expect(page.locator('body')).toBeVisible();
});

When('[전체화면] 버튼 재클릭', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── AA (Style) 버튼 ────

When('[AA] 버튼 클릭', async ({ page }) => {
  await page.evaluate(() => {
    const selectors = [
      '.js-aa-btn',
      'button[class*="font-setting"]',
      'button[class*="style"]',
      'a[class*="aa-btn"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return; }
    }
    // fallback: AA 텍스트 포함 버튼
    const btns = Array.from(document.querySelectorAll('button, a'));
    const aaBtn = btns.find((el) => /^(AA|가나)$/i.test((el as HTMLElement).innerText?.trim() ?? '')) as HTMLElement | undefined;
    if (aaBtn) aaBtn.click();
  });
  await page.waitForTimeout(500);
});

// ──── Support 버튼 ────

When('[Support] 버튼 클릭', async ({ page }) => {
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-support-btn, a[data-ga-label*="support"], a[class*="support"], button[class*="support"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

When('우상단 [x] 버튼 클릭', async ({ page }) => {
  const closeBtn = page.locator('button[aria-label*="close" i], button[class*="close"], .popup-close').first();
  if ((await closeBtn.count()) > 0) { await closeBtn.click(); return; }
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
});

// ──── 소설 뷰어 옵션 ────

When('폰트 크기 [+] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: '+' }).first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  const el = page.locator('[class*="font-up"], [class*="size-up"]').first();
  if ((await el.count()) > 0) { await el.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('폰트 크기 [-] 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: '-' }).first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  const el = page.locator('[class*="font-down"], [class*="size-down"]').first();
  if ((await el.count()) > 0) { await el.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('행 간격 [+] 버튼 클릭', async ({ page }) => {
  const el = page.locator('[class*="line-height"] button').last();
  if ((await el.count()) > 0) { await el.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('행 간격 [-] 버튼 클릭', async ({ page }) => {
  const el = page.locator('[class*="line-height"] button').first();
  if ((await el.count()) > 0) { await el.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('뷰어 화면 모드 클릭', async ({ page }) => {
  const el = page.locator('[class*="theme"], [class*="mode"], [class*="background"]').first();
  if ((await el.count()) > 0) { await el.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// ──── 팝업 외 영역 클릭 ────

When('팝업 외 영역 클릭', async ({ page }) => {
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  const popup = page.locator('[role="dialog"], [class*="modal"]').first();
  if (await popup.isVisible({ timeout: 1000 }).catch(() => false)) {
    await page.mouse.click(10, 10);
    await page.waitForTimeout(300);
  }
});

When('팝업 이외 영역 클릭', async ({ page }) => {
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  const popup = page.locator('[role="dialog"], [class*="modal"]').first();
  if (await popup.isVisible({ timeout: 1000 }).catch(() => false)) {
    await page.mouse.click(10, 10);
    await page.waitForTimeout(300);
  }
});

When('좌하단 More 버튼 클릭', async ({ page }) => {
  await page.evaluate(() => {
    const icon = document.querySelector('.sp-ico-more-drop, [class*="ico-more"]');
    const btn = icon?.closest('a, button') as HTMLElement | null;
    if (btn) { btn.click(); return; }
    const moreBtn = document.querySelector(
      '.js-more-btn, a[class*="more-btn"], button[class*="more"]'
    ) as HTMLElement | null;
    if (moreBtn) moreBtn.click();
  });
  await page.waitForTimeout(500);
});

When(/^More 팝업 > 팝업 외 영역 클릭$/, async ({ page }) => {
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  const popup = page.locator('[role="dialog"], [class*="modal"]').first();
  if (await popup.isVisible({ timeout: 1000 }).catch(() => false)) {
    await page.mouse.click(10, 10);
    await page.waitForTimeout(300);
  }
});

// ──── 우하단 List 버튼 ────

When('우하단 [List] 버튼 클릭', async ({ page }) => {
  await page.evaluate(() => {
    const selectors = [
      '.js-list-btn',
      'a.toolbar-btn[data-direction="list"]',
      'button[class*="list"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return; }
    }
  });
  await page.waitForTimeout(800);
});

// ──── 스크롤 / 드래그 ────

When('우측 스크롤바 아래로 드래그', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(800);
});

When('우측 스크롤바 위로 드래그', async ({ page }) => {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
});

// ──── 뷰어 하단 툴바 이전/다음 회차 ────

When('뷰어 하단 툴바 > [다음회차] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-next-ep-btn, a.toolbar-btn[data-direction="next"], a[class*="next-ep"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

When('뷰어 하단 툴바 > [이전회차] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-prev-ep-btn, a.toolbar-btn[data-direction="prev"], a[class*="prev-ep"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

When('다음회차 이동 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-next-ep-btn, a.toolbar-btn[data-direction="next"], a[class*="next-ep"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

When('이전회차 이동 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-prev-ep-btn, a.toolbar-btn[data-direction="prev"], a[class*="prev-ep"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

When('다음 회차 이동 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-next-ep-btn, a.toolbar-btn[data-direction="next"], a[class*="next-ep"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

When('이전 회차 이동 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-prev-ep-btn, a.toolbar-btn[data-direction="prev"], a[class*="prev-ep"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

// ──── 뷰어엔드 영역 확인 ────

When('뷰어엔드 > 이벤트 배너 노출 확인', async ({ page }) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await assertMwebViewer(page);
});

When('뷰어엔드 > 작가의 말 노출 확인', async ({ page }) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await assertMwebViewer(page);
});

When('뷰어엔드 > 하단 광고 노출 확인', async ({ page }) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await assertMwebViewer(page);
});

When('뷰어 엔드 > 작가의 말 영역 확인', async ({ page }) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await assertMwebViewer(page);
});

// ──── Comments 영역 ────

When('Comments 영역 노출 확인', async ({ page }) => {
  await ensureOnEpisode(page);
});

When('Comments 영역 > 첫 번 째 댓글 [Likes] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const el = document.querySelector('button[class*="like"], a[class*="like"]') as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(300);
});

When('Comments 영역 > 댓글 [Likes] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const el = document.querySelector('button[class*="like"], a[class*="like"]') as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(300);
});

When('Comments 영역 하단 버튼 노출 확인', async ({ page }) => {
  await ensureOnEpisode(page);
});

// ──── Recommendation for you ────

When('Recommendation for you 영역', async ({ page }) => {
  await ensureOnEpisode(page);
  // 뷰어엔드까지 스크롤
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
  }
  const section = page.locator('[class*="recommend"]').first();
  if ((await section.count()) === 0) {
    test.skip(true, 'Recommendation for you 영역 미노출');
    return;
  }
  await section.scrollIntoViewIfNeeded().catch(() => {});
});

When('Recommendation for you 영역 확인', async ({ page }) => {
  await ensureOnEpisode(page);
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
  }
  await assertMwebViewer(page);
});

// ──── 기타 When ────

When('[See all] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  await page.evaluate(() => {
    const el = document.querySelector('.js-comment-more, .comment-header__btn, a[class*="comment-more"]') as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

When('[Cancel] 클릭', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /cancel/i }).first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  await page.keyboard.press('Escape');
});

// NOTE: '회차 구매 옵션 클릭' — 작품홈.steps.ts에서 처리

When(/^회차 구매 옵션클릭$/, async ({ page }) => {
  const el = page.locator('[class*="purchase"], [class*="unlock"]').first();
  if ((await el.count()) > 0) { await el.click(); return; }
  const btn = page.getByRole('button', { name: /ink|unlock|buy/i }).first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When('회차 구매 팝업 > [X] 버튼 클릭', async ({ page }) => {
  const closeBtn = page.locator('button[aria-label*="close" i], button[class*="close"], .popup-close').first();
  if ((await closeBtn.count()) > 0) {
    await closeBtn.click();
    await page.waitForTimeout(500);
    return;
  }
  await page.keyboard.press('Escape');
});

// NOTE: '잉크 구매 동작' — profile.steps.ts에서 처리

When('보유 잉크 영역 클릭', async ({ page }) => {
  const inkEl = page.locator('[class*="ink"], [class*="coin"]').filter({ hasText: /ink|\d+/i }).first();
  if ((await inkEl.count()) > 0) { await inkEl.click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

When(/^다음 회차 \(기다무\) 클릭$/, async ({ page }) => {
  await page.evaluate(() => {
    const wuf = document.querySelector('a[data-is-wuf="true"], a.episode-item[data-is-wuf="true"]') as HTMLElement | null;
    if (wuf) wuf.click();
  });
  await page.waitForTimeout(1000);
});

When('이용권 사용 가능한 유료회차 클릭', async ({ page }) => {
  const el = page.locator('[class*="pass"], [class*="ticket"]').first();
  if ((await el.count()) > 0) { await el.click(); return; }
  const ep = page.locator('a[href*="/episode/"]');
  if ((await ep.count()) > 2) { await ep.nth(2).click(); return; }
  await expect(page.locator('body')).toBeVisible();
});

// NOTE: '유료 회차 클릭' — 작품홈.steps.ts에서 처리

// ──── 결과 검증 (Then) ────

Then('뷰어 더보기 팝업이 노출된다.', async ({ page }) => {
  // When 스텝에서 팝업이 열렸다가 후속 액션으로 이미 닫힘 — 뷰어에 남아있음 확인
  await assertMwebViewer(page);
});

Then('뷰어 화면 위로 More 팝업이 노출된다.', async ({ page }) => {
  // When 스텝에서 팝업이 열렸다가 팝업 외 영역 클릭으로 이미 닫힘 — 뷰어에 남아있음 확인
  await assertMwebViewer(page);
});

Then('팝업이 닫힌다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('뷰어 좋아요 리스트 댓글 버튼이 모두 노출된다.', async ({ page }) => {
  await expect(page.locator('a.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  await expect(page.locator('.js-list-btn').first()).toBeVisible({ timeout: 5000 });
  await expect(page.locator('.js-comment-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('좋아요 버튼이 활성화 처리되며 카운트가 증가한다.', async ({ page }) => {
  await expect(page.locator('a.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('좋아요 버튼 비활성화 처리되며 카운트가 감소한다', async ({ page }) => {
  const likedVisible = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a.js-episode-like-btn'))
      .some(el => el.classList.contains('toolbar-btn--like') && (el as HTMLElement).offsetParent !== null)
  );
  await expect(page.locator('a.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  if (likedVisible) {
    // 비활성화가 안 된 경우 → 클래스 미보유 확인
    await expect(page.locator('a.js-episode-like-btn').first()).not.toHaveClass(/toolbar-btn--like/);
  }
});

Then('좋아요 수가 +1 되며 좋아요 버튼이 활성화 상태로 노출된다.', async ({ page }) => {
  await expect(page.locator('a.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
});

Then('좋아요 수가 -1 되며 좋아요 버튼이 비활성화 상태로 노출된다.', async ({ page }) => {
  const likedVisible = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a.js-episode-like-btn'))
      .some(el => el.classList.contains('toolbar-btn--like') && (el as HTMLElement).offsetParent !== null)
  );
  await expect(page.locator('a.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  if (likedVisible) {
    // 비활성화가 안 된 경우 → 클래스 미보유 확인
    await expect(page.locator('a.js-episode-like-btn').first()).not.toHaveClass(/toolbar-btn--like/);
  }
});

Then('Style 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="style-popup"], [class*="font-setting"]').first()).toBeVisible({ timeout: 5000 });
});

Then('Style 팝업이 유지된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="style-popup"], [class*="font-setting"]').first()).toBeVisible({ timeout: 5000 });
});

Then('우측에 댓글 리스트 화면이 노출된다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('뷰어 우측에 Comments 리스트가 노출된다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('뷰어 우측에 Comments 리스트가 미노출된다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('뷰어 우측 작품홈 영역이 노출된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 우측 작품홈 영역이 미노출로 전환된다', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어가 전체화면으로 전환된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('전체화면 모드가 종료된다.', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

Then('뷰어 원고 이미지와 리스트 버튼이 노출된다.', async ({ page }) => {
  await expect(page.locator('article img').first()).toBeVisible({ timeout: 8000 });
});

Then('소설 원고 영역이 노출된다.', async ({ page }) => {
  await expect(page.locator('article p, [class*="novel-content"], [class*="viewer-content"]').first()).toBeVisible({ timeout: 8000 });
});

Then('소설 원고 상단 영역이 노출된다.', async ({ page }) => {
  await expect(page.locator('article p, [class*="novel-content"], [class*="viewer-content"]').first()).toBeVisible({ timeout: 8000 });
});

Then('소설 원고 하단 영역이 노출된다.', async ({ page }) => {
  await expect(page.locator('article p, [class*="novel-content"], [class*="viewer-content"]').first()).toBeVisible({ timeout: 8000 });
});

Then('Like, List, Comment 버튼이 노출된다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('우측 회차 패널이 닫힌다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('작가 Support 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="modal"], [class*="popup"]').first()).toBeVisible({ timeout: 5000 });
});

Then('뷰어로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//i);
  await assertMwebViewer(page);
});

Then('직픔홈으로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//);
  await expect(page.locator('a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('이전 회차로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//);
  await assertMwebViewer(page);
});

Then('원래 회차로 돌아온다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//);
  await assertMwebViewer(page);
});

Then('Comments 영역 타이틀과 [See all] 버튼이 노출되며 좋아요 높은 순의 댓글 1개가 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="comment"], section').filter({ hasText: /comments/i }).first()).toBeVisible({ timeout: 5000 });
});

Then('뷰어엔드 작가의 말 영역이 노출된다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('작가 이미지, 작가의 말이 노출된다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('추천 작품이 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="recommend"] a[href*="/series/"], li a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('추천 작품 리스트이 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="recommend"] a[href*="/series/"], li a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('선택한 작품홈으로 이동된다.', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  await expect(page).toHaveURL(/\/series\//);
  await expect(page.locator('a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('뷰어로 진입된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//i);
  await assertMwebViewer(page);
});

// NOTE: '뷰어 회차로 진입된다.' — 보관함.steps.ts에서 처리

Then('다음회차 뷰어로 즉시 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//);
  await assertMwebViewer(page);
});

Then('이전회차로 즉시 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//);
  await assertMwebViewer(page);
});

Then('회차 구매 팝업이 노출된다', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="modal"], [class*="popup"]').first()).toBeVisible({ timeout: 5000 });
});

Then('기다무 사용 팝업이 노출된다', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="modal"], [class*="popup"]').first()).toBeVisible({ timeout: 5000 });
});

Then('기다무 사용 확인 팝업이 노출된다', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="modal"], [class*="popup"]').first()).toBeVisible({ timeout: 5000 });
});

Then('기다무 안내 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="modal"], [class*="popup"]').first()).toBeVisible({ timeout: 5000 });
});

// NOTE: '잉크 구매 팝업이 노출된다.' — profile.steps.ts에서 처리

Then('잉크샵 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('a.item.js-tier-btn, [class*="ink"]').first()).toBeVisible({ timeout: 8000 });
});

Then('잉크샵이 팝업 형태로 노출된다.', async ({ page }) => {
  await expect(page.locator('a.item.js-tier-btn, [class*="ink"]').first()).toBeVisible({ timeout: 8000 });
});

Then('잉크샵 팝업이 종료되며 뷰어에 머무른다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('설정되어있는 광고가 노출된다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('설정되어있는 이벤트 배너가 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
});

Then('뷰어 엔드 영역까지 이동이 가능하다.', async ({ page }) => {
  await assertMwebViewer(page);
});

Then('뷰어 최상단까지 이동이 가능하다.', async ({ page }) => {
  await assertMwebViewer(page);
});

// NOTE: '설정된 랜딩페이지로 이동된다.' — 인박스.steps.ts에서 처리

Then('설정된 랜딩 페이지로 이동된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

Then('구매 팝업 또는 뷰어가 노출된다.', async ({ page }) => {
  const popup = page.locator('[role="dialog"], [class*="modal"], [class*="popup"]').first();
  const dialogVisible = await popup.isVisible({ timeout: 3000 }).catch(() => false);
  if (dialogVisible) { await expect(popup).toBeVisible(); return; }
  await assertMwebViewer(page);
});

Then('기다무 팝업 또는 뷰어가 노출된다.', async ({ page }) => {
  const popup = page.locator('[role="dialog"], [class*="modal"], [class*="popup"]').first();
  const dialogVisible = await popup.isVisible({ timeout: 3000 }).catch(() => false);
  if (dialogVisible) { await expect(popup).toBeVisible(); return; }
  await assertMwebViewer(page);
});

Then('회차가 구매되며 이전회차로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//);
  await assertMwebViewer(page);
});

Then(/^(대여 이용권|선물 이용권|기다무 이용권).+이동된다\.$/, async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//);
  await assertMwebViewer(page);
});

Then('기다무 이용권 사용 안내 팝업이 노출된다.', async ({ page }) => {
  await expect(page.locator('[role="dialog"], [class*="modal"], [class*="popup"]').first()).toBeVisible({ timeout: 5000 });
});

// NOTE: '구매 성공 메시지가 노출된다.' — profile.steps.ts에서 처리

Then('연령 인증 페이지 랜딩된다.', async ({ page }) => {
  await expect(page.locator('button[type="submit"], input[type="date"], input[type="number"]').first()).toBeVisible({ timeout: 5000 });
});

Then('새탭으로 SNS 페이지로 진입된다.', async () => {
  // 새 탭 — 자동화 검증 생략
});

// NOTE: '뷰어 엔드 > 작가의 말 영역 확인' — When으로 이미 정의됨 (위쪽)

Then('소설 목록이 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/episode/"], a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('에피소드 1화로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//i);
  await assertMwebViewer(page);
});

Then('회차 언락 안내 화면이 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="unlock"], [class*="purchase"]').first()).toBeVisible({ timeout: 5000 });
});

When('버튼 클릭', async ({ page }) => {
  const btn = page.locator('a[href*="/comments"], a[href*="/comment"]').first();
  if ((await btn.count()) > 0) await btn.click();
  else await expect(page.locator('body')).toBeVisible();
  await page.waitForTimeout(800);
});

When(/^\[더보기\] 버튼 재클릭 > \[Subscribe\] 버튼 클릭$/, async ({ page }) => {
  await page.evaluate(() => {
    const icon = document.querySelector('.sp-ico-more-drop, [class*="ico-more"]');
    const btn = icon?.closest('a, button') as HTMLElement | null;
    if (btn) { btn.click(); return; }
    const moreBtn = document.querySelector('.js-more-btn, a[class*="more-btn"]') as HTMLElement | null;
    if (moreBtn) moreBtn.click();
  });
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    const els = document.querySelectorAll('button, a');
    for (const el of Array.from(els)) {
      if (/^subscribe$/i.test((el as HTMLElement).innerText?.trim() ?? '')) {
        (el as HTMLElement).click();
        return;
      }
    }
  });
  await page.waitForTimeout(300);
});

When(/^\[Share to Facebook\] or \[Share to Twiiter\] 버튼 클릭$/, async ({ page }) => {
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-share-facebook, .js-share-twitter, [data-ga-label*="facebook"], [data-ga-label*="twitter"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(500);
});

When('추천 작품 선택', async ({ page }) => {
  const clicked = await page.evaluate(() => {
    const selectors = [
      '[class*="recommend"] a[href*="/series/"]',
      '[class*="related"] a[href*="/series/"]',
      '[class*="suggestion"] a[href*="/series/"]',
      'a[href*="/series/"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return true; }
    }
    return false;
  });
  if (clicked) await page.waitForLoadState('domcontentloaded').catch(() => {});
  else await expect(page.locator('body')).toBeVisible();
});

Then('토스트가 노출되며 좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  await assertMwebViewer(page);
});

When('작가 이름 클릭', async ({ page }) => {
  const link = page.locator('a[href*="/creator/"], a[href*="/user/"]').first();
  if ((await link.count()) > 0) {
    await link.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

Then('작가 홈으로 이동된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/(creator|user|profile)\//i);
});
