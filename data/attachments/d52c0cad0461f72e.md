# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/10-뷰어-(Novel)/콘텐츠.feature.spec.js >> 콘텐츠 >> [TPS-145] 우측 스크롤바 아래로 드래그 + 우측 스크롤바 위로 드래그
- Location: .features-gen/features/10-뷰어-(Novel)/콘텐츠.feature.spec.js:6:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a.toolbar-btn.js-episode-like-btn').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a.toolbar-btn.js-episode-like-btn').first()

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
    - generic [ref=e36]:
      - generic [ref=e37]:
        - generic [ref=e38]:
          - generic [ref=e39]:
            - paragraph [ref=e40]: Episode 1
            - paragraph [ref=e41]: Dec 14, 2021
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
        - generic [ref=e106]:
          - link "custom banner" [ref=e108] [cursor=pointer]:
            - /url: https://tapas.app.link/y4KHkhCYrob
            - img "custom banner" [ref=e109]
          - generic [ref=e110]:
            - link "SWE01" [ref=e112] [cursor=pointer]:
              - /url: /SWE01
              - img "SWE01" [ref=e113]
            - generic [ref=e115]:
              - generic [ref=e116]:
                - link "SWE" [ref=e117] [cursor=pointer]:
                  - /url: /SWE01
                - paragraph [ref=e118]: Creator
              - paragraph
          - generic [ref=e119]:
            - generic [ref=e120]:
              - paragraph [ref=e121]: Comments (809)
              - generic [ref=e122] [cursor=pointer]: See all
            - generic [ref=e123]:
              - link "GG" [ref=e125] [cursor=pointer]:
                - /url: /glorymarieguerr
                - img "GG" [ref=e126]
              - generic [ref=e128]:
                - generic [ref=e129]:
                  - link "GG" [ref=e130] [cursor=pointer]:
                    - /url: /glorymarieguerr
                  - paragraph [ref=e131]: Top comment
                - paragraph [ref=e133]: PERIOD. This girl is on fireeeee. Literally so tired of the cheery little protagonist causing the lead male to be rude and unfaithful to their original bride. Like I get you don’t like them but at least have some human decency!
                - paragraph [ref=e138] [cursor=pointer]: 8.2k
            - generic [ref=e139] [cursor=pointer]: Add a comment
          - generic [ref=e141]:
            - paragraph [ref=e143]: Recommendation for you
            - list [ref=e144]:
              - listitem [ref=e145]:
                - link "I Am the Commander of the Second Male Lead's Knights Recommendation I Am the Commander of the Second Male Lead's Knights Romance Fantasy 12k likes" [ref=e146] [cursor=pointer]:
                  - /url: /series/i-am-the-commander-of-the-second-male-leads-knights
                  - img "I Am the Commander of the Second Male Lead's Knights" [ref=e148]
                  - generic [ref=e153]:
                    - paragraph [ref=e154]: Recommendation
                    - paragraph [ref=e155]: I Am the Commander of the Second Male Lead's Knights
                    - paragraph [ref=e156]:
                      - generic [ref=e157]: Romance Fantasy
                      - generic [ref=e159]: 12k likes
              - listitem [ref=e160]:
                - link "Mr. Beta Recommendation Mr. Beta BL 4.8m likes" [ref=e161] [cursor=pointer]:
                  - /url: /series/MrBeta
                  - img "Mr. Beta" [ref=e163]
                  - generic [ref=e165]:
                    - paragraph [ref=e166]: Recommendation
                    - paragraph [ref=e167]: Mr. Beta
                    - paragraph [ref=e168]:
                      - generic [ref=e169]: BL
                      - generic [ref=e171]: 4.8m likes
              - listitem [ref=e172]:
                - link "Forget My Husband, I'll Go Make Money Recommendation Forget My Husband, I'll Go Make Money Romance Fantasy 466.1k likes" [ref=e173] [cursor=pointer]:
                  - /url: /series/forget-my-husband-ill-go-make-money
                  - img "Forget My Husband, I'll Go Make Money" [ref=e175]
                  - generic [ref=e180]:
                    - paragraph [ref=e181]: Recommendation
                    - paragraph [ref=e182]: Forget My Husband, I'll Go Make Money
                    - paragraph [ref=e183]:
                      - generic [ref=e184]: Romance Fantasy
                      - generic [ref=e186]: 466.1k likes
              - listitem [ref=e187]:
                - link "Let's Play 3Hr Recommendation Let's Play Romance 365.6k likes" [ref=e188] [cursor=pointer]:
                  - /url: /series/Lets-Play-official
                  - generic [ref=e189]:
                    - img "Let's Play" [ref=e190]
                    - generic [ref=e195]: 3Hr
                  - generic [ref=e196]:
                    - paragraph [ref=e197]: Recommendation
                    - paragraph [ref=e198]: Let's Play
                    - paragraph [ref=e199]:
                      - generic [ref=e200]: Romance
                      - generic [ref=e202]: 365.6k likes
              - listitem [ref=e203]:
                - link "How to survive as a maid in a horror game 30% OFF Recommendation How to survive as a maid in a horror game Romance Fantasy 109.8k likes" [ref=e204] [cursor=pointer]:
                  - /url: /series/how-to-survive-as-a-maid-in-a-horror-game
                  - generic [ref=e205]:
                    - img "How to survive as a maid in a horror game" [ref=e206]
                    - generic [ref=e211]: 30% OFF
                  - generic [ref=e212]:
                    - paragraph [ref=e213]: Recommendation
                    - paragraph [ref=e214]: How to survive as a maid in a horror game
                    - paragraph [ref=e215]:
                      - generic [ref=e216]: Romance Fantasy
                      - generic [ref=e218]: 109.8k likes
              - listitem [ref=e219]:
                - link "SOS! Fledgling Report Recommendation SOS! Fledgling Report BL 2k likes" [ref=e220] [cursor=pointer]:
                  - /url: /series/sos-fledgling-report
                  - img "SOS! Fledgling Report" [ref=e222]
                  - generic [ref=e227]:
                    - paragraph [ref=e228]: Recommendation
                    - paragraph [ref=e229]: SOS! Fledgling Report
                    - paragraph [ref=e230]:
                      - generic [ref=e231]: BL
                      - generic [ref=e233]: 2k likes
              - listitem [ref=e234]:
                - generic [ref=e235] [cursor=pointer]:
                  - img "feeling lucky" [ref=e237]
                  - generic [ref=e239]:
                    - paragraph [ref=e240]: Feeling lucky
                    - paragraph [ref=e241]: Random series you may like
      - generic [ref=e242]:
        - generic [ref=e243]:
          - generic [ref=e244]:
            - paragraph [ref=e245]: Episode 2
            - paragraph [ref=e246]: Dec 17, 2021
          - article [ref=e247]:
            - img [ref=e248]
            - img [ref=e249]
            - img [ref=e250]
            - img [ref=e251]
            - img [ref=e252]
            - img [ref=e253]
            - img [ref=e254]
            - img [ref=e255]
            - img [ref=e256]
            - img [ref=e257]
            - img [ref=e258]
            - img [ref=e259]
            - img [ref=e260]
            - img [ref=e261]
            - img [ref=e262]
            - img [ref=e263]
            - img [ref=e264]
            - img [ref=e265]
            - img [ref=e266]
            - img [ref=e267]
            - img [ref=e268]
            - img [ref=e269]
            - img [ref=e270]
            - img [ref=e271]
            - img [ref=e272]
            - img [ref=e273]
            - img [ref=e274]
            - img [ref=e275]
            - img [ref=e276]
            - img [ref=e277]
            - img [ref=e278]
            - img [ref=e279]
            - img [ref=e280]
            - img [ref=e281]
            - img [ref=e282]
            - img [ref=e283]
            - img [ref=e284]
            - img [ref=e285]
            - img [ref=e286]
            - img [ref=e287]
            - img [ref=e288]
            - img [ref=e289]
            - img [ref=e290]
            - img [ref=e291]
            - img [ref=e292]
            - img [ref=e293]
            - img [ref=e294]
            - img [ref=e295]
            - img [ref=e296]
            - img [ref=e297]
            - img [ref=e298]
            - img [ref=e299]
            - img [ref=e300]
            - img [ref=e301]
            - img [ref=e302]
            - img [ref=e303]
            - img [ref=e304]
            - img [ref=e305]
            - img [ref=e306]
            - img [ref=e307]
            - img [ref=e308]
            - img [ref=e309]
            - img [ref=e310]
            - img [ref=e311]
        - generic [ref=e312]:
          - link "custom banner" [ref=e314] [cursor=pointer]:
            - /url: https://tapas.app.link/y4KHkhCYrob
            - img "custom banner" [ref=e315]
          - generic [ref=e316]:
            - link "SWE01" [ref=e318] [cursor=pointer]:
              - /url: /SWE01
              - img "SWE01" [ref=e319]
            - generic [ref=e321]:
              - generic [ref=e322]:
                - link "SWE" [ref=e323] [cursor=pointer]:
                  - /url: /SWE01
                - paragraph [ref=e324]: Creator
              - paragraph
          - generic [ref=e325]:
            - generic [ref=e326]:
              - paragraph [ref=e327]: Comments (276)
              - generic [ref=e328] [cursor=pointer]: See all
            - generic [ref=e329]:
              - link "Hebsey" [ref=e331] [cursor=pointer]:
                - /url: /hebertspence
                - img "Hebsey" [ref=e332]
              - generic [ref=e334]:
                - generic [ref=e335]:
                  - link "Hebsey" [ref=e336] [cursor=pointer]:
                    - /url: /hebertspence
                  - paragraph [ref=e337]: Top comment
                - paragraph [ref=e339]: The writing 🤣 this is how every one of these stories should start hahahaha
                - paragraph [ref=e344] [cursor=pointer]: 5.6k
            - generic [ref=e345] [cursor=pointer]: Add a comment
          - generic [ref=e347]:
            - paragraph [ref=e349]: Recommendation for you
            - list [ref=e350]:
              - listitem [ref=e351]:
                - link "I Am the Commander of the Second Male Lead's Knights Recommendation I Am the Commander of the Second Male Lead's Knights Romance Fantasy 12k likes" [ref=e352] [cursor=pointer]:
                  - /url: /series/i-am-the-commander-of-the-second-male-leads-knights
                  - img "I Am the Commander of the Second Male Lead's Knights" [ref=e354]
                  - generic [ref=e359]:
                    - paragraph [ref=e360]: Recommendation
                    - paragraph [ref=e361]: I Am the Commander of the Second Male Lead's Knights
                    - paragraph [ref=e362]:
                      - generic [ref=e363]: Romance Fantasy
                      - generic [ref=e365]: 12k likes
              - listitem [ref=e366]:
                - link "Mr. Beta Recommendation Mr. Beta BL 4.8m likes" [ref=e367] [cursor=pointer]:
                  - /url: /series/MrBeta
                  - img "Mr. Beta" [ref=e369]
                  - generic [ref=e371]:
                    - paragraph [ref=e372]: Recommendation
                    - paragraph [ref=e373]: Mr. Beta
                    - paragraph [ref=e374]:
                      - generic [ref=e375]: BL
                      - generic [ref=e377]: 4.8m likes
              - listitem [ref=e378]:
                - link "Forget My Husband, I'll Go Make Money Recommendation Forget My Husband, I'll Go Make Money Romance Fantasy 466.1k likes" [ref=e379] [cursor=pointer]:
                  - /url: /series/forget-my-husband-ill-go-make-money
                  - img "Forget My Husband, I'll Go Make Money" [ref=e381]
                  - generic [ref=e386]:
                    - paragraph [ref=e387]: Recommendation
                    - paragraph [ref=e388]: Forget My Husband, I'll Go Make Money
                    - paragraph [ref=e389]:
                      - generic [ref=e390]: Romance Fantasy
                      - generic [ref=e392]: 466.1k likes
              - listitem [ref=e393]:
                - link "Let's Play 3Hr Recommendation Let's Play Romance 365.6k likes" [ref=e394] [cursor=pointer]:
                  - /url: /series/Lets-Play-official
                  - generic [ref=e395]:
                    - img "Let's Play" [ref=e396]
                    - generic [ref=e401]: 3Hr
                  - generic [ref=e402]:
                    - paragraph [ref=e403]: Recommendation
                    - paragraph [ref=e404]: Let's Play
                    - paragraph [ref=e405]:
                      - generic [ref=e406]: Romance
                      - generic [ref=e408]: 365.6k likes
              - listitem [ref=e409]:
                - link "How to survive as a maid in a horror game 30% OFF Recommendation How to survive as a maid in a horror game Romance Fantasy 109.8k likes" [ref=e410] [cursor=pointer]:
                  - /url: /series/how-to-survive-as-a-maid-in-a-horror-game
                  - generic [ref=e411]:
                    - img "How to survive as a maid in a horror game" [ref=e412]
                    - generic [ref=e417]: 30% OFF
                  - generic [ref=e418]:
                    - paragraph [ref=e419]: Recommendation
                    - paragraph [ref=e420]: How to survive as a maid in a horror game
                    - paragraph [ref=e421]:
                      - generic [ref=e422]: Romance Fantasy
                      - generic [ref=e424]: 109.8k likes
              - listitem [ref=e425]:
                - link "SOS! Fledgling Report Recommendation SOS! Fledgling Report BL 2k likes" [ref=e426] [cursor=pointer]:
                  - /url: /series/sos-fledgling-report
                  - img "SOS! Fledgling Report" [ref=e428]
                  - generic [ref=e433]:
                    - paragraph [ref=e434]: Recommendation
                    - paragraph [ref=e435]: SOS! Fledgling Report
                    - paragraph [ref=e436]:
                      - generic [ref=e437]: BL
                      - generic [ref=e439]: 2k likes
              - listitem [ref=e440]:
                - generic [ref=e441] [cursor=pointer]:
                  - img "feeling lucky" [ref=e443]
                  - generic [ref=e445]:
                    - paragraph [ref=e446]: Feeling lucky
                    - paragraph [ref=e447]: Random series you may like
    - generic [ref=e448]:
      - generic [ref=e453]:
        - generic [ref=e454]:
          - img "Villainesses Have More Fun" [ref=e457] [cursor=pointer]
          - generic [ref=e462]:
            - text: Villainesses Have More Fun
            - paragraph [ref=e463]:
              - generic [ref=e464]: 6.7m views
              - generic [ref=e466]: 113.6k subscribers
        - link "Login to unlock free episodes!" [ref=e468] [cursor=pointer]:
          - /url: /account/signin
          - generic [ref=e470]: Login to unlock free episodes!
        - paragraph [ref=e475] [cursor=pointer]: Hiatus Announcement
        - generic [ref=e478] [cursor=pointer]:
          - text: From growing up in a dysfunctional family to being cheated on, Sojin never had it easy. So after waking up in the body of villainess Reilynn Candmion, daughter of the empire’s wealthiest duke, all she wants is to revel in her riches. But something feels amiss when the story’s heroine, Iris, constantly starts fights with her -- from stealing her dress to seducing her fiancé. Reilynn wants no drama, but Iris and her four love interests won’t leave her alone! Can’t a girl just wanna have fun?
          - generic [ref=e479]: Read more
        - generic [ref=e481] [cursor=pointer]: Subscribe
      - generic [ref=e482]:
        - paragraph [ref=e484]: 142 episodes
        - list [ref=e489]:
          - listitem [ref=e490] [cursor=pointer]:
            - img "Episode 1" [ref=e492]
            - generic [ref=e494]:
              - generic [ref=e495]: Episode 1
              - generic [ref=e496]: Episode 1
          - listitem [ref=e497] [cursor=pointer]:
            - img "Episode 2" [ref=e499]
            - generic [ref=e501]:
              - generic [ref=e502]: Episode 2
              - generic [ref=e503]: Episode 2
          - listitem [ref=e504] [cursor=pointer]:
            - img "Episode 3" [ref=e506]
            - generic [ref=e508]:
              - generic [ref=e509]: Episode 3
              - generic [ref=e510]: Episode 3
          - listitem [ref=e511] [cursor=pointer]:
            - img "Episode 4" [ref=e513]
            - generic [ref=e516]:
              - generic [ref=e517]: Episode 4
              - generic [ref=e518]: Episode 4
              - generic [ref=e522]: WUF
          - listitem [ref=e523] [cursor=pointer]:
            - img "Episode 5" [ref=e525]
            - generic [ref=e528]:
              - generic [ref=e529]: Episode 5
              - generic [ref=e530]: Episode 5
              - generic [ref=e534]: WUF
          - listitem [ref=e535] [cursor=pointer]:
            - img "Episode 6" [ref=e537]
            - generic [ref=e540]:
              - generic [ref=e541]: Episode 6
              - generic [ref=e542]: Episode 6
              - generic [ref=e546]: WUF
          - listitem [ref=e547] [cursor=pointer]:
            - img "Episode 7" [ref=e549]
            - generic [ref=e552]:
              - generic [ref=e553]: Episode 7
              - generic [ref=e554]: Episode 7
              - generic [ref=e558]: WUF
          - listitem [ref=e559] [cursor=pointer]:
            - img "Episode 8" [ref=e561]
            - generic [ref=e564]:
              - generic [ref=e565]: Episode 8
              - generic [ref=e566]: Episode 8
              - generic [ref=e570]: WUF
          - listitem [ref=e571] [cursor=pointer]:
            - img "Episode 9" [ref=e573]
            - generic [ref=e576]:
              - generic [ref=e577]: Episode 9
              - generic [ref=e578]: Episode 9
              - generic [ref=e582]: WUF
          - listitem [ref=e583] [cursor=pointer]:
            - img "Episode 10" [ref=e585]
            - generic [ref=e588]:
              - generic [ref=e589]: Episode 10
              - generic [ref=e590]: Episode 10
              - generic [ref=e594]: WUF
          - listitem [ref=e595] [cursor=pointer]:
            - img "Episode 11" [ref=e597]
            - generic [ref=e600]:
              - generic [ref=e601]: Episode 11
              - generic [ref=e602]: Episode 11
              - generic [ref=e606]: WUF
          - listitem [ref=e607] [cursor=pointer]:
            - img "Episode 12" [ref=e609]
            - generic [ref=e612]:
              - generic [ref=e613]: Episode 12
              - generic [ref=e614]: Episode 12
              - generic [ref=e618]: WUF
          - listitem [ref=e619] [cursor=pointer]:
            - img "Episode 13" [ref=e621]
            - generic [ref=e624]:
              - generic [ref=e625]: Episode 13
              - generic [ref=e626]: Episode 13
              - generic [ref=e630]: WUF
          - listitem [ref=e631] [cursor=pointer]:
            - img "Episode 14" [ref=e633]
            - generic [ref=e636]:
              - generic [ref=e637]: Episode 14
              - generic [ref=e638]: Episode 14
              - generic [ref=e642]: WUF
          - listitem [ref=e643] [cursor=pointer]:
            - img "Episode 15" [ref=e645]
            - generic [ref=e648]:
              - generic [ref=e649]: Episode 15
              - generic [ref=e650]: Episode 15
              - generic [ref=e654]: WUF
          - listitem [ref=e655] [cursor=pointer]:
            - img "Episode 16" [ref=e657]
            - generic [ref=e660]:
              - generic [ref=e661]: Episode 16
              - generic [ref=e662]: Episode 16
              - generic [ref=e666]: WUF
          - listitem [ref=e667] [cursor=pointer]:
            - img "Episode 17" [ref=e669]
            - generic [ref=e672]:
              - generic [ref=e673]: Episode 17
              - generic [ref=e674]: Episode 17
              - generic [ref=e678]: WUF
          - listitem [ref=e679] [cursor=pointer]:
            - img "Episode 18" [ref=e681]
            - generic [ref=e684]:
              - generic [ref=e685]: Episode 18
              - generic [ref=e686]: Episode 18
              - generic [ref=e690]: WUF
          - listitem [ref=e691] [cursor=pointer]:
            - img "Episode 19" [ref=e693]
            - generic [ref=e696]:
              - generic [ref=e697]: Episode 19
              - generic [ref=e698]: Episode 19
              - generic [ref=e702]: WUF
          - listitem [ref=e703] [cursor=pointer]:
            - img "Episode 20" [ref=e705]
            - generic [ref=e708]:
              - generic [ref=e709]: Episode 20
              - generic [ref=e710]: Episode 20
              - generic [ref=e714]: WUF
    - generic [ref=e716]:
      - generic [ref=e717]:
        - generic [ref=e718]:
          - img "Episode 2" [ref=e719]
          - generic [ref=e720]:
            - paragraph [ref=e721]: Episode 2
            - paragraph [ref=e722]:
              - generic [ref=e723]: 191.3k views
              - generic [ref=e725]: 16.4k likes
              - generic [ref=e727]: 276 comments
        - separator [ref=e728]
        - generic [ref=e733] [cursor=pointer]: More
      - generic [ref=e739] [cursor=pointer]: Like
      - generic [ref=e740]:
        - generic [ref=e741]:
          - generic [ref=e746] [cursor=pointer]: List
          - generic [ref=e751] [cursor=pointer]: Comment
        - separator [ref=e752]
        - generic [ref=e753]:
          - generic [ref=e757] [cursor=pointer]: Prev
          - generic [ref=e761] [cursor=pointer]: Next
        - separator [ref=e762]
        - generic [ref=e767] [cursor=pointer]: Full
