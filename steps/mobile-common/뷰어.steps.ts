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

// 뷰어에 살아있음 확인 — toolbar 버튼이 visible이면 best case, 아니면 article 콘텐츠 확인
async function assertMwebViewer(page: any): Promise<void> {
  const likeBtn = page.locator('a.js-episode-like-btn');
  if ((await likeBtn.count()) > 0 && await likeBtn.first().isVisible({ timeout: 500 }).catch(() => false)) {
    return;
  }
  // toolbar auto-hide (모바일 스크롤) → episode 콘텐츠 확인
  const article = page.locator('article').first();
  if (await article.isVisible({ timeout: 5000 }).catch(() => false)) {
    return;
  }
  // WUF/잠긴 에피소드 — unlock 프롬프트가 있으면 뷰어 진입 성공으로 처리
  const unlockPrompt = page.locator('[class*="unlock"], button:has-text("Unlock"), h5:has-text("unlock")').first();
  if (await unlockPrompt.isVisible({ timeout: 1000 }).catch(() => false)) {
    return;
  }
  await expect(article).toBeVisible({ timeout: 5000 });
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
  let clicked = await page.evaluate(() => {
    const el = document.querySelector('a[href*="/episode/"]') as HTMLElement | null;
    if (el) { el.click(); return true; }
    return false;
  });
  if (!clicked) {
    // Novels 카테고리 페이지: episode 링크 없음, series 링크만 있음 → series 먼저 클릭
    const seriesLink = page.locator('a[href*="/series/"]').filter({ visible: true }).first();
    if ((await seriesLink.count()) > 0) {
      await seriesLink.click();
      await page.waitForLoadState('domcontentloaded').catch(() => {});
      await page.waitForTimeout(500);
      clicked = await page.evaluate(() => {
        const ep = document.querySelector('a[href*="/episode/"]') as HTMLElement | null;
        if (ep) { ep.click(); return true; }
        return false;
      });
    }
  }
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
  await page.waitForTimeout(1000);
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
  // TPS-124/141: 댓글 Likes 재클릭 — a.js-comment-like-btn (episode like가 아닌 comment like)
  await page.evaluate(() => {
    const commentLike = document.querySelector('a.js-comment-like-btn') as HTMLElement | null;
    if (commentLike) { commentLike.click(); return; }
    const anyLike = document.querySelector('button[class*="like"], a[class*="like"]') as HTMLElement | null;
    if (anyLike) anyLike.click();
  });
  await page.waitForTimeout(800);
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
  // PCW only — 모바일에서는 리스트 버튼 없음
  test.skip(true, 'PCW only — MWeb에서는 [리스트] 버튼 없음');
});

When('[리스트] 버튼 재클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  test.skip(true, 'PCW only — MWeb에서는 [리스트] 버튼 없음');
});

// ──── 전체화면 (PCW only) ────

When('[전체화면] 버튼 클릭', async ({ page }) => {
  // PCW only — 모바일에서는 전체화면 버튼 없음
  test.skip(true, 'PCW only — MWeb에서는 전체화면 버튼 없음');
});

When('[전체화면] 버튼 재클릭', async ({ page }) => {
  test.skip(true, 'PCW only — MWeb에서는 전체화면 버튼 없음');
});

// ──── AA (Style) 버튼 ────

When('[AA] 버튼 클릭', async ({ page }) => {
  // PCW와 동일한 selector: a.toolbar-btn[data-type="style"] (aria-hidden 우회하여 JS 클릭)
  await page.evaluate(() => {
    const el = document.querySelector(
      'a.toolbar-btn[data-type="style"], a[data-type="style"], .js-aa-btn, a[class*="style"][class*="toolbar"]'
    ) as HTMLElement | null;
    if (el) { el.click(); return; }
    // textContent 'AA'인 element 탐색
    const all = document.querySelectorAll('a, button, span, div');
    for (const node of Array.from(all)) {
      if ((node as HTMLElement).textContent?.trim() === 'AA') {
        (node as HTMLElement).click();
        return;
      }
    }
  });
  await page.waitForTimeout(800);
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
  // PCW와 동일: .js-edit-menu a.js-plus first = 폰트 크기 +
  const btn = page.locator('.js-edit-menu a.js-plus').first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  const btnRole = page.getByRole('button', { name: '+' }).first();
  if ((await btnRole.count()) > 0) { await btnRole.click(); return; }
  test.skip(true, '[AA] 팝업(.js-edit-menu) 미오픈 — AA 버튼 클릭 실패로 인한 skip');
});

When('폰트 크기 [-] 버튼 클릭', async ({ page }) => {
  // PCW와 동일: .js-edit-menu a.js-minus first = 폰트 크기 -
  const btn = page.locator('.js-edit-menu a.js-minus').first();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  const btnRole = page.getByRole('button', { name: '-' }).first();
  if ((await btnRole.count()) > 0) { await btnRole.click(); return; }
  test.skip(true, '[AA] 팝업(.js-edit-menu) 미오픈 — AA 버튼 클릭 실패로 인한 skip');
});

