// vhay
// 事实出处:Vhay 路演 PPT(Vhay_AI & Fintech XRPL NYC Hackathon_10.25.26)、她在团队仓库的三个提交
// (252e2c1 筛选和卖家信息、92a9948 颜色对比度和玻璃外壳、23dd848 侧栏玻璃四选一),
// 以及 ~/Desktop/Vhay-portfolio-2026-10-25 的前后对比截图(同一 dev server、同一窗口 1314x924)。
// 她的分工只写 Marketplace 功能优化和整个产品的 UI redesign;agent 流程、路演和视频不是她做的。
// 首图是她 2026-10-25 定的 cover-a3(源文件在作品集素材文件夹,大图存档在 ~/Desktop/作品集项目列表/Vhay/首图素材/)。
export const vhay = {
    id: 'vhay',
    year: '2026',
    featured: false, order: 0.5, // More Projects 第二张,排在 Side Pocket(0)和 Spark Up(1)之间
    title: 'Vhay',
    subtitle: 'Marketplace and UI Redesign for an On-chain B2B Marketplace',
    categories: ['Product Design', 'UIUX', 'Design System'],
    tags: ['Product Design', 'UI Redesign', 'Design System', 'Fintech', 'Web3'],
    techTags: ['#Claude Code', '#React', '#TypeScript', '#XRP Ledger'],

    thumbnail: '/media/projects/vhay/vhay-hero-16x10.png', // More Projects 卡片是 16:10;详情页用 16:9
    brief: 'Vhay helps companies buy and sell goods in one app, in place of paper RFQs, purchase orders, bank wires, escrow agents and financing applications. Each order is minted on the XRP Ledger, and payment sits in escrow until the agreed conditions are met. [[The order becomes an asset]] that can be verified and financed.',
    heroImage: '/media/projects/vhay/vhay-hero.png',
    heroVideo: null,

    // domain[0] 是首页卡片上的标签
    domain: [
      { en: 'Fintech', zh: '金融科技' },
      { en: 'B2B Marketplace', zh: 'B2B 交易平台' },
      { en: 'XRP Ledger', zh: 'XRP Ledger 区块链' }
    ],
    form: [
      { en: 'Product Design', zh: '产品设计' },
      { en: 'UI Redesign', zh: '界面改版' },
      { en: 'Design Engineering', zh: '设计工程' }
    ],
    collaborators: [],
    meta: {
      role: 'Product Designer · Marketplace & UI redesign',
      duration: 'Oct 2026 · AI & Fintech XRP Ledger Hackathon',
      team: 'Founder William Murphy and the Vhay team',
      stack: 'Claude Code · React · TypeScript · XRP Ledger',
    },

    // 只用 Vhay 自己的 token:深金 #8a580f(焦点环和选中字色)、香槟金按钮 #fff0c8 → #efc068、品牌金 #f3b744、墨色 #1d1608
    colors: {
      heroGradient: 'linear-gradient(135deg, #8a580f 0%, #efc068 55%, #fff0c8 100%)',
      subtitleGradient: 'linear-gradient(135deg, #8a580f 0%, #efc068 100%)',
      underlineGradient: 'linear-gradient(135deg, #8a580f 0%, #efc068 100%)',
      textHighlightColor: '#8a580f',
      darkColor: '#1d1608',
      lightColor: '#f3b744'
    },

    // 团队仓库是私有的,所以只放线上站
    overview: {
      buttons: [
        { label: 'Live Site', url: 'https://vhay.app', type: 'primary' }
      ]
    },

    sections: [
      {
        id: 'the-problem',
        title: 'The Problem',
        sectionTag: 'The Problem',
        mainTitle: 'A Live Product That Shopped Like a Spreadsheet',
        briefContent: 'Vhay had been live on XRPL mainnet since July when I joined its team at the hackathon. The ledger side worked. The marketplace was one table with a single category dropdown and a Create PO button on every row, and each seller showed little more than a name. [[A buyer could not narrow the list or see who they were buying from.]]',
        challenge: 'How might we make an on-chain marketplace as easy to shop as any catalogue, and show who stands behind each product?',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          { src: '/media/projects/vhay/sections/before-01-marketplace.jpg', alt: 'Vhay marketplace before the redesign', caption: 'Before: one dropdown, and a Create PO button on every row.' }
        ]
      },

      {
        id: 'marketplace',
        title: 'Marketplace',
        sectionTag: 'Marketplace',
        mainTitle: 'Filtering by What Buyers Ask First',
        briefContent: 'I rebuilt the catalogue around what a purchasing manager asks first. Category, country, price, stock, brand, product family and unit became dropdown filters, with removable chips and a sort. The detail panel gained an About the seller block, read from the seller\'s public listing.\n\nLive stock, minimum order and lead time stayed out. The storefronts do not carry them yet, so [[the stock column shows a dash instead of a guess]]. I wrote them up as 14 optional seller fields for a later release.',
        icon: '🔎',
        tabsTitle: 'Marketplace, before and after',
        tabs: [
          { label: 'Before', image: '/media/projects/vhay/sections/before-01-marketplace.jpg', alt: 'Marketplace before: one category dropdown and a Create PO button per row' },
          { label: 'After', image: '/media/projects/vhay/sections/after-01-marketplace.jpg', alt: 'Marketplace after: dropdown filters, seller and country per row, Get Quote as the main action' }
        ]
      },

      {
        id: 'ui-redesign',
        title: 'UI Redesign',
        sectionTag: 'UI Redesign',
        mainTitle: 'The Team Wanted Glass. The Tables Had to Stay Readable.',
        icon: '🎨',
        showcases: [
          {
            title: 'Surface · Glass on the shell, solid where you read',
            text: 'The team wanted Apple-style frosted glass. Glass behind a dense table makes it hard to read, so the glass went on the top bar, the sidebar, toggles and sheets. Content cards stayed plain white. I could not settle the sidebar from a mockup, so I put four versions into the running app and picked one there.',
            tabs: [
              { label: 'Before', image: '/media/projects/vhay/sections/before-02-action-queue.jpg', alt: 'Action queue before the redesign' },
              { label: 'After', image: '/media/projects/vhay/sections/after-02-action-queue.jpg', alt: 'Action queue after: frosted top bar, sand glass sidebar, solid content cards' }
            ]
          },
          {
            title: 'Navigation · Buy / Sell moved next to the workspace',
            text: 'The Buy / Sell switch sat in the top bar, far from the sidebar it changes. It now lives in the sidebar header beside Purchasing or Sales & Stock. A segmented toggle and a role card were tried and dropped; the card nested one box too many.',
            tabs: [
              { label: 'Before', image: '/media/projects/vhay/sections/before-03-inventory-stock.jpg', alt: 'Seller inventory before, with Buy / Sell in the top bar' },
              { label: 'After', image: '/media/projects/vhay/sections/after-03-inventory-stock.jpg', alt: 'Seller inventory after, with the switch in the sidebar header' }
            ]
          },
          {
            title: 'Contrast · 50 line colours became 7 tokens',
            text: 'Muted text measured 3.9:1 on the page background, below AA. I lifted it to 5.6:1, made the status colours safe for colour-blind users and set an 11px floor. Line colours went from 50 values to 7 tokens the team can change in one place.',
            tabs: [
              { label: 'Before', image: '/media/projects/vhay/sections/before-04-profile.jpg', alt: 'Profile before the contrast pass' },
              { label: 'After', image: '/media/projects/vhay/sections/after-04-profile.jpg', alt: 'Profile after the contrast pass' },
              { label: 'New item', image: '/media/projects/vhay/sections/after-05-inventory-intake.jpg', alt: 'New item form in the redesigned style' }
            ]
          }
        ]
      },

      {
        id: 'outcome',
        title: 'Outcome',
        sectionTag: 'Outcome',
        mainTitle: 'Two Days, One Pull Request',
        briefContent: 'Built at the AI & Fintech XRP Ledger Hackathon in New York, Agentic Finance track, and opened as a pull request on the Vhay team repo.',
        icon: '🚀',
        stats: [
          { value: '50 → 7', label: 'line colours, now design tokens.' },
          { value: '5.6:1', label: 'muted text contrast, up from 3.9:1.' },
          { value: '11', label: 'automated checks on the filter module.' },
          { value: '4', label: 'sidebar versions compared in the live app.' }
        ]
      },

      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: 'Reflection',
        mainTitle: 'What I Learned',
        icon: '💭',
        columns: [
          { label: 'What I learned', text: 'Designing inside the running product made each call faster, and the real data told me which fields to leave out.' },
          { label: 'If I had more time', text: 'Ship the 14 optional seller fields, so live stock, minimum order and lead time can show real numbers.' }
        ]
      }
    ]
  };
