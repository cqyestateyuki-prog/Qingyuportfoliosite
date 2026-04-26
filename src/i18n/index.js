/**
 * i18n Module Entry
 * 
 * 国际化模块入口
 * 导出所有 i18n 相关的组件和 hooks
 */

export { LanguageProvider, useLanguage } from './LanguageContext';
export { default as en } from './locales/en';
export { default as zh } from './locales/zh';
