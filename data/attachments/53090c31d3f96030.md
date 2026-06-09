# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/12-보관함/Updated.feature.spec.js >> Updated >> [TPS-181] 작품 클릭 + 임의의 작품 클릭
- Location: .features-gen/features/12-보관함/Updated.feature.spec.js:6:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a.episode-item').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a.episode-item').first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e8]:
          - link "tapas" [active] [ref=e9] [cursor=pointer]:
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
          - link "inbox 117" [ref=e53] [cursor=pointer]:
            - /url: /inbox/gift
            - img "inbox" [ref=e54]
            - generic [ref=e55]: "117"
          - button "profile image" [ref=e57] [cursor=pointer]:
            - img "profile image" [ref=e59]
          - link "Publish" [ref=e61] [cursor=pointer]:
            - /url: https://www.creators.tapas.io
            - button "Publish" [ref=e62]
        - generic [ref=e68]:
          - link "Spotlight" [ref=e69] [cursor=pointer]:
            - /url: /menu/1/subtab/1
            - img "Spotlight" [ref=e72]
          - link "Daily" [ref=e74] [cursor=pointer]:
            - /url: /menu/1/subtab/29
            - img "Daily" [ref=e77]
          - link "New" [ref=e79] [cursor=pointer]:
            - /url: /menu/1/subtab/4
            - img "New" [ref=e82]
          - link "Popular" [ref=e84] [cursor=pointer]:
            - /url: /menu/1/subtab/3
            - img "Popular" [ref=e87]
          - link "Completed" [ref=e89] [cursor=pointer]:
            - /url: /menu/1/subtab/6
            - img "Completed" [ref=e92]
          - link "Free Access" [ref=e94] [cursor=pointer]:
            - /url: /menu/1/subtab/40
            - img "Free Access" [ref=e97]
    - main [ref=e101]:
      - generic [ref=e105]:
        - generic [ref=e107]:
          - article [ref=e109]:
            - link "NEW✨ Came for the paycheck, left with a ring! wuf EVENT Comic dot Romance Fantasy" [ref=e110] [cursor=pointer]:
              - /url: /event/11dUmR
              - generic [ref=e118]:
                - paragraph [ref=e121]: NEW✨ Came for the paycheck, left with a ring!
                - generic [ref=e122]:
                  - generic [ref=e124]:
                    - img "wuf" [ref=e126]
                    - generic [ref=e127]: EVENT
                  - generic [ref=e129]:
                    - generic [ref=e130]: Comic
                    - img "dot" [ref=e131]
                    - generic [ref=e132]: Romance Fantasy
          - article [ref=e134]:
            - link "NEW✨ Food is the universal language, even in another world! wuf EVENT Comic dot Romance Fantasy" [ref=e135] [cursor=pointer]:
              - /url: /series/328982/info
              - generic [ref=e143]:
                - paragraph [ref=e146]: NEW✨ Food is the universal language, even in another world!
                - generic [ref=e147]:
                  - generic [ref=e149]:
                    - img "wuf" [ref=e151]
                    - generic [ref=e152]: EVENT
                  - generic [ref=e154]:
                    - generic [ref=e155]: Comic
                    - img "dot" [ref=e156]
                    - generic [ref=e157]: Romance Fantasy
          - article [ref=e159]:
            - link "NEW✨ How does one fire the unfireable? wuf EVENT Comic dot Romance" [ref=e160] [cursor=pointer]:
              - /url: /series/328983/info
              - generic [ref=e168]:
                - paragraph [ref=e171]: NEW✨ How does one fire the unfireable?
                - generic [ref=e172]:
                  - generic [ref=e174]:
                    - img "wuf" [ref=e176]
                    - generic [ref=e177]: EVENT
                  - generic [ref=e179]:
                    - generic [ref=e180]: Comic
                    - img "dot" [ref=e181]
                    - generic [ref=e182]: Romance
          - article [ref=e184]:
            - link "NEW SEASON⚡️Revenge is a dish best served to saints. wuf EVENT Comic dot Romance Fantasy" [ref=e185] [cursor=pointer]:
              - /url: /series/270311/info
              - generic [ref=e193]:
                - paragraph [ref=e196]: NEW SEASON⚡️Revenge is a dish best served to saints.
                - generic [ref=e197]:
                  - generic [ref=e199]:
                    - img "wuf" [ref=e201]
                    - generic [ref=e202]: EVENT
                  - generic [ref=e204]:
                    - generic [ref=e205]: Comic
                    - img "dot" [ref=e206]
                    - generic [ref=e207]: Romance Fantasy
          - article [ref=e209]:
            - link "Fall for these iconic leads and score Bonus Ink for your binge! EVENT" [ref=e210] [cursor=pointer]:
              - /url: /event/D6iMXz
              - generic [ref=e218]:
                - paragraph [ref=e221]: Fall for these iconic leads and score Bonus Ink for your binge!
                - generic [ref=e225]: EVENT
          - article [ref=e227]:
            - link "30% OFF for a limited time only🔥 EVENT" [ref=e228] [cursor=pointer]:
              - /url: /landing-list/777
              - generic [ref=e236]:
                - paragraph [ref=e239]: 30% OFF for a limited time only🔥
                - generic [ref=e243]: EVENT
          - article [ref=e245]:
            - link "A spoiled girl's desperate attempt to escape Mr. Guillotine. wuf 3hr NEW Novel dot Romance Fantasy" [ref=e246] [cursor=pointer]:
              - /url: /series/322390
              - generic [ref=e254]:
                - paragraph [ref=e257]: A spoiled girl's desperate attempt to escape Mr. Guillotine.
                - generic [ref=e258]:
                  - generic [ref=e260]:
                    - generic [ref=e261]:
                      - img "wuf" [ref=e262]
                      - generic [ref=e263]: 3hr
                    - generic [ref=e264]: NEW
                  - generic [ref=e266]:
                    - generic [ref=e267]: Novel
                    - img "dot" [ref=e268]
                    - generic [ref=e269]: Romance Fantasy
          - article [ref=e271]:
            - link "A former king is reborn into a new world as a baby! wuf 3hr Comic dot Action Fantasy" [ref=e272] [cursor=pointer]:
              - /url: /series/111423
              - generic [ref=e280]:
                - paragraph [ref=e283]: A former king is reborn into a new world as a baby!
                - generic [ref=e284]:
                  - generic [ref=e287]:
                    - img "wuf" [ref=e288]
                    - generic [ref=e289]: 3hr
                  - generic [ref=e291]:
                    - generic [ref=e292]: Comic
                    - img "dot" [ref=e293]
                    - generic [ref=e294]: Action Fantasy
          - article [ref=e296]:
            - link "I know my classmate is a virtuoso, but is he really THE virtuoso? wuf UP Comic dot Drama" [ref=e297] [cursor=pointer]:
              - /url: /series/325850
              - generic [ref=e305]:
                - paragraph [ref=e308]: I know my classmate is a virtuoso, but is he really THE virtuoso?
                - generic [ref=e309]:
                  - generic [ref=e311]:
                    - img "wuf" [ref=e313]
                    - generic [ref=e314]: UP
                  - generic [ref=e316]:
                    - generic [ref=e317]: Comic
                    - img "dot" [ref=e318]
                    - generic [ref=e319]: Drama
          - article [ref=e321]:
            - link "From rags to riches... except I don't want these riches! wuf UP Comic dot Romance Fantasy" [ref=e322] [cursor=pointer]:
              - /url: /series/323468
              - generic [ref=e330]:
                - paragraph [ref=e333]: From rags to riches... except I don't want these riches!
                - generic [ref=e334]:
                  - generic [ref=e336]:
                    - img "wuf" [ref=e338]
                    - generic [ref=e339]: UP
                  - generic [ref=e341]:
                    - generic [ref=e342]: Comic
                    - img "dot" [ref=e343]
                    - generic [ref=e344]: Romance Fantasy
          - article [ref=e346]:
            - link "Can Ianna become the salvation of this cursed male lead? wuf UP Comic dot Romance Fantasy" [ref=e347] [cursor=pointer]:
              - /url: /series/276384
              - generic [ref=e355]:
                - paragraph [ref=e358]: Can Ianna become the salvation of this cursed male lead?
                - generic [ref=e359]:
                  - generic [ref=e361]:
                    - img "wuf" [ref=e363]
                    - generic [ref=e364]: UP
                  - generic [ref=e366]:
                    - generic [ref=e367]: Comic
                    - img "dot" [ref=e368]
                    - generic [ref=e369]: Romance Fantasy
          - article [ref=e371]:
            - link "Crown Prince who? Yvonne waltzes into a blind date with the empire's heartthrob! wuf Comic dot Romance Fantasy" [ref=e372] [cursor=pointer]:
              - /url: /series/273532
              - generic [ref=e380]:
                - paragraph [ref=e383]: Crown Prince who? Yvonne waltzes into a blind date with the empire's heartthrob!
                - generic [ref=e384]:
                  - img "wuf" [ref=e388]
                  - generic [ref=e390]:
                    - generic [ref=e391]: Comic
                    - img "dot" [ref=e392]
                    - generic [ref=e393]: Romance Fantasy
          - article [ref=e395]:
            - link "What's worse than being reborn as a baby? Being reborn as the enemy's baby! wuf Comic dot Romance Fantasy" [ref=e396] [cursor=pointer]:
              - /url: /series/268602
              - generic [ref=e404]:
                - paragraph [ref=e407]: What's worse than being reborn as a baby? Being reborn as the enemy's baby!
                - generic [ref=e408]:
                  - img "wuf" [ref=e412]
                  - generic [ref=e414]:
                    - generic [ref=e415]: Comic
                    - img "dot" [ref=e416]
                    - generic [ref=e417]: Romance Fantasy
          - article [ref=e419]:
            - link "She’s one wererabbit… against a world of black leopards, tigers, and assassins! wuf Comic dot Romance Fantasy" [ref=e420] [cursor=pointer]:
              - /url: /series/217241
              - generic [ref=e428]:
                - paragraph [ref=e431]: She’s one wererabbit… against a world of black leopards, tigers, and assassins!
                - generic [ref=e432]:
                  - img "wuf" [ref=e436]
                  - generic [ref=e438]:
                    - generic [ref=e439]: Comic
                    - img "dot" [ref=e440]
                    - generic [ref=e441]: Romance Fantasy
          - article [ref=e443]:
            - link "Stay ahead & catch the next big hit early!" [ref=e444] [cursor=pointer]:
              - /url: /static-landing/new?category=COMIC
              - paragraph [ref=e455]: Stay ahead & catch the next big hit early!
        - generic [ref=e456]:
          - img "prev" [ref=e457] [cursor=pointer]
          - generic [ref=e458]: "1"
          - img "slash" [ref=e459]
          - generic [ref=e460]: "15"
          - img "next" [ref=e461] [cursor=pointer]
      - generic [ref=e465]:
        - article [ref=e466]:
          - link "EVENT" [ref=e467] [cursor=pointer]:
            - /url: /events
            - generic [ref=e477]: EVENT
        - article [ref=e480]:
          - link [ref=e481] [cursor=pointer]:
            - /url: /menu/3
        - article [ref=e491]:
          - link "wuf EVENT" [ref=e492] [cursor=pointer]:
            - /url: /event/11dUmR
            - generic [ref=e501]:
              - img "wuf" [ref=e503]
              - generic [ref=e504]: EVENT
        - article [ref=e507]:
          - link "wuf EVENT" [ref=e508] [cursor=pointer]:
            - /url: /series/328982/info
            - generic [ref=e517]:
              - img "wuf" [ref=e519]
              - generic [ref=e520]: EVENT
        - article [ref=e523]:
          - link "wuf EVENT" [ref=e524] [cursor=pointer]:
            - /url: /series/328983/info
            - generic [ref=e533]:
              - img "wuf" [ref=e535]
              - generic [ref=e536]: EVENT
        - article [ref=e539]:
          - link "wuf EVENT" [ref=e540] [cursor=pointer]:
            - /url: /series/270311/info
            - generic [ref=e549]:
              - img "wuf" [ref=e551]
              - generic [ref=e552]: EVENT
        - article [ref=e555]:
          - link "wuf EVENT" [ref=e556] [cursor=pointer]:
            - /url: /series/279050/info
            - generic [ref=e565]:
              - img "wuf" [ref=e567]
              - generic [ref=e568]: EVENT
        - article [ref=e571]:
          - link "EVENT 06/05–06/09" [ref=e572] [cursor=pointer]:
            - /url: /event/D6iMXz
            - generic [ref=e573]:
              - generic [ref=e582]: EVENT
              - generic [ref=e587]: 06/05–06/09
      - generic [ref=e590]:
        - article [ref=e591]:
          - link "NEW to TAPAS? Tips for Newcomers" [ref=e592] [cursor=pointer]:
            - /url: /event/GGShZR
            - generic [ref=e595]:
              - heading "NEW to TAPAS?" [level=3] [ref=e596]
              - paragraph [ref=e597]: Tips for Newcomers
        - article [ref=e600]:
          - generic [ref=e602]:
            - generic [ref=e603]:
              - heading "Go to Tapas App" [level=3] [ref=e604]
              - paragraph [ref=e605]: Get notified and free gifts
            - generic [ref=e606]:
              - link "App Store" [ref=e607] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/tapastic/id578836126?mt=8
                - img "App Store" [ref=e608]
              - link "Google Play" [ref=e609] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.tapastic&referrer=utm_source%3Dm-tapastic%26utm_medium%3Dlink%26utm_content%3Dget-the-app%26utm_campaign%3Dmobile-navigation
                - img "Google Play" [ref=e610]
      - generic [ref=e611]:
        - heading "Continue Reading" [level=2] [ref=e615]
        - generic [ref=e618]:
          - article [ref=e619]:
            - link "wuf UP" [ref=e620] [cursor=pointer]:
              - /url: /series/294158
              - generic "I Was the Real Head of the House" [ref=e621]:
                - generic [ref=e629]:
                  - img "wuf" [ref=e631]
                  - generic [ref=e632]: UP
          - article [ref=e635]:
            - link "UP M" [ref=e636] [cursor=pointer]:
              - /url: /series/305097
              - generic "I Met the Male Lead in Prison (Mature)" [ref=e637]:
                - generic [ref=e643]:
                  - generic [ref=e646]: UP
                  - img "M" [ref=e648]
          - article [ref=e651]:
            - link "UP M" [ref=e652] [cursor=pointer]:
              - /url: /series/323469
              - generic "Lily Busch's Fake Marriage (Mature)" [ref=e653]:
                - generic [ref=e659]:
                  - generic [ref=e662]: UP
                  - img "M" [ref=e664]
          - article [ref=e667]:
            - link "wuf 3hr UP Dungeon Predator" [ref=e668] [cursor=pointer]:
              - /url: /series/278312
              - generic "Dungeon Predator" [ref=e669]:
                - generic [ref=e673]:
                  - generic [ref=e687]:
                    - generic [ref=e688]:
                      - img "wuf" [ref=e689]
                      - generic [ref=e690]: 3hr
                    - generic [ref=e691]: UP
                  - paragraph [ref=e693]: Dungeon Predator
          - article [ref=e694]:
            - link "wuf 3hr UP The Wrong Twin" [ref=e695] [cursor=pointer]:
              - /url: /series/289369
              - generic "The Wrong Twin" [ref=e696]:
                - generic [ref=e700]:
                  - generic [ref=e714]:
                    - generic [ref=e715]:
                      - img "wuf" [ref=e716]
                      - generic [ref=e717]: 3hr
                    - generic [ref=e718]: UP
                  - paragraph [ref=e720]: The Wrong Twin
          - article [ref=e721]:
            - link "FREE Princess Overlord" [ref=e722] [cursor=pointer]:
              - /url: /series/310597
              - generic "Princess Overlord" [ref=e723]:
                - generic [ref=e732]: FREE
                - paragraph [ref=e734]: Princess Overlord
          - article [ref=e735]:
            - link "30% OFF" [ref=e736] [cursor=pointer]:
              - /url: /series/270311
              - generic "The Archduke's Adopted Saint" [ref=e737]:
                - generic [ref=e746]: 30% OFF
          - article [ref=e749]:
            - link "wuf 3hr Soul Forged" [ref=e750] [cursor=pointer]:
              - /url: /series/311919
              - generic "Soul Forged" [ref=e751]:
                - generic [ref=e755]:
                  - generic [ref=e770]:
                    - img "wuf" [ref=e771]
                    - generic [ref=e772]: 3hr
                  - paragraph [ref=e774]: Soul Forged
      - generic [ref=e777]:
        - generic [ref=e778]:
          - heading "🦋Iconic Heroines Club🦋" [level=2] [ref=e779]
          - paragraph [ref=e780]: Meet the ladies you’ll adore.
        - link "right arrow" [ref=e781] [cursor=pointer]:
          - /url: /landing-list/784
          - img "right arrow" [ref=e783]
      - generic [ref=e813]:
        - generic [ref=e814]:
          - heading "📌On Sale! 🎉🎉🎉" [level=2] [ref=e815]
          - paragraph [ref=e816]: Better act fast; these deals won't last!
        - link "right arrow" [ref=e817] [cursor=pointer]:
          - /url: /landing-list/2
          - img "right arrow" [ref=e819]
      - generic [ref=e849]:
        - heading "New Comics" [level=2] [ref=e851]
        - link "right arrow" [ref=e852] [cursor=pointer]:
          - /url: /landing-list/1
          - img "right arrow" [ref=e854]
      - generic [ref=e884]:
        - heading "Season Returns" [level=2] [ref=e886]
        - link "right arrow" [ref=e887] [cursor=pointer]:
          - /url: /landing-list/13
          - img "right arrow" [ref=e889]
      - generic [ref=e919]:
        - heading "Trending Now🌟" [level=2] [ref=e921]
        - link "right arrow" [ref=e922] [cursor=pointer]:
          - /url: /landing-list/592
          - img "right arrow" [ref=e924]
      - generic [ref=e954]:
        - generic [ref=e955]:
          - 'heading "5-Star Cravings: Foodie Picks🍔" [level=2] [ref=e956]'
          - paragraph [ref=e957]: Stories that’ll make you drool
        - link "right arrow" [ref=e958] [cursor=pointer]:
          - /url: /landing-list/785
          - img "right arrow" [ref=e960]
      - generic [ref=e990]:
        - generic [ref=e991]:
          - heading "Bound by Touch, Tied by Love❤️" [level=2] [ref=e992]
          - paragraph [ref=e993]: One fated connection, forever to go🔥
        - link "right arrow" [ref=e994] [cursor=pointer]:
          - /url: /landing-list/779
          - img "right arrow" [ref=e996]
      - generic [ref=e1026]:
        - generic [ref=e1027]:
          - heading "Trapped in Fate's Infinite Loop🔁" [level=2] [ref=e1028]
          - paragraph [ref=e1029]: How many lives until a happy ending?
        - link "right arrow" [ref=e1030] [cursor=pointer]:
          - /url: /landing-list/780
          - img "right arrow" [ref=e1032]
      - generic [ref=e1062]:
        - heading "Handpicked For You🧸" [level=2] [ref=e1064]
        - link "right arrow" [ref=e1065] [cursor=pointer]:
          - /url: /landing-list/712
          - img "right arrow" [ref=e1067]
      - generic [ref=e1097]:
        - generic [ref=e1098]:
          - heading "Top Action Fantasy Picks💥" [level=2] [ref=e1099]
          - paragraph [ref=e1100]: Legendary picks only—read these top 100!
        - link "right arrow" [ref=e1101] [cursor=pointer]:
          - /url: /landing-list/260
          - img "right arrow" [ref=e1103]
      - generic [ref=e1133]:
        - heading "⏰FREE Every 3 Hours!" [level=2] [ref=e1135]
        - link "right arrow" [ref=e1136] [cursor=pointer]:
          - /url: /landing-list/651
          - img "right arrow" [ref=e1138]
      - generic [ref=e1168]:
        - heading "Community Staff Picks" [level=2] [ref=e1170]
        - link "right arrow" [ref=e1171] [cursor=pointer]:
          - /url: /landing-list/88
          - img "right arrow" [ref=e1173]
      - generic [ref=e1203]:
        - heading "Community New and Noteworthy" [level=2] [ref=e1205]
        - link "right arrow" [ref=e1206] [cursor=pointer]:
          - /url: /landing-list/111
          - img "right arrow" [ref=e1208]
      - generic [ref=e1238]:
        - generic [ref=e1239]:
          - heading "Mature Versions Available🔥" [level=2] [ref=e1240]
          - paragraph [ref=e1241]: The spicier cuts? Only on our website!
        - link "right arrow" [ref=e1242] [cursor=pointer]:
          - /url: /landing-list/443
          - img "right arrow" [ref=e1244]
      - generic [ref=e1274]:
        - heading "Tapas Originals" [level=2] [ref=e1276]
        - link "right arrow" [ref=e1277] [cursor=pointer]:
          - /url: /landing-list/4
          - img "right arrow" [ref=e1279]
      - generic [ref=e1309]:
        - heading "New Novels" [level=2] [ref=e1311]
        - link "right arrow" [ref=e1312] [cursor=pointer]:
          - /url: /landing-list/6
          - img "right arrow" [ref=e1314]
      - generic [ref=e1344]:
        - heading "Early Access" [level=2] [ref=e1346]
        - link "right arrow" [ref=e1347] [cursor=pointer]:
          - /url: /landing-list/75
          - img "right arrow" [ref=e1349]
      - generic [ref=e1379]:
        - heading "Léelo en español" [level=2] [ref=e1381]
        - link "right arrow" [ref=e1382] [cursor=pointer]:
          - /url: /landing-list/17
          - img "right arrow" [ref=e1384]
      - article [ref=e1415]:
        - generic [ref=e1418]:
          - img "App Install" [ref=e1419]
          - generic [ref=e1420]:
            - paragraph [ref=e1421]: Free Ink, gifts, and more. Get the app today!
            - generic [ref=e1422]:
              - link "iOS App Link" [ref=e1423] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/tapastic/id578836126?mt=8
                - img "iOS App Link" [ref=e1424]
              - link "AOS App Link" [ref=e1425] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.tapastic&referrer=utm_source%3Dm-tapastic%26utm_medium%3Dlink%26utm_content%3Dget-the-app%26utm_campaign%3Dmobile-navigation
                - img "AOS App Link" [ref=e1426]
    - contentinfo [ref=e1428]:
      - link "tapas Stories you crave" [ref=e1430] [cursor=pointer]:
        - /url: /
        - img "tapas Stories you crave" [ref=e1431]
      - generic [ref=e1432]:
        - link "instagram" [ref=e1433] [cursor=pointer]:
          - /url: https://instagram.com/tapas_app
          - img "instagram" [ref=e1434]
        - link "twitter" [ref=e1435] [cursor=pointer]:
          - /url: https://twitter.com/tapas_app
          - img "twitter" [ref=e1436]
        - link "youtube" [ref=e1437] [cursor=pointer]:
          - /url: https://www.youtube.com/tapasmedia
          - img "youtube" [ref=e1438]
        - link "facebook" [ref=e1439] [cursor=pointer]:
          - /url: https://www.facebook.com/tapas.io
          - img "facebook" [ref=e1440]
        - link "tiktok" [ref=e1441] [cursor=pointer]:
          - /url: https://www.tiktok.com/@tapasmedia
          - img "tiktok" [ref=e1442]
      - generic [ref=e1443]:
        - link "Help" [ref=e1444] [cursor=pointer]:
          - /url: https://help.tapas.io/hc/en-us
        - link "Discord" [ref=e1445] [cursor=pointer]:
          - /url: https://discord.com/invite/tapas
        - link "Forums" [ref=e1446] [cursor=pointer]:
          - /url: https://forums.tapas.io
        - link "Newsfeed" [ref=e1447] [cursor=pointer]:
          - /url: /newsfeed
        - link "Contact" [ref=e1448] [cursor=pointer]:
          - /url: mailto:feedback@tapas.io
        - link "Publish" [ref=e1449] [cursor=pointer]:
          - /url: https://www.creators.tapas.io
      - generic [ref=e1450]:
        - paragraph [ref=e1451]: ⓒ 2024 Tapas Entertainment.
        - generic [ref=e1452]:
          - link "Terms" [ref=e1453] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005545248
          - generic [ref=e1454]: ・
          - link "Privacy" [ref=e1455] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005377787
          - generic [ref=e1456]: ・
          - link "Content" [ref=e1457] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005323707
        - link "Do Not Sell or Share My Personal Information" [ref=e1458] [cursor=pointer]:
          - /url: /account/privacy-opt-out
  - alert [ref=e1459]
  - iframe [ref=e1460]:
    - button "Help" [ref=f3e4] [cursor=pointer]:
      - img [ref=f3e6]
      - generic [ref=f3e13]: Help
