# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/09-뷰어-(Comic)/하단-툴바.feature.spec.js >> 하단 툴바 >> [TPS-134] Like 버튼 클릭 + Like 버튼 재클릭
- Location: .features-gen/features/09-뷰어-(Comic)/하단-툴바.feature.spec.js:44:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.click: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('a.js-episode-like-btn').first()

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
        - button "Log in" [ref=e29] [cursor=pointer]
        - link "Publish" [ref=e31] [cursor=pointer]:
          - /url: https://www.creators.tapas.io/
  - generic [ref=e33]:
    - generic [ref=e37]:
      - generic [ref=e38]:
        - generic [ref=e39]:
          - paragraph [ref=e40]: Episode 2
          - paragraph [ref=e41]: Dec 17, 2021
        - article [ref=e42]:
          - img [ref=e43]
          - img [ref=e44]
          - img [ref=e45]
          - img [ref=e46]
          - img [ref=e47]
          - img [ref=e48]
          - img [ref=e49]
          - img [ref=e50]
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
      - generic [ref=e107]:
        - link "custom banner" [ref=e109] [cursor=pointer]:
          - /url: https://tapas.app.link/y4KHkhCYrob
          - img "custom banner" [ref=e110]
        - generic [ref=e111]:
          - link "SWE01" [ref=e113] [cursor=pointer]:
            - /url: /SWE01
            - img "SWE01" [ref=e114]
          - generic [ref=e116]:
            - generic [ref=e117]:
              - link "SWE" [ref=e118] [cursor=pointer]:
                - /url: /SWE01
              - paragraph [ref=e119]: Creator
            - paragraph
        - generic [ref=e120]:
          - generic [ref=e121]:
            - paragraph [ref=e122]: Comments (276)
            - generic [ref=e123] [cursor=pointer]: See all
          - generic [ref=e124]:
            - link "Hebsey" [ref=e126] [cursor=pointer]:
              - /url: /hebertspence
              - img "Hebsey" [ref=e127]
            - generic [ref=e129]:
              - generic [ref=e130]:
                - link "Hebsey" [ref=e131] [cursor=pointer]:
                  - /url: /hebertspence
                - paragraph [ref=e132]: Top comment
              - paragraph [ref=e134]: The writing 🤣 this is how every one of these stories should start hahahaha
              - paragraph [ref=e139] [cursor=pointer]: 5.6k
          - generic [ref=e140] [cursor=pointer]: Add a comment
        - generic [ref=e142]:
          - paragraph [ref=e144]: Recommendation for you
          - list [ref=e145]:
            - listitem [ref=e146]:
              - link "I Am the Commander of the Second Male Lead's Knights Recommendation I Am the Commander of the Second Male Lead's Knights Romance Fantasy 12k likes" [ref=e147] [cursor=pointer]:
                - /url: /series/i-am-the-commander-of-the-second-male-leads-knights
                - img "I Am the Commander of the Second Male Lead's Knights" [ref=e149]
                - generic [ref=e154]:
                  - paragraph [ref=e155]: Recommendation
                  - paragraph [ref=e156]: I Am the Commander of the Second Male Lead's Knights
                  - paragraph [ref=e157]:
                    - generic [ref=e158]: Romance Fantasy
                    - generic [ref=e160]: 12k likes
            - listitem [ref=e161]:
              - link "Mr. Beta Recommendation Mr. Beta BL 4.8m likes" [ref=e162] [cursor=pointer]:
                - /url: /series/MrBeta
                - img "Mr. Beta" [ref=e164]
                - generic [ref=e166]:
                  - paragraph [ref=e167]: Recommendation
                  - paragraph [ref=e168]: Mr. Beta
                  - paragraph [ref=e169]:
                    - generic [ref=e170]: BL
                    - generic [ref=e172]: 4.8m likes
            - listitem [ref=e173]:
              - link "Forget My Husband, I'll Go Make Money Recommendation Forget My Husband, I'll Go Make Money Romance Fantasy 466.1k likes" [ref=e174] [cursor=pointer]:
                - /url: /series/forget-my-husband-ill-go-make-money
                - img "Forget My Husband, I'll Go Make Money" [ref=e176]
                - generic [ref=e181]:
                  - paragraph [ref=e182]: Recommendation
                  - paragraph [ref=e183]: Forget My Husband, I'll Go Make Money
                  - paragraph [ref=e184]:
                    - generic [ref=e185]: Romance Fantasy
                    - generic [ref=e187]: 466.1k likes
            - listitem [ref=e188]:
              - link "Let's Play 3Hr Recommendation Let's Play Romance 365.6k likes" [ref=e189] [cursor=pointer]:
                - /url: /series/Lets-Play-official
                - generic [ref=e190]:
                  - img "Let's Play" [ref=e191]
                  - generic [ref=e196]: 3Hr
                - generic [ref=e197]:
                  - paragraph [ref=e198]: Recommendation
                  - paragraph [ref=e199]: Let's Play
                  - paragraph [ref=e200]:
                    - generic [ref=e201]: Romance
                    - generic [ref=e203]: 365.6k likes
            - listitem [ref=e204]:
              - link "How to survive as a maid in a horror game 30% OFF Recommendation How to survive as a maid in a horror game Romance Fantasy 109.8k likes" [ref=e205] [cursor=pointer]:
                - /url: /series/how-to-survive-as-a-maid-in-a-horror-game
                - generic [ref=e206]:
                  - img "How to survive as a maid in a horror game" [ref=e207]
                  - generic [ref=e212]: 30% OFF
                - generic [ref=e213]:
                  - paragraph [ref=e214]: Recommendation
                  - paragraph [ref=e215]: How to survive as a maid in a horror game
                  - paragraph [ref=e216]:
                    - generic [ref=e217]: Romance Fantasy
                    - generic [ref=e219]: 109.8k likes
            - listitem [ref=e220]:
              - link "SOS! Fledgling Report Recommendation SOS! Fledgling Report BL 2k likes" [ref=e221] [cursor=pointer]:
                - /url: /series/sos-fledgling-report
                - img "SOS! Fledgling Report" [ref=e223]
                - generic [ref=e228]:
                  - paragraph [ref=e229]: Recommendation
                  - paragraph [ref=e230]: SOS! Fledgling Report
                  - paragraph [ref=e231]:
                    - generic [ref=e232]: BL
                    - generic [ref=e234]: 2k likes
            - listitem [ref=e235]:
              - generic [ref=e236] [cursor=pointer]:
                - img "feeling lucky" [ref=e238]
                - generic [ref=e240]:
                  - paragraph [ref=e241]: Feeling lucky
                  - paragraph [ref=e242]: Random series you may like
    - generic [ref=e243]:
      - generic [ref=e248]:
        - generic [ref=e249]:
          - img "Villainesses Have More Fun" [ref=e252] [cursor=pointer]
          - generic [ref=e257]:
            - text: Villainesses Have More Fun
            - paragraph [ref=e258]:
              - generic [ref=e259]: 6.7m views
              - generic [ref=e261]: 113.6k subscribers
        - link "Login to unlock free episodes!" [ref=e263] [cursor=pointer]:
          - /url: /account/signin
          - generic [ref=e265]: Login to unlock free episodes!
        - paragraph [ref=e270] [cursor=pointer]: Hiatus Announcement
        - generic [ref=e273] [cursor=pointer]:
          - text: From growing up in a dysfunctional family to being cheated on, Sojin never had it easy. So after waking up in the body of villainess Reilynn Candmion, daughter of the empire’s wealthiest duke, all she wants is to revel in her riches. But something feels amiss when the story’s heroine, Iris, constantly starts fights with her -- from stealing her dress to seducing her fiancé. Reilynn wants no drama, but Iris and her four love interests won’t leave her alone! Can’t a girl just wanna have fun?
          - generic [ref=e274]: Read more
        - generic [ref=e276] [cursor=pointer]: Subscribe
      - generic [ref=e277]:
        - paragraph [ref=e279]: 142 episodes
        - list [ref=e284]:
          - listitem [ref=e285] [cursor=pointer]:
            - img "Episode 1" [ref=e287]
            - generic [ref=e289]:
              - generic [ref=e290]: Episode 1
              - generic [ref=e291]: Episode 1
          - listitem [ref=e292] [cursor=pointer]:
            - img "Episode 2" [ref=e294]
            - generic [ref=e296]:
              - generic [ref=e297]: Episode 2
              - generic [ref=e298]: Episode 2
          - listitem [ref=e299] [cursor=pointer]:
            - img "Episode 3" [ref=e301]
            - generic [ref=e303]:
              - generic [ref=e304]: Episode 3
              - generic [ref=e305]: Episode 3
          - listitem [ref=e306] [cursor=pointer]:
            - img "Episode 4" [ref=e308]
            - generic [ref=e311]:
              - generic [ref=e312]: Episode 4
              - generic [ref=e313]: Episode 4
              - generic [ref=e317]: WUF
          - listitem [ref=e318] [cursor=pointer]:
            - img "Episode 5" [ref=e320]
            - generic [ref=e323]:
              - generic [ref=e324]: Episode 5
              - generic [ref=e325]: Episode 5
              - generic [ref=e329]: WUF
          - listitem [ref=e330] [cursor=pointer]:
            - img "Episode 6" [ref=e332]
            - generic [ref=e335]:
              - generic [ref=e336]: Episode 6
              - generic [ref=e337]: Episode 6
              - generic [ref=e341]: WUF
          - listitem [ref=e342] [cursor=pointer]:
            - img "Episode 7" [ref=e344]
            - generic [ref=e347]:
              - generic [ref=e348]: Episode 7
              - generic [ref=e349]: Episode 7
              - generic [ref=e353]: WUF
          - listitem [ref=e354] [cursor=pointer]:
            - img "Episode 8" [ref=e356]
            - generic [ref=e359]:
              - generic [ref=e360]: Episode 8
              - generic [ref=e361]: Episode 8
              - generic [ref=e365]: WUF
          - listitem [ref=e366] [cursor=pointer]:
            - img "Episode 9" [ref=e368]
            - generic [ref=e371]:
              - generic [ref=e372]: Episode 9
              - generic [ref=e373]: Episode 9
              - generic [ref=e377]: WUF
          - listitem [ref=e378] [cursor=pointer]:
            - img "Episode 10" [ref=e380]
            - generic [ref=e383]:
              - generic [ref=e384]: Episode 10
              - generic [ref=e385]: Episode 10
              - generic [ref=e389]: WUF
          - listitem [ref=e390] [cursor=pointer]:
            - img "Episode 11" [ref=e392]
            - generic [ref=e395]:
              - generic [ref=e396]: Episode 11
              - generic [ref=e397]: Episode 11
              - generic [ref=e401]: WUF
          - listitem [ref=e402] [cursor=pointer]:
            - img "Episode 12" [ref=e404]
            - generic [ref=e407]:
              - generic [ref=e408]: Episode 12
              - generic [ref=e409]: Episode 12
              - generic [ref=e413]: WUF
          - listitem [ref=e414] [cursor=pointer]:
            - img "Episode 13" [ref=e416]
            - generic [ref=e419]:
              - generic [ref=e420]: Episode 13
              - generic [ref=e421]: Episode 13
              - generic [ref=e425]: WUF
          - listitem [ref=e426] [cursor=pointer]:
            - img "Episode 14" [ref=e428]
            - generic [ref=e431]:
              - generic [ref=e432]: Episode 14
              - generic [ref=e433]: Episode 14
              - generic [ref=e437]: WUF
          - listitem [ref=e438] [cursor=pointer]:
            - img "Episode 15" [ref=e440]
            - generic [ref=e443]:
              - generic [ref=e444]: Episode 15
              - generic [ref=e445]: Episode 15
              - generic [ref=e449]: WUF
          - listitem [ref=e450] [cursor=pointer]:
            - img "Episode 16" [ref=e452]
            - generic [ref=e455]:
              - generic [ref=e456]: Episode 16
              - generic [ref=e457]: Episode 16
              - generic [ref=e461]: WUF
          - listitem [ref=e462] [cursor=pointer]:
            - img "Episode 17" [ref=e464]
            - generic [ref=e467]:
              - generic [ref=e468]: Episode 17
              - generic [ref=e469]: Episode 17
              - generic [ref=e473]: WUF
          - listitem [ref=e474] [cursor=pointer]:
            - img "Episode 18" [ref=e476]
            - generic [ref=e479]:
              - generic [ref=e480]: Episode 18
              - generic [ref=e481]: Episode 18
              - generic [ref=e485]: WUF
          - listitem [ref=e486] [cursor=pointer]:
            - img "Episode 19" [ref=e488]
            - generic [ref=e491]:
              - generic [ref=e492]: Episode 19
              - generic [ref=e493]: Episode 19
              - generic [ref=e497]: WUF
          - listitem [ref=e498] [cursor=pointer]:
            - img "Episode 20" [ref=e500]
            - generic [ref=e503]:
              - generic [ref=e504]: Episode 20
              - generic [ref=e505]: Episode 20
              - generic [ref=e509]: WUF
    - generic [ref=e511]:
      - generic [ref=e512]:
        - generic [ref=e513]:
          - img "Episode 2" [ref=e514]
          - generic [ref=e515]:
            - paragraph [ref=e516]: Episode 2
            - paragraph [ref=e517]:
              - generic [ref=e518]: 191.3k views
              - generic [ref=e520]: 16.4k likes
              - generic [ref=e522]: 276 comments
        - separator [ref=e523]
        - generic [ref=e528] [cursor=pointer]: More
      - generic [ref=e534] [cursor=pointer]: Like
      - generic [ref=e535]:
        - generic [ref=e536]:
          - generic [ref=e541] [cursor=pointer]: List
          - generic [ref=e546] [cursor=pointer]: Comment
        - separator [ref=e547]
        - generic [ref=e548]:
          - generic [ref=e552] [cursor=pointer]: Prev
          - generic [ref=e556] [cursor=pointer]: Next
        - separator [ref=e557]
        - generic [ref=e562] [cursor=pointer]: Full
