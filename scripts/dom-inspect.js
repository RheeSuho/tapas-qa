const { chromium } = require('@playwright/test');
const path = require('path');

const AUTH_FILE = path.join(process.cwd(), '.auth/user.json');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    storageState: AUTH_FILE,
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  async function inspect(label, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2000);

    const info = await page.evaluate(() => {
      const url = location.href;

      // 서브탭 링크들 (nav, tablist)
      const subtabs = Array.from(document.querySelectorAll('nav a, [role="tablist"] a, [role="tablist"] button, [class*="sub"] a, [class*="tab"] a'))
        .map(el => ({
          text: el.textContent?.trim().slice(0, 30),
          href: el.href || '',
          ariaSelected: el.getAttribute('aria-selected'),
          classes: el.className.slice(0, 80),
        }))
        .filter(el => el.text && el.text.length > 0)
        .slice(0, 10);

      // 작품 카드 컨테이너 클래스명
      const cardClasses = Array.from(new Set(
        Array.from(document.querySelectorAll('article, [class*="card"], [class*="series-item"], [class*="content-item"]'))
          .map(el => el.className.slice(0, 80))
      )).slice(0, 5);

      // 주요 heading
      const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
        .map(el => el.textContent?.trim().slice(0, 50))
        .filter(Boolean)
        .slice(0, 5);

      // 필터 버튼 (Comics/Novels 대분류)
      const filterBtns = Array.from(document.querySelectorAll('[class*="filter"] button, [class*="category"] button, [class*="tab-btn"], [class*="tab__btn"]'))
        .map(el => ({ text: el.textContent?.trim(), class: el.className.slice(0, 60) }))
        .filter(el => el.text)
        .slice(0, 6);

      // 전체 리스트 아이템 개수
      const listCount = document.querySelectorAll('article, [class*="series-item"], li[class*="item"]').length;

      return { url, subtabs, cardClasses, headings, filterBtns, listCount };
    });

    console.log(`\n${'='.repeat(60)}`);
    console.log(`[${label}]`);
    console.log(`URL: ${info.url}`);
    console.log(`Headings: ${JSON.stringify(info.headings)}`);
    console.log(`Subtabs:`);
    info.subtabs.forEach(t => console.log(`  - "${t.text}" href="${t.href}" selected="${t.ariaSelected}" class="${t.classes}"`));
    console.log(`Filter buttons:`);
    info.filterBtns.forEach(b => console.log(`  - "${b.text}" class="${b.class}"`));
    console.log(`Card classes (sample): ${JSON.stringify(info.cardClasses)}`);
    console.log(`List item count: ${info.listCount}`);
  }

  await inspect('홈 루트', 'https://tapas.io/');
  await inspect('subtab/1', 'https://tapas.io/menu/1/subtab/1');
  await inspect('subtab/2', 'https://tapas.io/menu/1/subtab/2');
  await inspect('subtab/3', 'https://tapas.io/menu/1/subtab/3');
  await inspect('subtab/4', 'https://tapas.io/menu/1/subtab/4');
  await inspect('subtab/5', 'https://tapas.io/menu/1/subtab/5');
  await inspect('subtab/6', 'https://tapas.io/menu/1/subtab/6');
  await inspect('subtab/7', 'https://tapas.io/menu/1/subtab/7');

  await browser.close();
})();
