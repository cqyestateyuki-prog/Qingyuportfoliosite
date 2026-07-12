/**
 * ErrorBoundary — 兜底,避免一次渲染错误把整棵树卸载成空白页
 *
 * 主要针对浏览器翻译(以及其它会改写 DOM 的扩展)。它们会把文本节点搬进
 * 新插入的 <font> 里,React 手里的节点引用随之失效;下一次 React 增删节点时
 * 就会抛 NotFoundError: Failed to execute 'insertBefore'。
 * React 18 对未捕获的渲染错误的处理是卸载整棵树,页面只剩 body 底色。
 *
 * 这类错误重新挂载一次即可恢复,所以这里静默 remount,不打扰访客。
 */

import { Component, Fragment } from 'react';

const MAX_SILENT_RECOVERIES = 3;

const isDomMutationError = (error) =>
  error instanceof Error &&
  (error.name === 'NotFoundError' || error.name === 'HierarchyRequestError') &&
  /insertBefore|removeChild|appendChild/.test(error.message);

class ErrorBoundary extends Component {
  state = { hasError: false, remountKey: 0, recoveries: 0 };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    if (isDomMutationError(error) && this.state.recoveries < MAX_SILENT_RECOVERIES) {
      this.setState((prev) => ({
        hasError: false,
        remountKey: prev.remountKey + 1,
        recoveries: prev.recoveries + 1,
      }));
      return;
    }
    console.error('[ErrorBoundary]', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '2rem',
            textAlign: 'center',
            color: 'var(--text-body, #cfc9e8)',
          }}
        >
          <p>Something went wrong while rendering this page.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.6rem 1.4rem',
              borderRadius: '999px',
              border: '1px solid var(--card-glass-border, rgba(255,255,255,0.2))',
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            Reload
          </button>
        </div>
      );
    }

    return <Fragment key={this.state.remountKey}>{this.props.children}</Fragment>;
  }
}

export default ErrorBoundary;
