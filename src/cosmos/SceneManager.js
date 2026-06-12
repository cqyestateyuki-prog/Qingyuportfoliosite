/**
 * SceneManager — 纯 JS 的 ogl 场景管理器
 *
 * 单一 RAF;所有 60fps 数值走 set() 写入 state(无 React 重渲染);
 * 图层按序渲染(星云打底 → 星空 → 星月粒子)。
 */

import { Renderer } from 'ogl';
import { NIGHT, DAY, lerpPalette, createPaletteBuffer } from './palettes';
import { TIER_CONFIG } from './useDeviceTier';
import NebulaLayer from './layers/NebulaLayer';
import StarfieldLayer from './layers/StarfieldLayer';
import ShapeParticlesLayer from './layers/ShapeParticlesLayer';

const SHAPE_TO_MORPH = { scatter: 0, moon: 1, star: 2 };

export default class SceneManager {
  constructor(canvas, { tier = 'high' } = {}) {
    this.config = TIER_CONFIG[tier] || TIER_CONFIG.high;
    this.tier = tier;

    this.renderer = new Renderer({
      canvas,
      dpr: Math.min(window.devicePixelRatio || 1, this.config.dprCap),
      alpha: false,
      antialias: false,
      powerPreference: 'high-performance',
    });
    this.gl = this.renderer.gl;

    // 平滑插值的运行时状态:*Target 为外部写入,主值每帧趋近
    this.state = {
      time: 0,
      aspect: 1,
      dayness: 0,
      mouseUv: [0.5, 0.5],
      mouseUvTarget: [0.5, 0.5],
      mouseSq: [0, 0], // square 坐标(y∈[-1,1], x∈[-aspect,aspect])
      scroll: 0,
      scrollTarget: 0,
      morph: 0,
      morphTarget: 0,
      disperse: 1,
      disperseTarget: 1,
      duo: 0,
      duoTarget: 0,
      palette: createPaletteBuffer(),
    };

    this.layers = [new NebulaLayer(this.gl, this.config)];
    if (this.config.starCount > 0) {
      this.layers.push(new StarfieldLayer(this.gl, this.config));
    }
    if (this.config.morphParticles > 0) {
      this.layers.push(new ShapeParticlesLayer(this.gl, this.config));
    }

    this._raf = null;
    this._lastT = 0;
    this._running = false;

    this._onResize = this._handleResize.bind(this);
    this._onPointerMove = this._handlePointerMove.bind(this);
    this._onVisibility = this._handleVisibility.bind(this);

    window.addEventListener('resize', this._onResize);
    window.addEventListener('pointermove', this._onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', this._onVisibility);

    this._handleResize();
  }

  /**
   * 外部写入接口(scroll/narrative/theme 都走这里)
   * - 'dayness': 0..1(Provider 已做缓动,直写)
   * - 'scroll': 全页滚动进度
   * - 'shape': 'scatter' | 'moon' | 'star'
   * - 'disperse': 0..1 粒子消散度
   * - 'moonPlacement'/'starPlacement': { offset:[x,y], scale }
   */
  set(key, value, immediate = false) {
    const s = this.state;
    switch (key) {
      case 'dayness':
        s.dayness = value;
        break;
      case 'scroll':
        s.scrollTarget = value;
        if (immediate) s.scroll = value;
        break;
      case 'shape':
        s.morphTarget = SHAPE_TO_MORPH[value] ?? 0;
        if (immediate) s.morph = s.morphTarget;
        break;
      case 'disperse':
        s.disperseTarget = value;
        if (immediate) s.disperse = value;
        break;
      case 'duo':
        s.duoTarget = value;
        if (immediate) s.duo = value;
        break;
      default: {
        // 透传给图层(如形状摆位)
        for (const layer of this.layers) layer.setParam?.(key, value);
      }
    }
  }

  start() {
    if (this._running) return;
    this._running = true;
    this._lastT = performance.now();
    const loop = (now) => {
      this._raf = requestAnimationFrame(loop);
      this._frame(now);
    };
    this._raf = requestAnimationFrame(loop);
  }

  _frame(now) {
    const s = this.state;
    // 钳制 dt,标签页回前台不跳帧
    const dt = Math.min((now - this._lastT) / 1000, 0.05);
    this._lastT = now;
    s.time += dt;

    // 平滑插值
    s.mouseUv[0] += (s.mouseUvTarget[0] - s.mouseUv[0]) * 0.05;
    s.mouseUv[1] += (s.mouseUvTarget[1] - s.mouseUv[1]) * 0.05;
    s.mouseSq[0] = (s.mouseUv[0] - 0.5) * 2 * s.aspect;
    s.mouseSq[1] = (s.mouseUv[1] - 0.5) * 2;
    s.scroll += (s.scrollTarget - s.scroll) * 0.08;
    s.morph += (s.morphTarget - s.morph) * 0.035;
    s.disperse += (s.disperseTarget - s.disperse) * 0.03;
    s.duo += (s.duoTarget - s.duo) * 0.03;

    lerpPalette(s.palette, NIGHT, DAY, s.dayness);

    // 日版不渲染(canvas 已淡出,省 GPU);过渡中间态仍渲染
    if (s.dayness > 0.985) return;

    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].update(s);
      this.renderer.render({ scene: this.layers[i].mesh, clear: i === 0 });
    }
  }

  _handleResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.state.aspect = w / h;
    for (const layer of this.layers) {
      layer.resize?.(w, h, this.state.aspect);
    }
  }

  _handlePointerMove(e) {
    this.state.mouseUvTarget[0] = e.clientX / window.innerWidth;
    this.state.mouseUvTarget[1] = 1 - e.clientY / window.innerHeight;
  }

  _handleVisibility() {
    if (document.hidden) {
      if (this._raf) cancelAnimationFrame(this._raf);
      this._raf = null;
      this._running = false;
    } else {
      this.start();
    }
  }

  dispose() {
    if (this._raf) cancelAnimationFrame(this._raf);
    this._raf = null;
    this._running = false;
    window.removeEventListener('resize', this._onResize);
    window.removeEventListener('pointermove', this._onPointerMove);
    document.removeEventListener('visibilitychange', this._onVisibility);
    for (const layer of this.layers) layer.dispose?.();
    // StrictMode 双挂载安全:显式释放 GL 上下文
    this.gl.getExtension('WEBGL_lose_context')?.loseContext();
  }
}