```

# Test source

```ts
  190 |   await goBackSafely(page);
  191 | });
  192 | 
  193 | When('뒤로가기', async ({ page }) => {
  194 |   await page.goBack();
  195 | });
  196 | 
  197 | // ──── 결과 검증 ────
  198 | 
  199 | Then('보관함으로 진입되며 아래 메뉴들이 노출된다.', async ({ page }) => {
  200 |   // PC: a.item-title tabs; Mobile: URL 도착 여부만 확인
  201 |   const updatedTab = page.locator('a.item-title[href*="UPDATED"]');
  202 |   if (await updatedTab.isVisible({ timeout: 3000 }).catch(() => false)) {
  203 |     await expect(updatedTab).toBeVisible();
  204 |     await expect(page.locator('a.item-title[href*="SUBSCRIBED"]')).toBeVisible();
  205 |   } else {
  206 |     await expect(page).toHaveURL(/reading-list|library/i);
  207 |   }
  208 | });
  209 | 
  210 | Then('Updated 메뉴가 노출된다.', async ({ page }) => {
  211 |   await expect(page.locator('a.item-title[href*="UPDATED"]')).toBeVisible({ timeout: 5000 });
  212 | });
  213 | 
  214 | Then('Recent 메뉴 진입된다.', async ({ page }) => {
  215 |   await expect(page).toHaveURL(/reading-list|library/i);
  216 | });
  217 | 
  218 | Then('Subscribed 진입된다.', async ({ page }) => {
  219 |   await expect(page.locator('a.item-title[href*="SUBSCRIBED"]')).toBeVisible({ timeout: 5000 });
  220 | });
  221 | 
  222 | Then('Free episodes 메뉴 진입된다.', async ({ page }) => {
  223 |   await expect(page.locator('a.item-title[href*="FREE_EPISODES"]')).toBeVisible({ timeout: 5000 });
  224 | });
  225 | 
  226 | Then('Free episodes 작품 목록이 노출된다.', async ({ page }) => {
  227 |   await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
  228 | });
  229 | 
  230 | Then('Wait until Free 탭으로 진입된다.', async ({ page }) => {
  231 |   await expect(page.locator('a.item-title[href*="WAIT_UNTIL_FREE"]')).toBeVisible({ timeout: 5000 });
  232 | });
  233 | 
  234 | Then('Gift Pass가 있는 작품이 노출된다.', async ({ page }) => {
  235 |   const item = page.locator('.inbox-gift-item');
  236 |   if ((await item.count()) === 0) { test.skip(true, 'Gift 아이템 미노출 — Gift Pass 없는 계정'); return; }
  237 |   await expect(item.first()).toBeVisible({ timeout: 5000 });
  238 | });
  239 | 
  240 | Then('Gift 수령되어 버튼 비활성화로 변경된다.', async ({ page }) => {
  241 |   await expect(page.locator('.inbox-gift-item').first()).toBeVisible({ timeout: 5000 });
  242 | });
  243 | 
  244 | Then(/^Free episodes 화면.+$/, async ({ page }) => {
  245 |   await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
  246 | });
  247 | 
  248 | Then(/^(Subscribed|Updated|Wait until Free|Recent) 화면.+$/, async ({ page }) => {
  249 |   const filterWrap = page.locator('.filter-wrap');
  250 |   if ((await filterWrap.count()) > 0) { await expect(filterWrap.first()).toBeVisible({ timeout: 5000 }); return; }
  251 |   await expect(page.locator('body')).toBeVisible();
  252 | });
  253 | 
  254 | Then(/^(Comics|Novels|모든) 작품.+노출된다\.$/, async ({ page }) => {
  255 |   await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
  256 | });
  257 | 
  258 | // (Comic|Novel) 작품.+노출된다. — 홈-카테고리.steps.ts의 /^(Comic|Novel|Mature|...) 작품.* 노출된다\.$/ 에서 처리
  259 | // Comics/Novels 작품리스트만 노출된다. — /^(Comics|Novels|모든) 작품.+노출된다\.$/ 에서 처리
  260 | 
  261 | Then('회차 뷰어로 진입된다.', async ({ page }) => {
  262 |   const likeBtn = page.locator('a.toolbar-btn.js-episode-like-btn, .toolbar-btn[class*="like"], .viewer-toolbar a[class*="like"]');
  263 |   if ((await likeBtn.count()) === 0) { test.skip(true, '뷰어 진입 확인 버튼 없음'); return; }
  264 |   await expect(likeBtn.first()).toBeVisible({ timeout: 5000 });
  265 | });
  266 | 
  267 | Then('작품뷰어회차로 진입된다.', async ({ page }) => {
  268 |   const likeBtn = page.locator('a.toolbar-btn.js-episode-like-btn, .toolbar-btn[class*="like"], .viewer-toolbar a[class*="like"]');
  269 |   if ((await likeBtn.count()) === 0) { test.skip(true, '뷰어 진입 확인 버튼 없음'); return; }
  270 |   await expect(likeBtn.first()).toBeVisible({ timeout: 5000 });
  271 | });
  272 | 
  273 | Then('뷰어 회차로 진입된다.', async ({ page }) => {
  274 |   const likeBtn = page.locator('a.toolbar-btn.js-episode-like-btn, .toolbar-btn[class*="like"], .viewer-toolbar a[class*="like"]');
  275 |   if ((await likeBtn.count()) === 0) { test.skip(true, '뷰어 진입 확인 버튼 없음'); return; }
  276 |   await expect(likeBtn.first()).toBeVisible({ timeout: 5000 });
  277 | });
  278 | 
  279 | Then('회차뷰어 진입된다.', async ({ page }) => {
  280 |   const likeBtn = page.locator('a.toolbar-btn.js-episode-like-btn, .toolbar-btn[class*="like"], .viewer-toolbar a[class*="like"]');
  281 |   if ((await likeBtn.count()) === 0) { test.skip(true, '뷰어 진입 확인 버튼 없음'); return; }
  282 |   await expect(likeBtn.first()).toBeVisible({ timeout: 5000 });
  283 | });
  284 | 
  285 | Then('해당 작품홈으로 이동된다.', async ({ page }) => {
  286 |   await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
  287 | });
  288 | 
  289 | Then('작품홈 으로 진입 된다.', async ({ page }) => {
> 290 |   await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
      |                                                        ^ Error: expect(locator).toBeVisible() failed
  291 | });
  292 | 
  293 | Then(/^(Comic|Novel) 작품홈으로 진입된다\.$/, async ({ page }) => {
  294 |   await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
  295 | });
  296 | 
  297 | Then(/^(Comic|Novel) 작품홈 구독 버튼이 활성화되어 노출된다\.$/, async ({ page }) => {
  298 |   await expect(page.locator('a.js-subscribe-btn').first()).toBeVisible({ timeout: 5000 });
  299 | });
  300 | 
  301 | Then(/^(뷰어로 이동된다\.|설정된 랜딩페이지로).+$/, async ({ page }) => {
  302 |   await expect(page.locator('a.toolbar-btn.js-episode-like-btn, a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
  303 | });
  304 | 
  305 | Then(/^\[Get\]버튼 > \[Read\]로 변경된다\.$/, async ({ page }) => {
  306 |   const readBtn = page.locator('.inbox-gift-item__btn-read, button.js-inbox-gift-read').first();
  307 |   const isRead = await readBtn.isVisible().catch(() => false);
  308 |   if (isRead) { await expect(readBtn).toBeVisible(); return; }
  309 |   await expect(page.locator('.inbox-gift-item').filter({ has: page.getByRole('button', { name: /^read$/i }) }).first()).toBeVisible({ timeout: 5000 });
  310 | });
  311 | 
  312 | Then(/^\[Read\]로 노출된 작품 목록이 제거된다\.$/, async ({ page }) => {
  313 |   const isEmpty = await page.locator('.page-empty').isVisible().catch(() => false);
  314 |   if (isEmpty) { await expect(page.locator('.page-empty')).toBeVisible(); return; }
  315 |   await expect(page.locator('button.js-inbox-gift-get')).toHaveCount(0);
  316 | });
  317 | 
  318 | Then(/^(아래 작품|작품 이미지).+노출된다\.$/, async ({ page }) => {
  319 |   await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
  320 | });
  321 | 
  322 | Then(/^(Recent|Updated|Subscribed 화면|Wait until Free 화면|Free episodes 화면)(로| 로) 복귀(된다|한다)\.$/, async ({ page }) => {
  323 |   const filterWrap = page.locator('.filter-wrap');
  324 |   if ((await filterWrap.count()) > 0) { await expect(filterWrap.first()).toBeVisible({ timeout: 5000 }); return; }
  325 |   await expect(page.locator('body')).toBeVisible();
  326 | });
  327 | 
```