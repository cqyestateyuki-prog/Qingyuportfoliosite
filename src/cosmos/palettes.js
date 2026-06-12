/**
 * WebGL 调色板 — CSS 变量的 JS 镜像(改色要和 src/styles/cosmos-theme.css 同步)
 *
 * colA: 深空基底  colB: 星云主体  colC: 丝缕/流光  colD: 高光热点
 */

export function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

// 深夜紫宇宙(压深:基底近黑,星云丝缕做点睛而非铺满)
export const NIGHT = {
  colA: hexToRgb('#070512'),
  colB: hexToRgb('#2e2052'),
  colC: hexToRgb('#6c61b8'),
  colD: hexToRgb('#b5abe8'),
  starAlpha: 1.0,
};

// 日版(对齐 Design System:白底 + bg-soft #f8f7fc,克制的薰衣草点缀)
export const DAY = {
  colA: hexToRgb('#ffffff'),
  colB: hexToRgb('#f5f3fb'),
  colC: hexToRgb('#ebe6f7'),
  colD: hexToRgb('#ffffff'),
  starAlpha: 0.06,
};

// dayness ∈ [0,1] 时的插值调色板,每帧调用(数组复用避免 GC)
export function lerpPalette(out, a, b, t) {
  for (const key of ['colA', 'colB', 'colC', 'colD']) {
    const oa = out[key];
    for (let i = 0; i < 3; i++) oa[i] = a[key][i] + (b[key][i] - a[key][i]) * t;
  }
  out.starAlpha = a.starAlpha + (b.starAlpha - a.starAlpha) * t;
  return out;
}

export function createPaletteBuffer() {
  return {
    colA: [...NIGHT.colA],
    colB: [...NIGHT.colB],
    colC: [...NIGHT.colC],
    colD: [...NIGHT.colD],
    starAlpha: NIGHT.starAlpha,
  };
}
