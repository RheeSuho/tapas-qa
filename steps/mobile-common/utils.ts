// Braze in-app message 팝업이 pointer events를 막을 때 닫아줌
export async function dismissBrazePopup(page: any) {
  const root = page.locator('[class*="ab-iam-root"], [class*="ab-in-app"]').first();
  if (!(await root.isVisible({ timeout: 1500 }).catch(() => false))) return;
  const frame = page.frameLocator('[class*="ab-in-app-message"]').first();
  const closeInFrame = frame.locator('[class*="close"], button').first();
  if ((await closeInFrame.count().catch(() => 0)) > 0) {
    await closeInFrame.click({ timeout: 3000 }).catch(() => {});
  }
  await page.keyboard.press('Escape').catch(() => {});
  await page.waitForTimeout(300);
}
