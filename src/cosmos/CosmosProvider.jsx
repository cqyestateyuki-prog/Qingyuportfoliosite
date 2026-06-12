/**
 * CosmosProvider — 宇宙世界的 React 接口
 *
 * - tier: 设备分级
 * - set(key, value): 向 WebGL 场景写命名 uniform(scroll/shape/disperse…),
 *   ref 总线,零 React 重渲染 — 任何页面都可接入(后续详情页/About 复用)
 * - 监听主题,把 themeMix 以 1.4s 缓动喂给 shader(仪式感天空过渡)
 */

import { createContext, useContext, useRef, useEffect, useCallback, useMemo } from 'react';
import { useTheme } from 'next-themes';
import { animate } from 'framer-motion';
import useDeviceTier from './useDeviceTier';

const CosmosContext = createContext({
  tier: 'low',
  set: () => {},
  registerScene: () => {},
});

export function CosmosProvider({ children }) {
  const tier = useDeviceTier();
  const sceneRef = useRef(null);
  const daynessRef = useRef(null); // null = 尚未初始化(首帧直接定位,不播动画)
  const { resolvedTheme } = useTheme();

  const registerScene = useCallback((scene) => {
    sceneRef.current = scene;
    if (scene && daynessRef.current != null) {
      scene.set('dayness', daynessRef.current, true);
    }
  }, []);

  const set = useCallback((key, value, immediate) => {
    sceneRef.current?.set(key, value, immediate);
  }, []);

  // 主题 → themeMix 缓动(0 夜 → 1 日)
  useEffect(() => {
    if (!resolvedTheme) return;
    const target = resolvedTheme === 'light' ? 1 : 0;

    // 首次确定主题:直接定位,避免刷新时播一遍过渡
    if (daynessRef.current == null) {
      daynessRef.current = target;
      sceneRef.current?.set('dayness', target, true);
      return;
    }

    const controls = animate(daynessRef.current, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        daynessRef.current = v;
        sceneRef.current?.set('dayness', v, true);
      },
    });
    return () => controls.stop();
  }, [resolvedTheme]);

  const value = useMemo(() => ({ tier, set, registerScene }), [tier, set, registerScene]);

  return <CosmosContext.Provider value={value}>{children}</CosmosContext.Provider>;
}

export function useCosmos() {
  return useContext(CosmosContext);
}
