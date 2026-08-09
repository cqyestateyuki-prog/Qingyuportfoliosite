/**
 * ShatterGrid — 整块 hero 碎裂成 PPT 页卡片墙
 *
 * 折叠态:N 个格子各显示 hero 图的一块切片,拼起来严丝合缝就是完整一张。
 * 点一下 → 格子从中心错峰飞散、切片淡出换成对应的案例页,一屏扫完整个项目。
 *
 * 三条必须守住的实现约束:
 * 1. 格子从挂载起就全在 DOM 里,展开/折叠只改 CSS 和 img.src。
 *    条件渲染增删节点会让浏览器翻译插件 insertBefore 报错卸载整棵树。
 * 2. 飞散的位移/旋转由 index 推导,不能用 Math.random,否则每次重渲染碎片乱跳。
 * 3. 案例页的 src 首次展开才注入。折叠态全站只加载 5 张 hero。
 */

import { useState, useEffect, useMemo, useRef } from 'react';
import { thumbSrc, thumbSrcHi } from '../utils/thumbs';
import { collectProjectSlides, TILES_PER_PAGE } from '../utils/projectSlides';

// 桌面 3 列 / 平板手机 2 列。列数参与切片计算,所以要读到 JS 里,不能只写 CSS 断点。
// 一行 4 个单张太小看不清内容,3 个是「一屏铺开」和「看得清」的平衡点
const useColumns = () => {
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const sync = () => setCols(mq.matches ? 2 : 3);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return cols;
};

// 确定性伪随机:同一个 index 永远得到同一个值
const rnd = (i, salt) => (((i + 1) * 2654435761 + salt * 40503) % 1000) / 1000;

