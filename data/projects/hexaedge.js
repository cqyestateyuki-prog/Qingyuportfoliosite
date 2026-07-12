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
      en: 'Rebuilding a 3,000-year-old symbolic system into a deterministic engine. HexaEdge turns an ancient method into a decision-support tool for reading a market or a personal decision from multiple angles.',
      zh: '把三千年的符号系统重建为一台确定性推理引擎。HexaEdge 把这套古法变成一款决策辅助工具，让你从多个角度审视一笔市场行情或一个个人决策。'
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
      mainTitle: 'I Rebuilt a 3,000-Year-Old Symbolic System into a Deterministic Engine',
      briefContent: '**HexaEdge (点卦)** re-engineers **Liuyao (六爻)**, one of the world\'s oldest decision frameworks and [[binary long before Leibniz]], into a modern decision-support product. Through intuitive UI/UX, I turn an ancient stochastic method into a [[clean, testable inference model]]. The 64 hexagrams and their tangle of variables, from Five-Element interactions to moving-line transformations and timing windows, are [[deconstructed into standardized signals]] and rendered on a calendar timeline. The whole pipeline runs from a single cast to a readable, plain-language reading, shifting the experience from [["magic" to "method"]].',
      challenge: 'How do you carry a rigorous 3,000-year-old framework into a modern financial product without losing its logic, and without it reading as superstition to a generation that has only ever seen the ritual?',
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
        briefContent: 'Outdated and chaotic layouts force users to view a rigorous logic system as [[mere superstition]]. HexaEdge introduces new design to eliminate this [[visual friction]].',
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
        briefContent: 'HexaEdge captures a rare psychological convergence in today\'s young demographic: [[the deep emotional need for clarity]] and [[the high-stakes thrill of financial trading]]. While users turn to traditional tools for mindfulness, they navigate modern markets with aggressive speculation.\n\nUnderneath both appetites sits [[a market worth hundreds of billions]], and no one is building it with taste. We bridge that gap through [[design]].',
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
          'All screens shown are taken directly from the shipped production environment. This includes the onboarding flow, the 64-hexagram index, the casting wizard, and the market-signal dashboard.',
          'High-fidelity refinement is our strategic entry point. While the AI-divination sector is crowded with cliché mysticism and generic chat boxes, the intersection of Liuyao and equity trading is completely open ground. I replace vague conversational text with visualized market signals. HexaEdge establishes high-end design leadership where it is starved most.'
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
        mainTitle: 'Materializing Warmth, Then Meaning',
        briefContent: 'The palette is drawn entirely from traditional Chinese materials. The goal was [[warm and refined, never cold or sterile]]. It should feel like holding a piece of jade, not using a fintech dashboard.\n\n**Materializing warmth.** Jade White (#F2F6F7) as a paper-like base, Celadon Glaze (#E4ECEE) for sunken card surfaces, Porcelain Blue (#243E66) as brand primary and body text, Ink Black (#14233A) for headings, plus a six-step ink scale.\n\n**Materializing meaning.** The same palette carries semantics: Cinnabar for bull signals and emphasis, Celadon Jade for bear, Gilding for active pivot signals, Ochre for neutral ground, all mapped onto the Five Elements. The system lives as [[tokens → components → products.]]',
        icon: '🎨',
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
        briefContent: 'The hardest call here wasn\'t visual, it was ethical. Telling users their fate is bad UX, and a compliance problem in most markets I want to ship in.\n\n**Shi (势) is momentum, not destiny.** The source material already said so, which gave me the way out. Every verdict became a description of tendency. Personal readings turned into [[a mirror, not a decision]]. Market readings run on hard quant underneath, but the narrative stays on top: raw numbers only read to people who already know the system, and the story is what makes them [[legible to everyone else]]. [[The decision stays yours.]]',
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
        briefContent: 'The compliance boundary between metaphysics and finance isn\'t a footnote. It lives in the prompt. I treated the prompt as a [[design artifact]], versioned like code, and evolved it from [["answer the fate" → "describe the momentum."]]',
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
        briefContent: 'No design-to-engineering handoff, because the designer and the engineer were the same person. That is why the scoring engine, the reading UI, and the compliance layer never drifted: nothing got translated across a wall and lost. It shipped as a real product with [[three modules, payments, auth, and tiering]], not a prototype. Every screen in this deck is the deployed build.',
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
