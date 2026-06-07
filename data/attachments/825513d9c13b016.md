# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/12-보관함/Subscribed.feature.spec.js >> Subscribed >> [TPS-180] PCWeb only > Subscribed 클릭 + Setting 버튼 클릭
- Location: .features-gen/features/12-보관함/Subscribed.feature.spec.js:45:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /settings|account/i
Received string:  "https://tapas.io/reading-list?category=SUBSCRIBED"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://tapas.io/reading-list?category=SUBSCRIBED"

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
          - link "122" [ref=e31] [cursor=pointer]:
            - /url: /inbox/gift
            - generic [ref=e32]: "122"
          - img [ref=e36] [cursor=pointer]
        - link "Publish" [ref=e39] [cursor=pointer]:
          - /url: https://www.creators.tapas.io/
    - generic [ref=e41]:
      - banner [ref=e42]:
        - heading "your library" [level=1] [ref=e43]
        - navigation [ref=e44]:
          - list [ref=e45]:
            - listitem [ref=e46]:
              - link "Updated" [ref=e47] [cursor=pointer]:
                - /url: /reading-list?category=UPDATED
            - listitem [ref=e48]:
              - link "Recent" [ref=e49] [cursor=pointer]:
                - /url: /reading-list?category=RECENT
            - listitem [ref=e50] [cursor=pointer]:
              - link "Subscribed" [ref=e51]:
                - /url: /reading-list?category=SUBSCRIBED
            - listitem [ref=e52]:
              - link "Free episodes" [ref=e53] [cursor=pointer]:
                - /url: /reading-list?category=FREE_EPISODES
            - listitem [ref=e54]:
              - link "Wait Until Free" [ref=e55] [cursor=pointer]:
                - /url: /reading-list?category=WAIT_UNTIL_FREE
        - navigation [ref=e56]:
          - list [ref=e57]:
            - listitem [ref=e58]:
              - link "all" [ref=e59] [cursor=pointer]:
                - /url: "#!/reading-list?type="
            - listitem [ref=e60]:
              - link "comics" [ref=e61] [cursor=pointer]:
                - /url: "#!/reading-list?type=COMICS"
            - listitem [ref=e62]:
              - link "novels" [ref=e63] [cursor=pointer]:
                - /url: "#!/reading-list?type=BOOKS"
      - list [ref=e65]:
        - listitem [ref=e66]:
          - link [ref=e68] [cursor=pointer]:
            - /url: /series/Dark-Paradise
            - img [ref=e69]
          - link "Dark Paradise" [ref=e71] [cursor=pointer]:
            - /url: /series/Dark-Paradise
          - link "Fidesia" [ref=e72] [cursor=pointer]:
            - /url: /Fidesia
          - text: "next: in 2 days"
        - listitem [ref=e73]:
          - link [ref=e75] [cursor=pointer]:
            - /url: /series/like-father-like-daughter
            - img [ref=e76]
          - link "Like Father, Like Daughter" [ref=e81] [cursor=pointer]:
            - /url: /series/like-father-like-daughter
          - link "STUDIO INUS" [ref=e82] [cursor=pointer]:
            - /url: /STUDIOINUS
          - text: Nov 25, 2025
        - listitem [ref=e83]:
          - link [ref=e85] [cursor=pointer]:
            - /url: /series/the-little-lady-behind-the-scenes
            - img [ref=e86]
          - link "The Little Lady Behind the Scenes" [ref=e91] [cursor=pointer]:
            - /url: /series/the-little-lady-behind-the-scenes
          - link "CH" [ref=e92] [cursor=pointer]:
            - /url: /CH01
          - text: Mar 26
        - listitem [ref=e93]:
          - link "3Hr" [ref=e95] [cursor=pointer]:
            - /url: /series/dungeon-predator-novel
            - img [ref=e96]
            - generic [ref=e100]: 3Hr
          - link "Dungeon Predator" [ref=e102] [cursor=pointer]:
            - /url: /series/dungeon-predator-novel
          - link "Hodam" [ref=e103] [cursor=pointer]:
            - /url: /Hodam
          - text: "next: in 2 days"
        - listitem [ref=e104]:
          - link [ref=e106] [cursor=pointer]:
            - /url: /series/im-quitting-the-heros-party
            - img [ref=e107]
          - link "I'm Quitting the Hero's Party" [ref=e112] [cursor=pointer]:
            - /url: /series/im-quitting-the-heros-party
          - link "GRAPHICTORY" [ref=e113] [cursor=pointer]:
            - /url: /GRAPHICTORY
          - text: "next: in 4 days"
        - listitem [ref=e114]:
          - link "3Hr" [ref=e116] [cursor=pointer]:
            - /url: /series/his-elite-omega-novel
            - img [ref=e117]
            - generic [ref=e121]: 3Hr
          - link "His Elite Omega" [ref=e123] [cursor=pointer]:
            - /url: /series/his-elite-omega-novel
          - link "KawaiiChang" [ref=e124] [cursor=pointer]:
            - /url: /kawaiichang2
          - text: "next: in 4 days"
        - listitem [ref=e125]:
          - link "3Hr" [ref=e127] [cursor=pointer]:
            - /url: /series/a-man-that-smells-like-flowers-novel
            - img [ref=e128]
            - generic [ref=e132]: 3Hr
          - link "A Man That Smells Like Flowers" [ref=e134] [cursor=pointer]:
            - /url: /series/a-man-that-smells-like-flowers-novel
          - link "Rori" [ref=e135] [cursor=pointer]:
            - /url: /sbdrag
          - text: Apr 08
        - listitem [ref=e136]:
          - link [ref=e138] [cursor=pointer]:
            - /url: /series/villainesses-have-more-fun
            - img [ref=e139]
          - link "Villainesses Have More Fun" [ref=e144] [cursor=pointer]:
            - /url: /series/villainesses-have-more-fun
          - link "SWE" [ref=e145] [cursor=pointer]:
            - /url: /SWE01
          - text: Apr 17
        - listitem [ref=e146]:
          - link [ref=e148] [cursor=pointer]:
            - /url: /series/i-was-the-real-head-of-the-house
            - img [ref=e149]
          - link "I Was the Real Head of the House" [ref=e154] [cursor=pointer]:
            - /url: /series/i-was-the-real-head-of-the-house
          - link "HON" [ref=e155] [cursor=pointer]:
            - /url: /HON01
          - text: "next: in 17 hours"
  - contentinfo [ref=e156]:
    - generic [ref=e158]:
      - generic [ref=e159]:
        - link [ref=e161] [cursor=pointer]:
          - /url: /
        - list [ref=e163]:
          - listitem [ref=e164]:
            - link [ref=e165] [cursor=pointer]:
              - /url: https://instagram.com/tapas_app
          - listitem [ref=e167]:
            - link [ref=e168] [cursor=pointer]:
              - /url: https://twitter.com/tapas_app
          - listitem [ref=e170]:
            - link [ref=e171] [cursor=pointer]:
              - /url: https://www.youtube.com/tapasmedia
          - listitem [ref=e173]:
            - link [ref=e174] [cursor=pointer]:
              - /url: https://www.facebook.com/tapas.io
          - listitem [ref=e176]:
            - link [ref=e177] [cursor=pointer]:
              - /url: https://www.tiktok.com/@tapasmedia
      - list [ref=e180]:
        - listitem [ref=e181]:
          - link "Help" [ref=e182] [cursor=pointer]:
            - /url: https://help.tapas.io
        - listitem [ref=e183]:
          - link "Forums" [ref=e184] [cursor=pointer]:
            - /url: https://forums.tapas.io/
        - listitem [ref=e185]:
          - link "Contact" [ref=e186] [cursor=pointer]:
            - /url: mailto:feedback@tapas.io
        - listitem [ref=e187]:
          - link "Publish" [ref=e188] [cursor=pointer]:
            - /url: https://www.creators.tapas.io/
        - listitem [ref=e189]:
          - link "Newsfeed" [ref=e190] [cursor=pointer]:
            - /url: /newsfeed
      - generic [ref=e191]:
        - paragraph [ref=e192]: © 2026 Tapas Media.
        - paragraph [ref=e193]:
          - link "Terms" [ref=e194] [cursor=pointer]:
            - /url: /tos
          - text: •
          - link "Privacy" [ref=e195] [cursor=pointer]:
            - /url: /policies/privacy
          - text: •
          - link "Content" [ref=e196] [cursor=pointer]:
            - /url: /policies/content
          - text: •
          - link "Do Not Sell or Share My Personal Information" [ref=e197] [cursor=pointer]:
            - /url: /account/privacy-opt-out
  - link [ref=e198]:
    - /url: "#!/go-to-top"
