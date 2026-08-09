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
 */
const ARTIFACT_SLOT = 4;

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
    const push = (src, title, caption, kind = 'image') => {
      if (!src || seen.has(src)) return;
      seen.add(src);
      collected.push({ src, title: title || '', caption: caption || '', kind });
    };

    // hero 只登记去重、不占格:折叠态整幅就是它,碎开后再放一遍是重复,白占一格。
    // (折叠态的切片单独走 heroImage,和这里各走各的,不受影响)
    const heroKey = project.heroImage || project.thumbnail;
    if (heroKey) seen.add(heroKey);

    push(
      project.overview?.mainImage?.src,
      getLocalizedText(project.overview?.mainTitle, language),
      getLocalizedText(project.overview?.mainImage?.caption, language)
    );

    project.sections?.forEach((s) => {
      const sectionTitle = getLocalizedText(s.mainTitle || s.title, language);
      s.images?.forEach((img) =>
        push(img?.src, sectionTitle, getLocalizedText(img?.caption, language))
      );
      s.imageGroups?.forEach((g) =>
        g.images?.forEach((img) =>
          push(
            img?.src,
            getLocalizedText(g.title, language) || sectionTitle,
            getLocalizedText(img?.caption, language)
          )
        )
      );
      // features 的图以前不进首页画廊,案例里最好看的成品图全被漏掉了
      s.features?.forEach((f) =>
        push(
          f?.image || f?.gif,
          getLocalizedText(f?.name, language) || sectionTitle,
          getLocalizedText(f?.imageCaption, language)
        )
      );
      // 可交互的 artifact(知识图谱那种),不是图片所以以前整个漏掉了
      if (s.embed?.src) {
        push(
          s.embed.src,
          getLocalizedText(s.embed.title, language) || sectionTitle,
          getLocalizedText(s.embed.caption, language),
          'embed'
        );
      }
      // 站内 html 的 link 也是能跑起来的 artifact(UI Kit 就只挂在 link 上)。
      // 只认「/ 开头 + .html 结尾」,外链(Live Site、GitHub)不嵌
      if (typeof s.link?.url === 'string' && /^\/.*\.html$/.test(s.link.url)) {
        push(
          s.link.url,
          getLocalizedText(s.link.label, language) || sectionTitle,
          getLocalizedText(s.briefContent, language),
          'embed'
        );
      }
    });
  }

  const live = collected.filter((x) => x.kind === 'embed');
  const stills = collected.filter((x) => x.kind !== 'embed');
  const ordered = [...stills.slice(0, ARTIFACT_SLOT), ...live, ...stills.slice(ARTIFACT_SLOT)];

  // 极端情况:项目除了 hero 一张图都没有,那还是拿 hero 顶上,总比空着强
  if (!ordered.length) {
    const heroKey = project.heroImage || project.thumbnail;
    if (heroKey) return [{ src: heroKey, title: '', caption: '', kind: 'image' }];
  }

  return ordered;
};

export const countProjectPages = (project, language) =>
  Math.max(1, Math.ceil(collectProjectSlides(project, language).length / TILES_PER_PAGE));

export default collectProjectSlides;
