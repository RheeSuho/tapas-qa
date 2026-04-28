const { chromium } = require('@playwright/test');
const path = require('path');
const AUTH_FILE = path.join(process.cwd(), '.auth/user.json');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: AUTH_FILE, viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  async function inspect(label, url) {
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    } catch(e) {
      await page.waitForTimeout(2000);
    }
    const info = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4'))
        .map(el => el.textContent?.trim().slice(0,60)).filter(Boolean).slice(0,8);
      const categoryLinks = Array.from(document.querySelectorAll('a'))
        .filter(a => a.href.includes('category=') || a.href.includes('genre=') || a.href.includes('daily_type=') || a.href.includes('sort=') || a.href.includes('/tab=') || a.href.includes('?tab='))
        .map(a => ({ text: a.textContent?.trim().slice(0,25), href: a.href }))
        .filter((v,i,arr) => arr.findIndex(x=>x.href===v.href)===i).slice(0,10);
      const allText = document.body.innerText.slice(0,300);
      const buttons = Array.from(document.querySelectorAll('button'))
        .map(b => b.textContent?.trim().slice(0,25)).filter(Boolean).slice(0,10);
      // 특정 요소들
      const episodeItems = document.querySelectorAll('[class*="episode"], [class*="ep-item"], li[class*="item"]').length;
      const commentItems = document.querySelectorAll('[class*="comment"]').length;
      const tabLinks = Array.from(document.querySelectorAll('[role="tab"], [class*="tab"] a, [class*="tab"] button'))
        .map(el => el.textContent?.trim().slice(0,20)).filter(Boolean).slice(0,8);
      const inputs = Array.from(document.querySelectorAll('input, textarea'))
        .map(el => ({ type: el.type, placeholder: el.placeholder?.slice(0,30), name: el.name })).slice(0,5);
      return { url: location.href, headings, categoryLinks, allText, buttons, episodeItems, commentItems, tabLinks, inputs };
    });
    console.log(`\n${'═'.repeat(65)}\n▶ ${label}\n  URL: ${info.url}`);
    if (info.headings.length) console.log(`  Headings: ${info.headings.join(' | ')}`);
    if (info.tabLinks.length) console.log(`  Tab links: ${info.tabLinks.join(', ')}`);
    if (info.categoryLinks.length) console.log(`  Category links: ${info.categoryLinks.map(l=>`"${l.text}"→${l.href}`).join(', ')}`);
    if (info.buttons.length) console.log(`  Buttons: ${info.buttons.join(', ')}`);
    if (info.inputs.length) console.log(`  Inputs: ${info.inputs.map(i=>`[${i.type}] placeholder="${i.placeholder}"`).join(', ')}`);
    console.log(`  Episode items: ${info.episodeItems}, Comment items: ${info.commentItems}`);
    console.log(`  Body snippet: ${info.allText.replace(/\n+/g,' ').slice(0,150)}`);
  }

  // 07-작품홈 재탐색
  await inspect('07-작품홈/Comic (episodes)', 'https://tapas.io/series/the-beginning-after-the-end/episodes');
  await inspect('07-작품홈/Novel', 'https://tapas.io/series/the-unbeatable-game-novel');

  // 13-인박스 재탐색
  await inspect('13-인박스/Activity', 'https://tapas.io/inbox/activity');
  await inspect('13-인박스/Notification', 'https://tapas.io/inbox/notification');

  // 15-Profile Settings
  await inspect('15-Profile/Settings', 'https://tapas.io/account/settings');

  // Comics 서브탭 식별 (몇 개만)
  await inspect('03-Comics/subtab/17 (진입후 nav 첫번째)', 'https://tapas.io/menu/2/subtab/17');
  await inspect('03-Comics/subtab/8', 'https://tapas.io/menu/2/subtab/8');
  await inspect('03-Comics/subtab/9', 'https://tapas.io/menu/2/subtab/9');
  await inspect('03-Comics/subtab/10', 'https://tapas.io/menu/2/subtab/10');
  await inspect('03-Comics/subtab/11', 'https://tapas.io/menu/2/subtab/11');
  await inspect('03-Comics/subtab/12', 'https://tapas.io/menu/2/subtab/12');
  await inspect('03-Comics/subtab/13', 'https://tapas.io/menu/2/subtab/13');
  await inspect('03-Comics/subtab/14', 'https://tapas.io/menu/2/subtab/14');

  // Novels 서브탭 추가
  await inspect('04-Novels/subtab/24', 'https://tapas.io/menu/3/subtab/24');
  await inspect('04-Novels/subtab/21', 'https://tapas.io/menu/3/subtab/21');
  await inspect('04-Novels/subtab/22', 'https://tapas.io/menu/3/subtab/22');
  await inspect('04-Novels/subtab/23', 'https://tapas.io/menu/3/subtab/23');

  // Mature 추가 서브탭
  await inspect('05-Mature/subtab/37', 'https://tapas.io/menu/5/subtab/37');
  await inspect('05-Mature/subtab/38', 'https://tapas.io/menu/5/subtab/38');
  await inspect('05-Mature/subtab/50', 'https://tapas.io/menu/5/subtab/50');

  // Community 추가 서브탭
  await inspect('06-Community/subtab/34', 'https://tapas.io/menu/4/subtab/34');
  await inspect('06-Community/subtab/35', 'https://tapas.io/menu/4/subtab/35');
  await inspect('06-Community/subtab/39', 'https://tapas.io/menu/4/subtab/39');

  await browser.close();
  console.log('\n✅ 보완 탐색 완료');
})();
