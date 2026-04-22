// tests/auth.check.spec.ts
// 로그인 상태가 제대로 복원되는지 확인하는 검증용 테스트
// 이 테스트는 auth.setup.ts가 먼저 실행된 뒤에 돌아감 (playwright.config의 dependencies 설정 때문)

import { test, expect } from '@playwright/test';

test('저장된 세션으로 테스트 시작 시 로그인 상태 유지', async ({ page }) => {
  // 1. 홈으로 이동 (로그인 작업 없이 바로 시작)
  await page.goto('/');

  // 2. GNB에 "Log in" 버튼이 더 이상 보이지 않아야 함
  //    (로그인 됐으면 Login 버튼 사라지고 프로필/라이브러리 아이콘이 보임)
  await expect(
    page.getByRole('button', { name: /^log ?in$/i })
  ).toHaveCount(0);

  // 3. 추가 확인: 프로필 관련 요소가 보이는지 (대략적으로)
  //    ※ 정확한 locator는 실제 DOM 보고 나중에 조정
  //    지금은 "로그인 안 된 흔적이 없다"는 것만 확실하게 검증
});