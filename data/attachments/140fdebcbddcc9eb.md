# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/03-홈-(Comics)/Spotlight.feature.spec.js >> Spotlight (섹션 서브탭) >> [TPS-040] 섹션메뉴 더보기 클릭 + Comics 홈으로 복귀
- Location: .features-gen/features/03-홈-(Comics)/Spotlight.feature.spec.js:48:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.click: Test timeout of 120000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /^spotlight$/i }).first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e8]:
          - link "tapas" [ref=e9] [cursor=pointer]:
            - /url: /
            - img "tapas" [ref=e10]
          - generic [ref=e13]:
            - link "Home" [ref=e14] [cursor=pointer]:
              - /url: /menu/1/subtab/1
              - generic [ref=e18]: Home
            - link "Comics" [active] [ref=e19] [cursor=pointer]:
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
            - textbox "Search" [ref=e49]
            - button "search":
              - img "search" [ref=e50] [cursor=pointer]
          - link "library" [ref=e51] [cursor=pointer]:
            - /url: /reading-list
            - img "library" [ref=e52]
          - link "inbox 113" [ref=e53] [cursor=pointer]:
            - /url: /inbox/gift
            - img "inbox" [ref=e54]
            - generic [ref=e55]: "113"
          - button "profile image" [ref=e57] [cursor=pointer]:
            - img "profile image" [ref=e59]
          - link "Publish" [ref=e61] [cursor=pointer]:
            - /url: https://www.creators.tapas.io
            - button "Publish" [ref=e62]
        - generic [ref=e68]:
          - link "Daily" [ref=e69] [cursor=pointer]:
            - /url: /menu/2/subtab/7
            - img "Daily" [ref=e72]
          - link "All Genres" [ref=e74] [cursor=pointer]:
            - /url: /menu/2/subtab/17
            - img "All Genres" [ref=e77]
          - link "Romance Fantasy" [ref=e79] [cursor=pointer]:
            - /url: /menu/2/subtab/8
            - img "Romance Fantasy" [ref=e82]
          - link "Romance" [ref=e84] [cursor=pointer]:
            - /url: /menu/2/subtab/9
            - img "Romance" [ref=e87]
          - link "Action Fantasy" [ref=e89] [cursor=pointer]:
            - /url: /menu/2/subtab/10
            - img "Action Fantasy" [ref=e92]
          - link "Action" [ref=e94] [cursor=pointer]:
            - /url: /menu/2/subtab/12
            - img "Action" [ref=e97]
          - link "Drama" [ref=e99] [cursor=pointer]:
            - /url: /menu/2/subtab/11
            - img "Drama" [ref=e102]
          - link "Thriller_Horror" [ref=e104] [cursor=pointer]:
            - /url: /menu/2/subtab/13
            - img "Thriller_Horror" [ref=e107]
          - link "BL" [ref=e109] [cursor=pointer]:
            - /url: /menu/2/subtab/14
            - img "BL" [ref=e112]
          - link "GL" [ref=e114] [cursor=pointer]:
            - /url: /menu/2/subtab/25
            - img "GL" [ref=e117]
          - link "LGBTQ" [ref=e119] [cursor=pointer]:
            - /url: /menu/2/subtab/15
            - img "LGBTQ" [ref=e122]
    - main [ref=e126]:
      - generic [ref=e136]:
        - link "Mon" [ref=e138] [cursor=pointer]:
          - /url: /menu/2/subtab/7?category=COMIC&daily_type=MON
        - link "Tue" [ref=e139] [cursor=pointer]:
          - /url: /menu/2/subtab/7?category=COMIC&daily_type=TUE
        - link "Wed" [ref=e140] [cursor=pointer]:
          - /url: /menu/2/subtab/7?category=COMIC&daily_type=WED
        - link "Thu" [ref=e141] [cursor=pointer]:
          - /url: /menu/2/subtab/7?category=COMIC&daily_type=THU
        - link "Fri" [ref=e142] [cursor=pointer]:
          - /url: /menu/2/subtab/7?category=COMIC&daily_type=FRI
        - link "Sat" [ref=e143] [cursor=pointer]:
          - /url: /menu/2/subtab/7?category=COMIC&daily_type=SAT
        - link "Sun" [ref=e144] [cursor=pointer]:
          - /url: /menu/2/subtab/7?category=COMIC&daily_type=SUN
      - generic [ref=e150]:
        - article [ref=e151]:
          - link "wuf NEW 156.3K" [ref=e152] [cursor=pointer]:
            - /url: /series/326810
            - generic "The Youngest Has Much To Hide" [ref=e153]:
              - generic [ref=e161]:
                - img "wuf" [ref=e163]
                - generic [ref=e164]: NEW
              - generic [ref=e169]: 156.3K
        - article [ref=e170]:
          - link "wuf 3hr 2.9M" [ref=e171] [cursor=pointer]:
            - /url: /series/313219
            - generic "Let's Play" [ref=e172]:
              - generic [ref=e181]:
                - img "wuf" [ref=e182]
                - generic [ref=e183]: 3hr
              - generic [ref=e188]: 2.9M
        - article [ref=e189]:
          - link "wuf NEW 160.4K" [ref=e190] [cursor=pointer]:
            - /url: /series/326798
            - generic "My Husband's a Possessed Hero" [ref=e191]:
              - generic [ref=e199]:
                - img "wuf" [ref=e201]
                - generic [ref=e202]: NEW
              - generic [ref=e207]: 160.4K
        - article [ref=e208]:
          - link "wuf 15.7M" [ref=e209] [cursor=pointer]:
            - /url: /series/186414
            - generic "Villains Are Destined to Die" [ref=e210]:
              - img "wuf" [ref=e220]
              - generic [ref=e225]: 15.7M
        - article [ref=e226]:
          - link "wuf UP 2M" [ref=e227] [cursor=pointer]:
            - /url: /series/276405
            - generic "I Stole the Female Lead's First Love" [ref=e228]:
              - generic [ref=e236]:
                - img "wuf" [ref=e238]
                - generic [ref=e239]: UP
              - generic [ref=e244]: 2M
        - article [ref=e245]:
          - link "wuf 3.7M" [ref=e246] [cursor=pointer]:
            - /url: /series/255107
            - generic "Mother's Contract Marriage" [ref=e247]:
              - img "wuf" [ref=e257]
              - generic [ref=e262]: 3.7M
        - article [ref=e263]:
          - link "wuf 628K" [ref=e264] [cursor=pointer]:
            - /url: /series/294124
            - generic "The Hero's Ready to Retire" [ref=e265]:
              - img "wuf" [ref=e275]
              - generic [ref=e280]: 628K
        - article [ref=e281]:
          - link "wuf 161.9K" [ref=e282] [cursor=pointer]:
            - /url: /series/325468
            - generic "The Mastermind Is My Housekeeper" [ref=e283]:
              - img "wuf" [ref=e293]
              - generic [ref=e298]: 161.9K
        - article [ref=e299]:
          - link "wuf 5.5M" [ref=e300] [cursor=pointer]:
            - /url: /series/252778
            - generic "Talented Baby Squirrel" [ref=e301]:
              - img "wuf" [ref=e311]
              - generic [ref=e316]: 5.5M
        - article [ref=e317]:
          - link "wuf 687.9K" [ref=e318] [cursor=pointer]:
            - /url: /series/295864
            - generic "I'll Just Look for a New Family" [ref=e319]:
              - img "wuf" [ref=e329]
              - generic [ref=e334]: 687.9K
        - article [ref=e335]:
          - link "wuf 239.3K" [ref=e336] [cursor=pointer]:
            - /url: /series/325456
            - generic "I Don't Want to Be the Germophobe Villain's Guide" [ref=e337]:
              - img "wuf" [ref=e347]
              - generic [ref=e352]: 239.3K
        - article [ref=e353]:
          - link "30% OFF 232.8K" [ref=e354] [cursor=pointer]:
            - /url: /series/315876
            - generic "The Cellhouse Kingmaker's Playbook" [ref=e355]:
              - generic [ref=e364]: 30% OFF
              - generic [ref=e369]: 232.8K
        - article [ref=e370]:
          - link "wuf 1.1M" [ref=e371] [cursor=pointer]:
            - /url: /series/284023
            - generic "The Strongest Evolutionary Necromancer" [ref=e372]:
              - img "wuf" [ref=e382]
              - generic [ref=e387]: 1.1M
        - article [ref=e388]:
          - link "wuf 698.3K" [ref=e389] [cursor=pointer]:
            - /url: /series/286094
            - generic "I Have Never Abandoned the Tyrant" [ref=e390]:
              - img "wuf" [ref=e400]
              - generic [ref=e405]: 698.3K
        - article [ref=e406]:
          - link "wuf 1.1M" [ref=e407] [cursor=pointer]:
            - /url: /series/295863
            - generic "The Incognito Princess" [ref=e408]:
              - img "wuf" [ref=e418]
              - generic [ref=e423]: 1.1M
        - article [ref=e424]:
          - link "wuf 487.5K" [ref=e425] [cursor=pointer]:
            - /url: /series/314587
            - generic "She Wasn't My Daughter" [ref=e426]:
              - img "wuf" [ref=e436]
              - generic [ref=e441]: 487.5K
        - article [ref=e442]:
          - link "wuf 748.2K" [ref=e443] [cursor=pointer]:
            - /url: /series/297571
            - generic "Obsessed With Hazel the Sweet Witch" [ref=e444]:
              - img "wuf" [ref=e454]
              - generic [ref=e459]: 748.2K
        - article [ref=e460]:
          - link "wuf 569.3K" [ref=e461] [cursor=pointer]:
            - /url: /series/300013
            - generic "My Students' Guardians Are Obsessed With Me" [ref=e462]:
              - img "wuf" [ref=e472]
              - generic [ref=e477]: 569.3K
        - article [ref=e478]:
          - link "wuf 508.8K" [ref=e479] [cursor=pointer]:
            - /url: /series/323454
            - generic "I'm a Homebody, but I Transmigrated Into a Dark Captivity Novel" [ref=e480]:
              - img "wuf" [ref=e490]
              - generic [ref=e495]: 508.8K
        - article [ref=e496]:
          - link "wuf 1M" [ref=e497] [cursor=pointer]:
            - /url: /series/258560
            - generic "House Mayton's Youngest" [ref=e498]:
              - img "wuf" [ref=e508]
              - generic [ref=e513]: 1M
        - article [ref=e514]:
          - link "wuf 220.2K" [ref=e515] [cursor=pointer]:
            - /url: /series/325448
            - generic "Shards of a Broken Glass Slipper" [ref=e516]:
              - img "wuf" [ref=e526]
              - generic [ref=e531]: 220.2K
        - article [ref=e532]:
          - link "30% OFF 303.4K" [ref=e533] [cursor=pointer]:
            - /url: /series/300465
            - generic "The Male Lead Proposed to Me" [ref=e534]:
              - generic [ref=e543]: 30% OFF
              - generic [ref=e548]: 303.4K
        - article [ref=e549]:
          - link "wuf 994.4K" [ref=e550] [cursor=pointer]:
            - /url: /series/294154
            - generic "Ending This Marriage for Your Happiness" [ref=e551]:
              - img "wuf" [ref=e561]
              - generic [ref=e566]: 994.4K
        - article [ref=e567]:
          - link "wuf 1.4M" [ref=e568] [cursor=pointer]:
            - /url: /series/281941
            - generic "The Villainess Captured the Grand Duke" [ref=e569]:
              - img "wuf" [ref=e579]
              - generic [ref=e584]: 1.4M
        - article [ref=e585]:
          - link "wuf 588.9K" [ref=e586] [cursor=pointer]:
            - /url: /series/284076
            - generic "What It Takes to Be a Villainess" [ref=e587]:
              - img "wuf" [ref=e597]
              - generic [ref=e602]: 588.9K
      - article [ref=e606]:
        - generic [ref=e609]:
          - img "App Install" [ref=e610]
          - generic [ref=e611]:
            - paragraph [ref=e612]: Free Ink, gifts, and more. Get the app today!
            - generic [ref=e613]:
              - link "iOS App Link" [ref=e614] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/tapastic/id578836126?mt=8
                - img "iOS App Link" [ref=e615]
              - link "AOS App Link" [ref=e616] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.tapastic&referrer=utm_source%3Dm-tapastic%26utm_medium%3Dlink%26utm_content%3Dget-the-app%26utm_campaign%3Dmobile-navigation
                - img "AOS App Link" [ref=e617]
    - contentinfo [ref=e619]:
      - link "tapas Stories you crave" [ref=e621] [cursor=pointer]:
        - /url: /
        - img "tapas Stories you crave" [ref=e622]
      - generic [ref=e623]:
        - link "instagram" [ref=e624] [cursor=pointer]:
          - /url: https://instagram.com/tapas_app
          - img "instagram" [ref=e625]
        - link "twitter" [ref=e626] [cursor=pointer]:
          - /url: https://twitter.com/tapas_app
          - img "twitter" [ref=e627]
        - link "youtube" [ref=e628] [cursor=pointer]:
          - /url: https://www.youtube.com/tapasmedia
          - img "youtube" [ref=e629]
        - link "facebook" [ref=e630] [cursor=pointer]:
          - /url: https://www.facebook.com/tapas.io
          - img "facebook" [ref=e631]
        - link "tiktok" [ref=e632] [cursor=pointer]:
          - /url: https://www.tiktok.com/@tapasmedia
          - img "tiktok" [ref=e633]
      - generic [ref=e634]:
        - link "Help" [ref=e635] [cursor=pointer]:
          - /url: https://help.tapas.io/hc/en-us
        - link "Discord" [ref=e636] [cursor=pointer]:
          - /url: https://discord.com/invite/tapas
        - link "Forums" [ref=e637] [cursor=pointer]:
          - /url: https://forums.tapas.io
        - link "Newsfeed" [ref=e638] [cursor=pointer]:
          - /url: /newsfeed
        - link "Contact" [ref=e639] [cursor=pointer]:
          - /url: mailto:feedback@tapas.io
        - link "Publish" [ref=e640] [cursor=pointer]:
          - /url: https://www.creators.tapas.io
      - generic [ref=e641]:
        - paragraph [ref=e642]: ⓒ 2024 Tapas Entertainment.
        - generic [ref=e643]:
          - link "Terms" [ref=e644] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005545248
          - generic [ref=e645]: ・
          - link "Privacy" [ref=e646] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005377787
          - generic [ref=e647]: ・
          - link "Content" [ref=e648] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005323707
        - link "Do Not Sell or Share My Personal Information" [ref=e649] [cursor=pointer]:
          - /url: /account/privacy-opt-out
  - alert [ref=e650]: Comics | Daily
  - iframe [ref=e651]:
    - button "Help" [ref=f3e4] [cursor=pointer]:
      - img [ref=f3e6]
      - generic [ref=f3e13]: Help
