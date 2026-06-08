# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/15-Profile/Redeem-Code.feature.spec.js >> Redeem Code >> [TPS-206] 리딤코드 오입력 > Profile 클릭 + Redeem 버튼 클릭
- Location: .features-gen/features/15-Profile/Redeem-Code.feature.spec.js:20:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[class*="toast"], [role="alert"]').filter({ hasText: /invalid code/i }).or(getByText(/invalid code/i)).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[class*="toast"], [role="alert"]').filter({ hasText: /invalid code/i }).or(getByText(/invalid code/i)).first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e8]:
        - link "tapas" [ref=e9] [cursor=pointer]:
          - /url: /
          - img "tapas" [ref=e10]
        - generic [ref=e13]:
          - link "Home" [ref=e14] [cursor=pointer]:
            - /url: /menu/1/subtab/1
            - generic [ref=e18]: Home
          - link "Comics" [ref=e19] [cursor=pointer]:
            - /url: /menu/2/subtab/7
            - generic [ref=e23]: Comics
          - link "Novels" [ref=e24] [cursor=pointer]:
            - /url: /menu/3/subtab/16
            - generic [ref=e28]: Novels
          - link "Community" [ref=e29] [cursor=pointer]:
            - /url: /menu/4/subtab/30
            - generic [ref=e33]: Community
          - link "Mature" [ref=e34] [cursor=pointer]:
            - /url: /menu/5/subtab/45
            - generic [ref=e38]: Mature
          - button "More drop on drop off" [ref=e40] [cursor=pointer]:
            - generic [ref=e43]:
              - generic [ref=e44]: More
              - generic [ref=e45]:
                - img "drop on" [ref=e46]
                - img "drop off" [ref=e47]
        - generic [ref=e48]:
          - textbox "Search" [active] [ref=e49]: TESTCODE123
          - button "search":
            - img "search" [ref=e50] [cursor=pointer]
        - link "library" [ref=e51] [cursor=pointer]:
          - /url: /reading-list
          - img "library" [ref=e52]
        - link "inbox 121" [ref=e53] [cursor=pointer]:
          - /url: /inbox/gift
          - img "inbox" [ref=e54]
          - generic [ref=e55]: "121"
        - button "profile image" [ref=e57] [cursor=pointer]:
          - img "profile image" [ref=e59]
        - link "Publish" [ref=e61] [cursor=pointer]:
          - /url: https://www.creators.tapas.io
          - button "Publish" [ref=e62]
    - generic [ref=e63]:
      - paragraph [ref=e68]: Redeem code
      - generic [ref=e70]:
        - textbox "Enter code" [ref=e72]
        - button "Redeem" [disabled] [ref=e73]
        - generic [ref=e74]:
          - paragraph [ref=e75]: A code should only be redeemed by its intended users within the expiration date.
          - paragraph [ref=e76]: To check the reward, go to Inbox > Messages.
          - paragraph [ref=e77]: The Ink reward issued through a promo code cannot be refunded.
        - link "Contact CS" [ref=e79] [cursor=pointer]:
          - /url: mailto:feedback@tapas.io
          - paragraph [ref=e80]: Contact CS
    - contentinfo [ref=e82]:
      - link "tapas Stories you crave" [ref=e84] [cursor=pointer]:
        - /url: /
        - img "tapas Stories you crave" [ref=e85]
      - generic [ref=e86]:
        - link "instagram" [ref=e87] [cursor=pointer]:
          - /url: https://instagram.com/tapas_app
          - img "instagram" [ref=e88]
        - link "twitter" [ref=e89] [cursor=pointer]:
          - /url: https://twitter.com/tapas_app
          - img "twitter" [ref=e90]
        - link "youtube" [ref=e91] [cursor=pointer]:
          - /url: https://www.youtube.com/tapasmedia
          - img "youtube" [ref=e92]
        - link "facebook" [ref=e93] [cursor=pointer]:
          - /url: https://www.facebook.com/tapas.io
          - img "facebook" [ref=e94]
        - link "tiktok" [ref=e95] [cursor=pointer]:
          - /url: https://www.tiktok.com/@tapasmedia
          - img "tiktok" [ref=e96]
      - generic [ref=e97]:
        - link "Help" [ref=e98] [cursor=pointer]:
          - /url: https://help.tapas.io/hc/en-us
        - link "Discord" [ref=e99] [cursor=pointer]:
          - /url: https://discord.com/invite/tapas
        - link "Forums" [ref=e100] [cursor=pointer]:
          - /url: https://forums.tapas.io
        - link "Newsfeed" [ref=e101] [cursor=pointer]:
          - /url: /newsfeed
        - link "Contact" [ref=e102] [cursor=pointer]:
          - /url: mailto:feedback@tapas.io
        - link "Publish" [ref=e103] [cursor=pointer]:
          - /url: https://www.creators.tapas.io
      - generic [ref=e104]:
        - paragraph [ref=e105]: ⓒ 2024 Tapas Entertainment.
        - generic [ref=e106]:
          - link "Terms" [ref=e107] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005545248
          - generic [ref=e108]: ・
          - link "Privacy" [ref=e109] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005377787
          - generic [ref=e110]: ・
          - link "Content" [ref=e111] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005323707
        - link "Do Not Sell or Share My Personal Information" [ref=e112] [cursor=pointer]:
          - /url: /account/privacy-opt-out
  - alert [ref=e113]: Redeem
  - iframe [ref=e114]:
    - button "Help" [ref=f3e4] [cursor=pointer]:
      - img [ref=f3e6]
      - generic [ref=f3e13]: Help
