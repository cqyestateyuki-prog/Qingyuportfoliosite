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
      items: [
        // 同期并行的两段经历放在一个数组里,时间线上左右并排
        [
        {
          date: 'Feb 2026 — Now',
          title: 'Design Engineer & Product Designer',
          company: 'Kogna.io · Remote',
          description: 'Led end-to-end product design for Kogna Insights, turning fragmented data from Tableau, Jira and shared files into Smart Tiles that executives can act on. Built the responsive web and mobile experience inside the production codebase, keeping the design system and the shipped product in sync.',
        },
        {
          date: 'Feb 2026 — Now',
          title: 'Digital Media Designer, E-commerce & Marketing',
          company: 'GBK Parts · New York',
          description: 'Led the digital transformation of a traditional B2B wholesaler, building its first brand store, website and product catalog across wholesale and retail channels. Own the brand visual system spanning Amazon assets, product video, packaging, trade show collateral and email, with AI-assisted workflows doubling production output.',
        },
        ],
        {
          date: '2025 — 2026',
          title: 'E-commerce Operation Specialist',
          company: 'Forestar Technology · New York',
          description: 'Owned the UI and visual design of TikTok Shop livestream rooms, iterating each treatment through A/B testing to lift viewer retention 15%. Listing and content optimization drove GMV up 20% and CTR up 12%.',
        },
        {
          date: '2022 — 2024',
          title: "Master's, Design and Technology",
          company: 'Parsons School of Design, The New School',
          description: 'Two years at the intersection of design and engineering, where I moved from handing off design files to building the products myself. It set how I have worked ever since.',
        },
        {
          date: '2020 — 2022',
          title: 'Product Designer',
          company: 'Alibaba Group · Remote',
          description: 'Took anime and gaming IP merchandise from concept to market with 200+ independent artists, covering collectibles, toys and lifestyle goods. Built the brand identity and marketing assets behind a 60,000+ collector community, with lines selling through at 85%.',
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
        // 同期并行的两段经历放在一个数组里,时间线上左右并排
        [
        {
          date: '2026 年 2 月 — 至今',
          title: '设计工程师 & 产品设计师',
          company: 'Kogna.io · 远程',
          description: '主导 Kogna Insights 从 0 到 1 的产品设计,将散落在 Tableau、Jira 与共享文档中的数据整合为可直接决策的 Smart Tiles 看板。在生产代码库中完成响应式 Web 与移动端实现,使设计系统与线上产品始终保持一致。',
        },
        {
          date: '2026 年 2 月 — 至今',
          title: '数字媒体设计师(电商 & 数字营销)',
          company: 'GBK Parts · 纽约',
          description: '主导传统 B2B 企业的数字化转型,从零搭建品牌官网、线上商城与产品目录,打通批发与零售双渠道。统筹亚马逊视觉、产品视频、包装、展会物料与邮件营销的整套品牌资产,引入 AI 辅助流程使制作效率提升一倍。',
        },
        ],
        {
          date: '2025 — 2026',
          title: '电商运营专员',
          company: 'Forestar Technology · 纽约',
          description: '负责 TikTok Shop 直播间的 UI 视觉设计,以 A/B 测试驱动视觉方案迭代,观众留存提升 15%;结合商品页与内容优化,带动 GMV 增长 20%、点击率提升 12%。',
        },
        {
          date: '2022 — 2024',
          title: '硕士,设计与技术',
          company: 'Parsons School of Design, The New School',
          description: '设计与技术交叉的两年,让我从交付设计稿转向亲手把产品实现出来,也定下了此后的工作方式。',
        },
        {
          date: '2020 — 2022',
          title: '产品设计师',
          company: '阿里巴巴 · 远程',
          description: '联合 200+ 独立艺术家,完成动漫与游戏 IP 衍生品从概念到上市的全链路设计,覆盖收藏品、玩具与生活方式产品;同步打造品牌视觉与营销物料,沉淀 6 万+ 用户社区,产品线售罄率达 85%。',
        },
      ],
    },
  },
};

export default aboutContent;
