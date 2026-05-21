# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/15-Profile/로그아웃.feature.spec.js >> 로그아웃 >> [TPS-210] Profile 클릭 + Log out 클릭
- Location: .features-gen/features/15-Profile/로그아웃.feature.spec.js:6:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.click: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('button:has(img[alt="profile image"])').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - generic [ref=e51]:
            - link "Login" [ref=e52] [cursor=pointer]:
              - /url: /account/signin?from=/
              - button "Login" [ref=e53]
            - link "Publish" [ref=e54] [cursor=pointer]:
              - /url: https://www.creators.tapas.io
              - button "Publish" [ref=e55]
        - generic [ref=e61]:
          - link "Spotlight" [ref=e62] [cursor=pointer]:
            - /url: /menu/1/subtab/1
            - img "Spotlight" [ref=e65]
          - link "Daily" [ref=e67] [cursor=pointer]:
            - /url: /menu/1/subtab/29
            - img "Daily" [ref=e70]
          - link "New" [ref=e72] [cursor=pointer]:
            - /url: /menu/1/subtab/4
            - img "New" [ref=e75]
          - link "Popular" [ref=e77] [cursor=pointer]:
            - /url: /menu/1/subtab/3
            - img "Popular" [ref=e80]
          - link "Completed" [ref=e82] [cursor=pointer]:
            - /url: /menu/1/subtab/6
            - img "Completed" [ref=e85]
          - link "Free Access" [ref=e87] [cursor=pointer]:
            - /url: /menu/1/subtab/40
            - img "Free Access" [ref=e90]
          - link "WUF" [ref=e92] [cursor=pointer]:
            - /url: /menu/1/subtab/5
            - img "WUF" [ref=e95]
    - main [ref=e99]:
      - generic [ref=e103]:
        - generic [ref=e105]:
          - article [ref=e107]:
            - link "NEW✨ Dying is free... living costs Heaven Coins. wuf EVENT Comic dot Romance Fantasy" [ref=e108] [cursor=pointer]:
              - /url: /series/326877/info
              - generic [ref=e116]:
                - paragraph [ref=e119]: NEW✨ Dying is free... living costs Heaven Coins.
                - generic [ref=e120]:
                  - generic [ref=e122]:
                    - img "wuf" [ref=e124]
                    - generic [ref=e125]: EVENT
                  - generic [ref=e127]:
                    - generic [ref=e128]: Comic
                    - img "dot" [ref=e129]
                    - generic [ref=e130]: Romance Fantasy
          - article [ref=e132]:
            - link "NEW SEASON⚡️Horror games are good and all... until you find yourself waking ... wuf EVENT Comic dot Romance Fantasy" [ref=e133] [cursor=pointer]:
              - /url: /series/271617/info
              - generic [ref=e141]:
                - paragraph [ref=e144]: NEW SEASON⚡️Horror games are good and all... until you find yourself waking ...
                - generic [ref=e145]:
                  - generic [ref=e147]:
                    - img "wuf" [ref=e149]
                    - generic [ref=e150]: EVENT
                  - generic [ref=e152]:
                    - generic [ref=e153]: Comic
                    - img "dot" [ref=e154]
                    - generic [ref=e155]: Romance Fantasy
          - article [ref=e157]:
            - link "⚠️SYSTEM⚠️ Price -30%, Fun +100%. Power up your reads with special deals. EVENT" [ref=e158] [cursor=pointer]:
              - /url: /event/QcF6Dm
              - generic [ref=e166]:
                - paragraph [ref=e169]: ⚠️SYSTEM⚠️ Price -30%, Fun +100%. Power up your reads with special deals.
                - generic [ref=e173]: EVENT
          - article [ref=e175]:
            - link "Get Ink today!💰 wuf EVENT Comic dot Romance Fantasy" [ref=e176] [cursor=pointer]:
              - /url: /series/319697/info
              - generic [ref=e184]:
                - paragraph [ref=e187]: Get Ink today!💰
                - generic [ref=e188]:
                  - generic [ref=e190]:
                    - img "wuf" [ref=e192]
                    - generic [ref=e193]: EVENT
                  - generic [ref=e195]:
                    - generic [ref=e196]: Comic
                    - img "dot" [ref=e197]
                    - generic [ref=e198]: Romance Fantasy
          - article [ref=e200]:
            - link "Get hyped for the return! Catch up to unlock an extra FREE episode 💝 EVENT" [ref=e201] [cursor=pointer]:
              - /url: /series/264577/info
              - generic [ref=e209]:
                - paragraph [ref=e212]: Get hyped for the return! Catch up to unlock an extra FREE episode 💝
                - generic [ref=e216]: EVENT
          - article [ref=e218]:
            - link "NEW✨ Stories have power—be careful what you read. wuf EVENT Comic dot Drama" [ref=e219] [cursor=pointer]:
              - /url: /series/318237/info
              - generic [ref=e227]:
                - paragraph [ref=e230]: NEW✨ Stories have power—be careful what you read.
                - generic [ref=e231]:
                  - generic [ref=e233]:
                    - img "wuf" [ref=e235]
                    - generic [ref=e236]: EVENT
                  - generic [ref=e238]:
                    - generic [ref=e239]: Comic
                    - img "dot" [ref=e240]
                    - generic [ref=e241]: Drama
          - article [ref=e243]:
            - link "O Great Spirit, make Adrian the lead already! wuf NEW Comic dot Romance Fantasy" [ref=e244] [cursor=pointer]:
              - /url: /series/326865
              - generic [ref=e252]:
                - paragraph [ref=e255]: O Great Spirit, make Adrian the lead already!
                - generic [ref=e256]:
                  - generic [ref=e258]:
                    - img "wuf" [ref=e260]
                    - generic [ref=e261]: NEW
                  - generic [ref=e263]:
                    - generic [ref=e264]: Comic
                    - img "dot" [ref=e265]
                    - generic [ref=e266]: Romance Fantasy
          - article [ref=e268]:
            - link "A former king is reborn into a new world as a baby! wuf 3hr Comic dot Action Fantasy" [ref=e269] [cursor=pointer]:
              - /url: /series/111423
              - generic [ref=e277]:
                - paragraph [ref=e280]: A former king is reborn into a new world as a baby!
                - generic [ref=e281]:
                  - generic [ref=e284]:
                    - img "wuf" [ref=e285]
                    - generic [ref=e286]: 3hr
                  - generic [ref=e288]:
                    - generic [ref=e289]: Comic
                    - img "dot" [ref=e290]
                    - generic [ref=e291]: Action Fantasy
          - article [ref=e293]:
            - link "My plan was to save the hero's life, not get attached to his family! wuf UP Comic dot Romance Fantasy" [ref=e294] [cursor=pointer]:
              - /url: /series/326810
              - generic [ref=e302]:
                - paragraph [ref=e305]: My plan was to save the hero's life, not get attached to his family!
                - generic [ref=e306]:
                  - generic [ref=e308]:
                    - img "wuf" [ref=e310]
                    - generic [ref=e311]: UP
                  - generic [ref=e313]:
                    - generic [ref=e314]: Comic
                    - img "dot" [ref=e315]
                    - generic [ref=e316]: Romance Fantasy
          - article [ref=e318]:
            - link "From powerful tiger lord to... babysitter?! wuf UP Comic dot Action" [ref=e319] [cursor=pointer]:
              - /url: /series/240537
              - generic [ref=e327]:
                - paragraph [ref=e330]: From powerful tiger lord to... babysitter?!
                - generic [ref=e331]:
                  - generic [ref=e333]:
                    - img "wuf" [ref=e335]
                    - generic [ref=e336]: UP
                  - generic [ref=e338]:
                    - generic [ref=e339]: Comic
                    - img "dot" [ref=e340]
                    - generic [ref=e341]: Action
          - article [ref=e343]:
            - link "Who would have thought a War God would be doing housework? wuf UP Comic dot Action" [ref=e344] [cursor=pointer]:
              - /url: /series/255117
              - generic [ref=e352]:
                - paragraph [ref=e355]: Who would have thought a War God would be doing housework?
                - generic [ref=e356]:
                  - generic [ref=e358]:
                    - img "wuf" [ref=e360]
                    - generic [ref=e361]: UP
                  - generic [ref=e363]:
                    - generic [ref=e364]: Comic
                    - img "dot" [ref=e365]
                    - generic [ref=e366]: Action
          - article [ref=e368]:
            - link "A second chance at life… little did I know that meant from birth! wuf Comic dot Romance Fantasy" [ref=e369] [cursor=pointer]:
              - /url: /series/222971
              - generic [ref=e377]:
                - paragraph [ref=e380]: A second chance at life… little did I know that meant from birth!
                - generic [ref=e381]:
                  - img "wuf" [ref=e385]
                  - generic [ref=e387]:
                    - generic [ref=e388]: Comic
                    - img "dot" [ref=e389]
                    - generic [ref=e390]: Romance Fantasy
          - article [ref=e392]:
            - link "I wanted to hide behind the hero, not become one! wuf Comic dot Action Fantasy" [ref=e393] [cursor=pointer]:
              - /url: /series/305024
              - generic [ref=e401]:
                - paragraph [ref=e404]: I wanted to hide behind the hero, not become one!
                - generic [ref=e405]:
                  - img "wuf" [ref=e409]
                  - generic [ref=e411]:
                    - generic [ref=e412]: Comic
                    - img "dot" [ref=e413]
                    - generic [ref=e414]: Action Fantasy
          - article [ref=e416]:
            - link "I don't need a prince to break my curse. wuf Comic dot Romance Fantasy" [ref=e417] [cursor=pointer]:
              - /url: /series/240516
              - generic [ref=e425]:
                - paragraph [ref=e428]: I don't need a prince to break my curse.
                - generic [ref=e429]:
                  - img "wuf" [ref=e433]
                  - generic [ref=e435]:
                    - generic [ref=e436]: Comic
                    - img "dot" [ref=e437]
                    - generic [ref=e438]: Romance Fantasy
          - article [ref=e440]:
            - link "Check out the fresh stories arriving this month!" [ref=e441] [cursor=pointer]:
              - /url: /static-landing/new?category=COMIC
              - paragraph [ref=e452]: Check out the fresh stories arriving this month!
        - generic [ref=e453]:
          - img "prev" [ref=e454] [cursor=pointer]
          - generic [ref=e455]: "14"
          - img "slash" [ref=e456]
          - generic [ref=e457]: "15"
          - img "next" [ref=e458] [cursor=pointer]
      - generic [ref=e462]:
        - article [ref=e463]:
          - link "EVENT" [ref=e464] [cursor=pointer]:
            - /url: /events
            - generic [ref=e474]: EVENT
        - article [ref=e477]:
          - link [ref=e478] [cursor=pointer]:
            - /url: /menu/3
        - article [ref=e488]:
          - link "wuf EVENT" [ref=e489] [cursor=pointer]:
            - /url: /series/326877/info
            - generic [ref=e498]:
              - img "wuf" [ref=e500]
              - generic [ref=e501]: EVENT
        - article [ref=e504]:
          - link "wuf EVENT" [ref=e505] [cursor=pointer]:
            - /url: /series/271617/info
            - generic [ref=e514]:
              - img "wuf" [ref=e516]
              - generic [ref=e517]: EVENT
        - article [ref=e520]:
          - link "EVENT 05/18–05/21" [ref=e521] [cursor=pointer]:
            - /url: /event/QcF6Dm
            - generic [ref=e522]:
              - generic [ref=e531]: EVENT
              - generic [ref=e536]: 05/18–05/21
        - article [ref=e537]:
          - link "wuf EVENT" [ref=e538] [cursor=pointer]:
            - /url: /series/319697/info
            - generic [ref=e547]:
              - img "wuf" [ref=e549]
              - generic [ref=e550]: EVENT
        - article [ref=e553]:
          - link "EVENT 05/19–05/21" [ref=e554] [cursor=pointer]:
            - /url: /series/264577/info
            - generic [ref=e555]:
              - generic [ref=e564]: EVENT
              - generic [ref=e569]: 05/19–05/21
        - article [ref=e570]:
          - link "wuf EVENT" [ref=e571] [cursor=pointer]:
            - /url: /series/318237/info
            - generic [ref=e580]:
              - img "wuf" [ref=e582]
              - generic [ref=e583]: EVENT
      - generic [ref=e588]:
        - article [ref=e589]:
          - link "NEW to TAPAS? Tips for Newcomers" [ref=e590] [cursor=pointer]:
            - /url: /event/GGShZR
            - generic [ref=e593]:
              - heading "NEW to TAPAS?" [level=3] [ref=e594]
              - paragraph [ref=e595]: Tips for Newcomers
        - article [ref=e598]:
          - generic [ref=e600]:
            - generic [ref=e601]:
              - heading "Go to Tapas App" [level=3] [ref=e602]
              - paragraph [ref=e603]: Get notified and free gifts
            - generic [ref=e604]:
              - link "App Store" [ref=e605] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/tapastic/id578836126?mt=8
                - img "App Store" [ref=e606]
              - link "Google Play" [ref=e607] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.tapastic&referrer=utm_source%3Dm-tapastic%26utm_medium%3Dlink%26utm_content%3Dget-the-app%26utm_campaign%3Dmobile-navigation
                - img "Google Play" [ref=e608]
      - generic [ref=e609]:
        - heading "Continue Reading" [level=2] [ref=e613]
        - generic [ref=e616]:
          - article [ref=e617]:
            - link "wuf 3hr UP Dungeon Predator" [ref=e618] [cursor=pointer]:
              - /url: /series/278312
              - generic "Dungeon Predator" [ref=e619]:
                - generic [ref=e623]:
                  - generic [ref=e637]:
                    - generic [ref=e638]:
                      - img "wuf" [ref=e639]
                      - generic [ref=e640]: 3hr
                    - generic [ref=e641]: UP
                  - paragraph [ref=e643]: Dungeon Predator
          - article [ref=e644]:
            - link "FREE UP Copper eyes" [ref=e645] [cursor=pointer]:
              - /url: /series/147835
              - generic "Copper eyes" [ref=e646]:
                - generic [ref=e654]:
                  - generic [ref=e655]: FREE
                  - generic [ref=e656]: UP
                - paragraph [ref=e658]: Copper eyes
          - article [ref=e659]:
            - link "wuf UP" [ref=e660] [cursor=pointer]:
              - /url: /series/294158
              - generic "I Was the Real Head of the House" [ref=e661]:
                - generic [ref=e669]:
                  - img "wuf" [ref=e671]
                  - generic [ref=e672]: UP
          - article [ref=e675]:
            - link "wuf 3hr NEW His Elite Omega" [ref=e676] [cursor=pointer]:
              - /url: /series/326699
              - generic "His Elite Omega" [ref=e677]:
                - generic [ref=e681]:
                  - generic [ref=e695]:
                    - generic [ref=e696]:
                      - img "wuf" [ref=e697]
                      - generic [ref=e698]: 3hr
                    - generic [ref=e699]: NEW
                  - paragraph [ref=e701]: His Elite Omega
          - article [ref=e702]:
            - link [ref=e703] [cursor=pointer]:
              - /url: /series/11334
              - generic "Castoff" [ref=e704]
          - article [ref=e713]:
            - link "Mermaid Huntress" [ref=e714] [cursor=pointer]:
              - /url: /series/133443
              - generic "Mermaid Huntress" [ref=e715]:
                - paragraph [ref=e723]: Mermaid Huntress
          - article [ref=e724]:
            - link "wuf" [ref=e725] [cursor=pointer]:
              - /url: /series/222698
              - generic "Villainesses Have More Fun" [ref=e726]:
                - img "wuf" [ref=e736]
          - article [ref=e739]:
            - link "FREE Princess Overlord" [ref=e740] [cursor=pointer]:
              - /url: /series/310597
              - generic "Princess Overlord" [ref=e741]:
                - generic [ref=e750]: FREE
                - paragraph [ref=e752]: Princess Overlord
      - generic [ref=e755]:
        - generic [ref=e756]:
          - heading "📌On Sale! 🎉🎉🎉" [level=2] [ref=e757]
          - paragraph [ref=e758]: Better act fast; these deals won't last!
        - link "right arrow" [ref=e759] [cursor=pointer]:
          - /url: /landing-list/2
          - img "right arrow" [ref=e761]
      - generic [ref=e791]:
        - heading "New Comics" [level=2] [ref=e793]
        - link "right arrow" [ref=e794] [cursor=pointer]:
          - /url: /landing-list/1
          - img "right arrow" [ref=e796]
      - generic [ref=e826]:
        - heading "Season Returns" [level=2] [ref=e828]
        - link "right arrow" [ref=e829] [cursor=pointer]:
          - /url: /landing-list/13
          - img "right arrow" [ref=e831]
      - generic [ref=e861]:
        - heading "Trending Now🌟" [level=2] [ref=e863]
        - link "right arrow" [ref=e864] [cursor=pointer]:
          - /url: /landing-list/592
          - img "right arrow" [ref=e866]
      - generic [ref=e896]:
        - generic [ref=e897]:
          - heading "Pure Sunshine FLs🌞" [level=2] [ref=e898]
          - paragraph [ref=e899]: Bright, warm, and impossible to ignore
        - link "right arrow" [ref=e900] [cursor=pointer]:
          - /url: /landing-list/760
          - img "right arrow" [ref=e902]
      - generic [ref=e932]:
        - generic [ref=e933]:
          - heading "Fake Vows, Real Feels🫱‍🫲" [level=2] [ref=e934]
          - paragraph [ref=e935]: Top-tier contract relationships
        - link "right arrow" [ref=e936] [cursor=pointer]:
          - /url: /landing-list/761
          - img "right arrow" [ref=e938]
      - generic [ref=e968]:
        - generic [ref=e969]:
          - heading "Power Women at Work💅🏻" [level=2] [ref=e970]
          - paragraph [ref=e971]: Meet brilliant women who run the game
        - link "right arrow" [ref=e972] [cursor=pointer]:
          - /url: /landing-list/762
          - img "right arrow" [ref=e974]
      - generic [ref=e1004]:
        - heading "Handpicked For You🧸" [level=2] [ref=e1006]
        - link "right arrow" [ref=e1007] [cursor=pointer]:
          - /url: /landing-list/712
          - img "right arrow" [ref=e1009]
      - generic [ref=e1039]:
        - generic [ref=e1040]:
          - heading "Top Action Fantasy Picks💥" [level=2] [ref=e1041]
          - paragraph [ref=e1042]: Legendary picks only—read these top 100!
        - link "right arrow" [ref=e1043] [cursor=pointer]:
          - /url: /landing-list/260
          - img "right arrow" [ref=e1045]
      - generic [ref=e1075]:
        - heading "⏰FREE Every 3 Hours!" [level=2] [ref=e1077]
        - link "right arrow" [ref=e1078] [cursor=pointer]:
          - /url: /landing-list/651
          - img "right arrow" [ref=e1080]
      - generic [ref=e1110]:
        - heading "Community Staff Picks" [level=2] [ref=e1112]
        - link "right arrow" [ref=e1113] [cursor=pointer]:
          - /url: /landing-list/92
          - img "right arrow" [ref=e1115]
      - generic [ref=e1145]:
        - heading "Community New and Noteworthy" [level=2] [ref=e1147]
        - link "right arrow" [ref=e1148] [cursor=pointer]:
          - /url: /landing-list/113
          - img "right arrow" [ref=e1150]
      - generic [ref=e1180]:
        - generic [ref=e1181]:
          - heading "Mature Versions Available🔥" [level=2] [ref=e1182]
          - paragraph [ref=e1183]: The spicier cuts? Only on our website!
        - link "right arrow" [ref=e1184] [cursor=pointer]:
          - /url: /landing-list/443
          - img "right arrow" [ref=e1186]
      - generic [ref=e1216]:
        - heading "Tapas Originals" [level=2] [ref=e1218]
        - link "right arrow" [ref=e1219] [cursor=pointer]:
          - /url: /landing-list/4
          - img "right arrow" [ref=e1221]
      - generic [ref=e1251]:
        - heading "New Novels" [level=2] [ref=e1253]
        - link "right arrow" [ref=e1254] [cursor=pointer]:
          - /url: /landing-list/6
          - img "right arrow" [ref=e1256]
      - generic [ref=e1286]:
        - heading "Early Access" [level=2] [ref=e1288]
        - link "right arrow" [ref=e1289] [cursor=pointer]:
          - /url: /landing-list/75
          - img "right arrow" [ref=e1291]
      - generic [ref=e1321]:
        - heading "Léelo en español" [level=2] [ref=e1323]
        - link "right arrow" [ref=e1324] [cursor=pointer]:
          - /url: /landing-list/17
          - img "right arrow" [ref=e1326]
      - article [ref=e1357]:
        - generic [ref=e1360]:
          - img "App Install" [ref=e1361]
          - generic [ref=e1362]:
            - paragraph [ref=e1363]: Free Ink, gifts, and more. Get the app today!
            - generic [ref=e1364]:
              - link "iOS App Link" [ref=e1365] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/tapastic/id578836126?mt=8
                - img "iOS App Link" [ref=e1366]
              - link "AOS App Link" [ref=e1367] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.tapastic&referrer=utm_source%3Dm-tapastic%26utm_medium%3Dlink%26utm_content%3Dget-the-app%26utm_campaign%3Dmobile-navigation
                - img "AOS App Link" [ref=e1368]
    - contentinfo [ref=e1370]:
      - link "tapas Stories you crave" [ref=e1372] [cursor=pointer]:
        - /url: /
        - img "tapas Stories you crave" [ref=e1373]
      - generic [ref=e1374]:
        - link "instagram" [ref=e1375] [cursor=pointer]:
          - /url: https://instagram.com/tapas_app
          - img "instagram" [ref=e1376]
        - link "twitter" [ref=e1377] [cursor=pointer]:
          - /url: https://twitter.com/tapas_app
          - img "twitter" [ref=e1378]
        - link "youtube" [ref=e1379] [cursor=pointer]:
          - /url: https://www.youtube.com/tapasmedia
          - img "youtube" [ref=e1380]
        - link "facebook" [ref=e1381] [cursor=pointer]:
          - /url: https://www.facebook.com/tapas.io
          - img "facebook" [ref=e1382]
        - link "tiktok" [ref=e1383] [cursor=pointer]:
          - /url: https://www.tiktok.com/@tapasmedia
          - img "tiktok" [ref=e1384]
      - generic [ref=e1385]:
        - link "Help" [ref=e1386] [cursor=pointer]:
          - /url: https://help.tapas.io/hc/en-us
        - link "Discord" [ref=e1387] [cursor=pointer]:
          - /url: https://discord.com/invite/tapas
        - link "Forums" [ref=e1388] [cursor=pointer]:
          - /url: https://forums.tapas.io
        - link "Newsfeed" [ref=e1389] [cursor=pointer]:
          - /url: /newsfeed
        - link "Contact" [ref=e1390] [cursor=pointer]:
          - /url: mailto:feedback@tapas.io
        - link "Publish" [ref=e1391] [cursor=pointer]:
          - /url: https://www.creators.tapas.io
      - generic [ref=e1392]:
        - paragraph [ref=e1393]: ⓒ 2024 Tapas Entertainment.
        - generic [ref=e1394]:
          - link "Terms" [ref=e1395] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005545248
          - generic [ref=e1396]: ・
          - link "Privacy" [ref=e1397] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005377787
          - generic [ref=e1398]: ・
          - link "Content" [ref=e1399] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005323707
        - link "Do Not Sell or Share My Personal Information" [ref=e1400] [cursor=pointer]:
          - /url: /account/privacy-opt-out
  - alert [ref=e1401]
  - iframe [ref=e1402]:
    - button "Help" [ref=f3e4] [cursor=pointer]:
      - img [ref=f3e6]
      - generic [ref=f3e13]: Help
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { URLS } from '../data/urls';
  3  | 
  4  | export class GnbPage {
  5  |   constructor(private page: Page) {}
  6  | 
  7  |   async goto() {
  8  |     await this.page.goto(URLS.home);
  9  |     await this.dismissCookieBanner();
  10 |   }
  11 | 
  12 |   async dismissCookieBanner() {
  13 |     const accept = this.page.getByRole('button', { name: /accept/i });
  14 |     if (await accept.isVisible().catch(() => false)) {
  15 |       await accept.click();
  16 |     }
  17 |   }
  18 | 
  19 |   async expectLoaded() {
  20 |     await expect(this.page).toHaveURL(/tapas\.io/);
  21 |     await expect(this.page.locator('body')).toBeVisible();
  22 |   }
  23 | 
  24 |   async openSearch() {
  25 |     await this.page.getByPlaceholder('Search').click();
  26 |   }
  27 | 
  28 |   async click(label: string) {
  29 |     switch (label) {
  30 |       case 'Login': {
  31 |         // GNB의 Login 링크/버튼만 클릭 (signin form의 submit 버튼 제외)
  32 |         const gnbLogin = this.page.getByRole('link', { name: /^log ?in$/i });
  33 |         if ((await gnbLogin.count()) > 0) { await gnbLogin.first().click(); return; }
  34 |         const loginBtn = this.page.getByRole('button', { name: /^log ?in$/i }).first();
  35 |         if ((await loginBtn.count()) > 0 && await loginBtn.isEnabled()) {
  36 |           await loginBtn.click();
  37 |         } else {
  38 |           await this.page.goto('/account/signin');
  39 |           await this.page.waitForLoadState('domcontentloaded');
  40 |         }
  41 |         return;
  42 |       }
  43 |       case 'Profile':
  44 |       case '프로필':
> 45 |         await this.page.locator('button:has(img[alt="profile image"])').first().click();
     |                                                                                 ^ Error: locator.click: Test timeout of 120000ms exceeded.
  46 |         return;
  47 |       case '라이브러리 메뉴':
  48 |       case '라이브러리': {
  49 |         const libLink = this.page.getByRole('link', { name: /library/i });
  50 |         if ((await libLink.count()) > 0) { await libLink.first().click(); } else { await this.page.goto('/reading-list/'); }
  51 |         return;
  52 |       }
  53 |       case 'Inbox': {
  54 |         const inboxLink = this.page.getByRole('link', { name: /inbox/i });
  55 |         if ((await inboxLink.count()) > 0) { await inboxLink.first().click(); } else { await this.page.goto('/inbox/activity'); }
  56 |         return;
  57 |       }
  58 |     }
  59 |     // 일반 링크 (Home, Comics, Novels, Community, Mature, More, Profile 등)
  60 |     const link = this.page.getByRole('link', { name: new RegExp(`^${label}$`, 'i') });
  61 |     if ((await link.count()) > 0) {
  62 |       await link.first().click();
  63 |       return;
  64 |     }
  65 |     // 버튼으로 재시도
  66 |     const fallbackBtn = this.page.getByRole('button', { name: new RegExp(label, 'i') });
  67 |     if ((await fallbackBtn.count()) > 0) { await fallbackBtn.first().click(); }
  68 |   }
  69 | 
  70 |   async expectNavItems() {
  71 |     for (const item of ['Home', 'Comics', 'Novels', 'Community', 'Mature', 'More']) {
  72 |       await expect(
  73 |         this.page.getByRole('link', { name: new RegExp(`^${item}$`, 'i') }).first()
  74 |       ).toBeVisible();
  75 |     }
  76 |   }
  77 | 
  78 |   async expectSearchVisible() {
  79 |     await expect(this.page.getByPlaceholder('Search')).toBeVisible();
  80 |   }
  81 | }
  82 | 
```