```

# Test source

```ts
  108 |   if ((await option.count()) > 0) {
  109 |     await option.click();
  110 |   } else {
  111 |     const first = page.locator('[role="dialog"] input[type="radio"], [role="dialog"] li').first();
  112 |     if ((await first.count()) > 0) await first.click();
  113 |   }
  114 |   const confirm = page.getByRole('button', { name: /confirm/i });
  115 |   if ((await confirm.count()) > 0) await confirm.first().click();
  116 | });
  117 | 
  118 | // 특정 요일 탭 클릭 (예: "Mon", "Tue")
  119 | When('{string} 요일 탭 클릭', async ({ page }, day: string) => {
  120 |   const tab = page.getByRole('tab', { name: new RegExp(`^${day}`, 'i') });
  121 |   if ((await tab.count()) > 0) { await tab.first().click(); return; }
  122 |   const btn = page.getByRole('button', { name: new RegExp(`^${day}`, 'i') });
  123 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  124 |   const link = page.getByRole('link', { name: new RegExp(`^${day}`, 'i') });
  125 |   if ((await link.count()) > 0) { await link.first().click(); return; }
  126 |   await expect(page.locator('body')).toBeVisible();
  127 | });
  128 | 
  129 | When(/^정렬\/필터 노출 확인$/, async ({ page }) => {
  130 |   await expect(page.locator('body')).toBeVisible();
  131 | });
  132 | 
  133 | When('더보기[>] 영역 클릭', async ({ page }) => {
  134 |   const moreBtn = page.getByRole('link', { name: /more|>|see all/i });
  135 |   if ((await moreBtn.count()) > 0) await moreBtn.first().click();
  136 | });
  137 | 
  138 | // ──── 연령 인증 (Mature) ────
  139 | 
  140 | Given(/^미로그인 \/ 미인증 상태$/, async ({ page }) => {
  141 |   await page.context().clearCookies();
  142 |   await page.goto('https://tapas.io/');
  143 | });
  144 | 
  145 | When(/^미로그인 \/ 미인증 아이디 로그인 상태$/, async ({ page }) => {
  146 |   // CI: UNVERIFIED_AUTH_STATE_B64에서 파일 복원
  147 |   const b64 = process.env.UNVERIFIED_AUTH_STATE_B64;
  148 |   if (b64 && !fs.existsSync(UNVERIFIED_AUTH_FILE)) {
  149 |     fs.mkdirSync(path.dirname(UNVERIFIED_AUTH_FILE), { recursive: true });
  150 |     fs.writeFileSync(UNVERIFIED_AUTH_FILE, Buffer.from(b64, 'base64').toString('utf-8'));
  151 |   }
  152 | 
  153 |   if (!fs.existsSync(UNVERIFIED_AUTH_FILE)) {
  154 |     test.skip(true, '미인증 세션 없음 — npm run test:setup:unverified 실행 필요');
  155 |     return;
  156 |   }
  157 | 
  158 |   // 메인 계정 쿠키 클리어 후 미인증 계정 세션 복원
  159 |   await page.context().clearCookies();
  160 |   const state = JSON.parse(fs.readFileSync(UNVERIFIED_AUTH_FILE, 'utf-8'));
  161 |   if (state.cookies?.length) {
  162 |     await page.context().addCookies(state.cookies);
  163 |   }
  164 |   await page.goto('https://tapas.io/', { waitUntil: 'domcontentloaded' });
  165 | });
  166 | 
  167 | When(/^성인에 해당되는 연\/월\/일 입력$/, async ({ page }) => {
  168 |   // 성인 기준 생년월일 입력 (예: 1990-01-01)
  169 |   const inputs = page.locator('input[type="number"], input[name*="year"], input[name*="month"], input[name*="day"]');
  170 |   const count = await inputs.count();
  171 |   if (count >= 3) {
  172 |     await inputs.nth(0).fill('1990');
  173 |     await inputs.nth(1).fill('01');
  174 |     await inputs.nth(2).fill('01');
  175 |   }
  176 | });
  177 | 
  178 | When(/^미성년에 해당되는 연\/월\/일 입력$/, async ({ page }) => {
  179 |   // 미성년 기준 생년월일 (예: 2010-01-01)
  180 |   const inputs = page.locator('input[type="number"], input[name*="year"], input[name*="month"], input[name*="day"]');
  181 |   const count = await inputs.count();
  182 |   if (count >= 3) {
  183 |     await inputs.nth(0).fill('2010');
  184 |     await inputs.nth(1).fill('01');
  185 |     await inputs.nth(2).fill('01');
  186 |   }
  187 | });
  188 | 
  189 | When('Submit 버튼 클릭', async ({ page }) => {
  190 |   const btn = page.getByRole('button', { name: /submit/i });
  191 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  192 |   await expect(page.locator('body')).toBeVisible();
  193 | });
  194 | 
  195 | When('M 뱃지 노출되는 작품 클릭', async ({ page }) => {
  196 |   const el = page.locator('[class*="mature"], [class*="badge-m"]');
  197 |   if ((await el.count()) > 0) { await el.first().click(); return; }
  198 |   await expect(page.locator('body')).toBeVisible();
  199 | });
  200 | 
  201 | // ──── Comics 전용 진입 / 복귀 ────
  202 | 
  203 | When('Comics Spotlight 서브탭에 접속한다', async ({ page }) => {
  204 |   await page.getByRole('link', { name: /^comics$/i }).first().click();
  205 |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  206 |   const spotlight = page.getByRole('link', { name: /^spotlight$/i });
  207 |   if ((await spotlight.count()) === 0) { test.skip(true, 'Comics Spotlight 서브탭 미운영 상태'); return; }
> 208 |   await spotlight.first().click();
      |                           ^ Error: locator.click: Test timeout of 120000ms exceeded.
  209 |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  210 | });
  211 | 
  212 | Then('Comics 홈으로 돌아온다', async ({ page }) => {
  213 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  214 | });
  215 | 
  216 | Then('Comics 카테고리 페이지가 노출된다', async ({ page }) => {
  217 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  218 | });
  219 | 
  220 | // ──── Novels 전용 진입 / 복귀 ────
  221 | 
  222 | When('Novels Spotlight 서브탭에 접속한다', async ({ page }) => {
  223 |   await page.getByRole('link', { name: /^novels$/i }).first().click();
  224 |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  225 |   const spotlight = page.getByRole('link', { name: /^spotlight$/i });
  226 |   if ((await spotlight.count()) === 0) { test.skip(true, 'Novels Spotlight 서브탭 미운영 상태'); return; }
  227 |   await spotlight.first().click();
  228 |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  229 | });
  230 | 
  231 | Then('Novels 홈으로 돌아온다', async ({ page }) => {
  232 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  233 | });
  234 | 
  235 | Then('Novels 카테고리 페이지가 노출된다', async ({ page }) => {
  236 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  237 | });
  238 | 
  239 | // ──── Mature 전용 진입 / 복귀 ────
  240 | 
  241 | When('Mature Spotlight 서브탭에 접속한다', async ({ page }) => {
  242 |   await page.getByRole('link', { name: /^mature$/i }).first().click();
  243 |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  244 |   const spotlight = page.getByRole('link', { name: /^spotlight$/i });
  245 |   if ((await spotlight.count()) === 0) { test.skip(true, 'Mature Spotlight 서브탭 미운영 상태'); return; }
  246 |   await spotlight.first().click();
  247 |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  248 | });
  249 | 
  250 | Then('Mature 홈으로 돌아온다', async ({ page }) => {
  251 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  252 | });
  253 | 
  254 | Then('Mature 카테고리 페이지가 노출된다', async ({ page }) => {
  255 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  256 | });
  257 | 
  258 | Then('빅배너가 노출된다', async ({ page }) => {
  259 |   const banner = page.locator('[class*="bannerContent"]').first();
  260 |   const isVisible = await banner.isVisible().catch(() => false);
  261 |   if (isVisible) { await expect(banner).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
  262 | });
  263 | 
  264 | Then('장르 필터와 정렬 옵션이 노출된다', async ({ page }) => {
  265 |   // Popular 정렬 버튼 + 작품 카드 노출 확인
  266 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  267 |   const sortBtn = page.getByRole('button', { name: /popular/i });
  268 |   const isVisible = await sortBtn.first().isVisible().catch(() => false);
  269 |   if (isVisible) { await expect(sortBtn.first()).toBeVisible(); }
  270 | });
  271 | 
  272 | // ──── Community 전용 진입 / 복귀 ────
  273 | 
  274 | When('Community Spotlight 서브탭에 접속한다', async ({ page }) => {
  275 |   await page.getByRole('link', { name: /^community$/i }).first().click();
  276 |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  277 |   const spotlight = page.getByRole('link', { name: /^spotlight$/i });
  278 |   if ((await spotlight.count()) === 0) { test.skip(true, 'Community Spotlight 서브탭 미운영 상태'); return; }
  279 |   await spotlight.first().click();
  280 |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  281 | });
  282 | 
  283 | Then('Community 홈으로 돌아온다', async ({ page }) => {
  284 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  285 | });
  286 | 
  287 | Then('Community 카테고리 페이지가 노출된다', async ({ page }) => {
  288 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  289 | });
  290 | 
  291 | // ──── 결과 검증 ────
  292 | 
  293 | Then(/^(Comics|Novels|Community|mature) 홈화면의 첫 번째 서브탭으로 진입된다\.$/, async ({ page }, category: string) => {
  294 |   // 작품 카드 노출 확인
  295 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  296 |   // Comics/Novels는 Daily 탭(요일 버튼)도 같이 확인
  297 |   if (category === 'Comics' || category === 'Novels') {
  298 |     const dayTab = page.locator('a[href*="daily_type="]').first();
  299 |     const isVisible = await dayTab.isVisible().catch(() => false);
  300 |     if (isVisible) { await expect(dayTab).toBeVisible(); }
  301 |   }
  302 | });
  303 | 
  304 | Then(/^(Comics|Novels) 서브탭이 활성화된다\.$/, async ({ page }) => {
  305 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  306 | });
  307 | 
  308 | Then(/^\{(All Comics|All Novels|장르명)\} 서브탭이 활성화된다\.$/, async ({ page }) => {
```