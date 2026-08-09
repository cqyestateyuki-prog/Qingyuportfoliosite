/**
 * 缩略图路径
 *
 * 首页碎片墙一次要同屏画 9 张,直接喂原图会把显存吃爆
 * (HexaEdge 那批是 3840×2160,单张解码后 33MB,九张就是 300MB),
 * 表现是格子一片空白、只有头几张画得出来;hover 放大时喂原图更会把渲染器压到卡死。
 *
 * public/media/thumbs 和 thumbs-hi 是 scripts/build-thumbs.py 生成的两档 WebP,
 * 目录结构和 public/media/projects 一一对应,扩展名统一 .webp。
 * 加了新图要重跑那个脚本。
 */

const SRC_PREFIX = '/media/projects/';
const OUT_PREFIX = '/media/thumbs/';
const HI_PREFIX = '/media/thumbs-hi/';

const mapTo = (prefix, src) => {
  if (typeof src !== 'string' || !src.startsWith(SRC_PREFIX)) return src;
  return `${prefix}${src.slice(SRC_PREFIX.length).replace(/\.[^./]+$/, '')}.webp`;
};

/** 900px 档:九宫格静态显示、塔罗卡 */
export const thumbSrc = (src) => mapTo(OUT_PREFIX, src);

/**
 * 1700px 档:hover 放大到 2.6 倍的那一张。
 * 只对 featured 项目生成(见 build-thumbs.py 的 HI_DIRS),
 * 拿不到就让调用方 onError 回退原图。
 *
 * GIF 例外:小档是静态首帧,放大时就该放原动图,否则动效白做了。
 */
export const thumbSrcHi = (src) =>
  typeof src === 'string' && /\.gif$/i.test(src) ? src : mapTo(HI_PREFIX, src);

export default thumbSrc;
