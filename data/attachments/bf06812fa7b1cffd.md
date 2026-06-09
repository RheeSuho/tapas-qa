# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ../.features-gen/features/10-뷰어-(Novel)/진입.feature.spec.js >> 진입 >> [TPS-144] Home > Novels > Daily 서브탭 진입 + 첫 번째 작품 클릭
- Location: .features-gen/features/10-뷰어-(Novel)/진입.feature.spec.js:6:7

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
        - link "117" [ref=e31] [cursor=pointer]:
          - /url: /inbox/gift
          - generic [ref=e32]: "117"
        - img [ref=e36] [cursor=pointer]
      - link "Publish" [ref=e39] [cursor=pointer]:
        - /url: https://www.creators.tapas.io/
  - generic [ref=e41]:
    - generic [ref=e45]:
      - generic [ref=e46]:
        - generic [ref=e47]:
          - paragraph [ref=e48]: "Chapter 7: Ianthe’s Blessing"
          - paragraph [ref=e49]: Oct 15, 2024
        - article [ref=e50]:
          - generic [ref=e52]:
            - paragraph [ref=e53]: Lucretia didn’t have time to mull over the various possible reasons Ianthe was in a good mood; the priestess had moved on to the final portion of the ritual. It was the part many mortals had slowly stopped including, since it was never answered anymore—Ianthe’s part.
            - paragraph
            - paragraph [ref=e54]: “I now present the offering for Ianthe, the goddess in charge of blessing the couple by tying their fates together to form a solid bond.” The priestess carefully unfolded two small tapestries. “We present to Ianthe the family tapestries that represent the bride and groom’s ancestors and depict their past achievements.”
            - paragraph
            - paragraph [ref=e55]: The priestess held the cloths up separately as she referred to them, and individually pointed out a few of the more important symbols each contained. As she did this, Lucretia thought she noticed Freyr’s small, moist eyes clearing up as his focus seemed to land on his own family's tapestry. She wondered if the colors had caught his eye as it swayed with the movement of the priestess holding it up. Lucretia smiled slightly at Freyr’s innocent curiosity as the priestess continued the ritual.
            - paragraph
            - paragraph [ref=e56]: Having finished pointing out different significant images in the two pieces of cloth, individually, the priestess moved on to explaining the symbolism of both of the tapestries as a whole. “The tapestries show us how Ianthe weaved the couple’s destinies together through the strings of fate she first weaved for their ancestors. We offer up these tapestries to show Ianthe that we are grateful for her hand in bringing the couple together in the present.”
            - paragraph
            - paragraph [ref=e57]: She moved her hands to hold the two short pieces of rope attached to the upper corners of the tapestries. “We now tie the two together so that the bond between the bride and groom will last for as long as the knot we tie lasts.” Lucretia watched on as the priestess looped the ropes together and tied them so that there was little to no space between the two tapestries.
            - paragraph
            - paragraph [ref=e58]: "Once the priestess was content with how tight the knot was, she turned to a small wooden box that was placed in the center of the altar. On the lid was carved the symbol of Ianthe: two spools of thread that were tied together. The box would contain two identical trinkets that the couple, or their families, would use to swear an oath to Ianthe. Both the bride and groom would have to carry their respective trinket on their own person until their marriage ceremony, so the item was typically a piece of jewelry—but Lucretia had seen some creative engagement trinkets and was a bit curious about what had been decided upon today."
            - paragraph
            - paragraph [ref=e59]: As the priestess carefully lifted the lid, Lucretia was actually a bit surprised at what she saw within the box, because the trinkets were actually on the basic side of things. The priestess pulled out two simple gold rings from the wooden box. They weren’t decorated with any gems or designs, and they didn’t even have any sort of magic or blessings embedded into them—not even any that would help the rings resize to the wearer.
            - paragraph
            - paragraph [ref=e60]: Considering the size of the rings, Lucretia hoped that if they decided to fashion one as a necklace for Freyr, they would at least use a chain or a ribbon embedded with magic to prevent the necklace from coming undone. If the parents were going to skimp on the actual trinket, they had better not skimp out on making sure it didn’t get lost—especially considering the bloodline Freyr came from.
            - paragraph
            - paragraph [ref=e61]: Albeit, as the goddess of wealth, Lucretia might have been a bit biased with how sour she was about it, but she could only watch on from her seat, since her portion of the ritual had already ended.
            - paragraph
            - paragraph [ref=e62]: The priestess brought the rings over to the toddlers and slipped them on their left pinkie fingers, making sure to hold them there so they wouldn’t slip off while she recited the words of the ritual. “We give these gold rings as a sign of the couple’s oath to uphold their bond for as long as they possess their respective rings. If you should like to accept their oath and impart your blessings upon their union, let it be known.” This time the priestess didn’t look up towards the floating moons; it was almost as if she was afraid to actually get a response from the goddess. It wouldn’t change Lucretia’s older sister’s choice, though.
            - paragraph
            - paragraph [ref=e63]:
              - generic [ref=e64]: All other eyes, both mortal and otherwise, were on the floating wooden moon that was lit with pale purple runes. It was almost like everyone was holding their breath on what choice Ianthe would make—and more importantly, what her choice would mean for all who were present. If Ianthe blessed the union, then the couple would be one of the first to actually receive blessings from all three of the triplet deities and it would put all eyes on the toddlers as they grew up. If she didn’t accept—even after she emerged from her seclusion to attend the ceremony—then it could give the impression that the bond was cursed or too weak and had no future. If the bond was doomed to fail it could also mean the mortal’s political reasoning behind the arranged marriage would be doomed to fail.
            - paragraph
            - paragraph [ref=e65]: It didn’t take long for Ianthe to make her decision. Lucretia watched as her sister gracefully stood up and floated down to where the bride and groom sat—but Lucretia couldn’t have predicted what her sister was about to do next.
            - paragraph
            - paragraph [ref=e66]: Ianthe hovered just above the bride and cupped his face. “My darling Freyr. . .” Lucretia was stunned as she watched her older sister’s whole body suddenly relax completely. She then watched Ianthe lean closer and whisper something into the toddler’s ear. After a moment, Ianthe pulled back a bit, then kissed his forehead. “Your fate, dear child, decrees that you shall be a blessed mortal, so I offer upon you my blessings and mark you as one of my Favored Ones. With the help of my mother’s staff, I hope you will use my blessings wisely.”
            - paragraph
            - paragraph [ref=e67]: The priestess sharply drew her breath as dark purple lines swirled outward from where Ianthe’s lips touched the child’s skin, and Freyr’s deep blue eyes briefly changed to a glowing purple shade before returning to their original sapphire hue. During the rest of the ritual, she had done a decent job of regaining her composure when the unexpected happened, yet it seemed witnessing Ianthe claiming her first Favored One in many centuries was what broke her.
            - paragraph
            - paragraph [ref=e68]: "The priestess pulled away her hands and stepped back in what appeared to be shock, causing Freyr’s mother to step forward worriedly. At her troubled questioning, the priestess shakenly opened her mouth and explained in one sentence: “The bride has been chosen by Ianthe as her Favored One.”"
            - paragraph
            - paragraph [ref=e69]:
              - generic [ref=e70]:
                - text: The chaos that broke out among the mortals was immense, but it was nothing compared to the chaos that broke out among the deities, who were
                - generic [ref=e71]: all
                - text: present to witness the moment Ianthe finally chose a new Favored One—yet Ianthe was paying no mind to any of the mayhem she had just caused. She was just continuing her role in the engagement ceremony. Lucretia sat entranced, unable to do anything but watch her sister.
            - paragraph
            - paragraph [ref=e72]: Ianthe held up the left hands of the two toddlers—which the priestess had dropped out of shock. She then addressed her new Favored One—instead of addressing the shocked chaos above her—as if the toddler would be able to hear or understand anything she was saying. “Since I showed up, I should also bless the bond you have with this child. I don’t want to be outdone by my siblings during the engagement ceremony of my Favored One, after all. I’ll even do you a favor so you don’t lose that clunky ring.” Lucretia thought she saw her sister smirking as she tapped the ring on Freyr’s pinkie finger. As Ianthe lifted her finger from the gold ring, it turned into a piece of thread that was partially wound around the child’s pinkie. The end that was wound around his finger then dissolved into his skin, leaving behind a faint circle around the base of his left pinkie finger. The other end of the thread was attached to the end of Ianthe’s finger as she drew it through the air and over to where Freyr’s groom sat.
            - paragraph
            - paragraph [ref=e73]: Although the heir of the Silvius family was certainly unable to hear her, Lucretia still heard Ianthe speak to Aleksei as well—regardless of his ability to hear her. “As long as you treat my precious Favored One right, you shall also live a blessed life. Heed my silent warning though. . . Should any harm fall upon my chosen mortal—or if you betray him—this blessing I bestow upon your union shall turn into a curse that will make your life worse than if you experienced a simple death.” Ianthe, having seemed to have said her piece, tapped the groom’s ring, at which point it, too, turned into a piece of thread that wound around his pinkie before fading into an identical mark of his fiancee’s. The section of the thread that was connecting the two children vanished as soon as the mark on Aleksei’s finger appeared.
            - paragraph
            - paragraph [ref=e74]:
              - generic [ref=e75]: Ianthe then traced runic symbols on the back of their hands, just like Sláine and Lucretia had done. This time the symbols glowed purple before disappearing. Content that all of her desired blessings had been properly bestowed, Ianthe went over to the altar and lit up her symbol—just as her siblings had done—signaling to the mortals that she had also given her blessings to the union.
            - paragraph
            - paragraph [ref=e76]: The priestess didn’t seem to notice the change of the altar for quite a bit of time, as she was still staring at the thin swirls of purple on the bride’s forehead. Once Freyr was old enough to gain control of his magic, he would be able to hide the mark, but the child was still only two years old, so it would be on display for everyone to see for several more years.
            - paragraph
            - paragraph [ref=e77]: Lucretia knew that it should have been almost impossible for a mere toddler, as young as Freyr, to be able to withstand the weight of magic being a Favored One caused to a mortal’s body—especially the weight of a deity as strong as Ianthe. Considering that Ianthe mentioned their mother’s staff, it had to be the reason Ianthe had been able to claim Freyr so soon. Lucretia wondered if it was just a coincidence that the staff had resurfaced, or if Ianthe had a hand in its sudden appearance. Lucretia couldn’t think of what reason Ianthe would have to orchestrate such a thing, though. Ianthe had been so adamant against having a Favored Mortal again, after all. Lucretia couldn’t satiate her curiosity, though—due to the deferential relationship she had with her sister.
            - paragraph
            - paragraph [ref=e78]:
              - generic [ref=e79]: The priestess had finally noticed the third glowing symbol and seemed to want to just wrap up the unprecedented engagement ceremony. She quickly—and anxiously—thanked Ianthe for blessing the union, then ended the ritual before hurriedly rushing off to the temple’s inner chambers. The priestess wasn’t the only one who quickly escaped from the potential onslaught of questioning though. While the priestess was avoiding the mortals' inquisitive behavior, Ianthe seemed to want to avoid the questioning behavior of an entire pantheon of deities, who had all attended the ceremony.
            - paragraph
            - paragraph [ref=e80]:
              - generic [ref=e81]: As soon as the ritual ended, Lucretia watched her sister mount her giant raven, and then quickly fly away. All before any of the gods or goddesses could calm down enough— from their shock at everything they had witnessed throughout the entire ceremony— to actually approach the most surprising aspect, Ianthe.
      - generic [ref=e82]:
        - link "support banner" [ref=e84] [cursor=pointer]:
          - /url: /RavenRose124/support
          - img "support banner" [ref=e85]
        - generic [ref=e86]:
          - link "RavenRose124" [ref=e88] [cursor=pointer]:
            - /url: /RavenRose124
            - img "RavenRose124" [ref=e89]
          - generic [ref=e91]:
            - generic [ref=e92]:
              - link "RavenRose124" [ref=e93] [cursor=pointer]:
                - /url: /RavenRose124
              - paragraph [ref=e94]: Creator
            - paragraph
        - generic [ref=e95]:
          - generic [ref=e96]:
            - paragraph [ref=e97]: Comments (8)
            - generic [ref=e98] [cursor=pointer]: See all
          - generic [ref=e99]:
            - link "Draco" [ref=e101] [cursor=pointer]:
              - /url: /dracoinduperator
              - img "Draco" [ref=e102]
            - generic [ref=e104]:
              - generic [ref=e105]:
                - link "Draco" [ref=e106] [cursor=pointer]:
                  - /url: /dracoinduperator
                - paragraph [ref=e107]: Top comment
              - paragraph [ref=e109]: I love how even the deities are amazed and blown away by what's going on.
              - paragraph [ref=e114] [cursor=pointer]: "58"
          - generic [ref=e115] [cursor=pointer]: Add a comment
        - generic [ref=e117]:
          - paragraph [ref=e119]: Recommendation for you
          - list [ref=e120]:
            - listitem [ref=e121]:
              - link "Debut or Die! 3Hr Recommendation Debut or Die! Drama 178.2k likes" [ref=e122] [cursor=pointer]:
                - /url: /series/debut-or-die-novel
                - generic [ref=e123]:
                  - img "Debut or Die!" [ref=e124]
                  - generic [ref=e129]: 3Hr
                - generic [ref=e130]:
                  - paragraph [ref=e131]: Recommendation
                  - paragraph [ref=e132]: Debut or Die!
                  - paragraph [ref=e133]:
                    - generic [ref=e134]: Drama
                    - generic [ref=e136]: 178.2k likes
            - listitem [ref=e137]:
              - link "The Villainess' Mandate 3Hr Recommendation The Villainess' Mandate Romance Fantasy 497 likes" [ref=e138] [cursor=pointer]:
                - /url: /series/the-villainess-mandate-novel
                - generic [ref=e139]:
                  - img "The Villainess' Mandate" [ref=e140]
                  - generic [ref=e145]: 3Hr
                - generic [ref=e146]:
                  - paragraph [ref=e147]: Recommendation
                  - paragraph [ref=e148]: The Villainess' Mandate
                  - paragraph [ref=e149]:
                    - generic [ref=e150]: Romance Fantasy
                    - generic [ref=e152]: 497 likes
            - listitem [ref=e153]:
              - link "A Scent Not Mine 3Hr Recommendation A Scent Not Mine BL 16.7k likes" [ref=e154] [cursor=pointer]:
                - /url: /series/a-scent-not-mine-novel
                - generic [ref=e155]:
                  - img "A Scent Not Mine" [ref=e156]
                  - generic [ref=e161]: 3Hr
                - generic [ref=e162]:
                  - paragraph [ref=e163]: Recommendation
                  - paragraph [ref=e164]: A Scent Not Mine
                  - paragraph [ref=e165]:
                    - generic [ref=e166]: BL
                    - generic [ref=e168]: 16.7k likes
            - listitem [ref=e169]:
              - link "The Perks of Being an S-Class Heroine 3Hr Recommendation The Perks of Being an S-Class Heroine Romance Fantasy 108.8k likes" [ref=e170] [cursor=pointer]:
                - /url: /series/the-perks-of-being-an-s-class-heroine-novel
                - generic [ref=e171]:
                  - img "The Perks of Being an S-Class Heroine" [ref=e172]
                  - generic [ref=e177]: 3Hr
                - generic [ref=e178]:
                  - paragraph [ref=e179]: Recommendation
                  - paragraph [ref=e180]: The Perks of Being an S-Class Heroine
                  - paragraph [ref=e181]:
                    - generic [ref=e182]: Romance Fantasy
                    - generic [ref=e184]: 108.8k likes
            - listitem [ref=e185]:
              - link "The Vampire's Last Omega 3Hr Recommendation The Vampire's Last Omega BL 114.5k likes" [ref=e186] [cursor=pointer]:
                - /url: /series/The-Vampires-Last-Omega
                - generic [ref=e187]:
                  - img "The Vampire's Last Omega" [ref=e188]
                  - generic [ref=e193]: 3Hr
                - generic [ref=e194]:
                  - paragraph [ref=e195]: Recommendation
                  - paragraph [ref=e196]: The Vampire's Last Omega
                  - paragraph [ref=e197]:
                    - generic [ref=e198]: BL
                    - generic [ref=e200]: 114.5k likes
            - listitem [ref=e201]:
              - link "I Shall Master This Family 3Hr Recommendation I Shall Master This Family Romance Fantasy 64.1k likes" [ref=e202] [cursor=pointer]:
                - /url: /series/i-shall-master-this-family-novel
                - generic [ref=e203]:
                  - img "I Shall Master This Family" [ref=e204]
                  - generic [ref=e209]: 3Hr
                - generic [ref=e210]:
                  - paragraph [ref=e211]: Recommendation
                  - paragraph [ref=e212]: I Shall Master This Family
                  - paragraph [ref=e213]:
                    - generic [ref=e214]: Romance Fantasy
                    - generic [ref=e216]: 64.1k likes
            - listitem [ref=e217]:
              - generic [ref=e218] [cursor=pointer]:
                - img "feeling lucky" [ref=e220]
                - generic [ref=e222]:
                  - paragraph [ref=e223]: Feeling lucky
                  - paragraph [ref=e224]: Random series you may like
    - generic [ref=e225]:
      - generic [ref=e230]:
        - generic [ref=e231]:
          - generic [ref=e233] [cursor=pointer]:
            - img "The Wrong Twin" [ref=e234]
            - generic [ref=e238]: 3Hr
          - generic [ref=e240]:
            - text: The Wrong Twin
            - paragraph [ref=e241]:
              - generic [ref=e242]: 200.8k views
              - generic [ref=e244]: 2.6k subscribers
        - generic [ref=e248] [cursor=pointer]: Read 3Hr WUF episode now!
        - generic [ref=e250] [cursor=pointer]:
          - text: "Freyr and Aleksei were bound together as toddlers by the Triplet Deities during an engagement ritual. The arranged marriage, which was supposed to bring prosperity to both of their kingdoms, had one problem: the one who was supposed to be engaged was Freyr’s twin sister, Freyja. Freyr now must keep up the ruse that he is “she”. Secrets and consequences unfold as the accidentally engaged couple learn various truths that neither were fully prepared for."
          - generic [ref=e251]: Read more
        - generic [ref=e253] [cursor=pointer]: Subscribe
      - generic [ref=e254]:
        - paragraph [ref=e256]: 212 episodes
        - list [ref=e261]:
          - listitem [ref=e262] [cursor=pointer]:
            - 'img "Chapter 1: The Maid&rsquo;s Mistake" [ref=e264]'
            - generic [ref=e266]:
              - generic [ref=e267]: Episode 1
              - generic [ref=e268]: "Chapter 1: The Maid’s Mistake"
          - listitem [ref=e269] [cursor=pointer]:
            - 'img "Chapter 2: Ivithia&rsquo;s Frustration" [ref=e271]'
            - generic [ref=e273]:
              - generic [ref=e274]: Episode 2
              - generic [ref=e275]: "Chapter 2: Ivithia’s Frustration"
          - listitem [ref=e276] [cursor=pointer]:
            - 'img "Chapter 3: Ivithia&rsquo;s Relief" [ref=e278]'
            - generic [ref=e280]:
              - generic [ref=e281]: Episode 3
              - generic [ref=e282]: "Chapter 3: Ivithia’s Relief"
          - listitem [ref=e283] [cursor=pointer]:
            - 'img "Chapter 4: The Deities Gather" [ref=e285]'
            - generic [ref=e287]:
              - generic [ref=e288]: Episode 4
              - generic [ref=e289]: "Chapter 4: The Deities Gather"
          - listitem [ref=e290] [cursor=pointer]:
            - 'img "Chapter 5: Sl&aacute;ine&rsquo;s Blessing" [ref=e292]'
            - generic [ref=e294]:
              - generic [ref=e295]: Episode 5
              - generic [ref=e296]: "Chapter 5: Sláine’s Blessing"
          - listitem [ref=e297] [cursor=pointer]:
            - 'img "Chapter 6: Lucretia&rsquo;s Blessing" [ref=e299]'
            - generic [ref=e301]:
              - generic [ref=e302]: Episode 6
              - generic [ref=e303]: "Chapter 6: Lucretia’s Blessing"
          - listitem [ref=e304] [cursor=pointer]:
            - 'img "Chapter 7: Ianthe&rsquo;s Blessing" [ref=e306]'
            - generic [ref=e308]:
              - generic [ref=e309]: Episode 7
              - generic [ref=e310]: "Chapter 7: Ianthe’s Blessing"
          - listitem [ref=e311] [cursor=pointer]:
            - 'img "Chapter 8: Freyr&rsquo;s Situation" [ref=e313]'
            - generic [ref=e315]:
              - generic [ref=e316]: Episode 8
              - generic [ref=e317]: "Chapter 8: Freyr’s Situation"
          - listitem [ref=e318] [cursor=pointer]:
            - 'img "Chapter 9: An Undercover Journey Begins" [ref=e320]'
            - generic [ref=e322]:
              - generic [ref=e323]: Episode 9
              - generic [ref=e324]: "Chapter 9: An Undercover Journey Begins"
          - listitem [ref=e325] [cursor=pointer]:
            - 'img "Chapter 10: A Knight&rsquo;s Arrival" [ref=e327]'
            - generic [ref=e329]:
              - generic [ref=e330]: Episode 10
              - generic [ref=e331]: "Chapter 10: A Knight’s Arrival"
          - listitem [ref=e332] [cursor=pointer]:
            - 'img "Chapter 11: A &ldquo;Princess&rdquo; Meets a Foreign Envoy" [ref=e334]'
            - generic [ref=e337]:
              - generic [ref=e338]: Episode 11
              - generic [ref=e339]: "Chapter 11: A “Princess” Meets a Foreign Envoy"
              - generic [ref=e343]: WUF
          - listitem [ref=e344] [cursor=pointer]:
            - 'img "Chapter 12: Adding to the Political Dance of Words" [ref=e346]'
            - generic [ref=e349]:
              - generic [ref=e350]: Episode 12
              - generic [ref=e351]: "Chapter 12: Adding to the Political Dance of Words"
              - generic [ref=e355]: WUF
          - listitem [ref=e356] [cursor=pointer]:
            - 'img "Chapter 13: Attention to Character" [ref=e358]'
            - generic [ref=e361]:
              - generic [ref=e362]: Episode 13
              - generic [ref=e363]: "Chapter 13: Attention to Character"
              - generic [ref=e367]: WUF
          - listitem [ref=e368] [cursor=pointer]:
            - 'img "Chapter 14: A Socially Awkward Royal" [ref=e370]'
            - generic [ref=e373]:
              - generic [ref=e374]: Episode 14
              - generic [ref=e375]: "Chapter 14: A Socially Awkward Royal"
              - generic [ref=e379]: WUF
          - listitem [ref=e380] [cursor=pointer]:
            - 'img "Chapter 15: A Silent Meal" [ref=e382]'
            - generic [ref=e385]:
              - generic [ref=e386]: Episode 15
              - generic [ref=e387]: "Chapter 15: A Silent Meal"
              - generic [ref=e391]: WUF
          - listitem [ref=e392] [cursor=pointer]:
            - 'img "Chapter 16: Altered Daily Routine" [ref=e394]'
            - generic [ref=e397]:
              - generic [ref=e398]: Episode 16
              - generic [ref=e399]: "Chapter 16: Altered Daily Routine"
              - generic [ref=e403]: WUF
          - listitem [ref=e404] [cursor=pointer]:
            - 'img "Chapter 17: A Thoughtful Knight" [ref=e406]'
            - generic [ref=e409]:
              - generic [ref=e410]: Episode 17
              - generic [ref=e411]: "Chapter 17: A Thoughtful Knight"
              - generic [ref=e415]: WUF
          - listitem [ref=e416] [cursor=pointer]:
            - 'img "Chapter 18: Anxiety Overwhelms" [ref=e418]'
            - generic [ref=e422]:
              - generic [ref=e423]: Episode 18
              - generic [ref=e424]: "Chapter 18: Anxiety Overwhelms"
              - generic [ref=e428]: WUF
          - listitem [ref=e429] [cursor=pointer]:
            - 'img "Chapter 19: Analytical Knight" [ref=e431]'
            - generic [ref=e434]:
              - generic [ref=e435]: Episode 19
              - generic [ref=e436]: "Chapter 19: Analytical Knight"
              - generic [ref=e440]: WUF
          - listitem [ref=e441] [cursor=pointer]:
            - 'img "Chapter 20: A Protective Family" [ref=e443]'
            - generic [ref=e446]:
              - generic [ref=e447]: Episode 20
              - generic [ref=e448]: "Chapter 20: A Protective Family"
              - generic [ref=e452]: WUF
    - generic [ref=e454]:
      - generic [ref=e455]:
        - generic [ref=e456]:
          - 'img "Chapter 7: Ianthe’s Blessing" [ref=e457]'
          - generic [ref=e458]:
            - paragraph [ref=e459]: "Chapter 7: Ianthe’s Blessing"
            - paragraph [ref=e460]:
              - generic [ref=e461]: 6.1k views
              - generic [ref=e463]: 227 likes
              - generic [ref=e465]: 8 comments
        - separator [ref=e466]
        - generic [ref=e467]:
          - generic [ref=e471] [cursor=pointer]: Style
          - generic [ref=e475] [cursor=pointer]: More
      - generic [ref=e477]:
        - generic [ref=e481] [cursor=pointer]: Like
        - generic [ref=e482] [cursor=pointer]:
          - generic [ref=e484]: "85"
          - generic [ref=e486]: Support
      - generic [ref=e487]:
        - generic [ref=e488]:
          - generic [ref=e493] [cursor=pointer]: List
          - generic [ref=e498] [cursor=pointer]: Comment
        - separator [ref=e499]
        - generic [ref=e500]:
          - generic [ref=e504] [cursor=pointer]: Prev
          - generic [ref=e508] [cursor=pointer]: Next
        - separator [ref=e509]
        - generic [ref=e514] [cursor=pointer]: Full
