// hexaedge
export const hexaedge = {
    id: 'hexaedge',
    year: '2026',
    featured: true, order: 3,
    title: 'HexaEdge',
    subtitle: {
      en: 'Ancient Logic, Modern Signals',
      zh: '古法新用 · 六爻金融信号'
    },
    categories: ['AI', 'Product Design', 'UIUX', 'Programming'],
    tags: ['Product Design', 'Design Engineering', 'AI/LLM', 'Decision-support UX', 'Neo-Chinese Aesthetic', 'SaaS'],
    techTags: ['#Next.js 16', '#React 19', '#TypeScript', '#FastAPI', '#Claude Code', '#Figma', '#LLM API'],

    thumbnail: '/media/projects/hexaedge/sections/s01-cover.png',
    brief: {
      en: 'HexaEdge re-engineers Liuyao, a decision framework that was [[binary long before Leibniz]], into a deterministic engine. The 64 hexagrams and their tangle of variables become [[standardized signals]] on a calendar timeline, turning a 3,000-year-old method into a decision-support tool for reading a market or a personal call.',
      zh: 'HexaEdge 把六爻重建为一台确定性推理引擎。这套决策框架[[比莱布尼茨更早用上二进制]]。64 卦及其纠缠的变量被解构成[[标准化信号]]，落在日历时间线上，让这套三千年的古法成为读一笔行情或一个人生决断的决策辅助工具。'
    },
    heroImage: '/media/projects/hexaedge/sections/s01-cover.png',
    heroVideo: null,

    domain: [
      { en: 'Symbolic AI × LLM', zh: '符号智能 × 大模型' },
      { en: 'Decision-support UX', zh: '决策辅助 UX' },
      { en: 'Cultural Tech · B2C SaaS', zh: '文化科技 · B2C SaaS' }
    ],
    form: [
      { en: 'Product Design', zh: '产品设计' },
      { en: 'Design Engineering', zh: '设计工程' },
      { en: 'AI Integration', zh: 'AI 集成' },
      { en: 'Visual System', zh: '视觉体系' }
    ],
    collaborators: [],
    meta: {
      duration: '2026 – Present',
      team: 'Solo',
      role: 'Product Designer & Design Engineer',
      stack: 'Figma · Claude Code · Next.js 16 · React 19 · TypeScript · FastAPI · RAG + LLM',
    },

    colors: {
      heroGradient: 'linear-gradient(135deg, #14233A 0%, #243E66 50%, #9C7A3A 100%)',
      subtitleGradient: 'linear-gradient(135deg, #243E66 0%, #9C7A3A 100%)',
      underlineGradient: 'linear-gradient(135deg, #9C7A3A 0%, #A8392E 100%)',
      textHighlightColor: '#243E66',
      darkColor: '#14233A',
      lightColor: '#9C7A3A'
    },

    overview: {
      // 正文与 challenge 已移走:TL;DR 在 hero 说清"是什么",challenge 移到 The Problem 做开场。
      // 这里只保留产品大图下的入口按钮和 Why I'm building this。
      buttons: [
        { label: 'Live Site', url: 'https://hexaedge.vercel.app', type: 'primary' },
        { label: 'GitHub', url: 'https://github.com/cqyestateyuki-prog/LiuyaoSaaSProject', type: 'secondary' }
      ],
      // Why I'm building this(hero meta 之下)+ 六爻线条母题(新中式鎏金)
      whyIBuild: 'HexaEdge began with a simple premise: three coins, an honest question, and a 3,000-year-old decision logic. Our goal is to scale this ancient framework for a global audience, treating it as an [[objective logic system]] rather than an occult superstition. HexaEdge serves as a tool for [[cognitive friction]] that lets you unpack a complex market or a personal decision from [[multiple dimensions]], instead of rushing toward a single, forced answer.',
      whyIBuildHexagram: [1, 0, 1, 1, 0, 1], // 1=阳(整) 0=阴(断),自下而上
      whyIBuildHexagramColor: '#F2F6F7', // 六爻线条颜色(近白,压在深色 hero 上)
      whyIBuildHexagramLabel: '古法新用'
    },

    sections: [
      {
        id: 'the-provocation',
        title: 'The Problem',
        sectionTag: 'The Problem',
        mainTitle: 'Legacy Usability Crisis',
        briefContent: 'Look up Liuyao today and you land on a web page that has not been touched since the 2000s: dense tables, unexplained jargon, a layout that fights you. [[The interface is what makes a rigorous logic system read as superstition]]. HexaEdge removes that [[visual friction]] so the logic underneath can be seen.',
        challenge: 'How might we carry a rigorous 3,000-year-old framework into a modern financial product without losing its logic, and without it reading as superstition to a generation that has only ever seen the ritual?',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s02-provocation.png',
            alt: 'Outdated Liuyao tools versus the HexaEdge redesign',
            caption: 'Left: the category today, a mess of dated layouts and jargon. Right: HexaEdge, method over magic.'
          }
        ]
      },

      {
        id: 'market-opportunity',
        title: 'Market & Opportunity',
        sectionTag: 'Market & Opportunity',
        mainTitle: 'The Intersection of Two Appetites',
        briefContent: 'HexaEdge captures a rare psychological convergence in today\'s young demographic: [[the deep emotional need for clarity]] and [[the high-stakes thrill of financial trading]]. While users turn to traditional tools for mindfulness, they navigate modern markets with aggressive speculation.\n\nUnderneath both appetites sits [[a market worth hundreds of billions]], and no one is [[building it with taste]]. We bridge that gap through design.',
        icon: '📈',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s05-market-appetites.png',
            alt: 'Divination revival meets speculation appetite',
            caption: 'Two appetites rising together: the seeker\'s need for narrative and the speculator\'s appetite for probability.'
          },
          {
            src: '/media/projects/hexaedge/sections/s06-market-tam.png',
            alt: 'Market sizing: spiritual, astrology, and Chinese-astrology TAM',
            caption: 'A global market, fatally underserved. The Chinese-astrology vertical alone is scaling at 43.7% CAGR.'
          }
        ]
      },

      {
        id: 'highlights',
        title: 'Project Highlights',
        sectionTag: 'Project Highlights',
        mainTitle: 'A Generational Leap in UI/UX',
        icon: '✨',
        imageDisplayMode: 'alternating',
        content: [
          'AI divination apps have never had an interface worth looking at. [[HexaEdge is the first time Liuyao gets used to read a market as well as a fortune.]]',
          'Their visual language is generic chat boxes and cliché mysticism. I dropped both. Readings render as visual signals rather than paragraphs: the hexagram as a board you can actually read, moving lines laid on a calendar timeline, momentum as a chart. [[The design is what makes an ancient method feel like a tool instead of magic.]]'
        ],
        images: [
          {
            src: '/media/projects/hexaedge/sections/s03-highlights.png',
            alt: 'Six core HexaEdge product screens',
            caption: 'Six core surfaces from the shipped product, unified by one design system.'
          },
          {
            src: '/media/projects/hexaedge/sections/s04-competitive.png',
            alt: 'Competitive landscape of AI fortune and divination products',
            caption: 'The field everyone else crowds: cliché mysticism and generic chat boxes. Nobody serves Liuyao × equity trading with premium design.'
          }
        ]
      },

      {
        id: 'design-philosophy',
        title: 'Design System',
        sectionTag: 'Design System & Philosophy',
        mainTitle: 'Materializing Warmth, Coding Meaning',
        briefContent: 'Traditional SaaS feels cold and impersonal, with no temperature to it. HexaEdge draws its palette from jade and blue-and-white porcelain instead, classical Eastern colors that feel elegant and smooth to the touch, and that carry [[an energy meant to support you]].\n\nJade canvases, celadon depths, and ink-black typography build the foundation, but their true purpose is semantic. Rooted in the Five Elements, cinnabar reads as bullish momentum, while celadon maps bearish shifts. By aligning cultural intuition with financial logic, cognitive load vanishes: [[the color you feel is the exact signal you read.]]',
        icon: '🎨',
        link: {
          label: 'View the UI Kit',
          url: '/hexaedge-ui-kit/index.html',
        },
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s07-palette.png',
            alt: 'The tactile minerals palette: jade, celadon, porcelain blue, ink',
            caption: 'Ancient materials → digital tokens: a warm, tactile minerals palette.'
          },
          {
            src: '/media/projects/hexaedge/sections/s08-elements.png',
            alt: 'Signals and Five-Element color semantics',
            caption: 'The same materials carry meaning: bull, bear, and pivot signals mapped onto the Five Elements.'
          }
        ]
      },

      {
        id: 'information-architecture',
        title: 'User Flow',
        sectionTag: 'User Flow',
        mainTitle: 'The Flow Used to Stop at the Answer',
        briefContent: 'Normally, users would cast a hexagram, read the result, and still have no idea where it came from. [[So I added an AI Consultant on top of the deterministic engine.]] Users can ask why a line moves, what an elemental clash means, or how the changing hexagram affects the answer. Read gives the result; Ask helps users understand it.',
        icon: '🧭',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s09-user-flow.png',
            alt: 'Cast, Board, Read, Ask: the four-step flow, with Ask added in the second iteration',
            caption: 'Cast → Board → Read → Ask. The fourth step was not in v1; it exists because people needed to interrogate the reading, not just receive it.'
          }
        ]
      },

      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: 'I Removed the Verdict',
        briefContent: 'A verdict is what people come to a reading for, and it was the one thing I couldn\'t ship: telling users their fate is bad UX, and a compliance problem in most markets I want to ship in.\n\n**Shi (势) focuses on momentum instead of destiny.** The source material already said so, which gave me the way out. Every verdict became a description of tendency. Personal readings turned into [[a mirror, not a decision]]. Market readings run on hard quant underneath, but the narrative stays on top: raw numbers only read to people who already know the system, and the story is what makes them [[legible to everyone else]]. [[The decision stays yours.]]',
        icon: '🔁',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s10-iteration.png',
            alt: 'Rewriting verdicts into momentum language',
            caption: 'From verdict to momentum: the same reading, reframed to keep agency with the user.'
          }
        ]
      },

      {
        id: 'ai-ux',
        title: 'AI UX',
        sectionTag: 'AI UX',
        mainTitle: 'The Prompt Is the Product\'s Ethics',
        briefContent: 'HexaEdge does not predict the market. It describes the momentum around a decision and hands that decision back. The compliance boundary between [[metaphysics and finance]] runs through every reading, and it lives in the prompt.\n\n[[A rule the model can ignore is not a rule.]] So the ethics run twice: a versioned ban-list compiled into the prompt, then an output scan that enforces it in code. A generation carrying a banned word gets one retry with the violation named; if it comes back dirty, [[the scan kills it]] and a deterministic fallback ships instead. The violating text never reaches a user and never enters the cache. The prompt is versioned like code, and [[the diff from V1 to V3 is where the design actually happened.]]',
        icon: '⚙️',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/ai-ux.png',
            alt: 'Prompt as design artifact: ban-list, output contract, evaluation',
            caption: 'The prompt is versioned like code, from V1 compliance to V3 "describe the momentum."'
          }
        ]
      },

      {
        id: 'outcome',
        title: 'Outcome',
        sectionTag: 'Outcome',
        mainTitle: 'Design to Deploy, No Handoff',
        briefContent: 'The loop is closed. [[A user lands on an encyclopedia page from search, signs up, casts, reads, hits a tier gate, pays, and exports the result as a share card.]] I built every step of that, including the parts most designers hand off: [[auth, the entitlement layer behind four pricing tiers, bilingual AI output, and SEO]].\n\nThe scoring engine, the reading UI, and the compliance layer were designed and shipped by the same person, so [[none of it drifted across a handoff]]. What went live is a business, not a prototype.',
        icon: '🚀',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s12-outcome.png',
            alt: 'Shipped outcome: four-tier pricing and productized system',
            caption: 'Membership, entitlements, i18n, and export: a productized system, not a prototype.'
          }
        ]
      },

      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: 'Reflection & Next Steps',
        mainTitle: 'Give the Decision Back to Users',
        briefContent: 'The compliance red line between metaphysics and finance set the brief, and it forced the core decision: [[stop predicting, start describing]]. The constraint became the spine of the whole product. Liuyao could have been fortune-telling. I chose not to go that way. Give it modern product design and it earns a second life: [[calmer decisions, agency intact.]]\n\n**What\'s next:**\n- [[Signal visualization & rigor]]: confidence heatmaps, trend overlays, and continued tuning of the deterministic scoring engine.\n- [[Deeper RAG & data feeding]]: expanding the knowledge base with more classical texts and real-market outcome data.\n- [[Traction & the share loop]]: leaning on the export/share cards as an organic growth surface, then user testing with 18–30 investors who have no Liuyao background.\n\nAncient method, modern use. More clarity, never less agency.',
        icon: '💭'
      }
    ]
  };
