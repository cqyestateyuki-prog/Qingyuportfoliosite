/**
 * shapeSampler — 离屏 canvas 采样月亮/星星的粒子目标点位
 *
 * 形状以原点为中心,坐标 ∈ [-1,1](square 空间),由 shader 的
 * placement uniform 决定最终摆位和缩放。
 */

const SIZE = 256;

function samplePoints(ctx, count, draw) {
  ctx.clearRect(0, 0, SIZE, SIZE);
  ctx.fillStyle = '#fff';
  ctx.globalCompositeOperation = 'source-over';
  draw(ctx);
  const data = ctx.getImageData(0, 0, SIZE, SIZE).data;

  const pts = new Float32Array(count * 2);
  let i = 0;
  let guard = 0;
  const maxTries = count * 600;
  while (i < count && guard < maxTries) {
    guard++;
    const x = Math.random() * SIZE;
    const y = Math.random() * SIZE;
    const alpha = data[((y | 0) * SIZE + (x | 0)) * 4 + 3];
    if (alpha > 128) {
      pts[i * 2] = (x / SIZE - 0.5) * 2;
      pts[i * 2 + 1] = -(y / SIZE - 0.5) * 2; // canvas y 向下 → square y 向上
      i++;
    }
  }
  // 兜底:形状面积过小时填充随机点
  while (i < count) {
    pts[i * 2] = (Math.random() - 0.5) * 0.5;
    pts[i * 2 + 1] = (Math.random() - 0.5) * 0.5;
    i++;
  }
  return pts;
}

function drawMoon(ctx) {
  // 新月 = 大圆挖掉偏移圆
  const c = SIZE / 2;
  ctx.beginPath();
  ctx.arc(c, c, 92, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(c + 44, c - 30, 80, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
}

function drawStar(ctx) {
  // 四角星芒(外尖内凹)
  const c = SIZE / 2;
  const outer = 110;
  const inner = 26;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const x = c + Math.cos(a) * r;
    const y = c + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}

/**
 * 返回 { scatter, moon, star } 三组 Float32Array(count*2)
 * scatter 充满全屏(square 空间 x 取宽幅,resize 后由 shader /uAspect 收回)
 */
export function sampleShapes(count) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = SIZE;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  const scatter = new Float32Array(count * 2);
  for (let i = 0; i < count; i++) {
    scatter[i * 2] = (Math.random() - 0.5) * 3.8; // 足够覆盖宽屏
    scatter[i * 2 + 1] = (Math.random() - 0.5) * 2.4;
  }

  return {
    scatter,
    moon: samplePoints(ctx, count, drawMoon),
    star: samplePoints(ctx, count, drawStar),
  };
}
