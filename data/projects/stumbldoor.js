// stumbldoor
export const stumbldoor = {
    // ========== Stumbldoor Project 图书系统==========
    id: 'stumbldoor',
    year: '2024',
    featured: true, order: 5, // Selected Work · 第 5 位
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
      whyIBuild: {
        en: 'I grew up loving libraries, and Stumbldoor is my attempt to [[make a library feel worth walking into again]], by making discovery feel a bit more like play.',
        zh: '我从小就爱泡图书馆，做 Stumbldoor 是想[[让图书馆重新值得走进去]]，办法是把找书这件事变得更像玩。'
      }
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
        mainTitle: {
          en: 'The Crisis of Libraries',
          zh: '图书馆的危机'
        },
        challenges: [
          {
            en: 'How might we make libraries more relevant, inclusive, culturally dynamic & appealing in the future?',
            zh: '如何让未来的图书馆重新贴近生活，容得下不同的人，有文化上的活力，也让人真的想去？'
          },
          {
            en: 'How might we bridge the gap between physical and digital library experiences?',
            zh: '如何把实体图书馆和数字图书馆的体验接上？'
          },
          {
            en: 'How might we encourage users to discover new genres and authors?',
            zh: '如何让人主动去碰那些自己原本不会去搜的门类和作者？'
          },
          {
            en: 'How might we address the 21.2% decline in physical library visits?',
            zh: '如何应对到馆人次 21.2% 的下滑？'
          }
        ],
        briefContent: {
          en: 'From 2009 to 2022, physical library visits declined by [[21.2%]]. Yet library card registrations [[peaked in 2019]]. This paradox reveals a critical gap: [[people want to read, but the traditional library experience is failing them]]. Libraries face an [[identity crisis]]. Younger generations still value physical books, but they are intimidated by formal library spaces, struggle to navigate complex layouts, and want a more personal, social way to read.',
          zh: '2009 到 2022 年，到馆人次掉了 [[21.2%]]，办证量却偏偏在 [[2019 年创下新高]]。两个数字放在一起只说明一件事：[[人还想读书，是图书馆这套老体验没接住他们]]。图书馆正卡在[[身份危机]]里。年轻一代并不排斥纸质书，但正经八百的馆内空间让他们发怵，复杂的分区一进去就找不着北，而他们想要的读法更私人，也更想跟人分享。'
        },
        icon: '💡',
        images: [
          {
            src: '/media/projects/stumbldoor/sections/research.png',
            // 这一节只有一张图,标题就让它落到本节大标题(眉标已经是 Problem Statement 了),
            // alt 保持描述性给读屏用
            alt: 'Library visit decline and card registration data',
          },
        ]  // 可以没有图片
      },
      {
        id: 'research',
        title: 'User Research & Insights',
        sectionTag: 'User Research & Insights',
        mainTitle: {
          en: 'Understanding Library Users & Readers',
          zh: '先弄明白读者要什么'
        },
        briefContent: {
          en: 'Our team conducted comprehensive research across [[4 NYC libraries]], surveying [[135 users]] and conducting [[8 in-depth interviews]]. Our findings revealed three critical barriers: [[intimidating spaces, confusing navigation, and lack of personalization.]]',
          zh: '我们跑了[[纽约的 4 家图书馆]]，回收 [[135 份问卷]]，做了 [[8 场深度访谈]]。结果指向三道坎：[[空间让人不敢进门、找本书像走迷宫、给谁看都是同一批推荐。]]'
        },
        icon: '💡',
        imageGroups: [
          {
            displayMode: 'single',
        images: [
          {
                src: '/media/projects/stumbldoor/sections/userresearch.png',
                hideInGallery: true, // 首页碎片墙不占格,详情页照旧
                alt: 'Research Summary',
                caption: {
                  en: 'Key research findings and insights',
                  zh: '这一轮研究最关键的几个发现'
                }
              },
            ]
          },
          {
            displayMode: 'two-column',
            images: [
              {
                src: '/media/projects/stumbldoor/sections/2-Fieldsearch2.jpg',
                alt: 'Field Research',
                caption: {
                  en: 'Stavros Niarchos Foundation Library Field Research',
                  zh: 'Stavros Niarchos Foundation Library 实地调研'
                }
          },
          {
            src: '/media/projects/stumbldoor/sections/2-Fieldsearch.jpg',
                hideInGallery: true, // 首页碎片墙不占格,详情页照旧
            alt: 'Field Research',
            caption: {
              en: 'NY Society Library Field Search',
              zh: 'NY Society Library 实地调研'
            }
          },
          {
            src: '/media/projects/stumbldoor/sections/2-Survey.jpg',
                hideInGallery: true, // 首页碎片墙不占格,详情页照旧
            alt: 'Survey Insights',
            caption: {
              en: 'Survey Insights',
              zh: '问卷里读出来的东西'
            }
          },
          {
            src: '/media/projects/stumbldoor/sections/2-affinitymap.jpg',
                hideInGallery: true, // 首页碎片墙不占格,详情页照旧
            alt: 'Affinity Mapping',
            caption: {
              en: 'Affinity Mapping: Synthesizing user insights and pain points',
              zh: '亲和图：把用户的说法和痛点归拢成线索'
            }
          },
        ]
          },
        ]  
      },
      {
        id: 'solution',
        title: 'The Solution',
        sectionTag: 'The Solution',
        mainTitle: {
          en: 'Stumbldoor: Three Pillars of Innovation',
          zh: 'Stumbldoor 的三根支柱'
        },
        briefContent: {
          en: 'Stumbldoor makes browsing something you actually enjoy, and ties the app to the physical library instead of treating them as separate worlds. It rests on three features: [[Scrollstack]] for personalized reading lists, [[Gameful UX]] for achievements and a sense of community, and [[AR Assist]] for finding a book on the shelf.',
          zh: 'Stumbldoor 让「随便翻翻」这件事本身变得好玩，也把 App 和实体馆接成一件事，而不是两个互不相干的世界。撑起它的是三个功能：[[Scrollstack]] 管专属书单，[[Gameful UX]] 管成就和同好之间的热闹，[[AR Assist]] 管把书从书架上找出来。'
        },
        // 三个功能各配一段 GIF,但首页碎片墙只取首帧,而三段 GIF 开头几秒画面几乎一样,
        // 于是那里会出现三张一模一样的图。所以 GIF 标了 hideInGallery,
        // 首页改用这张三合一(每屏取的是各自能代表自己的那一帧)
        images: [
          {
            // 详情页放会动的那份(Media 组件认视频后缀,自动 autoplay/muted/loop)。
            // 碎片墙那边是 <img>,喂不了视频,所以另给一张 poster
            src: '/media/projects/stumbldoor/sections/three-pillars.mp4',
            poster: '/media/projects/stumbldoor/sections/three-pillars.png',
            alt: 'Three Pillars',
            caption: {
              en: 'Scrollstack, Gameful UX and AR Assist, each shown at the moment it does its job.',
              zh: 'Scrollstack、Gameful UX、AR Assist，各自截在最能说明它在干嘛的那一刻。'
            }
          }
        ],
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'Scrollstack',
            description: {
              en: 'Personalized Readlists',
              zh: '只属于你的书单'
            },
            detail: {
              en: 'Designed to gamify the browsing experience, Scrollstack transforms static lists into an interactive, scrolling deck. It invites users to tactilely swipe through recommendations, bringing the serendipitous joy of "stumbling" upon a book to the digital screen.',
              zh: 'Scrollstack 把死板的书单做成一叠能上手滑的卡片。手指往上一推，下一本书就翻了出来。在书架前撞见一本书的那点乐趣，就这样搬进了屏幕。'
            },
            gif: '/media/projects/stumbldoor/sections/Scrollgif.gif',
            hideInGallery: true // 首页改用三合一那张,见本节 images
          },
          {
            name: 'Gameful UX',
            description: {
              en: 'Joy of Reading',
              zh: '读书的乐子'
            },
            detail: {
              en: 'Achievements and reading stats transform reading from solitary to social experience, providing recognition and increasing engagement.',
              zh: '成就和阅读数据让读书从一个人的事，变成可以摆出来跟人说的事。有人看见，就更容易读得下去。'
            },
            gif: '/media/projects/stumbldoor/sections/gameux.gif',
            hideInGallery: true // 首页改用三合一那张,见本节 images
          },
          {
            name: 'AR Assist',
            description: {
              en: 'Find My Book',
              zh: '带你找到那本书'
            },
            detail: {
              en: 'Augmented reality navigator for library layouts that eliminates confusion and reduces time spent searching for books, making physical library visits more enjoyable.',
              zh: '举起手机，AR 会顺着馆内的路线给你指，一直指到书所在的那排架子前。不用再攥着索书号在楼里瞎转，跑一趟图书馆也就没那么累人了。'
            },
            gif: '/media/projects/stumbldoor/sections/ARgif.gif',
            hideInGallery: true // 首页改用三合一那张,见本节 images
          }
        ]
      },
     
      {
        id: 'usermapping',
        title: 'User Mapping',
        sectionTag: 'User Mapping',
        mainTitle: {
          en: 'Designing for Teenagers, College Students and Book Enthusiasts',
          zh: '为青少年、大学生和爱书的人做设计'
        },
        briefContent: {
          en: 'Target users are NYC individuals who possess smartphones and are open to reading, library users and book enthusiasts. I created user personas, journey maps, and user flows to guide the design decisions and ensure the app meets their specific needs.',
          zh: '目标用户是纽约那些有智能手机、也不排斥读书的人：图书馆的常客，还有本来就爱书的。我把用户画像、旅程图和用户流程都过了一遍，后面的每个设计决定都是从这里长出来的，不是凭感觉。'
        },
        icon: '🎨',
        imageDisplayMode: 'single', // 单图模式
        images: [
          {
            src: '/media/projects/stumbldoor/sections/4-userpersona.jpg',
                hideInGallery: true, // 首页碎片墙不占格,详情页照旧
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
        mainTitle: {
          en: 'From Insight to Interface',
          zh: '从洞察走到界面'
        },
        briefContent: {
          en: 'My design process was iterative and user-centric. I structured the app content through information architecture, created wireframes and prototypes, and developed the visual design system. I developed a brand voice that is [[reliable, comfy, and intelligent]], with the tagline  [["Curiosity Stumbls, Knowledge Unfolds"]]  capturing the spirit of discovery.',
          zh: '整个过程是一轮一轮来回改的，每一轮都拿用户的反应说话。我先用信息架构把内容理顺，再做线框和原型，最后搭出视觉系统。品牌调性定成[[可靠、舒服、聪明]]，slogan 是 [[「Curiosity Stumbls, Knowledge Unfolds」]]，说的正是撞见带来的那点惊喜。'
        },
        images: [
          {
            src: '/media/projects/stumbldoor/sections/4-informationarchi.jpg',
            alt: 'Information Architecture',
          },
          {
            src: '/media/projects/stumbldoor/sections/5-wireframe.jpg',
            alt: 'Wireframes',
          },
          {
            src: '/media/projects/stumbldoor/sections/5-wireframe2.jpg',
            alt: 'Wireframes',
          },
          {
            src: '/media/projects/stumbldoor/sections/6-designprocess.jpg',
            alt: 'Design System',
          },
        ] 
      },

      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: {
          en: 'From Chaotic Exploration to Structured Discovery',
          zh: '从漫无边际的乱翻，到有章法的探索'
        },
        briefContent: {
          en: 'Through multiple iteration sessions, I refined the design with three key strategic decisions: [[Content-First Strategy]] (removing decorative backgrounds to let book covers take center stage), [[Modular Scalability]] (abandoning skeuomorphism in favor of a Grid system to accommodate thousands of books), and [[Progressive Disclosure]] (using "Stack" format to guide user interaction).',
          zh: '几轮迭代下来，有三个决定改变了整个设计的走向：[[内容优先]]，把装饰性的背景全撤掉，让封面自己说话；[[模块化扩展]]，放弃拟物，换成装得下上千本书的网格；[[渐进披露]]，用一叠一叠的「Stack」引着用户往下点。'
        },
        icon: '🔄',
        content: [
          {
            en: '**Content-First Strategy**: I decided to remove decorative backgrounds and let book covers become the main focus. This approach prioritizes content over visual decoration, making it easier for users to discover and engage with books.',
            zh: '**内容优先**：我把装饰性的背景删干净，让书的封面成为画面主角。少一层视觉修饰，书本身就更容易被看见、被点开。'
          },
          {
            en: '**Modular Scalability**: I abandoned skeuomorphic design in favor of a Grid system, enabling the platform to accommodate thousands of books efficiently. This modular approach ensures the interface remains clean and functional as the library collection grows.',
            zh: '**模块化扩展**：我放弃了拟物风格，改用网格系统，让平台能从容装下上千本书。往后馆藏越加越多，界面也不会跟着乱掉。'
          },
          {
            en: '**Progressive Disclosure**: Instead of displaying all books at once, I implemented a "Stack" format that guides users to click and explore. This approach reduces cognitive load and creates a more engaging discovery experience.',
            zh: '**渐进披露**：不把所有书一次性摊开，而是叠成一摞，点一下才翻出下一本。一眼要处理的信息少了，翻书这件事反倒更让人想接着往下。'
          }
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
        mainTitle: {
          en: 'A New Chapter for Libraries',
          zh: '图书馆的新一页'
        },
        briefContent: {
          en: 'The aim is simple: turn the record number of library-card sign-ups into people who actually walk back in. By tying the digital and physical together, Stumbldoor gives a screen-native generation a reason to close the [[21.2% gap]] in physical visits, and a way to enjoy the library once they do.',
          zh: '目标很直接：办证的人数已经创了纪录，接下来是让这些人真的走回馆里。Stumbldoor 把数字和实体接在一起，给在屏幕上长大的一代一个理由，去把到馆人次[[少掉的那 21.2%]]补回来，也让他们进了门之后待得住。'
        },
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
        mainTitle: {
          en: 'Reflection & Future Roadmap',
          zh: '回头看，以及接下来'
        },
        briefContent: {
          en: 'Key learnings and the path forward for Stumbldoor.',
          zh: 'Stumbldoor 让我学到的，和接下来打算走的路。'
        },
        icon: '💭',
        images: [
          {
            src: '/media/projects/stumbldoor/sections/reflection.png',
            hideInGallery: true, // 首页碎片墙不占格,详情页照旧
            alt: 'Reflection'
          },
        ]
      },
    ]
  };
