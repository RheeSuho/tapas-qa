const { webkit, devices } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await webkit.launch();
  const storageState = JSON.parse(fs.readFileSync('.auth/user.json', 'utf8'));
  const context = await browser.newContext({ ...devices['iPhone 13'], storageState });
  const page = await context.newPage();

  await page.goto('https://m.tapas.io/episode/2386509', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);

  const toolbarInfo = await page.evaluate(() => {
    // 1. Old toolbar buttons — get their visibility
    const oldBtns = Array.from(document.querySelectorAll('a.toolbar-btn')).map(el => {
      const style = window.getComputedStyle(el);
      return `a.toolbar-btn class="${el.className}" display=${style.display} visibility=${style.visibility} text="${el.textContent.trim().substring(0,20)}"`;
    });
    
    // 2. Find mobile-visible toolbar elements (click handlers)
    const clickable = Array.from(document.querySelectorAll('[class*="toolbar"], [class*="bottom-bar"], [class*="viewer-controls"]'))
      .slice(0, 5)
      .map(el => {
        const style = window.getComputedStyle(el);
        return `${el.tagName} class="${el.className.substring(0,80)}" display=${style.display} children=${el.children.length}`;
      });
    
    // 3. Bottom area of viewer — find all clickable elements
    const bottomArea = document.querySelector('.viewer-toolbar, .toolbar-wrap, [class*="toolbar"]');
    
    // 4. Count all clickable elements at bottom
    const allClickable = Array.from(document.querySelectorAll('[cursor="pointer"], [class*="btn"], [class*="like"], [class*="comment"], [class*="prev"], [class*="next"]'))
      .filter(el => {
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden';
      })
      .slice(0, 20)
      .map(el => {
        return `${el.tagName} class="${el.className.substring(0,60)}" text="${el.textContent.trim().substring(0,20)}"`;
      });

    return {
      oldBtns: oldBtns.slice(0, 10),
      clickable: clickable.slice(0, 5),
      bottomAreaHTML: bottomArea ? bottomArea.outerHTML.substring(0, 1000) : 'not found',
      allClickable: allClickable.slice(0, 15),
    };
  });

  console.log('\n=== OLD TOOLBAR BUTTONS (a.toolbar-btn) ===');
  toolbarInfo.oldBtns.forEach(b => console.log(b));
  
  console.log('\n=== TOOLBAR CONTAINERS ===');
  toolbarInfo.clickable.forEach(c => console.log(c));
  
  console.log('\n=== BOTTOM AREA HTML (first 500) ===');
  console.log(toolbarInfo.bottomAreaHTML.substring(0, 500));
  
  console.log('\n=== ALL VISIBLE CLICKABLE ELEMENTS ===');
  toolbarInfo.allClickable.forEach(c => console.log(c));

  await browser.close();
})();