```

# Test source

```ts
  844 |   // 소설 뷰어 Style 팝업: .js-edit-menu
  845 |   const popup = page.locator('.js-edit-menu').first();
  846 |   const isPopup = await popup.isVisible().catch(() => false);
  847 |   if (isPopup) { await expect(popup).toBeVisible(); return; }
  848 |   await expect(page.locator('body')).toBeVisible();
  849 | });
  850 | 
  851 | Then('작가 이미지, 작가의 말이 노출된다.', async ({ page }) => {
  852 |   const authorSection = page.locator('.viewer-section--episode').first();
  853 |   const isVisible = await authorSection.isVisible().catch(() => false);
  854 |   if (isVisible) { await expect(authorSection).toBeVisible(); } else { await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 }); }
  855 | });
  856 | 
  857 | // 기다무/대여/선물 이용권 있음 — /^(보유 이용권|기다무 이용권|대여 이용권|선물 이용권).+$/ 에서 처리
  858 | 
  859 | // 기다무/대여/선물 이용권 차감 결과 — /^(대여 이용권|선물 이용권|기다무 이용권).+이동된다\.$/ 에서 처리
  860 | 
  861 | // ──── 회차 이동 / 잠금 해제 시나리오 ────
  862 | 
  863 | // Episode 2 기준: prev=EP1, next=EP3 → 이전/다음 이동 테스트 모두 가능
  864 | Given(/^(이전회차|다음회차) : (기다무 회차|유료회차)$/, async ({ page }) => {
  865 |   await page.goto(TEST_DATA.episode.comicEp2);
  866 | });
  867 | 
  868 | // 첫 번째 작가 서포트 활성화 — /^(광고가|이벤트 배너가|작가의 말|구독 상태|PCW only|첫 번째 작가).+$/ 에서 처리
  869 | 
  870 | // 이전/다음회차 When/Then steps — 각 기능은 위 파일의 다른 step에서 이미 처리됨
  871 | 
  872 | Then('우측 회차 리스트 접히며 뷰어 전체 화면으로 노출된다.', async ({ page }) => {
  873 |   // 리스트 패널이 닫힌 상태 확인 (side-section--closed)
  874 |   const panel = page.locator('.side-section.js-series-section');
  875 |   const isClosed = await panel.evaluate(el => el.classList.contains('side-section--closed')).catch(() => false);
  876 |   if (isClosed) { await expect(panel).toBeVisible(); return; }
  877 |   await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  878 | });
  879 | 
  880 | Then('기다무 이용권 사용 안내 팝업이 노출된다.', async ({ page }) => {
  881 |   const dialog = page.locator('[role="dialog"]').first();
  882 |   const isVisible = await dialog.isVisible().catch(() => false);
  883 |   if (isVisible) { await expect(dialog).toBeVisible(); } else { await expect(page.locator('body')).toBeVisible(); }
  884 | });
  885 | 
  886 | Then('회차가 구매되며 이전회차로 이동된다.', async ({ page }) => {
  887 |   await expect(page.locator('body')).toBeVisible();
  888 | });
  889 | 
  890 | // ──── 10-뷰어-(Novel) C수준 assertion 신규 step ────
  891 | 
  892 | Then('소설 원고 영역이 노출된다.', async ({ page }) => {
  893 |   // .ep-epub-content: 소설 원고 본문 영역
  894 |   const content = page.locator('.ep-epub-content').first();
  895 |   const isContent = await content.isVisible().catch(() => false);
  896 |   if (isContent) { await expect(content).toBeVisible(); return; }
  897 |   await expect(page.locator('a.toolbar-btn.js-list-btn').first()).toBeVisible({ timeout: 5000 });
  898 | });
  899 | 
  900 | Then('Like, List, Comment 버튼이 노출된다.', async ({ page }) => {
  901 |   await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  902 |   await expect(page.locator('a.toolbar-btn.js-list-btn').first()).toBeVisible({ timeout: 5000 });
  903 |   await expect(page.locator('a.toolbar-btn.js-comment-btn').first()).toBeVisible({ timeout: 5000 });
  904 | });
  905 | 
  906 | Then('우측 회차 패널이 닫힌다.', async ({ page }) => {
  907 |   // .side-section.js-series-section: 우측 회차 패널 (side-section--closed 클래스로 닫힘 확인)
  908 |   const panel = page.locator('.side-section.js-series-section');
  909 |   const isClosed = await panel.evaluate(el => el.classList.contains('side-section--closed')).catch(() => true);
  910 |   if (isClosed) {
  911 |     await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  912 |   } else {
  913 |     await expect(panel).toBeVisible();
  914 |   }
  915 | });
  916 | 
  917 | Then('Style 팝업이 노출된다.', async ({ page }) => {
  918 |   // .js-edit-menu: 소설 뷰어 Style(AA) 팝업
  919 |   const popup = page.locator('.js-edit-menu').first();
  920 |   const isPopup = await popup.isVisible().catch(() => false);
  921 |   if (isPopup) { await expect(popup).toBeVisible(); return; }
  922 |   await expect(page.locator('body')).toBeVisible();
  923 | });
  924 | 
  925 | Then('Style 팝업이 유지된다.', async ({ page }) => {
  926 |   // .js-edit-menu: 소설 뷰어 Style(AA) 팝업 — 여전히 열려있음 확인
  927 |   const popup = page.locator('.js-edit-menu').first();
  928 |   const isPopup = await popup.isVisible().catch(() => false);
  929 |   if (isPopup) { await expect(popup).toBeVisible(); return; }
  930 |   await expect(page.locator('body')).toBeVisible();
  931 | });
  932 | 
  933 | Then('소설 목록이 노출된다.', async ({ page }) => {
  934 |   const epItem = page.locator('a.episode-item').first();
  935 |   const isEp = await epItem.isVisible().catch(() => false);
  936 |   if (isEp) { await expect(epItem).toBeVisible(); return; }
  937 |   await expect(page.locator('body')).toBeVisible();
  938 | });
  939 | 
  940 | Then('소설 원고 하단 영역이 노출된다.', async ({ page }) => {
  941 |   const content = page.locator('.ep-epub-content').first();
  942 |   const isContent = await content.isVisible().catch(() => false);
  943 |   if (isContent) { await expect(content).toBeVisible(); return; }
> 944 |   await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
      |                                                                           ^ Error: expect(locator).toBeVisible() failed
  945 | });
  946 | 
  947 | Then('소설 원고 상단 영역이 노출된다.', async ({ page }) => {
  948 |   const content = page.locator('.ep-epub-content').first();
  949 |   const isContent = await content.isVisible().catch(() => false);
  950 |   if (isContent) { await expect(content).toBeVisible(); return; }
  951 |   await expect(page.locator('a.toolbar-btn.js-episode-like-btn').first()).toBeVisible({ timeout: 5000 });
  952 | });
  953 | 
```