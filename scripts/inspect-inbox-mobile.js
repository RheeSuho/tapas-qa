const { webkit, devices } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await webkit.launch();
  const storageState = JSON.parse(fs.readFileSync('.auth/user.json', 'utf8'));
  const context = await browser.newContext({ ...devices['iPhone 13'], storageState });
  const page = await context.newPage();

  await page.goto('https://tapas.io/inbox/gift', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);
  console.log('URL:', page.url());
  
  const info = await page.evaluate(() => {
    // 1. Find tab navigation elements
    const tabs = Array.from(document.querySelectorAll('a, button')).filter(el => {
      const t = el.textContent.trim().toLowerCase();
      const h = el.getAttribute('href') || '';
      return t.includes('gift') || t.includes('message') || t.includes('activity') || 
             t.includes('inbox') || h.includes('inbox') || h.includes('activities');
    }).map(el => `${el.tagName} href="${el.getAttribute('href')}" class="${el.className.substring(0,50)}" text="${el.textContent.trim().substring(0,30)}"`);
    
    // 2. item-title elements
    const itemTitles = Array.from(document.querySelectorAll('a.item-title, .item-title')).map(el => 
      `${el.tagName} href="${el.getAttribute('href')}" text="${el.textContent.trim().substring(0,20)}"`
    );
    
    // 3. Top nav area
    const navArea = document.querySelector('.inbox-tabs, .tab-nav, .nav-tabs, [class*="inbox-nav"], [class*="tab"]');
    
    // 4. Page structure
    const pageWrap = document.querySelector('.page-wrap, #__next');
    
    return {
      tabs: tabs.slice(0, 15),
      itemTitles: itemTitles.slice(0, 10),
      navAreaHTML: navArea ? navArea.outerHTML.substring(0, 500) : 'not found',
      pageType: pageWrap ? (pageWrap.id === '__next' ? 'NEW' : 'OLD') : 'unknown',
      bodySnippet: document.body.innerHTML.substring(0, 800),
    };
  });

  console.log('Page type:', info.pageType);
  console.log('\n=== TABS ===');
  info.tabs.forEach(t => console.log(t));
  console.log('\n=== item-title elements ===');
  info.itemTitles.forEach(t => console.log(t));
  console.log('\n=== NAV AREA ===');
  console.log(info.navAreaHTML);
  console.log('\n=== BODY (first 800) ===');
  console.log(info.bodySnippet);

  await browser.close();
})();
