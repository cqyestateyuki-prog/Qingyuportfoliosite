#!/usr/bin/env python3
"""
生成碎片墙 / 卡片用的两档 WebP 缩略图。

为什么必须有这一步:站里 204 张图有 185 张宽度超过 1600px,最大一张 18960px。
  - 九宫格同屏 9 张:单张 3840×2160 解码后就是 33MB,九张直接把显存吃爆,
    表现是格子一片空白(DOM 和加载状态全部正常,极难查)。
  - hover 放大那一张:喂 4K 原图会把渲染器压到卡死,连截图都超时。

两档,都镜像 public/media/projects 的目录结构,统一输出 .webp:
  thumbs/     900px  —— 九宫格静态显示(格子约 280~385px 宽)
  thumbs-hi/ 2200px  —— 两个场景共用,取其中要求高的那个:
                        · hover 放大到 2.6 倍(显示约 827px,2 倍屏要 1654px)
                        · 折叠态整幅 hero 通栏铺开(显示约 1177px,2 倍屏要 2354px)

几个要点:
  * 只有真的存在透明像素才保留 alpha。之前按「有没有 alpha 通道」判断,
    77 张 PPT 截图被误判成需要透明而存成 PNG,其中 slide-01 的缩略图
    1373KB 比原图还大;按实际像素判断后同一张 WebP 只要 58KB。
  * GIF 只取首帧(九宫格里放一张 3.8MB 的动图纯属浪费);大档不生成,
    前端 hover 时直接放原 GIF,那才是要它动的时候。
  * 大档只给首页碎片墙会放大的项目生成,见 HI_DIRS。

加了新图重跑一次即可,已存在且不比源文件旧的会跳过。
用法:python3 scripts/build-thumbs.py [小档宽度] [大档宽度]
"""

import os
import sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(ROOT, "public/media/projects")
OUT_DIR = os.path.join(ROOT, "public/media/thumbs")
HI_DIR = os.path.join(ROOT, "public/media/thumbs-hi")

MAX_W = int(sys.argv[1]) if len(sys.argv) > 1 else 900
HI_W = int(sys.argv[2]) if len(sys.argv) > 2 else 2200

# 大档只给 data/projects/*.js 里 featured: true 的项目生成。
# 全站都生成是 82MB,其中大半永远不会被请求(下面牌阵的卡片不放大)。
# 换了 featured 项目要同步改这里;漏了也不会坏,前端拿不到大档会自动回退原图。
HI_DIRS = {"kogna", "hexaedge", "sparkup", "petiboxy", "stumbldoor"}

EXTS = (".png", ".jpg", ".jpeg", ".gif")


def has_real_transparency(im):
    """有 alpha 通道 != 真的透明。按实际像素判断,别让不透明的截图白白存成 PNG/带 alpha。"""
    if im.mode not in ("RGBA", "LA", "P"):
        return False
    if im.mode == "P" and "transparency" not in im.info:
        return False
    try:
        return im.convert("RGBA").getchannel("A").getextrema()[0] < 255
    except Exception:
        return True


def render(im, dest, max_w, keep_alpha):
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    out = im.convert("RGBA" if keep_alpha else "RGB")
    w, h = out.size
    if w > max_w:
        out = out.resize((max_w, max(1, round(h * max_w / w))), Image.LANCZOS)
    out.save(dest, "WEBP", quality=82, method=4)


def main():
    if not os.path.isdir(SRC_DIR):
        sys.exit(f"找不到 {SRC_DIR}")

    made = skipped = failed = 0
    bytes_src = bytes_out = 0

    for dirpath, _, files in os.walk(SRC_DIR):
        for name in sorted(files):
            if not name.lower().endswith(EXTS):
                continue
            src = os.path.join(dirpath, name)
            rel = os.path.relpath(src, SRC_DIR)
            base = os.path.splitext(rel)[0]
            top = rel.split(os.sep)[0]
            is_gif = name.lower().endswith(".gif")

            dest = os.path.join(OUT_DIR, base + ".webp")
            dest_hi = os.path.join(HI_DIR, base + ".webp")
            want_hi = (top in HI_DIRS) and not is_gif

            need = not (os.path.exists(dest) and os.path.getmtime(dest) >= os.path.getmtime(src))
            need_hi = want_hi and not (
                os.path.exists(dest_hi) and os.path.getmtime(dest_hi) >= os.path.getmtime(src)
            )
            if not need and not need_hi:
                skipped += 1
                continue

            try:
                im = Image.open(src)
                im.seek(0)  # GIF 只取首帧
                keep_alpha = has_real_transparency(im)
                if need:
                    render(im, dest, MAX_W, keep_alpha)
                if need_hi:
                    render(im, dest_hi, HI_W, keep_alpha)
                made += 1
                bytes_src += os.path.getsize(src)
                bytes_out += os.path.getsize(dest) + (
                    os.path.getsize(dest_hi) if want_hi and os.path.exists(dest_hi) else 0
                )
            except Exception as e:
                failed += 1
                print(f"  失败 {rel}: {e}")

    def mb(p):
        total = sum(
            os.path.getsize(os.path.join(d, f))
            for d, _, fs in os.walk(p)
            for f in fs
        ) if os.path.isdir(p) else 0
        return f"{total / 1048576:.1f}M"

    print()
    print(f"生成 {made}  跳过 {skipped}  失败 {failed}")
    if bytes_src:
        print(f"本次处理:{bytes_src / 1048576:.1f}M → {bytes_out / 1048576:.1f}M "
              f"(省 {100 - bytes_out * 100 / bytes_src:.0f}%)")
    print(f"thumbs    ({MAX_W}px): {mb(OUT_DIR)}")
    print(f"thumbs-hi ({HI_W}px): {mb(HI_DIR)}")
    print(f"原图:              {mb(SRC_DIR)}")


if __name__ == "__main__":
    main()
