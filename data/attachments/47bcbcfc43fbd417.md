# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/05-홈-(Mature)/Spotlight.feature.spec.js >> Spotlight (섹션 서브탭) >> [TPS-069] 빅배너 클릭 + Mature 홈으로 복귀
- Location: .features-gen/features/05-홈-(Mature)/Spotlight.feature.spec.js:41:7

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
        - link [ref=e29] [cursor=pointer]:
          - /url: /reading-list
        - link "117" [ref=e31] [cursor=pointer]:
          - /url: /inbox/gift
          - generic [ref=e32]: "117"
        - img [ref=e36] [cursor=pointer]
      - link "Publish" [ref=e39] [cursor=pointer]:
        - /url: https://www.creators.tapas.io/
  - generic [ref=e41]:
    - generic [ref=e45]:
      - generic [ref=e46]:
        - generic [ref=e47]:
          - paragraph [ref=e48]: Episode 3
          - paragraph [ref=e49]: Aug 04, 2025
        - article [ref=e50]:
          - img [ref=e51]
          - img [ref=e52]
          - img [ref=e53]
          - img [ref=e54]
          - img [ref=e55]
          - img [ref=e56]
          - img [ref=e57]
          - img [ref=e58]
          - img [ref=e59]
          - img [ref=e60]
          - img [ref=e61]
          - img [ref=e62]
          - img [ref=e63]
          - img [ref=e64]
          - img [ref=e65]
          - img [ref=e66]
          - img [ref=e67]
          - img [ref=e68]
          - img [ref=e69]
          - img [ref=e70]
          - img [ref=e71]
          - img [ref=e72]
          - img [ref=e73]
          - img [ref=e74]
          - img [ref=e75]
          - img [ref=e76]
          - img [ref=e77]
          - img [ref=e78]
          - img [ref=e79]
          - img [ref=e80]
          - img [ref=e81]
          - img [ref=e82]
          - img [ref=e83]
          - img [ref=e84]
          - img [ref=e85]
          - img [ref=e86]
          - img [ref=e87]
          - img [ref=e88]
          - img [ref=e89]
          - img [ref=e90]
          - img [ref=e91]
          - img [ref=e92]
          - img [ref=e93]
          - img [ref=e94]
          - img [ref=e95]
          - img [ref=e96]
          - img [ref=e97]
          - img [ref=e98]
          - img [ref=e99]
          - img [ref=e100]
          - img [ref=e101]
          - img [ref=e102]
          - img [ref=e103]
          - img [ref=e104]
          - img [ref=e105]
          - img [ref=e106]
          - img [ref=e107]
          - img [ref=e108]
          - img [ref=e109]
          - img [ref=e110]
          - img [ref=e111]
          - img [ref=e112]
          - img [ref=e113]
          - img [ref=e114]
          - img [ref=e115]
          - img [ref=e116]
          - img [ref=e117]
          - img [ref=e118]
          - img [ref=e119]
          - img [ref=e120]
          - img [ref=e121]
          - img [ref=e122]
          - img [ref=e123]
          - img [ref=e124]
          - img [ref=e125]
          - img [ref=e126]
          - img [ref=e127]
          - img [ref=e128]
          - img [ref=e129]
          - img [ref=e130]
          - img [ref=e131]
          - img [ref=e132]
          - img [ref=e133]
          - img [ref=e134]
          - img [ref=e135]
          - img [ref=e136]
          - img [ref=e137]
          - img [ref=e138]
          - img [ref=e139]
          - img [ref=e140]
          - img [ref=e141]
          - img [ref=e142]
          - img [ref=e143]
          - img [ref=e144]
          - img [ref=e145]
          - img [ref=e146]
          - img [ref=e147]
          - img [ref=e148]
          - img [ref=e149]
          - img [ref=e150]
          - img [ref=e151]
          - img [ref=e152]
          - img [ref=e153]
          - img [ref=e154]
          - img [ref=e155]
          - img [ref=e156]
          - img [ref=e157]
          - img [ref=e158]
          - img [ref=e159]
          - img [ref=e160]
          - img [ref=e161]
          - img [ref=e162]
          - img [ref=e163]
      - generic [ref=e164]:
        - generic [ref=e165]:
          - link "MoonSiHyun" [ref=e167] [cursor=pointer]:
            - /url: /MoonSiHyun
            - img "MoonSiHyun" [ref=e168]
          - generic [ref=e170]:
            - generic [ref=e171]:
              - link "Moon Sihyun" [ref=e172] [cursor=pointer]:
                - /url: /MoonSiHyun
              - paragraph [ref=e173]: Creator
            - paragraph
        - generic [ref=e174]:
          - generic [ref=e175]:
            - paragraph [ref=e176]: Comments (9)
            - generic [ref=e177] [cursor=pointer]: See all
          - generic [ref=e178]:
            - link "Lucky" [ref=e180] [cursor=pointer]:
              - /url: /sincilious
              - img "Lucky" [ref=e181]
            - generic [ref=e183]:
              - generic [ref=e184]:
                - link "Lucky" [ref=e185] [cursor=pointer]:
                  - /url: /sincilious
                - paragraph [ref=e186]: Top comment
              - paragraph [ref=e188]:
                - text: Yeah, she's definitely the Duke's daughter. Pink hair, seemingly extra privileges in the prison... But how could she end up there if her family is so powerful? Since it's described as villanous, surely the other members of the house have committed crimes worthy of this fancy prison hahaha
                - text: P.S. I haven't read the All-Ages ver., no spoilers please!
              - paragraph [ref=e193] [cursor=pointer]: "30"
          - generic [ref=e194] [cursor=pointer]: Add a comment
        - generic [ref=e196]:
          - paragraph [ref=e198]: Recommendation for you
          - list [ref=e199]:
            - listitem [ref=e200]:
              - link "Milk Attack! (Mature) Recommendation Milk Attack! (Mature) BL 1.4k likes" [ref=e201] [cursor=pointer]:
                - /url: /series/milk-attack-mature
                - img "Milk Attack! (Mature)" [ref=e203]
                - generic [ref=e207]:
                  - paragraph [ref=e208]: Recommendation
                  - paragraph [ref=e209]: Milk Attack! (Mature)
                  - paragraph [ref=e210]:
                    - generic [ref=e211]: BL
                    - generic [ref=e213]: 1.4k likes
            - listitem [ref=e214]:
              - link "The Glamorous Life of the Fake Mistress (Mature) Recommendation The Glamorous Life of the Fake Mistress (Mature) Romance Fantasy 10.9k likes" [ref=e215] [cursor=pointer]:
                - /url: /series/the-glamorous-life-of-the-fake-mistress-mature
                - img "The Glamorous Life of the Fake Mistress (Mature)" [ref=e217]
                - generic [ref=e221]:
                  - paragraph [ref=e222]: Recommendation
                  - paragraph [ref=e223]: The Glamorous Life of the Fake Mistress (Mature)
                  - paragraph [ref=e224]:
                    - generic [ref=e225]: Romance Fantasy
                    - generic [ref=e227]: 10.9k likes
            - listitem [ref=e228]:
              - link "Holesome Romance (Mature) Recommendation Holesome Romance (Mature) BL 828 likes" [ref=e229] [cursor=pointer]:
                - /url: /series/holesome-romance-mature
                - img "Holesome Romance (Mature)" [ref=e231]
                - generic [ref=e235]:
                  - paragraph [ref=e236]: Recommendation
                  - paragraph [ref=e237]: Holesome Romance (Mature)
                  - paragraph [ref=e238]:
                    - generic [ref=e239]: BL
                    - generic [ref=e241]: 828 likes
            - listitem [ref=e242]:
              - 'link "The Leaguemaster''s Wife: My Villainous Husband Came Back to Life (Mature) Recommendation The Leaguemaster''s Wife: My Villainous Husband Came Back to Life (Mature) Romance Fantasy 1.2k likes" [ref=e243] [cursor=pointer]':
                - /url: /series/the-leaguemasters-wife-my-villainous-husband-came-back-to-life-mature
                - 'img "The Leaguemaster''s Wife: My Villainous Husband Came Back to Life (Mature)" [ref=e245]'
                - generic [ref=e249]:
                  - paragraph [ref=e250]: Recommendation
                  - paragraph [ref=e251]: "The Leaguemaster's Wife: My Villainous Husband Came Back to Life (Mature)"
                  - paragraph [ref=e252]:
                    - generic [ref=e253]: Romance Fantasy
                    - generic [ref=e255]: 1.2k likes
            - listitem [ref=e256]:
              - link "Tentacles Appeared! (Mature) Recommendation Tentacles Appeared! (Mature) BL 3.5k likes" [ref=e257] [cursor=pointer]:
                - /url: /series/tentacles-appeared-mature
                - img "Tentacles Appeared! (Mature)" [ref=e259]
                - generic [ref=e263]:
                  - paragraph [ref=e264]: Recommendation
                  - paragraph [ref=e265]: Tentacles Appeared! (Mature)
                  - paragraph [ref=e266]:
                    - generic [ref=e267]: BL
                    - generic [ref=e269]: 3.5k likes
            - listitem [ref=e270]:
              - link "Lily Busch's Fake Marriage (Mature) Recommendation Lily Busch's Fake Marriage (Mature) Romance Fantasy 4.9k likes" [ref=e271] [cursor=pointer]:
                - /url: /series/lily-buschs-fake-marriage-mature
                - img "Lily Busch's Fake Marriage (Mature)" [ref=e273]
                - generic [ref=e277]:
                  - paragraph [ref=e278]: Recommendation
                  - paragraph [ref=e279]: Lily Busch's Fake Marriage (Mature)
                  - paragraph [ref=e280]:
                    - generic [ref=e281]: Romance Fantasy
                    - generic [ref=e283]: 4.9k likes
            - listitem [ref=e284]:
              - generic [ref=e285] [cursor=pointer]:
                - img "feeling lucky" [ref=e287]
                - generic [ref=e289]:
                  - paragraph [ref=e290]: Feeling lucky
                  - paragraph [ref=e291]: Random series you may like
    - generic [ref=e292]:
      - generic [ref=e297]:
        - generic [ref=e298]:
          - img "I Met the Male Lead in Prison (Mature)" [ref=e301] [cursor=pointer]
          - generic [ref=e305]:
            - text: I Met the Male Lead in Prison (Mature)
            - paragraph [ref=e306]:
              - generic [ref=e307]: 43.5k views
              - generic [ref=e309]: 2.1k subscribers
        - generic [ref=e310] [cursor=pointer]:
          - text: As if waking up in an R-rated dark romance wasn't surprising enough, it turns out that Ianna is in the prison where the cursed male lead, Rikedoran, is also being held! Despite having no memories of her own, Ianna thankfully has full knowledge of the story, which leads her to visit Rikedoran out of curiosity. In his cell, she discovers rather shocking truths about the reality of his curse and his past. It doesn't take long for her to wonder whether she'll be able to leave him and the plot be...
          - generic [ref=e311]: Read more
        - generic [ref=e313] [cursor=pointer]: Subscribe
      - generic [ref=e314]:
        - paragraph [ref=e316]: 89 episodes
        - list [ref=e321]:
          - listitem [ref=e322] [cursor=pointer]:
            - img "Episode 1" [ref=e324]
            - generic [ref=e326]:
              - generic [ref=e327]: Episode 1
              - generic [ref=e328]: Episode 1
          - listitem [ref=e329] [cursor=pointer]:
            - img "Episode 2" [ref=e331]
            - generic [ref=e333]:
              - generic [ref=e334]: Episode 2
              - generic [ref=e335]: Episode 2
          - listitem [ref=e336] [cursor=pointer]:
            - img "Episode 3" [ref=e338]
            - generic [ref=e340]:
              - generic [ref=e341]: Episode 3
              - generic [ref=e342]: Episode 3
          - listitem [ref=e343] [cursor=pointer]:
            - img "Episode 4" [ref=e345]
            - generic [ref=e348]:
              - generic [ref=e349]: Episode 4
              - generic [ref=e350]: Episode 4
          - listitem [ref=e351] [cursor=pointer]:
            - img "Episode 5" [ref=e353]
            - generic [ref=e356]:
              - generic [ref=e357]: Episode 5
              - generic [ref=e358]: Episode 5
          - listitem [ref=e359] [cursor=pointer]:
            - img "Episode 6" [ref=e361]
            - generic [ref=e364]:
              - generic [ref=e365]: Episode 6
              - generic [ref=e366]: Episode 6
          - listitem [ref=e367] [cursor=pointer]:
            - img "Episode 7" [ref=e369]
            - generic [ref=e372]:
              - generic [ref=e373]: Episode 7
              - generic [ref=e374]: Episode 7
          - listitem [ref=e375] [cursor=pointer]:
            - img "Episode 8" [ref=e377]
            - generic [ref=e380]:
              - generic [ref=e381]: Episode 8
              - generic [ref=e382]: Episode 8
          - listitem [ref=e383] [cursor=pointer]:
            - img "Episode 9" [ref=e385]
            - generic [ref=e388]:
              - generic [ref=e389]: Episode 9
              - generic [ref=e390]: Episode 9
          - listitem [ref=e391] [cursor=pointer]:
            - img "Episode 10" [ref=e393]
            - generic [ref=e396]:
              - generic [ref=e397]: Episode 10
              - generic [ref=e398]: Episode 10
          - listitem [ref=e399] [cursor=pointer]:
            - img "Episode 11" [ref=e401]
            - generic [ref=e404]:
              - generic [ref=e405]: Episode 11
              - generic [ref=e406]: Episode 11
          - listitem [ref=e407] [cursor=pointer]:
            - img "Episode 12" [ref=e409]
            - generic [ref=e412]:
              - generic [ref=e413]: Episode 12
              - generic [ref=e414]: Episode 12
          - listitem [ref=e415] [cursor=pointer]:
            - img "Episode 13" [ref=e417]
            - generic [ref=e420]:
              - generic [ref=e421]: Episode 13
              - generic [ref=e422]: Episode 13
          - listitem [ref=e423] [cursor=pointer]:
            - img "Episode 14" [ref=e425]
            - generic [ref=e428]:
              - generic [ref=e429]: Episode 14
              - generic [ref=e430]: Episode 14
          - listitem [ref=e431] [cursor=pointer]:
            - img "Episode 15" [ref=e433]
            - generic [ref=e436]:
              - generic [ref=e437]: Episode 15
              - generic [ref=e438]: Episode 15
          - listitem [ref=e439] [cursor=pointer]:
            - img "Episode 16" [ref=e441]
            - generic [ref=e444]:
              - generic [ref=e445]: Episode 16
              - generic [ref=e446]: Episode 16
          - listitem [ref=e447] [cursor=pointer]:
            - img "Episode 17" [ref=e449]
            - generic [ref=e452]:
              - generic [ref=e453]: Episode 17
              - generic [ref=e454]: Episode 17
          - listitem [ref=e455] [cursor=pointer]:
            - img "Episode 18" [ref=e457]
            - generic [ref=e460]:
              - generic [ref=e461]: Episode 18
              - generic [ref=e462]: Episode 18
          - listitem [ref=e463] [cursor=pointer]:
            - img "Episode 19" [ref=e465]
            - generic [ref=e468]:
              - generic [ref=e469]: Episode 19
              - generic [ref=e470]: Episode 19
          - listitem [ref=e471] [cursor=pointer]:
            - img "Episode 20" [ref=e473]
            - generic [ref=e476]:
              - generic [ref=e477]: Episode 20
              - generic [ref=e478]: Episode 20
    - generic [ref=e480]:
      - generic [ref=e481]:
        - generic [ref=e482]:
          - img "Episode 3" [ref=e483]
          - generic [ref=e484]:
            - paragraph [ref=e485]: Episode 3
            - paragraph [ref=e486]:
              - generic [ref=e487]: 2.2k views
              - generic [ref=e489]: 100 likes
              - generic [ref=e491]: 9 comments
        - separator [ref=e492]
        - generic [ref=e497] [cursor=pointer]: More
      - generic [ref=e503] [cursor=pointer]: Like
      - generic [ref=e504]:
        - generic [ref=e505]:
          - generic [ref=e510] [cursor=pointer]: List
          - generic [ref=e515] [cursor=pointer]: Comment
        - separator [ref=e516]
        - generic [ref=e517]:
          - generic [ref=e521] [cursor=pointer]: Prev
          - generic [ref=e525] [cursor=pointer]: Next
        - separator [ref=e526]
        - generic [ref=e531] [cursor=pointer]: Full
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