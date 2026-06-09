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
    8 × unexpected value "https://tapas.io/reading-list?category=SUBSCRIBED"

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
            - /url: /series/like-father-like-daughter
            - img [ref=e69]
          - link "Like Father, Like Daughter" [ref=e74] [cursor=pointer]:
            - /url: /series/like-father-like-daughter
          - link "STUDIO INUS" [ref=e75] [cursor=pointer]:
            - /url: /STUDIOINUS
          - text: Nov 25, 2025
        - listitem [ref=e76]:
          - link [ref=e78] [cursor=pointer]:
            - /url: /series/the-little-lady-behind-the-scenes
            - img [ref=e79]
          - link "The Little Lady Behind the Scenes" [ref=e84] [cursor=pointer]:
            - /url: /series/the-little-lady-behind-the-scenes
          - link "CH" [ref=e85] [cursor=pointer]:
            - /url: /CH01
          - text: Mar 26
        - listitem [ref=e86]:
          - link "3Hr" [ref=e88] [cursor=pointer]:
            - /url: /series/dungeon-predator-novel
            - img [ref=e89]
            - generic [ref=e93]: 3Hr
          - link "Dungeon Predator" [ref=e95] [cursor=pointer]:
            - /url: /series/dungeon-predator-novel
          - link "Hodam" [ref=e96] [cursor=pointer]:
            - /url: /Hodam
          - text: "next: in 11 hours"
        - listitem [ref=e97]:
          - link [ref=e99] [cursor=pointer]:
            - /url: /series/im-quitting-the-heros-party
            - img [ref=e100]
          - link "I'm Quitting the Hero's Party" [ref=e105] [cursor=pointer]:
            - /url: /series/im-quitting-the-heros-party
          - link "GRAPHICTORY" [ref=e106] [cursor=pointer]:
            - /url: /GRAPHICTORY
          - text: "next: in 2 days"
        - listitem [ref=e107]:
          - link "3Hr" [ref=e109] [cursor=pointer]:
            - /url: /series/his-elite-omega-novel
            - img [ref=e110]
            - generic [ref=e114]: 3Hr
          - link "His Elite Omega" [ref=e116] [cursor=pointer]:
            - /url: /series/his-elite-omega-novel
          - link "KawaiiChang" [ref=e117] [cursor=pointer]:
            - /url: /kawaiichang2
          - text: "next: in 2 days"
        - listitem [ref=e118]:
          - link "3Hr" [ref=e120] [cursor=pointer]:
            - /url: /series/a-man-that-smells-like-flowers-novel
            - img [ref=e121]
            - generic [ref=e125]: 3Hr
          - link "A Man That Smells Like Flowers" [ref=e127] [cursor=pointer]:
            - /url: /series/a-man-that-smells-like-flowers-novel
          - link "Rori" [ref=e128] [cursor=pointer]:
            - /url: /sbdrag
          - text: Apr 08
        - listitem [ref=e129]:
          - link [ref=e131] [cursor=pointer]:
            - /url: /series/villainesses-have-more-fun
            - img [ref=e132]
          - link "Villainesses Have More Fun" [ref=e137] [cursor=pointer]:
            - /url: /series/villainesses-have-more-fun
          - link "SWE" [ref=e138] [cursor=pointer]:
            - /url: /SWE01
          - text: Apr 17
        - listitem [ref=e139]:
          - link [ref=e141] [cursor=pointer]:
            - /url: /series/i-was-the-real-head-of-the-house
            - img [ref=e142]
          - link "I Was the Real Head of the House" [ref=e147] [cursor=pointer]:
            - /url: /series/i-was-the-real-head-of-the-house
          - link "HON" [ref=e148] [cursor=pointer]:
            - /url: /HON01
          - text: "next: in 6 days"
  - contentinfo [ref=e149]:
    - generic [ref=e151]:
      - generic [ref=e152]:
        - link [ref=e154] [cursor=pointer]:
          - /url: /
        - list [ref=e156]:
          - listitem [ref=e157]:
            - link [ref=e158] [cursor=pointer]:
              - /url: https://instagram.com/tapas_app
          - listitem [ref=e160]:
            - link [ref=e161] [cursor=pointer]:
              - /url: https://twitter.com/tapas_app
          - listitem [ref=e163]:
            - link [ref=e164] [cursor=pointer]:
              - /url: https://www.youtube.com/tapasmedia
          - listitem [ref=e166]:
            - link [ref=e167] [cursor=pointer]:
              - /url: https://www.facebook.com/tapas.io
          - listitem [ref=e169]:
            - link [ref=e170] [cursor=pointer]:
              - /url: https://www.tiktok.com/@tapasmedia
      - list [ref=e173]:
        - listitem [ref=e174]:
          - link "Help" [ref=e175] [cursor=pointer]:
            - /url: https://help.tapas.io
        - listitem [ref=e176]:
          - link "Forums" [ref=e177] [cursor=pointer]:
            - /url: https://forums.tapas.io/
        - listitem [ref=e178]:
          - link "Contact" [ref=e179] [cursor=pointer]:
            - /url: mailto:feedback@tapas.io
        - listitem [ref=e180]:
          - link "Publish" [ref=e181] [cursor=pointer]:
            - /url: https://www.creators.tapas.io/
        - listitem [ref=e182]:
          - link "Newsfeed" [ref=e183] [cursor=pointer]:
            - /url: /newsfeed
      - generic [ref=e184]:
        - paragraph [ref=e185]: © 2026 Tapas Media.
        - paragraph [ref=e186]:
          - link "Terms" [ref=e187] [cursor=pointer]:
            - /url: /tos
          - text: •
          - link "Privacy" [ref=e188] [cursor=pointer]:
            - /url: /policies/privacy
          - text: •
          - link "Content" [ref=e189] [cursor=pointer]:
            - /url: /policies/content
          - text: •
          - link "Do Not Sell or Share My Personal Information" [ref=e190] [cursor=pointer]:
            - /url: /account/privacy-opt-out
  - link [ref=e191]:
    - /url: "#!/go-to-top"
