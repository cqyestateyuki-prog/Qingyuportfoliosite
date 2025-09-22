import { useEffect } from 'react';

// Google Analytics 4 配置
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // 替换为你的 GA4 测量 ID

// 初始化 Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    // 加载 Google Analytics 脚本
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // 初始化 gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// 跟踪页面浏览
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// 跟踪项目点击
export const trackProjectClick = (projectId, projectTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_click', {
      project_id: projectId,
      project_title: projectTitle,
      event_category: 'engagement',
      event_label: 'Portfolio Project',
    });
  }
};

// 跟踪按钮点击
export const trackButtonClick = (buttonText, location) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      button_text: buttonText,
      location: location,
      event_category: 'engagement',
      event_label: 'CTA Button',
    });
  }
};

// 跟踪下载
export const trackDownload = (fileName, fileType) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      file_name: fileName,
      file_type: fileType,
      event_category: 'engagement',
      event_label: 'File Download',
    });
  }
};

// 跟踪外部链接点击
export const trackExternalLink = (url, linkText) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: linkText,
      value: url,
    });
  }
};

// 跟踪联系表单提交
export const trackFormSubmit = (formName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      form_name: formName,
      event_category: 'engagement',
      event_label: 'Contact Form',
    });
  }
};

// 跟踪滚动深度
export const trackScrollDepth = (depth) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${depth}%`,
      value: depth,
    });
  }
};

// 跟踪停留时间
export const trackTimeOnPage = (timeInSeconds) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: 'time_on_page',
      value: timeInSeconds,
    });
  }
};

export default {
  initGA,
  trackPageView,
  trackProjectClick,
  trackButtonClick,
  trackDownload,
  trackExternalLink,
  trackFormSubmit,
  trackScrollDepth,
  trackTimeOnPage,
};