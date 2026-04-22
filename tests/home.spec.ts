import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Tapas 홈페이지가 정상적으로 열린다', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.expectLoaded();
});