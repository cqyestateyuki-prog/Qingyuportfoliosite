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
uniform vec2 uMouseVel;    // uv 空间速度(流星拖尾方向)
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

  // 鼠标局部域扭曲(云雾感:范围更大、力道更轻,不粘稠)
  vec2 m = (uMouse - 0.5) * vec2(aspect, 1.0) * 2.2;
  vec2 pScreen = (uv - 0.5) * vec2(aspect, 1.0) * 2.2; // 不含滚动偏移的屏幕坐标
  float md = length(pScreen - m);
  vec2 mw = (pScreen - m) * 0.14 * exp(-md * md * 0.65);

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

  // 日:大厂干净白 — 极淡的云纹理 + 左上一处含蓄薰衣草柔光,无彩色光斑
  col = mix(col, vec3(1.0), smoothstep(0.5, 0.8, f) * uDayness * 0.45);
  if (uDayness > 0.01) {
    vec2 g1 = p - vec2(-1.0, 0.7);
    col = mix(col, vec3(0.90, 0.87, 0.98), exp(-dot(g1, g1) * 0.9) * 0.35 * uDayness);
  }

  // 鼠标柔光(轻薄一层,夜里可见)
  col += uColD * exp(-md * md * 2.2) * 0.09 * (1.0 - uDayness);

  // (鼠标拖尾改由 TrailLayer 粒子实现)

  // 夜:月牙光弧 — 开口朝上的弯月躺在画面下方,弧度大、两端上翘渐隐
  vec2 arcCenter = vec2(0.0, 1.57);
  float rad = length(p - arcCenter);
  float arcWob = noise(vec2(p.x * 1.1 + t * 1.2, uTime * 0.04)) - 0.5;
  float dArc = abs(rad - (2.3 + 0.06 * arcWob));
  // 月牙质感:|x| 越大越细越淡(末端渐隐)
  float tipFade = smoothstep(2.0, 0.15, abs(p.x));
  float thickness = mix(340.0, 175.0, tipFade);
  float arcGlow = (exp(-dArc * dArc * thickness) + exp(-dArc * dArc * 11.0) * 0.24 * tipFade) * tipFade;
  float arcPulse = 0.8 + 0.2 * sin(uTime * 0.22 + p.x * 1.1);
  col += mix(uColD, vec3(1.0), 0.5) * arcGlow * arcPulse * (1.0 - uDayness) * 0.9;

  // 伴弧:外圈一道更细更淡的光晕
  float dArc2 = abs(rad - (2.56 + 0.05 * arcWob));
  float arcGlow2 = exp(-dArc2 * dArc2 * 280.0) * tipFade;
  col += uColC * arcGlow2 * (0.7 + 0.3 * sin(uTime * 0.18 + p.x)) * (1.0 - uDayness) * 0.32;

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
