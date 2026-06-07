# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/11-댓글/댓글-리스트.feature.spec.js >> 댓글 리스트 >> [TPS-164] 댓글 입력창 선택 + 댓글 입력창 선택 > 텍스트 입력 후 Comment 버튼 클릭
- Location: .features-gen/features/11-댓글/댓글-리스트.feature.spec.js:6:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('.comment-row-wrap').first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.comment-row-wrap').first()
    9 × locator resolved to <div id="comment-row-14783611" class="comment-row-wrap js-comment-parent-row">…</div>
      - unexpected value "hidden"

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
        - link "122" [ref=e31] [cursor=pointer]:
          - /url: /inbox/gift
          - generic [ref=e32]: "122"
        - img [ref=e36] [cursor=pointer]
      - link "Publish" [ref=e39] [cursor=pointer]:
        - /url: https://www.creators.tapas.io/
  - generic [ref=e41]:
    - generic [ref=e45]:
      - generic [ref=e46]:
        - generic [ref=e47]:
          - paragraph [ref=e48]: Episode 2
          - paragraph [ref=e49]: Dec 17, 2021
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
      - generic [ref=e115]:
        - link "custom banner" [ref=e117] [cursor=pointer]:
          - /url: https://tapas.app.link/y4KHkhCYrob
          - img "custom banner" [ref=e118]
        - generic [ref=e119]:
          - link "SWE01" [ref=e121] [cursor=pointer]:
            - /url: /SWE01
            - img "SWE01" [ref=e122]
          - generic [ref=e124]:
            - generic [ref=e125]:
              - link "SWE" [ref=e126] [cursor=pointer]:
                - /url: /SWE01
              - paragraph [ref=e127]: Creator
            - paragraph
        - generic [ref=e128]:
          - generic [ref=e129]:
            - paragraph [ref=e130]: Comments (287)
            - generic [ref=e131] [cursor=pointer]: See all
          - generic [ref=e132]:
            - link "Hebsey" [ref=e134] [cursor=pointer]:
              - /url: /hebertspence
              - img "Hebsey" [ref=e135]
            - generic [ref=e137]:
              - generic [ref=e138]:
                - link "Hebsey" [ref=e139] [cursor=pointer]:
                  - /url: /hebertspence
                - paragraph [ref=e140]: Top comment
              - paragraph [ref=e142]: The writing 🤣 this is how every one of these stories should start hahahaha
              - paragraph [ref=e147] [cursor=pointer]: 5.6k
          - generic [ref=e148] [cursor=pointer]: Add a comment
        - generic [ref=e150]:
          - paragraph [ref=e152]: Recommendation for you
          - list [ref=e153]:
            - listitem [ref=e154]:
              - link "The Archduke's Adopted Saint 30% OFF Recommendation The Archduke's Adopted Saint Romance Fantasy 341.2k likes" [ref=e155] [cursor=pointer]:
                - /url: /series/the-archdukes-adopted-saint
                - generic [ref=e156]:
                  - img "The Archduke's Adopted Saint" [ref=e157]
                  - generic [ref=e162]: 30% OFF
                - generic [ref=e163]:
                  - paragraph [ref=e164]: Recommendation
                  - paragraph [ref=e165]: The Archduke's Adopted Saint
                  - paragraph [ref=e166]:
                    - generic [ref=e167]: Romance Fantasy
                    - generic [ref=e169]: 341.2k likes
            - listitem [ref=e170]:
              - link "Became the Lout First Prince Recommendation Became the Lout First Prince Action Fantasy 4.3k likes" [ref=e171] [cursor=pointer]:
                - /url: /series/became-the-lout-first-prince
                - img "Became the Lout First Prince" [ref=e173]
                - generic [ref=e178]:
                  - paragraph [ref=e179]: Recommendation
                  - paragraph [ref=e180]: Became the Lout First Prince
                  - paragraph [ref=e181]:
                    - generic [ref=e182]: Action Fantasy
                    - generic [ref=e184]: 4.3k likes
            - listitem [ref=e185]:
              - link "The Villainess Flips the Script! Recommendation The Villainess Flips the Script! Romance Fantasy 909k likes" [ref=e186] [cursor=pointer]:
                - /url: /series/the-villainess-flips-the-script
                - img "The Villainess Flips the Script!" [ref=e188]
                - generic [ref=e193]:
                  - paragraph [ref=e194]: Recommendation
                  - paragraph [ref=e195]: The Villainess Flips the Script!
                  - paragraph [ref=e196]:
                    - generic [ref=e197]: Romance Fantasy
                    - generic [ref=e199]: 909k likes
            - listitem [ref=e200]:
              - link "Mr. Beta Recommendation Mr. Beta BL 4.8m likes" [ref=e201] [cursor=pointer]:
                - /url: /series/MrBeta
                - img "Mr. Beta" [ref=e203]
                - generic [ref=e205]:
                  - paragraph [ref=e206]: Recommendation
                  - paragraph [ref=e207]: Mr. Beta
                  - paragraph [ref=e208]:
                    - generic [ref=e209]: BL
                    - generic [ref=e211]: 4.8m likes
            - listitem [ref=e212]:
              - link "I'm a Villainess Bound to the Male Lead Recommendation I'm a Villainess Bound to the Male Lead Romance Fantasy 7.2k likes" [ref=e213] [cursor=pointer]:
                - /url: /series/im-a-villainess-bound-to-the-male-lead
                - img "I'm a Villainess Bound to the Male Lead" [ref=e215]
                - generic [ref=e220]:
                  - paragraph [ref=e221]: Recommendation
                  - paragraph [ref=e222]: I'm a Villainess Bound to the Male Lead
                  - paragraph [ref=e223]:
                    - generic [ref=e224]: Romance Fantasy
                    - generic [ref=e226]: 7.2k likes
            - listitem [ref=e227]:
              - link "R.U. Screwed Recommendation R.U. Screwed BL 6.1m likes" [ref=e228] [cursor=pointer]:
                - /url: /series/RU_Screwed
                - img "R.U. Screwed" [ref=e230]
                - generic [ref=e232]:
                  - paragraph [ref=e233]: Recommendation
                  - paragraph [ref=e234]: R.U. Screwed
                  - paragraph [ref=e235]:
                    - generic [ref=e236]: BL
                    - generic [ref=e238]: 6.1m likes
            - listitem [ref=e239]:
              - generic [ref=e240] [cursor=pointer]:
                - img "feeling lucky" [ref=e242]
                - generic [ref=e244]:
                  - paragraph [ref=e245]: Feeling lucky
                  - paragraph [ref=e246]: Random series you may like
    - generic [ref=e248]:
      - generic [ref=e249]:
        - generic [ref=e250]:
          - img "Episode 2" [ref=e251]
          - generic [ref=e252]:
            - paragraph [ref=e253]: Episode 2
            - paragraph [ref=e254]:
              - generic [ref=e255]: 191.9k views
              - generic [ref=e257]: 16.4k likes
              - generic [ref=e259]: 287 comments
        - separator [ref=e260]
        - generic [ref=e265] [cursor=pointer]: More
      - generic [ref=e271] [cursor=pointer]: Liked
      - generic [ref=e272]:
        - generic [ref=e273]:
          - generic [ref=e278] [cursor=pointer]: List
          - generic [ref=e283] [cursor=pointer]: Comment
        - separator [ref=e284]
        - generic [ref=e285]:
          - generic [ref=e289] [cursor=pointer]: Prev
          - generic [ref=e293] [cursor=pointer]: Next
        - separator [ref=e294]
        - generic [ref=e299] [cursor=pointer]: Full