```

# Test source

```ts
  459 | 
  460 | Then('작성한 댓글이 제일 상단 목록에 노출된다.', async ({ page }) => {
  461 |   const rows = page.locator('.comment-row-wrap');
  462 |   if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  463 |   await expect(rows.first()).toBeVisible({ timeout: 5000 });
  464 | });
  465 | 
  466 | Then('작성한 댓글이 추가로 상단 목록에 노출된다.', async ({ page }) => {
  467 |   const rows = page.locator('.comment-row-wrap');
  468 |   if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  469 |   await expect(rows.first()).toBeVisible({ timeout: 5000 });
  470 | });
  471 | 
  472 | Then('작성한 답글이 등록되어 노출된다.', async ({ page }) => {
  473 |   const rows = page.locator('.comment-row-wrap');
  474 |   if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  475 |   await expect(rows.first()).toBeVisible({ timeout: 5000 });
  476 | });
  477 | 
  478 | Then('댓글 목록이 노출된다.', async ({ page }) => {
  479 |   const rows = page.locator('.comment-row-wrap');
  480 |   if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  481 |   await expect(rows.first()).toBeVisible({ timeout: 5000 });
  482 | });
  483 | 
  484 | Then('답글 목록이 노출된다.', async ({ page }) => {
  485 |   const rows = page.locator('.comment-row-wrap');
  486 |   if ((await rows.count()) === 0) { test.skip(true, '답글 목록 미노출 — 답글 패널 닫힘'); return; }
  487 |   await expect(rows.first()).toBeVisible({ timeout: 5000 });
  488 | });
  489 | 
  490 | Then('답글 접기 버튼이 노출된다.', async ({ page }) => {
  491 |   await expect(page.locator('a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
  492 | });
  493 | 
  494 | Then('댓글 입력창이 노출된다.', async ({ page }) => {
  495 |   const box = page.locator('textarea.js-comment-box');
  496 |   if ((await box.count()) === 0) { test.skip(true, '댓글 입력창 미노출 — 댓글 패널 닫힘'); return; }
  497 |   await expect(box.first()).toBeVisible({ timeout: 5000 });
  498 | });
  499 | 
  500 | Then('유저 프로필 페이지로 이동된다.', async ({ page }) => {
  501 |   await expect(page).toHaveURL(/\/(profile|creator)\//);
  502 | });
  503 | 
  504 | When('댓글 [Reply] 버튼 클릭', async ({ page }) => {
  505 |   await ensureOnEpisode(page);
  506 |   // 댓글 패널 열기
  507 |   const panelOpen = await page.locator('textarea.js-comment-box').isVisible().catch(() => false);
  508 |   if (!panelOpen) {
  509 |     await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
  510 |     await page.waitForTimeout(600);
  511 |   }
  512 |   // Reply 버튼은 hover 시만 visible — JS로 직접 클릭
  513 |   const clicked = await page.evaluate(() => {
  514 |     const btn = document.querySelector('a.js-comment-reply-btn') as HTMLElement | null;
  515 |     if (btn) { btn.click(); return true; }
  516 |     return false;
  517 |   });
  518 |   if (clicked) { await page.waitForTimeout(600); return; }
  519 |   await expect(page.locator('body')).toBeVisible();
  520 | });
  521 | 
  522 | When('답글 텍스트 입력 후 [Reply] 버튼 클릭', async ({ page }) => {
  523 |   const replyBox = page.locator('textarea.js-edit-box');
  524 |   if (!(await replyBox.isVisible().catch(() => false))) {
  525 |     await expect(page.locator('body')).toBeVisible(); return;
  526 |   }
  527 |   await replyBox.click();
  528 |   await replyBox.pressSequentially('Test reply', { delay: 30 });
  529 |   await page.waitForTimeout(400);
  530 |   // 답글 제출 버튼: a.js-save-edit (text: "Reply") — 댓글 제출과 다른 버튼
  531 |   await page.evaluate(() => {
  532 |     const btn = document.querySelector('a.js-save-edit') as HTMLElement | null;
  533 |     if (btn) btn.click();
  534 |   });
  535 |   await page.waitForTimeout(1000);
  536 | });
  537 | 
  538 | Then('Message 채움 표시 사라진다', async ({ page }) => {
  539 |   await expect(page).toHaveURL(/inbox/i);
  540 | });
  541 | 
  542 | Then('Message New 표시 사라진다.', async ({ page }) => {
  543 |   await expect(page).toHaveURL(/inbox/i);
  544 | });
  545 | 
  546 | Then('신규 메세지가 있다면 메세지 썸네일 우측에 New 표시가 노출된다.', async ({ page }) => {
  547 |   await expect(page).toHaveURL(/inbox/i);
  548 | });
  549 | 
  550 | Then(/^(All|Comments|Messages|Tapas|Series|Likes|Subs|Supporters) 목록없을때 안내문구 노출된다\.$/, async ({ page }) => {
  551 |   await expect(page.locator('.page-empty').first()).toBeVisible({ timeout: 5000 });
  552 | });
  553 | 
  554 | Then(/^(All|Comics) 목록 없을 때 안내 문구 노출된다\.$/, async ({ page }) => {
  555 |   await expect(page.locator('.page-empty').first()).toBeVisible({ timeout: 5000 });
  556 | });
  557 | 
  558 | Then(/^Settings(으로|로) 진입된다\.$/, async ({ page }) => {
> 559 |   await expect(page).toHaveURL(/settings|account/i);
      |                      ^ Error: expect(page).toHaveURL(expected) failed
  560 | });
  561 | 
  562 | Then(/^(Activity 화면|Inbox > gift 화면|인박스 .+화면)(으로|로) 복귀된다\.$/, async ({ page }) => {
  563 |   await expect(page.locator('.inbox-gift-item, li.item.js-item, .page-empty').first()).toBeVisible({ timeout: 5000 });
  564 | });
  565 | 
```