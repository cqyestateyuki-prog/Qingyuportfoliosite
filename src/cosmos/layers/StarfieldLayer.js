/**
 * StarfieldLayer — gl.POINTS 闪烁星空,滚动视差
 */

import { Program, Mesh, Geometry } from 'ogl';
import { starfieldVertex, starfieldFragment } from '../shaders/starfield';

export default class StarfieldLayer {
  constructor(gl, config) {
    const count = config.starCount;
    const position = new Float32Array(count * 2);
    const seed = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      position[i * 2] = Math.random() * 2 - 1;
      position[i * 2 + 1] = Math.random() * 2 - 1;
      seed[i] = Math.random();
    }

    const geometry = new Geometry(gl, {
      position: { size: 2, data: position },
      aSeed: { size: 1, data: seed },
    });

    this.program = new Program(gl, {
      vertex: starfieldVertex,
      fragment: starfieldFragment,
      uniforms: {
        uTime: { value: 0 },
        uDpr: { value: Math.min(window.devicePixelRatio || 1, config.dprCap) },
        uScroll: { value: 0 },
        uStarAlpha: { value: 1 },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    // 加色混合:星光叠加发亮
    this.program.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

    this.mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program: this.program });
  }

  update(state) {
    const u = this.program.uniforms;
    u.uTime.value = state.time;
    u.uScroll.value = state.scroll;
    u.uStarAlpha.value = state.palette.starAlpha;
  }

  dispose() {
    this.mesh.geometry.remove();
    this.program.remove();
  }
}
