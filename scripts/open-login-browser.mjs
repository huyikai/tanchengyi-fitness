/**
 * Headed Chrome for maintainer login (Douyin / XHS / Bilibili).
 * Persistent profile: <repo>/.chrome-profile
 *
 * Usage:
 *   node open-login-browser.mjs [url]
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const root = 'D:/develop/tanchengyi-fitness';
const profile = path.join(root, '.chrome-profile');
fs.mkdirSync(profile, { recursive: true });

const startUrl =
  process.argv[2] || 'https://v.douyin.com/hZjxJAy1m88/';

const context = await chromium.launchPersistentContext(profile, {
  channel: 'chrome',
  headless: false,
  viewport: { width: 1280, height: 900 },
  locale: 'zh-CN',
  args: ['--disable-blink-features=AutomationControlled'],
});

const page = context.pages()[0] || (await context.newPage());
await page.goto(startUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
console.log(
  JSON.stringify({
    ok: true,
    url: page.url(),
    title: await page.title(),
    profile,
    hint: 'Scan QR / log in in this Chrome window, then reply in chat: 已登录，继续',
  }),
);

// Keep process alive until user closes the browser window
context.on('close', () => process.exit(0));
await new Promise(() => {});
