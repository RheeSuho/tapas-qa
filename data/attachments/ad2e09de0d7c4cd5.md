# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/12-보관함/Free-episodes.feature.spec.js >> Free episodes >> [TPS-172] PCW + 필터 > All 버튼 클릭
- Location: .features-gen/features/12-보관함/Free-episodes.feature.spec.js:19:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[href*="type=COMICS"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[href*="type=COMICS"]').first()

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
          - link "library" [ref=e51] [cursor=pointer]:
            - /url: /reading-list
            - img "library" [ref=e52]
          - link "inbox 121" [ref=e53] [cursor=pointer]:
            - /url: /inbox/gift
            - img "inbox" [ref=e54]
            - generic [ref=e55]: "121"
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
            - link "wuf 3hr UP Dungeon Predator" [ref=e636] [cursor=pointer]:
              - /url: /series/278312
              - generic "Dungeon Predator" [ref=e637]:
                - generic [ref=e641]:
                  - generic [ref=e655]:
                    - generic [ref=e656]:
                      - img "wuf" [ref=e657]
                      - generic [ref=e658]: 3hr
                    - generic [ref=e659]: UP
                  - paragraph [ref=e661]: Dungeon Predator
          - article [ref=e662]:
            - link "wuf 3hr UP The Wrong Twin" [ref=e663] [cursor=pointer]:
              - /url: /series/289369
              - generic "The Wrong Twin" [ref=e664]:
                - generic [ref=e668]:
                  - generic [ref=e682]:
                    - generic [ref=e683]:
                      - img "wuf" [ref=e684]
                      - generic [ref=e685]: 3hr
                    - generic [ref=e686]: UP
                  - paragraph [ref=e688]: The Wrong Twin
          - article [ref=e689]:
            - link "FREE Princess Overlord" [ref=e690] [cursor=pointer]:
              - /url: /series/310597
              - generic "Princess Overlord" [ref=e691]:
                - generic [ref=e700]: FREE
                - paragraph [ref=e702]: Princess Overlord
          - article [ref=e703]:
            - link "FREE Humor me" [ref=e704] [cursor=pointer]:
              - /url: /series/15281
              - generic "Humor me" [ref=e705]:
                - generic [ref=e714]: FREE
                - paragraph [ref=e716]: Humor me
          - article [ref=e717]:
            - link "30% OFF" [ref=e718] [cursor=pointer]:
              - /url: /series/270311
              - generic "The Archduke's Adopted Saint" [ref=e719]:
                - generic [ref=e728]: 30% OFF
          - article [ref=e731]:
            - link "wuf 3hr Soul Forged" [ref=e732] [cursor=pointer]:
              - /url: /series/311919
              - generic "Soul Forged" [ref=e733]:
                - generic [ref=e737]:
                  - generic [ref=e752]:
                    - img "wuf" [ref=e753]
                    - generic [ref=e754]: 3hr
                  - paragraph [ref=e756]: Soul Forged
          - article [ref=e757]:
            - link [ref=e758] [cursor=pointer]:
              - /url: /series/67447
              - generic "Idiots Don't Catch Colds" [ref=e759]
      - generic [ref=e770]:
        - generic [ref=e771]:
          - heading "🦋Iconic Heroines Club🦋" [level=2] [ref=e772]
          - paragraph [ref=e773]: Meet the ladies you’ll adore.
        - link "right arrow" [ref=e774] [cursor=pointer]:
          - /url: /landing-list/784
          - img "right arrow" [ref=e776]
      - generic [ref=e806]:
        - generic [ref=e807]:
          - heading "📌On Sale! 🎉🎉🎉" [level=2] [ref=e808]
          - paragraph [ref=e809]: Better act fast; these deals won't last!
        - link "right arrow" [ref=e810] [cursor=pointer]:
          - /url: /landing-list/2
          - img "right arrow" [ref=e812]
      - generic [ref=e842]:
        - heading "New Comics" [level=2] [ref=e844]
        - link "right arrow" [ref=e845] [cursor=pointer]:
          - /url: /landing-list/1
          - img "right arrow" [ref=e847]
      - generic [ref=e877]:
        - heading "Season Returns" [level=2] [ref=e879]
        - link "right arrow" [ref=e880] [cursor=pointer]:
          - /url: /landing-list/13
          - img "right arrow" [ref=e882]
      - generic [ref=e912]:
        - heading "Trending Now🌟" [level=2] [ref=e914]
        - link "right arrow" [ref=e915] [cursor=pointer]:
          - /url: /landing-list/592
          - img "right arrow" [ref=e917]
      - generic [ref=e947]:
        - generic [ref=e948]:
          - 'heading "5-Star Cravings: Foodie Picks🍔" [level=2] [ref=e949]'
          - paragraph [ref=e950]: Stories that’ll make you drool
        - link "right arrow" [ref=e951] [cursor=pointer]:
          - /url: /landing-list/785
          - img "right arrow" [ref=e953]
      - generic [ref=e983]:
        - generic [ref=e984]:
          - heading "Bound by Touch, Tied by Love❤️" [level=2] [ref=e985]
          - paragraph [ref=e986]: One fated connection, forever to go🔥
        - link "right arrow" [ref=e987] [cursor=pointer]:
          - /url: /landing-list/779
          - img "right arrow" [ref=e989]
      - generic [ref=e1019]:
        - generic [ref=e1020]:
          - heading "Trapped in Fate's Infinite Loop🔁" [level=2] [ref=e1021]
          - paragraph [ref=e1022]: How many lives until a happy ending?
        - link "right arrow" [ref=e1023] [cursor=pointer]:
          - /url: /landing-list/780
          - img "right arrow" [ref=e1025]
      - generic [ref=e1055]:
        - heading "Handpicked For You🧸" [level=2] [ref=e1057]
        - link "right arrow" [ref=e1058] [cursor=pointer]:
          - /url: /landing-list/712
          - img "right arrow" [ref=e1060]
      - generic [ref=e1090]:
        - generic [ref=e1091]:
          - heading "Top Action Fantasy Picks💥" [level=2] [ref=e1092]
          - paragraph [ref=e1093]: Legendary picks only—read these top 100!
        - link "right arrow" [ref=e1094] [cursor=pointer]:
          - /url: /landing-list/260
          - img "right arrow" [ref=e1096]
      - generic [ref=e1126]:
        - heading "⏰FREE Every 3 Hours!" [level=2] [ref=e1128]
        - link "right arrow" [ref=e1129] [cursor=pointer]:
          - /url: /landing-list/651
          - img "right arrow" [ref=e1131]
      - generic [ref=e1161]:
        - heading "Community Staff Picks" [level=2] [ref=e1163]
        - link "right arrow" [ref=e1164] [cursor=pointer]:
          - /url: /landing-list/88
          - img "right arrow" [ref=e1166]
      - generic [ref=e1196]:
        - heading "Community New and Noteworthy" [level=2] [ref=e1198]
        - link "right arrow" [ref=e1199] [cursor=pointer]:
          - /url: /landing-list/111
          - img "right arrow" [ref=e1201]
      - generic [ref=e1231]:
        - generic [ref=e1232]:
          - heading "Mature Versions Available🔥" [level=2] [ref=e1233]
          - paragraph [ref=e1234]: The spicier cuts? Only on our website!
        - link "right arrow" [ref=e1235] [cursor=pointer]:
          - /url: /landing-list/443
          - img "right arrow" [ref=e1237]
      - generic [ref=e1267]:
        - heading "Tapas Originals" [level=2] [ref=e1269]
        - link "right arrow" [ref=e1270] [cursor=pointer]:
          - /url: /landing-list/4
          - img "right arrow" [ref=e1272]
      - generic [ref=e1302]:
        - heading "New Novels" [level=2] [ref=e1304]
        - link "right arrow" [ref=e1305] [cursor=pointer]:
          - /url: /landing-list/6
          - img "right arrow" [ref=e1307]
      - generic [ref=e1337]:
        - heading "Early Access" [level=2] [ref=e1339]
        - link "right arrow" [ref=e1340] [cursor=pointer]:
          - /url: /landing-list/75
          - img "right arrow" [ref=e1342]
      - generic [ref=e1372]:
        - heading "Léelo en español" [level=2] [ref=e1374]
        - link "right arrow" [ref=e1375] [cursor=pointer]:
          - /url: /landing-list/17
          - img "right arrow" [ref=e1377]
      - article [ref=e1408]:
        - generic [ref=e1411]:
          - img "App Install" [ref=e1412]
          - generic [ref=e1413]:
            - paragraph [ref=e1414]: Free Ink, gifts, and more. Get the app today!
            - generic [ref=e1415]:
              - link "iOS App Link" [ref=e1416] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/tapastic/id578836126?mt=8
                - img "iOS App Link" [ref=e1417]
              - link "AOS App Link" [ref=e1418] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.tapastic&referrer=utm_source%3Dm-tapastic%26utm_medium%3Dlink%26utm_content%3Dget-the-app%26utm_campaign%3Dmobile-navigation
                - img "AOS App Link" [ref=e1419]
    - contentinfo [ref=e1421]:
      - link "tapas Stories you crave" [ref=e1423] [cursor=pointer]:
        - /url: /
        - img "tapas Stories you crave" [ref=e1424]
      - generic [ref=e1425]:
        - link "instagram" [ref=e1426] [cursor=pointer]:
          - /url: https://instagram.com/tapas_app
          - img "instagram" [ref=e1427]
        - link "twitter" [ref=e1428] [cursor=pointer]:
          - /url: https://twitter.com/tapas_app
          - img "twitter" [ref=e1429]
        - link "youtube" [ref=e1430] [cursor=pointer]:
          - /url: https://www.youtube.com/tapasmedia
          - img "youtube" [ref=e1431]
        - link "facebook" [ref=e1432] [cursor=pointer]:
          - /url: https://www.facebook.com/tapas.io
          - img "facebook" [ref=e1433]
        - link "tiktok" [ref=e1434] [cursor=pointer]:
          - /url: https://www.tiktok.com/@tapasmedia
          - img "tiktok" [ref=e1435]
      - generic [ref=e1436]:
        - link "Help" [ref=e1437] [cursor=pointer]:
          - /url: https://help.tapas.io/hc/en-us
        - link "Discord" [ref=e1438] [cursor=pointer]:
          - /url: https://discord.com/invite/tapas
        - link "Forums" [ref=e1439] [cursor=pointer]:
          - /url: https://forums.tapas.io
        - link "Newsfeed" [ref=e1440] [cursor=pointer]:
          - /url: /newsfeed
        - link "Contact" [ref=e1441] [cursor=pointer]:
          - /url: mailto:feedback@tapas.io
        - link "Publish" [ref=e1442] [cursor=pointer]:
          - /url: https://www.creators.tapas.io
      - generic [ref=e1443]:
        - paragraph [ref=e1444]: ⓒ 2024 Tapas Entertainment.
        - generic [ref=e1445]:
          - link "Terms" [ref=e1446] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005545248
          - generic [ref=e1447]: ・
          - link "Privacy" [ref=e1448] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005377787
          - generic [ref=e1449]: ・
          - link "Content" [ref=e1450] [cursor=pointer]:
            - /url: https://help.tapas.io/hc/en-us/articles/115005323707
        - link "Do Not Sell or Share My Personal Information" [ref=e1451] [cursor=pointer]:
          - /url: /account/privacy-opt-out
  - alert [ref=e1452]
  - iframe [ref=e1453]:
    - button "Help" [ref=f3e4] [cursor=pointer]:
      - img [ref=f3e6]
      - generic [ref=f3e13]: Help
```

# Test source

```ts
  1   | // 보관함 (Library) step 정의
  2   | // features/보관함/**/*.feature 대응
  3   | 
  4   | import { createBdd } from 'playwright-bdd';
  5   | import { expect } from '@playwright/test';
  6   | 
  7   | const { Given, When, Then } = createBdd();
  8   | 
  9   | // ──── 사전 조건 ────
  10  | 
  11  | Given(/^(Updated|Recent|Subscribed|Free Episodes|Wait Until Free|PCWeb only) 작품 목록 없는 경우$/, async () => {
  12  |   // 특정 목록이 비어있는 상태 — 데이터 의존적, 자동화 범위 외
  13  | });
  14  | 
  15  | // ──── 보관함 진입 / 탭 이동 ────
  16  | 
  17  | // GNB > 라이브러리 메뉴 클릭 / GNB > 라이브러리 클릭 — common.steps.ts의 /^GNB > ([^>]+) 클릭$/ 에서 처리
  18  | 
  19  | When('GNB >보관함 클릭 > Suscribed클릭', async ({ page }) => {
  20  |   const lib = page.locator('a[href="/reading-list"]');
  21  |   if ((await lib.count()) > 0) await lib.first().click();
  22  |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  23  |   const tab = page.locator('a[href*="category=SUBSCRIBED"]');
  24  |   if ((await tab.count()) > 0) await tab.first().click();
  25  | });
  26  | 
  27  | When('GNB 보관함 아이콘 클릭 > Recent 클릭', async ({ page }) => {
  28  |   const lib = page.locator('a[href="/reading-list"]');
  29  |   if ((await lib.count()) > 0) await lib.first().click();
  30  |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  31  |   const tab = page.locator('a[href*="category=RECENT"]');
  32  |   if ((await tab.count()) > 0) await tab.first().click();
  33  | });
  34  | 
  35  | async function ensureOnReadingList(page: any) {
  36  |   if (!page.url().includes('reading-list')) {
  37  |     const lib = page.locator('a[href="/reading-list"]');
  38  |     if ((await lib.count()) > 0) {
  39  |       await lib.first().click();
  40  |       await page.waitForLoadState('domcontentloaded').catch(() => {});
  41  |     }
  42  |     if (page.url().includes('signin')) {
  43  |       throw new Error('[보관함] 로그인 세션 만료 — storageState 재생성 필요 (npm run test:setup)');
  44  |     }
  45  |   }
  46  | }
  47  | 
  48  | When('Recent 클릭', async ({ page }) => {
  49  |   await ensureOnReadingList(page);
  50  |   await expect(page.locator('a[href*="category=RECENT"]').first()).toBeVisible({ timeout: 5000 });
  51  |   await page.locator('a[href*="category=RECENT"]').first().click();
  52  | });
  53  | 
  54  | When('Subscribed 클릭', async ({ page }) => {
  55  |   await ensureOnReadingList(page);
  56  |   await expect(page.locator('a[href*="category=SUBSCRIBED"]').first()).toBeVisible({ timeout: 5000 });
  57  |   await page.locator('a[href*="category=SUBSCRIBED"]').first().click();
  58  | });
  59  | 
  60  | When('Free episodes 메뉴 클릭', async ({ page }) => {
  61  |   await ensureOnReadingList(page);
  62  |   await expect(page.locator('a[href*="category=FREE_EPISODES"]').first()).toBeVisible({ timeout: 5000 });
  63  |   await page.locator('a[href*="category=FREE_EPISODES"]').first().click();
  64  | });
  65  | 
  66  | When('Wait until Free 메뉴 클릭', async ({ page }) => {
  67  |   await ensureOnReadingList(page);
  68  |   await expect(page.locator('a[href*="category=WAIT_UNTIL_FREE"]').first()).toBeVisible({ timeout: 5000 });
  69  |   await page.locator('a[href*="category=WAIT_UNTIL_FREE"]').first().click();
  70  | });
  71  | 
  72  | // Comics 필터 클릭 — 인박스-댓글.steps.ts의 /^(All|Comics|Novels) 필터 클릭$/ 에서 처리
  73  | 
  74  | When('우상단 필터 > [Comics] 버튼 클릭', async ({ page }) => {
  75  |   await expect(page.locator('a[href*="type=COMICS"]').first()).toBeVisible({ timeout: 5000 });
  76  |   await page.locator('a[href*="type=COMICS"]').first().click();
  77  | });
  78  | 
  79  | When('필터 > [All] 버튼 클릭', async ({ page }) => {
  80  |   await expect(page.locator('a.item-title').filter({ hasText: /^all$/i }).first()).toBeVisible({ timeout: 5000 });
  81  |   await page.locator('a.item-title').filter({ hasText: /^all$/i }).first().click();
  82  | });
  83  | 
  84  | When('필터 > [Novels] 버튼 클릭', async ({ page }) => {
  85  |   await expect(page.locator('a[href*="type=BOOKS"]').first()).toBeVisible({ timeout: 5000 });
  86  |   await page.locator('a[href*="type=BOOKS"]').first().click();
  87  | });
  88  | 
  89  | When('탭 하단 [Comics] 버튼 클릭', async ({ page }) => {
> 90  |   await expect(page.locator('a[href*="type=COMICS"]').first()).toBeVisible({ timeout: 5000 });
      |                                                                ^ Error: expect(locator).toBeVisible() failed
  91  |   await page.locator('a[href*="type=COMICS"]').first().click();
  92  | });
  93  | 
  94  | // ──── Gift Passes ────
  95  | 
  96  | When('Get Gift Passes 영역 확인', async ({ page }) => {
  97  |   await expect(page.locator('.inbox-gift-item, [class*="gift"]').first()).toBeVisible({ timeout: 5000 });
  98  | });
  99  | 
  100 | When('작품 오른쪽의 [Get] 버튼 클릭', async ({ page }) => {
  101 |   // 작품 클릭 후 페이지가 이동됐을 수 있으므로 선물함으로 복귀
  102 |   if (!page.url().includes('/inbox/gift')) {
  103 |     const giftLink = page.locator('a[href="/inbox/gift"]');
  104 |     if ((await giftLink.count()) > 0) await giftLink.first().click();
  105 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  106 |   }
  107 |   const btn = page.locator('.inbox-gift-item__btn-get').first();
  108 |   if ((await btn.count()) > 0) { await btn.click(); return; }
  109 |   await expect(page.locator('body')).toBeVisible();
  110 | });
  111 | 
  112 | When('Gift 수령', async ({ page }) => {
  113 |   const btn = page.getByRole('button', { name: /get|claim|receive/i });
  114 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  115 |   await expect(page.locator('body')).toBeVisible();
  116 | });
  117 | 
  118 | // ──── 작품 / 뷰어 진입 ────
  119 | 
  120 | When('작품 클릭', async ({ page }) => {
  121 |   await expect(page.getByRole('link').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
  122 |   await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
  123 | });
  124 | 
  125 | When('임의의 작품 클릭', async ({ page }) => {
  126 |   await expect(page.getByRole('link').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
  127 |   await page.getByRole('link').filter({ has: page.locator('img') }).first().click();
  128 | });
  129 | 
  130 | When('GNB > Home > 임의의 작품 클릭', async ({ page }) => {
  131 |   const homeLink = page.getByRole('link', { name: /^home$/i });
  132 |   if ((await homeLink.count()) > 0) await homeLink.first().click();
  133 |   await page.waitForLoadState('domcontentloaded').catch(() => {});
  134 |   const imgLink = page.getByRole('link').filter({ has: page.locator('img') });
  135 |   if ((await imgLink.count()) > 0) { await imgLink.first().click(); return; }
  136 |   const seriesLink = page.locator('a[href*="/series/"]').first();
  137 |   if ((await seriesLink.count()) > 0) { await seriesLink.click(); return; }
  138 |   await expect(page.locator('body')).toBeVisible();
  139 | });
  140 | 
  141 | When('작품 리스트 노출 확인', async ({ page }) => {
  142 |   await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
  143 | });
  144 | 
  145 | When('작품 정보 영역 확인', async ({ page }) => {
  146 |   await expect(page.locator('.content-list-wrap').first()).toBeVisible({ timeout: 5000 });
  147 | });
  148 | 
  149 | When('Comic 작품 열람', async ({ page }) => {
  150 |   const imgLink = page.getByRole('link').filter({ has: page.locator('img') });
  151 |   if ((await imgLink.count()) > 0) { await imgLink.first().click(); return; }
  152 |   await expect(page.locator('a[href*="/series/"], a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
  153 |   await page.locator('a[href*="/series/"], a[href*="/episode/"]').first().click();
  154 | });
  155 | 
  156 | When('Comic 작품 구독', async ({ page }) => {
  157 |   const btn = page.getByRole('button', { name: /subscribe/i });
  158 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  159 |   await expect(page.locator('body')).toBeVisible();
  160 | });
  161 | 
  162 | When('Novel 작품 구독', async ({ page }) => {
  163 |   const btn = page.getByRole('button', { name: /subscribe/i });
  164 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  165 |   await expect(page.locator('body')).toBeVisible();
  166 | });
  167 | 
  168 | // ──── 뒤로가기 ────
  169 | 
  170 | async function goBackSafely(page: any) {
  171 |   await page.goBack();
  172 |   if (page.url() === 'about:blank' || page.url() === '') {
  173 |     await page.goto('/');
  174 |   }
  175 | }
  176 | 
  177 | When('[<-] 백버튼 클릭', async ({ page }) => {
  178 |   await goBackSafely(page);
  179 | });
  180 | 
  181 | When('[<] 백버튼 클릭', async ({ page }) => {
  182 |   await goBackSafely(page);
  183 | });
  184 | 
  185 | When('상단 [<] 백버튼 클릭', async ({ page }) => {
  186 |   await goBackSafely(page);
  187 | });
  188 | 
  189 | When('뒤로가기', async ({ page }) => {
  190 |   await page.goBack();
```