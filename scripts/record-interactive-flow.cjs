/**
 * 录制 WishFlow "create a wish" 全流程 → 视频(webm)。
 * storyboard: Wish Gallery 顶→底(4张样例卡都露过) → 跳 Create 页 → 打字填一句愿望
 *             → 点生成 → loading → 出线描图 → 往下滚看结果卡。
 *
 *   node record-wishflow-create.cjs [outDir] [W] [H]
 *
 * 前置: playwright + chromium, dev 跑在 3040。访客可生成(No sign-up needed)。
 */
function loadPlaywright() {
  const tries = ['playwright', '/Users/qingyu/node_modules/playwright'];
  for (const t of tries) { try { return require(t); } catch (e) {} }
  throw new Error('playwright 未找到');
}
const { chromium } = loadPlaywright();

const BASE = 'http://localhost:3040';
const WISH = 'Open a cozy bookshop cafe by the sea';

// 页面内 RAF 平滑滚(一次 evaluate, 无 per-step 往返)。dir: 'down'|'top'
function smoothScroll(page, durMs, toBottom = true) {
  return page.evaluate(({ durMs, toBottom }) => new Promise((resolve) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const from = window.scrollY;
    const to = toBottom ? max : 0;
    const start = performance.now();
    (function tick(now) {
      const t = Math.min(1, (now - start) / durMs);
      const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // easeInOutQuad
      window.scrollTo(0, Math.round(from + (to - from) * e));
      if (t < 1) requestAnimationFrame(tick); else resolve(max);
    })(performance.now());
  }), { durMs, toBottom });
}

(async () => {
  const outDir = process.argv[2] || './wf-create-out';
  const W = Number(process.argv[3] || 1280);
  const H = Number(process.argv[4] || 800);

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: 2,
    recordVideo: { dir: outDir, size: { width: W, height: H } },
  });
  const page = await ctx.newPage();

  try {
    // —— 首次进站, 强制英文 + 把首访提示气泡设为已读(免得弹出来挡镜头) ——
    await page.goto(BASE + '/wishes', { waitUntil: 'load' });
    await page.evaluate(() => {
      localStorage.setItem('wishflow:lang', 'en');
      for (const k of ['wishflow_hint_today_v1', 'wishflow_hint_create_v1', 'wishflow_hint_gallery_v1']) {
        localStorage.setItem(k, '1');
      }
    });
    await page.reload({ waitUntil: 'load' });
    await page.waitForTimeout(1800);   // 开头停留看首屏

    // ① Wish Gallery 顶→底(露 4 张卡)
    await smoothScroll(page, 5200, true);
    await page.waitForTimeout(900);
    await smoothScroll(page, 900, false);   // 回顶
    await page.waitForTimeout(500);

    // ② 跳 Create 页(点导航 "Create", 客户端平滑切页)
    await page.getByRole('link', { name: 'Create', exact: true }).first().click();
    await page.waitForTimeout(1400);

    // ③ 填一句愿望(打字机效果)
    const ta = page.locator('textarea').first();
    await ta.click();
    await ta.type(WISH, { delay: 42 });
    await page.waitForTimeout(700);

    // ④ 点生成
    await page.getByText('Generate My Wish Image', { exact: false }).first().click();
    await page.waitForTimeout(600);

    // ⑤ 等出图(loading 动画期间录着; 出现结果标志后停）
    await page.waitForFunction(
      () => /AI-generated line drawing|Back to edit/i.test(document.body.innerText),
      { timeout: 45000 }
    ).catch(() => {});
    await page.waitForTimeout(1600);   // 停一下看成图

    // ⑥ 往下滚看结果卡
    await smoothScroll(page, 4200, true);
    await page.waitForTimeout(1800);
  } catch (e) {
    console.error('STEP-ERR', e.message);   // 吞掉, 保证下面 ctx.close() 落盘视频
  }

  const video = page.video();
  await ctx.close();                         // ★close 才落盘
  const p = await video.path();
  await browser.close();
  console.log('VIDEO', p);
})().catch((e) => { console.error('ERR', e.message); process.exit(1); });
