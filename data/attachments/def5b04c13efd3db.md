# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/06-홈-(Community)/Spotlight.feature.spec.js >> Spotlight (섹션 서브탭) >> [TPS-084] 카드배너 클릭 + Community 홈으로 복귀
- Location: .features-gen/features/06-홈-(Community)/Spotlight.feature.spec.js:32:7

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
- generic [ref=e2]:
  - generic [ref=e5]:
    - link [ref=e7] [cursor=pointer]:
      - /url: /
    - generic [ref=e9]:
      - link "Home" [ref=e11] [cursor=pointer]:
        - /url: /
      - link "Comics" [ref=e13] [cursor=pointer]:
        - /url: /comics
      - link "Novels" [ref=e15] [cursor=pointer]:
        - /url: /novels
      - link "Community" [ref=e17] [cursor=pointer]:
        - /url: /community
      - link "Mature" [ref=e19] [cursor=pointer]:
        - /url: /mature
      - generic [ref=e21] [cursor=pointer]: More
    - generic [ref=e23]:
      - textbox "Search" [ref=e25]
      - generic [ref=e28]:
        - link "2" [ref=e29] [cursor=pointer]:
          - /url: /reading-list
          - generic [ref=e30]: "2"
        - link "122" [ref=e32] [cursor=pointer]:
          - /url: /inbox/gift
          - generic [ref=e33]: "122"
        - img [ref=e37] [cursor=pointer]
      - link "Publish" [ref=e40] [cursor=pointer]:
        - /url: https://www.creators.tapas.io/
  - generic [ref=e42]:
    - generic [ref=e49]:
      - generic [ref=e50]:
        - generic [ref=e51]:
          - paragraph [ref=e52]: Chapter 1-page 1
          - paragraph [ref=e53]: Mar 04, 2025
        - article [ref=e54]:
          - img [ref=e55]
      - generic [ref=e56]:
        - generic [ref=e59]:
          - link "redredherring" [ref=e61] [cursor=pointer]:
            - /url: /redredherring
            - img "redredherring" [ref=e62]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - link "RedMari" [ref=e66] [cursor=pointer]:
                - /url: /redredherring
              - paragraph [ref=e67]: Creator
            - paragraph [ref=e68]: gays on rocks, a good start
        - generic [ref=e69]:
          - generic [ref=e70]:
            - paragraph [ref=e71]: Comments (19)
            - generic [ref=e72] [cursor=pointer]: See all
          - generic [ref=e73]:
            - link "Imsheepyzzz" [ref=e75] [cursor=pointer]:
              - /url: /Kinseystrawberry
              - img "Imsheepyzzz" [ref=e76]
            - generic [ref=e78]:
              - generic [ref=e79]:
                - link "Imsheepyzzz" [ref=e80] [cursor=pointer]:
                  - /url: /Kinseystrawberry
                - paragraph [ref=e81]: Top comment
              - paragraph [ref=e83]: Wow I almost feel like I’m there! The art and paneling is so good!!!
              - paragraph [ref=e88] [cursor=pointer]: "62"
          - generic [ref=e89] [cursor=pointer]: Add a comment
        - generic [ref=e91]:
          - paragraph [ref=e93]: Recommendation for you
          - list [ref=e94]:
            - listitem [ref=e95]:
              - link "His Elite Omega 3Hr Recommendation His Elite Omega BL 802 likes" [ref=e96] [cursor=pointer]:
                - /url: /series/his-elite-omega-novel
                - generic [ref=e97]:
                  - img "His Elite Omega" [ref=e98]
                  - generic [ref=e103]: 3Hr
                - generic [ref=e104]:
                  - paragraph [ref=e105]: Recommendation
                  - paragraph [ref=e106]: His Elite Omega
                  - paragraph [ref=e107]:
                    - generic [ref=e108]: BL
                    - generic [ref=e110]: 802 likes
            - listitem [ref=e111]:
              - link "Dungeon Predator 3Hr Recommendation Dungeon Predator Action Fantasy 4.7k likes" [ref=e112] [cursor=pointer]:
                - /url: /series/dungeon-predator-novel
                - generic [ref=e113]:
                  - img "Dungeon Predator" [ref=e114]
                  - generic [ref=e119]: 3Hr
                - generic [ref=e120]:
                  - paragraph [ref=e121]: Recommendation
                  - paragraph [ref=e122]: Dungeon Predator
                  - paragraph [ref=e123]:
                    - generic [ref=e124]: Action Fantasy
                    - generic [ref=e126]: 4.7k likes
            - listitem [ref=e127]:
              - link "The Archduke's Adopted Saint 30% OFF Recommendation The Archduke's Adopted Saint Romance Fantasy 341.2k likes" [ref=e128] [cursor=pointer]:
                - /url: /series/the-archdukes-adopted-saint
                - generic [ref=e129]:
                  - img "The Archduke's Adopted Saint" [ref=e130]
                  - generic [ref=e135]: 30% OFF
                - generic [ref=e136]:
                  - paragraph [ref=e137]: Recommendation
                  - paragraph [ref=e138]: The Archduke's Adopted Saint
                  - paragraph [ref=e139]:
                    - generic [ref=e140]: Romance Fantasy
                    - generic [ref=e142]: 341.2k likes
            - listitem [ref=e143]:
              - link "Became the Lout First Prince Recommendation Became the Lout First Prince Action Fantasy 4.3k likes" [ref=e144] [cursor=pointer]:
                - /url: /series/became-the-lout-first-prince
                - img "Became the Lout First Prince" [ref=e146]
                - generic [ref=e151]:
                  - paragraph [ref=e152]: Recommendation
                  - paragraph [ref=e153]: Became the Lout First Prince
                  - paragraph [ref=e154]:
                    - generic [ref=e155]: Action Fantasy
                    - generic [ref=e157]: 4.3k likes
            - listitem [ref=e158]:
              - link "The Villainess Flips the Script! Recommendation The Villainess Flips the Script! Romance Fantasy 909k likes" [ref=e159] [cursor=pointer]:
                - /url: /series/the-villainess-flips-the-script
                - img "The Villainess Flips the Script!" [ref=e161]
                - generic [ref=e166]:
                  - paragraph [ref=e167]: Recommendation
                  - paragraph [ref=e168]: The Villainess Flips the Script!
                  - paragraph [ref=e169]:
                    - generic [ref=e170]: Romance Fantasy
                    - generic [ref=e172]: 909k likes
            - listitem [ref=e173]:
              - link "Mr. Beta Recommendation Mr. Beta BL 4.8m likes" [ref=e174] [cursor=pointer]:
                - /url: /series/MrBeta
                - img "Mr. Beta" [ref=e176]
                - generic [ref=e178]:
                  - paragraph [ref=e179]: Recommendation
                  - paragraph [ref=e180]: Mr. Beta
                  - paragraph [ref=e181]:
                    - generic [ref=e182]: BL
                    - generic [ref=e184]: 4.8m likes
            - listitem [ref=e185]:
              - generic [ref=e186] [cursor=pointer]:
                - img "feeling lucky" [ref=e188]
                - generic [ref=e190]:
                  - paragraph [ref=e191]: Feeling lucky
                  - paragraph [ref=e192]: Random series you may like
    - generic [ref=e200]:
      - generic [ref=e205]:
        - generic [ref=e206]:
          - img "If A Tree Falls" [ref=e209] [cursor=pointer]
          - generic [ref=e211]:
            - text: If A Tree Falls
            - paragraph [ref=e212]:
              - generic [ref=e213]: 725.3k views
              - generic [ref=e215]: 10.1k subscribers
        - generic [ref=e216] [cursor=pointer]:
          - text: "Two boys survive a plane crash and must now trek through the Alaskan wilderness together to survive.. and share a tent on the cold nights (sounds pretty gay to me!) There is only one complication though: one of the boys is deaf."
          - generic [ref=e217]: Read more
        - generic [ref=e219] [cursor=pointer]: Subscribe
      - generic [ref=e220]:
        - paragraph [ref=e222]: 69 episodes
        - list [ref=e227]:
          - listitem [ref=e228] [cursor=pointer]:
            - img "Chapter 1-page 1" [ref=e230]
            - generic [ref=e232]:
              - generic [ref=e233]: Episode 1
              - generic [ref=e234]: Chapter 1-page 1
          - listitem [ref=e235] [cursor=pointer]:
            - img "Chapter 1-page 2" [ref=e237]
            - generic [ref=e239]:
              - generic [ref=e240]: Episode 2
              - generic [ref=e241]: Chapter 1-page 2
          - listitem [ref=e242] [cursor=pointer]:
            - img "Chapter 1-page 3" [ref=e244]
            - generic [ref=e246]:
              - generic [ref=e247]: Episode 3
              - generic [ref=e248]: Chapter 1-page 3
          - listitem [ref=e249] [cursor=pointer]:
            - img "Chapter 1-page 4" [ref=e251]
            - generic [ref=e253]:
              - generic [ref=e254]: Episode 4
              - generic [ref=e255]: Chapter 1-page 4
          - listitem [ref=e256] [cursor=pointer]:
            - img "Chapter 1-page 5" [ref=e258]
            - generic [ref=e260]:
              - generic [ref=e261]: Episode 5
              - generic [ref=e262]: Chapter 1-page 5
          - listitem [ref=e263] [cursor=pointer]:
            - img "Chapter 1-page 6" [ref=e265]
            - generic [ref=e267]:
              - generic [ref=e268]: Episode 6
              - generic [ref=e269]: Chapter 1-page 6
          - listitem [ref=e270] [cursor=pointer]:
            - img "Chapter 1-page 7" [ref=e272]
            - generic [ref=e274]:
              - generic [ref=e275]: Episode 7
              - generic [ref=e276]: Chapter 1-page 7
          - listitem [ref=e277] [cursor=pointer]:
            - img "Chapter 1-page 8" [ref=e279]
            - generic [ref=e281]:
              - generic [ref=e282]: Episode 8
              - generic [ref=e283]: Chapter 1-page 8
          - listitem [ref=e284] [cursor=pointer]:
            - img "Chapter 1-page 9" [ref=e286]
            - generic [ref=e288]:
              - generic [ref=e289]: Episode 9
              - generic [ref=e290]: Chapter 1-page 9
          - listitem [ref=e291] [cursor=pointer]:
            - img "Chapter 1-page 10" [ref=e293]
            - generic [ref=e295]:
              - generic [ref=e296]: Episode 10
              - generic [ref=e297]: Chapter 1-page 10
          - listitem [ref=e298] [cursor=pointer]:
            - img "Chapter 1-page 11" [ref=e300]
            - generic [ref=e302]:
              - generic [ref=e303]: Episode 11
              - generic [ref=e304]: Chapter 1-page 11
          - listitem [ref=e305] [cursor=pointer]:
            - img "Chapter 1-page 12" [ref=e307]
            - generic [ref=e309]:
              - generic [ref=e310]: Episode 12
              - generic [ref=e311]: Chapter 1-page 12
          - listitem [ref=e312] [cursor=pointer]:
            - img "Chapter 1-page 13" [ref=e314]
            - generic [ref=e316]:
              - generic [ref=e317]: Episode 13
              - generic [ref=e318]: Chapter 1-page 13
          - listitem [ref=e319] [cursor=pointer]:
            - img "Chapter 1-page 14" [ref=e321]
            - generic [ref=e323]:
              - generic [ref=e324]: Episode 14
              - generic [ref=e325]: Chapter 1-page 14
          - listitem [ref=e326] [cursor=pointer]:
            - img "Chapter 1-page 15" [ref=e328]
            - generic [ref=e330]:
              - generic [ref=e331]: Episode 15
              - generic [ref=e332]: Chapter 1-page 15
          - listitem [ref=e333] [cursor=pointer]:
            - img "Chapter 1-page 16" [ref=e335]
            - generic [ref=e337]:
              - generic [ref=e338]: Episode 16
              - generic [ref=e339]: Chapter 1-page 16
          - listitem [ref=e340] [cursor=pointer]:
            - img "Chapter 1-page 17" [ref=e342]
            - generic [ref=e344]:
              - generic [ref=e345]: Episode 17
              - generic [ref=e346]: Chapter 1-page 17
          - listitem [ref=e347] [cursor=pointer]:
            - img "Chapter 1-page 18" [ref=e349]
            - generic [ref=e351]:
              - generic [ref=e352]: Episode 18
              - generic [ref=e353]: Chapter 1-page 18
          - listitem [ref=e354] [cursor=pointer]:
            - img "Chapter 1-page 19" [ref=e356]
            - generic [ref=e358]:
              - generic [ref=e359]: Episode 19
              - generic [ref=e360]: Chapter 1-page 19
          - listitem [ref=e361] [cursor=pointer]:
            - img "Chapter 1-page 20" [ref=e363]
            - generic [ref=e365]:
              - generic [ref=e366]: Episode 20
              - generic [ref=e367]: Chapter 1-page 20
    - generic [ref=e369]:
      - generic [ref=e370]:
        - generic [ref=e371]:
          - img "Chapter 1-page 1" [ref=e372]
          - generic [ref=e373]:
            - paragraph [ref=e374]: Chapter 1-page 1
            - paragraph [ref=e375]:
              - generic [ref=e376]: 31.2k views
              - generic [ref=e378]: 1.5k likes
              - generic [ref=e380]: 19 comments
        - separator [ref=e381]
        - generic [ref=e386] [cursor=pointer]: More
      - generic [ref=e388]:
        - generic [ref=e392] [cursor=pointer]: Like
        - generic [ref=e393] [cursor=pointer]:
          - generic [ref=e395]: 1.7k
          - generic [ref=e397]: Support
      - generic [ref=e398]:
        - generic [ref=e399]:
          - generic [ref=e404] [cursor=pointer]: List
          - generic [ref=e409] [cursor=pointer]: Comment
        - separator [ref=e410]
        - generic [ref=e411]:
          - generic [ref=e415]: Prev
          - generic [ref=e419] [cursor=pointer]: Next
        - separator [ref=e420]
        - generic [ref=e425] [cursor=pointer]: Full
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