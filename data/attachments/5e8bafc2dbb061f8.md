# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/12-보관함/Recent.feature.spec.js >> Recent >> [TPS-175] Recent 작품 목록 없는 경우 > Recent 클릭
- Location: .features-gen/features/12-보관함/Recent.feature.spec.js:18:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.page-empty').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.page-empty').first()

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
            - listitem [ref=e48] [cursor=pointer]:
              - link "Recent" [ref=e49]:
                - /url: /reading-list?category=RECENT
            - listitem [ref=e50]:
              - link "Subscribed" [ref=e51] [cursor=pointer]:
                - /url: /reading-list?category=SUBSCRIBED
            - listitem [ref=e52]:
              - link "Free episodes" [ref=e53] [cursor=pointer]:
                - /url: /reading-list?category=FREE_EPISODES
            - listitem [ref=e54]:
              - link "Wait Until Free" [ref=e55] [cursor=pointer]:
                - /url: /reading-list?category=WAIT_UNTIL_FREE
      - list [ref=e57]:
        - listitem [ref=e58]:
          - link [ref=e60] [cursor=pointer]:
            - /url: /series/villainesses-have-more-fun
            - img [ref=e61]
          - link "Villainesses Have More Fun" [ref=e66] [cursor=pointer]:
            - /url: /series/villainesses-have-more-fun
          - link "SWE" [ref=e67] [cursor=pointer]:
            - /url: /SWE01
          - text: Episode 3
        - listitem [ref=e68]:
          - link "3Hr" [ref=e70] [cursor=pointer]:
            - /url: /series/dungeon-predator-novel
            - img [ref=e71]
            - generic [ref=e75]: 3Hr
          - link "Dungeon Predator" [ref=e77] [cursor=pointer]:
            - /url: /series/dungeon-predator-novel
          - link "Hodam" [ref=e78] [cursor=pointer]:
            - /url: /Hodam
          - text: Episode 1
        - listitem [ref=e79]:
          - link [ref=e81] [cursor=pointer]:
            - /url: /series/My-Superhero
            - img [ref=e82]
          - link "My Superhero!" [ref=e84] [cursor=pointer]:
            - /url: /series/My-Superhero
          - link "Jessie Paige Dawson" [ref=e85] [cursor=pointer]:
            - /url: /jessicapaigedawson
          - text: Episode 1
        - listitem [ref=e86]:
          - link "3Hr" [ref=e88] [cursor=pointer]:
            - /url: /series/the-villainess-mandate-novel
            - img [ref=e89]
            - generic [ref=e93]: 3Hr
          - link "The Villainess' Mandate" [ref=e95] [cursor=pointer]:
            - /url: /series/the-villainess-mandate-novel
          - link "The_Bizone" [ref=e96] [cursor=pointer]:
            - /url: /thebizone20
          - text: Episode 2
        - listitem [ref=e97]:
          - link [ref=e99] [cursor=pointer]:
            - /url: /series/My-Life-as-a-Villains-Sidekick
            - img [ref=e100]
          - link "My Life as a Villain's Sidekick" [ref=e102] [cursor=pointer]:
            - /url: /series/My-Life-as-a-Villains-Sidekick
          - link "kaptiee" [ref=e103] [cursor=pointer]:
            - /url: /thevillanssidekick
          - text: Episode 3
        - listitem [ref=e104]:
          - link [ref=e106] [cursor=pointer]:
            - /url: /series/Spark
            - img [ref=e107]
          - link "Spark" [ref=e109] [cursor=pointer]:
            - /url: /series/Spark
          - link "Lea Nimrod" [ref=e110] [cursor=pointer]:
            - /url: /leagreenday
          - text: Episode 8
        - listitem [ref=e111]:
          - link [ref=e113] [cursor=pointer]:
            - /url: /series/the-eccentric-duchess
            - img [ref=e114]
          - link "The Eccentric Duchess" [ref=e116] [cursor=pointer]:
            - /url: /series/the-eccentric-duchess
          - link "Menii" [ref=e117] [cursor=pointer]:
            - /url: /Menii
          - text: Episode 3
        - listitem [ref=e118]:
          - link [ref=e120] [cursor=pointer]:
            - /url: /series/i-was-the-real-head-of-the-house
            - img [ref=e121]
          - link "I Was the Real Head of the House" [ref=e126] [cursor=pointer]:
            - /url: /series/i-was-the-real-head-of-the-house
          - link "HON" [ref=e127] [cursor=pointer]:
            - /url: /HON01
          - text: Episode 2
        - listitem [ref=e128]:
          - link [ref=e130] [cursor=pointer]:
            - /url: /series/my-favorite-character-wants-a-divorce
            - img [ref=e131]
          - link "My Favorite Character Wants a Divorce" [ref=e136] [cursor=pointer]:
            - /url: /series/my-favorite-character-wants-a-divorce
          - link "ZQ" [ref=e137] [cursor=pointer]:
            - /url: /ZQ01
          - text: Episode 1
        - listitem [ref=e138]:
          - link [ref=e140] [cursor=pointer]:
            - /url: /series/If-A-Tree-Falls
            - img [ref=e141]
          - link "If A Tree Falls" [ref=e143] [cursor=pointer]:
            - /url: /series/If-A-Tree-Falls
          - link "RedMari" [ref=e144] [cursor=pointer]:
            - /url: /redredherring
          - text: Episode 2
        - listitem [ref=e145]:
          - link [ref=e147] [cursor=pointer]:
            - /url: /series/baroness-goes-on-strike-mature
            - img [ref=e148]
          - link "Baroness Goes on Strike (Mature)" [ref=e152] [cursor=pointer]:
            - /url: /series/baroness-goes-on-strike-mature
          - link "Yeseul" [ref=e153] [cursor=pointer]:
            - /url: /Yeseul
          - text: Episode 2
        - listitem [ref=e154]:
          - link "3Hr" [ref=e156] [cursor=pointer]:
            - /url: /series/soul-forged-novel
            - img [ref=e157]
            - generic [ref=e161]: 3Hr
          - link "Soul Forged" [ref=e163] [cursor=pointer]:
            - /url: /series/soul-forged-novel
          - link "TurtleMe" [ref=e164] [cursor=pointer]:
            - /url: /turtleme
          - text: Episode 7
        - listitem [ref=e165]:
          - link [ref=e167] [cursor=pointer]:
            - /url: /series/Belfy
            - img [ref=e168]
          - link "Belfy" [ref=e170] [cursor=pointer]:
            - /url: /series/Belfy
          - link "jezz" [ref=e171] [cursor=pointer]:
            - /url: /jezzartt
          - text: Episode 7
        - listitem [ref=e172]:
          - link [ref=e174] [cursor=pointer]:
            - /url: /series/Dark-Paradise
            - img [ref=e175]
          - link "Dark Paradise" [ref=e177] [cursor=pointer]:
            - /url: /series/Dark-Paradise
          - link "Fidesia" [ref=e178] [cursor=pointer]:
            - /url: /Fidesia
          - text: Episode 20
        - listitem [ref=e179]:
          - link "30% OFF" [ref=e181] [cursor=pointer]:
            - /url: /series/the-archdukes-adopted-saint
            - img [ref=e182]
            - generic [ref=e186]: 30% OFF
          - link "The Archduke's Adopted Saint" [ref=e188] [cursor=pointer]:
            - /url: /series/the-archdukes-adopted-saint
          - link "Hwang bino" [ref=e189] [cursor=pointer]:
            - /url: /Hwangbino
          - text: Episode 4
        - listitem [ref=e190]:
          - link [ref=e192] [cursor=pointer]:
            - /url: /series/the-glamorous-life-of-the-fake-mistress-mature
            - img [ref=e193]
          - link "The Glamorous Life of the Fake Mistress (Mature)" [ref=e197] [cursor=pointer]:
            - /url: /series/the-glamorous-life-of-the-fake-mistress-mature
          - link "BerrySoda" [ref=e198] [cursor=pointer]:
            - /url: /BerrySoda
          - text: Episode 3
        - listitem [ref=e199]:
          - link [ref=e201] [cursor=pointer]:
            - /url: /series/OutoftheBlue
            - img [ref=e202]
          - link "Out of the Blue" [ref=e204] [cursor=pointer]:
            - /url: /series/OutoftheBlue
          - link "Ari" [ref=e205] [cursor=pointer]:
            - /url: /wonderarium
          - text: Episode 8
        - listitem [ref=e206]:
          - link [ref=e208] [cursor=pointer]:
            - /url: /series/Idiots-Dont-Catch-Colds
            - img [ref=e209]
          - link "Idiots Don't Catch Colds" [ref=e211] [cursor=pointer]:
            - /url: /series/Idiots-Dont-Catch-Colds
          - link "Aina Palm" [ref=e212] [cursor=pointer]:
            - /url: /AinaPalm
          - text: Episode 12
        - listitem [ref=e213]:
          - link [ref=e215] [cursor=pointer]:
            - /url: /series/im-quitting-the-heros-party
            - img [ref=e216]
          - link "I'm Quitting the Hero's Party" [ref=e221] [cursor=pointer]:
            - /url: /series/im-quitting-the-heros-party
          - link "GRAPHICTORY" [ref=e222] [cursor=pointer]:
            - /url: /GRAPHICTORY
          - text: Episode 3
        - listitem [ref=e223]:
          - link [ref=e225] [cursor=pointer]:
            - /url: /series/like-father-like-daughter
            - img [ref=e226]
          - link "Like Father, Like Daughter" [ref=e231] [cursor=pointer]:
            - /url: /series/like-father-like-daughter
          - link "STUDIO INUS" [ref=e232] [cursor=pointer]:
            - /url: /STUDIOINUS
          - text: Episode 2
  - contentinfo [ref=e233]:
    - generic [ref=e235]:
      - generic [ref=e236]:
        - link [ref=e238] [cursor=pointer]:
          - /url: /
        - list [ref=e240]:
          - listitem [ref=e241]:
            - link [ref=e242] [cursor=pointer]:
              - /url: https://instagram.com/tapas_app
          - listitem [ref=e244]:
            - link [ref=e245] [cursor=pointer]:
              - /url: https://twitter.com/tapas_app
          - listitem [ref=e247]:
            - link [ref=e248] [cursor=pointer]:
              - /url: https://www.youtube.com/tapasmedia
          - listitem [ref=e250]:
            - link [ref=e251] [cursor=pointer]:
              - /url: https://www.facebook.com/tapas.io
          - listitem [ref=e253]:
            - link [ref=e254] [cursor=pointer]:
              - /url: https://www.tiktok.com/@tapasmedia
      - list [ref=e257]:
        - listitem [ref=e258]:
          - link "Help" [ref=e259] [cursor=pointer]:
            - /url: https://help.tapas.io
        - listitem [ref=e260]:
          - link "Forums" [ref=e261] [cursor=pointer]:
            - /url: https://forums.tapas.io/
        - listitem [ref=e262]:
          - link "Contact" [ref=e263] [cursor=pointer]:
            - /url: mailto:feedback@tapas.io
        - listitem [ref=e264]:
          - link "Publish" [ref=e265] [cursor=pointer]:
            - /url: https://www.creators.tapas.io/
        - listitem [ref=e266]:
          - link "Newsfeed" [ref=e267] [cursor=pointer]:
            - /url: /newsfeed
      - generic [ref=e268]:
        - paragraph [ref=e269]: © 2026 Tapas Media.
        - paragraph [ref=e270]:
          - link "Terms" [ref=e271] [cursor=pointer]:
            - /url: /tos
          - text: •
          - link "Privacy" [ref=e272] [cursor=pointer]:
            - /url: /policies/privacy
          - text: •
          - link "Content" [ref=e273] [cursor=pointer]:
            - /url: /policies/content
          - text: •
          - link "Do Not Sell or Share My Personal Information" [ref=e274] [cursor=pointer]:
            - /url: /account/privacy-opt-out
  - link [ref=e275]:
    - /url: "#!/go-to-top"
