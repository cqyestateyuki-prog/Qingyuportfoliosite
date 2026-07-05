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

    thumbnail: '/media/projects/sparkup/hero.png',
    brief: {
      en: 'An AI platform that diagnoses startup readiness, generates personalized business ideas, and validates them through community feedback.',
      zh: '一个用于诊断创业准备度、AI 生成创业想法，并通过社区反馈验证想法的平台。'
    },
    heroImage: '/media/projects/sparkup/hero.png',
    heroVideo: null,

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
        'Defined the Two-Tier Diagnostic framework (Lite 10Q + Enhanced 30Q+) and Guest-to-User conversion flow',
        'Designed the Spark Forge interaction: constrained AI generation with drag-and-drop Idea Seeds, budget/scope inputs, and Forging animation',
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

    overview: {
      mainTitle: 'A Reality Check for People With Startup Anxiety',
      briefContent: '**SparkUp** is an [[AI-powered pre-entrepreneurship platform]] that [[diagnoses startup readiness, generates personalized business ideas, and validates them through community feedback]]. It targets a specific audience: people who scroll through startup success stories on social media and feel a mix of envy and anxiety, wondering, "Could I do this too?" Rather than hand out generic encouragement, SparkUp gives users an [[honest diagnostic of where they stand]] across six dimensions, then uses AI to [[forge business ideas tailored to their strengths and constraints]]. The core loop is simple: diagnose your readiness, forge ideas with AI, and validate them with the community.',
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
      {
        id: 'the-problem',
        title: 'The Problem',
        sectionTag: 'The Problem',
        mainTitle: '"Am I Even Capable?" Was the Question No One Answered',
        briefContent: 'Our JTBD research surfaced a core tension. When people see startup stories on social media, their first question isn\'t "Who can help me?" It\'s [["Am I even capable?"]] Existing tools skip past this and jump straight to networking, pitch decks, or motivational content. But the real anxiety is personal: people want to know, at low cost, whether the whole thing is even worth pursuing. The [[Four Forces model]] made it concrete. The push was income ceilings and a loss of meaning at work; the pull was a wish for honest self-knowledge instead of guesswork; the anxiety was the fear of wasting time on an unvalidated path; the habit was endless research with no structured self-reflection. So the design problem was clear: build a tool that [[replaces vague self-doubt with a structured, honest readiness picture]].',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/sparkup/problemstatement.png',
            alt: 'Problem Statement: The "Day One" Paralysis',
            caption: '90% of aspiring founders never launch. The biggest hurdle is the lack of structured guidance.'
          }
        ]
      },

      {
        id: 'process-research',
        title: 'Research',
        sectionTag: 'Research',
        mainTitle: '151 Surveys Killed Our First Idea, Then Gave Us a Better One',
        briefContent: 'As Product Lead, I ran [[151 survey responses and 10+ qualitative interviews]], drawing on JTBD, Four Forces, and the Kano Model. The finding that changed everything: users\' core pain wasn\'t [[lack of connections or mentorship]]. It was [[not knowing whether they were ready to start]]. That killed our original community-matching concept and pushed us to pivot fully to an AI-first diagnostic tool. Kano analysis also showed that forcing people to log in before they got any value was a [[reverse attribute]], so I designed a [[Guest-to-User flow]] where anyone can finish the Lite Diagnostic (10 questions) without signing up, then gets a nudge to save their results. That\'s where the [[Two-Tier Strategy]] came from: a quick Lite assessment as a low-friction hook with an instant Readiness Score, plus an Enhanced version (30+ questions) with a [[6-dimensional radar breakdown]], AI-generated action plans, and pattern analysis. As Design Lead, I owned the full UX/UI pipeline, taking it from Figma sketches to Figma Make for prototyping and iteration, then to Google AI Studio to finalize the component library and design system.',
        icon: '🔍',
        imageDisplayMode: 'alternating',
        images: [
          {
            src: '/media/projects/sparkup/marketresearch.png',
            alt: 'Market Research: Global Side Hustle Trend',
            caption: '72% of Americans and 73% of Chinese consumers are engaged in or considering side hustles.'
          },
          {
            src: '/media/projects/sparkup/userresearch.png',
            alt: 'User Research: JTBD, Four Forces, and Kano Model',
            caption: '151 surveys and 10+ interviews revealed the core pain: not knowing whether they are ready.'
          }
        ]
      },

      {
        id: 'process-design',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: 'From Boring Survey to 3D Command Deck',
        briefContent: '**Phase 1 (Dashboard)**: flat layout → [["Future Lab"]] style with Bento Grid, Glassmorphism cards, and 3D parallax mouse tracking. **Phase 2 (AI Diagnostic)**: Google Forms survey → [[3D grid background]] with radar-scan iconography and Quick/Full dual-path selection. **Phase 3 (Idea Bank → Spark Forge)**: static card grid → [[Spark Forge]] where users drag seeds, set constraints, and Ignite to generate ideas.',
        icon: '🎨',
        imageDisplayMode: 'alternating',
        images: [
          {
            src: '/media/projects/sparkup/sections/phase1-dashboard.png',
            alt: 'Phase 1: Dashboard, flat layout to Future Lab style',
            caption: 'Phase 1: Flat layout → Bento Grid + Glassmorphism + 3D parallax'
          },
          {
            src: '/media/projects/sparkup/sections/phase2-diagnostic.png',
            alt: 'Phase 2: AI Diagnostic, Google Forms to lab-grade interface',
            caption: 'Phase 2: Plain survey → 3D grid background + dual-path selection'
          },
          {
            src: '/media/projects/sparkup/sections/phase3-forge.png',
            alt: 'Phase 3: Idea Bank to Spark Forge',
            caption: 'Phase 3: Static card grid → Spark Forge generation platform'
          }
        ]
      },

      {
        id: 'process-tech',
        title: 'Technical',
        sectionTag: 'Technical',
        mainTitle: 'Next.js + AWS, Delivered in 3 Months',
        briefContent: 'The project was [[delivered in 3 months]] by a 4-person team. Tech stack: **Next.js** + **TypeScript** + **Tailwind CSS** for the frontend, **FastAPI (Python)** for the backend, **Firebase** for auth and data, **OpenAI API** for AI features, and **AWS** (ECR + App Runner + Terraform) for deployment. Bilingual i18n (EN/ZH); mobile-first responsive design.',
        icon: '💻',
        buttons: [],
        features: [
          {
            name: 'Next.js + Tailwind CSS',
            description: 'Frontend & UI',
            detail: 'Next.js + TypeScript; Tailwind CSS + Radix UI components; bilingual i18n (EN/ZH); mobile-first responsive design'
          },
          {
            name: 'FastAPI + Firebase + OpenAI',
            description: 'Backend & AI',
            detail: 'Python FastAPI backend; Firebase Auth + Firestore for persistence; OpenAI API for diagnostic analysis, idea generation, business plans, and challenge paths'
          },
          {
            name: 'AWS Deployment',
            description: 'Infrastructure & CI/CD',
            detail: 'Docker → AWS ECR → AWS App Runner; Terraform for infrastructure; GitHub Actions CI/CD with version-tag triggered deploys'
          }
        ]
      },

      {
        id: 'the-solution',
        title: 'Final Solution',
        sectionTag: 'Final Solution',
        mainTitle: 'Diagnose → Forge → Validate: One Continuous Journey',
        briefContent: 'Three capabilities, one continuous flow: [[Diagnose]] your readiness, [[Forge]] personalized ideas with AI, and [[Validate]] them through community feedback. Launched on [[Product Hunt]].',
        icon: '🚀',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'AI Readiness Diagnostic',
            detail: 'Lite (10Q) + Enhanced (30Q+) across 6 dimensions with smart routing. Radar Chart makes strengths and gaps actionable at a glance.',
            image: '/media/projects/sparkup/sections/solution-dashboard.png'
          },
          {
            name: 'Spark Forge',
            detail: 'Set keywords, budget, and scope, optionally drag in an Idea Seed, and AI generates business ideas matched to your diagnostic profile.',
            image: '/media/projects/sparkup/sections/solution-idea-bank.png'
          },
          {
            name: 'Validation & Dashboard',
            detail: 'Publish ideas to Spark Square for community feedback. Dashboard ties it together: Readiness Score, radar breakdown, Spark Stash, and recommendations.',
            image: '/media/projects/sparkup/sections/solution-design-system.png'
          }
        ],
        imageGroups: [
          {
            title: 'Final Visuals',
            displayMode: 'single',
            images: [
              {
                src: '/media/projects/sparkup/sections/final-dashboard.png',
                alt: 'Spark Up Dashboard',
                caption: 'Command center with Radar Chart and personalized action steps'
              },
              {
                src: '/media/projects/sparkup/sections/final-idea-bank.png',
                alt: 'Idea Bank and Spark Square',
                caption: 'Idea Bank with Forging flow; Spark Square for lightweight validation'
              }
            ]
          }
        ]
      },

      {
        id: 'impact-reflection',
        title: 'Impact & Reflection',
        sectionTag: 'Impact & Reflection',
        mainTitle: 'Trusting Data Over Instinct, Honesty Over Empty Encouragement',
        briefContent: '[[151 survey responses]] drove a complete product pivot, from community matching to an AI-first diagnostic and ideation tool. Our North Star metric was **Readiness-to-Action Conversion** (a user completes the Enhanced Diagnostic and forges at least one personalized idea). Design targets: Lite completion rate >70%, Lite→Enhanced conversion >40%, ideas forged per user >3, community share rate >50%. The lesson that stuck with me: the best products don\'t always push people to act. Sometimes they encourage [[honest reflection]] instead. SparkUp doesn\'t tell everyone "You can do this!" It asks [["Are you ready?"]] and backs the answer with evidence. In a space crowded with "just start" advice, we built something that helps people start [[with clarity]].',
        icon: '💭',
        content: [
          '**Impact**:',
          '- **Research**: 151 responses validated the "honest readiness check" positioning and killed the original community-matching concept; age cohort differences (18–27, 28–34, 35+) informed roadmap priorities.',
          '- **Design**: AI-augmented pipeline (Figma sketches → Figma Make for prototyping → Google AI Studio for component library and design system). Radar Chart, Forge Engine drag-and-drop, and Forging animation were all validated in user testing.',
          '- **Team**: Evidence-based decision culture; achievable success criteria; reusable 6-dimensional diagnostic framework.',
          '',
          '**Reflection**:',
          '- **Pivot courage**: Throwing away months of community-platform work was painful; 151 surveys don\'t lie. Data trumps intuition.',
          '- **Honesty + encouragement**: Always pair critique with actionable next steps (e.g. "Your Market score is low → Take Market Research Challenge").',
          '- **Edge cases**: Fallback UI when AI fails; encouraging messaging for low scores; Idea Seeds as scaffolding when users have no starting point.',
          '- **If I had more time**: Longitudinal study (6 months post-diagnostic); AI model iteration from idea-quality feedback; deeper community features (cautiously); content marketing (Xiaohongshu, Product Hunt).'
        ]
      }
    ]
  };
