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
      const homeSubtabs = Array.from(document.querySelectorAll('a'))
        .filter(a => a.href.includes('/menu/1/subtab/'))
        .map(a => ({
          text: a.textContent?.trim().slice(0, 30),
          href: a.href,
          class: a.className.slice(0, 80),
          ariaCurrent: a.getAttribute('aria-current'),
          parentClass: a.parentElement?.className?.slice(0, 60),
        }));

      const activeEls = Array.from(document.querySelectorAll('[aria-current], [class*="active"], [class*="selected"]'))
        .filter(el => el.tagName === 'A' || el.tagName === 'BUTTON')
        .map(el => ({
          tag: el.tagName,
          text: el.textContent?.trim().slice(0, 30),
          href: el.href || '',
          ariaCurrent: el.getAttribute('aria-current'),
          class: el.className.slice(0, 80),
        }))
        .slice(0, 10);

      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4'))
        .map(el => ({ tag: el.tagName, text: el.textContent?.trim().slice(0, 60) }))
        .filter(h => h.text).slice(0, 10);

      const listContainers = Array.from(document.querySelectorAll('[class*="pc-card-list"], [class*="card-list"]'))
        .map(el => ({ class: el.className.slice(0, 80), childCount: el.children.length }))
        .slice(0, 5);

      return { url: location.href, homeSubtabs, activeEls, headings, listContainers };
    });

    console.log(`\n${'='.repeat(60)}\n[${label}] URL: ${info.url}`);
    console.log('Home Subtabs:');
    info.homeSubtabs.forEach(t => console.log(`  "${t.text}" → ${t.href} [current=${t.ariaCurrent}] class="${t.class}"`));
    console.log('Active elements:');
    info.activeEls.forEach(e => console.log(`  <${e.tag}> "${e.text}" current="${e.ariaCurrent}" class="${e.class}"`));
    console.log('Headings:', info.headings.map(h => `${h.tag}:"${h.text}"`).join(' | '));
    console.log('List containers:', info.listContainers.map(l => `count=${l.childCount}`).join(', '));
  }

  for (let i = 1; i <= 8; i++) {
    await inspect(`subtab/${i}`, `https://tapas.io/menu/1/subtab/${i}`);
  }

  await browser.close();
})();
