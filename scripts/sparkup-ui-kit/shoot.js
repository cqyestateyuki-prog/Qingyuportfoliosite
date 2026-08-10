/**
 * Spark Up UI Kit 截图 — 9 屏 × 桌面/手机
 *
 * 代码不在本仓(在 Spark Up 那个组织仓 willinghood/willinghood-core), 所以脚本放这儿。
 * 跑之前要把那边的前后端都起起来:
 *
 *   # 后端 (Python 3.13; 3.14 装不上 pydantic 2.9)
 *   cd <willinghood-core>/backend
 *   python3.13 -m venv venv && ./venv/bin/pip install -r requirements.txt
 *   ./venv/bin/uvicorn app.main:app --port 8000
 *
 *   # 前端
 *   cd <willinghood-core>/apps/web && npx vite --port 3050 --strictPort
 *
 *   node scripts/sparkup-ui-kit/shoot.js
 *
 * 产出到 scripts/sparkup-ui-kit/out/(已 gitignore), 压缩后进 public/sparkup-ui-kit/shots/。
 *
 * ★起后端会踩两个坑, 见本目录 README。
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, 'out');
const BASE = process.env.BASE || 'http://localhost:3050';

// 屏 → 路由。diagnostic 是走进流程后的第 1 题, 单独处理
const PAGES = [
  ['landing', '/'], ['ai-test', '/ai-test'], ['dashboard', '/dashboard'],
  ['idea-bank', '/idea-bank'], ['profile', '/profile'], ['register', '/register'],
  ['feedback', '/feedback'], ['terms', '/terms'],
];

async function fullShot(p, name) {
  await p.evaluate(async () => {
    const H = document.documentElement.scrollHeight;
    for (let y = 0; y < H; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 180)); }
    window.scrollTo(0, H); await new Promise(r => setTimeout(r, 700));
    window.scrollTo(0, 0); await new Promise(r => setTimeout(r, 500));
  });
  await p.waitForTimeout(3500);
  await p.screenshot({ path: path.join(OUT, name + '.png'), fullPage: true });
  console.log('SAVED', name);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();

  for (const mobile of [false, true]) {
    const tag = mobile ? 'm' : 'd';
    const ctx = await browser.newContext({
      viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 },
      deviceScaleFactor: 2, isMobile: mobile, hasTouch: mobile, locale: 'en-US',
    });
    const p = await ctx.newPage();

    for (const [name, route] of PAGES) {
      try {
        await p.goto(BASE + route, { waitUntil: 'networkidle', timeout: 40000 });
        await p.waitForTimeout(2500);
        await fullShot(p, `${tag}-${name}`);
      } catch (e) { console.log('FAIL', name, tag, e.message.slice(0, 70)); }
    }

    // ── 诊断流程: 收第 1 题(一句问题 + 三个选项)。第 12 题是多选十项, 太长不好看 ──
    try {
      await p.goto(BASE + '/ai-test', { waitUntil: 'networkidle' });
      await p.waitForTimeout(1500);
      await p.locator('button').filter({ hasText: /Quick Assessment/i }).first().click({ force: true });
      await p.waitForTimeout(1400);
      await p.locator('button').filter({ hasText: /^Start Diagnostic$/ }).first().click({ force: true });
      await p.waitForTimeout(3000);
      await p.screenshot({ path: path.join(OUT, `${tag}-diagnostic.png`) });
      console.log('SAVED', `${tag}-diagnostic`);
    } catch (e) { console.log('FAIL diagnostic', tag, e.message.slice(0, 70)); }

    await ctx.close();
  }
  await browser.close();
  console.log('DONE →', OUT);
})().catch(e => { console.error('FATAL', e.message); process.exit(1); });

/* ── 走完整个测评拿结果页(需要后端的 OpenAI key 有效) ──────────────────
 * /api/diagnostic/submit 会调 OpenAI 出分析; key 失效时返回
 *   500 "AI analysis failed: OpenAI API error: 401 - Incorrect API key provided"
 * key 修好后把下面这段接到上面的诊断分支里, 就能拿到 test-result 与有分数的 dashboard:
 *
 *   const NAV = ['Spark Up','Dashboard','AI Diagnostic','Idea Bank','Profile','Feedback',
 *                'Exit','Cancel','Not Now','Back','SIGN IN'];
 *   for (let i = 0; i < 24; i++) {
 *     if (await p.evaluate(() => /Total Readiness|Dimension Analysis/i.test(document.body.innerText))) break;
 *     const texts = await p.$$eval('button', els => els.map(e => (e.textContent||'').trim()));
 *     const cand = texts.map((t, ix) => ({ t, ix })).filter(x => x.t && !NAV.includes(x.t));
 *     const hasSubmit = cand.some(x => /^Submit/.test(x.t));
 *     if (hasSubmit) {
 *       // ★多选项也是 <button>(w-full ... rounded-xl border-2), 只是 cursor:default,
 *       //   按 cursor:pointer 找 div 一个都找不到 —— 这里卡过两轮
 *       for (const o of cand.filter(x => !/^(Submit|Previous)/.test(x.t)).slice(0, 3)) {
 *         await p.locator('button').nth(o.ix).click({ force: true });
 *         await p.waitForTimeout(350);
 *       }
 *       await p.locator('button:visible').filter({ hasText: /^Submit/ }).first().click({ force: true });
 *       await p.waitForTimeout(9000);
 *     } else if (cand.length) {
 *       await p.locator('button').nth(cand[cand.length - 1].ix).click({ force: true });   // 选最积极那项
 *     } else {
 *       // 量表题的 1–5 不是 <button>, 是无类名的 52x52 div(cursor:pointer)
 *       await p.evaluate(() => {
 *         const o = [...document.querySelectorAll('div')].filter(el =>
 *           el.children.length === 0 && /^[1-5]$/.test((el.textContent||'').trim())
 *           && getComputedStyle(el).cursor === 'pointer');
 *         if (o.length) o[o.length - 1].click();
 *       });
 *     }
 *     await p.waitForTimeout(1100);
 *   }
 */
