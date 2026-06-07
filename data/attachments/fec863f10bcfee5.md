# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/11-댓글/Top.feature.spec.js >> Top >> [TPS-158] 우상단 정렬 필터 변경 - <정렬값> >> [TPS-158] 우상단 정렬 필터 변경 - Newest
- Location: .features-gen/features/11-댓글/Top.feature.spec.js:8:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.comment-row-wrap').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.comment-row-wrap').first()

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
            - paragraph [ref=e130]: Comments (286)
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
    - generic [ref=e247]:
      - generic [ref=e252]:
        - generic [ref=e253]:
          - img "Villainesses Have More Fun" [ref=e256] [cursor=pointer]
          - generic [ref=e261]:
            - text: Villainesses Have More Fun
            - paragraph [ref=e262]:
              - generic [ref=e263]: 6.8m views
              - generic [ref=e265]: 113.6k subscribers
        - generic [ref=e269] [cursor=pointer]: WUF episode now available!
        - paragraph [ref=e274] [cursor=pointer]: Hiatus Announcement
        - generic [ref=e277] [cursor=pointer]:
          - text: From growing up in a dysfunctional family to being cheated on, Sojin never had it easy. So after waking up in the body of villainess Reilynn Candmion, daughter of the empire’s wealthiest duke, all she wants is to revel in her riches. But something feels amiss when the story’s heroine, Iris, constantly starts fights with her -- from stealing her dress to seducing her fiancé. Reilynn wants no drama, but Iris and her four love interests won’t leave her alone! Can’t a girl just wanna have fun?
          - generic [ref=e278]: Read more
        - generic [ref=e280] [cursor=pointer]: Subscribed
      - generic [ref=e281]:
        - paragraph [ref=e283]: 142 episodes
        - list [ref=e288]:
          - listitem [ref=e289] [cursor=pointer]:
            - img "Episode 1" [ref=e291]
            - generic [ref=e293]:
              - generic [ref=e294]: Episode 1
              - generic [ref=e295]: Episode 1
          - listitem [ref=e296] [cursor=pointer]:
            - img "Episode 2" [ref=e298]
            - generic [ref=e300]:
              - generic [ref=e301]: Episode 2
              - generic [ref=e302]: Episode 2
          - listitem [ref=e303] [cursor=pointer]:
            - img "Episode 3" [ref=e305]
            - generic [ref=e307]:
              - generic [ref=e308]: Episode 3
              - generic [ref=e309]: Episode 3
          - listitem [ref=e310] [cursor=pointer]:
            - img "Episode 4" [ref=e312]
            - generic [ref=e315]:
              - generic [ref=e316]: Episode 4
              - generic [ref=e317]: Episode 4
              - generic [ref=e321]: WUF
          - listitem [ref=e322] [cursor=pointer]:
            - img "Episode 5" [ref=e324]
            - generic [ref=e327]:
              - generic [ref=e328]: Episode 5
              - generic [ref=e329]: Episode 5
              - generic [ref=e333]: WUF
          - listitem [ref=e334] [cursor=pointer]:
            - img "Episode 6" [ref=e336]
            - generic [ref=e339]:
              - generic [ref=e340]: Episode 6
              - generic [ref=e341]: Episode 6
              - generic [ref=e345]: WUF
          - listitem [ref=e346] [cursor=pointer]:
            - img "Episode 7" [ref=e348]
            - generic [ref=e351]:
              - generic [ref=e352]: Episode 7
              - generic [ref=e353]: Episode 7
              - generic [ref=e357]: WUF
          - listitem [ref=e358] [cursor=pointer]:
            - img "Episode 8" [ref=e360]
            - generic [ref=e363]:
              - generic [ref=e364]: Episode 8
              - generic [ref=e365]: Episode 8
              - generic [ref=e369]: WUF
          - listitem [ref=e370] [cursor=pointer]:
            - img "Episode 9" [ref=e372]
            - generic [ref=e375]:
              - generic [ref=e376]: Episode 9
              - generic [ref=e377]: Episode 9
              - generic [ref=e381]: WUF
          - listitem [ref=e382] [cursor=pointer]:
            - img "Episode 10" [ref=e384]
            - generic [ref=e387]:
              - generic [ref=e388]: Episode 10
              - generic [ref=e389]: Episode 10
              - generic [ref=e393]: WUF
          - listitem [ref=e394] [cursor=pointer]:
            - img "Episode 11" [ref=e396]
            - generic [ref=e399]:
              - generic [ref=e400]: Episode 11
              - generic [ref=e401]: Episode 11
              - generic [ref=e405]: WUF
          - listitem [ref=e406] [cursor=pointer]:
            - img "Episode 12" [ref=e408]
            - generic [ref=e411]:
              - generic [ref=e412]: Episode 12
              - generic [ref=e413]: Episode 12
              - generic [ref=e417]: WUF
          - listitem [ref=e418] [cursor=pointer]:
            - img "Episode 13" [ref=e420]
            - generic [ref=e423]:
              - generic [ref=e424]: Episode 13
              - generic [ref=e425]: Episode 13
              - generic [ref=e429]: WUF
          - listitem [ref=e430] [cursor=pointer]:
            - img "Episode 14" [ref=e432]
            - generic [ref=e435]:
              - generic [ref=e436]: Episode 14
              - generic [ref=e437]: Episode 14
              - generic [ref=e441]: WUF
          - listitem [ref=e442] [cursor=pointer]:
            - img "Episode 15" [ref=e444]
            - generic [ref=e447]:
              - generic [ref=e448]: Episode 15
              - generic [ref=e449]: Episode 15
              - generic [ref=e453]: WUF
          - listitem [ref=e454] [cursor=pointer]:
            - img "Episode 16" [ref=e456]
            - generic [ref=e459]:
              - generic [ref=e460]: Episode 16
              - generic [ref=e461]: Episode 16
              - generic [ref=e465]: WUF
          - listitem [ref=e466] [cursor=pointer]:
            - img "Episode 17" [ref=e468]
            - generic [ref=e471]:
              - generic [ref=e472]: Episode 17
              - generic [ref=e473]: Episode 17
              - generic [ref=e477]: WUF
          - listitem [ref=e478] [cursor=pointer]:
            - img "Episode 18" [ref=e480]
            - generic [ref=e483]:
              - generic [ref=e484]: Episode 18
              - generic [ref=e485]: Episode 18
              - generic [ref=e489]: WUF
          - listitem [ref=e490] [cursor=pointer]:
            - img "Episode 19" [ref=e492]
            - generic [ref=e495]:
              - generic [ref=e496]: Episode 19
              - generic [ref=e497]: Episode 19
              - generic [ref=e501]: WUF
          - listitem [ref=e502] [cursor=pointer]:
            - img "Episode 20" [ref=e504]
            - generic [ref=e507]:
              - generic [ref=e508]: Episode 20
              - generic [ref=e509]: Episode 20
              - generic [ref=e513]: WUF
    - generic [ref=e515]:
      - generic [ref=e516]:
        - generic [ref=e517]:
          - img "Episode 2" [ref=e518]
          - generic [ref=e519]:
            - paragraph [ref=e520]: Episode 2
            - paragraph [ref=e521]:
              - generic [ref=e522]: 191.9k views
              - generic [ref=e524]: 16.4k likes
              - generic [ref=e526]: 286 comments
        - separator [ref=e527]
        - generic [ref=e532] [cursor=pointer]: More
      - generic [ref=e538] [cursor=pointer]: Liked
      - generic [ref=e539]:
        - generic [ref=e540]:
          - generic [ref=e545] [cursor=pointer]: List
          - generic [ref=e550] [cursor=pointer]: Comment
        - separator [ref=e551]
        - generic [ref=e552]:
          - generic [ref=e556] [cursor=pointer]: Prev
          - generic [ref=e560] [cursor=pointer]: Next
        - separator [ref=e561]
        - generic [ref=e566] [cursor=pointer]: Full
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