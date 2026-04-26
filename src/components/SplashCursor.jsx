/**
 * SplashCursor Component
 * 
 * 鼠标拖尾粒子特效组件
 * - 鼠标移动时产生发光粒子轨迹
 * - 鼠标点击时产生爆发扩散效果
 * - 使用 Canvas 2D 绑定到 window，全局生效
 * 
 * @param {Object} color - RGB颜色对象 { r, g, b }
 */

import { useEffect, useRef, useCallback } from 'react';

// ============ 配置常量 ============
const PARTICLE_CONFIG = {
  maxCount: 80,           // 最大粒子数
  trailThreshold: 3,      // 触发拖尾的最小移动距离
  burstCount: 20,         // 点击爆发粒子数
  decayRange: [0.015, 0.03], // 衰减速率范围
  sizeRange: [4, 12],     // 粒子尺寸范围
  colorVariance: 40       // 颜色随机偏移范围
};

// ============ 粒子类 ============
class Particle {
  constructor(x, y, vx, vy, baseColor) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.life = 1;
    this.decay = PARTICLE_CONFIG.decayRange[0] + 
      Math.random() * (PARTICLE_CONFIG.decayRange[1] - PARTICLE_CONFIG.decayRange[0]);
    this.size = PARTICLE_CONFIG.sizeRange[0] + 
      Math.random() * (PARTICLE_CONFIG.sizeRange[1] - PARTICLE_CONFIG.sizeRange[0]);
    this.originalSize = this.size;
    
    // 颜色微调，增加视觉丰富度
    const variance = PARTICLE_CONFIG.colorVariance;
    this.r = Math.min(255, Math.max(0, baseColor.r + Math.floor((Math.random() - 0.5) * variance)));
    this.g = Math.min(255, Math.max(0, baseColor.g + Math.floor((Math.random() - 0.5) * variance)));
    this.b = Math.min(255, Math.max(0, baseColor.b + Math.floor((Math.random() - 0.5) * variance)));
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.96; // 摩擦力
    this.vy *= 0.96;
    this.life -= this.decay;
    this.size = this.originalSize * this.life;
  }

  draw(ctx) {
    if (this.life <= 0) return;
    
    // 绘制发光渐变效果
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size * 2
    );
    gradient.addColorStop(0, `rgba(${this.r}, ${this.g}, ${this.b}, ${this.life * 0.8})`);
    gradient.addColorStop(0.5, `rgba(${this.r}, ${this.g}, ${this.b}, ${this.life * 0.3})`);
    gradient.addColorStop(1, `rgba(${this.r}, ${this.g}, ${this.b}, 0)`);
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  get isAlive() {
    return this.life > 0;
  }
}

// ============ 主组件 ============
const SplashCursor = ({ color = { r: 138, g: 129, b: 215 } }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  // 创建拖尾粒子
  const createTrailParticles = useCallback((x, y, dx, dy, speed) => {
    const particles = particlesRef.current;
    const numParticles = Math.min(Math.floor(speed / 4) + 1, 6);
    
    for (let i = 0; i < numParticles; i++) {
      const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * Math.PI * 0.8;
      const velocity = speed * 0.08 + Math.random() * 1.5;
      
      particles.push(new Particle(
        x + (Math.random() - 0.5) * 8,
        y + (Math.random() - 0.5) * 8,
        Math.cos(angle) * velocity,
        Math.sin(angle) * velocity,
        color
      ));
    }

    // 限制粒子数量
    while (particles.length > PARTICLE_CONFIG.maxCount) {
      particles.shift();
    }
  }, [color]);

  // 创建点击爆发粒子
  const createBurstParticles = useCallback((x, y) => {
    const particles = particlesRef.current;
    
    for (let i = 0; i < PARTICLE_CONFIG.burstCount; i++) {
      const angle = (Math.PI * 2 * i) / PARTICLE_CONFIG.burstCount + Math.random() * 0.3;
      const velocity = 2 + Math.random() * 4;
      
      particles.push(new Particle(
        x, y,
        Math.cos(angle) * velocity,
        Math.sin(angle) * velocity,
        color
      ));
    }
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置 canvas 尺寸
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // 鼠标移动处理
    const handleMouseMove = (e) => {
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > PARTICLE_CONFIG.trailThreshold) {
        createTrailParticles(e.clientX, e.clientY, dx, dy, speed);
      }

      lastPosRef.current = { x: e.clientX, y: e.clientY };
    };

    // 鼠标点击处理
    const handleMouseDown = (e) => {
      createBurstParticles(e.clientX, e.clientY);
    };

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      // 更新和绘制粒子（倒序遍历便于删除）
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);

        if (!particles[i].isAlive) {
          particles.splice(i, 1);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // 添加事件监听
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    
    // 启动动画
    animate();

    // 清理
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createTrailParticles, createBurstParticles]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      aria-hidden="true"
    />
  );
};

export default SplashCursor;
