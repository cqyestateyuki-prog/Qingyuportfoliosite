/**
 * Language Context
 * 
 * 国际化语言上下文管理
 * - 提供语言切换功能
 * - 持久化语言偏好到 localStorage
 * - 支持嵌套翻译键（如 'nav.home'）
 */

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import en from './locales/en';
import zh from './locales/zh';

// 支持的语言
const LANGUAGES = {
  en: { name: 'English', shortName: 'EN', translations: en },
  zh: { name: '中文', shortName: '中', translations: zh },
};

// localStorage key
const STORAGE_KEY = 'portfolio-language';

// 默认语言
const DEFAULT_LANGUAGE = 'en';

// 创建 Context
const LanguageContext = createContext(null);

/**
 * 语言 Provider 组件
 */
export const LanguageProvider = ({ children }) => {
  // 从 localStorage 读取语言偏好，默认英文
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && LANGUAGES[saved]) {
        return saved;
      }
      // 检测浏览器语言
      const browserLang = navigator.language.split('-')[0];
      return LANGUAGES[browserLang] ? browserLang : DEFAULT_LANGUAGE;
    }
    return DEFAULT_LANGUAGE;
  });

  // 当前语言的翻译对象
  const translations = useMemo(() => LANGUAGES[language].translations, [language]);

  // 切换语言
  const setLanguage = useCallback((lang) => {
    if (LANGUAGES[lang]) {
      setLanguageState(lang);
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }, []);

  // 切换到下一个语言（用于简单的切换按钮）
  const toggleLanguage = useCallback(() => {
    const langs = Object.keys(LANGUAGES);
    const currentIndex = langs.indexOf(language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  }, [language, setLanguage]);

  /**
   * 获取翻译文本
   * @param {string} key - 翻译键，支持点号分隔（如 'nav.home'）
   * @param {Object} params - 可选的插值参数
   * @returns {string} 翻译后的文本
   */
  const t = useCallback((key, params = {}) => {
    // 支持嵌套键
    const keys = key.split('.');
    let result = translations;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // 如果找不到翻译，返回键名
        console.warn(`Translation not found: ${key}`);
        return key;
      }
    }

    // 处理插值参数
    if (typeof result === 'string' && Object.keys(params).length > 0) {
      return result.replace(/\{\{(\w+)\}\}/g, (_, paramKey) => params[paramKey] || '');
    }

    return result;
  }, [translations]);

  // Context 值
  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage,
    t,
    languages: LANGUAGES,
    currentLanguage: LANGUAGES[language],
  }), [language, setLanguage, toggleLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * 使用语言上下文的 Hook
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
