// petiboxy
export const petiboxy = {
    id: 'petiboxy',
    year: '2025',
    featured: true, order: 4, // 提进 Selected Work · 第 4 位
    title: { en: 'Petiboxy Charity Platform', zh: 'Petiboxy 宠物救助平台' },
    subtitle: { en: 'Connecting Love, Saving Lives', zh: '连接爱心，拯救生命' },
    categories: ['UIUX', 'Product Design', 'Research'],
    tags: ['Mobile App', 'Charity Platform', 'Pet Rescue', 'User Experience Design'],
    techTags: ['#Figma', '#UI/UX Design', '#Mobile App', '#Product Design'],
    
    thumbnail: '/media/projects/petiboxy/hero.png',
    brief: { en: 'A comprehensive pet rescue ecosystem connecting people with pets in need, supporting rescue organizations, and building a compassionate community.', zh: '一个连接求助宠物与领养者、支持救助机构、共建爱心社区的宠物救助生态平台。' },
    
    heroImage: '/media/projects/petiboxy/hero.png',
    heroVideo: null,
    
    domain: [
      { en: 'Mobile App Feature Module', zh: '移动应用功能模块' },
      { en: 'Charity Platform', zh: '公益平台' },
      { en: 'Pet Rescue', zh: '宠物救助' }
    ],
    form: [
      { en: 'UI/UX Design', zh: 'UI/UX 设计' },
      { en: 'Product Design', zh: '产品设计' },
      { en: 'Research', zh: '用户研究' }
    ],
    collaborators: [],
    meta: {
      role: 'UX/UI & Product Designer',
      team: 'Solo',
      stack: 'Figma · UX Research · Prototyping',
    },

    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(146, 51, 75) 0%,rgb(231, 74, 74)  100%)',
      subtitleGradient: 'linear-gradient(135deg, #FF7675 0%, #E85C5C 100%)',
      underlineGradient: 'linear-gradient(135deg, #FF7675 0%, #E85C5C 100%)',
      textHighlightColor: '#FF7675',
      darkColor: '#333333',
      lightColor: '#FF7675',
      heroStyle: 'light' // 'light' for white background, 'gradient' for gradient background
    },
    
    overview: {
      mainTitle: { en: 'Building a Comprehensive Pet Rescue Ecosystem', zh: '构建完整的宠物救助生态' },
      briefContent: { en: 'Petiboxy is a pet fresh-food brand; I extended it into a charity platform aimed at China\'s [[90 million stray animals]]. Most people who would adopt never do, because there is no trustworthy place to start. The app gives the [[60% who want to adopt]] a real way in, and gives rescue groups the visibility and funding they struggle to find.', zh: '延续宠物鲜食品牌 Petiboxy,我把它扩展成一个面向中国 [[9000 万流浪动物]]的公益平台。很多想领养的人最终没有领养,只因为没有一个可信赖的入口。这个 App 给那 [[60% 想领养的人]]一条真正可行的路径,也给救助机构它们一直缺的曝光与资金。' },
      challenges: [
        { en: 'How might we connect 90 million stray animals with people who want to help?', zh: '如何连接 9000 万流浪动物与愿意帮助的人？' },
        { en: 'How might we reduce the adoption barriers that prevent 60% of willing adopters?', zh: '如何降低阻碍 60% 有意领养者的门槛？' },
        { en: 'How might we support rescue organizations with funding and visibility?', zh: '如何从资金与曝光上支持救助机构？' },
        { en: 'How might we create a trustworthy, accessible platform for pet rescue?', zh: '如何打造可信、易用的宠物救助平台？' }
      ]
    },
    
    sections: [
      {
        id: 'problem',
        title: 'Problem Statement',
        sectionTag: 'The Crisis',
        mainTitle: '90 Million Stray Animals in China Await For Help',
        briefContent: 'Behind every statistic is a life. [[90 million stray animals]] (50 million cats, 40 million dogs) [[face abandonment, disease, and uncertain futures]]. Yet most people don\'t know where to find them or how to help. This represents [[1/5 of the world\'s stray animal population]], with consistent high numbers since 2021.',
        icon: '💡',
        content: [
          'Behind every statistic is a life. These animals face abandonment, disease, and uncertain futures. Yet most people don\'t know where to find them or how to help.',
          'The scale of the crisis includes 50 million stray cats, 40 million stray dogs, representing 1/5 of the world\'s stray animal population, with consistent high numbers since 2021.'
        ],
        images: [
          {
            src: '/media/projects/petiboxy/problem2.png',
            alt: 'user research',
          }
        ]
      },
      
      {
        id: 'research',
        title: 'User Research',
        sectionTag: 'User Research',
        mainTitle: 'Why 60% Want to Adopt But Can\'t',
        briefContent: 'People want to adopt; the path just doesn\'t exist. [[60% of potential pet owners]] say they would adopt if a reliable platform existed, yet [[43.9%]] of pets still come from pet stores and [[only 35%]] from adoption. The willingness is there. What\'s missing is [[access]].',
        icon: '🔍',
        content: [
          'Despite strong adoption intent, structural barriers prevent most people from adopting. The missing link: a trustworthy, accessible platform.',
          '60% of potential pet owners express willingness to adopt if a reliable platform existed. However, 43.9% of current pets come from pet stores, only 35% are acquired through adoption, and 21.1% come from other sources. Willingness is not the bottleneck. Access is.'
        ],
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/petiboxy/userresearch.png',
            alt: 'user research',
          }
        ]
      },
      
      {
        id: 'solution',
        title: 'The Solution',
        sectionTag: 'The Solution',
        mainTitle: 'Three Core Features to Address the Crisis',
        briefContent: 'The platform tackles three barriers: [[information is scattered]] across WeChat, Weibo and TikTok; [[adopters don\'t know where to look]]; and [[rescue groups lack funding and visibility]]. Three features answer them: [[Baby Come Home]] reunites lost pets, [[Adoption & Rescue]] matches pets with people, and [[Charity Organizations]] connects donors to verified rescues.',
        icon: '💡',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'Find Lost Pets Easily',
            detail: 'Centralized lost pet reporting system with community-powered search network and geo-location search. Help reunite lost pets with their families.',
            image: '/media/projects/petiboxy/baby-come-home.png',
          },
          {
            name: 'Convenient Adoption Process',
            detail: 'Comprehensive pet profiles with health records, personality descriptions, and photos. Connect adopters with their perfect companion.',
            image: '/media/projects/petiboxy/adoption-rescue.png',
          },
          {
            name: 'Easy Connection to Rescue Organizations',
            detail: 'Verified rescue organization directory with integrated fundraising. Support professional rescue work with transparency and accountability.',
            image: '/media/projects/petiboxy/charity-orgs.png',
          }
        ]
      },
      
      {
        id: 'design-philosophy',
        title: 'Design Approach & Iteration',
        sectionTag: 'Design Approach & Iteration',
        mainTitle: 'Built on Three Core Principles',
        briefContent: 'Three principles shaped it: [[Integrated Pet Profiles]] tie the charity features to Petiboxy\'s existing nutrition app, so one health record follows a pet through adoption; [[Multi-Channel Rescue]] lets people help at any level, whether that means finding, adopting, or supporting an org; and [[Community-Driven Growth]] leans on real adoption stories to build trust.',
          icon: '🎨',
        content: [
          'Principle 1: Integrated Pet Profiles - Seamless connection between Petiboxy\'s nutrition app and charity features. Complete pet health records support better adoption matches.',
          'Principle 2: Multi-Channel Rescue - Lost pet finding + adoption matching + organization support. Users can participate at any comfort level.',
          'Principle 3: Community-Driven Growth - Users share pet stories and success narratives. Social proof builds trust and encourages participation through emotional storytelling.'
        ],
        imageDisplayMode: 'single',
        images: [
          {
            
          }
        ]
      },
      
      {
        id: 'final-showcase',
        title: 'Final Showcase',
        sectionTag: 'Final Showcase',
        mainTitle: 'Every Life Matters',
        briefContent: 'The bigger goal is a shift in how China gets its pets: from buying to adopting. If even a fraction of the [[60% who want to adopt]] find their way in, the [[90 million strays]] number starts to move. That is what the platform is built to make possible.',
        icon: '🚀',
        content: 'Together, we can transform 90 million lives. One adoption, one rescue, one act of kindness at a time. Petiboxy creates a platform where love connects, lives are saved, and communities grow stronger through compassion and responsibility. The platform represents a shift from purchase-based to adoption-based pet culture, reducing stray animal populations and building a more compassionate society.',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/petiboxy/final1.png',
            alt: 'Final Visual',
          },
          {
            src: '/media/projects/petiboxy/final2.png',
            alt: 'Final Visual',
          }, 
          {
            src: '/media/projects/petiboxy/final3.png',
            alt: 'Final Visual',
          },
        ]
      },
      
      {
        id: 'impact',
        title: 'Expected Impact',
        sectionTag: 'Expected Impact',
        mainTitle: 'Platform Success Metrics',
        briefContent: 'The platform aims for measurable social impact: [[+45% Lost Pets Found]] (improvement in reunion success rate), [[+60% Adoption Rate]] (increase in adoption-over-purchase decisions), [[+75% Org Support]] (growth in funding and resources), and [[80% Community Engagement]] (users participate in platform activities). Long-term vision: Shift China\'s pet culture from purchase-based to adoption-based.',
        icon: '📊',
        content: [
          'Measurable Social Impact:',
          '+45% Lost Pets Found - Improvement in reunion success rate',
          '+60% Adoption Rate - Increase in adoption-over-purchase decisions',
          '+75% Org Support - Growth in funding and resources',
          '80% Community Engagement - Users participate in platform activities',
          'Long-term vision: Shift China\'s pet culture from purchase-based to adoption-based, reducing stray animal populations and building a more compassionate society.'
        ],
          imageDisplayMode: 'single',
          images: [
            {
            src: '/media/projects/petiboxy/impact.png',
            alt: 'Expected Outcomes',
            caption: 'Platform success metrics and expected impact'
          }
        ]
      }
    ]
  };
