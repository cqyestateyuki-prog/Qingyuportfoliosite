// wishflow — Passion Project(不占 Selected Work 的位, 但详情页按 featured 的深度做)
export const wishflow = {
  id: 'wishflow',
  year: '2026',
  featured: false,
  title: { en: 'Wishflow', zh: '愿航' },
  subtitle: { en: 'A Life-long Wish Navigator', zh: '一生级愿望导航' },
  categories: ['AI', 'Product Design', 'UIUX', 'Programming'],
  tags: ['Product Design', 'Design System', 'Generative Art', 'Bilingual'],
  techTags: ['#NextJS', '#Supabase', '#Claude', '#Capacitor'],

  thumbnail: '/media/projects/wishflow/wishes-board-en.jpg',
  brief: {
    en: 'A wish keeper for people who go quiet when tools start counting.',
    zh: '给那些一被打卡就沉默的人，做一个替他们保管愿望的地方。',
  },

  heroImage: '/media/projects/wishflow/home-en.jpg',
  heroVideo: null,
  liveUrl: 'https://wishflow-ruddy.vercel.app',

  domain: [
    { en: 'Personal Wellbeing', zh: '个人成长' },
    { en: 'Generative Art', zh: '生成艺术' },
  ],
  form: [
    { en: 'Product & Visual Design', zh: '产品与视觉设计' },
    { en: 'Full-stack Build', zh: '全栈实现' },
  ],
  collaborators: [],

  colors: {
    heroGradient: 'linear-gradient(135deg, #917fb9 0%, #cdc2e4 100%)',
    subtitleGradient: 'linear-gradient(135deg, #7c6aaa 0%, #a794d0 100%)',
    underlineGradient: 'linear-gradient(135deg, #7c6aaa 0%, #cdc2e4 100%)',
  },

  overview: {
    mainTitle: { en: 'Let wishes slowly take shape', zh: '让愿望，慢慢成形' },
    briefContent: {
      en: 'Every goal app I tried assumed the same user: someone who responds to streaks, progress bars and a red badge. [[Wishflow is built for the person that model loses]] — the one who stops opening the app the week they fall behind. So it keeps no streaks, shows no failures, and never asks you to catch up. A wish is [[a relationship, not a project]]: it does not need to be completed to have been worth having.',
      zh: '试过的目标类应用都默认同一种用户——会被连续打卡、进度条和小红点驱动的人。[[愿航是给那套模型留不住的人做的]]：一旦落下就再也不打开的人。所以它不记连续天数、不展示失败、也从不催你补回来。愿望是[[一段关系，不是一个项目]]——它不需要被完成，才算值得拥有。',
    },
    challenge: {
      en: 'How do you keep something alive across ten years without ever measuring it?',
      zh: '一样东西要陪一个人十年，却不能拿任何指标去量它——那要靠什么把它留住？',
    },
  },

  sections: [
    {
      id: 'principles',
      title: 'Design Principles',
      sectionTag: 'Design Principles',
      mainTitle: 'One question decides every screen',
      briefContent:
        'The whole design system answers to a single test: [[on your worst day, would you still dare to open this?]] If a screen could make someone feel behind, it does not ship.',
      icon: '🌙',
      content:
        "The four principles are ordered, not listed — when they conflict, the earlier one wins. Low stimulation: soft colour, no flashing contrast, no sudden motion. No pressure: no check-ins, no failure states, no comparison. Gentle company: the system carries the structure so the user only has to show up and feel. Continuously visible: a wish stays legible across decades and never expires.\n\nThat ordering is what made the hard calls easy. A streak counter would have been the single most engaging feature to add, and it is exactly what principle two forbids. The daily screen therefore counts nothing — it offers one wish worth two minutes, and treats two minutes as a complete answer.",
      imageDisplayMode: 'two-column',
      images: [
        { src: '/media/projects/wishflow/home-en.jpg', alt: 'Landing — let wishes slowly take shape' },
        { src: '/media/projects/wishflow/home-zh.jpg', alt: 'Landing, Chinese' },
      ],
    },
    {
      id: 'generative',
      title: 'AI as an Illustrator',
      sectionTag: 'Generative Art',
      mainTitle: 'The AI draws, it does not advise',
      briefContent:
        'Write a wish in one sentence and the model returns [[a hand-drawn flowing line]] — not a plan, not a breakdown, not five recommended next actions. The wish gets a face before it gets a schedule.',
      content:
        "Most AI features in this category generate advice. Advice is a form of pressure: it implies there is a correct next move you have not made yet. So the model here is pointed somewhere else entirely — it reads the sentence, classifies the life domain and mood, and produces an SVG in the product's single visual motif: one trembling line walking through time.\n\nThe practical benefit is that the artefact is small, vector, and yours. Each wish carries its own drawing, so a gallery of four wishes already feels like a personal collection rather than a list of rows.",
      images: [
        { src: '/media/projects/wishflow/try-en.jpg', alt: 'Describe a wish, AI draws it' },
      ],
    },
    {
      id: 'threeviews',
      title: 'Three Ways to Look',
      sectionTag: 'Wish Gallery',
      mainTitle: 'Same wishes, three ways to look',
      briefContent:
        'Board, Galaxy and River are [[not filters]] — they are three different relationships with the same set of wishes: what I have, where they sit in my life, and how they drift.',
      content:
        "Board is the everyday view: pinned paper, closest to a desk. Galaxy places each wish on an age ring around a core marked You — the wish is not on a deadline, it is at a distance. River lays the same wishes along a life timeline with paper cranes at the age markers, so the eye reads them as movement rather than as a backlog.\n\nSwitching views is the cheapest way to change how a wish feels without changing a single word of it. That is the whole argument of the screen.",
      imageDisplayMode: 'grid',
      images: [
        { src: '/media/projects/wishflow/wishes-board-en.jpg', alt: 'Board — pinned paper' },
        { src: '/media/projects/wishflow/wishes-galaxy-en.jpg', alt: 'Galaxy — wishes on age rings around You' },
        { src: '/media/projects/wishflow/wishes-river-en.jpg', alt: 'River — a life timeline' },
      ],
    },
    {
      id: 'shipping',
      title: 'Shipping',
      sectionTag: 'Build',
      mainTitle: 'Bilingual, local-first, and packaged as an app',
      briefContent:
        'Wishes live [[on the device first]] and only sync when you sign in — so the product works, and reads as complete, before anyone has an account.',
      content:
        "Next.js on Vercel, Supabase for auth and sync, Claude for classification and the SVG, Capacitor for the iOS and Android shells. Both languages are hand-written rather than machine-translated, down to the small differences in tone: the Chinese copy is softer and shorter, the English carries more rhythm.\n\nThe local-first choice is a design decision more than a technical one. Asking someone to create an account before they can write their first wish is exactly the kind of small pressure the product exists to avoid.",
      imageDisplayMode: 'two-column',
      images: [
        { src: '/media/projects/wishflow/daily-en.jpg', alt: 'Today — a mood, and one wish worth two minutes' },
        { src: '/media/projects/wishflow/phone-gallery-zh.jpg', alt: 'Wish gallery on phone, Chinese' },
      ],
    },
  ],
};
