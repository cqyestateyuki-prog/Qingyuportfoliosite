/**
 * 星月粒子 shader — scatter ↔ moon ↔ star 形态插值 + 漂散 + 鼠标斥力
 *
 * uMorph: 0=scatter, 1=moon, 2=star(连续值,JS 端缓动)
 * uDisperse: 0 聚合 → 1 完全消散
 */

export const shapeParticlesVertex = /* glsl */ `
attribute vec2 aScatter;
attribute vec2 aMoon;
attribute vec2 aStar;
attribute float aSeed;

uniform float uTime;
uniform float uMorph;
uniform float uDisperse;
uniform float uDpr;
uniform float uAspect;
uniform vec2 uMouse;       // square 坐标
uniform vec2 uMoonOffset;
uniform float uMoonScale;
uniform vec2 uStarOffset;
uniform float uStarScale;

varying float vAlpha;
varying float vSeed;

void main() {
  float mShape = clamp(uMorph, 0.0, 1.0);       // scatter → 形状
  float mStar = clamp(uMorph - 1.0, 0.0, 1.0);  // moon → star

  vec2 moonPos = aMoon * uMoonScale + uMoonOffset;
  vec2 starPos = aStar * uStarScale + uStarOffset;
  vec2 shaped = mix(moonPos, starPos, mStar);
  vec2 pos = mix(aScatter, shaped, mShape);

  // 漂散:廉价伪 curl 漂移 + 个体相位
  vec2 drift = vec2(
    sin(pos.y * 2.3 + uTime * 0.25 + aSeed * 6.28),
    cos(pos.x * 2.1 - uTime * 0.2 + aSeed * 3.14)
  );
  pos += drift * uDisperse * (0.12 + aSeed * 0.45);

  // 鼠标轻推
  vec2 dm = pos - uMouse;
  float d = length(dm);
  pos += (dm / max(d, 1e-3)) * exp(-d * d * 16.0) * 0.07;

  vAlpha = 1.0 - uDisperse * 0.55;
  vSeed = aSeed;

  gl_Position = vec4(pos.x / uAspect, pos.y, 0.0, 1.0);

  float twinkle = 0.5 + 0.5 * sin(uTime * (1.0 + aSeed * 2.0) + aSeed * 40.0);
  gl_PointSize = mix(1.5, 3.6, aSeed) * uDpr * (0.8 + 0.5 * twinkle);
}
`;

export const shapeParticlesFragment = /* glsl */ `
precision highp float;

uniform float uDayness;

varying float vAlpha;
varying float vSeed;

void main() {
  vec2 d = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.05, length(d));
  vec3 col = mix(vec3(0.86, 0.83, 1.0), vec3(0.99, 0.93, 1.0), vSeed);
  // 日间退为极淡星尘
  gl_FragColor = vec4(col, a * vAlpha * mix(0.9, 0.18, uDayness));
}
`;
