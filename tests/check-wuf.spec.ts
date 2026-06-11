import { test } from '@playwright/test';

test('뷰어 하단 Add a comment 버튼 조사', async ({ page }) => {
  await page.goto('/episode/3125421', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});

  // 페이지 맨 아래로 스크롤
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);

  // 뷰어 하단 Comments 영역 버튼 탐색
  const btns = await page.evaluate(() => {
    const els = document.querySelectorAll('a, button');
    return Array.from(els)
      .filter(el => {
        const t = el.textContent?.toLowerCase() ?? '';
        const c = el.className?.toString() ?? '';
        return t.includes('comment') || c.includes('comment') || c.includes('add');
      })
      .map(el => ({
        tag: el.tagName,
        class: el.className?.toString().substring(0, 100),
        text: el.textContent?.trim().substring(0, 30),
        visible: (el as HTMLElement).offsetParent !== null,
      }));
  });
  console.log('comment buttons:', JSON.stringify(btns, null, 2));

  // 뷰어엔드 영역 전용
  const endSection = page.locator('.viewer-section--end, .viewer-end, [class*="viewer-end"]');
  console.log('viewer-end count:', await endSection.count());

  const endBtns = await page.locator('.viewer-section--end a, .viewer-section--end button').all();
  console.log('viewer-end links/btns count:', endBtns.length);
  for (const btn of endBtns.slice(0, 15)) {
    console.log(' -', await btn.getAttribute('class'), '|', await btn.getAttribute('href'), '|', (await btn.textContent())?.trim().substring(0, 30));
  }
});
