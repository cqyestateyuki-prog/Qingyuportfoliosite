const { chromium } = require('/Users/qingyu/node_modules/playwright');
(async () => {
  const OUT = process.argv[2];
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport:{width:1280,height:800}, deviceScaleFactor:2, recordVideo:{dir:OUT, size:{width:1280,height:800}} });
  const page = await ctx.newPage();
  try {
    await page.goto('http://localhost:3040/', { waitUntil:'load' });
    await page.waitForTimeout(1800);
    await page.evaluate((d)=>new Promise(r=>{const m=document.documentElement.scrollHeight-window.innerHeight;const s=performance.now();(function t(n){const p=Math.min(1,(n-s)/d);window.scrollTo(0,Math.round(m*p));p<1?requestAnimationFrame(t):r();})(performance.now());}),5000);
    await page.waitForTimeout(1600);
    // 找视口内、最靠水平中心的可见卡片
    const cards = page.locator('[aria-label^="Step into"], [aria-label^="走进"]');
    const cnt = await cards.count();
    let best=null, bestDist=Infinity;
    for (let i=0;i<cnt;i++){
      const box = await cards.nth(i).boundingBox();
      if (!box) continue;
      const cx=box.x+box.width/2, cy=box.y+box.height/2;
      if (cx<60||cx>1220||cy<80||cy>740) continue;
      const d=Math.abs(cx-640);
      if (d<bestDist){bestDist=d; best={box,cx,cy};}
    }
    console.log('cards:', cnt, 'best:', best?`${Math.round(best.cx)},${Math.round(best.cy)}`:'none');
    if (best) { await page.mouse.click(best.cx, best.box.y + best.box.height*0.42); console.log('clicked'); }
    await page.waitForTimeout(4500);
  } catch (e) { console.error('STEP ERR', e.message); }
  const video = page.video();
  await ctx.close();
  console.log('VIDEO', await video.path());
  await browser.close();
})().catch(e => { console.error('FATAL', e.message); });