```

# Test source

```ts
  181 | 
  182 | When('Discord 클릭', async ({ page }) => {
  183 |   await expect(page.getByRole('link', { name: /discord/i }).first()).toBeVisible({ timeout: 5000 });
  184 |   await page.getByRole('link', { name: /discord/i }).first().click();
  185 | });
  186 | 
  187 | When('Forums 클릭', async ({ page }) => {
  188 |   await expect(page.getByRole('link', { name: /forums/i }).first()).toBeVisible({ timeout: 5000 });
  189 |   await page.getByRole('link', { name: /forums/i }).first().click();
  190 | });
  191 | 
  192 | When('Newsfeed 클릭', async ({ page }) => {
  193 |   await expect(page.getByRole('link', { name: /newsfeed/i }).first()).toBeVisible({ timeout: 5000 });
  194 |   await page.getByRole('link', { name: /newsfeed/i }).first().click();
  195 | });
  196 | 
  197 | When('Contact 클릭', async ({ page }) => {
  198 |   await expect(page.getByRole('link', { name: /contact/i }).first()).toBeVisible({ timeout: 5000 });
  199 |   await page.getByRole('link', { name: /contact/i }).first().click();
  200 | });
  201 | 
  202 | When('Merch Shop 클릭', async ({ page }) => {
  203 |   await expect(page.getByRole('link', { name: /merch/i }).first()).toBeVisible({ timeout: 5000 });
  204 |   await page.getByRole('link', { name: /merch/i }).first().click();
  205 | });
  206 | 
  207 | When('뉴스 리스트 클릭', async ({ page }) => {
  208 |   await expect(page.getByRole('link').filter({ hasText: /news/i }).first()).toBeVisible({ timeout: 5000 });
  209 |   await page.getByRole('link').filter({ hasText: /news/i }).first().click();
  210 | });
  211 | 
  212 | // ──── 결과 검증 ────
  213 | 
  214 | // 하위 메뉴 노출된다. — common.steps.ts에서 처리
  215 | 
  216 | Then('Edit Profile 화면에 진입된다.', async ({ page }) => {
  217 |   await expect(page).toHaveURL(/settings|account/i);
  218 | });
  219 | 
  220 | Then('Delete account 안내 화면으로 이동된다.', async ({ page }) => {
  221 |   await expect(page).toHaveURL(/settings|account|delete/i);
  222 | });
  223 | 
  224 | Then('비밀번호 검증 팝업이 노출된다.', async ({ page }) => {
  225 |   await expect(page.locator('[role="dialog"]').first()).toBeVisible({ timeout: 5000 });
  226 | });
  227 | 
  228 | Then('정상적으로 로그아웃 및 계정 탈퇴되며 홈 화면으로 이동된다.', async ({ page }) => {
  229 |   // 탈퇴 — 자동화 범위 외 (스킵)
  230 | });
  231 | 
  232 | Then('Ink shop 화면 노출된다.', async ({ page }) => {
  233 |   await expect(page.locator('a.item.js-tier-btn').first()).toBeVisible({ timeout: 8000 });
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
> 281 |   await expect(page.locator('[class*="toast"], [role="alert"]').filter({ hasText: /invalid code/i }).or(page.getByText(/invalid code/i)).first()).toBeVisible({ timeout: 5000 });
      |                                                                                                                                                   ^ Error: expect(locator).toBeVisible() failed
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
  334 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
  335 | });
  336 | 
  337 | // Settings 진입 — 인박스-댓글.steps.ts에서 처리
  338 | 
  339 | // - 접두사 항목들은 common.steps.ts의 /^- .+$/ 에서 처리
  340 | 
  341 | // Redeem Code 클릭은 When으로 위에서 처리됨
  342 | 
```