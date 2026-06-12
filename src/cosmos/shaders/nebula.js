/**
 * 星云流体 shader — IQ 域扭曲 fbm
 *
 * 夜:深紫星云,鼠标局部扭曲 + 柔光
 * 日(uDayness→1):降对比提亮成云海,底部晨曦暖粉光带
 */

export const nebulaVertex = /* glsl */ `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

export function nebulaFragment(octaves) {
  return /* glsl */ `
precision highp float;

#define OCTAVES ${octaves}

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;       // 0..1, y 向上
uniform float uScroll;     // 全页滚动进度
uniform float uDayness;    // 0 夜 → 1 日
uniform vec3 uColA;
uniform vec3 uColB;
uniform vec3 uColC;
uniform vec3 uColD;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < OCTAVES; i++) {
    v += a * noise(p);
    p = rot * p * 2.0 + vec2(13.7);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * 2.2;
  // 滚动 = 镜头在天空中移动
  p.y += uScroll * 1.6;
  float t = uTime * 0.04;

  // 鼠标局部域扭曲
  vec2 m = (uMouse - 0.5) * vec2(aspect, 1.0) * 2.2;
  float md = length(p - m);
  vec2 mw = (p - m) * 0.35 * exp(-md * md * 1.4);

  // 域扭曲 fbm(q → r → f)
  vec2 q = vec2(
    fbm(p + t),
    fbm(p + vec2(5.2, 1.3) - t * 0.7)
  );
  vec2 r = vec2(
    fbm(p + 2.0 * q + vec2(1.7, 9.2) + t * 0.6 + mw),
    fbm(p + 2.0 * q + vec2(8.3, 2.8) - t * 0.4)
  );
  float f = fbm(p + 2.0 * r);

  // 夜:提对比压亮度(深空为主,星云丝缕点睛);日:降对比提亮 → 柔软云海
  f = mix(pow(f, 1.9) * 1.3, f * 0.5 + 0.42, uDayness);

  vec3 col = mix(uColA, uColB, clamp(f * 1.5, 0.0, 1.0));
  col = mix(col, uColC, clamp(length(q) * 0.8, 0.0, 1.0) * mix(0.12 + 0.55 * f, 0.6, uDayness));
  col = mix(col, uColD, smoothstep(0.62, 0.95, f) * (0.55 - 0.25 * uDayness));

  // 鼠标柔光(夜里更亮)
  col += uColD * exp(-md * md * 2.5) * (0.10 + 0.08 * (1.0 - uDayness));

  // 晨曦:底部暖粉光带
  float dawn = smoothstep(0.55, 0.0, uv.y) * uDayness;
  col = mix(col, vec3(0.99, 0.85, 0.88), dawn * 0.45);

  // 夜:底部沉降,顶部留呼吸
  col *= mix(1.0, 0.85 + 0.3 * uv.y, (1.0 - uDayness) * 0.6);

  // vignette + 胶片噪点
  float vig = smoothstep(1.6, 0.4, length(uv - 0.5) * 2.0);
  col *= mix(0.82, 1.0, vig);
  col += (hash(uv * vec2(1271.3, 711.7) + fract(uTime)) - 0.5) * 0.028;

  gl_FragColor = vec4(col, 1.0);
}
`;
}