```

# Test source

```ts
  839 |   const img = page.locator('img.content__img').first();
  840 |   const isImg = await img.isVisible().catch(() => false);
  841 |   if (isImg) { await expect(img).toBeVisible(); return; }
  842 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
  843 | });
  844 | 
  845 | Then('뷰어 최상단까지 이동이 가능하다.', async ({ page }) => {
  846 |   const content = page.locator('.ep-epub-content').first();
  847 |   const isContent = await content.isVisible().catch(() => false);
  848 |   if (isContent) { await expect(content).toBeVisible(); return; }
  849 |   const img = page.locator('img.content__img').first();
  850 |   const isImg = await img.isVisible().catch(() => false);
  851 |   if (isImg) { await expect(img).toBeVisible(); return; }
  852 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
  853 | });
  854 | 
  855 | Then(/^(대여 이용권|선물 이용권|기다무 이용권).+이동된다\.$/, async ({ page }) => {
  856 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
  857 | });
  858 | 
  859 | Then(/^(팝업은 유지되며|잉크샵).+$/, async ({ page }) => {
  860 |   await expect(page.locator('.js-edit-menu, a.item.js-tier-btn').first()).toBeVisible({ timeout: 5000 });
  861 | });
  862 | 
  863 | Then('작가 이미지, 작가의 말이 노출된다.', async ({ page }) => {
  864 |   const authorSection = page.locator('.viewer-section--episode').first();
  865 |   const isVisible = await authorSection.isVisible().catch(() => false);
  866 |   if (isVisible) { await expect(authorSection).toBeVisible(); } else { await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn'); }
  867 | });
  868 | 
  869 | // 기다무/대여/선물 이용권 있음 — /^(보유 이용권|기다무 이용권|대여 이용권|선물 이용권).+$/ 에서 처리
  870 | 
  871 | // 기다무/대여/선물 이용권 차감 결과 — /^(대여 이용권|선물 이용권|기다무 이용권).+이동된다\.$/ 에서 처리
  872 | 
  873 | // ──── 회차 이동 / 잠금 해제 시나리오 ────
  874 | 
  875 | // Episode 2 기준: prev=EP1, next=EP3 → 이전/다음 이동 테스트 모두 가능
  876 | Given(/^(이전회차|다음회차) : (기다무 회차|유료회차)$/, async ({ page }) => {
  877 |   await page.goto(TEST_DATA.episode.comicEp2);
  878 | });
  879 | 
  880 | // 첫 번째 작가 서포트 활성화 — /^(광고가|이벤트 배너가|작가의 말|구독 상태|PCW only|첫 번째 작가).+$/ 에서 처리
  881 | 
  882 | // 이전/다음회차 When/Then steps — 각 기능은 위 파일의 다른 step에서 이미 처리됨
  883 | 
  884 | Then('우측 회차 리스트 접히며 뷰어 전체 화면으로 노출된다.', async ({ page }) => {
  885 |   // 리스트 패널이 닫힌 상태 확인 (side-section--closed)
  886 |   const panel = page.locator('.side-section.js-series-section');
  887 |   const isClosed = await panel.evaluate(el => el.classList.contains('side-section--closed')).catch(() => false);
  888 |   if (isClosed) { await expect(panel).toBeVisible(); return; }
  889 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
  890 | });
  891 | 
  892 | Then('기다무 이용권 사용 안내 팝업이 노출된다.', async ({ page }) => {
  893 |   await expect(page.locator('[role="dialog"]').first()).toBeVisible({ timeout: 5000 });
  894 | });
  895 | 
  896 | Then('회차가 구매되며 이전회차로 이동된다.', async ({ page }) => {
  897 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
  898 | });
  899 | 
  900 | // ──── 10-뷰어-(Novel) C수준 assertion 신규 step ────
  901 | 
  902 | Then('소설 원고 영역이 노출된다.', async ({ page }) => {
  903 |   // .ep-epub-content: 소설 원고 본문 영역
  904 |   const content = page.locator('.ep-epub-content').first();
  905 |   const isContent = await content.isVisible().catch(() => false);
  906 |   if (isContent) { await expect(content).toBeVisible(); return; }
  907 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-list-btn');
  908 | });
  909 | 
  910 | Then('Like, List, Comment 버튼이 노출된다.', async ({ page }) => {
  911 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
  912 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-list-btn');
  913 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-comment-btn');
  914 | });
  915 | 
  916 | Then('우측 회차 패널이 닫힌다.', async ({ page }) => {
  917 |   // .side-section.js-series-section: 우측 회차 패널 (side-section--closed 클래스로 닫힘 확인)
  918 |   const panel = page.locator('.side-section.js-series-section');
  919 |   const isClosed = await panel.evaluate(el => el.classList.contains('side-section--closed')).catch(() => true);
  920 |   if (isClosed) {
  921 |     await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
  922 |   } else {
  923 |     await expect(panel).toBeVisible();
  924 |   }
  925 | });
  926 | 
  927 | Then('Style 팝업이 노출된다.', async ({ page }) => {
  928 |   // .js-edit-menu: 소설 뷰어 Style(AA) 팝업
  929 |   const popup = page.locator('.js-edit-menu').first();
  930 |   const isPopup = await popup.isVisible().catch(() => false);
  931 |   await expect(popup).toBeVisible({ timeout: 5000 });
  932 | });
  933 | 
  934 | Then('Style 팝업이 유지된다.', async ({ page }) => {
  935 |   await expect(page.locator('.js-edit-menu').first()).toBeVisible({ timeout: 5000 });
  936 | });
  937 | 
  938 | Then('소설 목록이 노출된다.', async ({ page }) => {
> 939 |   await expect(page.locator('a.episode-item').first()).toBeVisible({ timeout: 5000 });
      |                                                        ^ Error: expect(locator).toBeVisible() failed
  940 | });
  941 | 
  942 | Then('소설 원고 하단 영역이 노출된다.', async ({ page }) => {
  943 |   const content = page.locator('.ep-epub-content').first();
  944 |   const isContent = await content.isVisible().catch(() => false);
  945 |   if (isContent) { await expect(content).toBeVisible(); return; }
  946 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
  947 | });
  948 | 
  949 | Then('소설 원고 상단 영역이 노출된다.', async ({ page }) => {
  950 |   const content = page.locator('.ep-epub-content').first();
  951 |   const isContent = await content.isVisible().catch(() => false);
  952 |   if (isContent) { await expect(content).toBeVisible(); return; }
  953 |   await assertToolbarBtn(page, 'a.toolbar-btn.js-episode-like-btn');
  954 | });
  955 | 
```