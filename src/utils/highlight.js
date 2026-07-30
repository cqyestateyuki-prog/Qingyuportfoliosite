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

// 纯文本场景(塔罗卡简介等):去掉标记只留文字
export const stripHighlightMarkers = (text) => {
  if (typeof text !== 'string') return text;
  return text.replace(/\[\[([^\]]+)\]\]/g, '$1');
};

// 不走 Markdown 的轻量场景(Showcase 简介行):拆成 {text, highlighted} 段落交给组件上色
export const splitHighlightSegments = (text) => {
  if (typeof text !== 'string') return [{ text: text ?? '', highlighted: false }];
  return text
    .split(/\[\[([^\]]+)\]\]/g)
    .map((part, i) => ({ text: part, highlighted: i % 2 === 1 }))
    .filter((seg) => seg.text);
};
