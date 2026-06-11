import { defineConfig, devices } from '@playwright/test';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '..', '.env') });

export default defineConfig({
  testDir: __dirname,
  use: {
    baseURL: process.env.TAPAS_BASE_URL || 'https://tapas.io',
    storageState: path.join(__dirname, '..', '.auth', 'user.json'),
    headless: true,
    launchOptions: {
      args: ['--disable-features=LocalNetworkAccessChecks,PrivateNetworkAccessRespectPreflightResults'],
    },
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
