const { chromium } = require('@playwright/test');
const path = require('path');
const AUTH_FILE = path.join(process.cwd(), '.auth/user.json');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: AUTH_FILE, viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  async function inspect(label, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2000);
    const info = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4'))
        .map(el => el.textContent?.trim().slice(0, 60)).filter(Boolean).slice(0, 8);
      const categoryLinks = Array.from(document.querySelectorAll('a'))
        .filter(a => a.href.includes('category='))
        .map(a => ({ text: a.textContent?.trim(), href: a.href, class: a.className.slice(0,80) }));
      const listCount = document.querySelectorAll('[class*="pc-card-list"] > *, article').length;
      return { url: location.href, headings, categoryLinks, listCount };
    });
    console.log(`\n[${label}] URL: ${info.url}`);
    console.log(`Headings: ${info.headings.join(' | ')}`);
    console.log(`Category links:`, info.categoryLinks.map(l => `"${l.text}" → ${l.href}`).join(', '));
    console.log(`List item count: ${info.listCount}`);
  }

  await inspect('subtab/29', 'https://tapas.io/menu/1/subtab/29');
  await inspect('subtab/40', 'https://tapas.io/menu/1/subtab/40');

  await browser.close();
})();
