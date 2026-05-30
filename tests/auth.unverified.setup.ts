// tests/auth.unverified.setup.ts
// 미인증 계정(age verification 미완료) 세션을 .auth/unverified.json에 저장합니다.
// CI: UNVERIFIED_AUTH_STATE_B64 환경변수에서 복원
// 로컬: headed 모드로 실행 (npm run test:setup:unverified) → reCAPTCHA가 뜨면 수동 해결

import { test as setup, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

const AUTH_MAX_AGE_HOURS = 24;
const authFile = path.join(__dirname, '../.auth/unverified.json');

setup('미인증 계정 세션 저장', async ({ page }) => {
  const authDir = path.dirname(authFile);
  if (!fs.existsSync(authDir)) fs.mkdirSync(authDir, { recursive: true });

  // CI: UNVERIFIED_AUTH_STATE_B64에서 복원
  const authStateB64 = process.env.UNVERIFIED_AUTH_STATE_B64;
  if (authStateB64) {
    console.log('[unverified-setup] UNVERIFIED_AUTH_STATE_B64 감지 — 세션 복원');
    fs.writeFileSync(authFile, Buffer.from(authStateB64, 'base64').toString('utf-8'));
    console.log('[unverified-setup] 세션 복원 완료');
    return;
  }

  // 로컬: 기존 세션이 있고 24시간 이내라면 재사용
  if (fs.existsSync(authFile)) {
    const ageHours = (Date.now() - fs.statSync(authFile).mtimeMs) / (1000 * 60 * 60);
    if (ageHours < AUTH_MAX_AGE_HOURS) {
      console.log(`[unverified-setup] 기존 세션 재사용 (${ageHours.toFixed(1)}시간 전 저장)`);
      return;
    }
    console.log(`[unverified-setup] 세션이 오래됨 (${ageHours.toFixed(1)}시간), 재로그인`);
  }

  const email = process.env.TAPAS_UNVERIFIED_EMAIL;
  const password = process.env.TAPAS_UNVERIFIED_PASSWORD;
  if (!email || !password) {
    console.log('[unverified-setup] TAPAS_UNVERIFIED_EMAIL/PASSWORD 없음 — 스킵 (TPS-064는 skip 처리됨)');
    return;
  }

  console.log(`[unverified-setup] 로그인 시도 — ${email}`);
  try {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    try {
      await page.getByRole('button', { name: /accept/i }).click({ timeout: 5000 });
    } catch { /* 쿠키 배너 없음 */ }

    const loginLink = page.getByRole('link', { name: /log ?in/i });
    if ((await loginLink.count()) > 0) {
      await loginLink.first().click({ timeout: 5000 }).catch(() => {});
    } else {
      await page.goto('/account/signin', { waitUntil: 'domcontentloaded' });
    }

    await page.getByPlaceholder(/email/i).waitFor({ timeout: 10000 });
    await page.getByPlaceholder(/email/i).fill(email);
    await page.getByPlaceholder(/password/i).fill(password);

    // 버튼이 활성화될 때까지 잠깐 대기 (폼 JS 검증 대기)
    const loginBtn = page.getByRole('button', { name: /^log ?in$/i }).last();
    await loginBtn.waitFor({ timeout: 5000 }).catch(() => {});
    const isDisabled = await loginBtn.isDisabled().catch(() => true);
    if (isDisabled) {
      console.warn('[unverified-setup] 로그인 버튼 비활성 (reCAPTCHA 등). headed 모드 필요: npm run test:setup:unverified');
      return;
    }
    await loginBtn.click();

    // reCAPTCHA가 뜨면 headed 모드에서 수동으로 해결해야 함 — 최대 50초 대기 (전체 타임아웃 120s 초과 방지)
    console.log('[unverified-setup] 로그인 완료 대기 중... (reCAPTCHA가 있으면 수동으로 해결하세요)');
    const loginSuccess = await page.waitForURL(/^(?!.*signin).*$/, { timeout: 50000 }).then(() => true).catch(() => false);
    if (!loginSuccess) {
      console.warn('[unverified-setup] 로그인 실패 (reCAPTCHA 등). TPS-064는 skip 처리됩니다.');
      console.warn('[unverified-setup] headed 모드에서 재실행: npm run test:setup:unverified');
      return;
    }

    await page.context().storageState({ path: authFile });
    console.log('[unverified-setup] 세션 저장 완료');
  } catch (e) {
    console.warn(`[unverified-setup] 로그인 중 오류 발생 — TPS-064는 skip 처리됩니다: ${e}`);
    console.warn('[unverified-setup] headed 모드에서 재실행: npm run test:setup:unverified');
  }
});
