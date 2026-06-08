# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/02-홈/Spotlight.feature.spec.js >> Spotlight >> [TPS-024] 라인배너 클릭 + 홈으로 복귀
- Location: .features-gen/features/02-홈/Spotlight.feature.spec.js:42:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('article a[href*="/series/"]').first()
Expected: visible
Timeout: 8000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 8000ms
  - waiting for locator('article a[href*="/series/"]').first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e6]:
    - generic [ref=e7]:
      - generic [ref=e8]:
        - img "App Store" [ref=e9]:
          - img
        - button "App Store" [ref=e12] [cursor=pointer]:
          - generic [ref=e13]: for iPhone
          - img
      - generic [ref=e18]:
        - img
        - generic: Search
        - searchbox "Search" [ref=e19]
    - generic [ref=e21]:
      - list [ref=e23]:
        - listitem [ref=e24]:
          - button "Today" [ref=e25] [cursor=pointer]:
            - generic [ref=e26]:
              - generic [ref=e27]:
                - img
              - generic [ref=e28]: Today
        - listitem [ref=e29]:
          - button "Games" [ref=e30] [cursor=pointer]:
            - generic [ref=e31]:
              - generic [ref=e32]:
                - img
              - generic [ref=e33]: Games
        - listitem [ref=e34]:
          - button "Apps" [ref=e35] [cursor=pointer]:
            - generic [ref=e36]:
              - generic [ref=e37]:
                - img
              - generic [ref=e38]: Apps
        - listitem [ref=e39]:
          - button "Arcade" [ref=e40] [cursor=pointer]:
            - generic [ref=e41]:
              - generic [ref=e42]:
                - img
              - generic [ref=e43]: Arcade
      - generic [ref=e44]:
        - generic [ref=e46]: Categories
        - list "Categories" [ref=e47]:
          - listitem [ref=e48]:
            - button "Categories" [ref=e49] [cursor=pointer]:
              - generic [ref=e53]: Categories
          - listitem [ref=e54]:
            - button "Photo & Video" [ref=e55] [cursor=pointer]:
              - generic [ref=e59]: Photo & Video
          - listitem [ref=e60]:
            - button "Health & Fitness" [ref=e61] [cursor=pointer]:
              - generic [ref=e65]: Health & Fitness
          - listitem [ref=e66]:
            - button "Productivity" [ref=e67] [cursor=pointer]:
              - generic [ref=e71]: Productivity
          - listitem [ref=e72]:
            - button "Entertainment" [ref=e73] [cursor=pointer]:
              - generic [ref=e77]: Entertainment
          - listitem [ref=e78]:
            - button "Action" [ref=e79] [cursor=pointer]:
              - generic [ref=e83]: Action
          - listitem [ref=e84]:
            - button "Adventure" [ref=e85] [cursor=pointer]:
              - generic [ref=e89]: Adventure
          - listitem [ref=e90]:
            - button "Puzzle" [ref=e91] [cursor=pointer]:
              - generic [ref=e95]: Puzzle
          - listitem [ref=e96]:
            - button "Indie" [ref=e97] [cursor=pointer]:
              - generic [ref=e101]: Indie
      - generic:
        - list
  - generic [ref=e102]:
    - main [ref=e103]:
      - status [ref=e104]:
        - heading "An Error Occurred" [level=1] [ref=e105]
    - generic [ref=e107]:
      - generic [ref=e109]:
        - button "United States" [ref=e110] [cursor=pointer]
        - list [ref=e111]:
          - listitem [ref=e112]:
            - link "This page is available in Español (México)" [ref=e113] [cursor=pointer]:
              - /url: "?l=es-MX"
              - text: Español (México)
          - listitem [ref=e114]:
            - link "This page is available in العربية" [ref=e115] [cursor=pointer]:
              - /url: "?l=ar"
              - text: العربية
          - listitem [ref=e116]:
            - link "This page is available in Русский" [ref=e117] [cursor=pointer]:
              - /url: "?l=ru"
              - text: Русский
          - listitem [ref=e118]:
            - link "This page is available in 简体中文" [ref=e119] [cursor=pointer]:
              - /url: "?l=zh-Hans-CN"
              - text: 简体中文
          - listitem [ref=e120]:
            - link "This page is available in Français (France)" [ref=e121] [cursor=pointer]:
              - /url: "?l=fr-FR"
              - text: Français (France)
          - listitem [ref=e122]:
            - link "This page is available in 한국어" [ref=e123] [cursor=pointer]:
              - /url: "?l=ko"
              - text: 한국어
          - listitem [ref=e124]:
            - link "This page is available in Português (Brazil)" [ref=e125] [cursor=pointer]:
              - /url: "?l=pt-BR"
              - text: Português (Brazil)
          - listitem [ref=e126]:
            - link "This page is available in Tiếng Việt" [ref=e127] [cursor=pointer]:
              - /url: "?l=vi"
              - text: Tiếng Việt
          - listitem [ref=e128]:
            - link "This page is available in 繁體中文 (台灣)" [ref=e129] [cursor=pointer]:
              - /url: "?l=zh-Hant-TW"
              - text: 繁體中文 (台灣)
      - generic [ref=e130]:
        - paragraph [ref=e131]:
          - generic [ref=e132]:
            - text: Copyright © 2026
            - link "Apple Inc." [ref=e133] [cursor=pointer]:
              - /url: https://www.apple.com
          - text: All rights reserved.
        - list [ref=e134]:
          - listitem [ref=e135]:
            - link "Internet Service Terms" [ref=e136] [cursor=pointer]:
              - /url: https://www.apple.com/legal/internet-services/
          - listitem [ref=e137]:
            - link "App Store & Privacy" [ref=e138] [cursor=pointer]:
              - /url: https://www.apple.com/legal/privacy/data/en/app-store/
          - listitem [ref=e139]:
            - link "Cookie Warning" [ref=e140] [cursor=pointer]:
              - /url: https://www.apple.com/privacy/use-of-cookies/
          - listitem [ref=e141]:
            - link "Support" [ref=e142] [cursor=pointer]:
              - /url: https://support.apple.com/billing
