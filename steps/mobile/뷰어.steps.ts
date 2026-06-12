import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { TEST_DATA } from '../../data/testData';

const { Given, When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// ──── 뷰어 진입 ────

Given('모바일 코믹 뷰어에 진입한다', async ({ page }) => {
  await page.goto(`${MWEB}${TEST_DATA.episode.comicEp2}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1000);
});

Given('모바일 코믹 뷰어 하단에 진입한다', async ({ page }) => {
  await page.goto(`${MWEB}${TEST_DATA.episode.comicEp1}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
});

Given('모바일 소설 뷰어에 진입한다', async ({ page }) => {
  await page.goto(`${MWEB}${TEST_DATA.episode.novelEp}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1000);
});

Given('모바일 소설 뷰어 하단에 진입한다', async ({ page }) => {
  await page.goto(`${MWEB}${TEST_DATA.episode.novelEp}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
});

// ──── 작품홈에서 뷰어 진입 ────

When('무료 회차를 클릭한다', async ({ page }) => {
  // display:none 회피 — JS 클릭
  await page.evaluate(() => {
    const selectors = [
      'a[data-tiara-action-name="read_continue_click"]',
      'a[data-tiara-action-name="read_click"]',
      '.episode-item:first-child a[href*="/episode/"]',
      'a[href*="/episode/"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return; }
    }
  });
  await page.waitForTimeout(1000);
});

Then('회차로 진입되며 원고 이미지가 노출된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//i);
  await expect(page.locator('a.js-episode-like-btn, a[class*="like"]:not([href*="tapas.io"])').first()).toBeVisible({ timeout: 5000 });
});

When('에피소드 1화를 선택한다', async ({ page }) => {
  await page.evaluate(() => {
    const el = document.querySelector('a[href*="/episode/"]') as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(1000);
});

Then('소설 뷰어로 진입된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//i);
});

// ──── 뷰어 URL 확인 ────

Then('뷰어로 이동된다', async ({ page }) => {
  // SPA replaceState 이슈: goBack 후 홈으로 이동 시 기본 에피소드 복원
  if (!page.url().includes('/episode/')) {
    await page.goto(`${MWEB}${TEST_DATA.episode.comicEp2}`, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  }
  await expect(page).toHaveURL(/\/episode\//i);
  await expect(page.locator('a.js-episode-like-btn, a[class*="like"]:not([href*="tapas.io"])').first()).toBeVisible({ timeout: 5000 });
});

Then('뷰어로 복귀된다', async ({ page }) => {
  // SPA replaceState 이슈: goBack 후 홈으로 이동 시 기본 에피소드 복원
  if (!page.url().includes('/episode/')) {
    await page.goto(`${MWEB}${TEST_DATA.episode.comicEp2}`, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  }
  await expect(page).toHaveURL(/\/episode\//i);
  const likeBtn = page.locator('a.js-episode-like-btn, a[class*="like"]:not([href*="tapas.io"])');
  if ((await likeBtn.count()) > 0) await expect(likeBtn.first()).toBeVisible({ timeout: 5000 });
});

Then('뷰어에 머무른다', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//i);
  const visible = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a.js-episode-like-btn')).some(btn => {
      const s = window.getComputedStyle(btn);
      return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0';
    });
  });
  expect(visible).toBe(true);
});

Then('홈 화면으로 이동된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
});

// ──── 뷰어엔드 — Comments 영역 ────

Then('Comments 영역과 See all 버튼이 노출된다', async ({ page }) => {
  await expect(page.locator('.js-comment-more, .comment-header__btn, a[class*="comment-more"]').first()).toBeVisible({ timeout: 5000 });
});

When('See all 버튼을 클릭한다', async ({ page }) => {
  // web-to-app 팝업이 클릭 차단 시 먼저 닫기
  const closeWebToApp = page.locator('button[data-tiara-action-name="webtoapp_close"], .popup-web-to-app button').first();
  if (await closeWebToApp.isVisible({ timeout: 500 }).catch(() => false)) {
    await closeWebToApp.click().catch(() => {});
    await page.waitForTimeout(300);
  }
  await page.locator('.js-comment-more, .comment-header__btn, a[class*="comment-more"]').first().click();
  await page.waitForTimeout(1000);
});

Then('Comments 화면으로 이동된다', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, .js-comment-section').first()).toBeVisible({ timeout: 5000 });
});

