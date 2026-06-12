/**
 * ShapeParticlesLayer — 星月粒子聚散(人设签名元素)
 *
 * 形态由叙事时间轴 / 滚动驱动:scene.set('shape', 'moon'|'star'|'scatter'),
 * scene.set('disperse', 0..1);摆位经 setParam('moonPlacement'|'starPlacement')。
 */

import { Program, Mesh, Geometry } from 'ogl';
import { shapeParticlesVertex, shapeParticlesFragment } from '../shaders/shapeParticles';
import { sampleShapes } from '../shapeSampler';

export default class ShapeParticlesLayer {
  constructor(gl, config) {
    const count = config.morphParticles;
    const { scatter, moon, star } = sampleShapes(count);
    const seed = new Float32Array(count);
    for (let i = 0; i < count; i++) seed[i] = Math.random();

    const geometry = new Geometry(gl, {
      aScatter: { size: 2, data: scatter },
      aMoon: { size: 2, data: moon },
      aStar: { size: 2, data: star },
      aSeed: { size: 1, data: seed },
      // ogl 需要 position 决定 drawCount;复用 scatter
      position: { size: 2, data: scatter },
    });

    this.program = new Program(gl, {
      vertex: shapeParticlesVertex,
      fragment: shapeParticlesFragment,
      uniforms: {
        uTime: { value: 0 },
        uMorph: { value: 0 },
        uDisperse: { value: 1 },
        uDpr: { value: Math.min(window.devicePixelRatio || 1, config.dprCap) },
        uAspect: { value: 1 },
        uMouse: { value: [0, 0] },
        uDayness: { value: 0 },
        // 默认:月亮偏右上(Hero),星星居中偏上(Contact)
        uMoonOffset: { value: [0.85, 0.3] },
        uMoonScale: { value: 0.55 },
        uStarOffset: { value: [0, 0.15] },
        uStarScale: { value: 0.5 },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    this.program.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

    this.mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program: this.program });
  }

  update(state) {
    const u = this.program.uniforms;
    u.uTime.value = state.time;
    u.uMorph.value = state.morph;
    u.uDisperse.value = state.disperse;
    u.uAspect.value = state.aspect;
    u.uMouse.value = state.mouseSq;
    u.uDayness.value = state.dayness;
  }

  setParam(key, value) {
    const u = this.program.uniforms;
    if (key === 'moonPlacement') {
      if (value.offset) u.uMoonOffset.value = value.offset;
      if (value.scale != null) u.uMoonScale.value = value.scale;
    } else if (key === 'starPlacement') {
      if (value.offset) u.uStarOffset.value = value.offset;
      if (value.scale != null) u.uStarScale.value = value.scale;
    }
  }

  resize(w, h, aspect) {
    this.program.uniforms.uAspect.value = aspect;
  }

  dispose() {
    this.mesh.geometry.remove();
    this.program.remove();
  }
}
