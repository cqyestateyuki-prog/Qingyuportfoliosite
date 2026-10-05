/**
 * Portfolio UI Kit 截图 — 17 屏 × EN/ZH × 桌面/手机
 *
 *   npm run dev -- --port 5173 --strictPort   # 先起 dev server
 *   node scripts/portfolio-ui-kit/shoot.cjs             # 全量
 *   ONLY=home node scripts/portfolio-ui-kit/shoot.cjs   # 只拍一屏(调试)
 *
 * 产出 PNG 原图到 scripts/portfolio-ui-kit/out/(gitignore),
 * 压缩进 public/portfolio-ui-kit/shots/ 由 compress.sh 负责。
 * 语言切换走 localStorage('portfolio-language'),不是 URL。
 */
const { chromium } = require('/Users/qingyu/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, 'out');
const BASE = process.env.BASE || 'http://localhost:5173';

const SCREENS = [
  ['home', '/'],
  ['about', '/about'],
  ['kogna', '/project/kogna'],
  ['hexaedge', '/project/hexaedge'],
  ['wishflow', '/project/wishflow'],
  ['sparkup', '/project/sparkup'],
  ['excel-ai-agent', '/project/excel-ai-agent'],
  ['ai-community-platform', '/project/ai-community-platform'],
  ['gbkparts', '/project/gbkparts'],
  ['miaworld', '/project/miaworld'],
  ['eternal-dreams', '/project/eternal-dreams'],
  ['music-encounter', '/project/music-encounter'],
  ['my-little-fish-tank', '/project/my-little-fish-tank'],
  ['petiboxy', '/project/petiboxy'],
  ['prime-directive', '/project/prime-directive'],
  ['stumbldoor', '/project/stumbldoor'],
  ['ziplink', '/project/ziplink'],
];

async function settle(p) {
  // 滚一遍触发懒加载与入场动画, 回顶等动画跑完
  await p.evaluate(async () => {
    const H = document.documentElement.scrollHeight;
    for (let y = 0; y < H; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 180)); }
    window.scrollTo(0, H); await new Promise(r => setTimeout(r, 800));
    window.scrollTo(0, 0); await new Promise(r => setTimeout(r, 600));
  });
  await p.waitForTimeout(4000);
  // scroll-linked 的中间态复位:fullPage 拼接不触发滚动, 视口外的 ReelItem 之类
  // 停在 opacity 0.15 / scale 0.86 / y 90 的"远处"状态, 长图里就是一大段空。
  // 只碰 0.05–0.99 的半透明(=滚动中间态), opacity 0 的是真隐藏元素, 不动。
  await p.evaluate(() => {
    document.querySelectorAll('[style]').forEach((el) => {
      const o = parseFloat(el.style.opacity);
      if (!Number.isNaN(o) && o > 0.05 && o < 0.995) el.style.opacity = '1';
      const t = el.style.transform || '';
      if (/scale|translate/.test(t)) el.style.transform = 'none';
    });
    // Showcase 的 feature-panel 是 whileInView + once:false, 回顶后重新藏回 opacity 0。
    // 全站唯一的 once:false, 定点强制; 其他 reveal 都是 once:true, 滚一遍就留住了。
    document.querySelectorAll('.feature-panel').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  });
  await p.waitForTimeout(400);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const only = process.env.ONLY;
  const browser = await chromium.launch();

  for (const mobile of [false, true]) {
    for (const lang of ['en', 'zh']) {
      const ctx = await browser.newContext({
        viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 },
        deviceScaleFactor: 2,
        isMobile: mobile, hasTouch: mobile,
        locale: lang === 'zh' ? 'zh-CN' : 'en-US',
      });
      await ctx.addInitScript((l) => {
        try {
          localStorage.setItem('portfolio-language', l);
          // hero 滚动叙事直达定格态(ChapterHero SEEN_KEY), 不然长图顶端是叙事中段
          sessionStorage.setItem('qy-hero-narrative-seen', '1');
        } catch {}
      }, lang);
      const p = await ctx.newPage();
      const failed = [];

      for (const [name, route] of SCREENS) {
        if (only && name !== only) continue;
        const file = `${mobile ? 'm-' : ''}${name}-${lang}`;
        try {
          await p.goto(BASE + route, { waitUntil: 'load', timeout: 60000 });
          await p.waitForTimeout(1500);
          await settle(p);
          await p.screenshot({ path: path.join(OUT, file + '.png'), fullPage: true });
          console.log('SAVED', file);
        } catch (e) {
          failed.push(file);
          console.log('FAIL ', file, String(e).slice(0, 100));
        }
      }
      await ctx.close();
      if (failed.length) console.log('!! FAILED THIS PASS:', failed.join(', '));
    }
  }
  await browser.close();
})();
