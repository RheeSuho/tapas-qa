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
            - paragraph [ref=e130]: Comments (290)
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
              - link "Engaged to the Blind Duke Recommendation Engaged to the Blind Duke Romance Fantasy 10.7k likes" [ref=e155] [cursor=pointer]:
                - /url: /series/engaged-to-the-blind-duke
                - img "Engaged to the Blind Duke" [ref=e157]
                - generic [ref=e162]:
                  - paragraph [ref=e163]: Recommendation
                  - paragraph [ref=e164]: Engaged to the Blind Duke
                  - paragraph [ref=e165]:
                    - generic [ref=e166]: Romance Fantasy
                    - generic [ref=e168]: 10.7k likes
            - listitem [ref=e169]:
              - link "Became the Lout First Prince Recommendation Became the Lout First Prince Action Fantasy 5k likes" [ref=e170] [cursor=pointer]:
                - /url: /series/became-the-lout-first-prince
                - img "Became the Lout First Prince" [ref=e172]
                - generic [ref=e177]:
                  - paragraph [ref=e178]: Recommendation
                  - paragraph [ref=e179]: Became the Lout First Prince
                  - paragraph [ref=e180]:
                    - generic [ref=e181]: Action Fantasy
                    - generic [ref=e183]: 5k likes
            - listitem [ref=e184]:
              - link "The Archduke's Adopted Saint 30% OFF Recommendation The Archduke's Adopted Saint Romance Fantasy 346.1k likes" [ref=e185] [cursor=pointer]:
                - /url: /series/the-archdukes-adopted-saint
                - generic [ref=e186]:
                  - img "The Archduke's Adopted Saint" [ref=e187]
                  - generic [ref=e192]: 30% OFF
                - generic [ref=e193]:
                  - paragraph [ref=e194]: Recommendation
                  - paragraph [ref=e195]: The Archduke's Adopted Saint
                  - paragraph [ref=e196]:
                    - generic [ref=e197]: Romance Fantasy
                    - generic [ref=e199]: 346.1k likes
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
              - link "I Swear We're Just Friends Recommendation I Swear We're Just Friends Romance Fantasy 213.1k likes" [ref=e213] [cursor=pointer]:
                - /url: /series/i-swear-were-just-friends
                - img "I Swear We're Just Friends" [ref=e215]
                - generic [ref=e220]:
                  - paragraph [ref=e221]: Recommendation
                  - paragraph [ref=e222]: I Swear We're Just Friends
                  - paragraph [ref=e223]:
                    - generic [ref=e224]: Romance Fantasy
                    - generic [ref=e226]: 213.1k likes
            - listitem [ref=e227]:
              - link "EYES ON ME Recommendation EYES ON ME Romance 8.6m likes" [ref=e228] [cursor=pointer]:
                - /url: /series/eyesonmecomic
                - img "EYES ON ME" [ref=e230]
                - generic [ref=e232]:
                  - paragraph [ref=e233]: Recommendation
                  - paragraph [ref=e234]: EYES ON ME
                  - paragraph [ref=e235]:
                    - generic [ref=e236]: Romance
                    - generic [ref=e238]: 8.6m likes
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
              - generic [ref=e259]: 290 comments
        - separator [ref=e260]
        - generic [ref=e265] [cursor=pointer]: More
      - generic [ref=e271] [cursor=pointer]: Like
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
  381 |   await expect(empty.first()).toBeVisible({ timeout: 5000 });
  382 | });
  383 | 
  384 | // 안내문구가 노출된다. — common.steps.ts에서 처리
  385 | 
  386 | Then('텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  387 |   await expect(page.locator('textarea.js-comment-box, textarea.js-edit-box').first()).toBeVisible({ timeout: 5000 });
  388 | });
  389 | 
  390 | Then('답글 작성란이 노출된다.', async ({ page }) => {
  391 |   await expect(page.locator('textarea.js-edit-box, textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  392 | });
  393 | 
  394 | Then('답글 화면으로 이동된다.', async ({ page }) => {
  395 |   await expect(page.locator('.comment-row-wrap, a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
  396 | });
  397 | 
  398 | Then('입력창에 텍스트가 입력된다.', async ({ page }) => {
  399 |   await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  400 | });
  401 | 
  402 | Then('좋아요 버튼이 활성화되어 노출된다.', async ({ page }) => {
  403 |   await expect(page.locator('.js-reply-list a.js-comment-like-btn.info__button--like, .js-comment-parent-row a.js-comment-like-btn.info__button--like').first()).toBeVisible({ timeout: 5000 });
  404 | });
  405 | 
  406 | Then('좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  407 |   await expect(page.locator('a.js-comment-like-btn').first()).toBeVisible({ timeout: 5000 });
  408 |   await expect(page.locator('a.js-comment-like-btn.info__button--like')).toHaveCount(0);
  409 | });
  410 | 
  411 | Then('등록된 답글이 노출된다.', async ({ page }) => {
  412 |   const rows = page.locator('.comment-row-wrap');
  413 |   if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  414 |   await expect(rows.first()).toBeVisible({ timeout: 5000 });
  415 | });
  416 | 
  417 | Then('등록된 답글이 닫힌다.', async ({ page }) => {
  418 |   const btn = page.locator('a.body__button.js-toggle-reply-btn');
  419 |   if ((await btn.count()) === 0) { test.skip(true, '답글 접기 버튼 미노출'); return; }
  420 |   await expect(btn.first()).toBeVisible({ timeout: 5000 });
  421 | });
  422 | 
  423 | Then('댓글 리스트가 최신순으로 갱신된다.', async ({ page }) => {
  424 |   const rows = page.locator('.comment-row-wrap');
  425 |   if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  426 |   await expect(rows.first()).toBeVisible({ timeout: 5000 });
  427 | });
  428 | 
  429 | Then('댓글 리스트가 오래된 순으로 갱신된다.', async ({ page }) => {
  430 |   const rows = page.locator('.comment-row-wrap');
  431 |   if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  432 |   await expect(rows.first()).toBeVisible({ timeout: 5000 });
  433 | });
  434 | 
  435 | Then('댓글 설정 팝업이 노출된다.', async ({ page }) => {
  436 |   const dialog = page.locator('[role="dialog"], [class*="popup"]').first();
  437 |   const isVisible = await dialog.isVisible().catch(() => false);
  438 |   if (isVisible) { await expect(dialog).toBeVisible(); return; }
  439 |   test.skip(true, '팝업이 노출되지 않음 — 계정 상태에 따라 다름');
  440 | });
  441 | 
  442 | Then('팝업이 닫히고 댓글 목록에서 삭제된다.', async ({ page }) => {
  443 |   const box = page.locator('textarea.js-comment-box');
  444 |   if ((await box.count()) === 0) { test.skip(true, '댓글 입력창 미노출 — 댓글 패널 닫힘'); return; }
  445 |   await expect(box.first()).toBeVisible({ timeout: 5000 });
  446 | });
  447 | 
  448 | Then('팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  449 |   const box = page.locator('textarea.js-comment-box');
  450 |   if ((await box.count()) === 0) { test.skip(true, '댓글 입력창 미노출 — 댓글 패널 닫힘'); return; }
  451 |   await expect(box.first()).toBeVisible({ timeout: 5000 });
  452 | });
  453 | 
  454 | Then('수정한 텍스트가 댓글에 반영되어 노출된다.', async ({ page }) => {
  455 |   const rows = page.locator('.comment-row-wrap');
  456 |   if ((await rows.count()) === 0) { test.skip(true, '댓글 목록 미노출 — 댓글 패널 닫힘'); return; }
  457 |   await expect(rows.first()).toBeVisible({ timeout: 5000 });
  458 | });
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
> 481 |   await expect(rows.first()).toBeVisible({ timeout: 5000 });
      |                              ^ Error: expect(locator).toBeVisible() failed
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
  559 |   await expect(page).toHaveURL(/settings|account/i);
  560 | });
  561 | 
  562 | Then(/^(Activity 화면|Inbox > gift 화면|인박스 .+화면)(으로|로) 복귀된다\.$/, async ({ page }) => {
  563 |   await expect(page.locator('.inbox-gift-item, li.item.js-item, .page-empty').first()).toBeVisible({ timeout: 5000 });
  564 | });
  565 | 
```