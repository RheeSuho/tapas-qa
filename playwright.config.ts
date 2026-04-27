import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const STORAGE_STATE = path.join(__dirname, '.auth/user.json');

// BDD: features/*.feature + steps/*.ts → .features-gen 디렉토리로 자동 컴파일
const bddTestDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.ts',
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
 use: {
    baseURL: process.env.TAPAS_BASE_URL || 'https://tapas.io',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    /* Chrome의 "로컬 네트워크 액세스" 팝업 비활성화 */
    launchOptions: {
      args: ['--disable-features=LocalNetworkAccessChecks,PrivateNetworkAccessRespectPreflightResults'],
    },
  },

  /* Configure projects for major browsers */
projects: [
    /* ① 로그인 전용 — 다른 프로젝트보다 먼저 1회 실행됨 */
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },

    /* ② 실제 테스트 — setup 끝난 뒤 저장된 로그인 상태 사용 */
    {
      name: 'chromium',
      testDir: bddTestDir,
      grepInvert: /@skip/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      testDir: bddTestDir,
      grepInvert: /@skip/,
      use: {
        ...devices['Desktop Firefox'],
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      testDir: bddTestDir,
      grepInvert: /@skip/,
      use: {
        ...devices['Desktop Safari'],
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
