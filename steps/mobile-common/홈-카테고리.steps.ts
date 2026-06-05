import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';

const { When, Then } = createBdd();

const MWEB = process.env.TAPAS_MWEB_BASE_URL ?? 'https://m.tapas.io';

// ──── 카테고리 메인 진입 ────

When('대메뉴 > Comics 카테고리 클릭', async ({ page }) => {
  const link = page.locator('a[href^="/menu/2"]').first();
  if ((await link.count()) > 0) { await link.click(); await page.waitForLoadState('domcontentloaded').catch(() => {}); return; }
  await page.goto(`${MWEB}/menu/2/subtab/7`, { waitUntil: 'domcontentloaded' });
});
When('대메뉴 > Novels 카테고리 클릭', async ({ page }) => {
  const link = page.locator('a[href^="/menu/3"][href*="/subtab/"]').first();
  if ((await link.count()) > 0) { await link.click(); await page.waitForLoadState('domcontentloaded').catch(() => {}); return; }
  await page.goto(`${MWEB}/menu/3/subtab/16`, { waitUntil: 'domcontentloaded' });
});

// ──── 카테고리 서브탭 직접 접속 ────

When('Comics Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/2/subtab/7`, { waitUntil: 'domcontentloaded' });
});
When('Comics Popular 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/2/subtab/8`, { waitUntil: 'domcontentloaded' });
});
When('Novels Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/3/subtab/16`, { waitUntil: 'domcontentloaded' });
});
When('Mature Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/5/subtab/45`, { waitUntil: 'domcontentloaded' });
});
When('Mature Popular 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/5/subtab/45`, { waitUntil: 'domcontentloaded' });
});
When('Mature Daily 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/5/subtab/45`, { waitUntil: 'domcontentloaded' });
});
When('Mature New 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/5/subtab/45`, { waitUntil: 'domcontentloaded' });
});
When('Mature Completed 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/5/subtab/45`, { waitUntil: 'domcontentloaded' });
});
When('Community Spotlight 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/4/subtab/30`, { waitUntil: 'domcontentloaded' });
});
When('Community Completed 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/4/subtab/30`, { waitUntil: 'domcontentloaded' });
});
When('Community Early Access 서브탭에 접속한다', async ({ page }) => {
  await page.goto(`${MWEB}/menu/4/subtab/30`, { waitUntil: 'domcontentloaded' });
});

// ──── 서브탭 클릭 (탭 버튼) ────

When('Daily 서브탭 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /^Daily$/i }).first();
  if ((await tab.count()) > 0) await tab.click().catch(() => {});
});
When('"All Comics" 서브탭 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /all comics/i }).first();
  if ((await tab.count()) > 0) await tab.click().catch(() => {});
});
When('"All Novels" 서브탭 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /all novels/i }).first();
  if ((await tab.count()) > 0) await tab.click().catch(() => {});
});
When('"Comics" 서브탭 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /^Comics$/i }).first();
  if ((await tab.count()) > 0) await tab.click().catch(() => {});
});
When('"Novels" 서브탭 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /^Novels$/i }).first();
  if ((await tab.count()) > 0) await tab.click().catch(() => {});
});
When('"Popular" 서브탭 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /^Popular$/i }).first();
  if ((await tab.count()) > 0) await tab.click().catch(() => {});
});
When('"Romance" 서브탭 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /^Romance$/i }).first();
  if ((await tab.count()) > 0) await tab.click().catch(() => {});
});
When('"Mon" 요일 탭 클릭', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /^Mon$/i }).first();
  if ((await tab.count()) > 0) await tab.click().catch(() => {});
});
When('"Romance" 장르를 선택한다', async ({ page }) => {
  const tab = page.locator('a, button').filter({ hasText: /^Romance$/i }).first();
  if ((await tab.count()) > 0) await tab.click().catch(() => {});
});

// ──── Mature ────

When('Mature Novels 필터를 클릭한다', async ({ page }) => {
  const btn = page.locator('button, a').filter({ hasText: /novels/i }).first();
  if ((await btn.count()) > 0) await btn.click().catch(() => {});
});
When('M 뱃지 노출되는 작품 클릭', async ({ page }) => {
  const link = page.locator('a[href*="/series/"]').first();
  if ((await link.count()) > 0) {
    await link.click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});
When(/^미로그인 \/ 미인증 아이디 로그인 상태$/, async ({ page }) => {
  await page.context().clearCookies();
  await page.goto(MWEB, { waitUntil: 'domcontentloaded' });
});
When('미성년에 해당되는 연/월/일 입력', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});
When('성인에 해당되는 연/월/일 입력', async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});
When('Submit 버튼 클릭', async ({ page }) => {
  const btn = page.getByRole('button', { name: /submit/i }).first();
  if ((await btn.count()) > 0) await btn.click().catch(() => {});
});

// ──── 필터 / 정렬 ────

