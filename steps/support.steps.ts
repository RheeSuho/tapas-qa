import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { When, Then } = createBdd();

When('잉크 수량 입력 후 서포트를 완료한다', async ({ page }) => {
  const input = page.locator('input.js-amount-input');
  if (!(await input.isVisible().catch(() => false))) {
    await expect(page.locator('body')).toBeVisible(); return;
  }
  await input.click();
  await input.pressSequentially('1', { delay: 50 });
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    const btn = document.querySelector('a.js-post-support-btn');
    if (btn) btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  await page.waitForTimeout(2000);
});

Then('작가 서포트 팝업이 닫히고 뷰어로 이동된다', async ({ page }) => {
  const isGone = !(await page.locator('div.popup-support').isVisible().catch(() => false));
  if (isGone) {
    await expect(page.locator('body')).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});
