/**
 * Localization Utilities
 * 
 * 项目数据本地化工具函数
 * 支持 projects.js 中的双语文本结构
 */

/**
 * 获取本地化文本
 * 支持两种格式：
 * 1. 字符串：直接返回
 * 2. 对象 { en: '...', zh: '...' }：根据语言返回对应文本
 * 
 * @param {string|Object} text - 文本或双语对象
 * @param {string} language - 当前语言 ('en' | 'zh')
 * @returns {string} 本地化后的文本
 */
export const getLocalizedText = (text, language = 'en') => {
  if (!text) return '';
  
  // 如果是字符串，直接返回
  if (typeof text === 'string') return text;
  
  // 如果是双语对象，返回对应语言的文本
  if (typeof text === 'object' && (text.en || text.zh)) {
    return text[language] || text.en || text.zh || '';
  }
  
  return String(text);
};

/**
 * 获取本地化数组
 * 用于 categories, tags, domain 等数组字段
 * 
 * @param {Array} arr - 数组，元素可以是字符串或双语对象
 * @param {string} language - 当前语言
 * @returns {Array<string>} 本地化后的数组
 */
export const getLocalizedArray = (arr, language = 'en') => {
  if (!Array.isArray(arr)) return [];
  return arr.map(item => getLocalizedText(item, language));
};

/**
 * 本地化整个项目对象的关键字段
 * 
 * @param {Object} project - 项目对象
 * @param {string} language - 当前语言
 * @returns {Object} 本地化后的项目对象（浅拷贝）
 */
export const localizeProject = (project, language = 'en') => {
  if (!project) return null;
  
  return {
    ...project,
    title: getLocalizedText(project.title, language),
    subtitle: getLocalizedText(project.subtitle, language),
    brief: getLocalizedText(project.brief, language),
    domain: getLocalizedArray(project.domain, language),
    form: getLocalizedArray(project.form, language),
    // overview 对象的本地化
    overview: project.overview ? {
      ...project.overview,
      mainTitle: getLocalizedText(project.overview.mainTitle, language),
      briefContent: getLocalizedText(project.overview.briefContent, language),
      content: getLocalizedText(project.overview.content, language),
      challenge: getLocalizedText(project.overview.challenge, language),
      challenges: getLocalizedArray(project.overview.challenges, language),
      buttons: project.overview.buttons?.map(btn => ({
        ...btn,
        text: getLocalizedText(btn.text, language),
      })),
    } : undefined,
    // role 的本地化
    role: project.role ? {
      ...project.role,
      title: getLocalizedText(project.role.title, language),
      responsibilities: getLocalizedArray(project.role.responsibilities, language),
    } : undefined,
    // sections 数组的本地化
    sections: project.sections?.map(section => ({
      ...section,
      title: getLocalizedText(section.title, language),
      sectionTag: getLocalizedText(section.sectionTag, language),
      mainTitle: getLocalizedText(section.mainTitle, language),
      briefContent: getLocalizedText(section.briefContent, language),
      content: section.content ? getLocalizedArray(section.content, language) : undefined,
      // features 的本地化
      features: section.features?.map(feature => ({
        ...feature,
        name: getLocalizedText(feature.name, language),
        description: getLocalizedText(feature.description, language),
        detail: getLocalizedText(feature.detail, language),
      })),
      // images 的本地化
      images: section.images?.map(img => ({
        ...img,
        alt: getLocalizedText(img.alt, language),
        caption: getLocalizedText(img.caption, language),
      })),
      // imageGroups 的本地化
      imageGroups: section.imageGroups?.map(group => ({
        ...group,
        title: getLocalizedText(group.title, language),
        description: getLocalizedText(group.description, language),
        images: group.images?.map(img => ({
          ...img,
          alt: getLocalizedText(img.alt, language),
          caption: getLocalizedText(img.caption, language),
        })),
      })),
    })),
  };
};

/**
 * React Hook: 使用本地化项目数据
 * 配合 useLanguage hook 使用
 */
export const useLocalizedProject = (project, language) => {
  return localizeProject(project, language);
};

export default {
  getLocalizedText,
  getLocalizedArray,
  localizeProject,
  useLocalizedProject,
};
