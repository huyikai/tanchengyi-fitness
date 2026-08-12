/**
 * Local Chrome coarse re-scan for blocked items.
 * Uses Playwright channel:chrome (Browse MCP daemon unavailable on this host).
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const root = 'D:/develop/tanchengyi-fitness';
const assets = path.join(root, 'research', 'coarse', 'assets');
fs.mkdirSync(assets, { recursive: true });

const targets = [
  {
    id: 'bilibili-space-tanchengyi',
    url: 'https://space.bilibili.com/521903482/',
    shot: '20260812-bilibili-space-521903482.png',
  },
  {
    id: 'bilibili-stretch-bv',
    url: 'https://www.bilibili.com/video/BV1EkV96nEyg/',
    shot: '20260812-bilibili-BV1EkV96nEyg.png',
  },
  {
    id: 'bilibili-arm-bv',
    url: 'https://www.bilibili.com/video/BV1GzEg6wEVb/',
    shot: '20260812-bilibili-BV1GzEg6wEVb.png',
  },
  {
    id: 'bilibili-kaisw-space',
    url: 'https://space.bilibili.com/2100737396/',
    shot: '20260812-bilibili-space-2100737396-kaisw.png',
  },
  {
    id: 'douyin-home',
    url: 'https://www.douyin.com/',
    shot: '20260812-douyin-home.png',
  },
  {
    id: 'douyin-shipin-ifbb',
    url: 'https://www.douyin.com/shipin/7644746457920194623',
    shot: '20260812-douyin-shipin-7644746457920194623.png',
  },
  {
    id: 'douyin-shipin-3split',
    url: 'https://www.douyin.com/shipin/7625835031486859291',
    shot: '20260812-douyin-shipin-7625835031486859291.png',
  },
  {
    id: 'xhs-search',
    url: 'https://www.xiaohongshu.com/search_result?keyword=%E8%B0%AD%E6%88%90%E4%B9%89%E5%81%A5%E8%BA%AB',
    shot: '20260812-xhs-search-tanchengyi.png',
  },
];

function classifyFailure(title, url, bodyText) {
  const t = `${title}\n${url}\n${bodyText}`;
  // login / captcha / phone (CJK via unicode escapes for encoding safety)
  if (
    /login|captcha|sign[\s-]?in/i.test(t) ||
    /\u767b\u5f55|\u626b\u7801|\u9a8c\u8bc1\u7801|\u8bf7\u5148\u767b\u5f55|\u624b\u673a\u53f7/.test(t)
  ) {
    return 'login_wall';
  }
  if (/412|forbidden/i.test(t) || /\u8bbf\u95ee\u53d7\u9650|\u98ce\u63a7|\u9a8c\u8bc1/.test(t)) {
    return 'other';
  }
  if (/404|not found/i.test(t) || /\u4e0d\u5b58\u5728|\u6ca1\u6709\u627e\u5230|\u6682\u65e0/.test(t)) {
    return 'not_found';
  }
  return null;
}

const usefulRe =
  /\u8c2d\u6210\u4e49|\u51ef\u5723\u738b|\u6295\u7a3f|\u7c89\u4e1d|\u64ad\u653e|BV|\u79c1\u6559|\u62c9\u4f38|\u4e09\u5206\u5316|bilibili/i;

const results = [];
const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
});
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  locale: 'zh-CN',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
});
const page = await context.newPage();

for (const t of targets) {
  const entry = {
    id: t.id,
    url: t.url,
    shot: t.shot,
    ok: false,
    finalUrl: '',
    title: '',
    reason: '',
    notes: '',
  };
  try {
    const resp = await page.goto(t.url, {
      waitUntil: 'domcontentloaded',
      timeout: 45000,
    });
    await page.waitForTimeout(2800);
    entry.finalUrl = page.url();
    entry.title = await page.title();
    const bodyText = await page.locator('body').innerText().catch(() => '');
    const status = resp?.status() ?? 0;
    entry.notes = `http=${status}; title=${entry.title.slice(0, 120)}; body=${bodyText.replace(/\s+/g, ' ').slice(0, 180)}`;
    const wall = classifyFailure(entry.title, entry.finalUrl, bodyText.slice(0, 2000));
    await page.screenshot({
      path: path.join(assets, t.shot),
      fullPage: false,
    });
    if (wall) {
      entry.reason = wall;
      entry.ok = false;
    } else if (status >= 400) {
      entry.reason = 'other';
      entry.ok = false;
    } else {
      entry.ok = true;
    }
    if (t.id.startsWith('bilibili') && usefulRe.test(`${entry.title}\n${bodyText}`)) {
      entry.ok = true;
      entry.reason = '';
    }
  } catch (err) {
    entry.reason = 'other';
    entry.notes = String(err?.message || err).slice(0, 240);
    try {
      await page.screenshot({
        path: path.join(assets, t.shot),
        fullPage: false,
      });
    } catch {
      /* ignore */
    }
  }
  results.push(entry);
  console.log(JSON.stringify(entry));
}

await browser.close();

const outPath = path.join(root, 'research', 'coarse', 'rescan-20260812.json');
fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
console.log(`wrote ${outPath}`);
