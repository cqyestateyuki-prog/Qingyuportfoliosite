#!/usr/bin/env python3
"""out/ 的 PNG 原图 → public/portfolio-ui-kit/shots/ 的 JPG。

桌面 <name>-<lang>   → 1600w q82
手机 m-<name>-<lang> → 780w q82(整张, 点开看)
手机 mt-<name>-<lang>→ 顶部按 390:844 裁一屏, 640w(卡片缩略, 长图动辄几 MB 不该进卡片)
"""
import os
from PIL import Image

SRC = os.path.join(os.path.dirname(__file__), 'out')
DST = os.path.join(os.path.dirname(__file__), '..', '..', 'public', 'portfolio-ui-kit', 'shots')
os.makedirs(DST, exist_ok=True)

def save_jpg(im, path, width, quality=82):
    h = round(im.height * width / im.width)
    im = im.resize((width, h), Image.LANCZOS)
    im.convert('RGB').save(path, 'JPEG', quality=quality, optimize=True, progressive=True)
    return os.path.getsize(path)

total = 0
for f in sorted(os.listdir(SRC)):
    if not f.endswith('.png'):
        continue
    name = f[:-4]
    im = Image.open(os.path.join(SRC, f))
    if name.startswith('m-'):
        total += save_jpg(im, os.path.join(DST, name + '.jpg'), 780)
        # 顶部一屏缩略
        crop_h = round(im.width * 844 / 390)
        thumb = im.crop((0, 0, im.width, min(crop_h, im.height)))
        total += save_jpg(thumb, os.path.join(DST, 'mt-' + name[2:] + '.jpg'), 640)
    else:
        total += save_jpg(im, os.path.join(DST, name + '.jpg'), 1600)
    print('OK', name)

print(f'\ntotal {total/1024/1024:.1f} MB in {DST}')
