# 录制"滚动驱动"落地页动画 → 视频 SOP

把一个靠**滚动驱动**的落地页动画(Scene1 → Scene2 …)录成 mp4/gif。首次给 WishFlow 落地页用(hero → 愿望卡片)。

## 前置
```bash
npm i -D playwright && npx playwright install chromium   # 仅首次
# ffmpeg 需已装(brew install ffmpeg)
```

## 步骤

1. **起目标站的 dev**(或直接用线上 URL)。
   - 语言:脚本用**全新 context**(无 localStorage),站点走**默认语言**。WishFlow 默认英文,所以自动是英文版——不用手动切。
   - WishFlow: `cd 【AI Wish Flow】/wishflow && npm run dev`(端口 3040)。

2. **录 webm**:
   ```bash
   node scripts/record-scroll-video.cjs <url> <out-dir> [scrollSec] [holdStart] [holdEnd] [W] [H]
   # WishFlow 落地页:
   node scripts/record-scroll-video.cjs http://localhost:3040/ ./video-out 9 2.2 2.2
   ```
   参数:url、输出目录、滚动总秒数(默认 9)、开头停留(2.2)、结尾停留(2.2)、宽(1280)、高(800)。
   输出:`<out-dir>/page@<hash>.webm`。

3. **转 mp4**:
   ```bash
   ffmpeg -y -i ./video-out/*.webm -c:v libx264 -pix_fmt yuv420p -crf 20 -movflags +faststart landing-flow.mp4
   ```

4. **(可选)GIF**(体积会较大):
   ```bash
   ffmpeg -i landing-flow.mp4 -vf "fps=15,scale=800:-1:flags=lanczos" landing-flow.gif
   ```

5. 成品放 `public/media/projects/<项目>/`。想当项目页 hero 播放,把 `data/projects/<项目>.js` 的 `heroVideo` 指过去。

## 踩过的坑(勿回退)

1. **playwright 解析**:`require('playwright')` 按**脚本所在目录**向上找 node_modules,不是 cwd。本机 playwright 装在 `/Users/qingyu/node_modules`,脚本 `loadPlaywright()` 已把它当兜底。
2. **recordVideo 是 viewport 尺寸**:`deviceScaleFactor:2` 只让渲染更清晰,录制分辨率仍是 `size`(W×H)。要更高清就调大 W/H。
3. **滚动用页面内 requestAnimationFrame 平滑滚**(脚本已这么做):一次 `page.evaluate` 里 RAF 逐帧 `window.scrollTo`。**别用"逐步 page.evaluate + waitForTimeout"**——对线上站每步有网络往返开销,实际时长会爆(设 12s 录出来 44s)。本地站看不出来、线上站必炸。
6. **提速**:录完嫌慢用 `ffmpeg -i in.mp4 -filter:v "setpts=PTS/1.8" -an -r 30 out.mp4`(1.8×;系数越大越快)。或直接调小脚本的 `scrollSec` 重录。
4. **视频要 `ctx.close()` 才落盘**,`page.video().path()` 要在 close 之后取。
5. 全新 context 无登录/无本地数据——录的是"访客首见"的样子(WishFlow 空态会自动出示例愿望,正好)。

## 变体:交互式流程录制(record-interactive-flow.cjs)

`record-scroll-video.cjs` 只驱动**滚动**。要录**带交互**的流程(滚 → 跳页 → 打字 → 点按钮 → 等生成 → 再滚),用 `record-interactive-flow.cjs`。首次给 WishFlow "create a wish" 用:Gallery 顶→底(4 张样例卡)→ Create 页 → 打字填愿望 → 点生成 → loading → 出线描图 → 滚看结果卡。

和纯滚动版的差异(都踩过):
- **访客能跑通才行**:WishFlow create 是 "No sign-up needed",全新 context 无登录也能生成。若目标流程**要登录**,这个全自动脚本不适用——得驱动**已登录的浏览器** + gif_creator 边操作边录(Spark Up 的生成流程就是这种)。
- **强制英文 + 清首访提示**:fresh context 里先 `localStorage.setItem('wishflow:lang','en')`、把 `wishflow_hint_*` 设 '1',再 reload,免得中文/提示气泡进镜头。
- **打字机效果**:`locator('textarea').type(text, {delay:42})`。
- **等异步结果**:`page.waitForFunction(() => /成图标志文案/.test(document.body.innerText), {timeout:45000})` 再往下滚。别用固定 waitForTimeout 猜时长。
- **交互步全包 try/catch**:任一步抛错也要走到 `ctx.close()`,否则视频不落盘。
- 参数写在脚本头常量(BASE/WISH),改流程改脚本。

**拼多段**:同规格(1280×800 / 30fps / h264)的多条 mp4 用 concat 滤镜接成一条长的:
```bash
ffmpeg -y -i a.mp4 -i b.mp4 -filter_complex "[0:v][1:v]concat=n=2:v=1:a=0[v]" -map "[v]" \
  -c:v libx264 -pix_fmt yuv420p -crf 20 -r 30 -movflags +faststart out.mp4
```
