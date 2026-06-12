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

  // 夜:提对比压亮度(深空为主,星云丝缕点睛);日:低对比高亮度 → 白色云海
  f = mix(pow(f, 1.9) * 1.3, f * 0.38 + 0.56, uDayness);

  vec3 col = mix(uColA, uColB, clamp(f * 1.5, 0.0, 1.0));
  col = mix(col, uColC, clamp(length(q) * 0.8, 0.0, 1.0) * mix(0.12 + 0.55 * f, 0.4, uDayness));
  col = mix(col, uColD, smoothstep(0.62, 0.95, f) * (0.55 - 0.25 * uDayness));

  // 日:蓬松白云(更大朵、更亮,梦核棉花感)
  col = mix(col, vec3(1.0), smoothstep(0.5, 0.8, f) * uDayness * 0.9);

  // 日:多巴胺彩色光斑 — 渐变只出现在局部,云层流过时若隐若现
  if (uDayness > 0.01) {
    vec2 g1 = p - vec2(-1.05, 0.55);  // 左上 香芋紫
    vec2 g2 = p - vec2(1.15, 0.05);   // 右中 蜜桃粉
    vec2 g3 = p - vec2(-0.25, -0.85); // 下方 晴空蓝
    float cloudGate = 0.5 + 0.5 * f; // 被云层调制,更透亮
    col = mix(col, vec3(0.70, 0.60, 0.99), exp(-dot(g1, g1) * 1.2) * 0.65 * uDayness * cloudGate);
    col = mix(col, vec3(1.0, 0.70, 0.84), exp(-dot(g2, g2) * 1.0) * 0.6 * uDayness * cloudGate);
    col = mix(col, vec3(0.60, 0.84, 1.0), exp(-dot(g3, g3) * 1.3) * 0.55 * uDayness * cloudGate);

    // 梦核虹彩微光:云缘处一层缓慢游移的淡彩(透亮感)
    float irid = smoothstep(0.42, 0.58, f) * (1.0 - smoothstep(0.58, 0.75, f));
    vec3 iridCol = vec3(
      0.85 + 0.15 * sin(uTime * 0.12 + p.x * 1.5),
      0.82 + 0.15 * sin(uTime * 0.15 + p.y * 1.7 + 2.0),
      0.95 + 0.05 * sin(uTime * 0.1 + 4.0)
    );
    col = mix(col, iridCol, irid * uDayness * 0.35);

    // 日:鼠标位置一圈柔白光环(像云间透下的光)
    col += vec3(1.0, 0.97, 0.95) * exp(-md * md * 3.5) * uDayness * 0.18;
  }

  // 鼠标柔光(夜里更亮)
  col += uColD * exp(-md * md * 2.5) * (0.10 + 0.08 * (1.0 - uDayness));

  // 晨曦:底部一抹极淡暖粉
  float dawn = smoothstep(0.5, 0.0, uv.y) * uDayness;
  col = mix(col, vec3(1.0, 0.93, 0.95), dawn * 0.3);

  // 夜:亮色流光动线 — 被噪声扭动的发光弧线,贴着画面下沿流过(不压正文)
  float wob = noise(vec2(p.x * 0.7 + t * 1.6, uTime * 0.05)) - 0.5;
  float curveY = -0.62 + 0.28 * sin(p.x * 0.45 + uTime * 0.06) + 0.35 * wob;
  float dRib = abs(p.y - curveY);
  float ribbon = exp(-dRib * dRib * 110.0) + exp(-dRib * dRib * 12.0) * 0.28;
  float ribPulse = 0.75 + 0.25 * sin(uTime * 0.25 + p.x * 1.3);
  col += mix(uColD, vec3(1.0), 0.45) * ribbon * ribPulse * (1.0 - uDayness) * 0.85;

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
