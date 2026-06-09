# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/14-More/Merch-shop.feature.spec.js >> Merch shop >> [TPS-199] More 클릭 + Merch Shop 클릭
- Location: .features-gen/features/14-More/Merch-shop.feature.spec.js:6:7

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
      - generic [ref=e43]:
        - link [ref=e45] [cursor=pointer]:
          - /url: /merchshop
        - list [ref=e47]:
          - listitem [ref=e48]:
            - link "Your Tapas cart" [ref=e49] [cursor=pointer]:
              - /url: /merchshop/cart
          - listitem [ref=e50]:
            - link "Order" [ref=e51] [cursor=pointer]:
              - /url: /merchshop/order/list
      - generic [ref=e53]:
        - generic [ref=e54]:
          - paragraph [ref=e55]: The Official Shop for Tapas Creators and Series.
          - paragraph [ref=e56]: Support your favorite creators by shopping for exclusive series apparel and accessories! Check out all the amazing products our creators have to offer.
        - img [ref=e57]
      - list [ref=e60]:
        - listitem [ref=e61]:
          - generic [ref=e62] [cursor=pointer]: All
        - listitem [ref=e63]:
          - generic [ref=e64] [cursor=pointer]: Unisex Clothing
        - listitem [ref=e65]:
          - generic [ref=e66] [cursor=pointer]: Accessories
      - generic [ref=e68]:
        - list [ref=e69]:
          - listitem [ref=e70]: Products
          - listitem [ref=e71]: /All
        - generic [ref=e72]:
          - generic [ref=e73]: 1,129 results
          - generic [ref=e74]:
            - generic [ref=e75]:
              - paragraph [ref=e77]: Deliver to
              - paragraph [ref=e81] [cursor=pointer]: Find the items that ship to your country!
            - list [ref=e84]:
              - listitem [ref=e85]:
                - generic [ref=e86] [cursor=pointer]: All
              - listitem [ref=e87]
              - listitem [ref=e88]:
                - generic [ref=e89] [cursor=pointer]: Comic
              - listitem [ref=e90]
              - listitem [ref=e91]:
                - generic [ref=e92] [cursor=pointer]: Novel
        - list [ref=e93]:
          - listitem [ref=e94] [cursor=pointer]:
            - link "Hiraya Shirt Gayuma Hiraya Shirt Starting from $23.31" [ref=e95]:
              - /url: /merchshop/items/2590
              - img "Hiraya Shirt" [ref=e97]
              - paragraph [ref=e98]: Gayuma
              - paragraph [ref=e99]: Hiraya Shirt
              - paragraph [ref=e100]: Starting from $23.31
              - list [ref=e101]:
                - listitem [ref=e102]
                - listitem [ref=e104]
                - listitem [ref=e106]
                - listitem [ref=e108]
                - listitem [ref=e110]
                - listitem [ref=e112]
                - listitem [ref=e114]
                - listitem [ref=e116]
                - listitem [ref=e118]
                - listitem [ref=e120]
                - listitem [ref=e122]
                - listitem [ref=e124]
                - listitem [ref=e126]
                - listitem [ref=e128]
                - listitem [ref=e130]
                - listitem [ref=e132]
          - listitem [ref=e134] [cursor=pointer]:
            - link "Mayari + Tatted Sleeve Gayuma Mayari + Tatted Sleeve Starting from $54.05" [ref=e135]:
              - /url: /merchshop/items/2589
              - img "Mayari + Tatted Sleeve" [ref=e137]
              - paragraph [ref=e138]: Gayuma
              - paragraph [ref=e139]: Mayari + Tatted Sleeve
              - paragraph [ref=e140]: Starting from $54.05
              - list [ref=e141]:
                - listitem [ref=e142]
                - listitem [ref=e144]
                - listitem [ref=e146]
                - listitem [ref=e148]
                - listitem [ref=e150]
                - listitem [ref=e152]
                - listitem [ref=e154]
                - listitem [ref=e156]
                - listitem [ref=e158]
                - listitem [ref=e160]
          - listitem [ref=e162] [cursor=pointer]:
            - link "Mayari + Tatted Sleeve Gayuma Mayari + Tatted Sleeve Starting from $46.22" [ref=e163]:
              - /url: /merchshop/items/2588
              - img "Mayari + Tatted Sleeve" [ref=e165]
              - paragraph [ref=e166]: Gayuma
              - paragraph [ref=e167]: Mayari + Tatted Sleeve
              - paragraph [ref=e168]: Starting from $46.22
              - list [ref=e169]:
                - listitem [ref=e170]
                - listitem [ref=e172]
                - listitem [ref=e174]
                - listitem [ref=e176]
                - listitem [ref=e178]
                - listitem [ref=e180]
          - listitem [ref=e182] [cursor=pointer]:
            - link "Takashy ryuu - Episodio 5 Graduación Especial Takashy ryuu - Episodio 5 Starting from $36.63" [ref=e183]:
              - /url: /merchshop/items/2586
              - img "Takashy ryuu - Episodio 5" [ref=e185]
              - paragraph [ref=e186]: Graduación Especial
              - paragraph [ref=e187]: Takashy ryuu - Episodio 5
              - paragraph [ref=e188]: Starting from $36.63
              - list [ref=e189]:
                - listitem [ref=e190]
          - listitem [ref=e192] [cursor=pointer]:
            - link "Bite Me Demon for Hire Bite Me Starting from $22.02" [ref=e193]:
              - /url: /merchshop/items/2585
              - img "Bite Me" [ref=e195]
              - paragraph [ref=e196]: Demon for Hire
              - paragraph [ref=e197]: Bite Me
              - paragraph [ref=e198]: Starting from $22.02
              - list [ref=e199]:
                - listitem [ref=e200]
                - listitem [ref=e202]
                - listitem [ref=e204]
                - listitem [ref=e206]
                - listitem [ref=e208]
                - listitem [ref=e210]
          - listitem [ref=e212] [cursor=pointer]:
            - link "Caramel and Popcorn - 4th Anniversary Revenge of the Candy Snatchers Caramel and Popcorn - 4th Anniversary Starting from $40.77" [ref=e213]:
              - /url: /merchshop/items/2583
              - img "Caramel and Popcorn - 4th Anniversary" [ref=e215]
              - paragraph [ref=e216]: Revenge of the Candy Snatchers
              - paragraph [ref=e217]: Caramel and Popcorn - 4th Anniversary
              - paragraph [ref=e218]: Starting from $40.77
              - list [ref=e219]:
                - listitem [ref=e220]
                - listitem [ref=e222]
                - listitem [ref=e224]
                - listitem [ref=e226]
                - listitem [ref=e228]
          - listitem [ref=e230] [cursor=pointer]:
            - link "Caramel and Popcorn - 4th Anniversary Revenge of the Candy Snatchers Caramel and Popcorn - 4th Anniversary Starting from $27.31" [ref=e231]:
              - /url: /merchshop/items/2582
              - img "Caramel and Popcorn - 4th Anniversary" [ref=e233]
              - paragraph [ref=e234]: Revenge of the Candy Snatchers
              - paragraph [ref=e235]: Caramel and Popcorn - 4th Anniversary
              - paragraph [ref=e236]: Starting from $27.31
              - list [ref=e237]:
                - listitem [ref=e238]
                - listitem [ref=e240]
                - listitem [ref=e242]
          - listitem [ref=e244] [cursor=pointer]:
            - link "COMIC HOODIE 2 Gamers Guff COMIC HOODIE 2 Starting from $31.63" [ref=e245]:
              - /url: /merchshop/items/2581
              - img "COMIC HOODIE 2" [ref=e247]
              - paragraph [ref=e248]: Gamers Guff
              - paragraph [ref=e249]: COMIC HOODIE 2
              - paragraph [ref=e250]: Starting from $31.63
              - list [ref=e251]:
                - listitem [ref=e252]
          - listitem [ref=e254] [cursor=pointer]:
            - link "COMIC TOTE 2 Gamers Guff COMIC TOTE 2 Starting from $23.67" [ref=e255]:
              - /url: /merchshop/items/2580
              - img "COMIC TOTE 2" [ref=e257]
              - paragraph [ref=e258]: Gamers Guff
              - paragraph [ref=e259]: COMIC TOTE 2
              - paragraph [ref=e260]: Starting from $23.67
              - list [ref=e261]:
                - listitem [ref=e262]
          - listitem [ref=e264] [cursor=pointer]:
            - link "Comic Shirt 2 Gamers Guff Comic Shirt 2 Starting from $19.03" [ref=e265]:
              - /url: /merchshop/items/2579
              - img "Comic Shirt 2" [ref=e267]
              - paragraph [ref=e268]: Gamers Guff
              - paragraph [ref=e269]: Comic Shirt 2
              - paragraph [ref=e270]: Starting from $19.03
              - list [ref=e271]:
                - listitem [ref=e272]
          - listitem [ref=e274] [cursor=pointer]:
            - link "COMIC HOODIE 1 Gamers Guff COMIC HOODIE 1 Starting from $31.63" [ref=e275]:
              - /url: /merchshop/items/2578
              - img "COMIC HOODIE 1" [ref=e277]
              - paragraph [ref=e278]: Gamers Guff
              - paragraph [ref=e279]: COMIC HOODIE 1
              - paragraph [ref=e280]: Starting from $31.63
              - list [ref=e281]:
                - listitem [ref=e282]
          - listitem [ref=e284] [cursor=pointer]:
            - link "COUCH HOODIE Gamers Guff COUCH HOODIE Starting from $31.63" [ref=e285]:
              - /url: /merchshop/items/2577
              - img "COUCH HOODIE" [ref=e287]
              - paragraph [ref=e288]: Gamers Guff
              - paragraph [ref=e289]: COUCH HOODIE
              - paragraph [ref=e290]: Starting from $31.63
              - list [ref=e291]:
                - listitem [ref=e292]
          - listitem [ref=e294] [cursor=pointer]:
            - link "COUCH TOTE Gamers Guff COUCH TOTE Starting from $23.67" [ref=e295]:
              - /url: /merchshop/items/2576
              - img "COUCH TOTE" [ref=e297]
              - paragraph [ref=e298]: Gamers Guff
              - paragraph [ref=e299]: COUCH TOTE
              - paragraph [ref=e300]: Starting from $23.67
              - list [ref=e301]:
                - listitem [ref=e302]
          - listitem [ref=e304] [cursor=pointer]:
            - link "COMIC TOTE 1 Gamers Guff COMIC TOTE 1 Starting from $23.67" [ref=e305]:
              - /url: /merchshop/items/2575
              - img "COMIC TOTE 1" [ref=e307]
              - paragraph [ref=e308]: Gamers Guff
              - paragraph [ref=e309]: COMIC TOTE 1
              - paragraph [ref=e310]: Starting from $23.67
              - list [ref=e311]:
                - listitem [ref=e312]
          - listitem [ref=e314] [cursor=pointer]:
            - link "Comic Shirt No 1 Gamers Guff Comic Shirt No 1 Starting from $19.03" [ref=e315]:
              - /url: /merchshop/items/2573
              - img "Comic Shirt No 1" [ref=e317]
              - paragraph [ref=e318]: Gamers Guff
              - paragraph [ref=e319]: Comic Shirt No 1
              - paragraph [ref=e320]: Starting from $19.03
              - list [ref=e321]:
                - listitem [ref=e322]
          - listitem [ref=e324] [cursor=pointer]:
            - link "LAID BACK Gamers Guff LAID BACK Starting from $18.80" [ref=e325]:
              - /url: /merchshop/items/2572
              - img "LAID BACK" [ref=e327]
              - paragraph [ref=e328]: Gamers Guff
              - paragraph [ref=e329]: LAID BACK
              - paragraph [ref=e330]: Starting from $18.80
              - list [ref=e331]:
                - listitem [ref=e332]
                - listitem [ref=e334]
          - listitem [ref=e336] [cursor=pointer]:
            - link "CTM Animal Group Crossing the Moon (Cruzar la Luna) CTM Animal Group Starting from $16.33" [ref=e337]:
              - /url: /merchshop/items/2570
              - img "CTM Animal Group" [ref=e339]
              - paragraph [ref=e340]: Crossing the Moon (Cruzar la Luna)
              - paragraph [ref=e341]: CTM Animal Group
              - paragraph [ref=e342]: Starting from $16.33
              - list [ref=e343]:
                - listitem [ref=e344]
                - listitem [ref=e346]
                - listitem [ref=e348]
                - listitem [ref=e350]
                - listitem [ref=e352]
                - listitem [ref=e354]
                - listitem [ref=e356]
                - listitem [ref=e358]
                - listitem [ref=e360]
                - listitem [ref=e362]
                - listitem [ref=e364]
                - listitem [ref=e366]
                - listitem [ref=e368]
                - listitem [ref=e370]
          - listitem [ref=e372] [cursor=pointer]:
            - link "CTM Chibis Crossing the Moon (Cruzar la Luna) CTM Chibis Starting from $16.33" [ref=e373]:
              - /url: /merchshop/items/2569
              - img "CTM Chibis" [ref=e375]
              - paragraph [ref=e376]: Crossing the Moon (Cruzar la Luna)
              - paragraph [ref=e377]: CTM Chibis
              - paragraph [ref=e378]: Starting from $16.33
              - list [ref=e379]:
                - listitem [ref=e380]
                - listitem [ref=e382]
                - listitem [ref=e384]
                - listitem [ref=e386]
                - listitem [ref=e388]
                - listitem [ref=e390]
                - listitem [ref=e392]
                - listitem [ref=e394]
          - listitem [ref=e396] [cursor=pointer]:
            - link "Ara from 'It's lovely to see you' It's lovely to see you Ara from 'It's lovely to see you' Starting from $19.67" [ref=e397]:
              - /url: /merchshop/items/2568
              - img "Ara from 'It's lovely to see you'" [ref=e399]
              - paragraph [ref=e400]: It's lovely to see you
              - paragraph [ref=e401]: Ara from 'It's lovely to see you'
              - paragraph [ref=e402]: Starting from $19.67
              - list [ref=e403]:
                - listitem [ref=e404]
                - listitem [ref=e406]
          - listitem [ref=e408] [cursor=pointer]:
            - link "It's lovely to see you title bag It's lovely to see you It's lovely to see you title bag Starting from $19.67" [ref=e409]:
              - /url: /merchshop/items/2566
              - img "It's lovely to see you title bag" [ref=e411]
              - paragraph [ref=e412]: It's lovely to see you
              - paragraph [ref=e413]: It's lovely to see you title bag
              - paragraph [ref=e414]: Starting from $19.67
              - list [ref=e415]:
                - listitem [ref=e416]
                - listitem [ref=e418]
  - link [ref=e420]:
    - /url: "#!/go-to-top"
