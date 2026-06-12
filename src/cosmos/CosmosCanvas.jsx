/**
 * CosmosCanvas — 持久化 WebGL 画布(挂在 Routes 外,路由切换不重建)
 *
 * - lazy chunk(ogl 只在这里进 bundle)
 * - 场景初始化延到 requestIdleCallback:Hero 文字先画(LCP),星空再淡入
 * - low 档 / WebGL 失败 → CSS 渐变降级
 * - StrictMode 安全:cleanup 完整释放 GL
 */

import { useRef, useEffect, useState } from 'react';
import { useCosmos } from './CosmosProvider';
import SceneManager from './SceneManager';

const CosmosCanvas = () => {
  const { tier, registerScene } = useCosmos();
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (tier === 'low') return undefined;

    let scene = null;
    let idleId = null;
    let cancelled = false;

    const init = () => {
      if (cancelled || !canvasRef.current) return;
      try {
        scene = new SceneManager(canvasRef.current, { tier });
        registerScene(scene);
        scene.start();
        setReady(true);
      } catch (err) {
        console.warn('[cosmos] WebGL init failed, falling back to CSS', err);
        setFailed(true);
      }
    };

    if ('requestIdleCallback' in window) {
      idleId = requestIdleCallback(init, { timeout: 1500 });
    } else {
      idleId = setTimeout(init, 200);
    }

    return () => {
      cancelled = true;
      if ('cancelIdleCallback' in window) cancelIdleCallback(idleId);
      else clearTimeout(idleId);
      registerScene(null);
      scene?.dispose();
    };
  }, [tier, registerScene]);

  if (tier === 'low' || failed) {
    return <div className="cosmos-fallback" aria-hidden="true" />;
  }

  return (
    <>
      {/* 画布加载完成前的底色,避免白屏 */}
      <div className="cosmos-fallback" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="cosmos-canvas-el"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: ready ? undefined : 0,
          transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </>
  );
};

export default CosmosCanvas;
