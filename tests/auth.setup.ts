// tests/auth.setup.ts
// 최초 1회 이메일 로그인을 수행하고 로그인 상태를 .auth/user.json에 저장합니다.
// CI 환경에서는 AUTH_STATE_B64 환경변수가 있으면 로그인 없이 세션 파일을 직접 복원합니다.

import { test as setup, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

const AUTH_MAX_AGE_HOURS = 24;
const IS_QA =
  (process.env.TAPAS_BASE_URL || '').includes('qa.') ||
  (process.env.TAPAS_MWEB_BASE_URL || '').includes('qa-m.');
const authFile = path.join(__dirname, IS_QA ? '../.auth/user.qa.json' : '../.auth/user.json');

// QA 환경 로그인 URL:
// - TAPAS_BASE_URL이 qa. 포함 → 그대로 사용
// - IS_QA이지만 TAPAS_BASE_URL이 prod → qa-m URL에서 qa URL 유도
// - prod → TAPAS_BASE_URL 또는 tapas.io 기본값
const LOGIN_BASE_URL =
  IS_QA && !(process.env.TAPAS_BASE_URL || '').includes('qa.')
    ? (process.env.TAPAS_MWEB_BASE_URL || '').replace('qa-m.tapas.io', 'qa.tapas.io')
    : (process.env.TAPAS_BASE_URL || 'https://tapas.io');

setup('이메일 계정으로 로그인하고 세션 저장', async ({ page }) => {
  const authDir = path.dirname(authFile);
  if (!fs.existsSync(authDir)) fs.mkdirSync(authDir, { recursive: true });

  // CI 전용: GitHub Secret에서 auth state를 직접 복원 (login 흐름 스킵)
  // QA 환경은 prod 세션을 재사용할 수 없으므로 B64 복원 스킵 → 실제 로그인 수행
  const authStateB64 = !IS_QA ? process.env.AUTH_STATE_B64 : null;
  if (authStateB64) {
    console.log('[setup] AUTH_STATE_B64 감지 — 로그인 없이 세션 복원');
    fs.writeFileSync(authFile, Buffer.from(authStateB64, 'base64').toString('utf-8'));
    console.log('[setup] 세션 복원 완료');
    return;
  }

  // 로컬: 기존 세션이 있고 24시간 이내라면 재사용
  if (fs.existsSync(authFile)) {
    const ageHours = (Date.now() - fs.statSync(authFile).mtimeMs) / (1000 * 60 * 60);
    if (ageHours < AUTH_MAX_AGE_HOURS) {
      console.log(`[setup] 기존 세션 재사용 (${ageHours.toFixed(1)}시간 전 저장)`);
      return;
    }
    console.log(`[setup] 세션이 오래됨 (${ageHours.toFixed(1)}시간), 재로그인`);
  }

  const email = IS_QA ? (process.env.TAPAS_QA_EMAIL || process.env.TAPAS_EMAIL) : process.env.TAPAS_EMAIL;
  const password = IS_QA ? (process.env.TAPAS_QA_PASSWORD || process.env.TAPAS_PASSWORD) : process.env.TAPAS_PASSWORD;
  if (!email || !password) {
    throw new Error('TAPAS_EMAIL / TAPAS_PASSWORD 환경변수가 없습니다.');
  }
  console.log(`[setup] 로그인 시도 — ${email}`);

  // 1. 홈으로 이동 (QA는 절대 URL로 직접 이동 — setup project baseURL은 prod 고정)
  await page.goto(LOGIN_BASE_URL, { waitUntil: 'domcontentloaded' });
  console.log(`[setup] 현재 URL: ${page.url()}`);

  // 2. 쿠키 배너가 있으면 Accept (최대 5초 대기)
  try {
    await page.getByRole('button', { name: /accept/i }).click({ timeout: 5000 });
    console.log('[setup] 쿠키 배너 Accept 클릭');
  } catch {
    // 배너 없음 — 계속 진행
  }

  // 3. GNB > Login 링크 클릭 (없으면 직접 signin 페이지로)
  const loginLink = page.getByRole('link', { name: /log ?in/i });
  if ((await loginLink.count()) > 0) {
    await loginLink.first().click();
  } else {
    await page.goto(`${LOGIN_BASE_URL}/account/signin`, { waitUntil: 'domcontentloaded' });
  }
  console.log(`[setup] signin 이동 후 URL: ${page.url()}`);

  // 4. 이메일/비밀번호 입력
  await page.getByPlaceholder(/email/i).waitFor({ timeout: 10000 });
  await page.getByPlaceholder(/email/i).fill(email);
  await page.getByPlaceholder(/password/i).fill(password);

  // 5. 폼 내 Login 버튼 클릭 (GNB에도 Log in이 있으므로 .last())
  await page.getByRole('button', { name: /^log ?in$/i }).last().click();

  // 6. 로그인 성공 검증
  await expect(page).not.toHaveURL(/signin/, { timeout: 20000 });
  console.log(`[setup] 로그인 성공 — 현재 URL: ${page.url()}`);

  // 7. 세션 저장
  await page.context().storageState({ path: authFile });
  console.log('[setup] 세션 저장 완료');
});