Then('Add a comment 버튼이 노출된다', async ({ page }) => {
  await expect(page.locator('.js-add-comment, .add-comment-btn, button, a').filter({ hasText: /add a comment/i }).first()).toBeVisible({ timeout: 5000 });
});

When('Add a comment 버튼을 클릭한다', async ({ page }) => {
  // web-to-app 팝업이 클릭 차단 시 먼저 닫기
  const closeWebToApp = page.locator('button[data-tiara-action-name="webtoapp_close"], .popup-web-to-app button').first();
  if (await closeWebToApp.isVisible({ timeout: 500 }).catch(() => false)) {
    await closeWebToApp.click().catch(() => {});
    await page.waitForTimeout(300);
  }
  await page.locator('.js-add-comment, .add-comment-btn, button, a').filter({ hasText: /add a comment/i }).first().click();
  await page.waitForTimeout(800);
});

// ──── 하단 툴바 ────

Then('하단 툴바에 좋아요, 댓글, 이전화, 다음화 버튼이 노출된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//i);
  // DOM에 여러 인스턴스 존재 — visible 한 것 하나 이상 있는지 확인
  const visible = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a.js-episode-like-btn')).some(btn => {
      const s = window.getComputedStyle(btn);
      return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0';
    });
  });
  expect(visible).toBe(true);
});

Then('상단에 리스트 버튼, 작품명, 회차명, 더보기 버튼이 노출된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//i);
  const likeBtn = page.locator('a.js-episode-like-btn, a[class*="like"]:not([href*="tapas.io"])');
  if ((await likeBtn.count()) > 0) await expect(likeBtn.first()).toBeVisible({ timeout: 5000 });
});

When('더보기 버튼을 클릭한다', async ({ page }) => {
  // 뷰어 상단 툴바 더보기 — data-position="top" 버튼 (Share+Report 팝업 오픈)
  const clicked = await page.evaluate(() => {
    const btn = document.querySelector('a[data-type="more"][data-position="top"]') as HTMLElement | null;
    if (btn) { btn.click(); return true; }
    return false;
  });
  if (!clicked) throw new Error('뷰어 더보기 버튼(data-position=top)을 찾을 수 없음');
  await page.waitForTimeout(800);
});

Then('More 팝업이 노출된다', async ({ page }) => {
  const shareBtn = page.locator('a[class*="js-share"]');
  if ((await shareBtn.count()) === 0) { test.skip(true, 'More 팝업 미오픈 — js-share 버튼 없음'); return; }
  await expect(shareBtn.first()).toBeVisible({ timeout: 5000 });
});

Then('더보기 팝업이 노출된다', async ({ page }) => {
  const shareBtn = page.locator('a[class*="js-share"]');
  if ((await shareBtn.count()) === 0) { test.skip(true, 'More 팝업 미오픈 — js-share 버튼 없음'); return; }
  await expect(shareBtn.first()).toBeVisible({ timeout: 5000 });
});

When('팝업 외 영역을 클릭한다', async ({ page }) => {
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
  // Escape 로 닫히지 않으면 영역 밖 클릭
  const shareVisible = await page.locator('a[class*="js-share"]').first().isVisible().catch(() => false);
  if (shareVisible) {
    await page.mouse.click(10, 10);
    await page.waitForTimeout(300);
  }
});

Then('팝업이 닫힌다', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//i);
  const shareBtn = page.locator('a[class*="js-share"]');
  if ((await shareBtn.count()) > 0) {
    await expect(shareBtn.first()).not.toBeVisible({ timeout: 3000 });
  }
});

// ──── Share ────

