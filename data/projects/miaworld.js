// miaworld
export const miaworld = {
  id: 'miaworld',
  year: '2026',
  featured: false, // Passion Projects
  order: 3, // Passion Projects 里的位次

  // 同 gbkparts:卡片直接开外站,不进站内详情页
  externalUrl: 'https://miaworldnyc.com/',

  // 首页卡片 hover 时播这段录屏(静音循环),移开就卸载
  hoverVideo: '/media/projects/miaworld/landing-flow.mp4',

  title: { en: 'Mia World NYC', zh: 'Mia World NYC' },
  subtitle: {
    en: 'Beauty Brand & Ecommerce',
    zh: '美妆品牌与电商',
  },
  categories: ['Web Design', 'E-commerce'],
  tags: ['E-commerce', 'Brand', 'Web Design'],
  techTags: ['#Shopify', '#Brand', '#Web Design'],

  thumbnail: '/media/projects/miaworld/hero.png',
  heroImage: '/media/projects/miaworld/hero.png',
  heroVideo: null,

  brief: {
    en: 'A storefront for handmade press-on nails, where the product is the whole visual: every collection shot fills the screen before a single word asks you to buy.',
    zh: '手作穿戴甲的线上店。产品本身就是整个视觉：每一组新款先铺满屏幕，一个字都还没开口让你买。',
  },

  domain: [
    { en: 'E-commerce', zh: '电商' },
    { en: 'Beauty Brand', zh: '美妆品牌' },
  ],
  form: [
    { en: 'Web Design', zh: '网页设计' },
    { en: 'Brand', zh: '品牌' },
  ],
  collaborators: [],

  colors: {
    heroGradient: 'linear-gradient(135deg, #7a5c47 0%, #e8c9b0 100%)',
    subtitleGradient: 'linear-gradient(135deg, #9c7355 0%, #d8b094 100%)',
    underlineGradient: 'linear-gradient(135deg, #9c7355 0%, #d8b094 100%)',
    textHighlightColor: '#b98a6a',
    darkColor: '#7a5c47',
    lightColor: '#d8b094',
  },

  sections: [],
};
