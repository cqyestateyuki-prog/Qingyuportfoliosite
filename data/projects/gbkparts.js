// gbkparts
export const gbkparts = {
  id: 'gbkparts',
  year: '2026',
  featured: false, // Passion Projects
  order: 2, // Passion Projects 里的位次

  // externalUrl:卡片直接开外站,不进站内详情页。
  // 这类是线上跑着的商业站,本身就是成品,没必要再编一套案例叙事
  externalUrl: 'https://gbkparts.com/',

  // 首页卡片 hover 时播这段录屏(静音循环),移开就卸载
  hoverVideo: '/media/projects/gbkparts/landing-flow.mp4',

  title: { en: 'GBK Parts', zh: 'GBK Parts' },
  subtitle: {
    en: 'B2B Wholesale & Ecommerce',
    zh: 'B2B 批发与电商',
  },
  categories: ['Web Design', 'E-commerce'],
  tags: ['E-commerce', 'Web Design', 'SEO'],
  techTags: ['#WordPress', '#WooCommerce', '#SEO'],

  thumbnail: '/media/projects/gbkparts/hero.png',
  heroImage: '/media/projects/gbkparts/hero.png',
  heroVideo: null,

  brief: {
    en: 'A wholesale storefront for heavy-duty truck parts, built around how fleet buyers actually search: by SKU, by part number, by cross reference.',
    zh: '重卡配件的批发商城，围绕车队采购真实的找货方式来搭：按 SKU、按件号、按交叉参考号。',
  },

  domain: [
    { en: 'E-commerce', zh: '电商' },
    { en: 'B2B Wholesale', zh: 'B2B 批发' },
  ],
  form: [
    { en: 'Web Design', zh: '网页设计' },
    { en: 'SEO', zh: 'SEO' },
  ],
  collaborators: [],

  colors: {
    heroGradient: 'linear-gradient(135deg, #1b1f16 0%, #7cb342 100%)',
    subtitleGradient: 'linear-gradient(135deg, #4a6b28 0%, #7cb342 100%)',
    underlineGradient: 'linear-gradient(135deg, #4a6b28 0%, #7cb342 100%)',
    textHighlightColor: '#7cb342',
    darkColor: '#3f5c22',
    lightColor: '#7cb342',
  },

  sections: [],
};
