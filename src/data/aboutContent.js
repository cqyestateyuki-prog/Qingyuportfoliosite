/**
 * About 页全部文案 — Figma 同步的唯一数据源
 *
 * 修改方式二选一:
 * 1. 直接改这个文件
 * 2. 在 Figma 的 About 设计稿里改文字图层(图层名 = 这里的键名),
 *    然后对 Claude 说"同步 Figma About",会自动读回更新此文件
 */

export const aboutContent = {
  en: {
    tag: '03 · About',
    hero: {
      intro: 'I am a',
      role: 'Designer',
      who: 'who',
      verbs: 'builds, tests, and ships.',
      lines: [
        'I design intuitive UX and solve complex problems.',
        'I bridge the gap between design and engineering.',
        'I focus on launching real products in fast-moving environments.',
      ],
      resumeLabel: 'Resume',
    },
    meta: [
      { label: 'Role', value: 'Product & UIUX Designer' },
      { label: 'Location', value: 'New York, NY' },
      { label: 'Focus', value: 'AI Products · UX Engineering' },
      { label: 'Status', value: 'Open to Work' },
    ],
    what: {
      titleAccent: 'What',
      titleRest: 'I Do',
      items: [
        {
          icon: 'design',
          title: 'Product Design',
          text: 'I craft intuitive interfaces and engaging user journeys. From initial sketches to high-fidelity prototypes in Figma, I focus on clean aesthetics and usability.',
        },
        {
          icon: 'market',
          title: 'Market Strategy',
          text: 'I connect design with business growth. Through market analysis and data-driven insights, I create strategies that position products effectively and maximize user engagement.',
        },
        {
          icon: 'iteration',
          title: 'Fast Iteration',
          text: 'I move fast. By combining design intuition with modern developer tools, I experiment quickly and launch polished products in less time.',
        },
      ],
    },
    how: {
      titleAccent: 'How',
      titleRest: 'I Work',
      subtitle: 'I combine strong analytical capabilities with human judgment:',
      cards: [
        { label: 'Contextual understanding', text: 'I process complex, ambiguous information quickly.' },
        { label: 'Judgment over optimization', text: "I know what's worth doing, not just what's possible." },
        { label: 'User intuition', text: 'I understand what people need beyond what they say.' },
        { label: 'Taste', text: 'I recognize quality and can distinguish "technically correct" from "actually good."' },
        { label: 'Adaptive execution', text: 'I adjust direction mid-work based on what I learn.' },
      ],
      quote: "I don't just solve problems — I figure out which problems are worth solving.",
    },
    experience: {
      titleAccent: 'Where',
      titleRest: "I've Been",
      // TODO(青雨):占位经历,请替换为真实内容
      items: [
        {
          date: '2025 — Now',
          title: 'Product Designer',
          company: '[替换:公司/项目名]',
          description: '[占位] Replace with your real experience — what you owned, shipped, and the impact.',
        },
        {
          date: '2023 — 2025',
          title: 'UIUX Designer',
          company: '[替换:公司/学校名]',
          description: '[占位] Replace with your real experience.',
        },
        {
          date: '2021 — 2023',
          title: 'Creative Developer',
          company: '[替换:公司/学校名]',
          description: '[占位] Replace with your real experience.',
        },
      ],
    },
  },

  zh: {
    tag: '03 · 关于我',
    hero: {
      intro: '我是一名',
      role: '设计师',
      who: '一个',
      verbs: '构建、测试并交付产品的人。',
      lines: [
        '我设计直觉的用户体验,解决复杂问题。',
        '我打通设计与工程之间的间隙。',
        '我专注于在快节奏环境中推出真正的产品。',
      ],
      resumeLabel: '简历',
    },
    meta: [
      { label: '角色', value: '产品 & UIUX 设计师' },
      { label: '坐标', value: '纽约' },
      { label: '专注', value: 'AI 产品 · UX 工程' },
      { label: '状态', value: '正在求职' },
    ],
    what: {
      titleAccent: '我做',
      titleRest: '什么',
      items: [
        {
          icon: 'design',
          title: '产品设计',
          text: '打磨直觉的界面与吸引人的用户旅程。从草图到 Figma 高保真原型,专注简洁美学与可用性。',
        },
        {
          icon: 'market',
          title: '市场策略',
          text: '把设计与业务增长连接起来。通过市场分析与数据洞察,制定有效的产品定位策略,最大化用户参与。',
        },
        {
          icon: 'iteration',
          title: '快速迭代',
          text: '我行动很快。把设计直觉与现代开发工具结合,快速实验,用更短时间发布打磨完善的产品。',
        },
      ],
    },
    how: {
      titleAccent: '我如何',
      titleRest: '工作',
      subtitle: '我把强分析能力与人的判断力结合:',
      cards: [
        { label: '语境理解', text: '快速消化复杂、模糊的信息。' },
        { label: '判断优先于优化', text: '知道什么值得做,而不只是什么能做。' },
        { label: '用户直觉', text: '理解人们言语之外的真实需要。' },
        { label: '品味', text: '能分辨"技术上正确"与"真正好"的区别。' },
        { label: '自适应执行', text: '依据过程中学到的东西,随时调整方向。' },
      ],
      quote: '我不只是解决问题——我先想清楚哪些问题值得解决。',
    },
    experience: {
      titleAccent: '我的',
      titleRest: '经历',
      items: [
        {
          date: '2025 — 至今',
          title: '产品设计师',
          company: '[替换:公司/项目名]',
          description: '[占位] 请替换为真实经历——负责什么、交付什么、产生了什么影响。',
        },
        {
          date: '2023 — 2025',
          title: 'UIUX 设计师',
          company: '[替换:公司/学校名]',
          description: '[占位] 请替换为真实经历。',
        },
        {
          date: '2021 — 2023',
          title: '创意开发者',
          company: '[替换:公司/学校名]',
          description: '[占位] 请替换为真实经历。',
        },
      ],
    },
  },
};

export default aboutContent;
