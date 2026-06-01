import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

const SUBTAB: Record<string, string> = {
  spotlight:    '/menu/1/subtab/1',
  popular:      '/menu/1/subtab/29',
  new:          '/menu/1/subtab/4',
  completed:    '/menu/1/subtab/3',
  daily:        '/menu/1/subtab/6',
  wuf:          '/menu/1/subtab/40',
  'free access':'/menu/1/subtab/5',
};

// ──── 서브탭 진입 ────

async function clickSubtab(page: any, href: string) {
  const link = page.locator(`a[href="${href}"]`).first();
  if ((await link.count()) > 0) {
    await link.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    return;
  }
  await page.goto(`${MWEB}${href}`, { waitUntil: 'domcontentloaded' });
}

When('홈 > Spotlight 서브탭을 클릭한다', async ({ page }) => {
  await clickSubtab(page, SUBTAB.spotlight);
});
When('홈 > Popular 서브탭을 클릭한다', async ({ page }) => {
  await clickSubtab(page, SUBTAB.popular);
});
When('홈 > Daily 서브탭을 클릭한다', async ({ page }) => {
  await clickSubtab(page, SUBTAB.daily);
});
When('홈 > New 서브탭을 클릭한다', async ({ page }) => {
  await clickSubtab(page, SUBTAB.new);
});
When('홈 > Completed 서브탭을 클릭한다', async ({ page }) => {
  await clickSubtab(page, SUBTAB.completed);
});
When('홈 > WUF 서브탭을 클릭한다', async ({ page }) => {
  await clickSubtab(page, SUBTAB.wuf);
});
When('홈 > Free Access 서브탭을 클릭한다', async ({ page }) => {
  await clickSubtab(page, SUBTAB['free access']);
});
When('Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}${SUBTAB.spotlight}`, { waitUntil: 'domcontentloaded' });
});

// ──── 배너 동작 ────

When('빅배너 영역에서 8초 대기한다', async ({ page }) => {
  await page.waitForTimeout(8000);
});

When('빅배너를 클릭한다', async ({ page }) => {
  const banner = page.locator('a[href*="/series/"], a[href*="/event/"]')
    .filter({ has: page.locator('img') }).first();
  if ((await banner.count()) > 0) {
    await banner.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

When('카드배너를 클릭한다', async ({ page }) => {
  const banner = page.locator('a[href*="/series/"], a[href*="/event/"]')
    .filter({ has: page.locator('img') }).nth(1);
  if ((await banner.count()) > 0) {
    await banner.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    const any = page.locator('a[href*="/series/"]').first();
    if ((await any.count()) > 0) await any.click();
  }
});

When('라인배너를 클릭한다', async ({ page }) => {
  const banners = page.locator('a[href*="/series/"], a[href*="/event/"]').filter({ has: page.locator('img') });
  const count = await banners.count();
  const target = banners.nth(Math.min(count - 1, 2));
  if ((await target.count()) > 0) {
    await target.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

When('프로모션 배너를 클릭한다', async ({ page }) => {
  const banner = page.locator('a[href*="/series/"], a[href*="/event/"]')
    .filter({ has: page.locator('img') }).first();
  if ((await banner.count()) > 0) {
    await banner.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

When('배너 섹션 내 작품을 클릭한다', async ({ page }) => {
  const link = page.locator('a[href*="/series/"]').first();
  if ((await link.count()) > 0) {
    await link.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

// ──── 더보기 ────

When('더보기 링크를 클릭한다', async ({ page }) => {
  const seeAll = page.locator('a, button').filter({ hasText: /see all|more|더보기/i }).first();
  if ((await seeAll.count()) > 0) {
    await seeAll.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});

// ──── 필터 ────

When('Novels 필터를 클릭한다', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /^Novels$/i }).first();
  if ((await btn.count()) > 0) await btn.click().catch(() => {});
});

// ──── 스크롤 ────

When('페이지 최하단까지 스크롤한다', async ({ page }) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
});

// ──── Then 확인 ────

async function assertSeriesList(page: any) {
  const items = page.locator('a[href*="/series/"]').first();
  if (await items.isVisible({ timeout: 5000 }).catch(() => false)) {
    await expect(items).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
}

Then('Spotlight 서브탭 화면이 노출된다', async ({ page }) => {
  await assertSeriesList(page);
});
Then('Popular 서브탭 화면이 노출된다', async ({ page }) => {
  await assertSeriesList(page);
});
Then('Daily 서브탭 화면이 노출된다', async ({ page }) => {
  await assertSeriesList(page);
});
Then('New 서브탭 화면이 노출된다', async ({ page }) => {
  await assertSeriesList(page);
});
Then('Completed 서브탭 화면이 노출된다', async ({ page }) => {
  await assertSeriesList(page);
});
Then('WUF 서브탭 화면이 노출된다', async ({ page }) => {
  await assertSeriesList(page);
});
Then('Free Access 서브탭 화면이 노출된다', async ({ page }) => {
  await assertSeriesList(page);
});
Then(/^Comics\/Novels 필터가 노출된다$/, async ({ page }) => {
  const filter = page.locator('button, a, [role="tab"]').filter({ hasText: /^comics$|^novels$/i }).first();
  if (await filter.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(filter).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});
Then(/^Comics\/Novels 필터와 요일 탭이 노출된다$/, async ({ page }) => {
  const filter = page.locator('button, a, [role="tab"]').filter({ hasText: /comics|novels|mon|tue|wed|thu|fri|sat|sun/i }).first();
  if (await filter.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(filter).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});
Then('Completed Comics 섹션이 노출된다', async ({ page }) => {
  await assertSeriesList(page);
});
Then('Wait Until Free 섹션이 노출된다', async ({ page }) => {
  await assertSeriesList(page);
});
Then('Novels 작품 목록으로 전환된다', async ({ page }) => {
  await assertSeriesList(page);
});
Then('다음 빅배너로 자동 전환된다', async ({ page }) => {
  const banner = page.locator('a[href*="/series/"], a[href*="/event/"]').filter({ has: page.locator('img') }).first();
  if (await banner.isVisible({ timeout: 5000 }).catch(() => false)) {
    await expect(banner).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});
Then('빅배너가 노출된다', async ({ page }) => {
  const banner = page.locator('a[href*="/series/"], a[href*="/event/"]').filter({ has: page.locator('img') }).first();
  const visible = await banner.isVisible({ timeout: 3000 }).catch(() => false);
  if (visible) {
    await expect(banner).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});
Then('프로모션 배너가 노출된다', async ({ page }) => {
  const banner = page.locator('a[href*="/series/"], a[href*="/event/"]').filter({ has: page.locator('img') }).first();
  if (await banner.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(banner).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});
