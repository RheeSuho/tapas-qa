const { webkit, devices } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await webkit.launch();
  const storageState = JSON.parse(fs.readFileSync('.auth/user.json', 'utf8'));
  const context = await browser.newContext({ ...devices['iPhone 13'], storageState });
  const page = await context.newPage();

  const pages = [
    { name: 'SERIES', url: 'https://m.tapas.io/series/269/edge-of-olympus' },
    { name: 'EPISODE', url: 'https://m.tapas.io/episode/1748' },
    { name: 'SIGNIN', url: 'https://m.tapas.io/account/signin' },
    { name: 'LIBRARY_RECENT', url: 'https://m.tapas.io/reading-list?tab=recent' },
    { name: 'LIBRARY_SUBSCRIBED', url: 'https://m.tapas.io/reading-list?tab=subscribed' },
    { name: 'INBOX_GIFT', url: 'https://m.tapas.io/inbox/gift' },
    { name: 'INBOX_MSG', url: 'https://m.tapas.io/inbox/messages' },
  ];

  for (const { name, url } of pages) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(1500);
      const finalUrl = page.url();
      const isNew = await page.evaluate(() => !!document.getElementById('__next'));
      const dom = await page.evaluate(() => document.body.innerHTML.substring(0, 3000));
      console.log(`\n=== ${name} (${finalUrl}) [${isNew ? 'NEW' : 'OLD'}] ===`);
      console.log(dom.substring(0, 2500));
    } catch(e) {
      console.log(`\n=== ${name} ERROR: ${e.message} ===`);
    }
  }

  await browser.close();
})();