```

# Test source

```ts
  121 |     if (popup) (page as any).__socialPopup = popup;
  122 |     return;
  123 |   }
  124 |   const btn = page.getByRole('button', { name: new RegExp(label, 'i') });
  125 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  126 |   const link = page.getByRole('link', { name: new RegExp(label, 'i') });
  127 |   if ((await link.count()) > 0) { await link.first().click(); return; }
  128 |   test.skip(true, `{${label}} 버튼/링크가 현재 페이지에 존재하지 않음`);
  129 | });
  130 | 
  131 | // [Sign up] / [Submit] 버튼 클릭 — 회원가입 플로우
  132 | When(/^\[(Sign up|Submit)\] 버튼 클릭$/, async ({ page }, label: string) => {
  133 |   const btn = page.getByRole('button', { name: new RegExp(label, 'i') });
  134 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  135 |   await expect(page.getByRole('link', { name: new RegExp(label, 'i') }).first()).toBeVisible({ timeout: 5000 });
  136 |   await page.getByRole('link', { name: new RegExp(label, 'i') }).first().click();
  137 | });
  138 | 
  139 | // ──── 뒤로가기 ────
  140 | 
  141 | When('뒤로가기 [<] 버튼 클릭', async ({ page }) => {
  142 |   await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  143 | });
  144 | 
  145 | When('상단 [<] 버튼 클릭', async ({ page }) => {
  146 |   await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  147 | });
  148 | 
  149 | When('상단네비바 [<] 또는 단말 백버튼 클릭', async ({ page }) => {
  150 |   await page.goBack();
  151 |   // 배너 링크가 새 탭으로 열렸을 경우 goBack()이 about:blank로 이동할 수 있음
  152 |   if (page.url() === 'about:blank' || page.url() === '') {
  153 |     await page.goto('/');
  154 |   }
  155 | });
  156 | 
  157 | // ──── 검색 ────
  158 | 
  159 | When('검색 필드 클릭', async ({ page }) => {
  160 |   await page.getByPlaceholder('Search').click();
  161 | });
  162 | 
  163 | // "검색어 입력란 > {키워드} 입력" — 키워드는 CSV 플레이스홀더라 테스트 데이터로 대체
  164 | When(/^검색어 입력란 > \{(.+)\} 입력$/, async ({ page }, _keyword: string) => {
  165 |   const input = page.getByPlaceholder('Search');
  166 |   await input.fill('Olympus');
  167 |   await input.press('Enter');
  168 | });
  169 | 
  170 | // ──── 설명성 bullet 스텝 (원본 CSV의 체크리스트 항목) ────
  171 | // 실제 assertion 없이 시나리오 흐름 유지용
  172 | 
  173 | Then(/^ㄴ.+$/, async () => {
  174 |   // 설명성 서브 항목 (ㄴ 공백 유무 무관) — 부모 Then에서 검증 완료
  175 | });
  176 | 
  177 | Then(/^-(?! MWeb\)).+$/, async () => {
  178 |   // 설명성 체크리스트 항목 (- MWeb) 제외, 공백 유무 무관)
  179 | });
  180 | 
  181 | When(/^exc\) .+$/, async () => {
  182 |   // 예외 주석 (When/And 컨텍스트) — 실행 무시
  183 | });
  184 | 
  185 | When(/^\[PCW\](.*)$/, async () => {
  186 |   // PC Web 전용 주석
  187 | });
  188 | 
  189 | When(/^\[MW\](.*)$/, async () => {
  190 |   // Mobile Web 항목 — PC Web 테스트에서 무시
  191 | });
  192 | 
  193 | When(/^\- MWeb\) .+$/, async () => {
  194 |   // MWeb 항목 — PC Web 테스트에서 무시
  195 | });
  196 | 
  197 | Then(/^\(.*\)$/, async () => {
  198 |   // 괄호 설명 항목 (예: "(작가인 경우 Dashboard 노출)")
  199 | });
  200 | 
  201 | // ──── 공통 결과 검증 ────
  202 | 
  203 | Then('홈화면의 첫 번째 서브탭으로 진입된다.', async ({ page }) => {
  204 |   await expect(page).not.toHaveURL(/signin/i);
  205 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
  206 | });
  207 | 
  208 | Then('로그인 유도 창으로 이동된다.', async ({ page }) => {
  209 |   await expect(page).toHaveURL(/signin/i);
  210 | });
  211 | 
  212 | Then('로그인 유도 화면이 노출된다.', async ({ page }) => {
  213 |   await expect(page).toHaveURL(/signin/i);
  214 | });
  215 | 
  216 | Then('하위 메뉴 노출된다.', async ({ page }) => {
  217 |   await expect(page.locator('.gnb-dropdown a, .gnb-more-menu a, nav[class*="more"] a, a[href*="/account/"]').first()).toBeVisible({ timeout: 5000 });
  218 | });
  219 | 
  220 | Then('안내문구가 노출된다.', async ({ page }) => {
> 221 |   await expect(page.locator('.page-empty').first()).toBeVisible({ timeout: 5000 });
      |                                                     ^ Error: expect(locator).toBeVisible() failed
  222 | });
  223 | 
  224 | Then(/^설정된 랜딩타겟으로 이동된다\.$/, async ({ page }) => {
  225 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
  226 | });
  227 | 
  228 | Then(/^홈화면으로 돌아온다\.$/, async ({ page }) => {
  229 |   await expect(page).not.toHaveURL(/signin/i);
  230 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
  231 | });
  232 | 
  233 | Then(/^이전 화면으로 돌아온다\. \(홈\)$/, async ({ page }) => {
  234 |   await expect(page).not.toHaveURL(/signin/i);
  235 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
  236 | });
  237 | 
  238 | Then(/^구글 \/ 페이스북 로그인 유도 창으로 이동된다\.$/, async ({ page }) => {
  239 |   await expect(page.getByRole('button', { name: /facebook|google/i }).first()).toBeVisible({ timeout: 5000 });
  240 | });
  241 | 
  242 | Then(/^(페이스북|구글) 로그인 팝업창이 열린다\.$/, async ({ page }) => {
  243 |   // 소셜 로그인 팝업 — 새 탭 또는 현재 탭 이동
  244 |   const popup = page.context().pages().find(p => p !== page);
  245 |   if (popup) { await expect(popup.locator('input[type="email"], input[type="password"]').first()).toBeVisible({ timeout: 8000 }); }
  246 |   else { await expect(page.locator('input[type="email"], input[type="password"]').first()).toBeVisible({ timeout: 8000 }); }
  247 | });
  248 | 
  249 | Then(/^로그인 완료되며 홈 화면으로 이동된다\.$/, async ({ page }) => {
  250 |   await expect(page).not.toHaveURL(/signin/i);
  251 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
  252 | });
  253 | 
  254 | Then(/^로그아웃되며 홈 화면으로 이동된다\.$/, async ({ page }) => {
  255 |   await expect(page).not.toHaveURL(/signin/i);
  256 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
  257 | });
  258 | 
  259 | // ──── 공통 확인 스텝 (smoke) ────
  260 | 
  261 | When('숏컷 영역 노출 확인', async ({ page }) => {
  262 |   await expect(page.locator('a[href*="/reading-list"], a[href*="/inbox"]').first()).toBeVisible({ timeout: 5000 });
  263 | });
  264 | 
  265 | Then('숏컷 영역에 Library, Inbox, Publish, 검색 아이콘 노출된다.', async ({ page }) => {
  266 |   await expect(page.locator('a[href*="/reading-list"], a[href*="/inbox"]').first()).toBeVisible({ timeout: 5000 });
  267 | });
  268 | 
  269 | Then(/^숏컷 영역에$/, async ({ page }) => {
  270 |   await expect(page.locator('a[href*="/reading-list"], a[href*="/inbox"]').first()).toBeVisible({ timeout: 5000 });
  271 | });
  272 | 
  273 | // [PCW] 검색 필드, 로그인, Publish 버튼이 노출된다. — /^\[PCW\](.*)$/ 에서 처리
  274 | 
  275 | // [MW] 검색, 프로필 버튼이 노출된다. — /^\[MW\](.*)$/ 에서 처리
  276 | 
  277 | // - 대메뉴, - 미로그인, - 로그인 항목들은 /^- .+$/ 에서 처리
  278 | // (서비스 접속 확인은 '타파스 웹 정상 진입된다.' step에서 이미 검증됨)
  279 | 
  280 | // - 하기 구성 노출 확인 — /^- .+$/ 에서 처리
  281 | 
  282 | // ──── 로그인 / 회원가입 공통 ────
  283 | 
  284 | When(/^(페이스북|구글) 로그인 팝업창 > 로그인 시도$/, async ({ page }, provider: string) => {
  285 |   // 이전 스텝에서 __socialPopup에 저장된 팝업 우선 사용, 없으면 context에서 탐색
  286 |   const popup: import('@playwright/test').Page | null | undefined =
  287 |     (page as any).__socialPopup ?? page.context().pages().find(p => p !== page) ?? null;
  288 |   if (!popup) { await expect(page.locator('body')).toBeVisible(); return; }
  289 | 
  290 |   // 팝업이 about:blank에서 실제 URL로 이동할 때까지 대기
  291 |   await popup.waitForURL(url => url.href !== 'about:blank', { timeout: 12000 }).catch(() => {});
  292 |   await popup.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {});
  293 | 
  294 |   if (provider === '페이스북') {
  295 |     const email = process.env.FACEBOOK_EMAIL ?? '';
  296 |     const pw    = process.env.FACEBOOK_PASSWORD ?? '';
  297 |     // Facebook 로그인 폼 — ID는 동적(_r_N_)이므로 name 속성 사용
  298 |     const emailInput = popup.locator('input[name="email"]');
  299 |     const passInput  = popup.locator('input[name="pass"]');
  300 |     if ((await emailInput.count()) > 0) await emailInput.fill(email);
  301 |     if ((await passInput.count()) > 0) {
  302 |       await passInput.fill(pw);
  303 |       // Facebook submit은 숨겨진 input[type="submit"]이므로 Enter 키로 제출
  304 |       await passInput.press('Enter');
  305 |     }
  306 |     await popup.waitForLoadState('domcontentloaded', { timeout: 20000 }).catch(() => {});
  307 |   } else {
  308 |     // Google — 이메일 입력 → Next → 비밀번호 입력 → Next
  309 |     const email = process.env.GOOGLE_EMAIL ?? '';
  310 |     const pw    = process.env.GOOGLE_PASSWORD ?? '';
  311 |     const emailInput = popup.locator('input[type="email"]');
  312 |     if ((await emailInput.count()) > 0) {
  313 |       await emailInput.fill(email);
  314 |       await popup.getByRole('button', { name: /next/i }).click();
  315 |       await popup.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => {});
  316 |     }
  317 |     const passInput = popup.locator('input[type="password"]');
  318 |     if ((await passInput.count()) > 0) {
  319 |       await passInput.fill(pw);
  320 |       await popup.getByRole('button', { name: /next/i }).click();
  321 |       await popup.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => {});
```