```

# Test source

```ts
  426 | 
  427 | Then('팝업이 닫히고 댓글 목록에서 삭제된다.', async ({ page }) => {
  428 |   await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  429 | });
  430 | 
  431 | Then('팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  432 |   await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  433 | });
  434 | 
  435 | Then('수정한 텍스트가 댓글에 반영되어 노출된다.', async ({ page }) => {
  436 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  437 | });
  438 | 
  439 | Then('작성한 댓글이 제일 상단 목록에 노출된다.', async ({ page }) => {
  440 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  441 | });
  442 | 
  443 | Then('작성한 댓글이 추가로 상단 목록에 노출된다.', async ({ page }) => {
  444 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  445 | });
  446 | 
  447 | Then('작성한 답글이 등록되어 노출된다.', async ({ page }) => {
  448 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  449 | });
  450 | 
  451 | Then('댓글 목록이 노출된다.', async ({ page }) => {
  452 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  453 | });
  454 | 
  455 | Then('답글 목록이 노출된다.', async ({ page }) => {
  456 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  457 | });
  458 | 
  459 | Then('답글 접기 버튼이 노출된다.', async ({ page }) => {
  460 |   await expect(page.locator('a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
  461 | });
  462 | 
  463 | Then('댓글 입력창이 노출된다.', async ({ page }) => {
  464 |   await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  465 | });
  466 | 
  467 | Then('유저 프로필 페이지로 이동된다.', async ({ page }) => {
  468 |   await expect(page).toHaveURL(/\/(profile|creator)\//);
  469 | });
  470 | 
  471 | When('댓글 [Reply] 버튼 클릭', async ({ page }) => {
  472 |   await ensureOnEpisode(page);
  473 |   // 댓글 패널 열기
  474 |   const panelOpen = await page.locator('textarea.js-comment-box').isVisible().catch(() => false);
  475 |   if (!panelOpen) {
  476 |     await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
  477 |     await page.waitForTimeout(600);
  478 |   }
  479 |   // Reply 버튼은 hover 시만 visible — JS로 직접 클릭
  480 |   const clicked = await page.evaluate(() => {
  481 |     const btn = document.querySelector('a.js-comment-reply-btn') as HTMLElement | null;
  482 |     if (btn) { btn.click(); return true; }
  483 |     return false;
  484 |   });
  485 |   if (clicked) { await page.waitForTimeout(600); return; }
  486 |   await expect(page.locator('body')).toBeVisible();
  487 | });
  488 | 
  489 | When('답글 텍스트 입력 후 [Reply] 버튼 클릭', async ({ page }) => {
  490 |   const replyBox = page.locator('textarea.js-edit-box');
  491 |   if (!(await replyBox.isVisible().catch(() => false))) {
  492 |     await expect(page.locator('body')).toBeVisible(); return;
  493 |   }
  494 |   await replyBox.click();
  495 |   await replyBox.pressSequentially('Test reply', { delay: 30 });
  496 |   await page.waitForTimeout(400);
  497 |   // 답글 제출 버튼: a.js-save-edit (text: "Reply") — 댓글 제출과 다른 버튼
  498 |   await page.evaluate(() => {
  499 |     const btn = document.querySelector('a.js-save-edit') as HTMLElement | null;
  500 |     if (btn) btn.click();
  501 |   });
  502 |   await page.waitForTimeout(1000);
  503 | });
  504 | 
  505 | Then('Message 채움 표시 사라진다', async ({ page }) => {
  506 |   await expect(page).toHaveURL(/inbox/i);
  507 | });
  508 | 
  509 | Then('Message New 표시 사라진다.', async ({ page }) => {
  510 |   await expect(page).toHaveURL(/inbox/i);
  511 | });
  512 | 
  513 | Then('신규 메세지가 있다면 메세지 썸네일 우측에 New 표시가 노출된다.', async ({ page }) => {
  514 |   await expect(page).toHaveURL(/inbox/i);
  515 | });
  516 | 
  517 | Then(/^(All|Comments|Messages|Tapas|Series|Likes|Subs|Supporters) 목록없을때 안내문구 노출된다\.$/, async ({ page }) => {
  518 |   await expect(page.locator('.page-empty').first()).toBeVisible({ timeout: 5000 });
  519 | });
  520 | 
  521 | Then(/^(All|Comics) 목록 없을 때 안내 문구 노출된다\.$/, async ({ page }) => {
  522 |   await expect(page.locator('.page-empty').first()).toBeVisible({ timeout: 5000 });
  523 | });
  524 | 
  525 | Then(/^Settings(으로|로) 진입된다\.$/, async ({ page }) => {
> 526 |   await expect(page).toHaveURL(/settings|account/i);
      |                      ^ Error: expect(page).toHaveURL(expected) failed
  527 | });
  528 | 
  529 | Then(/^(Activity 화면|Inbox > gift 화면|인박스 .+화면)(으로|로) 복귀된다\.$/, async ({ page }) => {
  530 |   await expect(page.locator('.inbox-gift-item, li.item.js-item, .page-empty').first()).toBeVisible({ timeout: 5000 });
  531 | });
  532 | 
```