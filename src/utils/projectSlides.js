/**
 * 把一个项目摊成首页碎片墙用的素材序列。
 *
 * 抽出来是因为两处都要用:碎片墙自己渲染当前这一页,
 * 底部的翻页控件要知道一共有几页。
 */

import { getLocalizedText } from './localization';

/** 一页九格(3×3) */
export const TILES_PER_PAGE = 9;

/**
 * 前四格让叙事先一口气讲完(问题 → 市场 → 设计跨越),别被打断;
 * 紧接着放能动手玩的 artifact —— 它们比任何静态截图都更能说明东西真做出来了。
 * 提前排还顺带解决一件事:artifact 在案例里通常排得很靠后,不然会被第一页截掉。
 *
 * 成品图本身就是这个项目最该先看的东西时(SparkUp 的 Diagnostic / Forge / Validation
 * 是连着讲的一组),artifact 插在中间会把这组切断 —— 那种项目在 data 里写
 * artifactSlot 往后挪。数字大于静态图张数就等于排到最后一格。
 */
const ARTIFACT_SLOT = 4;

/**
 * 碎片墙上那行小字。
 *
 * 优先用图自己的标签 —— User Flow、Information Architecture 这类术语,
 * 一眼就知道这张图是什么。退回本节标题的话,同一节有几张图就重复几次,
 * 而且是「From Insight to Interface」这种长句,等于没说。
 *
 * alt 超过 34 字的是描述句不是标签(hexaedge、kogna 那批),当标题会更糟,
 * 那种就还是用本节标题,或者给那张图单独写个 label。
 */
const tileTitle = (img, sectionTitle, language) => {
  const label = getLocalizedText(img?.label, language);
  if (label) return label;
  const alt = getLocalizedText(img?.alt, language);
  if (alt && alt.length <= 34) return alt;
  return sectionTitle;
};

/**
 * 案例里该留、首页碎片墙不该占格的图,数据里标 hideInGallery: true。
 * 直接从 data 删掉的话详情页也跟着少一张,所以只在这里跳过。
 */
const hidden = (img) => img?.hideInGallery === true;

/** 视频格子在碎片墙里走 <video>(静音循环自动播),不能走 <img> */
const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(String(src || ''));

/**
 * 眉标里剥掉自带的编号。
 * 有些项目的 sectionTag 写成「02 · Research」,碎片墙格子左边已经有一个序号了,
 * 两个数字并排读起来很乱。
 */
const stripNum = (s) => String(s || '').replace(/^\s*\d+\s*[·・.、\-–—:]\s*/, '');

