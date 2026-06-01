const { webkit, chromium, devices } = require('playwright');
const fs = require('fs');

(async () => {
  const storageState = JSON.parse(fs.readFileSync('.auth/user.json', 'utf8'));

  // 1. tapas.io with iPhone 13 UA (mobile-safari-common 시뮬레이션)
  const browser1 = await webkit.launch();
  const ctx1 = await browser1.newContext({ ...devices['iPhone 13'], storageState });
  const page1 = await ctx1.newPage();
  await page1.goto('https://tapas.io', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page1.waitForTimeout(1000);
  console.log('tapas.io + iPhone13 UA → URL:', page1.url());
  const isNew1 = await page1.evaluate(() => !!document.getElementById('__next'));
  console.log('NEW HTML:', isNew1);

  // 2. tapas.io/reading-list with iPhone 13 UA
  await page1.goto('https://tapas.io/reading-list', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page1.waitForTimeout(1000);
  console.log('\ntapas.io/reading-list + iPhone13 UA → URL:', page1.url());
  const isNew2 = await page1.evaluate(() => !!document.getElementById('__next'));
  console.log('NEW HTML:', isNew2);

  // GNB on tapas.io with iPhone 13
  await page1.goto('https://tapas.io', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page1.waitForTimeout(1500);
  const navHtml = await page1.evaluate(() => {
    const nav = document.querySelector('nav');
    return nav ? nav.outerHTML.substring(0, 2000) : 'no nav — body: ' + document.body.innerHTML.substring(0, 500);
  });
  console.log('\ntapas.io GNB (iPhone13):');
  console.log(navHtml);

  await browser1.close();
})();
