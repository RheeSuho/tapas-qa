# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/13-인박스/Messages.feature.spec.js >> Messages >> [TPS-192] Messages 영역 노출 확인 + Messages 타입별 클릭
- Location: .features-gen/features/13-인박스/Messages.feature.spec.js:16:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a.toolbar-btn.js-episode-like-btn, article a[href*="/series/"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a.toolbar-btn.js-episode-like-btn, article a[href*="/series/"]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - banner [ref=e42]:
        - heading "inbox mark all read" [level=1] [ref=e43]:
          - text: inbox
          - link "mark all read" [ref=e44] [cursor=pointer]:
            - /url: ""
            - generic [ref=e45]: mark all read
          - link [ref=e46] [cursor=pointer]:
            - /url: /profile/settings
        - navigation [ref=e48]:
          - list [ref=e49]:
            - listitem [ref=e50]:
              - link "Gifts" [ref=e51] [cursor=pointer]:
                - /url: /inbox/gift
            - listitem [ref=e52] [cursor=pointer]:
              - link "Messages" [ref=e53]:
                - /url: /inbox/message
            - listitem [ref=e54]:
              - link "Activity" [ref=e55] [cursor=pointer]:
                - /url: /activities
      - article [ref=e56]:
        - generic [ref=e57]:
          - link "thumbnail New Gift Pass (expires on 06/09/2026) Read 1 episode of The Eccentric Duchess for free with a Gift Pass Romance Fantasy Jun 08, 2026" [ref=e59] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e60]:
              - img "thumbnail" [ref=e61]
              - generic [ref=e63]: New
            - generic [ref=e64]:
              - generic [ref=e65]: Gift Pass (expires on 06/09/2026)
              - generic [ref=e66]: Read 1 episode of The Eccentric Duchess for free with a Gift Pass
              - generic [ref=e67]: Romance Fantasy
              - generic [ref=e68]: Jun 08, 2026
          - 'link "thumbnail New New Release Event (06/08–06/09 ONLY) The Savior''s Recipes: Read today and earn Ink!🍧 Romance Fantasy Jun 08, 2026" [ref=e70] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e71]:
              - img "thumbnail" [ref=e72]
              - generic [ref=e74]: New
            - generic [ref=e78]:
              - generic [ref=e79]: New Release Event (06/08–06/09 ONLY)
              - generic [ref=e80]: "The Savior's Recipes: Read today and earn Ink!🍧"
              - generic [ref=e81]: Romance Fantasy
              - generic [ref=e82]: Jun 08, 2026
          - 'link "thumbnail New New Release Event (06/08–06/09 ONLY) Fire Me If You Can: Read today and earn Ink!🍧 Romance Jun 08, 2026" [ref=e84] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e85]:
              - img "thumbnail" [ref=e86]
              - generic [ref=e88]: New
            - generic [ref=e92]:
              - generic [ref=e93]: New Release Event (06/08–06/09 ONLY)
              - generic [ref=e94]: "Fire Me If You Can: Read today and earn Ink!🍧"
              - generic [ref=e95]: Romance
              - generic [ref=e96]: Jun 08, 2026
          - link "thumbnail New Gift Pass (expires on 06/08/2026) Read 1 episode of The Archduke's Adopted Saint for free with a Gift Pass Romance Fantasy Jun 07, 2026" [ref=e98] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e99]:
              - img "thumbnail" [ref=e100]
              - generic [ref=e102]: New
            - generic [ref=e106]:
              - generic [ref=e107]: Gift Pass (expires on 06/08/2026)
              - generic [ref=e108]: Read 1 episode of The Archduke's Adopted Saint for free with a Gift Pass
              - generic [ref=e109]: Romance Fantasy
              - generic [ref=e110]: Jun 07, 2026
          - 'link "thumbnail New New Release Event (06/07–06/09 Only) Engaged to the Blind Duke: Get 1,500 Ink today!🍧 Jun 07, 2026" [ref=e112] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e113]:
              - img "thumbnail" [ref=e114]
              - generic [ref=e116]: New
            - generic [ref=e117]:
              - generic [ref=e118]: New Release Event (06/07–06/09 Only)
              - generic [ref=e119]: "Engaged to the Blind Duke: Get 1,500 Ink today!🍧"
              - generic [ref=e120]: Jun 07, 2026
          - 'link "thumbnail New 3Hr Revolutionary Prince... fans also read Karina''s Last Days: Try it with 5 Gift Pass(es). Today only! Romance Fantasy Jun 07, 2026" [ref=e122] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e123]:
              - img "thumbnail" [ref=e124]
              - generic [ref=e126]: New
              - generic [ref=e130]: 3Hr
            - generic [ref=e131]:
              - generic [ref=e132]: Revolutionary Prince... fans also read
              - generic [ref=e133]: "Karina's Last Days: Try it with 5 Gift Pass(es). Today only!"
              - generic [ref=e134]: Romance Fantasy
              - generic [ref=e135]: Jun 07, 2026
          - link "thumbnail New 3Hr Gift Pass (expires on 06/07/2026) Read 1 episode of Dungeon Predator for free with a Gift Pass Action Fantasy Jun 06, 2026" [ref=e137] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e138]:
              - img "thumbnail" [ref=e139]
              - generic [ref=e141]: New
              - generic [ref=e145]: 3Hr
            - generic [ref=e146]:
              - generic [ref=e147]: Gift Pass (expires on 06/07/2026)
              - generic [ref=e148]: Read 1 episode of Dungeon Predator for free with a Gift Pass
              - generic [ref=e149]: Action Fantasy
              - generic [ref=e150]: Jun 06, 2026
          - link "thumbnail New Gift Pass (expires on 06/07/2026) Read 1 episode of The Archduke's Adopted Saint for free with a Gift Pass Romance Fantasy Jun 06, 2026" [ref=e152] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e153]:
              - img "thumbnail" [ref=e154]
              - generic [ref=e156]: New
            - generic [ref=e160]:
              - generic [ref=e161]: Gift Pass (expires on 06/07/2026)
              - generic [ref=e162]: Read 1 episode of The Archduke's Adopted Saint for free with a Gift Pass
              - generic [ref=e163]: Romance Fantasy
              - generic [ref=e164]: Jun 06, 2026
          - 'link "thumbnail New New Release Event (06/06–06/07 ONLY) Lady to Queen: Read today and earn Ink!🍧 Romance Fantasy Jun 06, 2026" [ref=e166] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e167]:
              - img "thumbnail" [ref=e168]
              - generic [ref=e170]: New
            - generic [ref=e171]:
              - generic [ref=e172]: New Release Event (06/06–06/07 ONLY)
              - generic [ref=e173]: "Lady to Queen: Read today and earn Ink!🍧"
              - generic [ref=e174]: Romance Fantasy
              - generic [ref=e175]: Jun 06, 2026
          - 'link "thumbnail New Special Episodes Event (06/06–06/08 ONLY I Swear We''re Just Friends: Catch up with additional free episodes!🍷 Romance Fantasy Jun 06, 2026" [ref=e177] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e178]:
              - img "thumbnail" [ref=e179]
              - generic [ref=e181]: New
            - generic [ref=e185]:
              - generic [ref=e186]: Special Episodes Event (06/06–06/08 ONLY
              - generic [ref=e187]: "I Swear We're Just Friends: Catch up with additional free episodes!🍷"
              - generic [ref=e188]: Romance Fantasy
              - generic [ref=e189]: Jun 06, 2026
          - link "thumbnail New Free Community Series New series from Community creators. Jun 05, 2026" [ref=e191] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e192]:
              - img "thumbnail" [ref=e193]
              - generic [ref=e195]: New
            - generic [ref=e198]:
              - generic [ref=e199]: Free Community Series
              - generic [ref=e200]: New series from Community creators.
              - generic [ref=e201]: Jun 05, 2026
          - 'link "thumbnail New New Season Event (06/05–06/09 ONLY) The Archduke''s Adopted Saint: Catch up with a 30% discount!🍷 Romance Fantasy Jun 05, 2026" [ref=e203] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e204]:
              - img "thumbnail" [ref=e205]
              - generic [ref=e207]: New
            - generic [ref=e211]:
              - generic [ref=e212]: New Season Event (06/05–06/09 ONLY)
              - generic [ref=e213]: "The Archduke's Adopted Saint: Catch up with a 30% discount!🍷"
              - generic [ref=e214]: Romance Fantasy
              - generic [ref=e215]: Jun 05, 2026
          - link "thumbnail New Reading Event (06/05–06/09 ONLY) Iconic Heroines Club🦋 Fall for these iconic leads and score Bonus Ink for your binge! Jun 05, 2026" [ref=e217] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e218]:
              - img "thumbnail" [ref=e219]
              - generic [ref=e221]: New
            - generic [ref=e222]:
              - generic [ref=e223]: Reading Event (06/05–06/09 ONLY)
              - generic [ref=e224]: Iconic Heroines Club🦋 Fall for these iconic leads and score Bonus Ink for your binge!
              - generic [ref=e225]: Jun 05, 2026
          - link "thumbnail New Comics Sale (06/05–06/08 ONLY) Get 30% OFF top comics! Don't miss out🔥 Jun 05, 2026" [ref=e227] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e228]:
              - img "thumbnail" [ref=e229]
              - generic [ref=e231]: New
            - generic [ref=e234]:
              - generic [ref=e235]: Comics Sale (06/05–06/08 ONLY)
              - generic [ref=e236]: Get 30% OFF top comics! Don't miss out🔥
              - generic [ref=e237]: Jun 05, 2026
          - link "thumbnail New Free Community Series Your weekly dose of free comics & novels Jun 04, 2026" [ref=e239] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e240]:
              - img "thumbnail" [ref=e241]
              - generic [ref=e243]: New
            - generic [ref=e246]:
              - generic [ref=e247]: Free Community Series
              - generic [ref=e248]: Your weekly dose of free comics & novels
              - generic [ref=e249]: Jun 04, 2026
          - 'link "thumbnail New Coming on 06/07 Engaged to the Blind Duke: Take a sneak peek today!🍧 Romance Fantasy Jun 04, 2026" [ref=e251] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e252]:
              - img "thumbnail" [ref=e253]
              - generic [ref=e255]: New
            - generic [ref=e259]:
              - generic [ref=e260]: Coming on 06/07
              - generic [ref=e261]: "Engaged to the Blind Duke: Take a sneak peek today!🍧"
              - generic [ref=e262]: Romance Fantasy
              - generic [ref=e263]: Jun 04, 2026
          - 'link "thumbnail New New Release Event (06/04–06/06 Only) The Villainess’s Mandate (Novel): Get 1,500 Ink today!🍧 Jun 04, 2026" [ref=e265] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e266]:
              - img "thumbnail" [ref=e267]
              - generic [ref=e269]: New
            - generic [ref=e270]:
              - generic [ref=e271]: New Release Event (06/04–06/06 Only)
              - generic [ref=e272]: "The Villainess’s Mandate (Novel): Get 1,500 Ink today!🍧"
              - generic [ref=e273]: Jun 04, 2026
          - 'link "thumbnail New New Release Event (06/04–06/05 ONLY) Became the Lout First Prince: Read today and earn Ink!🍧 Action Fantasy Jun 04, 2026" [ref=e275] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e276]:
              - img "thumbnail" [ref=e277]
              - generic [ref=e279]: New
            - generic [ref=e283]:
              - generic [ref=e284]: New Release Event (06/04–06/05 ONLY)
              - generic [ref=e285]: "Became the Lout First Prince: Read today and earn Ink!🍧"
              - generic [ref=e286]: Action Fantasy
              - generic [ref=e287]: Jun 04, 2026
          - link "thumbnail New Gift Pass (expires on 06/04/2026) Read 1 episode of The Eccentric Duchess for free with a Gift Pass Romance Fantasy Jun 03, 2026" [ref=e289] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e290]:
              - img "thumbnail" [ref=e291]
              - generic [ref=e293]: New
            - generic [ref=e294]:
              - generic [ref=e295]: Gift Pass (expires on 06/04/2026)
              - generic [ref=e296]: Read 1 episode of The Eccentric Duchess for free with a Gift Pass
              - generic [ref=e297]: Romance Fantasy
              - generic [ref=e298]: Jun 03, 2026
          - 'link "thumbnail New New Release Event (06/03–06/04 ONLY) I’m a Villainess Bound to the Male Lead: Read today and earn Ink!🍧 Romance Fantasy Jun 03, 2026" [ref=e300] [cursor=pointer]':
            - /url: "#"
            - generic [ref=e301]:
              - img "thumbnail" [ref=e302]
              - generic [ref=e304]: New
            - generic [ref=e308]:
              - generic [ref=e309]: New Release Event (06/03–06/04 ONLY)
              - generic [ref=e310]: "I’m a Villainess Bound to the Male Lead: Read today and earn Ink!🍧"
              - generic [ref=e311]: Romance Fantasy
              - generic [ref=e312]: Jun 03, 2026
        - generic [ref=e313] [cursor=pointer]: More
  - contentinfo [ref=e315]:
    - generic [ref=e317]:
      - generic [ref=e318]:
        - link [ref=e320] [cursor=pointer]:
          - /url: /
        - list [ref=e322]:
          - listitem [ref=e323]:
            - link [ref=e324] [cursor=pointer]:
              - /url: https://instagram.com/tapas_app
          - listitem [ref=e326]:
            - link [ref=e327] [cursor=pointer]:
              - /url: https://twitter.com/tapas_app
          - listitem [ref=e329]:
            - link [ref=e330] [cursor=pointer]:
              - /url: https://www.youtube.com/tapasmedia
          - listitem [ref=e332]:
            - link [ref=e333] [cursor=pointer]:
              - /url: https://www.facebook.com/tapas.io
          - listitem [ref=e335]:
            - link [ref=e336] [cursor=pointer]:
              - /url: https://www.tiktok.com/@tapasmedia
      - list [ref=e339]:
        - listitem [ref=e340]:
          - link "Help" [ref=e341] [cursor=pointer]:
            - /url: https://help.tapas.io
        - listitem [ref=e342]:
          - link "Forums" [ref=e343] [cursor=pointer]:
            - /url: https://forums.tapas.io/
        - listitem [ref=e344]:
          - link "Contact" [ref=e345] [cursor=pointer]:
            - /url: mailto:feedback@tapas.io
        - listitem [ref=e346]:
          - link "Publish" [ref=e347] [cursor=pointer]:
            - /url: https://www.creators.tapas.io/
        - listitem [ref=e348]:
          - link "Newsfeed" [ref=e349] [cursor=pointer]:
            - /url: /newsfeed
      - generic [ref=e350]:
        - paragraph [ref=e351]: © 2026 Tapas Media.
        - paragraph [ref=e352]:
          - link "Terms" [ref=e353] [cursor=pointer]:
            - /url: /tos
          - text: •
          - link "Privacy" [ref=e354] [cursor=pointer]:
            - /url: /policies/privacy
          - text: •
          - link "Content" [ref=e355] [cursor=pointer]:
            - /url: /policies/content
          - text: •
          - link "Do Not Sell or Share My Personal Information" [ref=e356] [cursor=pointer]:
            - /url: /account/privacy-opt-out
  - link [ref=e357]:
    - /url: "#!/go-to-top"