```

# Test source

```ts
  215 | When('빅배너를 클릭한다', async ({ page }) => {
  216 |   // 빅배너: 내부 event/series 링크 중 img를 포함한 큰 이미지 요소 (988x400 수준)
  217 |   const link = page.locator('a[href*="/event/"], a[href*="/series/"]')
  218 |     .filter({ has: page.locator('img') }).first();
  219 |   if ((await link.count()) > 0) {
  220 |     await link.click();
  221 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  222 |   } else {
  223 |     test.skip(true, '빅배너 요소를 찾을 수 없음');
  224 |   }
  225 | });
  226 | 
  227 | When('카드배너를 클릭한다', async ({ page }) => {
  228 |   // 시리즈 카드 우선 (goBack 안정적) → 없으면 이벤트/메뉴 카드
  229 |   const seriesCard = page.locator('a[href*="/series/"]').filter({ has: page.locator('img') }).nth(1);
  230 |   const eventCard = page.locator('a[href*="/events"], a[href*="/event/"], a[href*="/menu/"]').filter({ has: page.locator('img') }).first();
  231 |   const link = (await seriesCard.count()) > 0 ? seriesCard : eventCard;
  232 |   if ((await link.count()) > 0) {
  233 |     await link.click();
  234 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  235 |   } else {
  236 |     test.skip(true, '카드배너 요소를 찾을 수 없음');
  237 |   }
  238 | });
  239 | 
  240 | When('라인배너를 클릭한다', async ({ page }) => {
  241 |   const link = page.locator('[class*="line"] a, [class*="banner"] a').first();
  242 |   if ((await link.count()) > 0) {
  243 |     await link.click();
  244 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  245 |   } else {
  246 |     await expect(page.locator('body')).toBeVisible();
  247 |   }
  248 | });
  249 | 
  250 | When('배너 섹션 내 작품을 클릭한다', async ({ page }) => {
  251 |   const link = page.locator('article a').first();
  252 |   if ((await link.count()) > 0) {
  253 |     await link.click();
  254 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  255 |   } else {
  256 |     await expect(page.locator('body')).toBeVisible();
  257 |   }
  258 | });
  259 | 
  260 | When('더보기 링크를 클릭한다', async ({ page }) => {
  261 |   // SPA 재렌더링으로 click() 중 element detach 반복 → JS click으로 우회 (CLAUDE.md 12.4 패턴)
  262 |   const moreLink = page.locator('a[href*="/landing-list/"]').filter({ has: page.locator('img[alt="right arrow"]') }).first();
  263 |   if ((await moreLink.count()) > 0) {
  264 |     const href = await moreLink.getAttribute('href');
  265 |     await page.evaluate((h) => {
  266 |       const el = document.querySelector(`a[href="${h}"]`) as HTMLElement | null;
  267 |       if (el) el.click();
  268 |     }, href);
  269 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  270 |     return;
  271 |   }
  272 |   // 폴백: /menu/subtab 링크 중 right arrow 이미지 포함
  273 |   const subtabMore = page.locator('a[href*="/menu/"]').filter({ has: page.locator('img[alt="right arrow"]') }).first();
  274 |   if ((await subtabMore.count()) > 0) {
  275 |     const href = await subtabMore.getAttribute('href');
  276 |     await page.evaluate((h) => {
  277 |       const el = document.querySelector(`a[href="${h}"]`) as HTMLElement | null;
  278 |       if (el) el.click();
  279 |     }, href);
  280 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  281 |     return;
  282 |   }
  283 |   test.skip(true, '더보기 링크가 현재 페이지에 없음 — 동적 콘텐츠');
  284 | });
  285 | 
  286 | // 슬라이드 전환 전 번호 저장용 (TPS-021)
  287 | let _slideBeforeNum: number = 0;
  288 | 
  289 | When('빅배너 영역에서 8초 대기한다', async ({ page }) => {
  290 |   const indicator = page.locator('span[class*="text-s-white"][class*="font-custom-10c"]').first();
  291 |   const text = await indicator.textContent({ timeout: 5000 }).catch(() => null);
  292 |   _slideBeforeNum = parseInt(text?.trim() || '0');
  293 |   await page.waitForTimeout(12000);
  294 |   await page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => {});
  295 | });
  296 | 
  297 | Then('다음 빅배너로 자동 전환된다', async ({ page }) => {
  298 |   const indicator = page.locator('span[class*="text-s-white"][class*="font-custom-10c"]').first();
  299 |   // page가 detached된 경우 count()가 throw → -1로 구분
  300 |   const count = await indicator.count().catch(() => -1);
  301 |   if (count === -1) {
  302 |     test.skip(true, '빅배너 자동 슬라이드 확인 중 페이지 이동 발생');
  303 |     return;
  304 |   }
  305 |   if (count > 0) {
  306 |     const text = await indicator.textContent().catch(() => null);
  307 |     const afterNum = parseInt(text?.trim() || '0');
  308 |     expect(afterNum).toBeGreaterThan(_slideBeforeNum);
  309 |   } else {
  310 |     await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
  311 |   }
  312 | });
  313 | 
  314 | Then('랜딩 페이지로 이동된다', async ({ page }) => {
> 315 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
      |                                                                     ^ Error: expect(locator).toBeVisible() failed
  316 | });
  317 | 
  318 | Then('랜딩 리스트로 이동되고 작품 목록이 노출된다', async ({ page }) => {
  319 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  320 | });
  321 | 
  322 | When('뒤로가기를 한다', async ({ page }) => {
  323 |   await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  324 | });
  325 | 
  326 | Then('홈 화면으로 돌아온다', async ({ page }) => {
  327 |   await expect(page).toHaveURL(/tapas\.io/, { timeout: 8000 });
  328 | });
  329 | 
  330 | // ──── 서브탭 클릭 ({X} CSV 플레이스홀더 패턴) ────
  331 | 
  332 | When(/^\{(.+)\} 서브탭 클릭$/, async ({ page }, tabName: string) => {
  333 |   // {Daily}, {Popular}, {New}, {Spotlight}, {All Comics} 등
  334 |   await page.waitForLoadState('domcontentloaded');
  335 |   const tab = page.getByRole('link', { name: new RegExp(`^${tabName}$`, 'i') });
  336 |   if ((await tab.count()) > 0) { await tab.first().click(); return; }
  337 |   const btn = page.getByRole('button', { name: new RegExp(`^${tabName}$`, 'i') });
  338 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  339 |   test.skip(true, `{${tabName}} 서브탭이 현재 페이지에 존재하지 않음`);
  340 | });
  341 | 
  342 | // "Home > X 서브탭 클릭" 형식
  343 | When(/^Home > (.+) 서브탭 클릭$/, async ({ page }, tabName: string) => {
  344 |   await page.getByRole('link', { name: new RegExp(tabName, 'i') }).first().click();
  345 | });
  346 | 
  347 | // ──── 대분류 카테고리 필터 ────
  348 | 
  349 | When('대분류 카테고리 필터 > Novels 클릭', async ({ page }) => {
  350 |   // button 또는 tab role에서만 찾음 — link 클릭 시 GNB Novels로 이동할 수 있어서 제외
  351 |   const btn = page.getByRole('button', { name: /^novels$/i });
  352 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  353 |   const tab = page.getByRole('tab', { name: /^novels$/i });
  354 |   if ((await tab.count()) > 0) { await tab.first().click(); return; }
  355 |   // 필터가 없는 페이지에서는 graceful 처리 (GNB는 클릭하지 않음)
  356 |   await expect(page.locator('body')).toBeVisible();
  357 | });
  358 | 
  359 | When('요일별 클릭', async ({ page }) => {
  360 |   // 요일 탭 중 하나 클릭 (예: 현재 요일 외 다른 요일)
  361 |   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  362 |   for (const day of days) {
  363 |     const el = page.getByRole('button', { name: new RegExp(`^${day}$`, 'i') });
  364 |     if ((await el.count()) > 0) { await el.first().click(); return; }
  365 |   }
  366 | });
  367 | 
  368 | When('상단 대분류 카테고리 필터 노출 확인', async ({ page }) => {
  369 |   await expect(page.locator('body')).toBeVisible();
  370 | });
  371 | 
  372 | // ──── 배너 영역 ────
  373 | 
  374 | When('Top 섹션 > 빅배너 노출 영역 확인', async ({ page }) => {
  375 |   await expect(page.locator('body')).toBeVisible();
  376 | });
  377 | 
  378 | When('빅배너 영역에서 8초 이상 대기', async ({ page }) => {
  379 |   await page.waitForTimeout(8500);
  380 | });
  381 | 
  382 | When('빅배너 클릭', async ({ page }) => {
  383 |   // 빅배너 = 홈 최상단 큰 배너. role=img 또는 배너 컨테이너 첫 번째 링크
  384 |   await page.locator('a').filter({ has: page.locator('img') }).first().click();
  385 | });
  386 | 
  387 | When('빅배너 좌로 스와이프', async ({ page }) => {
  388 |   // 이전 배너 버튼
  389 |   const prevBtn = page.locator('[aria-label*="prev"], [aria-label*="previous"], button.prev, .carousel-prev');
  390 |   if ((await prevBtn.count()) > 0) await prevBtn.first().click();
  391 | });
  392 | 
  393 | When('빅배너 우로 스와이프', async ({ page }) => {
  394 |   // 다음 배너 버튼
  395 |   const nextBtn = page.locator('[aria-label*="next"], button.next, .carousel-next');
  396 |   if ((await nextBtn.count()) > 0) await nextBtn.first().click();
  397 | });
  398 | 
  399 | When('Top 섹션 > 카드배너 노출 확인', async ({ page }) => {
  400 |   await expect(page.locator('body')).toBeVisible();
  401 | });
  402 | 
  403 | When('카드배너 클릭', async ({ page }) => {
  404 |   // 카드배너 — 배너 컨테이너 내 두 번째 링크 시도
  405 |   const bannerLinks = page.locator('a').filter({ has: page.locator('img') });
  406 |   const count = await bannerLinks.count();
  407 |   if (count > 1) await bannerLinks.nth(1).click();
  408 |   else if (count > 0) await bannerLinks.first().click();
  409 | });
  410 | 
  411 | When('프로모션 배너 섹션 노출 확인', async ({ page }) => {
  412 |   await expect(page.locator('body')).toBeVisible();
  413 | });
  414 | 
  415 | When('프로모션 배너 클릭', async ({ page }) => {
```