export const collectProjectSlides = (project, language) => {
  if (!project) return [];
  const collected = [];

  if (project.slides?.length) {
    // 手写了 slides 就完全照它来
    project.slides.forEach((s) =>
      collected.push({
        src: s.src,
        title: getLocalizedText(s.title, language) || '',
        caption: getLocalizedText(s.caption, language) || '',
        kind: 'image',
      })
    );
  } else {
    const seen = new Set();
    // tag 是那一节的小标题(Problem Statement 这种),title 是这张图具体是什么。
    // 两行一起,和案例里每节「眉标 + 大标题」的排法对上
    const push = (src, title, caption, kind = 'image', tag = '', poster = '') => {
      if (!src || seen.has(src)) return;
      seen.add(src);
      collected.push({ src, title: title || '', caption: caption || '', kind, tag: tag || '', poster });
    };

    // hero 只登记去重、不占格:折叠态整幅就是它,碎开后再放一遍是重复,白占一格。
    // (折叠态的切片单独走 heroImage,和这里各走各的,不受影响)
    //
    // 例外:hero 本身就是某个功能的成品图时(SparkUp 那张宣图讲的是 Spark Forge),
    // 跳过它等于把这一格从案例里抹掉 —— 这种在 data 里写 heroInGallery: true 放行。
    const heroKey = project.heroImage || project.thumbnail;
    if (heroKey && project.heroInGallery !== true) seen.add(heroKey);

    push(
      project.overview?.mainImage?.src,
      tileTitle(
        project.overview?.mainImage,
        getLocalizedText(project.overview?.mainTitle, language),
        language
      ),
      getLocalizedText(project.overview?.mainImage?.caption, language)
    );

    project.sections?.forEach((s) => {
      const sectionTitle = getLocalizedText(s.mainTitle || s.title, language);
      const tag = stripNum(getLocalizedText(s.sectionTag || s.title, language));
      s.images?.forEach((img) => {
        if (hidden(img)) return;
        push(
          img?.src,
          tileTitle(img, sectionTitle, language),
          getLocalizedText(img?.caption, language),
          isVideo(img?.src) ? 'video' : 'image',
          tag,
          img?.poster
        );
      });
      s.imageGroups?.forEach((g) =>
        g.images?.forEach((img) => {
          if (hidden(img)) return;
          push(
            img?.src,
            tileTitle(img, getLocalizedText(g.title, language) || sectionTitle, language),
            getLocalizedText(img?.caption, language),
            'image',
            tag
          );
        })
      );
      // features 的图以前不进首页画廊,案例里最好看的成品图全被漏掉了
      // feature 的 name 是案例正文里的小标题,有的是整句话,当碎片墙标题太长。
      // 那种给它单独写个 label
      s.features?.forEach((f) => {
        if (hidden(f)) return;
        push(
          f?.image || f?.gif,
          tileTitle({ label: f?.label, alt: f?.name }, sectionTitle, language),
          getLocalizedText(f?.imageCaption, language),
          'image',
          tag
        );
      });
      // 可交互的 artifact(知识图谱那种),不是图片所以以前整个漏掉了
      if (s.embed?.src) {
        push(
          s.embed.src,
          getLocalizedText(s.embed.title, language) || sectionTitle,
          getLocalizedText(s.embed.caption, language),
          'embed',
          tag
        );
      }
      // 站内 html 的 link 也是能跑起来的 artifact(UI Kit 就只挂在 link 上)。
      // 只认「/ 开头 + .html 结尾」,外链(Live Site、GitHub)不嵌
      if (typeof s.link?.url === 'string' && /^\/.*\.html$/.test(s.link.url)) {
        push(
          s.link.url,
          getLocalizedText(s.link.label, language) || sectionTitle,
          getLocalizedText(s.briefContent, language),
          'embed',
          tag
        );
      }
    });
  }

  const live = collected.filter((x) => x.kind === 'embed');
  const stills = collected.filter((x) => x.kind !== 'embed');
  const slot = Number.isInteger(project.artifactSlot) ? project.artifactSlot : ARTIFACT_SLOT;
  const ordered = [...stills.slice(0, slot), ...live, ...stills.slice(slot)];

  // 极端情况:项目除了 hero 一张图都没有,那还是拿 hero 顶上,总比空着强
  if (!ordered.length) {
    const heroKey = project.heroImage || project.thumbnail;
    if (heroKey) return [{ src: heroKey, title: '', caption: '', kind: 'image' }];
  }

  return ordered;
};

/**
 * 同一个 artifact,嵌在格子里预览时走的地址。
 *
 * 这些页面都比一屏长得多,格子里只露得出顶部,看着像张静态截图,
 * 没人猜得到下面还有二十多屏 —— 加个开关让预览自己慢慢往下走,把「还有」演出来。
 *
 * 参数只加在 iframe 上,点格子和案例里那个按钮跳的仍是干净地址:
 * 人真要读的时候,页面不该自己动。
 */
export const embedPreviewSrc = (src) => {
  if (typeof src !== 'string' || !src) return src;
  const [path, hash] = src.split('#');
  return `${path}${path.includes('?') ? '&' : '?'}autoscroll=1${hash ? `#${hash}` : ''}`;
};

export const countProjectPages = (project, language) =>
  Math.max(1, Math.ceil(collectProjectSlides(project, language).length / TILES_PER_PAGE));

export default collectProjectSlides;
