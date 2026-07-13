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

    // hero/缩略图 = 真实产品截图(Diagnostic Dashboard); problemstatement 单独放在 Problem 节
    thumbnail: '/media/projects/sparkup/sections/final-dashboard.png',
    brief: {
      en: 'An AI platform that diagnoses startup readiness, generates personalized business ideas, and validates them through community feedback.',
      zh: '一个用于诊断创业准备度、AI 生成创业想法，并通过社区反馈验证想法的平台。'
    },
    heroImage: '/media/projects/sparkup/sections/final-dashboard.png',
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
        'Made the call to scrap our community-matching concept after 151 surveys showed the real blocker sat earlier: people did not know whether they were ready',
        'Split the diagnostic into two tiers so cold traffic gets value before any login, after Kano flagged a forced sign-up as a reverse attribute',
        'Boxed in the AI generator with budget, scope, and drag-in Idea Seeds, so every idea ties back to the user instead of drifting into generic advice',
        'Owned product and design end to end, from the research that set the direction to the shipped diagnose, forge, and validate loop',
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
      mainImage: {
        src: '/media/projects/sparkup/problemstatement.png',
        alt: 'Problem statement: 90% of aspiring founders never launch',
        caption: '90% of aspiring founders never launch. The biggest hurdle is the lack of structured guidance.'
      },
      buttons: []
    },

    sections: [
      // Research(三个发现各配一段文字+一张图,分开放)
      {
        id: 'process-research',
        title: 'Research',
        sectionTag: 'Research',
        mainTitle: '151 Surveys Killed Our First Idea, Then Gave Us a Better One',
        briefContent: 'As Product Lead I ran [[151 survey responses and 10+ interviews]], reading them through JTBD, the Four Forces, and the Kano Model. Three findings set the direction.',
        icon: '🔍',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'The push, the pull, and the fear',
            detail: 'The Four Forces made the tension concrete. People were pushed by income ceilings and work that had stopped meaning much, and pulled by a wish for honest self-knowledge over guesswork. What held them back was the fear of sinking months into an unvalidated path, plus a habit of researching endlessly without ever reflecting in a structured way.',
            image: '/media/projects/sparkup/userresearch.png',
            imageCaption: 'JTBD and Kano analysis across 151 surveys and 10+ interviews.'
          },
          {
            name: 'The ambition is mainstream',
            detail: 'The market told the same story from the outside: 72% of Americans and 73% of Chinese consumers run or are considering a side hustle. Wanting to start something is no longer a niche dream. The confidence to start it is what\'s scarce.',
            image: '/media/projects/sparkup/marketresearch.png',
            imageCaption: 'Sources: SurveyMonkey 2025, Mastercard 2023.'
          },
          {
            name: 'The finding that reset the project',
            detail: 'The core pain wasn\'t [[a lack of connections or mentorship]]. It was [[not knowing whether they were ready to start]]. That one insight killed our original community-matching concept; how we acted on it is in the iteration below.',
            image: '/media/projects/sparkup/userpersona.png',
            imageCaption: 'Primary persona, curious but uncertain: scrolls founder stories, takes courses, and never launches.'
          }
        ]
      },

      // ★ Iteration(三个岔路口决策卡 + 老虎机→锻造炉迭代实录)
      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: 'Three Forks That Shaped the Product',
        briefContent: 'SparkUp wasn\'t designed in one pass. It went through a full concept pivot and a rebuilt core feature, and each round came down to a fork in the road. These are the three that mattered, and why the evidence pushed each one.',
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
            detail: 'Our Demo Day MVP was an idea slot machine: it generated at random, users watched the show and left. Left open, a generator drifts into generic advice. So we boxed the model in. Users set budget and scope and can drag in an Idea Seed before anything generates, so every idea Spark Forge returns ties back to their diagnostic profile instead of a blank prompt. Ideas you helped forge are ideas you keep.'
          }
        ],
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/sparkup/sections/iteration-mvp-to-forge.png',
            alt: 'Iteration: from the Demo Day idea slot machine to the Spark Forge',
            caption: 'The rebuild in one picture, from the concept deck: the Demo Day "idea slot machine" (random output, no ownership) versus the Forge (your input, your constraints). Retention across the two phases as reported in the deck: 12% to 45%.'
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
        ],
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/sparkup/sections/forging-ritual.png',
            alt: 'The Forging ritual: each step of the wait names the work in progress',
            caption: 'The Forging sequence: instead of a spinner, each step names the work the model is doing, so the wait reads as thinking, not stalling.'
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
        ],
        imageDisplayMode: 'alternating',
        images: [
          {
            src: '/media/projects/sparkup/sections/final-dashboard.png',
            alt: 'Diagnostic Dashboard: readiness score, AI analysis log, recommended actions',
            caption: 'The Diagnostic Dashboard: Readiness Score with dimension breakdown, a live AI analysis log, and recommended next actions.'
          },
          {
            src: '/media/projects/sparkup/sections/forge-card.png',
            alt: 'A SparkUp challenge card generated by Spark Forge',
            caption: 'A generated challenge card: difficulty, potential, time and stack at a glance. Accepting one is a zero-risk first act of entrepreneurship.'
          }
        ]
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
