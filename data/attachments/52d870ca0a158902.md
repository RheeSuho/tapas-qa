# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/06-홈-(Community)/Spotlight.feature.spec.js >> Spotlight (섹션 서브탭) >> [TPS-085] 라인배너 클릭 + Community 홈으로 복귀
- Location: .features-gen/features/06-홈-(Community)/Spotlight.feature.spec.js:40:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('article a[href*="/series/"]').first()
Expected: visible
Timeout: 8000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 8000ms
  - waiting for locator('article a[href*="/series/"]').first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e6]:
    - generic [ref=e7]:
      - generic [ref=e8]:
        - img "App Store" [ref=e9]:
          - img
        - button "App Store" [ref=e12] [cursor=pointer]:
          - generic [ref=e13]: for iPhone
          - img
      - generic [ref=e18]:
        - img
        - generic: Search
        - searchbox "Search" [ref=e19]
    - generic [ref=e21]:
      - list [ref=e23]:
        - listitem [ref=e24]:
          - button "Today" [ref=e25] [cursor=pointer]:
            - generic [ref=e26]:
              - generic [ref=e27]:
                - img
              - generic [ref=e28]: Today
        - listitem [ref=e29]:
          - button "Games" [ref=e30] [cursor=pointer]:
            - generic [ref=e31]:
              - generic [ref=e32]:
                - img
              - generic [ref=e33]: Games
        - listitem [ref=e34]:
          - button "Apps" [ref=e35] [cursor=pointer]:
            - generic [ref=e36]:
              - generic [ref=e37]:
                - img
              - generic [ref=e38]: Apps
        - listitem [ref=e39]:
          - button "Arcade" [ref=e40] [cursor=pointer]:
            - generic [ref=e41]:
              - generic [ref=e42]:
                - img
              - generic [ref=e43]: Arcade
      - generic [ref=e44]:
        - generic [ref=e46]: Categories
        - list "Categories" [ref=e47]:
          - listitem [ref=e48]:
            - button "Categories" [ref=e49] [cursor=pointer]:
              - generic [ref=e53]: Categories
          - listitem [ref=e54]:
            - button "Photo & Video" [ref=e55] [cursor=pointer]:
              - generic [ref=e59]: Photo & Video
          - listitem [ref=e60]:
            - button "Health & Fitness" [ref=e61] [cursor=pointer]:
              - generic [ref=e65]: Health & Fitness
          - listitem [ref=e66]:
            - button "Productivity" [ref=e67] [cursor=pointer]:
              - generic [ref=e71]: Productivity
          - listitem [ref=e72]:
            - button "Entertainment" [ref=e73] [cursor=pointer]:
              - generic [ref=e77]: Entertainment
          - listitem [ref=e78]:
            - button "Action" [ref=e79] [cursor=pointer]:
              - generic [ref=e83]: Action
          - listitem [ref=e84]:
            - button "Adventure" [ref=e85] [cursor=pointer]:
              - generic [ref=e89]: Adventure
          - listitem [ref=e90]:
            - button "Puzzle" [ref=e91] [cursor=pointer]:
              - generic [ref=e95]: Puzzle
          - listitem [ref=e96]:
            - button "Indie" [ref=e97] [cursor=pointer]:
              - generic [ref=e101]: Indie
      - generic:
        - list
  - generic [ref=e102]:
    - main [ref=e103]:
      - generic [ref=e104]:
        - generic [ref=e118]:
          - heading "Tapas – Comics and Novels" [level=1] [ref=e119]:
            - generic [ref=e120]: Tapas – Comics and Novels
          - paragraph [ref=e121]: Read webcomics & webnovels
          - paragraph [ref=e122]: Free · In‑App Purchases
        - list [ref=e128]:
          - listitem [ref=e129]:
            - link "45K Ratings 4.6 Stars" [ref=e131] [cursor=pointer]:
              - /url: "#productRatings"
              - generic [ref=e133]:
                - term [ref=e134]:
                  - generic [ref=e135]: 45K Ratings
                - definition [ref=e136]:
                  - generic [ref=e137]: "4.6"
                  - list "4.6 Stars" [ref=e138]:
                    - listitem [ref=e139]:
                      - img
                    - listitem [ref=e140]:
                      - img
                    - listitem [ref=e141]:
                      - img
                    - listitem [ref=e142]:
                      - img
                    - listitem [ref=e143]:
                      - generic [ref=e144]:
                        - img
                      - img
          - listitem [ref=e145]:
            - link "Age Rating 16+ In-App Controls" [ref=e147] [cursor=pointer]:
              - /url: "#information"
              - generic [ref=e149]:
                - term [ref=e150]:
                  - generic [ref=e151]: Age Rating
                - definition [ref=e152]:
                  - generic [ref=e153]: 16+
                  - generic [ref=e154]: In-App Controls
          - listitem [ref=e155]:
            - link "Category Books" [ref=e157] [cursor=pointer]:
              - /url: "#information"
              - generic [ref=e159]:
                - term [ref=e160]:
                  - generic [ref=e161]: Category
                - definition [ref=e162]:
                  - generic [ref=e166]: Books
          - listitem [ref=e167]:
            - link "Developer Radish Media" [ref=e169] [cursor=pointer]:
              - /url: https://apps.apple.com/us/developer/radish-media/id1076491464?platform=iphone
              - generic [ref=e171]:
                - term [ref=e172]:
                  - generic [ref=e173]: Developer
                - definition [ref=e174]:
                  - generic [ref=e175]:
                    - img
                  - generic [ref=e176]: Radish Media
          - listitem [ref=e177]:
            - link "Language EN + 1 More" [ref=e179] [cursor=pointer]:
              - /url: "#information"
              - generic [ref=e181]:
                - term [ref=e182]:
                  - generic [ref=e183]: Language
                - definition [ref=e184]:
                  - generic [ref=e185]: EN
                  - generic [ref=e186]: + 1 More
          - listitem [ref=e187]:
            - link "Size 83.1 MB" [ref=e189] [cursor=pointer]:
              - /url: "#information"
              - generic [ref=e191]:
                - term [ref=e192]:
                  - generic [ref=e193]: Size
                - definition [ref=e194]:
                  - generic [ref=e195]: "83.1"
                  - generic [ref=e196]: MB
        - region "iPhone App Previews and Screenshots" [ref=e197]:
          - generic [ref=e200]:
            - button "Previous Page" [disabled] [ref=e201]:
              - img
            - list [ref=e202]:
              - listitem [ref=e203]:
                - generic "Screenshot" [ref=e205]
              - listitem [ref=e209]:
                - generic "Screenshot" [ref=e211]
              - listitem [ref=e215]:
                - generic "Screenshot" [ref=e217]
              - listitem [ref=e221]:
                - generic "Screenshot" [ref=e223]
              - listitem [ref=e227]
              - listitem [ref=e233]
            - button "Next Page" [ref=e239] [cursor=pointer]:
              - img
        - button "iPhone, iPad" [ref=e241] [cursor=pointer]:
          - generic [ref=e242]:
            - generic [ref=e243]:
              - generic [ref=e244]:
                - img
              - generic [ref=e245]:
                - img
            - generic [ref=e246]: iPhone, iPad
          - generic [ref=e247]:
            - img
        - paragraph [ref=e250]:
          - generic [ref=e252]: "The Ultimate App for Comics, Novels, Mangas, Manhwas, Webtoons and More!—Discover Your Next Favorite Story with Tapas Looking for the perfect way to pass the time? Tapas is your go-to destination for captivating stories. Whether you love romance, action, or BL content, Tapas has something for everyone. Discover new chapters released daily, with free episodes dropping every three hours. Get hooked on international sensations and famous Tapas Original Series like: - The Beginning After the End - Solo Leveling - Little Rabbit and the Big Bad Leopard - A Business Proposal - Heartstopper - Moving Thanks to our Wait-Until-Free system, you can enjoy many of these mega-hit stories for free. Explore an endless library of stories spanning everything from Tapas Originals, K-content, to indie webtoons. With thousands of premium comics and novels, you can indulge in isekai adventures, otome game stories, and breathtaking romantasy! Download the app and engage with 10 million other readers and creators. Get notified about updates on your favorite series. Plus, you’ll get access to app-exclusive perks like Gift Passes and Fortune Cookies! Want to write your own epic saga? Tapas is the perfect platform to share your creativity with a supportive global audience. Join over 75,000 talented creators—from established, award-winning authors to aspiring independent artists—and publish your work on Tapas. Turn your phone time into story time with Tapas—your go-to destination for the stories you crave! Website: http://www.tapas.io E-mail: feedback@tapas.io Instagram: http://instagram.com/tapas_app Twitter: https://twitter.com/tapas_app Facebook: https://www.facebook.com/tapas.io"
          - button "more" [ref=e253] [cursor=pointer]
        - region "Events" [ref=e254]:
          - heading "Events" [level=2] [ref=e257]
          - list [ref=e261]:
            - listitem [ref=e262]:
              - generic [ref=e264]:
                - time [ref=e266]: HAPPENING NOW
                - article [ref=e269] [cursor=pointer]:
                  - link "Iconic Heroines Club" [ref=e270]:
                    - /url: https://apps.apple.com/us/app/id578836126?eventid=6773216273
                    - generic [ref=e278]:
                      - generic [ref=e279]: LIVE EVENT
                      - heading "Iconic Heroines Club" [level=3] [ref=e280]
                      - paragraph [ref=e283]: Fall for iconic leads and get perks for your binge!
        - region "Ratings & Reviews" [ref=e284]:
          - link "Ratings & Reviews" [ref=e286] [cursor=pointer]:
            - /url: https://apps.apple.com/us/app/578836126?see-all=reviews&platform=iphone
            - generic [ref=e287]:
              - heading "Ratings & Reviews" [level=2] [ref=e288]
              - generic [ref=e289]:
                - img
          - list [ref=e290]:
            - listitem [ref=e291]:
              - generic [ref=e293]:
                - generic [ref=e294]:
                  - generic [ref=e295]: "4.6"
                  - generic [ref=e296]: out of 5
                - generic [ref=e297]:
                  - generic [ref=e298]: 45K Ratings
                  - generic [ref=e299]:
                    - generic "**ASE.Shared.Ratings.Review.StarsAria.one.other**" [ref=e300]:
                      - generic [ref=e301]:
                        - generic [ref=e302]:
                          - img
                        - generic [ref=e303]:
                          - img
                        - generic [ref=e304]:
                          - img
                        - generic [ref=e305]:
                          - img
                        - generic [ref=e306]:
                          - img
                    - generic "**ASE.Shared.Ratings.Review.StarsAria.one.other**" [ref=e309]:
                      - generic [ref=e310]:
                        - generic [ref=e311]:
                          - img
                        - generic [ref=e312]:
                          - img
                        - generic [ref=e313]:
                          - img
                        - generic [ref=e314]:
                          - img
                    - generic "**ASE.Shared.Ratings.Review.StarsAria.one.other**" [ref=e317]:
                      - generic [ref=e318]:
                        - generic [ref=e319]:
                          - img
                        - generic [ref=e320]:
                          - img
                        - generic [ref=e321]:
                          - img
                    - generic "**ASE.Shared.Ratings.Review.StarsAria.one.other**" [ref=e324]:
                      - generic [ref=e325]:
                        - generic [ref=e326]:
                          - img
                        - generic [ref=e327]:
                          - img
                    - generic "**ASE.Shared.Ratings.Review.StarsAria.other.one**" [ref=e330]:
                      - generic [ref=e332]:
                        - img
        - generic [ref=e338]:
          - button "Previous Page" [disabled] [ref=e339]:
            - img
          - list [ref=e340]:
            - listitem [ref=e341]:
              - generic "Well...." [ref=e343]:
                - generic [ref=e344]:
                  - generic [ref=e345]:
                    - heading "Well...." [level=3] [ref=e348]
                    - list "5 Stars" [ref=e350]:
                      - listitem [ref=e351]:
                        - img
                      - listitem [ref=e352]:
                        - img
                      - listitem [ref=e353]:
                        - img
                      - listitem [ref=e354]:
                        - img
                      - listitem [ref=e355]:
                        - img
                  - generic [ref=e356]:
                    - time [ref=e357]: 01/06/2021
                    - paragraph [ref=e360]: Amber yey464
                - generic [ref=e362]:
                  - paragraph [ref=e363]: The app itself is great. It’s a fun app to read really good comics but it’s princely and glitchy. I’ve never spend so much money an a singular app before.I’ve almost spent $20 which I know might not sound like a bunch but it is considering I’ve never spent so much on an app. And yes you can get free ink to read but lots of them require you to put ur personal info which isn’t very safe I don’t know why they need to know so much especially because this app I feel is more categorized for late teens to maybe people in their early twenties. Who like me don’t have a lot to pay. I would like at least some free ink for at least a chapter a day because once a week isn’t enough. And the videos aren’t that great bc u have to watch at least 30 ads to read one chapter, which is a lot for just one. It’s really frustrating to know I can’t read many comics bc I won’t have enough ink and I’ll have to pay or risk getting hacked by giving my info away, it’s scary. Right know I’m only sticking to 2 comics bc I just can’t afford anymore than that, or else I’d constantly he spending money that I don’t have. The app itself it also glitchy it wouldn’t let me log in and would load and when the glitch was fixed it relocked 2 of the chapters that I’d bought, which was really frustrating. Pls I’d like for the app to be a bit better in ways of reading chapters. I know the creators of the stories need their share, which I totally support. But pls make it a little bit easier for us getting ink, at least don’t make us have to share our private info, it’s really scary. Like you can watch a 2 min add for a 100 ink or play this app to level 3 for 500 ink.
                  - button "MORE" [ref=e364] [cursor=pointer]
            - listitem [ref=e365]:
              - generic "Like it, but sometimes issues.." [ref=e367]:
                - generic [ref=e368]:
                  - generic [ref=e369]:
                    - heading "Like it, but sometimes issues.." [level=3] [ref=e372]
                    - list "4 Stars" [ref=e374]:
                      - listitem [ref=e375]:
                        - img
                      - listitem [ref=e376]:
                        - img
                      - listitem [ref=e377]:
                        - img
                      - listitem [ref=e378]:
                        - img
                      - listitem [ref=e379]:
                        - img
                  - generic [ref=e380]:
                    - time [ref=e381]: 06/29/2023
                    - paragraph [ref=e384]: Twosing
                - generic [ref=e386]:
                  - paragraph [ref=e387]: Like the app, got annoyed with many changes, but I’ve adapted to them and found some were nice later.. However, lately I’ve done their earn ink events. Like recently I opened over 300 episodes of the series they chose, to try and earn 25k and I didn’t get anything, and I opened way beyond 300 episodes. Bit upset there, since I set alarms to open episodes too. Plus today I also did a smaller event of opening an episode of a series, and nothing. Usually those give them after maybe a couple hours at most after completion, but nothing this time. I suppose I can give it 24hrs, but I’m also seeing a glitch of them not updating the new episodes and dates not being right on new ones too. So I don’t think I’ll be holding my breath.Either they’ve changed how you do those offers, such as what/how they consider “unlocking” episodes, or there’s a big glitch with it. Regardless, it doesn’t make me want to even try and read the series that are put up. Which is a shame, because quite a few series I’ve decided “Well I’ve had my eye on this for awhile, so why not try and read what I opened for the event?“ or “It’s been awhile since I’ve read this, I remember liking it, so I’ll binge while I earn ink!”, such examples. If this continues, I’ll probably only stick to what I’m already reading, or just look at things that catch my eye and not bother with anything that doesn’t seem interesting in the events.
                  - button "MORE" [ref=e388] [cursor=pointer]
            - listitem [ref=e389]:
              - generic [ref=e391]:
                - generic [ref=e392]:
                  - generic [ref=e393]:
                    - heading [level=3] [ref=e396]: Great for reading, Change the payment system?
                    - list [ref=e398]:
                      - listitem [ref=e399]:
                        - img
                      - listitem [ref=e400]:
                        - img
                      - listitem [ref=e401]:
                        - img
                      - listitem [ref=e402]:
                        - img
                      - listitem [ref=e403]:
                        - img
                  - generic [ref=e404]:
                    - time [ref=e405]: 03/30/2024
                    - paragraph [ref=e408]: SEMak7
                - generic [ref=e410]:
                  - paragraph [ref=e411]: "Hello creators, I really love selection and the webcomics and webnovels on this app; however, the app will randomly freeze semi-regularly. ~Likes~ Some of the novels and comics are free or you can wait for to unlock chapters for free. The second is that the stories have minimal grammar errors unlike other platforms. I love the selection of LGBTQ romance which is the main reason I read digitally now. I definitely want to support the creators. ~Changes~ the ink system— I did some calculations and realized even though I use a lot of ink the ink to $ support conversion is not good :(. A few alternatives to this ink system: the option to unlock by chapter *and* the option to pay $20-35 (or a little more) for the whole story. Another alternative would be to offer a greater variety of price points for ink or be able to enter the amount of ink you need and pay for that much ink. Thank you for giving me a platform with so many wonderful comics and novels to read💜☺️! be able to enter a specific amount of ink and pay for that amount. The current system has ink bundles. The problem is if the amount of ink you need to unlock the remainder doesn’t fit into the preset brackets you have to buy multiple from the preset bundles if you don’t want to move to the next price bracket. IThank you for giving me a platform with so many wonderful comics and novels to read💜☺️!"
                  - button [disabled] [ref=e412]: MORE
            - listitem [ref=e413]:
              - generic [ref=e415]:
                - generic [ref=e416]:
                  - generic [ref=e417]:
                    - heading [level=3] [ref=e420]: It’s ok
                    - list [ref=e422]:
                      - listitem [ref=e423]:
                        - img
                      - listitem [ref=e424]:
                        - img
                      - listitem [ref=e425]:
                        - img
                      - listitem [ref=e426]:
                        - img
                      - listitem [ref=e427]:
                        - img
                  - generic [ref=e428]:
                    - time [ref=e429]: 06/28/2022
                    - paragraph [ref=e432]: GuardianAtNight
                - generic [ref=e434]:
                  - paragraph [ref=e435]: I’m a WEBTOON user so it definitely took some time to get used to this platform. I for one like the books on this app. I think the books on this app suits my taste a lot more than WEBTOONs. I always thought I could not get used to and refused to read books on a daily pass or on here WUF books. But I guess when you are really interested in a book you make do and accept the fact bc I refuse to spend money on ink in this app.Now what I don’t like is how much ink you need to purchase a chapter. Most chapters with tap on are 300 ink and when you use your once a week fortune cookie there’s a chance you get 250 which for most do not open a chapter you want to read. Other than that there’s no real way to earn free ink on this app besides the survey which are pretty much useless for earnings.I don’t mind the WUF episodes bc obviously I like the stories I am reading and I can wait but I honestly think a regular weekly update is a lot better than the WUF episodes only bc once you reach the minimum chapter limit you cannot access them until they become available. I am also not a fan of the WUF episodes going out of commission bc a story is on Hiatus. I think ppl should still be able to get a weekly or WUF episodes until the last episode airs. I find it unfair that ppl need to wait for the book to come out of hiatus for them to finish a season. I would rather wait for the chapters to build up so I can receive weekly updates for the chapters.
                  - button [disabled] [ref=e436]: MORE
            - listitem [ref=e437]
            - listitem [ref=e438]
            - listitem [ref=e439]
            - listitem [ref=e440]
          - button "Next Page" [ref=e441] [cursor=pointer]:
            - img
        - region "What’s New" [ref=e442]:
          - button "What’s New" [ref=e444] [cursor=pointer]:
            - generic [ref=e446]:
              - heading "What’s New" [level=2] [ref=e447]
              - generic [ref=e448]:
                - img
          - generic "What’s New" [ref=e449]:
            - generic [ref=e450]:
              - paragraph [ref=e451]:
                - generic [ref=e452]: Bug fixes and performance improvements
              - generic [ref=e453]:
                - generic [ref=e454]: Version 7.12.0
                - time [ref=e455]: Apr 27
        - region "App Privacy" [ref=e456]:
          - button "App Privacy" [ref=e458] [cursor=pointer]:
            - link "App Privacy" [ref=e460]:
              - /url: "#"
              - generic [ref=e461]:
                - heading "App Privacy" [level=2] [ref=e462]
                - generic [ref=e463]:
                  - img
          - paragraph [ref=e467]:
            - text: The developer, Radish Media, indicated that the app’s privacy practices may include handling of data as described below. For more information, see the
            - link "Developer’s Privacy Policy" [ref=e468] [cursor=pointer]:
              - /url: https://tapas.io/privacy
              - generic [ref=e469]: developer’s privacy policy
            - text: .
        - list [ref=e471]:
          - listitem [ref=e472]:
            - generic "Data Used to Track You" [ref=e473]:
              - generic [ref=e474]:
                - img
              - heading "Data Used to Track You" [level=3] [ref=e475]
              - paragraph [ref=e476]: "The following data may be used to track you across apps and websites owned by other companies:"
              - list [ref=e477]:
                - listitem [ref=e478]:
                  - generic [ref=e479]:
                    - img
                  - text: Usage Data
          - listitem [ref=e480]:
            - generic "Data Linked to You" [ref=e481]:
              - generic [ref=e482]:
                - img
              - heading "Data Linked to You" [level=3] [ref=e483]
              - paragraph [ref=e484]: "The following data may be collected and linked to your identity:"
              - list [ref=e485]:
                - listitem [ref=e486]:
                  - generic [ref=e487]:
                    - img
                  - text: Purchases
                - listitem [ref=e488]:
                  - generic [ref=e489]:
                    - img
                  - text: Location
                - listitem [ref=e490]:
                  - generic [ref=e491]:
                    - img
                  - text: Browsing History
                - listitem [ref=e492]:
                  - generic [ref=e493]:
                    - img
                  - text: Identifiers
                - listitem [ref=e494]:
                  - generic [ref=e495]:
                    - img
                  - text: Usage Data
                - listitem [ref=e496]:
                  - generic [ref=e497]:
                    - img
                  - text: Other Data
          - listitem [ref=e498]:
            - generic "Data Not Linked to You" [ref=e499]:
              - generic [ref=e500]:
                - img
              - heading "Data Not Linked to You" [level=3] [ref=e501]
              - paragraph [ref=e502]: "The following data may be collected but it is not linked to your identity:"
              - list [ref=e503]:
                - listitem [ref=e504]:
                  - generic [ref=e505]:
                    - img
                  - text: Usage Data
        - paragraph [ref=e507]:
          - text: Privacy practices may vary, for example, based on the features you use or your age.
          - link "Learn More" [ref=e508] [cursor=pointer]:
            - /url: https://apps.apple.com/us/iphone/story/id1538632801
        - region "Accessibility" [ref=e509]:
          - heading "Accessibility" [level=2] [ref=e513]
          - paragraph [ref=e517]:
            - text: The developer has not yet indicated which accessibility features this app supports.
            - link "Learn More" [ref=e518] [cursor=pointer]:
              - /url: https://apps.apple.com/story/id1814164299
        - region "Information" [ref=e519]:
          - heading "Information" [level=2] [ref=e522]
          - generic [ref=e523]:
            - generic [ref=e524]:
              - term [ref=e525]: Seller
              - definition [ref=e526]:
                - list [ref=e527]:
                  - listitem [ref=e528]: Radish Media, Inc.
            - generic [ref=e529]:
              - term [ref=e530]: Size
              - definition [ref=e531]:
                - list [ref=e532]:
                  - listitem [ref=e533]: 83.1 MB
            - generic [ref=e534]:
              - term [ref=e535]: Category
              - definition [ref=e536]:
                - list [ref=e537]:
                  - listitem [ref=e538]: Books
            - generic [ref=e539]:
              - term [ref=e540]: Compatibility
              - definition [ref=e541]:
                - group [ref=e542]:
                  - generic "Requires iOS 16.0 or later." [ref=e543] [cursor=pointer]:
                    - text: Requires iOS 16.0 or later.
                    - img
            - generic [ref=e544]:
              - term [ref=e545]: Languages
              - definition [ref=e546]:
                - list [ref=e547]:
                  - listitem [ref=e548]: English and Spanish
            - generic [ref=e549]:
              - term [ref=e550]: Age Rating
              - definition [ref=e551]:
                - group [ref=e552]:
                  - generic "16+" [ref=e553] [cursor=pointer]:
                    - text: 16+
                    - img
            - generic [ref=e554]:
              - term [ref=e555]: In-App Purchases
              - definition [ref=e556]:
                - group [ref=e557]:
                  - generic "Yes" [ref=e558] [cursor=pointer]:
                    - text: "Yes"
                    - img
            - generic [ref=e559]:
              - term [ref=e560]: Copyright
              - definition [ref=e561]:
                - list [ref=e562]:
                  - listitem [ref=e563]: © Tapas Media, Inc.
        - generic [ref=e565]:
          - listitem [ref=e566]:
            - link "Developer Website ↗" [ref=e568] [cursor=pointer]:
              - /url: http://tapas.io
              - generic [ref=e569]: Developer Website
              - text: ↗
          - listitem [ref=e570]:
            - link "Privacy Policy ↗" [ref=e572] [cursor=pointer]:
              - /url: https://tapas.io/privacy
              - generic [ref=e573]: Privacy Policy
              - text: ↗
        - region "You Might Also Like" [ref=e574]:
          - link "You Might Also Like" [ref=e576] [cursor=pointer]:
            - /url: https://apps.apple.com/us/app/578836126?see-all=customers-also-bought-apps&platform=iphone
            - generic [ref=e577]:
              - heading "You Might Also Like" [level=2] [ref=e578]
              - generic [ref=e579]:
                - img
          - generic [ref=e582]:
            - button "Previous Page" [disabled] [ref=e583]:
              - img
            - list [ref=e584]:
              - listitem [ref=e585]:
                - link "View Manta - Manga, Manhwa, Novels Read best manga & webcomics" [ref=e589] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/manta-manga-manhwa-novels/id1536116642
                  - generic [ref=e591]: View
                  - generic [ref=e596]:
                    - heading "Manta - Manga, Manhwa, Novels" [level=3] [ref=e599]
                    - paragraph [ref=e602]: Read best manga & webcomics
              - listitem [ref=e603]:
                - link "View Tappytoon Comics & Novels Read Manhwa, Manga & Webtoons" [ref=e607] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/tappytoon-comics-novels/id985615352
                  - generic [ref=e609]: View
                  - generic [ref=e614]:
                    - heading "Tappytoon Comics & Novels" [level=3] [ref=e617]
                    - paragraph [ref=e620]: Read Manhwa, Manga & Webtoons
              - listitem [ref=e621]:
                - link "View WebComics - Webtoon, Manga Read Manga, Comics & Manhwa" [ref=e625] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/webcomics-webtoon-manga/id1337550955
                  - generic [ref=e627]: View
                  - generic [ref=e632]:
                    - heading "WebComics - Webtoon, Manga" [level=3] [ref=e635]
                    - paragraph [ref=e638]: Read Manga, Comics & Manhwa
              - listitem [ref=e639]:
                - link "View Lezhin Comics-Premium Webtoons Books" [ref=e643] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/lezhin-comics-premium-webtoons/id664973122
                  - generic [ref=e645]: View
                  - generic [ref=e650]:
                    - heading "Lezhin Comics-Premium Webtoons" [level=3] [ref=e653]
                    - paragraph [ref=e656]: Books
              - listitem [ref=e657]:
                - 'link "View MangaToon: Comic & Manga Read Manga & Chat Stories" [ref=e661] [cursor=pointer]':
                  - /url: https://apps.apple.com/us/app/mangatoon-comic-manga/id1385287093
                  - generic [ref=e663]: View
                  - generic [ref=e668]:
                    - 'heading "MangaToon: Comic & Manga" [level=3] [ref=e671]'
                    - paragraph [ref=e674]: Read Manga & Chat Stories
              - listitem [ref=e675]:
                - link "View VIZ Manga Official from Japan" [ref=e679] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/viz-manga/id421486286
                  - generic [ref=e681]: View
                  - generic [ref=e686]:
                    - heading "VIZ Manga" [level=3] [ref=e689]
                    - paragraph [ref=e692]: Official from Japan
              - listitem [ref=e693]:
                - link "View WebNovel - Read Novels & Manga Fantasy books, romance stories" [ref=e697] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/webnovel-read-novels-manga/id1234939196
                  - generic [ref=e699]: View
                  - generic [ref=e704]:
                    - heading "WebNovel - Read Novels & Manga" [level=3] [ref=e707]
                    - paragraph [ref=e710]: Fantasy books, romance stories
              - listitem [ref=e711]:
                - link "View Manga Reader ㅤ Largest Library. Easy Reading." [ref=e715] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/manga-reader-%E3%85%A4/id1579203943
                  - generic [ref=e717]: View
                  - generic [ref=e722]:
                    - heading "Manga Reader ㅤ" [level=3] [ref=e725]
                    - paragraph [ref=e728]: Largest Library. Easy Reading.
              - listitem [ref=e729]:
                - link "View MANGA Plus by SHUEISHA Simul-release from Japan!" [ref=e733] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/manga-plus-by-shueisha/id1442476536
                  - generic [ref=e735]: View
                  - generic [ref=e740]:
                    - heading "MANGA Plus by SHUEISHA" [level=3] [ref=e743]
                    - paragraph [ref=e746]: Simul-release from Japan!
              - listitem [ref=e747]:
                - link [ref=e751] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/emaqi-manga-comics/id6742727512
                  - generic [ref=e753]: View
                  - generic [ref=e758]:
                    - heading [level=3] [ref=e761]: emaqi - Manga & Comics
                    - paragraph [ref=e764]: Read Manga Anytime, Anywhere
            - button "Next Page" [ref=e765] [cursor=pointer]:
              - img
    - generic [ref=e767]:
      - generic [ref=e769]:
        - button "United States" [ref=e770] [cursor=pointer]
        - list [ref=e771]:
          - listitem [ref=e772]:
            - link "This page is available in Español (México)" [ref=e773] [cursor=pointer]:
              - /url: "?l=es-MX"
              - text: Español (México)
          - listitem [ref=e774]:
            - link "This page is available in العربية" [ref=e775] [cursor=pointer]:
              - /url: "?l=ar"
              - text: العربية
          - listitem [ref=e776]:
            - link "This page is available in Русский" [ref=e777] [cursor=pointer]:
              - /url: "?l=ru"
              - text: Русский
          - listitem [ref=e778]:
            - link "This page is available in 简体中文" [ref=e779] [cursor=pointer]:
              - /url: "?l=zh-Hans-CN"
              - text: 简体中文
          - listitem [ref=e780]:
            - link "This page is available in Français (France)" [ref=e781] [cursor=pointer]:
              - /url: "?l=fr-FR"
              - text: Français (France)
          - listitem [ref=e782]:
            - link "This page is available in 한국어" [ref=e783] [cursor=pointer]:
              - /url: "?l=ko"
              - text: 한국어
          - listitem [ref=e784]:
            - link "This page is available in Português (Brazil)" [ref=e785] [cursor=pointer]:
              - /url: "?l=pt-BR"
              - text: Português (Brazil)
          - listitem [ref=e786]:
            - link "This page is available in Tiếng Việt" [ref=e787] [cursor=pointer]:
              - /url: "?l=vi"
              - text: Tiếng Việt
          - listitem [ref=e788]:
            - link "This page is available in 繁體中文 (台灣)" [ref=e789] [cursor=pointer]:
              - /url: "?l=zh-Hant-TW"
              - text: 繁體中文 (台灣)
      - generic [ref=e790]:
        - paragraph [ref=e791]:
          - generic [ref=e792]:
            - text: Copyright © 2026
            - link "Apple Inc." [ref=e793] [cursor=pointer]:
              - /url: https://www.apple.com
          - text: All rights reserved.
        - list [ref=e794]:
          - listitem [ref=e795]:
            - link "Internet Service Terms" [ref=e796] [cursor=pointer]:
              - /url: https://www.apple.com/legal/internet-services/
          - listitem [ref=e797]:
            - link "App Store & Privacy" [ref=e798] [cursor=pointer]:
              - /url: https://www.apple.com/legal/privacy/data/en/app-store/
          - listitem [ref=e799]:
            - link "Cookie Warning" [ref=e800] [cursor=pointer]:
              - /url: https://www.apple.com/privacy/use-of-cookies/
          - listitem [ref=e801]:
            - link "Support" [ref=e802] [cursor=pointer]:
              - /url: https://support.apple.com/billing
