// kogna
export const kogna = {
    id: 'kogna',
    year: '2026',
    featured: true, order: 1,
    title: 'Kogna AI',
    subtitle: {
      en: 'Strategic Business Insight, For All',
      zh: '战略洞察 · 人人可及'
    },
    categories: ['AI', 'Product Design', 'UIUX', 'Design System'],
    tags: ['Design System', 'UI Design', 'Product Design', 'SaaS', 'B2B', 'AI Platform', 'Dark Mode', 'Component Library'],
    techTags: ['#Design System', '#Next.js', '#Tailwind CSS', '#React', '#TypeScript', '#Dark Mode'],

    thumbnail: '/media/projects/kogna/slides/slide-01.png',
    brief: {
      en: 'Led the design system and UI/UX for an AI decision-support platform that turns fragmented business data into real-time strategic intelligence for the C-suite — now a live V1 with its first paying customers onboard.',
      zh: '主导一个 AI 决策支持平台的设计系统与 UI/UX——将碎片化的企业数据转化为面向 C-suite 高管的实时战略洞察;V1 已上线,并已拿下首批付费客户。'
    },
    heroImage: '/media/projects/kogna/slides/slide-01.png',
    heroVideo: null,

    domain: [
      { en: 'AI Platform', zh: 'AI 平台' },
      { en: 'B2B SaaS', zh: 'B2B SaaS' },
      { en: 'Strategy Intelligence', zh: '战略智能' }
    ],
    form: [
      { en: 'Design System', zh: '设计系统' },
      { en: 'UI/UX Design', zh: 'UI/UX 设计' },
      { en: 'Frontend', zh: '前端开发' }
    ],
    collaborators: [],
    meta: {
      role: 'Lead Product Designer & Design Engineer',
      duration: 'Jan 2026 – Present',
      team: '10-person startup · CEO, COO, 3 frontend, 5 backend',
      stack: 'Figma · Claude Code · Next.js · React · Supabase',
    },

    colors: {
      heroGradient: 'linear-gradient(135deg, #0B0716 0%, #0a1628 50%, #0D3B66 100%)',
      subtitleGradient: 'linear-gradient(135deg, #0D5FC2 0%, #0D8CE2 100%)',
      underlineGradient: 'linear-gradient(135deg, #0D5FC2 0%, #0D8CE2 100%)',
      textHighlightColor: '#6B3FC4',
      darkColor: '#140826',
      lightColor: '#0D3B66'
    },

    overview: {
      mainTitle: 'From Feature UI to Product Design System',
      briefContent: '[[Kogna]] helps leadership teams make faster decisions by pulling fragmented business data into one place. Executives today toggle between CRM, PM tools, BI dashboards, and spreadsheets—by the time they piece together a picture, it\'s already outdated. I joined as the [[design system lead]] at a stage where the product was growing fast but the UI wasn\'t keeping up: every new page looked slightly different, and the experience felt like [[a patchwork instead of one product]]. My job was to bring it all together—define a shared visual language, build components the team could reuse, and make the product feel as trustworthy as the decisions it supports.',
      challenge: 'How do you give every leader a 60,000-foot view of the whole business — without losing the detail behind any single metric?',
      challenges: [
        'Surface decisions, not just data — turn dozens of disconnected metrics into a signal the leader can act on at a glance, with the detail still one click away.',
        'Make dense, data-heavy views feel calm and trustworthy enough for executive buyers.',
        'Keep every screen coherent inside a product still shipping new features every week.'
      ],
      mainImage: {
        src: '/media/projects/kogna/slides/slide-02.png',
        alt: 'What Kogna does — fragmented tools converging into one command center',
        caption: 'TL;DR — every tool fans into one AI command center'
      },
      // Why I'm building this:案例头部 meta 之下的 POV 段落
      whyIBuild: 'I\'m fascinated by [[how leaders actually decide]] — the tools they live in, what they trust, what they\'re missing. Today that means building for the [[C-suite]], who feel the pain most and can act on it. But we\'re entering an age where AI makes [[almost anyone a kind of CEO]] — solo founders, one-person companies, small teams punching above their weight. Strategic clarity shouldn\'t stay a privilege of the few; the mission is to make it [[for all]].'
    },

    sections: [
      // ── 01 · Problem ──
      {
        id: 'problem',
        title: 'Problem Statement',
        sectionTag: '01 · Problem',
        mainTitle: 'The 1,000-Tab Nightmare',
        briefContent: 'Every leader was paying a hidden [[fragmentation tax]] — hours each week clicking between CRM, project, finance and BI tools just to piece together where the business stands, only to act on a picture that\'s already weeks out of date.',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-03.png',
            alt: 'The problem — fragmented tools, stale reporting',
            caption: 'Dozens of disconnected tools · 2–4 week reporting lag · 20+ hours a week synthesizing'
          }
        ]
      },

      // ── 02 · User Research ──
      {
        id: 'research',
        title: 'User Research & Discovery',
        sectionTag: '02 · Research',
        mainTitle: 'Validated Before Designing',
        briefContent: 'Demand was validated through [[180+ discovery contacts]], [[15+ executive interviews]] and [[3 validated personas]] — and one insight shaped everything: leaders don\'t want another dashboard, they want decisions surfaced, not data displayed.',
        icon: '🔍',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-05.png',
            alt: 'Research — outreach, interviews, personas',
            caption: 'Customer discovery across CEOs, COOs and chiefs of staff'
          }
        ]
      },

      // ── 03 · The Solution: 3 Pillars ──
      {
        id: 'solution',
        title: 'The Solution',
        sectionTag: '03 · The Solution',
        mainTitle: 'Three Pillars, One Panoramic View',
        briefContent: 'From fragmented data to a panoramic, actionable view — built on three pillars: a 24/7 strategic radar, a dashboard that builds itself, and a platform that connects the [[what]] to the [[why]].',
        icon: '✦',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'Kogna Insight',
            detail: 'A smart radar for the business — it scans strengths, weaknesses, opportunities and threats 24/7, surfaces the most urgent signal first, and shows the path forward.',
            image: '/media/projects/kogna/pillars/insight.png'
          },
          {
            name: 'Smart Tiles',
            detail: 'Beautifully simple visuals — mix and match adaptive KPI tiles to build exactly the view a leader needs, pulling live from Salesforce, HubSpot, Jira and Asana, with an AI insight pinned right to the board.',
            image: '/media/projects/kogna/pillars/smart-tiles.png'
          },
          {
            name: 'What → Why',
            detail: 'Connect the stack, then see what changed and why — 10+ sources linked with real-world market shifts, and a RAG assistant answering questions over your connected data.',
            image: '/media/projects/kogna/pillars/what-why.png'
          }
        ]
      },

      // ── 04 · How We Build (Design System + AI loop) ──
      {
        id: 'how-we-build',
        title: 'How We Build',
        sectionTag: '04 · How We Build',
        mainTitle: 'One Source of Truth, an AI-Accelerated Loop',
        briefContent: 'A [[token-first design system]] — logo, color, an Inter type ramp and components — is the single source of truth in code and Figma. [[Claude Code and Figma stay in sync both ways over MCP]]: a Figma frame becomes token-correct React, and code changes flow back into the file — so the maker who designs a screen also ships it. Page-diffs, test suites and an AI review catch drift before it goes live on Next.js.',
        icon: '⚡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-12.png',
            alt: 'How we build — designer who codes, AI-accelerated loop',
            caption: 'Design → build with AI → review → ship — the same system, every day'
          },
          {
            src: '/media/projects/kogna/slides/slide-10.png',
            alt: 'Design system — logo, color, typography',
            caption: 'One source of truth — tokens, color and an Inter type ramp across the whole product'
          }
        ]
      },

      // ── 05 · Iteration ──
      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: '05 · Iteration',
        mainTitle: 'How the Design Evolved',
        briefContent: 'I inherited a patchwork product — and through cycles of [[executive and team feedback]], three core experiences earned their final form: [[where the AI assistant lives]] (a contextual side panel vs. a dedicated page), how the dashboard organizes a leader\'s KPIs, and how an insight card went from [[showing data to surfacing a decision]] — a risk plus the action to take.',
        icon: '🔄',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-11.png',
            alt: 'Iteration — before and after',
            caption: 'Before → after: AI placement · the dashboard · from data to decision'
          }
        ]
      },

      // ── 06 · Outcomes ──
      {
        id: 'outcomes',
        title: 'Outcomes & What\'s Next',
        sectionTag: '06 · Outcomes',
        mainTitle: 'From Idea to a Live, Validated Platform',
        briefContent: 'Kogna went from idea to a [[shipped, validated product]] in months. What ships next is just as deliberate as what shipped already.',
        icon: '🚀',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-13.png',
            alt: 'Outcomes — live V1 and what is next',
            caption: 'V1 live · 10+ connectors · 180+ discovery outreach · first paying customers'
          }
        ]
      },

      // ── 07 · Reflection ──
      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: '07 · Reflection',
        mainTitle: 'A Design System Is Leverage',
        briefContent: 'At Kogna I design the screens and write the code that ships them, so I design what I can actually build and ship it the same week. The product is young and changes constantly, so I get the flow and logic solid first and let the visual polish catch up release by release. [[I\'d rather put a working version in front of real users than hold back a perfect one]]. The design system is what makes that pace possible: one shared language across Figma and the code, so a small team moves like a larger one. The lesson I\'ll keep: [[a system only earns its place when reaching for it is the easy choice]].',
        icon: '💭'
      }
    ]
  };
