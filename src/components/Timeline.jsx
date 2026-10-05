import React from 'react';
import { motion } from 'framer-motion';

// items 里的一项可以是单个经历,也可以是 [经历A, 经历B] 数组:
// 数组表示同期并行的两段经历,桌面端左右并排放在同一行,手机端上下紧挨着。
const Card = ({ item }) => (
  <div
    className="p-6 rounded-2xl backdrop-blur-md transition-shadow"
    style={{
      background: 'var(--card-glass-bg)',
      border: '1px solid var(--card-glass-border)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.12), 0 0 16px var(--hud-glow)',
    }}
  >
    <span
      className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2"
      style={{ background: 'color-mix(in srgb, var(--hud-glow) 40%, transparent)', color: 'var(--text-accent)' }}
    >
      {item.date}
    </span>
    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-hero)' }}>{item.title}</h3>
    <div className="font-medium mb-3" style={{ color: 'var(--text-muted)' }}>{item.company}</div>
    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
      {item.description}
    </p>
  </div>
);

const Dot = ({ className = '' }) => (
  <div
    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 ${className}`}
    style={{ background: 'var(--text-accent)', boxShadow: '0 0 12px var(--hud-glow)' }}
  ></div>
);

const Timeline = ({ items }) => {
  return (
    <div className="relative py-10">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2" style={{ background: 'var(--hud-line)' }}></div>

      {items.map((entry, index) => {
        const motionProps = {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-100px' },
          transition: { duration: 0.5, delay: index * 0.2 },
        };

        // 同期并行:左右各一张,顶部对齐
        if (Array.isArray(entry)) {
          const [left, right] = entry;
          return (
            <motion.div key={index} className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-0 mb-12" {...motionProps}>
              {/* 单条经历的圆点在卡片正中,这里同样对齐到整行正中 */}
              <Dot className="top-1/2 -translate-y-1/2" />
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
                <Card item={left} />
              </div>
              <div className="w-full md:w-1/2 pl-12">
                <Card item={right} />
              </div>
            </motion.div>
          );
        }

        const onLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
            className={`relative flex items-center mb-12 ${onLeft ? 'md:flex-row-reverse' : ''}`}
            {...motionProps}
          >
            <Dot />

            {/* Spacer for desktop alignment */}
            <div className="hidden md:block w-1/2"></div>

            {/* Content */}
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${onLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <Card item={entry} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;