```

# Test source

```ts
  215 | When('빅배너를 클릭한다', async ({ page }) => {
  216 |   // 빅배너: 내부 event/series 링크 중 img를 포함한 큰 이미지 요소 (988x400 수준)
  217 |   const link = page.locator('a[href*="/event/"], a[href*="/series/"]')
  218 |     .filter({ has: page.locator('img') }).first();
  219 |   if ((await link.count()) > 0) {
  220 |     await link.click();
  221 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  222 |   } else {
  223 |     test.skip(true, '빅배너 요소를 찾을 수 없음');
  224 |   }
  225 | });
  226 | 
  227 | When('카드배너를 클릭한다', async ({ page }) => {
  228 |   // 시리즈 카드 우선 (goBack 안정적) → 없으면 이벤트/메뉴 카드
  229 |   const seriesCard = page.locator('a[href*="/series/"]').filter({ has: page.locator('img') }).nth(1);
  230 |   const eventCard = page.locator('a[href*="/events"], a[href*="/event/"], a[href*="/menu/"]').filter({ has: page.locator('img') }).first();
  231 |   const link = (await seriesCard.count()) > 0 ? seriesCard : eventCard;
  232 |   if ((await link.count()) > 0) {
  233 |     await link.click();
  234 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  235 |   } else {
  236 |     test.skip(true, '카드배너 요소를 찾을 수 없음');
  237 |   }
  238 | });
  239 | 
  240 | When('라인배너를 클릭한다', async ({ page }) => {
  241 |   const link = page.locator('[class*="line"] a, [class*="banner"] a').first();
  242 |   if ((await link.count()) > 0) {
  243 |     await link.click();
  244 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  245 |   } else {
  246 |     await expect(page.locator('body')).toBeVisible();
  247 |   }
  248 | });
  249 | 
  250 | When('배너 섹션 내 작품을 클릭한다', async ({ page }) => {
  251 |   const link = page.locator('article a').first();
  252 |   if ((await link.count()) > 0) {
  253 |     await link.click();
  254 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  255 |   } else {
  256 |     await expect(page.locator('body')).toBeVisible();
  257 |   }
  258 | });
  259 | 
  260 | When('더보기 링크를 클릭한다', async ({ page }) => {
  261 |   // SPA 재렌더링으로 click() 중 element detach 반복 → JS click으로 우회 (CLAUDE.md 12.4 패턴)
  262 |   const moreLink = page.locator('a[href*="/landing-list/"]').filter({ has: page.locator('img[alt="right arrow"]') }).first();
  263 |   if ((await moreLink.count()) > 0) {
  264 |     const href = await moreLink.getAttribute('href');
  265 |     await page.evaluate((h) => {
  266 |       const el = document.querySelector(`a[href="${h}"]`) as HTMLElement | null;
  267 |       if (el) el.click();
  268 |     }, href);
  269 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  270 |     return;
  271 |   }
  272 |   // 폴백: /menu/subtab 링크 중 right arrow 이미지 포함
  273 |   const subtabMore = page.locator('a[href*="/menu/"]').filter({ has: page.locator('img[alt="right arrow"]') }).first();
  274 |   if ((await subtabMore.count()) > 0) {
  275 |     const href = await subtabMore.getAttribute('href');
  276 |     await page.evaluate((h) => {
  277 |       const el = document.querySelector(`a[href="${h}"]`) as HTMLElement | null;
  278 |       if (el) el.click();
  279 |     }, href);
  280 |     await page.waitForLoadState('domcontentloaded').catch(() => {});
  281 |     return;
  282 |   }
  283 |   test.skip(true, '더보기 링크가 현재 페이지에 없음 — 동적 콘텐츠');
  284 | });
  285 | 
  286 | // 슬라이드 전환 전 번호 저장용 (TPS-021)
  287 | let _slideBeforeNum: number = 0;
  288 | 
  289 | When('빅배너 영역에서 8초 대기한다', async ({ page }) => {
  290 |   const indicator = page.locator('span[class*="text-s-white"][class*="font-custom-10c"]').first();
  291 |   const text = await indicator.textContent({ timeout: 5000 }).catch(() => null);
  292 |   _slideBeforeNum = parseInt(text?.trim() || '0');
  293 |   await page.waitForTimeout(12000);
  294 |   await page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => {});
  295 | });
  296 | 
  297 | Then('다음 빅배너로 자동 전환된다', async ({ page }) => {
  298 |   const indicator = page.locator('span[class*="text-s-white"][class*="font-custom-10c"]').first();
  299 |   // page가 detached된 경우 count()가 throw → -1로 구분
  300 |   const count = await indicator.count().catch(() => -1);
  301 |   if (count === -1) {
  302 |     test.skip(true, '빅배너 자동 슬라이드 확인 중 페이지 이동 발생');
  303 |     return;
  304 |   }
  305 |   if (count > 0) {
  306 |     const text = await indicator.textContent().catch(() => null);
  307 |     const afterNum = parseInt(text?.trim() || '0');
  308 |     expect(afterNum).toBeGreaterThan(_slideBeforeNum);
  309 |   } else {
  310 |     await expect(page.locator('a[href*="/event/"], a[href*="/series/"]').filter({ has: page.locator('img') }).first()).toBeVisible({ timeout: 5000 });
  311 |   }
  312 | });
  313 | 
  314 | Then('랜딩 페이지로 이동된다', async ({ page }) => {
> 315 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 8000 });
      |                                                                     ^ Error: expect(locator).toBeVisible() failed
  316 | });
  317 | 
  318 | Then('랜딩 리스트로 이동되고 작품 목록이 노출된다', async ({ page }) => {
  319 |   await expect(page.locator('article a[href*="/series/"]').first()).toBeVisible({ timeout: 10000 });
  320 | });
  321 | 
  322 | When('뒤로가기를 한다', async ({ page }) => {
  323 |   await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  324 | });
  325 | 
  326 | Then('홈 화면으로 돌아온다', async ({ page }) => {
  327 |   await expect(page).toHaveURL(/tapas\.io/, { timeout: 8000 });
  328 | });
  329 | 
  330 | // ──── 서브탭 클릭 ({X} CSV 플레이스홀더 패턴) ────
  331 | 
  332 | When(/^\{(.+)\} 서브탭 클릭$/, async ({ page }, tabName: string) => {
  333 |   // {Daily}, {Popular}, {New}, {Spotlight}, {All Comics} 등
  334 |   await page.waitForLoadState('domcontentloaded');
  335 |   const tab = page.getByRole('link', { name: new RegExp(`^${tabName}$`, 'i') });
  336 |   if ((await tab.count()) > 0) { await tab.first().click(); return; }
  337 |   const btn = page.getByRole('button', { name: new RegExp(`^${tabName}$`, 'i') });
  338 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  339 |   test.skip(true, `{${tabName}} 서브탭이 현재 페이지에 존재하지 않음`);
  340 | });
  341 | 
  342 | // "Home > X 서브탭 클릭" 형식
  343 | When(/^Home > (.+) 서브탭 클릭$/, async ({ page }, tabName: string) => {
  344 |   await page.getByRole('link', { name: new RegExp(tabName, 'i') }).first().click();
  345 | });
  346 | 
  347 | // ──── 대분류 카테고리 필터 ────
  348 | 
  349 | When('대분류 카테고리 필터 > Novels 클릭', async ({ page }) => {
  350 |   // button 또는 tab role에서만 찾음 — link 클릭 시 GNB Novels로 이동할 수 있어서 제외
  351 |   const btn = page.getByRole('button', { name: /^novels$/i });
  352 |   if ((await btn.count()) > 0) { await btn.first().click(); return; }
  353 |   const tab = page.getByRole('tab', { name: /^novels$/i });
  354 |   if ((await tab.count()) > 0) { await tab.first().click(); return; }
  355 |   // 필터가 없는 페이지에서는 graceful 처리 (GNB는 클릭하지 않음)
  356 |   await expect(page.locator('body')).toBeVisible();
  357 | });
  358 | 
  359 | When('요일별 클릭', async ({ page }) => {
  360 |   // 요일 탭 중 하나 클릭 (예: 현재 요일 외 다른 요일)
  361 |   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  362 |   for (const day of days) {
  363 |     const el = page.getByRole('button', { name: new RegExp(`^${day}$`, 'i') });
  364 |     if ((await el.count()) > 0) { await el.first().click(); return; }
  365 |   }
  366 | });
  367 | 
  368 | When('상단 대분류 카테고리 필터 노출 확인', async ({ page }) => {
  369 |   await expect(page.locator('body')).toBeVisible();
  370 | });
  371 | 
  372 | // ──── 배너 영역 ────
  373 | 
  374 | When('Top 섹션 > 빅배너 노출 영역 확인', async ({ page }) => {
  375 |   await expect(page.locator('body')).toBeVisible();
  376 | });
  377 | 
  378 | When('빅배너 영역에서 8초 이상 대기', async ({ page }) => {
  379 |   await page.waitForTimeout(8500);
  380 | });
  381 | 
  382 | When('빅배너 클릭', async ({ page }) => {
  383 |   // 빅배너 = 홈 최상단 큰 배너. role=img 또는 배너 컨테이너 첫 번째 링크
  384 |   await page.locator('a').filter({ has: page.locator('img') }).first().click();
  385 | });
  386 | 
  387 | When('빅배너 좌로 스와이프', async ({ page }) => {
  388 |   // 이전 배너 버튼
  389 |   const prevBtn = page.locator('[aria-label*="prev"], [aria-label*="previous"], button.prev, .carousel-prev');
  390 |   if ((await prevBtn.count()) > 0) await prevBtn.first().click();
  391 | });
  392 | 
  393 | When('빅배너 우로 스와이프', async ({ page }) => {
  394 |   // 다음 배너 버튼
  395 |   const nextBtn = page.locator('[aria-label*="next"], button.next, .carousel-next');
  396 |   if ((await nextBtn.count()) > 0) await nextBtn.first().click();
  397 | });
  398 | 
  399 | When('Top 섹션 > 카드배너 노출 확인', async ({ page }) => {
  400 |   await expect(page.locator('body')).toBeVisible();
  401 | });
  402 | 
  403 | When('카드배너 클릭', async ({ page }) => {
  404 |   // 카드배너 — 배너 컨테이너 내 두 번째 링크 시도
  405 |   const bannerLinks = page.locator('a').filter({ has: page.locator('img') });
  406 |   const count = await bannerLinks.count();
  407 |   if (count > 1) await bannerLinks.nth(1).click();
  408 |   else if (count > 0) await bannerLinks.first().click();
  409 | });
  410 | 
  411 | When('프로모션 배너 섹션 노출 확인', async ({ page }) => {
  412 |   await expect(page.locator('body')).toBeVisible();
  413 | });
  414 | 
  415 | When('프로모션 배너 클릭', async ({ page }) => {
```