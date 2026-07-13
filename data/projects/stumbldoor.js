// stumbldoor
export const stumbldoor = {
    // ========== Stumbldoor Project 图书系统==========
    id: 'stumbldoor',
    year: '2024',
    featured: true, order: 2, // Selected Work · 第 2 位
    title: 'Stumbldoor',
    subtitle: {
      en: 'Reimagining the Library Experience for the Future',
      zh: '重新想象未来的图书馆体验'
    },
    categories: ['UIUX', 'Research'],  // 多分类支持
    tags: ['User Experience Design', 'Mobile App', 'Research'],
    techTags: ['#Figma', '#Wireframe', '#Prototype','#Visual Design', '#Mobile App','#Design System'],  // 技术标签
    
    // ========== 主页展示 ==========
    thumbnail: '/media/projects/stumbldoor/hero/hero-image@66662x.png',  // 列表页缩略图
    brief: {
      en: 'Stumbldoor is a mobile app that [[rethinks the library experience]] for people who grew up reading on screens. The point is to make a library visit feel like exploring, so you [[stumble onto genres and authors you would never have searched for]].',
      zh: 'Stumbldoor 是一款为「在屏幕上长大的一代」[[重新设计图书馆体验]]的 App。核心是把逛图书馆变回一种探索，让你[[撞见那些你根本不会去搜的书和作者]]。'
    },
    
    // ========== 详情页 Hero ==========
    heroImage: '/media/projects/stumbldoor/hero/hero-image@66662x.png',
    heroVideo: null,  // 可选：视频路径
    
    // ========== 项目标签==========
    domain: [
      { en: 'Edtech', zh: '教育科技' },
      { en: 'UI/UX', zh: 'UI/UX' },
      { en: 'Mobile', zh: '移动端' }
    ],
    form: [
      { en: 'Research', zh: '用户研究' },
      { en: 'Mobile Application Design', zh: '移动应用设计' }
    ],
    collaborators: [],
    meta: {
      role: 'UX/UI Designer & Researcher',
      team: 'Solo',
      stack: 'Figma · Prototyping · Design System',
    },

    // ========== 项目颜色配置 ==========
    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(28, 1, 65)0%, #8a81d7 100%)', // 黑色到紫色渐变
      subtitleGradient: 'linear-gradient(135deg,rgb(65, 27, 118) 0%,rgb(84, 77, 152) 100%)', 
      underlineGradient: 'linear-gradient(135deg,rgb(65, 27, 118)0%, rgb(84, 77, 152) 100%)',
      textHighlightColor: '#8a81d7', // 自定义正文中加粗文字和数字的颜色（紫色）
      darkColor: '#6059A5', // mainTitle 使用的深色（比 #8a81d7 深一些）
      lightColor: '#8a81d7' // sectionTag 使用的浅色
    },
    
    // ========== 项目概述 ==========
    overview: {
      // 正文与 challenge 已移走:TL;DR 在 hero 说清"是什么",challenge 移到 Problem Statement。
      whyIBuild: 'I grew up loving libraries, and Stumbldoor is my attempt to [[make a library feel worth walking into again]], by making discovery feel a bit more like play.'
    },
    
    // ========== 角色（可选）==========
    /*
    role: {
      title: 'Role and Responsibilities',  // 简短的角色标题
      // responsibilities 是可选的，可以不填
      responsibilities: [
        'User Research: Investigating both physical and digital library user needs.',
        'User Persona & Journey Map Creation: Developing personas to guide design decisions.',
        'Information Architecture: Structuring the app content for optimal user navigation.',
        'Wireframing & Prototyping: Sketching out and testing preliminary app designs.',
        'Visual Design: Crafting the aesthetic components of the app.',
        'User Testing: Conducting usability testing to ensure the app is user-friendly.',
      ]
    },
    // 如果不想显示role部分，可以直接设置 role: null
    */

    
    // ========== 项目章节 ==========
    sections: [
      {
        id: 'problem',
        title: 'Problem Statement',
        sectionTag: 'Problem Statement',
        mainTitle: 'The Crisis of Libraries',
        challenges: [
          'How might we make libraries more relevant, inclusive, culturally dynamic & appealing in the future?',
          'How might we bridge the gap between physical and digital library experiences?',
          'How might we encourage users to discover new genres and authors?',
          'How might we address the 21.2% decline in physical library visits?'
        ],
        briefContent: 'From 2009 to 2022, physical library visits declined by [[21.2%]]. Yet library card registrations [[peaked in 2019]]. This paradox reveals a critical gap: [[people want to read, but the traditional library experience is failing them]]. Libraries face an [[identity crisis]]. Younger generations still value physical books, but they are intimidated by formal library spaces, struggle to navigate complex layouts, and want a more personal, social way to read.',
        icon: '💡',
        images: [
          {
            src: '/media/projects/stumbldoor/sections/research.png',
            alt: 'Research Stats',
          },
        ]  // 可以没有图片
      },
      {
        id: 'research',
        title: 'User Research & Insights',
        sectionTag: 'User Research & Insights',
        mainTitle: 'Understanding Library Users & Readers',
        briefContent: 'Our team conducted comprehensive research across [[4 NYC libraries]], surveying [[135 users]] and conducting [[8 in-depth interviews]]. Our findings revealed three critical barriers: [[intimidating spaces, confusing navigation, and lack of personalization.]]',
        icon: '💡',
        imageGroups: [
          {
            displayMode: 'single',
        images: [
          {
                src: '/media/projects/stumbldoor/sections/userresearch.png',
                alt: 'Research Summary',
                caption: 'Key research findings and insights'
              },
            ]
          },
          {
            displayMode: 'two-column',
            images: [
              {
                src: '/media/projects/stumbldoor/sections/2-Fieldsearch2.jpg',
                alt: 'NYC library field research documentation',
                caption: 'Stavros Niarchos Foundation Library Field Research'
          },
          {
            src: '/media/projects/stumbldoor/sections/2-Fieldsearch.jpg',
            alt: 'NYC library field research documentation',
            caption: 'NY Society Library Field Search'
          },
          {
            src: '/media/projects/stumbldoor/sections/2-Survey.jpg',
            alt: 'Survey Insights',
            caption: 'Survey Insights'
          },
          {
            src: '/media/projects/stumbldoor/sections/2-affinitymap.jpg',
            alt: 'User research affinity mapping',
            caption: 'Affinity Mapping: Synthesizing user insights and pain points'
          },
        ]
          },
        ]  
      },
      {
        id: 'solution',
        title: 'The Solution',
        sectionTag: 'The Solution',
        mainTitle: 'Stumbldoor: Three Pillars of Innovation',
        briefContent: 'Stumbldoor makes browsing something you actually enjoy, and ties the app to the physical library instead of treating them as separate worlds. It rests on three features: [[Scrollstack]] for personalized reading lists, [[Gameful UX]] for achievements and a sense of community, and [[AR Assist]] for finding a book on the shelf.',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'Scrollstack',
            description: 'Personalized Readlists',
            detail: 'Designed to gamify the browsing experience, Scrollstack transforms static lists into an interactive, scrolling deck. It invites users to tactilely swipe through recommendations, bringing the serendipitous joy of "stumbling" upon a book to the digital screen.',
            gif: '/media/projects/stumbldoor/sections/Scrollgif.gif'
          },
          {
            name: 'Gameful UX',
            description: 'Joy of Reading',
            detail: 'Achievements and reading stats transform reading from solitary to social experience, providing recognition and increasing engagement.',
            gif: '/media/projects/stumbldoor/sections/gameux.gif'
          },
          {
            name: 'AR Assist',
            description: 'Find My Book',
            detail: 'Augmented reality navigator for library layouts that eliminates confusion and reduces time spent searching for books, making physical library visits more enjoyable.',
            gif: '/media/projects/stumbldoor/sections/ARgif.gif'
          }
        ],
        images: [
          
        ]  
      },
     
      {
        id: 'usermapping',
        title: 'User Mapping',
        sectionTag: 'User Mapping',
        mainTitle: 'Designing for Teenagers, College Students and Book Enthusiasts',
        briefContent: 'Target users are NYC individuals who possess smartphones and are open to reading, library users and book enthusiasts. I created user personas, journey maps, and user flows to guide the design decisions and ensure the app meets their specific needs.',
        icon: '🎨',
        imageDisplayMode: 'single', // 单图模式
        images: [
          {
            src: '/media/projects/stumbldoor/sections/4-userpersona.jpg',
            alt: 'User Persona',
          },
          {
            src: '/media/projects/stumbldoor/sections/4-userjourneymap.jpg',
            alt: 'User Journey Map',
          },
          {
            src: '/media/projects/stumbldoor/sections/4-userflow.jpg',
            alt: 'User Flow',
          },
        ]
      },

      {
        id: 'designprocess',
        title: 'Design Process',
        sectionTag: 'Design Process',
        mainTitle: 'From Insight to Interface',
        briefContent: 'My design process was iterative and user-centric. I structured the app content through information architecture, created wireframes and prototypes, and developed the visual design system. I developed a brand voice that is [[reliable, comfy, and intelligent]], with the tagline  [["Curiosity Stumbls, Knowledge Unfolds"]]  capturing the spirit of discovery.',
        images: [
          {
            src: '/media/projects/stumbldoor/sections/4-informationarchi.jpg',
            alt: 'Design Process',
          },
          {
            src: '/media/projects/stumbldoor/sections/5-wireframe.jpg',
            alt: 'Design Process',
          },
          {
            src: '/media/projects/stumbldoor/sections/5-wireframe2.jpg',
            alt: 'Design Process',
          },
          {
            src: '/media/projects/stumbldoor/sections/6-designprocess.jpg',
            alt: 'Design Process',
          },
        ] 
      },

      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: 'From Chaotic Exploration to Structured Discovery',
        briefContent: 'Through multiple iteration sessions, I refined the design with three key strategic decisions: [[Content-First Strategy]] (removing decorative backgrounds to let book covers take center stage), [[Modular Scalability]] (abandoning skeuomorphism in favor of a Grid system to accommodate thousands of books), and [[Progressive Disclosure]] (using "Stack" format to guide user interaction).',
        icon: '🔄',
        content: [
          '**Content-First Strategy**: I decided to remove decorative backgrounds and let book covers become the main focus. This approach prioritizes content over visual decoration, making it easier for users to discover and engage with books.',
          '**Modular Scalability**: I abandoned skeuomorphic design in favor of a Grid system, enabling the platform to accommodate thousands of books efficiently. This modular approach ensures the interface remains clean and functional as the library collection grows.',
          '**Progressive Disclosure**: Instead of displaying all books at once, I implemented a "Stack" format that guides users to click and explore. This approach reduces cognitive load and creates a more engaging discovery experience.'
        ],
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/stumbldoor/sections/iteration1.png',
            alt: 'Iteration 1'
          },
          {
            src: '/media/projects/stumbldoor/sections/iteration2.png',
            alt: 'Iteration 2'
          },
        ] 
      },

      {
        id: 'final',
        title: 'Final Showcase & Impact',
        sectionTag: 'Final Showcase & Impact',
        mainTitle: 'A New Chapter for Libraries',
        briefContent: 'The aim is simple: turn the record number of library-card sign-ups into people who actually walk back in. By tying the digital and physical together, Stumbldoor gives a screen-native generation a reason to close the [[21.2% gap]] in physical visits, and a way to enjoy the library once they do.',
        icon: '🚀',
        imageDisplayMode: 'single', // 单图模式
        images: [
          {
            src: '/media/projects/stumbldoor/sections/8-final.jpg',
            alt: 'App home screen'
          },
          {
            src: '/media/projects/stumbldoor/sections/8-final2.jpg',
            alt: 'Book discovery interface'
          },
          {
            src: '/media/projects/stumbldoor/sections/8-final3.jpg',
            alt: 'Book discovery interface'
          },
          {
            src: '/media/projects/stumbldoor/sections/8-final4.jpg',
            alt: 'AR Assist Interface'
          },
        ]
      },

      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: 'Reflection',
        mainTitle: 'Reflection & Future Roadmap',
        briefContent: 'Key learnings and the path forward for Stumbldoor.',
        icon: '💭',
        images: [
          {
            src: '/media/projects/stumbldoor/sections/reflection.png',
            alt: 'Reflection'
          },
        ]
      },
    ]
  };
