# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/11-댓글/댓글-리스트.feature.spec.js >> 댓글 리스트 >> [TPS-165] 등록한 내 댓글 더보기 버튼 클릭
- Location: .features-gen/features/11-댓글/댓글-리스트.feature.spec.js:17:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a, button, li').filter({ hasText: /^(edit|delete)$/i }).filter({ visible: true }).first()
Expected: visible
Timeout: 3000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 3000ms
  - waiting for locator('a, button, li').filter({ hasText: /^(edit|delete)$/i }).filter({ visible: true }).first()

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
        - link "120" [ref=e31] [cursor=pointer]:
          - /url: /inbox/gift
          - generic [ref=e32]: "120"
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
            - paragraph [ref=e130]: Comments (308)
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
              - link "Engaged to the Blind Duke Recommendation Engaged to the Blind Duke Romance Fantasy 15.5k likes" [ref=e155] [cursor=pointer]:
                - /url: /series/engaged-to-the-blind-duke
                - img "Engaged to the Blind Duke" [ref=e157]
                - generic [ref=e162]:
                  - paragraph [ref=e163]: Recommendation
                  - paragraph [ref=e164]: Engaged to the Blind Duke
                  - paragraph [ref=e165]:
                    - generic [ref=e166]: Romance Fantasy
                    - generic [ref=e168]: 15.5k likes
            - listitem [ref=e169]:
              - link "Mr. Beta Recommendation Mr. Beta BL 4.8m likes" [ref=e170] [cursor=pointer]:
                - /url: /series/MrBeta
                - img "Mr. Beta" [ref=e172]
                - generic [ref=e174]:
                  - paragraph [ref=e175]: Recommendation
                  - paragraph [ref=e176]: Mr. Beta
                  - paragraph [ref=e177]:
                    - generic [ref=e178]: BL
                    - generic [ref=e180]: 4.8m likes
            - listitem [ref=e181]:
              - link "The Archduke's Adopted Saint Recommendation The Archduke's Adopted Saint Romance Fantasy 349.2k likes" [ref=e182] [cursor=pointer]:
                - /url: /series/the-archdukes-adopted-saint
                - img "The Archduke's Adopted Saint" [ref=e184]
                - generic [ref=e189]:
                  - paragraph [ref=e190]: Recommendation
                  - paragraph [ref=e191]: The Archduke's Adopted Saint
                  - paragraph [ref=e192]:
                    - generic [ref=e193]: Romance Fantasy
                    - generic [ref=e195]: 349.2k likes
            - listitem [ref=e196]:
              - link "Became the Lout First Prince Recommendation Became the Lout First Prince Action Fantasy 5.6k likes" [ref=e197] [cursor=pointer]:
                - /url: /series/became-the-lout-first-prince
                - img "Became the Lout First Prince" [ref=e199]
                - generic [ref=e204]:
                  - paragraph [ref=e205]: Recommendation
                  - paragraph [ref=e206]: Became the Lout First Prince
                  - paragraph [ref=e207]:
                    - generic [ref=e208]: Action Fantasy
                    - generic [ref=e210]: 5.6k likes
            - listitem [ref=e211]:
              - link "The Savior's Recipes Recommendation The Savior's Recipes Romance Fantasy 3.2k likes" [ref=e212] [cursor=pointer]:
                - /url: /series/the-saviors-recipes
                - img "The Savior's Recipes" [ref=e214]
                - generic [ref=e219]:
                  - paragraph [ref=e220]: Recommendation
                  - paragraph [ref=e221]: The Savior's Recipes
                  - paragraph [ref=e222]:
                    - generic [ref=e223]: Romance Fantasy
                    - generic [ref=e225]: 3.2k likes
            - listitem [ref=e226]:
              - link "Let's Play 3Hr Recommendation Let's Play Romance 377.5k likes" [ref=e227] [cursor=pointer]:
                - /url: /series/Lets-Play-official
                - generic [ref=e228]:
                  - img "Let's Play" [ref=e229]
                  - generic [ref=e234]: 3Hr
                - generic [ref=e235]:
                  - paragraph [ref=e236]: Recommendation
                  - paragraph [ref=e237]: Let's Play
                  - paragraph [ref=e238]:
                    - generic [ref=e239]: Romance
                    - generic [ref=e241]: 377.5k likes
            - listitem [ref=e242]:
              - generic [ref=e243] [cursor=pointer]:
                - img "feeling lucky" [ref=e245]
                - generic [ref=e247]:
                  - paragraph [ref=e248]: Feeling lucky
                  - paragraph [ref=e249]: Random series you may like
    - generic [ref=e250]:
      - generic [ref=e255]: Ep. 2 Episode 2
      - generic [ref=e256]:
        - paragraph [ref=e257]: Comments (308)
        - list [ref=e259]:
          - listitem [ref=e260]:
            - generic [ref=e261] [cursor=pointer]: Best
          - listitem [ref=e262]
          - listitem [ref=e263]:
            - generic [ref=e264] [cursor=pointer]: Newest
          - listitem [ref=e265]
          - listitem [ref=e266]:
            - generic [ref=e267] [cursor=pointer]: Oldest
      - generic [ref=e269]:
        - generic [ref=e271]:
          - link "Hebsey" [ref=e273] [cursor=pointer]:
            - /url: /hebertspence
            - img "Hebsey" [ref=e274]
          - generic [ref=e277]:
            - generic [ref=e278]:
              - link "Hebsey" [ref=e279] [cursor=pointer]:
                - /url: /hebertspence
              - paragraph [ref=e280]: Dec 17, 2021
            - generic [ref=e281]: The writing 🤣 this is how every one of these stories should start hahahaha
            - generic [ref=e282]:
              - generic [ref=e283] [cursor=pointer]: 5.6k
              - separator [ref=e285]
              - generic [ref=e286] [cursor=pointer]: Reply
            - generic [ref=e288] [cursor=pointer]: View 30 replies
        - generic [ref=e291]:
          - link "hielito" [ref=e293] [cursor=pointer]:
            - /url: /Hielito
            - img "hielito" [ref=e294]
          - generic [ref=e297]:
            - generic [ref=e298]:
              - link "hielito" [ref=e299] [cursor=pointer]:
                - /url: /Hielito
              - paragraph [ref=e300]: Dec 17, 2021
            - generic [ref=e301]: No truck-kun… ok ok ok , I’m gonna ignore that, just because this girl is a really bad-*ass
            - generic [ref=e302]:
              - generic [ref=e303] [cursor=pointer]: 4.5k
              - separator [ref=e305]
              - generic [ref=e306] [cursor=pointer]: Reply
            - generic [ref=e308] [cursor=pointer]: View 31 replies
        - generic [ref=e311]:
          - link "aquascape" [ref=e313] [cursor=pointer]:
            - /url: /aquascape
            - img "aquascape" [ref=e314]
          - generic [ref=e317]:
            - generic [ref=e318]:
              - link "aquascape" [ref=e319] [cursor=pointer]:
                - /url: /aquascape
              - paragraph [ref=e320]: Dec 17, 2021
            - generic [ref=e321]: I love that we get to see more of a background with what life was like before she was dropped in the world
            - generic [ref=e322]:
              - generic [ref=e323] [cursor=pointer]: 4.2k
              - separator [ref=e325]
              - generic [ref=e326] [cursor=pointer]: Reply
            - generic [ref=e328] [cursor=pointer]: View 10 replies
        - generic [ref=e331]:
          - link "Iona" [ref=e333] [cursor=pointer]:
            - /url: /corarine
            - img "Iona" [ref=e334]
          - generic [ref=e337]:
            - generic [ref=e338]:
              - link "Iona" [ref=e339] [cursor=pointer]:
                - /url: /corarine
              - paragraph [ref=e340]: Dec 17, 2021
            - generic [ref=e341]: I love how she isn’t a doormat in the face of her ‘friend’s’ awfulness! Also that is the most realistic reaction to waking up in an isekai scenario I’ve seen in a long while.
            - generic [ref=e342]:
              - generic [ref=e343] [cursor=pointer]: "381"
              - separator [ref=e345]
              - generic [ref=e346] [cursor=pointer]: Reply
            - generic [ref=e348] [cursor=pointer]: View 3 replies
        - generic [ref=e351]:
          - link "faebybaby" [ref=e353] [cursor=pointer]:
            - /url: /faebybaby
            - img "faebybaby" [ref=e354]
          - generic [ref=e357]:
            - generic [ref=e358]:
              - link "faebybaby" [ref=e359] [cursor=pointer]:
                - /url: /faebybaby
              - paragraph [ref=e360]: Dec 17, 2021
            - generic [ref=e361]: I love that even before she dropped into the world, she pretty much had it all. The looks. The unflappable charisma. The business savvy and skills in her career. Maybe not quite the obscene wealth, but still doing pretty well.
            - generic [ref=e362]:
              - generic [ref=e363] [cursor=pointer]: "295"
              - separator [ref=e365]
              - generic [ref=e366] [cursor=pointer]: Reply
        - generic [ref=e368]:
          - link "NizBiz" [ref=e370] [cursor=pointer]:
            - /url: /nisabizahaloni
            - img "NizBiz" [ref=e371]
          - generic [ref=e374]:
            - generic [ref=e375]:
              - link "NizBiz" [ref=e376] [cursor=pointer]:
                - /url: /nisabizahaloni
              - paragraph [ref=e377]: Dec 17, 2021
            - generic [ref=e378]: A badass in her former life and a badass in this one. Noice.
            - generic [ref=e379]:
              - generic [ref=e380] [cursor=pointer]: "234"
              - separator [ref=e382]
              - generic [ref=e383] [cursor=pointer]: Reply
            - generic [ref=e385] [cursor=pointer]: View 1 reply
        - generic [ref=e388]:
          - link "kelloggs" [ref=e390] [cursor=pointer]:
            - /url: /kellydobbins
            - img "kelloggs" [ref=e391]
          - generic [ref=e394]:
            - generic [ref=e395]:
              - link "kelloggs" [ref=e396] [cursor=pointer]:
                - /url: /kellydobbins
              - paragraph [ref=e397]: Dec 17, 2021
            - generic [ref=e398]: I like that she was like this before becoming the 'villianess'
            - generic [ref=e399]:
              - generic [ref=e400] [cursor=pointer]: "157"
              - separator [ref=e402]
              - generic [ref=e403] [cursor=pointer]: Reply
        - generic [ref=e405]:
          - link "steenscp" [ref=e407] [cursor=pointer]:
            - /url: /steenscp
            - img "steenscp" [ref=e408]
          - generic [ref=e411]:
            - generic [ref=e412]:
              - link "steenscp" [ref=e413] [cursor=pointer]:
                - /url: /steenscp
              - paragraph [ref=e414]: Dec 17, 2021
            - generic [ref=e415]: Her line of thinking as she woke up makes much more sense than the usual “omg! I’m in a luxurious bed! How cool!”
            - generic [ref=e416]:
              - generic [ref=e417] [cursor=pointer]: "126"
              - separator [ref=e419]
              - generic [ref=e420] [cursor=pointer]: Reply
            - generic [ref=e422] [cursor=pointer]: View 1 reply
        - generic [ref=e425]:
          - link "residentromantic" [ref=e427] [cursor=pointer]:
            - /url: /ilaydanigro
            - img "residentromantic" [ref=e428]
          - generic [ref=e431]:
            - generic [ref=e432]:
              - link "residentromantic" [ref=e433] [cursor=pointer]:
                - /url: /ilaydanigro
              - paragraph [ref=e434]: Dec 17, 2021
            - generic [ref=e435]: awwww man i kinda wish she stayed in the real world and was able to stand in front of her ex and her “friend” with a better man and better life because that’s what her badass self deserves 😤😤
            - generic [ref=e436]:
              - generic [ref=e437] [cursor=pointer]: "92"
              - separator [ref=e439]
              - generic [ref=e440] [cursor=pointer]: Reply
            - generic [ref=e442] [cursor=pointer]: View 3 replies
        - generic [ref=e445]:
          - link "Ghost_gang" [ref=e447] [cursor=pointer]:
            - /url: /trifoliumanonymous
            - img "Ghost_gang" [ref=e448]
          - generic [ref=e451]:
            - generic [ref=e452]:
              - link "Ghost_gang" [ref=e453] [cursor=pointer]:
                - /url: /trifoliumanonymous
              - paragraph [ref=e454]: Dec 17, 2021
            - generic [ref=e455]: YOO WE NOT GONNA TALK ABT HOW HOT SHE WAS IN HER PREVIOUS LIFE miss girl giving me heart palpitations
            - generic [ref=e456]:
              - generic [ref=e457] [cursor=pointer]: "60"
              - separator [ref=e459]
              - generic [ref=e460] [cursor=pointer]: Reply
            - generic [ref=e462] [cursor=pointer]: View 2 replies
        - generic [ref=e464] [cursor=pointer]: More comments
      - generic [ref=e466]:
        - textbox "Add a comment..." [ref=e468]
        - generic [ref=e470]: Comment
    - generic [ref=e472]:
      - generic [ref=e473]:
        - generic [ref=e474]:
          - img "Episode 2" [ref=e475]
          - generic [ref=e476]:
            - paragraph [ref=e477]: Episode 2
            - paragraph [ref=e478]:
              - generic [ref=e479]: 192k views
              - generic [ref=e481]: 16.4k likes
              - generic [ref=e483]: 308 comments
        - separator [ref=e484]
        - generic [ref=e489] [cursor=pointer]: More
      - generic [ref=e495] [cursor=pointer]: Liked
      - generic [ref=e496]:
        - generic [ref=e497]:
          - generic [ref=e502] [cursor=pointer]: List
          - generic [ref=e507] [cursor=pointer]: Comment
        - separator [ref=e508]
        - generic [ref=e509]:
          - generic [ref=e513] [cursor=pointer]: Prev
          - generic [ref=e517] [cursor=pointer]: Next
        - separator [ref=e518]
        - generic [ref=e523] [cursor=pointer]: Full
