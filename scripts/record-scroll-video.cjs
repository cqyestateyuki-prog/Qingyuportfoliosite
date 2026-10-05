/**
 * 录制"滚动驱动"落地页动画 → 视频(webm)。再用 ffmpeg 转 mp4 / gif(见 README)。
 *
 *   node scripts/record-scroll-video.cjs <url> <out-dir> [scrollSec] [holdStartSec] [holdEndSec] [W] [H]
 *   例: node scripts/record-scroll-video.cjs http://localhost:3040/ ./video-out 9 2.2 2.2
 *
 * 原理: Playwright 内置 recordVideo 录整个 context; 用小步 window.scrollTo + 短延时平滑滚过全页,
 *       驱动 scroll-jacking 的场景动画(Scene1 → Scene2 …)。全新 context 无 localStorage,
 *       站点走默认语言(如 WishFlow 默认英文)。
 *
 * 前置: playwright + chromium (`npm i -D playwright && npx playwright install chromium`) 和 ffmpeg。
 */
function loadPlaywright() {
  // require 按"脚本所在目录"向上找 node_modules(不是 cwd)。挨个试常见位置。
  const tries = ['playwright', '/Users/qingyu/node_modules/playwright'];
  for (const t of tries) { try { return require(t); } catch (e) { /* next */ } }
  throw new Error('playwright 未找到。装: npm i -D playwright && npx playwright install chromium');
}
const { chromium } = loadPlaywright();

(async () => {
  const url = process.argv[2] || 'http://localhost:3040/';
  const outDir = process.argv[3] || './video-out';
  const scrollSec = Number(process.argv[4] || 9);   // 滚动总时长(秒)
  const holdStart = Number(process.argv[5] || 2.2); // 开头在首屏停留
  const holdEnd = Number(process.argv[6] || 2.2);   // 结尾在末屏停留
  const W = Number(process.argv[7] || 1280);
  const H = Number(process.argv[8] || 800);

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: 2,                             // 渲染清晰; 录制仍是 W×H
    recordVideo: { dir: outDir, size: { width: W, height: H } },
  });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(holdStart * 1000);

  // ★页面内 requestAnimationFrame 平滑滚(一次 evaluate, 无 per-step 网络往返)——
  //   对线上站尤其关键: 逐步 page.evaluate 的往返开销会让实际时长远超预期(4s→40s+)。
  const maxScroll = await page.evaluate((durMs) => new Promise((resolve) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const start = performance.now();
    (function tick(now) {
      const t = Math.min(1, (now - start) / durMs);
      window.scrollTo(0, Math.round(max * t));
      if (t < 1) requestAnimationFrame(tick); else resolve(max);
    })(performance.now());
  }), scrollSec * 1000);
  await page.waitForTimeout(holdEnd * 1000);

  const video = page.video();
  await ctx.close();                                 // ★close 才落盘视频
  const p = await video.path();
  await browser.close();
  console.log('VIDEO', p, `(maxScroll=${maxScroll})`);
})().catch((e) => { console.error('ERR', e.message); process.exit(1); });
