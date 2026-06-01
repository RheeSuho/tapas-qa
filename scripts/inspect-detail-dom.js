const { webkit, devices } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await webkit.launch();
  const storageState = JSON.parse(fs.readFileSync('.auth/user.json', 'utf8'));
  const context = await browser.newContext({ ...devices['iPhone 13'], storageState });
  const page = await context.newPage();

  // Library page - wait for SPA to load
  console.log('\n=== LIBRARY /reading-list ===');
  await page.goto('https://m.tapas.io/reading-list', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(3000);
  // look for tabs
  const libTabs = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a[href]'))
      .filter(a => a.href.includes('reading-list') || a.href.includes('category') || a.href.includes('tab'))
      .map(a => `${a.tagName} href="${a.getAttribute('href')}" text="${a.textContent.trim().substring(0,30)}"`);
    return links.slice(0, 20).join('\n');
  });
  console.log('LIBRARY LINKS:', libTabs);
  const libContent = await page.evaluate(() => {
    // find nav/tab area
    const navArea = document.querySelector('.library-nav, .tab-wrap, .reading-list-nav, [class*="nav"], [class*="tab"]');
    return navArea ? navArea.outerHTML.substring(0, 2000) : 'not found — body snippet: ' + document.body.innerHTML.substring(500, 2500);
  });
  console.log('LIBRARY NAV:', libContent.substring(0, 2000));

  // Inbox page
  console.log('\n=== INBOX /inbox/gift ===');
  await page.goto('https://m.tapas.io/inbox/gift', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(3000);
  const inboxTabs = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a[href]'))
      .filter(a => a.href.includes('inbox') || a.href.includes('message'))
      .map(a => `href="${a.getAttribute('href')}" text="${a.textContent.trim().substring(0,30)}"`);
    return links.slice(0, 20).join('\n');
  });
  console.log('INBOX LINKS:', inboxTabs);

  // Series page
  console.log('\n=== SERIES /series/villainesses-have-more-fun/info ===');
  await page.goto('https://m.tapas.io/series/villainesses-have-more-fun/info', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(2000);
  const seriesInfo = await page.evaluate(() => {
    // title, tabs, buttons
    const title = document.querySelector('.series-title, h1, .title, [class*="title"]');
    const tabs = Array.from(document.querySelectorAll('a[href], button')).filter(el => {
      const t = el.textContent.trim().toLowerCase();
      return ['episode', 'detail', 'info', 'subscribe', 'bookmark'].some(k => t.includes(k));
    }).map(el => `${el.tagName} href="${el.getAttribute('href')}" text="${el.textContent.trim().substring(0,30)}"`);
    return 'title=' + (title ? title.textContent.trim() : 'none') + '\ntabs:\n' + tabs.slice(0, 10).join('\n');
  });
  console.log('SERIES INFO:', seriesInfo);

  // Episode viewer
  console.log('\n=== EPISODE /episode/2386509 ===');
  await page.goto('https://m.tapas.io/episode/2386509', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(2000);
  const epInfo = await page.evaluate(() => {
    const toolbar = document.querySelector('.toolbar, .viewer-toolbar, [class*="toolbar"], .bottom-bar, [class*="bottom"]');
    const buttons = Array.from(document.querySelectorAll('a, button')).filter(el => {
      const t = el.textContent.trim().toLowerCase();
      const cls = el.className.toLowerCase();
      return ['comment', 'like', 'next', 'prev', 'subscribe', 'more', 'list'].some(k => t.includes(k) || cls.includes(k));
    }).map(el => `${el.tagName} class="${el.className.substring(0,50)}" text="${el.textContent.trim().substring(0,20)}"`);
    return 'toolbar: ' + (toolbar ? toolbar.outerHTML.substring(0,500) : 'not found') + '\nbuttons:\n' + buttons.slice(0,15).join('\n');
  });
  console.log('EPISODE INFO:', epInfo.substring(0, 3000));

  await browser.close();
})();