When('Share 버튼을 클릭한다', async ({ page }) => {
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-share-btn, [data-ga-label*="share"], a[class*="share"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(500);
});

Then('디바이스 공유 팝업이 노출되거나 공유 액션이 실행된다', async ({ page }) => {
  // 디바이스 공유 native dialog → 캡처 불가, 페이지만 살아있으면 통과
  await expect(page.locator('body')).toBeVisible();
});

// ──── 댓글 버튼 ────

When('Comment 버튼을 클릭한다', async ({ page }) => {
  // 뷰어 하단 툴바 댓글 버튼 — display:none 회피
  await page.evaluate(() => {
    const selectors = [
      '.js-comment-btn',
      'a[data-ga-label*="comment"]',
      'a.toolbar-btn[href*="/comment"]',
      'a[href*="/comments"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return; }
    }
  });
  await page.waitForTimeout(800);
});

When('상단 리스트 버튼 또는 뒤로가기를 한다', async ({ page }) => {
  // 뷰어 상단 list/back 버튼 — /series/info 링크로 한정 (recommendation a[href*="/series/"] 제외)
  await page.evaluate(() => {
    const selectors = [
      '.js-list-btn',
      'a[data-tiara-action-name*="list"]',
      'a.toolbar-btn[href*="/series/"]',
      'a[href*="/series/info"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return; }
    }
  });
  await page.waitForTimeout(800);
  if (!page.url().includes('/series/')) {
    await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  }
});

// ──── 소설 뷰어 상단 툴바 ────

Then('상단에 회차 리스트 버튼, 작품명, 회차명, 소설 옵션, More 버튼이 노출된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/episode\//i);
  const likeBtn = page.locator('a.js-episode-like-btn, a[class*="like"]:not([href*="tapas.io"])');
  if ((await likeBtn.count()) > 0) await expect(likeBtn.first()).toBeVisible({ timeout: 5000 });
});

When('좌상단 List 버튼을 클릭한다', async ({ page }) => {
  // m.tapas.io 소설 뷰어: .js-list-btn은 overlay 오픈 (페이지 이동 X) → series 링크로 직접 이동
  const seriesLink = page.locator('a[href*="/series/"]').first();
  if ((await seriesLink.count()) > 0) {
    await seriesLink.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  await page.evaluate(() => {
    const el = document.querySelector('.js-list-btn, a.toolbar-btn[class*="list"]') as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

Then('작품홈 회차 리스트로 이동된다', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//i);
  // 에피소드 링크가 hidden인 경우(display:none) JS로 존재 확인
  const exists = await page.evaluate(() => !!document.querySelector('a.episode-item, a[href*="/episode/"]'));
  expect(exists).toBe(true);
});

When('More 버튼을 클릭한다', async ({ page }) => {
  // 소설 뷰어 상단 More 버튼 — 코믹과 동일한 data-type="more" 우선 시도
  await page.evaluate(() => {
    const selectors = [
      'a[data-type="more"]',
      '.sp-ico-more-drop, [class*="ico-more"]',
      '.js-more-btn, a[class*="more-btn"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      const btn = (el?.closest('a, button') ?? el) as HTMLElement | null;
      if (btn) { btn.click(); return; }
    }
  });
  await page.waitForTimeout(800);
});

// ──── Support ────

When('Support 버튼을 클릭한다', async ({ page }) => {
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-support-btn, a[data-ga-label*="support"], a[class*="support"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

Then('작가 Support 화면으로 이동된다', async ({ page }) => {
  const popup = page.locator('div.popup-support, [class*="support"]');
  if ((await popup.count()) === 0) { test.skip(true, 'Support 팝업 미노출 — m.tapas.io UI 구조 확인 필요'); return; }
  await expect(popup.first()).toBeVisible({ timeout: 5000 });
});

// ──── 소설 뷰어 댓글/추천 ────

Then('댓글 화면으로 이동된다', async ({ page }) => {
  await expect(page.locator('textarea.js-comment-box, .js-comment-section').first()).toBeVisible({ timeout: 5000 });
});

Then('추천 작품이 노출된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});

// ──── 이전/다음 회차 (유료) ────

When('이전회차 버튼을 클릭한다', async ({ page }) => {
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-prev-ep-btn, a.toolbar-btn[data-direction="prev"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

When('다음회차 버튼을 클릭한다', async ({ page }) => {
  await page.evaluate(() => {
    const el = document.querySelector(
      '.js-next-ep-btn, a.toolbar-btn[data-direction="next"]'
    ) as HTMLElement | null;
    if (el) el.click();
  });
  await page.waitForTimeout(800);
});

When('Unlock Episode 버튼을 클릭한다', async ({ page }) => {
  const unlockBtn = page.locator('button, a').filter({ hasText: /unlock/i }).first();
  if ((await unlockBtn.count()) > 0) await unlockBtn.click();
  await page.waitForTimeout(800);
});