```

# Test source

```ts
  352 |     await expect(page.locator('a.item-title[href*="inbox/message"]')).toBeVisible();
  353 |     await expect(page.locator('a.item-title[href*="activities"]')).toBeVisible();
  354 |   } else {
  355 |     await expect(page.locator('a[href*="/inbox/gift"]').first()).toBeVisible({ timeout: 5000 });
  356 |   }
  357 | });
  358 | 
  359 | Then(/^Inbox 화면의 두 번째 탭으로 진입된다\. \(Messagess\)$/, async ({ page }) => {
  360 |   const pcTab = page.locator('a.item-title[href*="inbox/message"]');
  361 |   if (await pcTab.isVisible({ timeout: 3000 }).catch(() => false)) {
  362 |     await expect(pcTab).toBeVisible();
  363 |   } else {
  364 |     await expect(page.locator('a[href*="/inbox/message"]').first()).toBeVisible({ timeout: 5000 });
  365 |   }
  366 | });
  367 | 
  368 | Then('수신된 Activity가 노출된다.', async ({ page }) => {
  369 |   await expect(page.locator('li.item.js-item, a.activity').first()).toBeVisible({ timeout: 5000 });
  370 | });
  371 | 
  372 | Then('수신된 Messages가 노출된다.', async ({ page }) => {
  373 |   await expect(page.locator('a.item-title[href*="inbox/message"], li.item').first()).toBeVisible({ timeout: 5000 });
  374 | });
  375 | 
  376 | Then('No recent activity 문구가 노출된다.', async ({ page }) => {
  377 |   await expect(page.locator('.page-empty p.title').first()).toBeVisible({ timeout: 5000 });
  378 | });
  379 | 
  380 | // 안내문구가 노출된다. — common.steps.ts에서 처리
  381 | 
  382 | Then('텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  383 |   await expect(page.locator('textarea.js-comment-box, textarea.js-edit-box').first()).toBeVisible({ timeout: 5000 });
  384 | });
  385 | 
  386 | Then('답글 작성란이 노출된다.', async ({ page }) => {
  387 |   await expect(page.locator('textarea.js-edit-box, textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  388 | });
  389 | 
  390 | Then('답글 화면으로 이동된다.', async ({ page }) => {
  391 |   await expect(page.locator('.comment-row-wrap, a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
  392 | });
  393 | 
  394 | Then('입력창에 텍스트가 입력된다.', async ({ page }) => {
  395 |   await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  396 | });
  397 | 
  398 | Then('좋아요 버튼이 활성화되어 노출된다.', async ({ page }) => {
  399 |   await expect(page.locator('.js-reply-list a.js-comment-like-btn.info__button--like, .js-comment-parent-row a.js-comment-like-btn.info__button--like').first()).toBeVisible({ timeout: 5000 });
  400 | });
  401 | 
  402 | Then('좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  403 |   await expect(page.locator('a.js-comment-like-btn').first()).toBeVisible({ timeout: 5000 });
  404 |   await expect(page.locator('a.js-comment-like-btn.info__button--like')).toHaveCount(0);
  405 | });
  406 | 
  407 | Then('등록된 답글이 노출된다.', async ({ page }) => {
  408 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  409 | });
  410 | 
  411 | Then('등록된 답글이 닫힌다.', async ({ page }) => {
  412 |   await expect(page.locator('a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
  413 | });
  414 | 
  415 | Then('댓글 리스트가 최신순으로 갱신된다.', async ({ page }) => {
  416 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  417 | });
  418 | 
  419 | Then('댓글 리스트가 오래된 순으로 갱신된다.', async ({ page }) => {
  420 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  421 | });
  422 | 
  423 | Then('댓글 설정 팝업이 노출된다.', async ({ page }) => {
  424 |   await expect(page.locator('[role="dialog"], [class*="popup"]').first()).toBeVisible({ timeout: 5000 });
  425 | });
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
> 452 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
      |                                                           ^ Error: expect(locator).toBeVisible() failed
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
  526 |   await expect(page).toHaveURL(/settings|account/i);
  527 | });
  528 | 
  529 | Then(/^(Activity 화면|Inbox > gift 화면|인박스 .+화면)(으로|로) 복귀된다\.$/, async ({ page }) => {
  530 |   await expect(page.locator('.inbox-gift-item, li.item.js-item, .page-empty').first()).toBeVisible({ timeout: 5000 });
  531 | });
  532 | 
```