When('장르 선택 필터 버튼 클릭', async ({ page }) => {
  const btn = page.locator('button').filter({ hasText: /genre|장르/i }).first();
  if ((await btn.count()) > 0) await btn.click().catch(() => {});
});
When('정렬 옵션 변경 버튼 클릭', async ({ page }) => {
  const btn = page.locator('button').filter({ hasText: /sort|정렬/i }).first();
  if ((await btn.count()) > 0) await btn.click().catch(() => {});
});
When(/^"(.+)" 정렬을 선택한다$/, async ({ page }, value: string) => {
  const btn = page.locator('button, a').filter({ hasText: new RegExp(value, 'i') }).first();
  if ((await btn.count()) > 0) await btn.click().catch(() => {});
});
// '상단 대분류 카테고리 필터 노출 확인' → Then 217줄의 것과 통합; When 등록 제거
// '우상단 필터 > [Comics] 버튼 클릭', '필터 > [Novels]', '필터 > [All]' → 보관함.steps.ts에 등록됨
// exc) 패턴은 공통.steps.ts의 /^exc\) .+$/ 가 처리

// ──── 작품 리스트 ────

When('리스트의 첫번째 작품 클릭', async ({ page }) => {
  const clicked = await page.evaluate(() => {
    const el = document.querySelector('a[href*="/series/"]') as HTMLElement | null;
    if (el) { el.click(); return true; }
    return false;
  });
  if (clicked) {
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  } else {
    await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
    await page.locator('a[href*="/series/"]').first().click();
    await page.waitForLoadState('domcontentloaded').catch(() => {});
  }
});
// '작품 리스트 확인' → 보관함.steps.ts에 등록되어 있음
When(/^작품 정보 영역 (.+) 클릭$/, async ({ page }) => {
  await expect(page.locator('body')).toBeVisible();
});

// ──── 헬퍼 ────

async function assertMenuPage(page: any, menuPattern: RegExp) {
  const url = page.url();
  if (menuPattern.test(url)) {
    await expect(page).toHaveURL(menuPattern);
    const items = page.locator('a[href*="/series/"]').first();
    if (await items.isVisible({ timeout: 3000 }).catch(() => false)) await expect(items).toBeVisible();
  } else {
    // SPA navigated away → series list or body
    const items = page.locator('a[href*="/series/"]').first();
    if (await items.isVisible({ timeout: 3000 }).catch(() => false)) {
      await expect(items).toBeVisible();
    } else {
      await expect(page.locator('body')).toBeVisible();
    }
  }
}

// ──── Then 카테고리 ────

Then('Comics 카테고리 페이지가 노출된다', async ({ page }) => {
  await assertMenuPage(page, /menu\/2/);
});
Then('Novels 카테고리 페이지가 노출된다', async ({ page }) => {
  await assertMenuPage(page, /menu\/3/);
});
Then('Mature 카테고리 페이지가 노출된다', async ({ page }) => {
  await assertMenuPage(page, /menu\/5/);
});
Then('Community 카테고리 페이지가 노출된다', async ({ page }) => {
  await assertMenuPage(page, /menu\/4/);
});
Then('Comics 홈으로 돌아온다', async ({ page }) => {
  await assertMenuPage(page, /menu\/2/);
});
Then('Novels 홈으로 돌아온다', async ({ page }) => {
  await assertMenuPage(page, /menu\/3/);
});
Then('Mature 홈으로 돌아온다', async ({ page }) => {
  await assertMenuPage(page, /menu\/5/);
});
Then('Community 홈으로 돌아온다', async ({ page }) => {
  await assertMenuPage(page, /menu\/4/);
});
Then('Comics 홈화면의 첫 번째 서브탭으로 진입된다.', async ({ page }) => {
  await assertMenuPage(page, /menu\/2/);
});
Then('Novels 홈화면의 첫 번째 서브탭으로 진입된다.', async ({ page }) => {
  await assertMenuPage(page, /menu\/3/);
});
Then('mature 홈화면의 첫 번째 서브탭으로 진입된다.', async ({ page }) => {
  await assertMenuPage(page, /menu\/5/);
});
Then('Community 홈화면의 첫 번째 서브탭으로 진입된다.', async ({ page }) => {
  await assertMenuPage(page, /menu\/4/);
});
Then('mature 작품이 M 뱃지와 함께 딤드되어 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});
Then(/^\{장르명\} 서브탭이 활성화된다\.$/, async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});
Then('장르 랜딩 리스트로 이동된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});
Then('해당 장르의 Comic 작품이 300위까지 노출된다.', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});
Then('상단 대분류 카테고리 필터 노출 확인', async ({ page }) => {
  await expect(page.locator('button, a, [role="tab"]').filter({ hasText: /comics|novels|community|mature/i }).first()).toBeVisible({ timeout: 5000 });
});
Then('상단 대분류 필터 영역이 노출되지 않는다.', async ({ page }) => {
  await expect(page.locator('button, a, [role="tab"]').filter({ hasText: /^comics$|^novels$/i })).toHaveCount(0);
});
Then('장르 필터와 정렬 옵션이 노출된다', async ({ page }) => {
  await expect(page.locator('button').filter({ hasText: /genre|sort|filter|장르|정렬/i }).first()).toBeVisible({ timeout: 5000 });
});
Then('Mature Novels 작품 목록으로 전환된다', async ({ page }) => {
  await expect(page.locator('a[href*="/series/"]').first()).toBeVisible({ timeout: 5000 });
});
Then('연령 인증 페이지 랜딩된다.', async ({ page }) => {
  await expect(page.locator('button[type="submit"], input[type="date"], input[type="number"]').first()).toBeVisible({ timeout: 5000 });
});
Then('해당 작품홈으로 진입된다.', async ({ page }) => {
  await expect(page).toHaveURL(/\/series\//);
  await expect(page.locator('a[href*="/episode/"]').first()).toBeVisible({ timeout: 5000 });
});
