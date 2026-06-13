/**
 * NebulaLayer — 全屏星云流体(域扭曲 fbm)
 */

import { Program, Mesh, Triangle } from 'ogl';
import { nebulaVertex, nebulaFragment } from '../shaders/nebula';
import { NIGHT } from '../palettes';

export default class NebulaLayer {
  constructor(gl, config) {
    const geometry = new Triangle(gl);
    this.program = new Program(gl, {
      vertex: nebulaVertex,
      fragment: nebulaFragment(config.octaves || 4),
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1, 1] },
        uMouse: { value: [0.5, 0.5] },
        uMouseVel: { value: [0, 0] },
        uScroll: { value: 0 },
        uDayness: { value: 0 },
        uColA: { value: [...NIGHT.colA] },
        uColB: { value: [...NIGHT.colB] },
        uColC: { value: [...NIGHT.colC] },
        uColD: { value: [...NIGHT.colD] },
      },
      depthTest: false,
      depthWrite: false,
    });
    this.mesh = new Mesh(gl, { geometry, program: this.program });
  }

  update(state) {
    const u = this.program.uniforms;
    u.uTime.value = state.time;
    u.uMouse.value = state.mouseUv;
    u.uMouseVel.value = state.mouseVel;
    u.uScroll.value = state.scroll;
    u.uDayness.value = state.dayness;
    u.uColA.value = state.palette.colA;
    u.uColB.value = state.palette.colB;
    u.uColC.value = state.palette.colC;
    u.uColD.value = state.palette.colD;
  }

  resize(w, h) {
    this.program.uniforms.uResolution.value = [w, h];
  }

  dispose() {
    this.mesh.geometry.remove();
    this.program.remove();
  }
}
