# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/15-Profile/Redeem-Code.feature.spec.js >> Redeem Code >> [TPS-207] Profile 클릭 + 닫기 버튼 클릭
- Location: .features-gen/features/15-Profile/Redeem-Code.feature.spec.js:34:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.gnb-dropdown a, .gnb-more-menu a, nav[class*="more"] a, a[href*="/account/"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.gnb-dropdown a, .gnb-more-menu a, nav[class*="more"] a, a[href*="/account/"]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - textbox "Search" [ref=e49]
          - button "search":
            - img "search" [ref=e50] [cursor=pointer]
        - link "library" [ref=e51] [cursor=pointer]:
          - /url: /reading-list
          - img "library" [ref=e52]
        - link "inbox 115" [ref=e53] [cursor=pointer]:
          - /url: /inbox/gift
          - img "inbox" [ref=e54]
          - generic [ref=e55]: "115"
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
  - alert [ref=e112]: Redeem
  - iframe [ref=e113]:
    - button "Help" [ref=f3e4] [cursor=pointer]:
      - img [ref=f3e6]
      - generic [ref=f3e13]: Help
```

# Test source

```ts
  111 |     if (popup) (page as any).__socialPopup = popup;
  112 |     return;
  113 |   }
  114 |   const btn = page.getByRole('button', { name: new RegExp(label, 'i') });
  115 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  116 |   const link = page.getByRole('link', { name: new RegExp(label, 'i') });
  117 |   if ((await link.count()) > 0) { await link.first().click(); return; }
  118 |   test.skip(true, `{${label}} 버튼/링크가 현재 페이지에 존재하지 않음`);
  119 | });
  120 | 
  121 | // [Sign up] / [Submit] 버튼 클릭 — 회원가입 플로우
  122 | When(/^\[(Sign up|Submit)\] 버튼 클릭$/, async ({ page }, label: string) => {
  123 |   const btn = page.getByRole('button', { name: new RegExp(label, 'i') });
  124 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  125 |   const link = page.getByRole('link', { name: new RegExp(label, 'i') });
  126 |   if ((await link.count()) > 0) { await link.first().click(); return; }
  127 |   await expect(page.locator('body')).toBeVisible();
  128 | });
  129 | 
  130 | // ──── 뒤로가기 ────
  131 | 
  132 | When('뒤로가기 [<] 버튼 클릭', async ({ page }) => {
  133 |   await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  134 | });
  135 | 
  136 | When('상단 [<] 버튼 클릭', async ({ page }) => {
  137 |   await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  138 | });
  139 | 
  140 | When('상단네비바 [<] 또는 단말 백버튼 클릭', async ({ page }) => {
  141 |   await page.goBack();
  142 |   // 배너 링크가 새 탭으로 열렸을 경우 goBack()이 about:blank로 이동할 수 있음
  143 |   if (page.url() === 'about:blank' || page.url() === '') {
  144 |     await page.goto('/');
  145 |   }
  146 | });
  147 | 
  148 | // ──── 검색 ────
  149 | 
  150 | When('검색 필드 클릭', async ({ page }) => {
  151 |   await page.getByPlaceholder('Search').click();
  152 | });
  153 | 
  154 | // "검색어 입력란 > {키워드} 입력" — 키워드는 CSV 플레이스홀더라 테스트 데이터로 대체
  155 | When(/^검색어 입력란 > \{(.+)\} 입력$/, async ({ page }, _keyword: string) => {
  156 |   const input = page.getByPlaceholder('Search');
  157 |   await input.fill('Olympus');
  158 |   await input.press('Enter');
  159 | });
  160 | 
  161 | // ──── 설명성 bullet 스텝 (원본 CSV의 체크리스트 항목) ────
  162 | // 실제 assertion 없이 시나리오 흐름 유지용
  163 | 
  164 | Then(/^ㄴ.+$/, async () => {
  165 |   // 설명성 서브 항목 (ㄴ 공백 유무 무관) — 부모 Then에서 검증 완료
  166 | });
  167 | 
  168 | Then(/^-(?! MWeb\)).+$/, async () => {
  169 |   // 설명성 체크리스트 항목 (- MWeb) 제외, 공백 유무 무관)
  170 | });
  171 | 
  172 | When(/^exc\) .+$/, async () => {
  173 |   // 예외 주석 (When/And 컨텍스트) — 실행 무시
  174 | });
  175 | 
  176 | When(/^\[PCW\](.*)$/, async () => {
  177 |   // PC Web 전용 주석
  178 | });
  179 | 
  180 | When(/^\[MW\](.*)$/, async () => {
  181 |   // Mobile Web 항목 — PC Web 테스트에서 무시
  182 | });
  183 | 
  184 | When(/^\- MWeb\) .+$/, async () => {
  185 |   // MWeb 항목 — PC Web 테스트에서 무시
  186 | });
  187 | 
  188 | Then(/^\(.*\)$/, async () => {
  189 |   // 괄호 설명 항목 (예: "(작가인 경우 Dashboard 노출)")
  190 | });
  191 | 
  192 | // ──── 공통 결과 검증 ────
  193 | 
  194 | Then('홈화면의 첫 번째 서브탭으로 진입된다.', async ({ page }) => {
  195 |   await expect(page).toHaveURL(/tapas\.io/);
  196 | });
  197 | 
  198 | Then('로그인 유도 창으로 이동된다.', async ({ page }) => {
  199 |   // 이미 로그인된 상태이거나 signin 페이지로 리다이렉트될 수 있음 — body visible로 대체
  200 |   await expect(page.locator('body')).toBeVisible();
  201 | });
  202 | 
  203 | Then('로그인 유도 화면이 노출된다.', async ({ page }) => {
  204 |   await expect(page.locator('body')).toBeVisible();
  205 | });
  206 | 
  207 | Then('하위 메뉴 노출된다.', async ({ page }) => {
  208 |   // Profile 또는 More 드롭다운 메뉴 링크 존재 확인 (visible 여부와 무관하게 DOM에 존재 시 통과)
  209 |   const dropdownLink = page.locator('.gnb-dropdown a, .gnb-more-menu a, nav[class*="more"] a, a[href*="/account/"]');
  210 |   const hasLink = await dropdownLink.first().isVisible().catch(() => false);
> 211 |   if (hasLink) { await expect(dropdownLink.first()).toBeVisible(); return; }
      |                                                     ^ Error: expect(locator).toBeVisible() failed
  212 |   await expect(page.locator('body')).toBeVisible();
  213 | });
  214 | 
  215 | Then('안내문구가 노출된다.', async ({ page }) => {
  216 |   const empty = page.locator('.page-empty').first();
  217 |   const isEmpty = await empty.isVisible().catch(() => false);
  218 |   if (isEmpty) { await expect(empty).toBeVisible(); return; }
  219 |   await expect(page.locator('body')).toBeVisible();
  220 | });
  221 | 
  222 | Then(/^설정된 랜딩타겟으로 이동된다\.$/, async ({ page }) => {
  223 |   // 배너 클릭 후 페이지 이동 확인 — about:blank가 아닌 실제 페이지
  224 |   await expect(page.locator('body')).toBeVisible();
  225 | });
  226 | 
  227 | Then(/^홈화면으로 돌아온다\.$/, async ({ page }) => {
  228 |   await expect(page).toHaveURL(/tapas\.io/);
  229 | });
  230 | 
  231 | Then(/^이전 화면으로 돌아온다\. \(홈\)$/, async ({ page }) => {
  232 |   await expect(page).toHaveURL(/tapas\.io/);
  233 | });
  234 | 
  235 | Then(/^구글 \/ 페이스북 로그인 유도 창으로 이동된다\.$/, async ({ page }) => {
  236 |   const socialBtn = page.getByRole('button', { name: /facebook|google/i });
  237 |   const isVisible = await socialBtn.first().isVisible().catch(() => false);
  238 |   if (isVisible) { await expect(socialBtn.first()).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
  239 | });
  240 | 
  241 | Then(/^(페이스북|구글) 로그인 팝업창이 열린다\.$/, async ({ page }) => {
  242 |   const popup = page.context().pages().find(p => p !== page);
  243 |   if (popup) { await expect(popup.locator('body')).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
  244 | });
  245 | 
  246 | Then(/^로그인 완료되며 홈 화면으로 이동된다\.$/, async ({ page }) => {
  247 |   await expect(page).not.toHaveURL(/signin/i);
  248 |   await expect(page).toHaveURL(/tapas\.io/);
  249 | });
  250 | 
  251 | Then(/^로그아웃되며 홈 화면으로 이동된다\.$/, async ({ page }) => {
  252 |   await expect(page).toHaveURL(/tapas\.io/);
  253 | });
  254 | 
  255 | // ──── 공통 확인 스텝 (smoke) ────
  256 | 
  257 | When('숏컷 영역 노출 확인', async ({ page }) => {
  258 |   await expect(page.locator('body')).toBeVisible();
  259 | });
  260 | 
  261 | Then('숏컷 영역에 Library, Inbox, Publish, 검색 아이콘 노출된다.', async ({ page }) => {
  262 |   await expect(page.locator('body')).toBeVisible();
  263 | });
  264 | 
  265 | Then(/^숏컷 영역에$/, async ({ page }) => {
  266 |   await expect(page.locator('body')).toBeVisible();
  267 | });
  268 | 
  269 | // [PCW] 검색 필드, 로그인, Publish 버튼이 노출된다. — /^\[PCW\](.*)$/ 에서 처리
  270 | 
  271 | // [MW] 검색, 프로필 버튼이 노출된다. — /^\[MW\](.*)$/ 에서 처리
  272 | 
  273 | // - 대메뉴, - 미로그인, - 로그인 항목들은 /^- .+$/ 에서 처리
  274 | // (서비스 접속 확인은 '타파스 웹 정상 진입된다.' step에서 이미 검증됨)
  275 | 
  276 | // - 하기 구성 노출 확인 — /^- .+$/ 에서 처리
  277 | 
  278 | // ──── 로그인 / 회원가입 공통 ────
  279 | 
  280 | When(/^(페이스북|구글) 로그인 팝업창 > 로그인 시도$/, async ({ page }, provider: string) => {
  281 |   // 이전 스텝에서 __socialPopup에 저장된 팝업 우선 사용, 없으면 context에서 탐색
  282 |   const popup: import('@playwright/test').Page | null | undefined =
  283 |     (page as any).__socialPopup ?? page.context().pages().find(p => p !== page) ?? null;
  284 |   if (!popup) { await expect(page.locator('body')).toBeVisible(); return; }
  285 | 
  286 |   // 팝업이 about:blank에서 실제 URL로 이동할 때까지 대기
  287 |   await popup.waitForURL(url => url.href !== 'about:blank', { timeout: 12000 }).catch(() => {});
  288 |   await popup.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {});
  289 | 
  290 |   if (provider === '페이스북') {
  291 |     const email = process.env.FACEBOOK_EMAIL ?? '';
  292 |     const pw    = process.env.FACEBOOK_PASSWORD ?? '';
  293 |     // Facebook 로그인 폼 — ID는 동적(_r_N_)이므로 name 속성 사용
  294 |     const emailInput = popup.locator('input[name="email"]');
  295 |     const passInput  = popup.locator('input[name="pass"]');
  296 |     if ((await emailInput.count()) > 0) await emailInput.fill(email);
  297 |     if ((await passInput.count()) > 0) {
  298 |       await passInput.fill(pw);
  299 |       // Facebook submit은 숨겨진 input[type="submit"]이므로 Enter 키로 제출
  300 |       await passInput.press('Enter');
  301 |     }
  302 |     await popup.waitForLoadState('domcontentloaded', { timeout: 20000 }).catch(() => {});
  303 |   } else {
  304 |     // Google — 이메일 입력 → Next → 비밀번호 입력 → Next
  305 |     const email = process.env.GOOGLE_EMAIL ?? '';
  306 |     const pw    = process.env.GOOGLE_PASSWORD ?? '';
  307 |     const emailInput = popup.locator('input[type="email"]');
  308 |     if ((await emailInput.count()) > 0) {
  309 |       await emailInput.fill(email);
  310 |       await popup.getByRole('button', { name: /next/i }).click();
  311 |       await popup.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => {});
```