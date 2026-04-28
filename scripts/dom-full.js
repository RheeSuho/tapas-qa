const { chromium } = require('@playwright/test');
const path = require('path');
const AUTH_FILE = path.join(process.cwd(), '.auth/user.json');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: AUTH_FILE, viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  async function inspect(label, url) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(1500);
    } catch(e) { console.log(`[${label}] goto failed: ${e.message}`); return; }

    const info = await page.evaluate(() => {
      // 현재 URL
      const currentUrl = location.href;

      // 서브탭 링크 (menu URL 포함)
      const subtabLinks = Array.from(document.querySelectorAll('a'))
        .filter(a => a.href.includes('/menu/') && a.href.includes('/subtab/'))
        .map(a => ({ text: a.textContent?.trim().slice(0,25) || '(no text)', href: a.href, class: a.className.slice(0,60) }))
        .filter((v,i,arr) => arr.findIndex(x=>x.href===v.href)===i) // dedupe
        .slice(0, 15);

      // 카테고리/필터 링크 (category= 파라미터)
      const categoryLinks = Array.from(document.querySelectorAll('a'))
        .filter(a => a.href.includes('category=') || a.href.includes('daily_type='))
        .map(a => ({ text: a.textContent?.trim().slice(0,20), href: a.href }))
        .filter((v,i,arr) => arr.findIndex(x=>x.href===v.href)===i)
        .slice(0, 12);

      // 헤딩
      const headings = Array.from(document.querySelectorAll('h1,h2,h3'))
        .map(el => el.textContent?.trim().slice(0,50)).filter(Boolean).slice(0,8);

      // 카드/작품 아이템 구조 (첫 번째 카드의 클래스와 내부 구조)
      const cardSample = (() => {
        const containers = ['[class*="pc-card-list"]', '[class*="card-list"]', '[class*="series-list"]'];
        for (const sel of containers) {
          const container = document.querySelector(sel);
          if (container && container.children.length > 0) {
            const card = container.children[0];
            const img = card.querySelector('img');
            const link = card.querySelector('a');
            const badge = card.querySelector('[class*="badge"], [class*="tag"], [class*="genre"]');
            return {
              containerClass: container.className.slice(0,60),
              cardTag: card.tagName,
              cardClass: card.className.slice(0,80),
              cardCount: container.children.length,
              hasImg: !!img,
              imgAlt: img?.alt?.slice(0,30) || '',
              linkHref: link?.href?.slice(0,60) || '',
              badgeText: badge?.textContent?.trim().slice(0,20) || '',
              badgeClass: badge?.className?.slice(0,60) || '',
            };
          }
        }
        return null;
      })();

      // GNB 숏컷 요소 (Library, Inbox, Publish 등)
      const shortcuts = Array.from(document.querySelectorAll('header a, header button, nav a, nav button'))
        .map(el => ({ text: el.textContent?.trim().slice(0,20), href: el.href || '', class: el.className.slice(0,50) }))
        .filter(el => el.text)
        .slice(0, 10);

      // 장르 필터 버튼
      const genreFilter = Array.from(document.querySelectorAll('button'))
        .filter(b => /genre|all|sort/i.test(b.textContent || ''))
        .map(b => ({ text: b.textContent?.trim().slice(0,20), class: b.className.slice(0,60) }))
        .slice(0, 5);

      // 요일 탭 (Daily 전용)
      const dayTabs = Array.from(document.querySelectorAll('a'))
        .filter(a => /Mon|Tue|Wed|Thu|Fri|Sat|Sun/i.test(a.textContent || ''))
        .map(a => ({ text: a.textContent?.trim(), href: a.href }))
        .slice(0, 7);

      return { currentUrl, subtabLinks, categoryLinks, headings, cardSample, shortcuts, genreFilter, dayTabs };
    });

    console.log(`\n${'═'.repeat(65)}`);
    console.log(`▶ ${label}`);
    console.log(`  URL: ${info.currentUrl}`);
    if (info.headings.length) console.log(`  Headings: ${info.headings.join(' | ')}`);
    if (info.subtabLinks.length) {
      console.log(`  Subtabs:`);
      info.subtabLinks.forEach(l => console.log(`    "${l.text}" → ${l.href}`));
    }
    if (info.categoryLinks.length) {
      console.log(`  Category/Day links:`);
      info.categoryLinks.forEach(l => console.log(`    "${l.text}" → ${l.href}`));
    }
    if (info.cardSample) {
      const c = info.cardSample;
      console.log(`  Cards: count=${c.cardCount}, tag=${c.cardTag}, badge="${c.badgeText}" badgeClass="${c.badgeClass}"`);
      console.log(`         linkHref sample="${c.linkHref}"`);
    }
    if (info.dayTabs.length) console.log(`  Day tabs: ${info.dayTabs.map(d=>d.text).join(', ')}`);
    if (info.genreFilter.length) console.log(`  Genre filter btns: ${info.genreFilter.map(b=>b.text).join(', ')}`);
    if (info.shortcuts.length) console.log(`  GNB shortcuts: ${info.shortcuts.map(s=>s.text).join(', ')}`);
  }

  // ── 02-홈 ──────────────────────────────────────────
  await inspect('02-홈/Spotlight', 'https://tapas.io/menu/1/subtab/1');
  await inspect('02-홈/Daily', 'https://tapas.io/menu/1/subtab/29');
  await inspect('02-홈/Popular', 'https://tapas.io/menu/1/subtab/4');
  await inspect('02-홈/New', 'https://tapas.io/menu/1/subtab/3');
  await inspect('02-홈/Completed', 'https://tapas.io/menu/1/subtab/6');
  await inspect('02-홈/Free-Access', 'https://tapas.io/menu/1/subtab/40');
  await inspect('02-홈/WUF', 'https://tapas.io/menu/1/subtab/5');

  // ── 03-홈-(Comics) ─────────────────────────────────
  await inspect('03-Comics/진입(메인)', 'https://tapas.io/menu/2/subtab/7');
  await inspect('03-Comics/subtab/8', 'https://tapas.io/menu/2/subtab/8');
  await inspect('03-Comics/subtab/9', 'https://tapas.io/menu/2/subtab/9');
  await inspect('03-Comics/subtab/10', 'https://tapas.io/menu/2/subtab/10');
  await inspect('03-Comics/subtab/11', 'https://tapas.io/menu/2/subtab/11');
  await inspect('03-Comics/subtab/12', 'https://tapas.io/menu/2/subtab/12');

  // ── 04-홈-(Novels) ─────────────────────────────────
  await inspect('04-Novels/진입(메인)', 'https://tapas.io/menu/3/subtab/16');
  await inspect('04-Novels/subtab/17', 'https://tapas.io/menu/3/subtab/17');
  await inspect('04-Novels/subtab/18', 'https://tapas.io/menu/3/subtab/18');
  await inspect('04-Novels/subtab/19', 'https://tapas.io/menu/3/subtab/19');
  await inspect('04-Novels/subtab/20', 'https://tapas.io/menu/3/subtab/20');

  // ── 05-홈-(Mature) ─────────────────────────────────
  await inspect('05-Mature/진입(메인)', 'https://tapas.io/menu/5/subtab/45');
  await inspect('05-Mature/subtab/46', 'https://tapas.io/menu/5/subtab/46');
  await inspect('05-Mature/subtab/47', 'https://tapas.io/menu/5/subtab/47');
  await inspect('05-Mature/subtab/48', 'https://tapas.io/menu/5/subtab/48');
  await inspect('05-Mature/subtab/49', 'https://tapas.io/menu/5/subtab/49');

  // ── 06-홈-(Community) ──────────────────────────────
  await inspect('06-Community/진입(메인)', 'https://tapas.io/menu/4/subtab/30');
  await inspect('06-Community/subtab/31', 'https://tapas.io/menu/4/subtab/31');
  await inspect('06-Community/subtab/32', 'https://tapas.io/menu/4/subtab/32');
  await inspect('06-Community/subtab/33', 'https://tapas.io/menu/4/subtab/33');

  // ── 07-작품홈 ──────────────────────────────────────
  await inspect('07-작품홈/Comic Series', 'https://tapas.io/series/the-beginning-after-the-end/episodes');
  await inspect('07-작품홈/Novel Series', 'https://tapas.io/series/the-unbeatable-game-novel');

  // ── 08-검색 ────────────────────────────────────────
  await inspect('08-검색', 'https://tapas.io/search?q=Olympus');

  // ── 09-뷰어-(Comic) ────────────────────────────────
  await inspect('09-뷰어Comic/ep1', 'https://tapas.io/episode/2360789');
  await inspect('09-뷰어Comic/ep2', 'https://tapas.io/episode/2386509');

  // ── 12-보관함 ──────────────────────────────────────
  await inspect('12-보관함/Recent', 'https://tapas.io/reading-list/');
  await inspect('12-보관함/Subscribed', 'https://tapas.io/reading-list/?tab=SUBSCRIBE');
  await inspect('12-보관함/WUF', 'https://tapas.io/reading-list/?tab=WAIT_UNTIL_FREE');

  // ── 13-인박스 ──────────────────────────────────────
  await inspect('13-인박스/Activity', 'https://tapas.io/inbox/activity');
  await inspect('13-인박스/Notification', 'https://tapas.io/inbox/notification');

  // ── 15-Profile ─────────────────────────────────────
  await inspect('15-Profile/Settings', 'https://tapas.io/account/settings');

  await browser.close();
  console.log('\n✅ DOM 탐색 완료');
})();
