const { webkit, devices } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await webkit.launch();
  const storageState = JSON.parse(fs.readFileSync('.auth/user.json', 'utf8'));
  const context = await browser.newContext({ ...devices['iPhone 13'], storageState });
  const page = await context.newPage();

  const pages = [
    { name: 'SEARCH', url: 'https://m.tapas.io/search?q=Olympus' },
    { name: 'LIBRARY', url: 'https://m.tapas.io/reading-list' },
    { name: 'INBOX', url: 'https://m.tapas.io/inbox/gift' },
    { name: 'LOGIN', url: 'https://m.tapas.io/account/signin' },
    { name: 'NEW_TAB', url: 'https://m.tapas.io/menu/1/subtab/3' },
  ];

  for (const { name, url } of pages) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    const finalUrl = page.url();
    const dom = await page.evaluate(() => document.body.innerHTML.substring(0, 4000));
    console.log(`\n=== ${name} (${finalUrl}) ===`);
    console.log(dom.substring(0, 3000));
  }

  await browser.close();
})();