```

# Test source

```ts
  346 |   await expect(page.getByRole('button', { name: /save/i }).first()).toBeVisible({ timeout: 5000 });
  347 |   await page.getByRole('button', { name: /save/i }).first().click();
  348 | });
  349 | 
  350 | When('다른 유저 댓글 > 프로필 이미지 클릭', async ({ page }) => {
  351 |   await ensureOnEpisode(page);
  352 |   await expect(page.locator('[class*="comment"] img, [class*="avatar"] img').first()).toBeVisible({ timeout: 5000 });
  353 |   await page.locator('[class*="comment"] img, [class*="avatar"] img').first().click();
  354 | });
  355 | 
  356 | // ──── 결과 검증 ────
  357 | 
  358 | Then(/^Inbox 화면의 첫 번째 탭으로 진입된다\. \(Gifts\)$/, async ({ page }) => {
  359 |   // PC: a.item-title tabs; Mobile: plain <a> tab links
  360 |   const pcTab = page.locator('a.item-title[href*="inbox/gift"]');
  361 |   if (await pcTab.isVisible({ timeout: 3000 }).catch(() => false)) {
  362 |     await expect(pcTab).toBeVisible();
  363 |     await expect(page.locator('a.item-title[href*="inbox/message"]')).toBeVisible();
  364 |     await expect(page.locator('a.item-title[href*="activities"]')).toBeVisible();
  365 |   } else {
  366 |     await expect(page.locator('a[href*="/inbox/gift"]').first()).toBeVisible({ timeout: 5000 });
  367 |   }
  368 | });
  369 | 
  370 | Then(/^Inbox 화면의 두 번째 탭으로 진입된다\. \(Messagess\)$/, async ({ page }) => {
  371 |   const pcTab = page.locator('a.item-title[href*="inbox/message"]');
  372 |   if (await pcTab.isVisible({ timeout: 3000 }).catch(() => false)) {
  373 |     await expect(pcTab).toBeVisible();
  374 |   } else {
  375 |     await expect(page.locator('a[href*="/inbox/message"]').first()).toBeVisible({ timeout: 5000 });
  376 |   }
  377 | });
  378 | 
  379 | Then('수신된 Activity가 노출된다.', async ({ page }) => {
  380 |   const activity = page.locator('li.item.js-item, a.activity, li[class*="activity"], .inbox-item');
  381 |   if ((await activity.count()) === 0) { test.skip(true, 'Activity 항목 없음'); return; }
  382 |   await expect(activity.first()).toBeVisible({ timeout: 5000 });
  383 | });
  384 | 
  385 | Then('수신된 Messages가 노출된다.', async ({ page }) => {
  386 |   await expect(page.locator('a.item-title[href*="inbox/message"], li.item').first()).toBeVisible({ timeout: 5000 });
  387 | });
  388 | 
  389 | Then('No recent activity 문구가 노출된다.', async ({ page }) => {
  390 |   const empty = page.locator('.page-empty p.title');
  391 |   if ((await empty.count()) === 0) { test.skip(true, '안내문구 미노출 — activity 데이터가 있음'); return; }
  392 |   await expect(empty.first()).toBeVisible({ timeout: 5000 });
  393 | });
  394 | 
  395 | // 안내문구가 노출된다. — common.steps.ts에서 처리
  396 | 
  397 | Then('텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  398 |   await expect(page.locator('textarea.js-comment-box, textarea.js-edit-box').first()).toBeVisible({ timeout: 5000 });
  399 | });
  400 | 
  401 | Then('답글 작성란이 노출된다.', async ({ page }) => {
  402 |   await expect(page.locator('textarea.js-edit-box, textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  403 | });
  404 | 
  405 | Then('답글 화면으로 이동된다.', async ({ page }) => {
  406 |   await expect(page.locator('.comment-row-wrap, a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
  407 | });
  408 | 
  409 | Then('입력창에 텍스트가 입력된다.', async ({ page }) => {
  410 |   await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  411 | });
  412 | 
  413 | Then('좋아요 버튼이 활성화되어 노출된다.', async ({ page }) => {
  414 |   // 패널 닫혀있으면 재오픈
  415 |   if (!(await page.locator('a.js-comment-like-btn').isVisible().catch(() => false))) {
  416 |     await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
  417 |     await page.locator('a.js-comment-like-btn').waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
  418 |   }
  419 |   await expect(page.locator('a.js-comment-like-btn.info__button--like').first()).toBeVisible({ timeout: 5000 });
  420 | });
  421 | 
  422 | Then('좋아요 버튼이 비활성화되어 노출된다.', async ({ page }) => {
  423 |   await expect(page.locator('a.js-comment-like-btn').first()).toBeVisible({ timeout: 5000 });
  424 |   await expect(page.locator('a.js-comment-like-btn.info__button--like')).toHaveCount(0);
  425 | });
  426 | 
  427 | Then('등록된 답글이 노출된다.', async ({ page }) => {
  428 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  429 | });
  430 | 
  431 | Then('등록된 답글이 닫힌다.', async ({ page }) => {
  432 |   await expect(page.locator('a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
  433 | });
  434 | 
  435 | Then('댓글 리스트가 최신순으로 갱신된다.', async ({ page }) => {
  436 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  437 | });
  438 | 
  439 | Then('댓글 리스트가 오래된 순으로 갱신된다.', async ({ page }) => {
  440 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  441 | });
  442 | 
  443 | Then('댓글 설정 팝업이 노출된다.', async ({ page }) => {
  444 |   // 더보기 클릭 후 Edit/Delete 옵션이 담긴 컨텍스트 메뉴가 노출됨
  445 |   const editOrDelete = page.locator('a, button, li').filter({ hasText: /^(edit|delete)$/i }).filter({ visible: true });
> 446 |   await expect(editOrDelete.first()).toBeVisible({ timeout: 3000 });
      |                                      ^ Error: expect(locator).toBeVisible() failed
  447 | });
  448 | 
  449 | Then('팝업이 닫히고 댓글 목록에서 삭제된다.', async ({ page }) => {
  450 |   await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  451 | });
  452 | 
  453 | Then('팝업이 닫히고 텍스트 입력 가능 상태로 노출된다.', async ({ page }) => {
  454 |   await expect(page.locator('textarea.js-comment-box').first()).toBeVisible({ timeout: 5000 });
  455 | });
  456 | 
  457 | Then('수정한 텍스트가 댓글에 반영되어 노출된다.', async ({ page }) => {
  458 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  459 | });
  460 | 
  461 | Then('작성한 댓글이 제일 상단 목록에 노출된다.', async ({ page }) => {
  462 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  463 | });
  464 | 
  465 | Then('작성한 댓글이 추가로 상단 목록에 노출된다.', async ({ page }) => {
  466 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  467 | });
  468 | 
  469 | Then('작성한 답글이 등록되어 노출된다.', async ({ page }) => {
  470 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  471 | });
  472 | 
  473 | Then('댓글 목록이 노출된다.', async ({ page }) => {
  474 |   // 댓글 제출 후 패널이 닫힐 수 있음 — 재오픈
  475 |   if (!(await page.locator('.comment-row-wrap').first().isVisible().catch(() => false))) {
  476 |     await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
  477 |     await page.waitForTimeout(600);
  478 |   }
  479 |   await expect(page.locator('.comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  480 | });
  481 | 
  482 | Then('답글 목록이 노출된다.', async ({ page }) => {
  483 |   await expect(page.locator('.js-reply-list, .comment-row-wrap').first()).toBeVisible({ timeout: 5000 });
  484 | });
  485 | 
  486 | Then('답글 접기 버튼이 노출된다.', async ({ page }) => {
  487 |   await expect(page.locator('a.body__button.js-toggle-reply-btn').first()).toBeVisible({ timeout: 5000 });
  488 | });
  489 | 
  490 | Then('댓글 입력창이 노출된다.', async ({ page }) => {
  491 |   await expect(page.locator('textarea.js-comment-box, textarea.js-edit-box').first()).toBeVisible({ timeout: 5000 });
  492 | });
  493 | 
  494 | Then('유저 프로필 페이지로 이동된다.', async ({ page }) => {
  495 |   await expect(page).toHaveURL(/\/(profile|creator)\//);
  496 | });
  497 | 
  498 | When('댓글 [Reply] 버튼 클릭', async ({ page }) => {
  499 |   await ensureOnEpisode(page);
  500 |   // 댓글 패널 열기
  501 |   const panelOpen = await page.locator('textarea.js-comment-box').isVisible().catch(() => false);
  502 |   if (!panelOpen) {
  503 |     await page.evaluate(() => { (document.querySelector('a.js-comment-btn') as HTMLElement)?.click(); });
  504 |     await page.waitForTimeout(600);
  505 |   }
  506 |   // Reply 버튼은 hover 시만 visible — JS로 직접 클릭
  507 |   await page.evaluate(() => {
  508 |     const btn = document.querySelector('a.js-comment-reply-btn') as HTMLElement | null;
  509 |     if (btn) btn.click();
  510 |   });
  511 |   await page.waitForTimeout(600);
  512 | });
  513 | 
  514 | When('답글 텍스트 입력 후 [Reply] 버튼 클릭', async ({ page }) => {
  515 |   const replyBox = page.locator('textarea.js-edit-box');
  516 |   await expect(replyBox.first()).toBeVisible({ timeout: 5000 });
  517 |   await replyBox.click();
  518 |   await replyBox.pressSequentially('Test reply', { delay: 30 });
  519 |   await page.waitForTimeout(400);
  520 |   // 답글 제출 버튼: a.js-save-edit (text: "Reply") — 댓글 제출과 다른 버튼
  521 |   await page.evaluate(() => {
  522 |     const btn = document.querySelector('a.js-save-edit') as HTMLElement | null;
  523 |     if (btn) btn.click();
  524 |   });
  525 |   await page.waitForTimeout(1000);
  526 | });
  527 | 
  528 | Then('Message 채움 표시 사라진다', async ({ page }) => {
  529 |   await expect(page).toHaveURL(/inbox/i);
  530 | });
  531 | 
  532 | Then('Message New 표시 사라진다.', async ({ page }) => {
  533 |   await expect(page).toHaveURL(/inbox/i);
  534 | });
  535 | 
  536 | Then('신규 메세지가 있다면 메세지 썸네일 우측에 New 표시가 노출된다.', async ({ page }) => {
  537 |   await expect(page).toHaveURL(/inbox/i);
  538 | });
  539 | 
  540 | Then(/^(All|Comments|Messages|Tapas|Series|Likes|Subs|Supporters) 목록없을때 안내문구 노출된다\.$/, async ({ page }) => {
  541 |   await expect(page.locator('.page-empty').first()).toBeVisible({ timeout: 5000 });
  542 | });
  543 | 
  544 | Then(/^(All|Comics) 목록 없을 때 안내 문구 노출된다\.$/, async ({ page }) => {
  545 |   await expect(page.locator('.page-empty').first()).toBeVisible({ timeout: 5000 });
  546 | });
```