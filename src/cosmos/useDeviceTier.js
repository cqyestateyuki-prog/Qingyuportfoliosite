/**
 * 设备分级(挂载时一次性检测,不再变化)
 *
 * low  — prefers-reduced-motion / 无 WebGL / 极低内存 → 不挂 canvas,CSS 降级
 * mid  — 触屏 / 低核心数 → 3 octave 星云 + 少量星,无 morph 粒子层
 * high — 桌面独显/现代核显 → 全特效
 */

import { useState } from 'react';

export function detectTier() {
  if (typeof window === 'undefined') return 'low';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'low';
  if (navigator.deviceMemory && navigator.deviceMemory <= 2) return 'low';

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return 'low';
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  } catch {
    return 'low';
  }

  if (window.matchMedia('(pointer: coarse)').matches) return 'mid';
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) return 'mid';

  return 'high';
}

export const TIER_CONFIG = {
  high: { octaves: 4, dprCap: 1.5, starCount: 800, morphParticles: 4000 },
  mid: { octaves: 3, dprCap: 1, starCount: 300, morphParticles: 0 },
  low: { octaves: 0, dprCap: 1, starCount: 0, morphParticles: 0 },
};

export default function useDeviceTier() {
  // 一次性检测;函数式初始值避免每次渲染重测
  const [tier] = useState(detectTier);
  return tier;
}
