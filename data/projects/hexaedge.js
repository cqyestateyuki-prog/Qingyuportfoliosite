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
    tags: ['Product Design', 'Design Engineering', 'AI/LLM', 'Financial Signal', 'Neo-Chinese Aesthetic', 'SaaS'],
    techTags: ['#Next.js 16', '#React 19', '#TypeScript', '#Claude Code', '#Figma', '#LLM API'],

    thumbnail: '/media/projects/hexaedge/hero.png',
    brief: {
      en: 'A full-stack financial tool that turns I Ching logic into quantitative market signals through a Neo-Chinese design system.',
      zh: '一款把中国传统文化《易经》改写成金融量化信号的工具。'
    },
    heroImage: '/media/projects/hexaedge/hero.png',
    heroVideo: null,

    domain: [
      { en: 'FinTech Signal Tool', zh: '金融信号工具' },
      { en: 'Cultural Tech', zh: '文化科技' },
      { en: 'B2C SaaS', zh: 'B2C SaaS' }
    ],
    form: [
      { en: 'Product Design', zh: '产品设计' },
      { en: 'Design Engineering', zh: '设计工程' },
      { en: 'AI Integration', zh: 'AI 集成' },
      { en: 'Visual System', zh: '视觉体系' }
    ],
    collaborators: [],
    meta: {
      duration: 'Feb 2026 – Present',
      team: 'Solo',
      stack: 'Figma · Claude Code · Next.js · React · TypeScript · RAG + LLM',
    },

    colors: {
      heroGradient: 'linear-gradient(135deg, #14233A 0%, #243E66 50%, #9C7A3A 100%)',
      subtitleGradient: 'linear-gradient(135deg, #243E66 0%, #9C7A3A 100%)',
      underlineGradient: 'linear-gradient(135deg, #9C7A3A 0%, #A8392E 100%)',
      textHighlightColor: '#9C7A3A',
      darkColor: '#14233A',
      lightColor: '#9C7A3A'
    },

    role: {
      title: 'Product Designer & Design Engineer',
      responsibilities: [
        'End-to-end product design: research, UX/UI, visual system, implementation',
        'Proprietary Liuyao analysis engine development',
        '2+ years structured data collection & RAG knowledge base',
        'AI interpretation pipeline (LLM API integration)',
        'Neo-Chinese design system: color tokens from traditional materials'
      ]
    },

    overview: {
      mainTitle: 'Reshaping Unstructured Classical Logic into Quantitative Signals',
      briefContent: '**HexaEdge (点卦)** is a financial signal tool that deeply integrates traditional Liuyao logic. Built on the I Ching as its underlying architecture, it uses a modern SaaS interface to [[deconstruct and extract]] the complex, multidimensional variables embedded within the 64 hexagrams — such as Five Elements interactions and moving-line transformations — reshaping unstructured classical logic into [[standardized quantitative signals]]. This highly integrated pipeline delivers a seamless flow from raw hexagram input to Bull/Bear signal generation on a [[calendar timeline]], transforming an intricate ancient analytical system into a decision-support view that modern traders can consume directly.',
      challenge: 'How might we transform a 3,000-year-old analytical framework into a modern financial product — without losing its logical rigor or alienating either traditional practitioners or new investors?',
      buttons: [
        { label: 'Live Site', url: 'https://hexaedge.vercel.app', type: 'primary' },
        { label: 'GitHub', url: 'https://github.com/cqyestateyuki-prog/LiuyaoSaaSProject', type: 'secondary' }
      ],
      // Why I'm building this(hero meta 之下)+ 六爻线条母题(新中式鎏金)
      whyIBuild: 'Everything today feels [[optimized, monetized, and expensive]]. HexaEdge began from a quieter idea: three coins and an honest question, and a 3,000-year-old system still gives you somewhere to think. I wanted to carry that — one of the world\'s oldest pieces of decision logic, [[binary long before Leibniz]] — to a modern, global audience through design, not superstition. Less about predicting the future, more about [[a way to look inward]] in an age that rarely makes room for it.',
      whyIBuildHexagram: [1, 0, 1, 1, 0, 1], // 1=阳(整) 0=阴(断),自下而上
      whyIBuildHexagramLabel: '古法新用'
    },

    sections: [
      {
        id: 'the-problem',
        title: 'The Problem',
        sectionTag: 'The Problem',
        mainTitle: 'Two Failures and One Untouched Opportunity',
        briefContent: 'Traditional I Ching and Liuyao websites are stuck in the early 2000s — dense forum layouts, walls of classical Chinese jargon, and zero onboarding for newcomers.\n\n**Accessibility failure.** Young users bounce immediately. The terminology barrier is too high, the UI is unreadable, and there\'s no progressive disclosure. A rigorous analytical system stays locked inside a shrinking niche community.\n\n**Cultural failure.** When the interface looks like a relic, the logic within is dismissed as superstition. This [[\"time-gap\" in design]] prevents ancient analytical frameworks from going global or being taken seriously by a modern audience.\n\n**Opportunity.** The use cases haven\'t evolved — still love, career, and health. But today\'s young generation cares about [[investing, crypto, and stock markets]]. Meanwhile, AI-powered fortune-telling products focus on BaZi (八字) and Ziwei Doushu (紫微斗数) — no one has applied AI to Liuyao signal analysis. A redesigned interface + a new domain = an untouched market.',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/problem.png',
            alt: 'Traditional Liuyao tools vs modern expectations',
            caption: 'The "time-gap" in design: traditional tools stuck in the 2000s while user expectations have evolved.'
          }
        ]
      },

      {
        id: 'concept',
        title: 'Concept',
        sectionTag: 'Concept',
        mainTitle: 'Ancient Methods, Modern Use — 古法新用',
        briefContent: 'Liuyao is not fortune-telling. At its core, it\'s a [[structured decision-analysis framework]]: you define a question, generate a hexagram through a controlled random process, then systematically evaluate relationships between six lines (爻) using rules about elemental interaction, timing, and transformation.\n\nHexaEdge takes this framework and points it at a new domain — the stock market. The question becomes "will this stock go up or down this week?", and the output becomes a [[bull/bear signal calendar]] instead of a vague prose prediction.\n\nThis isn\'t about whether divination "works" for stocks. It\'s about demonstrating that [[traditional philosophical systems can find new life in digital products]] — if someone bothers to redesign the experience.',
        icon: '🧭',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/concept.png',
            alt: 'From hexagram to signal calendar',
            caption: 'Transforming classical hexagram analysis into actionable trading signals.'
          }
        ]
      },

      {
        id: 'design-direction',
        title: 'Design Direction',
        sectionTag: 'Design Direction',
        mainTitle: 'Neo-Chinese Aesthetic — 新中式',
        briefContent: 'I collected reference images of jade, celadon porcelain, blue-and-white ceramics (青花瓷), ink-wash paintings, and cinnabar seals — assembled into a moodboard and used as the foundation for color extraction, working with AI (Claude) to translate material qualities into digital design tokens.\n\nThe goal: **warm and refined, never cold or sterile.** The interface should feel like holding a piece of jade — smooth, substantial, alive with subtle color — not like using a fintech dashboard.\n\nThe palette is drawn entirely from traditional Chinese materials: Jade White (#F2F6F7), Celadon Glaze (#E4ECEE), Blue-and-White (#243E66), Ink Black (#14233A), Cinnabar (#A8392E), Gilding (#9C7A3A), and Bamboo Green (#6E9387). Five Elements semantic mappings reuse the same palette.',
        icon: '🎨',
        imageDisplayMode: 'alternating',
        images: [
          {
            src: '/media/projects/hexaedge/sections/moodboard.png',
            alt: 'Neo-Chinese moodboard and color extraction',
            caption: 'Ancient materials → digital tokens: jade, celadon, cinnabar, gilding.'
          },
          {
            src: '/media/projects/hexaedge/sections/color-system.png',
            alt: 'Color system and typography',
            caption: 'Seven color tokens from traditional materials + dual-script type system.'
          }
        ]
      },

      {
        id: 'design-solutions',
        title: 'Design Solutions',
        sectionTag: 'Design Solutions',
        mainTitle: 'From Dense Symbols to Consumable Signals',
        briefContent: 'Traditional Liuyao tools only generate the hexagram plate — they don\'t analyze, don\'t interpret, and have zero AI involvement. HexaEdge breaks this into [[three progressive steps]] — every label, every interpretation is written in plain language that any trader or investor can understand:\n\n**1. Cast (起卦)** — Enter your numbers and select the date. The system calculates the hexagram automatically. No knowledge required.\n\n**2. Read (排盘)** — The hexagram plate appears as a structured table: six lines with elements, relatives, spirits, and transformations. Color-coded by Five Elements for instant scanning.\n\n**3. Predict (预测)** — AI-generated plain-language interpretation + bull/bear signals rendered on a calendar timeline. Exportable as image or PDF.',
        icon: '✨',
        content: [
          '**Hexagram Plate Redesign**: Preserved the traditional top-to-bottom structure but added Five-element color coding, visual hierarchy (moving lines in gilding gold), and spatial grouping for elemental relationships.',
          '',
          '**Prediction Calendar**: The core output — daily cells colored by signal strength (bull red, bear green, neutral gray), key events marked with badges, weekly/monthly/quarterly timeline tabs, one-click export.',
          '',
          '**64 Hexagram Encyclopedia**: Reference library with classical text, modern commentary, six-line analysis, traditional readings, and historical scholar interpretations. Progressive disclosure: overview → detail → scholarly depth.'
        ],
        imageDisplayMode: 'alternating',
        images: [
          {
            src: '/media/projects/hexaedge/sections/3-step-wizard.png',
            alt: '3-step wizard: Cast, Read, Predict',
            caption: 'Three progressive steps — each reduces complexity for the user.'
          },
          {
            src: '/media/projects/hexaedge/sections/prediction-calendar.png',
            alt: 'Prediction calendar with signal timeline',
            caption: 'Bull/Bear signals mapped to specific dates with level badges and event tags.'
          },
          {
            src: '/media/projects/hexaedge/sections/encyclopedia.png',
            alt: '64 Hexagram Encyclopedia',
            caption: 'All 64 hexagrams with classical text, commentary, and progressive disclosure.'
          }
        ]
      },

      {
        id: 'technical',
        title: 'Technical',
        sectionTag: 'Technical',
        mainTitle: 'Claude Code + Proprietary Engine + LLM Pipeline',
        briefContent: '**Design & Frontend**: The entire UI was built with [[Claude Code]] (AI pair-programming) + [[Figma]] + [[Google Stitch]] for rapid design exploration and high-fidelity implementation. Frontend: Next.js 16, React 19, TypeScript. All 64 hexagram pages statically generated via SSG.\n\n**Proprietary Analysis Engine**: 2+ years of structured data collection via custom auto-entry pipeline. RAG knowledge base indexing classical texts and historical cases. A multi-stage scoring engine evaluating line vitality, elemental interactions, transformation chains, and timing windows to produce weighted Bull/Bear signals. LLM interpretation layer transforms raw engine output into plain-language market analysis.',
        icon: '⚙️',
        features: [
          {
            name: 'Claude Code + Figma + Google Stitch',
            description: 'Design & Frontend',
            detail: 'AI pair-programming for rapid implementation; Figma for visual design; Google Stitch for design exploration. Next.js 16 + React 19 + SSG.'
          },
          {
            name: '2+ Years Structured Data',
            description: 'Data Foundation',
            detail: 'Custom Liuyao auto-entry pipeline accumulating hexagram records with tagged market outcomes for pattern recognition and back-testing.'
          },
          {
            name: 'Multi-Stage Scoring Engine',
            description: 'Proprietary Algorithm',
            detail: 'Evaluates line vitality, elemental interactions, transformation chains, and timing windows. Produces weighted Bull/Bear voting signals.'
          },
          {
            name: 'RAG + LLM Interpretation',
            description: 'AI Pipeline',
            detail: 'Classical texts indexed for retrieval-augmented generation. LLM API transforms engine output into plain-language market analysis.'
          }
        ]
      },

      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: 'Reflection & Next Steps',
        mainTitle: 'What Worked, and Where We\'re Going',
        briefContent: '**What worked:**\n- The "ancient material → digital token" color process produced a palette that feels genuinely different from typical SaaS blue-gray. The result is warm, refined, and distinctly [[Eastern-elegant]] — never cold or sterile.\n- The 3-step wizard successfully got non-practitioners through the casting process without documentation.\n- Working with AI as a design collaborator (moodboard → tokens → implementation) compressed what would normally be weeks of iteration into days.\n\n**What\'s next:**\n- [[English translation layer]] — full bilingual hexagram encyclopedia and AI interpretation for global reach.\n- [[Deeper RAG & data feeding]] — expanding the knowledge base with more classical texts and real-market outcome data.\n- [[Signal visualization & accuracy]] — confidence heatmaps, trend overlays, and iterative scoring engine refinement.\n- [[User testing with young investors]] — usability studies with 18–30 year-old users with no Liuyao background.',
        icon: '💭'
      }
    ]
  };
