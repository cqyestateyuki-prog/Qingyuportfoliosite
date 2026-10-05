/**
 * 踩点:逐条路由真跑一遍,确认没有空态/报错/门,顺手记 scrollHeight。
 * node scripts/portfolio-ui-kit/recon.js
 */
const { chromium } = require('/Users/qingyu/node_modules/playwright');

const BASE = process.env.BASE || 'http://localhost:5173';
const PROJECT_IDS = [
  'kogna', 'hexaedge', 'wishflow', 'sparkup', 'excel-ai-agent',
  'ai-community-platform', 'gbkparts', 'miaworld', 'eternal-dreams',
  'music-encounter', 'my-little-fish-tank', 'petiboxy',
  'prime-directive', 'stumbldoor', 'ziplink',
];
const ROUTES = ['/', '/about', ...PROJECT_IDS.map((id) => `/project/${id}`)];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e).slice(0, 120)));
  page.on('response', (r) => {
    if (r.status() >= 400 && !r.url().includes('favicon')) errors.push(`${r.status()} ${r.url()}`);
  });

  for (const route of ROUTES) {
    errors.length = 0;
    try {
      await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      console.log(`${route}  GOTO-FAIL ${String(e).slice(0, 80)}`);
      continue;
    }
    await page.waitForTimeout(1500);
    const info = await page.evaluate(() => ({
      path: location.pathname,
      h: document.documentElement.scrollHeight,
      text: document.body.innerText.replace(/\s+/g, ' ').slice(0, 90),
      webgl: !!document.querySelector('canvas'),
    }));
    const flag = info.path !== route ? ` REDIRECTED->${info.path}` : '';
    const err = errors.length ? `  ERR[${errors.slice(0, 2).join(' | ')}]` : '';
    console.log(`${route}  h=${info.h} canvas=${info.webgl}${flag}${err}\n   "${info.text}"`);
  }
  await browser.close();
})();
