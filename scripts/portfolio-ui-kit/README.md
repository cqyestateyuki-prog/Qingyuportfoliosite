# Portfolio UI Kit 截图流水线

作品集自己的界面总览:17 屏(home / about / 15 个项目页)× EN/ZH × 桌面/手机,
真跑真截,产出到 `public/portfolio-ui-kit/`(index.html 画廊 + shots/)。

```bash
npm run dev -- --port 5173 --strictPort   # 1. 起 dev server
node scripts/portfolio-ui-kit/recon.cjs   # 2. 踩点(可选):逐路由确认没有空态/报错
node scripts/portfolio-ui-kit/shoot.cjs   # 3. 截图 → out/ 的 PNG 原图(gitignore)
python3 scripts/portfolio-ui-kit/compress.py  # 4. 压缩 → public/portfolio-ui-kit/shots/
```

调试单屏:`ONLY=home node scripts/portfolio-ui-kit/shoot.cjs`。

## 这个站的三个特殊处理(shoot.cjs 里都有,改站时留意)

1. **hero 滚动叙事** — 长图会拍在叙事中段。预置
   `sessionStorage['qy-hero-narrative-seen']='1'` 直达定格态(ChapterHero 的 SEEN_KEY)。
2. **Showcase 的 feature-panel 是 `whileInView` + `once:false`** — 回顶后重新藏回
   opacity 0,fullPage 拼接里 Selected Work 整段全空。截图前定点强制 opacity 1。
   全站只有这一处 once:false,其他 reveal 都是 once:true,滚一遍就留住。
3. **ReelItem 景深(scroll-linked opacity/scale)** — 视口外停在 opacity 0.15 的"远处"态。
   通用复位:内联 opacity 在 0.05–0.99 之间的一律拉到 1(0 的是真隐藏元素,不碰)。

语言切换走 `localStorage['portfolio-language']`,不是 URL,所以 EN/ZH 各开一个 context。

## 产物命名

`shots/<screen>-<en|zh>.jpg`(桌面 1600w)、`m-<screen>-<lang>.jpg`(手机整页 780w)、
`mt-<screen>-<lang>.jpg`(手机顶部一屏 640w,画廊卡片用,整页长图只留给点击)。