const ShatterGrid = ({ project, language, expanded, page = 0, onToggle, onTileClick }) => {
  const cols = useColumns();
  const [loaded, setLoaded] = useState(expanded);
  // 当前被 hover 的格子。放大到 2.6 倍时 900px 的缩略图不够用(2 倍屏上等于半密度,
  // 发糊),所以那一格换成原图。只留一张:九张 4K 原图同时在显存里会把格子画成空白
  const [hoverIdx, setHoverIdx] = useState(-1);
  // hover 放大要不要生效。刚碎开的那一下,鼠标正压在某一格上,
  // 不拦一下的话九宫格还没看清就被那一格放大挡住了。
  // 等鼠标真的移动过(而不是点击时的微抖)再启用。
  const [armed, setArmed] = useState(false);
  const armFrom = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (armed) return undefined;
    const onMove = (e) => {
      if (!armFrom.current) {
        armFrom.current = { x: e.clientX, y: e.clientY };
        return;
      }
      const { x, y } = armFrom.current;
      if (Math.hypot(e.clientX - x, e.clientY - y) > 8) setArmed(true);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [armed]);

  const toggle = (next) => {
    if (next) {
      setArmed(false);
      armFrom.current = null;
    }
    onToggle(next);
  };

  // 当前这一页的九格(收集和排序的规则在 utils/projectSlides.js,翻页控件也要用)
  const slides = useMemo(() => {
    const all = collectProjectSlides(project, language);
    const start = page * TILES_PER_PAGE;
    return all.slice(start, start + TILES_PER_PAGE);
  }, [project, language, page]);

  // 翻页后鼠标多半正压在某一格上,和刚碎开那下同理:先解除放大,等鼠标动过再说
  useEffect(() => {
    setArmed(false);
    armFrom.current = null;
    setHoverIdx(-1);
  }, [page]);

  // 首次展开才注入案例页的 src(改属性,不增删节点)
  useEffect(() => {
    if (expanded) setLoaded(true);
  }, [expanded]);

  const heroSrc = project.heroImage || project.thumbnail || slides[0]?.src;

  // 切成 rows 行。行数按 cols 算,但每行张数取均衡分配:
  // 5 张分成 3+2 而不是 4+1 —— 后者最后一格会被拉成占满整宽的怪东西。
  // 每行内部 flex 均分,所以不满的行照样能拼成完整矩形
  // (这就是用「每行一个 flex 行」而不是单个 grid 的原因)。
  const rows = useMemo(() => {
    const n = slides.length;
    const rowCount = Math.max(1, Math.ceil(n / cols));
    const out = [];
    let cursor = 0;
    for (let r = 0; r < rowCount; r += 1) {
      const take = Math.ceil((n - cursor) / (rowCount - r));
      out.push({ items: slides.slice(cursor, cursor + take), offset: cursor });
      cursor += take;
    }
    return out;
  }, [slides, cols]);

  if (!slides.length) return null;

  const rowCount = rows.length;
  const cx = (cols - 1) / 2;
  const cy = (rowCount - 1) / 2;
  const maxDist = Math.hypot(cx, cy) || 1;

  return (
    <div className="shatter-wrap relative">
      <div
        ref={gridRef}
        className="shatter"
        data-expanded={expanded ? '1' : '0'}
        data-armed={armed ? '1' : '0'}
        role={expanded ? undefined : 'button'}
        tabIndex={expanded ? -1 : 0}
        aria-label={expanded ? undefined : `展开 ${slides.length} 张案例页`}
        onClick={() => { if (!expanded) toggle(true); }}
        onKeyDown={(e) => {
          if (!expanded && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            toggle(true);
          }
        }}
        style={{
          '--shatter-collapsed': '16 / 9',
          '--shatter-expanded': `${cols * 16} / ${rowCount * 9}`,
          '--cols': cols,
          background: project.colors?.heroGradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        {rows.map((row, r) => (
          <div className="shatter-row" key={r}>
            {row.items.map((slide, i) => {
              const k = row.items.length;
              const flat = row.offset + i;
              // 错峰用行内相对位置,这样不满的行也是从中间往两边散
              const dist = Math.hypot(i - (k - 1) / 2, r - cy) / maxDist;

              return (
                <button
                  type="button"
                  key={slide.src}
                  className="shatter-tile group/tile"
                  tabIndex={expanded ? 0 : -1}
                  aria-hidden={expanded ? undefined : true}
                  aria-label={
                    slide.kind === 'embed'
                      ? `${slide.title || '互动版本'}(新窗口打开)`
                      : slide.title || `第 ${flat + 1} 页`
                  }
                  onClick={(e) => {
                    if (!expanded) return;
                    e.stopPropagation();
                    // artifact 格点开的就是它自己,不是项目详情页。
                    // 新标签打开:那些 html 是独立页面,没有回作品集的入口,
                    // 同标签跳过去就把人丢在外面了
                    if (slide.kind === 'embed') {
                      window.open(slide.src, '_blank', 'noopener,noreferrer');
                      return;
                    }
                    onTileClick(flat, slides);
                  }}
                  onMouseEnter={(e) => {
                    if (!expanded) return;
                    // 高清层重新开始加载,先标记未就绪 —— 否则它会顶着上一次的
                    // ready 标记直接显形,这一瞬间图还没到,浏览器就画一个破图图标出来
                    const hi = e.currentTarget.querySelector('.tile-slide-hi');
                    if (hi) hi.dataset.ready = '0';
                    setHoverIdx(flat);
                  }}
                  onMouseLeave={() => setHoverIdx((v) => (v === flat ? -1 : v))}
                  onFocus={() => expanded && setHoverIdx(flat)}
                  onBlur={() => setHoverIdx((v) => (v === flat ? -1 : v))}
                  style={{
                    '--dx': `${(rnd(flat, 1) - 0.5) * 8}px`,
                    // 纵向位移压得比横向小:上下偏多了,某一格会看着贴住上一行
                    '--dy': `${(rnd(flat, 2) - 0.5) * 5}px`,
                    '--rot': `${(rnd(flat, 3) - 0.5) * 5}deg`,
                    '--delay': `${dist * 0.18}s`,
                    // hover 放大的生长方向:边上的格子往里长,不然会顶出屏幕
                    '--ox': k === 1 ? 'center' : i === 0 ? 'left' : i === k - 1 ? 'right' : 'center',
                    '--oy':
                      rowCount === 1 ? 'center' : r === 0 ? 'top' : r === rowCount - 1 ? 'bottom' : 'center',
                  }}
                >
                  {/* 放大发生在这一层,不在格子本身:格子跟着放大的话,它的鼠标命中区
                      也一起变大,会盖住旁边的格子 —— 想移到被压住的那格就一直够不着。
                      这层 pointer-events: none,命中区永远是格子原本的大小。 */}
                  <span className="tile-inner" aria-hidden="true">
                  {/* 折叠态:hero 图的一块切片。sprite 切图公式,k=1 / rowCount=1 时特判避免除零。
                      走大档 —— 折叠时这张图是整幅通栏铺开(约 1177px 宽),
                      用九宫格那档 900px 会糊得很明显。九个格子指的是同一个 url,
                      浏览器只解码一次。 */}
                  <span
                    className="tile-slice"
                    aria-hidden="true"
                    style={{
                      backgroundImage: heroSrc ? `url("${thumbSrcHi(heroSrc)}")` : undefined,
                      backgroundSize: `${k * 100}% ${rowCount * 100}%`,
                      backgroundPosition: `${k > 1 ? (i / (k - 1)) * 100 : 0}% ${
                        rowCount > 1 ? (r / (rowCount - 1)) * 100 : 0
                      }%`,
                    }}
                  />

                  {/* 图不是 16:9 时(竖屏截图、超宽图),contain 会在两侧留出空白,
                      直接透出星空很脏。用这张图自己的模糊延伸填满,留白就不刺眼了。
                      同一个 src,走浏览器缓存,不多一次请求 */}
                  <span
                    className="tile-bloom"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        loaded && slide.kind !== 'embed' ? `url("${thumbSrc(slide.src)}")` : undefined,
                    }}
                  />

                  {/* 展开态:真正的案例页。走缩略图,hover 放大时清晰度也够 */}
                  {slide.kind === 'embed' ? (
                    // 可交互 artifact:格子里跑活的,不吃鼠标(点击仍是进项目)
                    <iframe
                      className="tile-slide tile-embed"
                      src={loaded ? slide.src : undefined}
                      title={slide.title || 'Interactive artifact'}
                      loading="lazy"
                      tabIndex={-1}
                      scrolling="no"
                    />
                  ) : (
                    <img
                      className="tile-slide"
                      src={loaded ? thumbSrc(slide.src) : undefined}
                      alt={slide.title || ''}
                      // 不加 loading="lazy":src 本身就是展开时才注入的,
                      // 再叠一层原生懒加载,两边判据打架会导致图迟迟不发请求
                      decoding="async"
                      onLoad={(e) => {
                        // 按图片和格子的比例差,决定这一格怎么铺:
                        //   差得少(PPT 页那种,gap 让格子偏离 16:9 约 1~2%)→ cover 填满,
                        //     裁掉边上一两个像素,不留缝。以前留着缝又没开模糊层,
                        //     就成了一条透出下层卡片的透明带。
                        //   差得多(竖屏截图、超宽图)→ contain 保完整,两侧交给模糊层填。
                        // 顺带:模糊层只在真需要时点亮,blur 会强制提层并在放大时重新光栅化。
                        const el = e.currentTarget;
                        const tile = el.closest('.shatter-tile');
                        if (!tile || !el.naturalWidth) return;
                        // 拿 16/9 当基准,不去量格子:onLoad 常常落在展开动画中间,
                        // 那会儿量到的是过渡态尺寸,会把明明贴合的图误判成 contain。
                        // 展开态格子在数学上就是 16:9(gap 只让它偏一两个百分点)。
                        const img = el.naturalWidth / el.naturalHeight;
                        const off = Math.abs(img - 16 / 9) / (16 / 9) > 0.06;
                        tile.dataset.bloom = off ? '1' : '0';
                        tile.dataset.fit = off ? 'contain' : 'cover';
                      }}
                      onError={(e) => {
                        const el = e.currentTarget;
                        if (!el.getAttribute('src') || el.dataset.fellBack) return;
                        // 缩略图没生成过就退回原图(加了新图但忘了跑 build-thumbs.sh)
                        el.dataset.fellBack = '1';
                        el.src = slide.src;
                      }}
                    />
                  )}

                  {/* hover 放大时盖上来的原图。src 只在这一格被 hover 时才注入,
                      移开就卸载,显存里始终只有一张大图。
                      节点恒在、只切 src —— 增删节点会触发浏览器翻译的 insertBefore 崩溃 */}
                  <img
                    className="tile-slide tile-slide-hi"
                    src={
                      hoverIdx === flat && slide.kind !== 'embed' ? thumbSrcHi(slide.src) : undefined
                    }
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    data-ready="0"
                    onLoad={(e) => {
                      e.currentTarget.dataset.ready = '1';
                    }}
                    onError={(e) => {
                      const el = e.currentTarget;
                      // 鼠标移开时 src 被摘掉也会触发 error。这时候千万不能回退,
                      // 否则每移开一格就白下载一张原图(实测漏了 19 张、25MB)
                      if (!el.getAttribute('src') || el.dataset.fellBack) return;
                      // 这个项目没生成大档(不在 HI_DIRS 里)才退回原图
                      el.dataset.fellBack = '1';
                      el.src = slide.src;
                    }}
                  />

                    <span className="tile-meta">
                      <span className="tile-num">
                        {/* 箭头是给「点了会新开一页」一个预告 */}
                        {slide.kind === 'embed' ? 'LIVE ↗' : String(flat + 1).padStart(2, '0')}
                      </span>
                      {slide.title && <span className="tile-title">{slide.title}</span>}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        ))}

        {/* 折叠态的可点提示 —— 唯一会告诉访客「这里能点」的信号 */}
        <span className="shatter-hint" aria-hidden="true">
          ⊕ EXPAND {String(slides.length).padStart(2, '0')} FRAMES
        </span>
      </div>

      {/* 展开态的收起按钮。展开后点格子是进项目页,收回必须有独立入口 */}
      <button
        type="button"
        className="shatter-collapse"
        tabIndex={expanded ? 0 : -1}
        aria-hidden={expanded ? undefined : true}
        onClick={(e) => {
          e.stopPropagation();
          onToggle(false);
        }}
      >
        ⊗ COLLAPSE
      </button>
    </div>
  );
};

export default ShatterGrid;
