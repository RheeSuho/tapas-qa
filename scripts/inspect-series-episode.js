const { webkit, devices } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await webkit.launch();
  const storageState = JSON.parse(fs.readFileSync('.auth/user.json', 'utf8'));
  const context = await browser.newContext({ ...devices['iPhone 13'], storageState });
  const page = await context.newPage();

  const urls = [
    'https://m.tapas.io/series/villainesses-have-more-fun/info',
    'https://m.tapas.io/series/i-was-the-real-head-of-the-house/info',
    'https://m.tapas.io/episode/2360789',
    'https://m.tapas.io/episode/2386509',
    'https://m.tapas.io/episode/3125421',
  ];

  for (const url of urls) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1000);
    const finalUrl = page.url();
    const is404 = await page.evaluate(() => document.body.innerHTML.includes("couldn't find"));
    const isNew = await page.evaluate(() => !!document.getElementById('__next'));
    const title = await page.title();
    console.log(`${url.split('tapas.io')[1]} → ${finalUrl.split('tapas.io')[1]} [${isNew ? 'NEW' : 'OLD'}] 404=${is404} title="${title}"`);
  }

  await browser.close();
})();
