/**
 * TrailLayer — 鼠标仙尘粒子拖尾(夜)
 *
 * 环形缓冲:鼠标滑过沿路径撒下淡紫光尘,粒子微微上飘、随机漂散、约 1.2s 渐隐。
 * 路径弯粒子就跟着弯,没有"直线"感。high 档限定(触屏无鼠标)。
 */

import { Program, Mesh, Geometry } from 'ogl';

const COUNT = 110;

const vertex = /* glsl */ `
attribute vec2 position;  // square 坐标
attribute float aLife;
attribute float aSeed;

uniform float uDpr;
uniform float uAspect;

varying float vLife;
varying float vSeed;

void main() {
  vLife = aLife;
  vSeed = aSeed;
  gl_Position = vec4(position.x / uAspect, position.y, 0.0, 1.0);
  gl_PointSize = mix(2.8, 8.0, aSeed) * uDpr * (0.35 + 0.65 * aLife);
}
`;

const fragment = /* glsl */ `
precision highp float;

uniform float uDayness;

varying float vLife;
varying float vSeed;

void main() {
  if (vLife <= 0.0) discard;
  vec2 d = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.05, length(d));
  vec3 col = mix(vec3(0.78, 0.73, 0.95), vec3(0.95, 0.92, 1.0), vSeed);
  gl_FragColor = vec4(col, a * vLife * vLife * 0.95 * (1.0 - uDayness));
}
`;

export default class TrailLayer {
  constructor(gl, config) {
    this.positions = new Float32Array(COUNT * 2);
    this.lifes = new Float32Array(COUNT);
    this.vels = new Float32Array(COUNT * 2);
    const seeds = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) seeds[i] = Math.random();

    this.head = 0;
    this._prev = null;
    this._lastTime = null;

    this.geometry = new Geometry(gl, {
      position: { size: 2, data: this.positions, usage: gl.DYNAMIC_DRAW },
      aLife: { size: 1, data: this.lifes, usage: gl.DYNAMIC_DRAW },
      aSeed: { size: 1, data: seeds },
    });

    this.program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uDpr: { value: Math.min(window.devicePixelRatio || 1, config.dprCap) },
        uAspect: { value: 1 },
        uDayness: { value: 0 },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    this.program.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

    this.mesh = new Mesh(gl, { mode: gl.POINTS, geometry: this.geometry, program: this.program });
  }

  update(state) {
    const dt = this._lastTime == null ? 0.016 : Math.min(state.time - this._lastTime, 0.05);
    this._lastTime = state.time;

    const mx = state.mouseSq[0];
    const my = state.mouseSq[1];
    if (!this._prev) this._prev = [mx, my];

    // 沿移动路径撒粒子(路径弯,尘就弯)
    const dx = mx - this._prev[0];
    const dy = my - this._prev[1];
    const dist = Math.hypot(dx, dy);
    if (dist > 0.0025) {
      const n = Math.min(5, Math.max(1, Math.round(dist / 0.013)));
      for (let k = 0; k < n; k++) {
        const i = this.head;
        this.head = (this.head + 1) % COUNT;
        const f = (k + 1) / n;
        this.positions[i * 2] = this._prev[0] + dx * f + (Math.random() - 0.5) * 0.012;
        this.positions[i * 2 + 1] = this._prev[1] + dy * f + (Math.random() - 0.5) * 0.012;
        // 轻微随机漂散 + 微微上浮(仙气),并带一点点路径惯性
        this.vels[i * 2] = (Math.random() - 0.5) * 0.05 + dx * 0.4;
        this.vels[i * 2 + 1] = (Math.random() - 0.5) * 0.05 + dy * 0.4 + 0.018;
        this.lifes[i] = 1;
      }
    }
    this._prev[0] = mx;
    this._prev[1] = my;

    // 老化 + 漂移
    for (let i = 0; i < COUNT; i++) {
      if (this.lifes[i] <= 0) continue;
      this.lifes[i] -= dt * 0.66;
      if (this.lifes[i] < 0) this.lifes[i] = 0;
      this.positions[i * 2] += this.vels[i * 2] * dt;
      this.positions[i * 2 + 1] += this.vels[i * 2 + 1] * dt;
      this.vels[i * 2] *= 0.97;
      this.vels[i * 2 + 1] *= 0.97;
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.aLife.needsUpdate = true;

    const u = this.program.uniforms;
    u.uAspect.value = state.aspect;
    u.uDayness.value = state.dayness;
  }

  resize(w, h, aspect) {
    this.program.uniforms.uAspect.value = aspect;
  }

  dispose() {
    this.mesh.geometry.remove();
    this.program.remove();
  }
}
