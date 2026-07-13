/**
 * 案例正文的高亮语法:[[文字]] → Markdown 加粗,再由 strong 组件上项目高亮色。
 *
 * ProjectDetail 和 ImageGallery(交替图文模式)共用同一份实现,
 * 否则两条渲染路径会走散,某一条悄悄不支持高亮。
 */
export const preprocessHighlightMarkers = (text) => {
  if (typeof text !== 'string') return text;
  return text.replace(/\[\[([^\]]+)\]\]/g, '**$1**');
};