```

# Test source

```ts
  68  | 
  69  | When('GNB > Home > Novels > Daily 서브탭 진입', async ({ page }) => {
  70  |   await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  71  |   await page.getByRole('link', { name: /^novels$/i }).first().click();
  72  |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  73  |   const daily = page.getByRole('link', { name: /^daily$/i });
  74  |   await daily.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  75  |   if ((await daily.count()) > 0) await daily.first().click();
  76  |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  77  |   const seriesLink = page.locator('a[href*="/series/"]').first();
  78  |   await seriesLink.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  79  |   if ((await seriesLink.count()) > 0) {
  80  |     await seriesLink.click();
  81  |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  82  |   }
  83  | });
  84  | 
  85  | When('첫 번째 에피소드 클릭', async ({ page }) => {
  86  |   const ep = page.locator('a.episode-item').first();
  87  |   if ((await ep.count()) > 0) { await ep.click(); return; }
  88  |   await expect(page.locator('body')).toBeVisible();
  89  | });
  90  | 
  91  | // ──── 툴바 / 하단 영역 ────
  92  | 
  93  | When('하단 툴바 확인', async ({ page }) => {
  94  |   await ensureOnEpisode(page);
  95  | });
  96  | 
  97  | When('Bottom 영역 노출 확인', async ({ page }) => {
  98  |   await ensureOnEpisode(page);
  99  | });
  100 | 
  101 | When('하단 영역 확인', async ({ page }) => {
  102 |   // Background '소설 뷰어 진입'이 이미 에피소드로 이동 — 상태 확인만
  103 |   await expect(page.locator('body')).toBeVisible();
  104 | });
  105 | 
  106 | When('뷰어 하단 툴바 > [이전회차] 버튼 클릭', async ({ page }) => {
  107 |   await ensureOnEpisode(page);
  108 |   await page.locator('a.js-prev-ep-btn').first().click();
  109 | });
  110 | 
  111 | When('뷰어 하단 툴바 > [다음회차] 버튼 클릭', async ({ page }) => {
  112 |   await ensureOnEpisode(page);
  113 |   await page.locator('a.js-next-ep-btn').first().click();
  114 | });
  115 | 
  116 | When('다음회차 이동 버튼 클릭', async ({ page }) => {
  117 |   await ensureOnEpisode(page);
  118 |   await page.locator('a.js-next-ep-btn').first().click();
  119 | });
  120 | 
  121 | When('다음 회차 이동 버튼 클릭', async ({ page }) => {
  122 |   await ensureOnEpisode(page);
  123 |   await page.locator('a.js-next-ep-btn').first().click();
  124 | });
  125 | 
  126 | When('이전회차 이동 버튼 클릭', async ({ page }) => {
  127 |   await ensureOnEpisode(page);
  128 |   await page.locator('a.js-prev-ep-btn').first().click();
  129 | });
  130 | 
  131 | When('이전 회차 이동 버튼 클릭', async ({ page }) => {
  132 |   await ensureOnEpisode(page);
  133 |   await page.locator('a.js-prev-ep-btn').first().click();
  134 | });
  135 | 
  136 | // ──── 툴바 버튼 ────
  137 | 
  138 | When('[더보기] 버튼 클릭', async ({ page }) => {
  139 |   await ensureOnEpisode(page);
  140 |   await page.locator('a.toolbar-btn[data-type="more"]').click();
  141 |   await page.waitForTimeout(500);
  142 | });
  143 | 
  144 | When('하단 [더보기] 버튼 클릭', async ({ page }) => {
  145 |   await ensureOnEpisode(page);
  146 |   await page.locator('a.toolbar-btn[data-type="more"]').click();
  147 |   await page.waitForTimeout(500);
  148 | });
  149 | 
  150 | When('[더보기] 버튼 재클릭 > [Subscribe] 버튼 클릭', async ({ page }) => {
  151 |   await ensureOnEpisode(page);
  152 |   const moreBtn = page.locator('a.toolbar-btn[data-type="more"]');
  153 |   if ((await moreBtn.count()) > 0) await moreBtn.click();
  154 |   const subBtn = page.getByRole('button', { name: /subscribe/i });
  155 |   if ((await subBtn.count()) > 0) { await subBtn.first().click(); return; }
  156 |   await expect(page.locator('body')).toBeVisible();
  157 | });
  158 | 
  159 | When('[Unsubscribe] 버튼 클릭', async ({ page }) => {
  160 |   await ensureOnEpisode(page);
  161 |   const btn = page.getByRole('link', { name: /unsubscribe/i });
  162 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  163 |   await expect(page.locator('body')).toBeVisible();
  164 | });
  165 | 
  166 | When('[Like] 버튼 클릭', async ({ page }) => {
  167 |   await ensureOnEpisode(page);
> 168 |   await page.locator('a.js-episode-like-btn').first().click();
      |                                                       ^ Error: locator.click: Test timeout of 120000ms exceeded.
  169 | });
  170 | 
  171 | When('[Like] 버튼 재클릭', async ({ page }) => {
  172 |   await ensureOnEpisode(page);
  173 |   await page.locator('a.js-episode-like-btn').first().click();
  174 | });
  175 | 
  176 | When('[좋아요] 버튼 선택', async ({ page }) => {
  177 |   await ensureOnEpisode(page);
  178 |   await page.locator('a.js-episode-like-btn').first().click();
  179 | });
  180 | 
  181 | When('[좋아요] 버튼 재선택', async ({ page }) => {
  182 |   await ensureOnEpisode(page);
  183 |   await page.locator('a.js-episode-like-btn').first().click();
  184 | });
  185 | 
  186 | When('[Likes] 버튼 재클릭', async ({ page }) => {
  187 |   await ensureOnEpisode(page);
  188 |   await page.locator('a.js-episode-like-btn').first().click();
  189 | });
  190 | 
  191 | When('[리스트] 버튼 클릭', async ({ page }) => {
  192 |   await ensureOnEpisode(page);
  193 |   await page.locator('a.toolbar-btn.js-list-btn').first().click();
  194 | });
  195 | 
  196 | When('[리스트] 버튼 재클릭', async ({ page }) => {
  197 |   await ensureOnEpisode(page);
  198 |   await page.locator('a.toolbar-btn.js-list-btn').first().click();
  199 | });
  200 | 
  201 | When('[Comment] 버튼 클릭', async ({ page }) => {
  202 |   await ensureOnEpisode(page);
  203 |   await page.locator('a.js-comment-btn').first().click();
  204 | });
  205 | 
  206 | When('[Comment] 버튼 재클릭', async ({ page }) => {
  207 |   await ensureOnEpisode(page);
  208 |   await page.locator('a.js-comment-btn').first().click();
  209 | });
  210 | 
  211 | When('[전체화면] 버튼 클릭', async ({ page }) => {
  212 |   await ensureOnEpisode(page);
  213 |   const clicked = await page.evaluate(() => {
  214 |     const btn = document.querySelector('a.toolbar-btn.js-full-btn') as HTMLElement | null;
  215 |     if (btn) { btn.click(); return true; }
  216 |     return false;
  217 |   });
  218 |   if (!clicked) {
  219 |     const fullBtn = page.getByRole('button', { name: /full.?screen|fullscreen/i });
  220 |     if ((await fullBtn.count()) > 0) { await fullBtn.first().click(); return; }
  221 |   }
  222 |   await expect(page.locator('body')).toBeVisible();
  223 | });
  224 | 
  225 | When('[전체화면] 버튼 재클릭', async ({ page }) => {
  226 |   await ensureOnEpisode(page);
  227 |   const clicked = await page.evaluate(() => {
  228 |     const btn = document.querySelector('a.toolbar-btn.js-full-btn') as HTMLElement | null;
  229 |     if (btn) { btn.click(); return true; }
  230 |     return false;
  231 |   });
  232 |   if (!clicked) {
  233 |     const fullBtn = page.getByRole('button', { name: /full.?screen|fullscreen/i });
  234 |     if ((await fullBtn.count()) > 0) { await fullBtn.first().click(); return; }
  235 |   }
  236 |   await expect(page.locator('body')).toBeVisible();
  237 | });
  238 | 
  239 | When('[Support] 버튼 클릭', async ({ page }) => {
  240 |   const btn = page.locator('a.toolbar-btn.js-support-btn').first();
  241 |   if ((await btn.count()) > 0) {
  242 |     await btn.click();
  243 |     await expect(page.locator('div.popup-support')).toBeVisible({ timeout: 5000 });
  244 |     return;
  245 |   }
  246 |   await expect(page.locator('body')).toBeVisible();
  247 | });
  248 | 
  249 | When('[Unlock Episode] 버튼 클릭', async ({ page }) => {
  250 |   const btn = page.getByRole('button', { name: /unlock/i });
  251 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  252 |   await expect(page.locator('body')).toBeVisible();
  253 | });
  254 | 
  255 | When('버튼 클릭', async ({ page }) => {
  256 |   await expect(page.locator('body')).toBeVisible();
  257 | });
  258 | 
  259 | // ──── 팝업 / 오버레이 ────
  260 | 
  261 | When(/^More 팝업 > 팝업 외 영역 클릭$/, async ({ page }) => {
  262 |   await page.locator('body').click({ position: { x: 100, y: 100 } });
  263 | });
  264 | 
  265 | When('팝업 외 영역 클릭', async ({ page }) => {
  266 |   await page.locator('body').click({ position: { x: 50, y: 50 } });
  267 | });
  268 | 
```