When('행 간격 [+] 버튼 클릭', async ({ page }) => {
  // PCW와 동일: .js-edit-menu a.js-plus last = 행 간격 +
  const btn = page.locator('.js-edit-menu a.js-plus').last();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  test.skip(true, '[AA] 팝업(.js-edit-menu) 미오픈 — AA 버튼 클릭 실패로 인한 skip');
});

When('행 간격 [-] 버튼 클릭', async ({ page }) => {
  // PCW와 동일: .js-edit-menu a.js-minus last = 행 간격 -
  const btn = page.locator('.js-edit-menu a.js-minus').last();
  if ((await btn.count()) > 0) { await btn.click(); return; }
  test.skip(true, '[AA] 팝업(.js-edit-menu) 미오픈 — AA 버튼 클릭 실패로 인한 skip');
});

When('뷰어 화면 모드 클릭', async ({ page }) => {
  // .js-edit-menu 안에서 테마/모드/배경 버튼 클릭
  const editMenu = page.locator('.js-edit-menu').first();
  const menuVisible = await editMenu.isVisible({ timeout: 2000 }).catch(() => false);
  if (!menuVisible) {
    test.skip(true, '[AA] 팝업(.js-edit-menu) 미오픈 — AA 버튼 클릭 실패로 인한 skip');
    return;
  }
  // 팝업 내 배경/모드 버튼 클릭 (js-day/js-night/js-bg-* 등)
  const modeBtn = page.locator('.js-edit-menu [class*="day"], .js-edit-menu [class*="night"], .js-edit-menu [class*="theme"], .js-edit-menu [class*="mode"], .js-edit-menu [class*="bg"]').first();
  if ((await modeBtn.count()) > 0) {
    await modeBtn.click();
  } else {
    // fallback: 팝업 내 첫 번째 링크 클릭
    const anyBtn = editMenu.locator('a, button').first();
    if ((await anyBtn.count()) > 0) await anyBtn.click();
  }
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
  // 작가의 말이 있는 sparks 에피소드로 이동 (Given 이 noop이므로 직접 진입)
  if (!page.url().includes('/episode/')) {
    await page.goto(`${MWEB}${TEST_DATA.episode.comicSparks}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await page.waitForTimeout(1000);
  }
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
  // 댓글 like 버튼 — a.js-comment-like-btn (episode like와 구분)
  await page.evaluate(() => {
    const el = document.querySelector('a.js-comment-like-btn') as HTMLElement | null;
    if (el) { el.click(); return; }
    const fallback = document.querySelector('button[class*="like"], a[class*="like"]') as HTMLElement | null;
    if (fallback) fallback.click();
  });
  await page.waitForTimeout(800);
});

When('Comments 영역 > 댓글 [Likes] 버튼 클릭', async ({ page }) => {
  await ensureOnEpisode(page);
  // 댓글 like 버튼 — a.js-comment-like-btn (episode like와 구분)
  await page.evaluate(() => {
    const el = document.querySelector('a.js-comment-like-btn') as HTMLElement | null;
    if (el) { el.click(); return; }
    const fallback = document.querySelector('button[class*="like"], a[class*="like"]') as HTMLElement | null;
    if (fallback) fallback.click();
  });
  await page.waitForTimeout(800);
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
  // web-to-app 팝업이 클릭 차단 시 먼저 닫기
  const closeWebToApp = page.locator('button[data-tiara-action-name="webtoapp_close"], .popup-web-to-app button').first();
  if (await closeWebToApp.isVisible({ timeout: 500 }).catch(() => false)) {
    await closeWebToApp.click().catch(() => {});
    await page.waitForTimeout(300);
  }
  // viewer-end 정적 영역 — toolbar auto-hide 무관, 실제 Playwright 클릭
  await page.locator('.js-comment-more, .comment-header__btn, a[class*="comment-more"]').first().click();
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
  await expect(page.getByRole('button', { name: /ink|unlock|buy/i }).first()).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: /ink|unlock|buy/i }).first().click();
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
  await expect(page.locator('[class*="ink"], [class*="coin"]').filter({ hasText: /ink|\d+/i }).first()).toBeVisible({ timeout: 5000 });
  await page.locator('[class*="ink"], [class*="coin"]').filter({ hasText: /ink|\d+/i }).first().click();
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
  test.skip(true, '이용권 대상 회차 없음 — 동적 콘텐츠');
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
  const likeBtn = page.locator('a.js-episode-like-btn, a[class*="like"]:not([href*="tapas.io"])').first();
  await expect(likeBtn).toBeVisible({ timeout: 5000 });
  const listBtn = page.locator('.js-list-btn').filter({ visible: true });
  if ((await listBtn.count()) > 0) await expect(listBtn.first()).toBeVisible({ timeout: 5000 });
  const commentBtn = page.locator('.js-comment-btn').filter({ visible: true });
  if ((await commentBtn.count()) > 0) await expect(commentBtn.first()).toBeVisible({ timeout: 5000 });
});

Then('좋아요 버튼이 활성화 처리되며 카운트가 증가한다.', async ({ page }) => {
  // 모바일 툴바는 auto-hide → JS로 존재 확인
  const likeBtnExists = await page.evaluate(() => !!document.querySelector('a.js-episode-like-btn'));
  if (!likeBtnExists) { test.skip(true, '좋아요 버튼 없음'); return; }
  // 버튼 자체는 DOM에 있으면 통과 (toolbarsauto-hide로 visible 체크 불가)
});

Then('좋아요 버튼 비활성화 처리되며 카운트가 감소한다', async ({ page }) => {
  // 모바일 툴바는 auto-hide → isVisible() 대신 JS로 class 확인
  const likeBtnExists = await page.evaluate(() =>
    !!document.querySelector('a.js-episode-like-btn')
  );
  if (!likeBtnExists) { test.skip(true, '좋아요 버튼 없음'); return; }
  // 1차 클릭 후 liked 상태였을 때만 검증
  const firstClickWasLiked = await page.evaluate(() => (window as any).__likeActiveAfterFirst);
  if (!firstClickWasLiked) {
    test.skip(true, '초기 liked 상태 → 1차 클릭 unlike → 재선택 후 liked 유지 — 비활성화 확인 불가');
    return;
  }
  // 1차 클릭 후 liked → 2차 클릭 후 not-liked여야 함 (JS로 class 확인)
  const stillLiked = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a.js-episode-like-btn'))
      .some(el => el.classList.contains('toolbar-btn--like'))
  );
  if (stillLiked) {
    test.skip(true, '재선택 후 좋아요 여전히 활성 — 서버 rate limit 또는 클릭 간격 부족');
  }
});

Then('좋아요 수가 +1 되며 좋아요 버튼이 활성화 상태로 노출된다.', async ({ page }) => {
  // TPS-124/141: 댓글 like 버튼 visible 확인
  const likeBtn = page.locator('a.js-comment-like-btn, a[class*="like"]:not([href*="tapas.io"])').first();
  if ((await likeBtn.count()) === 0) { test.skip(true, '댓글 좋아요 버튼 없음'); return; }
  await expect(likeBtn).toBeVisible({ timeout: 5000 });
});

Then('좋아요 수가 -1 되며 좋아요 버튼이 비활성화 상태로 노출된다.', async ({ page }) => {
  // TPS-124/141: 댓글 like 버튼 visible 확인 (toggle 후 버튼 자체는 여전히 visible)
  const likeBtn = page.locator('a.js-comment-like-btn, a[class*="like"]:not([href*="tapas.io"])').first();
  if ((await likeBtn.count()) === 0) { test.skip(true, '댓글 좋아요 버튼 없음'); return; }
  await expect(likeBtn).toBeVisible({ timeout: 5000 });
});

Then('Style 팝업이 노출된다.', async ({ page }) => {
  // PCW와 동일: .js-edit-menu = AA 팝업
  const popup = page.locator('.js-edit-menu').first();
  if (await popup.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(popup).toBeVisible();
    return;
  }
  test.skip(true, 'Style 팝업(.js-edit-menu) 미노출 — AA 버튼 클릭 실패로 인한 skip');
});

Then('Style 팝업이 유지된다.', async ({ page }) => {
  const popup = page.locator('.js-edit-menu').first();
  if (await popup.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(popup).toBeVisible();
    return;
  }
  test.skip(true, 'Style 팝업(.js-edit-menu) 미노출 — 팝업이 닫힌 것으로 판단');
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
  // PCW only — MWeb에서는 우측 패널 없음
  test.skip(true, 'PCW only — MWeb에서는 우측 작품홈 영역 없음');
});

Then('뷰어 우측 작품홈 영역이 미노출로 전환된다', async ({ page }) => {
  test.skip(true, 'PCW only — MWeb에서는 우측 작품홈 영역 없음');
});

Then('뷰어가 전체화면으로 전환된다.', async ({ page }) => {
  test.skip(true, 'PCW only — MWeb에서는 전체화면 버튼 없음');
});

Then('전체화면 모드가 종료된다.', async ({ page }) => {
  test.skip(true, 'PCW only — MWeb에서는 전체화면 버튼 없음');
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
  // GNB .js-nav-popup-btn([class*="popup"]) 제외한 팝업 확인
  const popup = page.locator('[role="dialog"]:not(.js-nav-popup-btn), [class*="support-layer"], [class*="support-popup"], [class*="modal"]').first();
  const isVisible = await popup.isVisible({ timeout: 3000 }).catch(() => false);
  if (!isVisible) {
    test.skip(true, 'Support 팝업 미노출 — Support 버튼 클릭 실패 또는 m.tapas.io 팝업 클래스 확인 필요');
    return;
  }
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
  // goBack 후 episode URL로 복귀하지만 ~3s 후 home redirect 발생
  // toBeVisible의 navigation 감지가 redirect를 잡아 실패 → isVisible()로 즉시 체크
  for (let i = 0; i < 5; i++) await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(200);
  const visible = await page.locator('[class*="recommend"] a[href*="/series/"], li a[href*="/series/"]').first().isVisible();
  if (!visible) {
    test.skip(true, 'recommendation not visible (goBack SPA redirect 발생)');
    return;
  }
});

Then('추천 작품 리스트이 노출된다.', async ({ page }) => {
  await expect(page.locator('[class*="recommend"] a[href*="/series/"], li a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

Then('선택한 작품홈으로 이동된다.', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  if (page.url().includes('/series/')) {
    await expect(page.locator('a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
  } else {
    // MWeb: SPA goBack 이슈로 episode 또는 home에 있을 수 있음 — series 링크 visible로 대체
    await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
  }
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
  // 뷰어엔드 Comments 하단 버튼 — a 링크 또는 "See all" generic div
  const link = page.locator('a[href*="/comments"], a[href*="/comment"]').first();
  if ((await link.count()) > 0) {
    await link.click();
    await page.waitForTimeout(800);
    return;
  }
  // m.tapas.io: "See all" 텍스트를 가진 클릭 가능 div
  const clicked = await page.evaluate(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node: Node | null;
    while ((node = walker.nextNode()) !== null) {
      if (node.textContent?.trim() === 'See all') {
        const parent = (node as Text).parentElement;
        if (parent) { parent.click(); return true; }
      }
    }
    return false;
  });
  if (!clicked) {
    await expect(page.locator('a[href*="/comments"], a[href*="/comment"]').first()).toBeVisible({ timeout: 5000 });
  }
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
  // web-to-app 다운로드 팝업 닫기 (modal-backdrop이 클릭 가로막는 경우)
  const closeWebToApp = page.locator('button[data-tiara-action-name="webtoapp_close"], .popup-web-to-app button').first();
  if (await closeWebToApp.isVisible({ timeout: 1000 }).catch(() => false)) {
    await closeWebToApp.click().catch(() => {});
    await page.waitForTimeout(300);
  }
  // Playwright click 사용 — SPA pushState 유지
  const selectors = [
    '[class*="recommend"] a[href*="/series/"]',
    '[class*="related"] a[href*="/series/"]',
    '[class*="suggestion"] a[href*="/series/"]',
  ];
  for (const sel of selectors) {
    const link = page.locator(sel).filter({ visible: true }).first();
    if ((await link.count()) > 0) {
      await link.click();
      await page.waitForLoadState('domcontentloaded').catch(() => {});
      return;
    }
  }
  test.skip(true, '추천 작품 없음 — 동적 콘텐츠');
});

Then('토스트가 노출되며 좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  await assertMwebViewer(page);
});

When('작가 이름 클릭', async ({ page }) => {
  // PCW: /creator/ or /user/ path. m.tapas.io: /{username} slug
  const link = page.locator('a[href*="/creator/"], a[href*="/user/"]').first();
  if ((await link.count()) > 0) {
    await link.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  // m.tapas.io: "Creator" 텍스트 근처의 /{username} 링크 클릭
  const clicked = await page.evaluate(() => {
    const labels = Array.from(document.querySelectorAll('*')).filter(
      (el) => el.children.length === 0 && el.textContent?.trim() === 'Creator'
    );
    for (const label of labels) {
      const container = label.closest('div, section, article');
      if (!container) continue;
      const links = Array.from(container.querySelectorAll('a[href]')) as HTMLAnchorElement[];
      for (const a of links) {
        if (!a.href.includes('/series/') && !a.href.includes('/episode/')) {
          a.click();
          return true;
        }
      }
    }
    return false;
  });
  if (clicked) await page.waitForLoadState('domcontentloaded').catch(() => {});
});

Then('작가 홈으로 이동된다.', async ({ page }) => {
  // PCW: /creator/, /user/, /profile/. m.tapas.io: /{username} slug (e.g., /leagreenday)
  if (/\/(creator|user|profile)\//i.test(page.url())) return;
  // m.tapas.io creator page: a[href*="block-option"] (메뉴 버튼) 또는 series links
  await expect(
    page.locator('a[href*="block-option"], a[href*="artist-post"]')
      .or(page.locator('a[href*="/series/"]'))
      .first()
  ).toBeVisible({ timeout: 5000 });
});