```

# Test source

```ts
  234 | });
  235 | 
  236 | Then('잉크 구매 팝업이 노출된다.', async ({ page }) => {
  237 |   // 실제 팝업 class: "popup-purchase js-purchase-section"
  238 |   await expect(page.locator('.popup-purchase.js-purchase-section')).toBeVisible({ timeout: 10000 });
  239 | });
  240 | 
  241 | Then(/^Buy Ink 버튼 \/ 보유 잉크 \+ 보너스 잉크 \/ 잉크 내역 \/ 서포트 내역 노출된다\.$/, async ({ page }) => {
  242 |   await expect(page.locator('a.item.js-tier-btn').first()).toBeVisible({ timeout: 8000 });
  243 | });
  244 | 
  245 | Then(/^잉크가 구매 되며.+$/, async ({ page }) => {
  246 |   await expect(page.locator('.popup-purchase.js-purchase-section, a.item.js-tier-btn').first()).toBeVisible({ timeout: 8000 });
  247 | });
  248 | 
  249 | Then('구매 성공 메시지가 노출된다.', async ({ page }) => {
  250 |   // Stripe 결제 처리 완료 → Stripe iframe이 사라지거나 팝업이 닫힘 (최대 30초)
  251 |   try {
  252 |     await page.locator('iframe[src*="checkout.stripe.com"]').waitFor({ state: 'hidden', timeout: 30000 });
  253 |   } catch { /* Stripe iframe 안 닫혀도 아래에서 재확인 */ }
  254 |   // 구매 완료 팝업 또는 잉크 잔액 화면으로 복귀 확인
  255 |   const successText = page.getByText(/success|purchased|complete|thank/i);
  256 |   const found = await successText.first().isVisible().catch(() => false);
  257 |   if (found) {
  258 |     await expect(successText.first()).toBeVisible();
  259 |   } else {
  260 |     await expect(page.locator('a.item.js-tier-btn').first()).toBeVisible({ timeout: 5000 });
  261 |   }
  262 | });
  263 | 
  264 | Then('Redeem Code 타이틀, 입력 필드, 안내문구, Contact CS, Redeem 버튼이 노출된다.', async ({ page }) => {
  265 |   await expect(page.getByRole('textbox').first()).toBeVisible({ timeout: 5000 });
  266 | });
  267 | 
  268 | Then('코드 입력이 가능하다', async ({ page }) => {
  269 |   await expect(page.getByRole('textbox').first()).toBeVisible();
  270 | });
  271 | 
  272 | Then('입력한 리딤코드가 등록되며 리딤코드 화면은 유지된다.', async ({ page }) => {
  273 |   await expect(page.getByRole('textbox').first()).toBeVisible({ timeout: 5000 });
  274 | });
  275 | 
  276 | Then('입력한 리딤코드가 등록되지 않으며 리딤코드 화면은 유지된다.', async ({ page }) => {
  277 |   await expect(page.getByRole('textbox').first()).toBeVisible({ timeout: 5000 });
  278 | });
  279 | 
  280 | Then('Invalid code 토스트 팝업이 노출된다.', async ({ page }) => {
  281 |   await expect(page.locator('[class*="toast"], [role="alert"]').filter({ hasText: /invalid code/i }).or(page.getByText(/invalid code/i)).first()).toBeVisible({ timeout: 5000 });
  282 | });
  283 | 
  284 | Then('디바이스 메일 앱이 열린다.', async () => {
  285 |   // 외부 메일 앱 — 자동화 검증 생략
  286 | });
  287 | 
  288 | Then('메일 앱이 닫히며 리딤코드 화면 유지된다.', async ({ page }) => {
  289 |   await expect(page.getByRole('textbox').first()).toBeVisible({ timeout: 5000 });
  290 | });
  291 | 
  292 | Then('메일 앱이 열린다.', async () => {
  293 |   // 외부 메일 앱 — 자동화 검증 생략
  294 | });
  295 | 
  296 | Then(/^Reading option \/ Personal information \/ Block Users \/ Log out all other sessions \/ Delete account 영역 노출된다\.$/, async ({ page }) => {
  297 |   await expect(page).toHaveURL(/settings|account/i);
  298 |   await expect(page.locator('a, button').filter({ hasText: /reading|personal|block|delete/i }).first()).toBeVisible({ timeout: 5000 });
  299 | });
  300 | 
  301 | Then('Settings 탭으로 이동된다.', async ({ page }) => {
  302 |   await expect(page).toHaveURL(/settings|account/i);
  303 | });
  304 | 
  305 | Then(/^프로필 이미지 \/ 닉네임 \/ 보유 잉크 \/ Inkshop \/ Redeem code \/ Settings \/ Logout 노출된다\.$/, async ({ page }) => {
  306 |   await expect(page.locator('img[alt="profile image"]').first()).toBeVisible({ timeout: 5000 });
  307 | });
  308 | 
  309 | Then(/^(유저 홈으로|홈 화면으로) 이동된다\.$/, async ({ page }) => {
  310 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
  311 | });
  312 | 
  313 | Then(/^Help \/ Discord \/ .+노출된다\.$/, async ({ page }) => {
  314 |   await expect(page.locator('a').filter({ hasText: /help|discord|forums|newsfeed|contact|merch/i }).first()).toBeVisible({ timeout: 5000 });
  315 | });
  316 | 
  317 | Then(/^"https:\/\/.+" 새 창 노출된다\.$/, async () => {
  318 |   // 새 탭 외부 URL — 자동화 범위 외
  319 | });
  320 | 
  321 | Then(/^"https:\/\/.+" 새 창 노출 된다\.$/, async () => {
  322 |   // 새 탭 외부 URL — 자동화 범위 외
  323 | });
  324 | 
  325 | Then('뉴스 리스트가 노출된다.', async ({ page }) => {
  326 |   await expect(page.locator('[class*="news"], [class*="newsfeed"], article').first()).toBeVisible({ timeout: 5000 });
  327 | });
  328 | 
  329 | Then('뉴스 상세화면으로 노출된다.', async ({ page }) => {
  330 |   await expect(page.locator('article, [class*="news-detail"]').first()).toBeVisible({ timeout: 5000 });
  331 | });
  332 | 
  333 | Then('Merch shop 이동된다.', async ({ page }) => {
> 334 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
      |                                                                     ^ Error: expect(locator).toBeVisible() failed
  335 | });
  336 | 
  337 | // Settings 진입 — 인박스-댓글.steps.ts에서 처리
  338 | 
  339 | // - 접두사 항목들은 common.steps.ts의 /^- .+$/ 에서 처리
  340 | 
  341 | // Redeem Code 클릭은 When으로 위에서 처리됨
  342 | 
```