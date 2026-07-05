// sparkup
export const sparkup = {
    id: 'sparkup',
    featured: false, // 移至 Passion Projects
    title: 'Spark Up',
    year: '2026',
    subtitle: {
      en: 'Where Ideas Get Their First Spark',
      zh: '让创意迸发第一道火花'
    },
    categories: ['AI', 'Product Design', 'UIUX', 'Programming', 'Research'],
    tags: ['Product Strategy', 'UX Design', 'UI Design', 'Figma Make', 'Google AI Studio', 'Next.js', 'Tailwind CSS', 'FastAPI', 'Firebase', 'OpenAI API', 'AWS', 'JTBD', 'Kano Model'],
    techTags: ['#Figma Make', '#Google AI Studio', '#Next.js', '#Tailwind CSS', '#FastAPI', '#Firebase', '#OpenAI API', '#AWS'],

    // 首图/缩略图改用真实存在的资产(原 hero.png 及所有 sections/* 图在仓库中缺失)
    thumbnail: '/media/projects/sparkup/problemstatement.png',
    brief: {
      en: 'An AI platform that diagnoses startup readiness, generates personalized business ideas, and validates them through community feedback.',
      zh: '一个用于诊断创业准备度、AI 生成创业想法，并通过社区反馈验证想法的平台。'
    },
    heroImage: '/media/projects/sparkup/problemstatement.png',
    heroVideo: null,

    // 元信息一行 stack(Technical 段已并入此处,不再单列章节)
    meta: {
      duration: '3 months',
      stack: 'Next.js · FastAPI · Firebase · OpenAI · AWS',
    },

    domain: [
      { en: 'AI Product', zh: 'AI 产品' },
      { en: 'Startup Mentorship', zh: '创业辅导' },
      { en: 'B2B SaaS', zh: 'B2B SaaS' }
    ],
    form: [
      { en: 'Product Strategy', zh: '产品策略' },
      { en: 'UX/UI Design', zh: 'UX/UI 设计' },
      { en: 'Design System', zh: '设计系统' },
      { en: 'User Research', zh: '用户研究' }
    ],
    collaborators: ['Yi Bao (Team Lead)', 'Serena Cao (Designer)', 'Peixin Gao (Developer)', 'Jinjing Yi (Developer)'],

    role: {
      sectionTag: '4-person team · 3 months',
      title: 'Product Lead & Design Lead',
      responsibilities: [
        'Led product strategy: user research (151 surveys, 10+ interviews), JTBD / Four Forces / Kano analysis, and the pivot from community platform to AI-first diagnostic',
        'Owned end-to-end UX/UI: Figma sketches → Figma Make for prototyping and iteration → Google AI Studio for finalizing the component library and design system',
        'Defined the Two-Tier Diagnostic framework (Lite 10Q + Enhanced 30Q+) and the guest-to-user conversion flow',
        'Designed the Spark Forge interaction: constrained AI generation with drag-and-drop Idea Seeds, budget/scope inputs, and the Forging animation',
      ]
    },

    colors: {
      heroGradient: 'linear-gradient(135deg, #0f172a 0%, #0081d4 100%)',
      subtitleGradient: 'linear-gradient(135deg, #0081d4 0%, #0081d4 100%)',
      underlineGradient: 'linear-gradient(135deg, #0081d4 0%, #0081d4 100%)',
      textHighlightColor: '#0081d4',
      darkColor: '#1a1a2e',
      lightColor: '#0081d4'
    },

    // Context & Problem(合并原 Overview + The Problem)
    overview: {
      mainTitle: 'A Reality Check for People With Startup Anxiety',
      briefContent: '**SparkUp** is an [[AI pre-entrepreneurship platform]] built for one specific person: someone who scrolls past startup success stories and feels a knot of envy and doubt, thinking "Could I do this too?" Our JTBD research found their first question isn\'t "Who can help me?" It\'s [["Am I even capable?"]] Most tools skip that and jump straight to networking, pitch decks, or motivational content. SparkUp starts where the anxiety actually lives: an [[honest read on your readiness]] across six dimensions, then AI that [[forges ideas around your real strengths and constraints]], then community feedback to pressure-test them. The loop is short: diagnose, forge, validate.',
      challenge: 'How might we help people with vague startup ambitions get an honest, low-pressure read on their readiness without discouraging them or wasting their time?',
      challenges: [
        'How might we help people with vague startup ambitions get an honest read on their readiness without discouraging them?',
        'How might we make a diagnostic assessment feel low-stakes enough for cold traffic to complete?',
        'How might we bridge the gap between "I want to start something" and "Here is something concrete I could start"?',
        'How might we design around AI latency so wait time feels productive, not frustrating?'
      ],
      buttons: []
    },

    sections: [
      // Research(pivot 叙事保留,决策部分已抽到 Key Decisions)
      {
        id: 'process-research',
        title: 'Research',
        sectionTag: 'Research',
        mainTitle: '151 Surveys Killed Our First Idea, Then Gave Us a Better One',
        briefContent: 'As Product Lead I ran [[151 survey responses and 10+ interviews]], reading them through JTBD, the Four Forces, and the Kano Model. The Four Forces made the tension concrete. People were pushed by income ceilings and work that had stopped meaning much, and pulled by a wish for honest self-knowledge over guesswork. What held them back was the fear of sinking months into an unvalidated path, plus a habit of researching endlessly without ever reflecting in a structured way. Then came the finding that reset the project: the core pain wasn\'t [[a lack of connections or mentorship]], it was [[not knowing whether they were ready to start]]. That one insight killed our original community-matching concept. How we acted on it is in the decisions below.',
        icon: '🔍',
        imageDisplayMode: 'alternating',
        images: [
          {
            src: '/media/projects/sparkup/userresearch.png',
            alt: 'User Research: JTBD & Kano Model, Four Forces breakdown',
            caption: 'JTBD and Kano analysis across 151 surveys and 10+ interviews. The core job: an honest, low-cost read on whether they are ready.'
          },
          {
            src: '/media/projects/sparkup/marketresearch.png',
            alt: 'Market Research: global shift toward side hustles',
            caption: 'Market context: 72% of Americans and 73% of Chinese consumers run or are considering a side hustle. Sources: SurveyMonkey 2025, Mastercard 2023.'
          },
          {
            src: '/media/projects/sparkup/userpersona.png',
            alt: 'User Persona: the curious but uncertain',
            caption: 'Primary persona, curious but uncertain: scrolls founder stories, takes courses, and never launches.'
          }
        ]
      },

      // ★ Key Decisions(三个岔路口各成一张决策卡)
      {
        id: 'key-decisions',
        title: 'Key Decisions',
        sectionTag: 'Key Decisions',
        mainTitle: 'Three Forks That Shaped the Product',
        briefContent: 'A few moments decided what SparkUp became. These are the three forks that mattered most, and why the evidence pushed each one.',
        icon: '🧭',
        features: [
          {
            name: 'Community matching vs AI diagnostic',
            detail: 'Our first concept matched aspiring founders with mentors and peers. Then 151 survey responses showed the real blocker sat earlier: people didn\'t know whether they were ready. We chose the AI-first diagnostic and scrapped the matching build, because solving the wrong problem well is worse than restarting on the right one.'
          },
          {
            name: 'One long assessment vs a two-tier diagnostic',
            detail: 'A single 30-question test is thorough but scares off cold traffic, and Kano flagged a forced login before any value as a reverse attribute. We chose two tiers: a 10-question Lite pass anyone finishes as a guest with an instant Readiness Score, then an Enhanced 30-question version with a six-dimension radar for people who opt in.'
          },
          {
            name: 'Open-ended AI vs constrained generation',
            detail: 'Left open, an idea generator drifts into generic advice. We chose to box the model in. Users set budget and scope and can drag in an Idea Seed before anything generates, so every idea Spark Forge returns ties back to their diagnostic profile instead of a blank prompt.'
          }
        ]
      },

      // AI-UX(用现有事实:等待/约束/重试与信任)
      {
        id: 'ai-ux',
        title: 'AI UX',
        sectionTag: 'AI UX',
        mainTitle: 'Designing the Wait, the Guardrails, and the Retry',
        briefContent: 'AI features fail in predictable ways: they make you wait, they wander off-brief, and sometimes they simply miss. I designed for those three moments before touching the happy path.',
        icon: '🤖',
        features: [
          {
            name: 'A wait that produces something',
            detail: 'Idea generation carries real latency. Instead of a spinner, the Forging animation shows the model assembling an idea from your seeds and constraints, so the wait reads as work in progress rather than a stall.'
          },
          {
            name: 'Constraints keep it on-brief',
            detail: 'Budget, scope, and keyword inputs frame every run. The model can\'t wander into a business you could never start; output stays inside the box you set. That is what makes the results feel personal instead of random.'
          },
          {
            name: 'A miss you can steer',
            detail: 'When a batch lands flat, you adjust one constraint and re-forge rather than rerolling blindly. Low diagnostic scores get specific, encouraging next steps, and a fallback UI covers the case where the model returns nothing.'
          }
        ]
      },

      // Solution(3 能力,终图缺真实资产暂不上图,避免破图)
      {
        id: 'the-solution',
        title: 'Final Solution',
        sectionTag: 'Final Solution',
        mainTitle: 'Diagnose → Forge → Validate: One Continuous Journey',
        briefContent: 'Three capabilities, one continuous flow. [[Diagnose]] your readiness, [[Forge]] personalized ideas with AI, and [[Validate]] them with the community. The dashboard stitches all three into one command center.',
        icon: '🚀',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'AI Readiness Diagnostic',
            detail: 'Lite (10 questions) plus Enhanced (30+) across six dimensions, with smart routing between them. A radar chart turns strengths and gaps into something you can act on at a glance.'
          },
          {
            name: 'Spark Forge',
            detail: 'Set keywords, budget, and scope, optionally drag in an Idea Seed, then Ignite. AI generates business ideas matched to your diagnostic profile instead of a blank prompt.'
          },
          {
            name: 'Validation & Dashboard',
            detail: 'Publish ideas to Spark Square for lightweight community feedback. The dashboard ties it together: Readiness Score, radar breakdown, Spark Stash, and next-step recommendations.'
          }
        ]
        // NOTE: 原 solution/final 系列产品截图在仓库中缺失,如需"终图"请补真实成品图后加回 imageGroups
      },

      // Impact(targets vs 实测)& Reflection(honesty 教训保留)
      // TODO(qingyu): add 1 real signal (a launch, a live-user count, or a verbatim user-testing quote) to replace the design targets below
      {
        id: 'impact-reflection',
        title: 'Impact & Reflection',
        sectionTag: 'Impact & Reflection',
        mainTitle: 'Trusting Data Over Instinct, Honesty Over Empty Encouragement',
        icon: '💭',
        content: [
          'One real signal anchors this project: [[151 survey responses]] forced a full pivot, from community matching to an AI-first diagnostic. That call is validated. The product metrics below are not.',
          'Our North Star was **Readiness-to-Action Conversion**: a user finishes the Enhanced Diagnostic and forges at least one personalized idea. Everything past the research is a target we set, not a number we have measured.',
          '**What is validated**',
          '- 151 survey responses and 10+ interviews confirmed the "honest readiness check" positioning and killed the original community-matching concept.\n- Age-cohort differences (18–27, 28–34, 35+) shaped roadmap priorities.',
          '**Design targets, not yet validated**',
          '- Lite completion rate above 70%\n- Lite to Enhanced conversion above 40%\n- Ideas forged per user above 3\n- Community share rate above 50%',
          '**Reflection**',
          '- **Pivot courage**: throwing away months of community-platform work stung. 151 surveys do not lie, so data beat intuition.\n- **Honesty with a next step**: never leave a low score as a verdict. Pair it with an action, like a low Market score routing to the Market Research Challenge.\n- **Design for the miss first**: a fallback UI when the model returns nothing, encouraging copy for low scores, and Idea Seeds as scaffolding when someone starts from blank.\n- **If I had more time**: a 6-month longitudinal study, model iteration from idea-quality feedback, and a real launch to replace these targets with measured numbers.'
        ]
      }
    ]
  };
