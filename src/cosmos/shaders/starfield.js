/**
 * 星空 shader — gl.POINTS 闪烁星 + 滚动视差
 */

export const starfieldVertex = /* glsl */ `
attribute vec2 position;  // clip space
attribute float aSeed;

uniform float uTime;
uniform float uDpr;
uniform float uScroll;

varying float vTwinkle;
varying float vSeed;

void main() {
  vec2 pos = position;
  // 滚动视差:远星动得慢,近星动得快;wrap 保持满天
  pos.y += uScroll * 0.5 * (0.3 + aSeed * 0.7);
  pos.y = mod(pos.y + 1.0, 2.0) - 1.0;

  vTwinkle = 0.5 + 0.5 * sin(uTime * (0.5 + aSeed * 1.5) + aSeed * 43.0);
  vSeed = aSeed;

  gl_Position = vec4(pos, 0.0, 1.0);
  gl_PointSize = (1.0 + aSeed * 2.2) * uDpr * (0.8 + 0.5 * vTwinkle);
}
`;

export const starfieldFragment = /* glsl */ `
precision highp float;

uniform float uStarAlpha;

varying float vTwinkle;
varying float vSeed;

void main() {
  vec2 d = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.0, length(d));
  a = a * a;
  vec3 col = mix(vec3(0.92, 0.9, 1.0), vec3(0.77, 0.75, 0.95), vSeed);
  gl_FragColor = vec4(col, a * (0.35 + 0.65 * vTwinkle) * uStarAlpha);
}
`;
