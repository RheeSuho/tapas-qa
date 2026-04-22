// tests/auth.setup.ts
// 최초 1회 이메일 로그인을 수행하고 로그인 상태를 .auth/user.json에 저장합니다.

import { test as setup, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

// 세션 재사용 유효기간 (시간 단위)
const AUTH_MAX_AGE_HOURS = 24;

// 로그인 상태가 저장될 경로 (프로젝트 루트 기준 .auth/user.json)
const authFile = path.join(__dirname, '../.auth/user.json');

setup('이메일 계정으로 로그인하고 세션 저장', async ({ page }) => {
  // 이미 저장된 세션이 있고 24시간 이내라면 재사용 (로그인 스킵)
  if (fs.existsSync(authFile)) {
    const ageHours = (Date.now() - fs.statSync(authFile).mtimeMs) / (1000 * 60 * 60);
    if (ageHours < AUTH_MAX_AGE_HOURS) {
      console.log(`[setup] 기존 세션 재사용 (${ageHours.toFixed(1)}시간 전 저장)`);
      return; // 로그인 스킵
    }
    console.log(`[setup] 세션이 오래됨 (${ageHours.toFixed(1)}시간), 재로그인`);
  }

  // .env에서 계정 정보 읽기   ← 여기부터는 기존 코드 그대로
  const email = process.env.TAPAS_EMAIL; 
  const password = process.env.TAPAS_PASSWORD;

  if (!email || !password) {
    throw new Error(
      '.env 파일에 TAPAS_EMAIL과 TAPAS_PASSWORD를 설정해주세요.'
    );
  }

  // 1. 홈으로 이동
  await page.goto('/');

  // 2. 쿠키 배너가 있으면 Accept
  const accept = page.getByRole('button', { name: /accept/i });
  if (await accept.isVisible().catch(() => false)) {
    await accept.click();
  }

  // 3. GNB > Login 클릭
  await page.getByRole('link', { name: /log ?in/i }).first().click();

  // 4. 이메일/비밀번호 입력
  await page.getByPlaceholder(/email/i).fill(email);
  await page.getByPlaceholder(/password/i).fill(password);

// Log in 버튼이 GNB에도 있고 폼에도 있음 → 마지막에 나타나는 폼 버튼 클릭
await page.getByRole('button', { name: /^log ?in$/i }).last().click();

 // 6. 로그인 성공 검증 (signin 페이지에서 벗어나 홈으로 복귀)
await expect(page).not.toHaveURL(/signin/);

  // 7. 세션 상태를 파일로 저장
  await page.context().storageState({ path: authFile });
});