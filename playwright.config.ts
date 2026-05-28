import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const IS_QA = (process.env.TAPAS_BASE_URL || '').includes('qa.');
const STORAGE_STATE = path.join(__dirname, IS_QA ? '.auth/user.qa.json' : '.auth/user.json');

// BDD: features/*.feature + steps/*.ts → .features-gen 디렉토리로 자동 컴파일
const bddTestDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/*.ts',  // mobile/ 서브디렉토리 제외
});

// BDD: Mweb features-mweb/*.feature + steps/mobile/*.ts (Mweb 전용 시나리오)
const bddMobileTestDir = defineBddConfig({
  outputDir: '.features-gen-mweb',
  features: 'features-mweb/**/*.feature',
  steps: 'steps/mobile/**/*.ts',
});

// BDD: 공통 TC를 iPhone 13 에뮬레이션으로 실행 (steps/*.ts 재사용)
const bddMobileCommonTestDir = defineBddConfig({
  outputDir: '.features-gen-mweb-common',
  features: 'features/**/*.feature',
  steps: 'steps/*.ts',
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 120000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* CI: ubuntu-latest는 CPU 2개 → workers 2로 병렬 실행 */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['allure-playwright', { outputFolder: 'allure-results', detail: true }],
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
      use: {
        ...devices['Desktop Chrome'],
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      testDir: bddTestDir,
      use: {
        ...devices['Desktop Firefox'],
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      testDir: bddTestDir,
      use: {
        ...devices['Desktop Safari'],
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },

    /* Mweb — m.tapas.io / iPhone 13 (Mweb 전용 시나리오) */
    {
      name: 'mobile-safari',
      testDir: bddMobileTestDir,
      use: {
        ...devices['iPhone 13'],
        baseURL: 'https://m.tapas.io',
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },

    /* Mweb 공통 — 162개 공통 TC를 iPhone 13으로 실행 */
    {
      name: 'mobile-safari-common',
      testDir: bddMobileCommonTestDir,
      use: {
        ...devices['iPhone 13'],
        storageState: STORAGE_STATE,
      },
      dependencies: ['setup'],
    },

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
