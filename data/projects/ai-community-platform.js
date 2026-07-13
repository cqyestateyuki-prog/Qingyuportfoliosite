// ai-community-platform
export const aiCommunityPlatform = {
      id: 'ai-community-platform',
      year: '2025',
      featured: false, // 移至 Passion Projects
      title: {
        en: 'AI Built-in Community Platform',
        zh: 'AI 产品内嵌社区平台'
      },
      subtitle: {
        en: 'Modern integrated Community Platform for AI Tools',
        zh: '为 AI 工具打造的现代化集成社区平台'
      },
      categories: ['AI', 'UIUX', 'Programming','Product Design', 'Research'],
      tags: ['UI/UX Design', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Frontend Development',  'Web Development'],
      techTags: ['#Figma','#React','#TypeScript', '#Next.js','#HTML/CSS'],
      
      thumbnail: '/media/projects/aicommunity/Hero2 copy.png',
      brief: {
        en: 'An in-app integrated community system designed for AI Tools.',
        zh: '专为 AI 工具设计的应用内集成社区系统。'
      },
      heroImage: '/media/projects/aicommunity/Hero2 copy.png',
      heroVideo: 'https://vimeo.com/1145264634?share=copy&fl=sv&fe=ci',
      
      domain: [
        { en: 'AI Product Design & Development', zh: 'AI 产品设计与开发' },
        { en: 'Web Platform', zh: 'Web 平台' },
        { en: 'Learning Community', zh: '学习社区' }
      ],
      form: [
        { en: 'UI/UX Design', zh: 'UI/UX 设计' },
        { en: 'Frontend Development', zh: '前端开发' },
        { en: 'React + TypeScript + Tailwind CSS', zh: 'React + TypeScript + Tailwind CSS' },
        { en: 'Next.js', zh: 'Next.js' }
      ],
      collaborators: ['Solo Project','Cursor AI + ChatGPT + Claude'],
      
      colors: {
        heroGradient: 'linear-gradient(135deg, #000000 0%, #374151 100%)',
        subtitleGradient: 'linear-gradient(135deg,#374151 0%,rgb(72, 81, 97) 100%)',
        underlineGradient: 'linear-gradient(135deg,#374151 0%, #374151 100%)',
        textHighlightColor: '#3686ff', // 自定义正文中加粗文字和数字的颜色
        darkColor: 'rgb(40, 39, 39)', // mainTitle 使用的深色（比 #8a81d7 深一些）
        lightColor: '#3686ff' // sectionTag 使用的浅色
      },
      
       overview: {
         mainTitle: 'The Community Layer Every AI Tool Is Missing',
         briefContent: 'ChatGPT, Grok, and Claude all [[ship without a community]], so millions of people learn to use AI completely alone. The easy fix is a forum for prompts and tips. Research pointed somewhere harder: what people wanted most was [[recognition and a sense of belonging]] in the AI era, more than another list of tips. So the design is a community layer that sits on top of any chat tool without disrupting it, built around belonging first. For the product owner, that belonging is what drives [[retention]].',
         challenge: 'How might I create an ecosystem where users connect, collaborate, and create value for one another?',
         challenges: [
           'How might I create an ecosystem where users connect, collaborate, and create value for one another?',
           'How might I enable users to easily share their AI usage experiences and insights?',
           'How might I help users quickly find relevant, high-quality AI content, prompts, and events?',
           'How might I lower the barrier to entry for AI users to participate in community learning?',
           'How might I ensure the quality and reliability of shared AI content and prompts?'
         ],
         buttons: [
           {
             text: 'Visit Live Community Platform',
             url: 'https://ai-community-mvp-v2-7y9m.vercel.app/',
             type: 'external'
           }
         ]
       },
  
      sections: [ 
        {
          id: 'the-problem',
          title: 'The Problem',
          sectionTag: 'The Problem',
          mainTitle: 'Isolated Learning in a Connected World',
          briefContent: 'While AI adoption explodes ([[375% growth from 2023-2025]]), users face a critical challenge: [[they learn alone, struggle with adoption barriers, and have no specialized community to support their journey]].',
          icon: '💡',
          imageDisplayMode: 'single',
          images: [
           {
             src: '/media/projects/aicommunity/marketcontext.png',
             alt: 'User Interview & Market Insights',
             caption: 'Key insight: 90% of participants want to have an in-app community. 58% face prompt engineering barriers.'
           },
          ]
        },
        
        {
          id: 'process-research',
          title: 'Research',
          sectionTag: 'Research',
          mainTitle: 'The Demand for Connection',
          briefContent: 'Through surveys and interviews, I discovered that users came to learn techniques and stayed for something else: they seek [[emotional connection, recognition, and a sense of belonging]] in the AI era. [[90% of participants]] want an in-app community, and [[58% face prompt engineering barriers]].',
          icon: '🔍', 
          imageDisplayMode: 'single',
           images: [
            {
              src: '/media/projects/aicommunity/Userresearch.png',
              alt: 'User Interview & Market Insights',
              caption: 'Key insight: 90% of participants want to have an in-app community. 58% face prompt engineering barriers.'
            },
            {
              src: '/media/projects/aicommunity/UserPersona.jpg',
              alt: 'User Personas',
            },
            {
              src: '/media/projects/aicommunity/journeymap.png',
              alt: 'User Journey Map',
            },
           ]
        },

        {
          id: 'process-design',
          title: 'Iteration',
          sectionTag: 'Iteration',
          mainTitle: 'From Insight to Interface',
          briefContent: 'I aimed to create an in-app community homepage that is familiar in its bones, leaning on patterns users already know from Reddit, RedNotes and YouTube, then tailored for AI-specific use cases. The design evolved through multiple rounds of sketching and testing.',
          icon: '🎨',
          content: [
            '**Three-column to Two-panel**: The initial design used a standard three-column layout. However, testing revealed that AI generated content required more horizontal space. I pivoted to a two-panel structure that better accommodates the AI chat interface alongside community content.',
            '',
            '**Visual System**: Rather than creating a proprietary visual design system, I designed a [[platform-agnostic community framework]]. It acts as a functional layer on top of conversational UIs, adding community features without disrupting the core chat experience.',
            '',
            '**Interaction Patterns**: I focused on lowering the barrier to entry by using familiar patterns. The "Share Prompt" flow was simplified from 5 steps to 2 steps based on user feedback.'
          ],
          imageDisplayMode: 'alternating',
          images: [
            {
              src: '/media/projects/aicommunity/beforeafter.png',
              alt: 'Design Iteration',
              caption: 'Evolution: From a dense three-column layout to a focused two-panel structure'
            },
            {
              src: '/media/projects/aicommunity/DiagramPost.jpg',
              alt: 'Post Types',
              caption: 'Defining distinct visual treatments for Chat, Prompt, and Event posts'
            },
            {
              src: '/media/projects/aicommunity/Ratingsystem2.jpg',
              alt: 'Rating System',
              caption: 'Iterating on the voting mechanism to ensure quality content surfaces'
            }
          ]
        },
        
         {
           id: 'process-tech',
           title: 'Technical',
           sectionTag: 'Technical',
           mainTitle: 'Built for Scale and Performance',
           briefContent: 'To bring the design to life, I built a high-performance web application using a modern tech stack. The focus was on component modularity and type safety to ensure the platform could scale.',
           icon: '💻',
           buttons: [
             {
               text: 'View Full Code & Documentation',
               url: 'https://github.com/cqyestateyuki-prog/AI-Community-MVP-v2',
               type: 'github'
             }
           ],
          features: [
            {
              name: 'Next.js 14',
              description: 'React Framework',
              detail: 'App Router, Server Components, and optimized performance with automatic code splitting'
            },
            {
              name: 'TypeScript',
              description: 'Type Safety',
              detail: '100% TypeScript coverage ensuring reliable code and better developer experience'
            },
            {
              name: 'Tailwind CSS',
              description: 'Styling System',
              detail: 'Utility-first CSS framework for consistent design and rapid development'
            },
          ],
          
        },

        {
          id: 'the-solution',
          title: 'Final Solution',
          sectionTag: 'Final Solution',
          mainTitle: 'One Integrated Ecosystem',
          briefContent: 'The shipped platform puts community inside the tool, where the work already happens. Users [[share a chat, post a prompt, or find an event]] without leaving their AI. Keeping it in context is the whole point: a forum bolted on the side gets ignored, but a layer where you already work turns solo use into [[a reason to come back]].',
          icon: '🚀',
          featureDisplayMode: 'side-by-side',
          features: [
            {
              name: 'Three Post Types',
              detail: 'Share Chat & Thoughts enables users to share their emotional AI interactions with privacy protection, Share Prompt facilitates technical knowledge exchange with voting systems, and Events creates more connection opportunities.',
              image: '/media/projects/aicommunity/Postingflow.jpg',
            },
            {
              name: 'Prompt Rating System',
              detail: 'Technical knowledge sharing with voting system and effectiveness ratings.',
              image: '/media/projects/aicommunity/Ratingsystem.jpg',
            },
            {
              name: 'Trending Content',
              detail: 'Users can discover trending posts, prompts, and events in one place. The trending feed automatically surfaces the most popular and engaging content, helping users stay connected with what\'s happening in the community.',
              image: '/media/projects/aicommunity/Trendingprompts.png',
            },
          ],
          imageGroups: [
            {
              title: 'Final Visuals',
              displayMode: 'single',
              images: [
                {
                  src: '/media/projects/aicommunity/Homepage.png',
                  alt: 'Homepage',
                  caption: 'Clean, modern homepage with intelligent content feed and seamless navigation'
                },
                {
                  src: '/media/projects/aicommunity/Postdetailpage.jpg',
                  alt: 'Post Detail Page',
                  caption: 'Rich post detail view with voting, comments, and social interactions'
                },
                {
                  src: '/media/projects/aicommunity/Mybookmarks.png',
                  alt: 'Personal Data',
                  caption: 'User dashboard with AI Coins system, bookmarks, and content management'
                }
              ]
            }
          ]
        },

        {
          id: 'impact-reflection',
          title: 'Impact & Reflection',
          sectionTag: 'Impact & Reflection',
          mainTitle: 'Learnings & Future Steps',
          briefContent: 'The takeaway: a community layer only earns its place if it is simpler than the tool it sits on. Users are already overwhelmed by AI, so the layer has to lower the load, never add to it.',
          icon: '💭',
          content: [
            '**Impact**:',
            '- **Retention**: Community features create a reason for users to return even when they don\'t have a specific task.',
            '- **Knowledge Sharing**: Lowered the barrier for prompt engineering by allowing users to learn from each other.',
            '',
            '**Reflection**:',
            '- **Simplicity is Key**: Users are already overwhelmed by AI complexity. The community layer must be incredibly simple and intuitive.',
            '- **Content Moderation**: As the community grows, automated and community-driven moderation tools will be essential.',
            '- **Next Steps**: I would focus on implementing a "Remix" feature, allowing users to fork and improve shared prompts directly.'
          ]
        }
      ]
  };