```

# Test source

```ts
  186 |   await goBackSafely(page);
  187 | });
  188 | 
  189 | When('뒤로가기', async ({ page }) => {
  190 |   await page.goBack();
  191 | });
  192 | 
  193 | // ──── 결과 검증 ────
  194 | 
  195 | Then('보관함으로 진입되며 아래 메뉴들이 노출된다.', async ({ page }) => {
  196 |   // PC: a.item-title tabs; Mobile: URL 도착 여부만 확인
  197 |   const updatedTab = page.locator('a.item-title[href*="UPDATED"]');
  198 |   if (await updatedTab.isVisible({ timeout: 3000 }).catch(() => false)) {
  199 |     await expect(updatedTab).toBeVisible();
  200 |     await expect(page.locator('a.item-title[href*="SUBSCRIBED"]')).toBeVisible();
  201 |   } else {
  202 |     await expect(page).toHaveURL(/reading-list|library/i);
  203 |   }
  204 | });
  205 | 
  206 | Then('Updated 메뉴가 노출된다.', async ({ page }) => {
  207 |   await expect(page.locator('a.item-title[href*="UPDATED"]')).toBeVisible({ timeout: 5000 });
  208 | });
  209 | 
  210 | Then('Recent 메뉴 진입된다.', async ({ page }) => {
  211 |   await expect(page).toHaveURL(/reading-list|library/i);
  212 | });
  213 | 
  214 | Then('Subscribed 진입된다.', async ({ page }) => {
  215 |   await expect(page.locator('a.item-title[href*="SUBSCRIBED"]')).toBeVisible({ timeout: 5000 });
  216 | });
  217 | 
  218 | Then('Free episodes 메뉴 진입된다.', async ({ page }) => {
  219 |   await expect(page.locator('a.item-title[href*="FREE_EPISODES"]')).toBeVisible({ timeout: 5000 });
  220 | });
  221 | 
  222 | Then('Free episodes 작품 목록이 노출된다.', async ({ page }) => {
  223 |   await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
  224 | });
  225 | 
  226 | Then('Wait until Free 탭으로 진입된다.', async ({ page }) => {
  227 |   await expect(page.locator('a.item-title[href*="WAIT_UNTIL_FREE"]')).toBeVisible({ timeout: 5000 });
  228 | });
  229 | 
  230 | Then('Gift Pass가 있는 작품이 노출된다.', async ({ page }) => {
  231 |   await expect(page.locator('.inbox-gift-item').first()).toBeVisible({ timeout: 5000 });
  232 | });
  233 | 
  234 | Then('Gift 수령되어 버튼 비활성화로 변경된다.', async ({ page }) => {
  235 |   await expect(page.locator('.inbox-gift-item').first()).toBeVisible({ timeout: 5000 });
  236 | });
  237 | 
  238 | Then(/^Free episodes 화면.+$/, async ({ page }) => {
  239 |   await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
  240 | });
  241 | 
  242 | Then(/^(Subscribed|Updated|Wait until Free|Recent) 화면.+$/, async ({ page }) => {
  243 |   await expect(page.locator('.filter-wrap').first()).toBeVisible({ timeout: 5000 });
  244 | });
  245 | 
  246 | Then(/^(Comics|Novels|모든) 작품.+노출된다\.$/, async ({ page }) => {
  247 |   await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
  248 | });
  249 | 
  250 | // (Comic|Novel) 작품.+노출된다. — 홈-카테고리.steps.ts의 /^(Comic|Novel|Mature|...) 작품.* 노출된다\.$/ 에서 처리
  251 | // Comics/Novels 작품리스트만 노출된다. — /^(Comics|Novels|모든) 작품.+노출된다\.$/ 에서 처리
  252 | 
  253 | Then('회차 뷰어로 진입된다.', async ({ page }) => {
  254 |   await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  255 | });
  256 | 
  257 | Then('작품뷰어회차로 진입된다.', async ({ page }) => {
  258 |   await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  259 | });
  260 | 
  261 | Then('뷰어 회차로 진입된다.', async ({ page }) => {
  262 |   await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  263 | });
  264 | 
  265 | Then('회차뷰어 진입된다.', async ({ page }) => {
  266 |   await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  267 | });
  268 | 
  269 | Then('해당 작품홈으로 이동된다.', async ({ page }) => {
  270 |   await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
  271 | });
  272 | 
  273 | Then('작품홈 으로 진입 된다.', async ({ page }) => {
  274 |   await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
  275 | });
  276 | 
  277 | Then(/^(Comic|Novel) 작품홈으로 진입된다\.$/, async ({ page }) => {
  278 |   await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
  279 | });
  280 | 
  281 | Then(/^(Comic|Novel) 작품홈 구독 버튼이 활성화되어 노출된다\.$/, async ({ page }) => {
  282 |   await expect(page.locator('a.js-subscribe-btn').first()).toBeVisible({ timeout: 5000 });
  283 | });
  284 | 
  285 | Then(/^(뷰어로 이동된다\.|설정된 랜딩페이지로).+$/, async ({ page }) => {
> 286 |   await expect(page.locator('a.toolbar-btn.js-episode-like-btn, article a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
      |                                                                                                        ^ Error: expect(locator).toBeVisible() failed
  287 | });
  288 | 
  289 | Then(/^\[Get\]버튼 > \[Read\]로 변경된다\.$/, async ({ page }) => {
  290 |   const readBtn = page.locator('.inbox-gift-item__btn-read, button.js-inbox-gift-read').first();
  291 |   const isRead = await readBtn.isVisible().catch(() => false);
  292 |   if (isRead) { await expect(readBtn).toBeVisible(); return; }
  293 |   await expect(page.locator('.inbox-gift-item').filter({ has: page.getByRole('button', { name: /^read$/i }) }).first()).toBeVisible({ timeout: 5000 });
  294 | });
  295 | 
  296 | Then(/^\[Read\]로 노출된 작품 목록이 제거된다\.$/, async ({ page }) => {
  297 |   const isEmpty = await page.locator('.page-empty').isVisible().catch(() => false);
  298 |   if (isEmpty) { await expect(page.locator('.page-empty')).toBeVisible(); return; }
  299 |   await expect(page.locator('button.js-inbox-gift-get')).toHaveCount(0);
  300 | });
  301 | 
  302 | Then(/^(아래 작품|작품 이미지).+노출된다\.$/, async ({ page }) => {
  303 |   await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
  304 | });
  305 | 
  306 | Then(/^(Recent|Updated|Subscribed 화면|Wait until Free 화면|Free episodes 화면)(로| 로) 복귀(된다|한다)\.$/, async ({ page }) => {
  307 |   await expect(page.locator('.filter-wrap').first()).toBeVisible({ timeout: 5000 });
  308 | });
  309 | 
```