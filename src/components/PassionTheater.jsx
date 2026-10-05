/**
 * PassionTheater — Passion Projects 的放映厅
 *
 * 点一张 passion 卡,不再直接跳外站 / 详情页,而是在站内弹出一个大屏:
 * 16:10 的舞台放项目视频(没视频就放封面大图),底下一条自绘进度条
 * (可点可拖)、时间、静音、全屏;舞台下面是标题、一句简介和真正的出口
 * (外站 ↗ 或 案例页 →)。
 *
 * 实现约束(和碎片墙同一条):组件常驻 DOM,开关只改 data-open 和 src,
 * 不条件渲染增删节点 —— 浏览器翻译插件会在增删节点时 insertBefore 报错。
 * 外站 / 案例页两个按钮都常驻,用 data-show 决定谁显示。
 */

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { getLocalizedText } from '../utils/localization';
import { splitHighlightSegments } from '../utils/highlight';

const localVideo = (src) => (/\.(mp4|webm)$/i.test(String(src || '')) ? src : null);
const fmt = (s) => {
  if (!Number.isFinite(s)) return '00:00';
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
};

const Icon = ({ d, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={d} />
  </svg>
);
const PATH = {
  play: 'M8 5v14l11-7z',
  pause: 'M6 5h4v14H6zm8 0h4v14h-4z',
  sound: 'M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z',
  muted: 'M4 9v6h4l5 4V5L8 9H4zm12 1.2 1.4-1.4 1.4 1.4-1.4 1.4 1.4 1.4-1.4 1.4-1.4-1.4-1.4 1.4-1.4-1.4 1.4-1.4-1.4-1.4 1.4-1.4 1.4 1.4z',
  full: 'M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zM4 14h2v4h4v2H4v-6zm14 0h2v6h-6v-2h4v-4z',
};

const PassionTheater = ({ project, onClose }) => {
  const { t, language } = useLanguage();
  const open = Boolean(project);

  // 关掉之后淡出期间还得显示上一个项目,不然内容先消失、框才淡出
  const [last, setLast] = useState(null);
  useEffect(() => {
    if (project) setLast(project);
  }, [project]);
  const shown = project || last;

  // 放映厅优先放 theaterVideo(比如 MV 的无声全片),没有就退回卡片的 hover 片段 / 主图视频
  const clip = localVideo(shown?.theaterVideo || shown?.hoverVideo || shown?.heroVideo);
  const poster = shown?.heroImage || shown?.thumbnail || '';
  const title = shown ? getLocalizedText(shown.title, language) : '';
  const brief = shown ? getLocalizedText(shown.brief, language) || getLocalizedText(shown.subtitle, language) || '' : '';
  const meta = shown ? [shown.year, ...(shown.categories || []).slice(0, 3)].filter(Boolean).join(' · ') : '';
  const external = shown?.externalUrl || '';
  const caseHref = shown ? `/project/${shown.id}` : '/';
  // 舞台比例:默认和卡片一样 16:10;项目可用 theaterRatio 指定(比如 MV 的 16:9)
  const ratio = shown?.theaterRatio || '16 / 10';
  const ratioNum = (() => {
    const m = String(ratio).match(/([\d.]+)\s*\/\s*([\d.]+)/);
    return m ? Number(m[1]) / Number(m[2]) : 1.6;
  })();

  // 挂载点:body 末尾一个常驻 div,fixed 定位不受祖先 transform 影响
  const [host] = useState(() => (typeof document !== 'undefined' ? document.createElement('div') : null));
  useEffect(() => {
    if (!host) return undefined;
    host.className = 'theater-host';
    document.body.appendChild(host);
    return () => host.remove();
  }, [host]);

  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const timeRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const setProgress = (v) => {
    if (!v || !fillRef.current || !timeRef.current) return;
    const p = v.duration ? v.currentTime / v.duration : 0;
    fillRef.current.style.setProperty('--p', String(p));
    timeRef.current.textContent = `${fmt(v.currentTime)} / ${fmt(v.duration)}`;
  };

  // 开:挂 src 起播;关:卸 src。只改属性,不动节点
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (open && clip) {
      if (v.getAttribute('src') !== clip) {
        v.src = clip;
        v.load();
      }
      v.muted = muted;
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.removeAttribute('src');
      v.load();
      setReady(false);
      setPlaying(false);
      if (fillRef.current) fillRef.current.style.setProperty('--p', '0');
      if (timeRef.current) timeRef.current.textContent = '00:00 / 00:00';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, clip]);

  // 锁滚动 + 键盘:Esc 关,空格播放/暂停,左右键快进退 5 秒
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
      const v = videoRef.current;
      if (!v || !clip) return;
      if (e.key === ' ' && !(e.target instanceof HTMLButtonElement) && !(e.target instanceof HTMLAnchorElement)) {
        e.preventDefault();
        if (v.paused) v.play().catch(() => {});
        else v.pause();
      }
      if (e.key === 'ArrowRight') v.currentTime = Math.min(v.duration || 0, v.currentTime + 5);
      if (e.key === 'ArrowLeft') v.currentTime = Math.max(0, v.currentTime - 5);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, clip, onClose]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v || !clip) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  const fullscreen = () => {
    const el = stageRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen?.();
    else el.requestFullscreen?.();
  };
  // 进度条:按下即跳,按住拖动
  const seekAt = (clientX) => {
    const v = videoRef.current;
    const track = trackRef.current;
    if (!v || !track || !v.duration) return;
    const r = track.getBoundingClientRect();
    const k = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    v.currentTime = k * v.duration;
    setProgress(v);
  };
  const onTrackDown = (e) => {
    e.preventDefault();
    seekAt(e.clientX);
    const move = (ev) => seekAt(ev.clientX);
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  const ui = (
    <div
      className="theater"
      data-open={open ? '1' : '0'}
      role="dialog"
      aria-modal="true"
      aria-hidden={open ? undefined : true}
      aria-label={title || undefined}
      onClick={onClose}
    >
      <div className="theater-dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="theater-close" onClick={onClose} tabIndex={open ? 0 : -1}>
          ⊗ {t('portfolio.close')}
        </button>

        <div
          ref={stageRef}
          className="theater-stage"
          style={{ '--ratio': ratio, '--ratio-num': ratioNum }}
          data-has-video={clip ? '1' : '0'}
          data-ready={ready ? '1' : '0'}
          data-playing={playing ? '1' : '0'}
        >
          <span className="theater-corner tl" aria-hidden="true" />
          <span className="theater-corner tr" aria-hidden="true" />
          <span className="theater-corner bl" aria-hidden="true" />
          <span className="theater-corner br" aria-hidden="true" />

          <img className="theater-poster" src={poster || undefined} alt="" aria-hidden="true" />
          <video
            ref={videoRef}
            className="theater-video"
            playsInline
            loop
            muted
            preload="metadata"
            onClick={togglePlay}
            onPlaying={() => {
              setReady(true);
              setPlaying(true);
            }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onLoadedMetadata={(e) => setProgress(e.currentTarget)}
            onTimeUpdate={(e) => setProgress(e.currentTarget)}
          />

          <div className="theater-controls">
            <button type="button" className="theater-ibtn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'} tabIndex={open ? 0 : -1}>
              <Icon d={playing ? PATH.pause : PATH.play} />
            </button>
            <span className="theater-time" ref={timeRef}>00:00 / 00:00</span>
            <div className="theater-track" ref={trackRef} onPointerDown={onTrackDown} role="slider" aria-label="Seek">
              <span className="theater-fill" ref={fillRef} />
            </div>
            <button type="button" className="theater-ibtn" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'} tabIndex={open ? 0 : -1}>
              <Icon d={muted ? PATH.muted : PATH.sound} />
            </button>
            <button type="button" className="theater-ibtn" onClick={fullscreen} aria-label="Fullscreen" tabIndex={open ? 0 : -1}>
              <Icon d={PATH.full} size={15} />
            </button>
          </div>
        </div>

        <div className="theater-foot">
          <div className="theater-copy">
            <p className="theater-eyebrow">{meta}</p>
            <h3 className="theater-title">{title}</h3>
            <p className="theater-brief">
              {splitHighlightSegments(brief).map((seg, i) =>
                seg.highlighted ? (
                  <span key={i} className="theater-hl">
                    {seg.text}
                  </span>
                ) : (
                  <span key={i}>{seg.text}</span>
                )
              )}
            </p>
          </div>
          <div className="theater-cta">
            <a
              href={external || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="theater-btn"
              data-show={external ? '1' : '0'}
              tabIndex={open && external ? 0 : -1}
            >
              {t('portfolio.liveSite')} <span aria-hidden="true">↗</span>
            </a>
            <Link
              to={caseHref}
              className="theater-btn"
              data-show={external ? '0' : '1'}
              tabIndex={open && !external ? 0 : -1}
              onClick={onClose}
            >
              {t('portfolio.viewCaseStudy')} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return host ? createPortal(ui, host) : null;
};

export default PassionTheater;
