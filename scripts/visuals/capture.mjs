/**
 * 首图 / 案例配图用的截图工具:用本机 Chrome 无头模式按步骤截线上页面或本地 HTML。
 *
 * 用法:node scripts/visuals/capture.mjs steps.json
 *
 * steps.json 是一串步骤,按顺序执行:
 *   {"viewport": [宽, 高, 倍率, 是否手机]}   手机模式会顺带换成 iPhone UA
 *   {"go": "https://...", "settle": 毫秒}     打开页面后等它稳定,默认 4000
 *   {"js": "表达式"}                          在页面里执行,结果打印出来(隐藏弹窗、写 localStorage、滚动)
 *   {"insert": "3922X"}                       逐字真实输入到当前焦点框(搜索下拉要靠它才会弹)
 *   {"wait": 毫秒}
 *   {"shot": "输出.png", "clip": [x, y, w, h, 缩放]}   clip 可选,只截一块
 *
 * 为什么不用 puppeteer:Node 自带 WebSocket,直接说 CDP 就够,不用装依赖。
 * 截图规矩见 VISUAL-GUIDE.md 第六节。
 */
import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const steps = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const PORT = 9333;
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${mkdtempSync(join(tmpdir(), 'cdp-'))}`, 'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
    target = list.find((t) => t.type === 'page');
  } catch { await sleep(200); }
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r));
let id = 0;
const pending = new Map();
ws.addEventListener('message', (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
});
const send = (method, params = {}) => new Promise((r) => {
  const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params }));
});

await send('Page.enable');
await send('Runtime.enable');
for (const s of steps) {
  if (s.viewport) {
    const [width, height, deviceScaleFactor, mobile] = s.viewport;
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor, mobile: !!mobile });
    if (mobile) await send('Emulation.setUserAgentOverride', { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' });
  }
  if (s.go) { await send('Page.navigate', { url: s.go }); await sleep(s.settle ?? 4000); }
  if (s.insert) { for (const ch of s.insert) { await send('Input.insertText', { text: ch }); await sleep(120); } }
  if (s.wait) await sleep(s.wait);
  if (s.js) {
    const r = await send('Runtime.evaluate', { expression: s.js, awaitPromise: true, returnByValue: true });
    console.log(JSON.stringify(r.result?.result?.value ?? r.result?.exceptionDetails?.text ?? r));
  }
  if (s.shot) {
    const opts = { format: 'png', captureBeyondViewport: false };
    if (s.clip) { const [x, y, width, height, scale] = s.clip; opts.clip = { x, y, width, height, scale }; }
    const r = await send('Page.captureScreenshot', opts);
    writeFileSync(s.shot, Buffer.from(r.result.data, 'base64'));
    console.log('saved', s.shot);
  }
}
ws.close();
chrome.kill();
process.exit(0);
