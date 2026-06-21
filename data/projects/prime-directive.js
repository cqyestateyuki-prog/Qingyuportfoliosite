// prime-directive
export const primeDirective = {
    id: 'prime-directive',
    year: '2024',
    title: { en: 'Prime Directive', zh: '首要指令' },
    subtitle: { en: '2D Action-Platformer Game', zh: '2D 动作平台游戏' },
    categories: ['Game', '2D Art'],
    techTags: ['#Unity', '#Level Design','#Adobe Illustrator','#Adobe Creative Suite'],
    
    thumbnail: '/media/projects/primedirective/Hero3.png',
    brief: { en: 'A 2D Action-Platformer game made in Unity. The player acts as a security bot on a space station, defending the station and defeating all enemies.', zh: '一款用 Unity 制作的 2D 动作平台游戏。玩家扮演空间站上的安保机器人，保卫站点并消灭所有敌人。' },
    
    heroImage: '/media/projects/primedirective/Hero3.png',
    heroVideo: 'https://vimeo.com/654379482',
    
    domain: [
      { en: 'Video Game', zh: '电子游戏' },
      { en: 'Entertainment', zh: '娱乐' },
      { en: 'Art Design', zh: '美术设计' }
    ],
    form: [
      { en: 'Game Design & Development', zh: '游戏设计与开发' },
      { en: 'Level Design', zh: '关卡设计' },
      { en: '2D Art', zh: '2D 美术' }
    ],
    collaborators: ['Serena Cao(Lead Artist & Level Designer)', 'Griffin Mckee(Artist)', 'Tyler C.Mueller(Programmer)','Yifan Zhu(Programmer)'],
    
    colors: {
      heroGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      subtitleGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      underlineGradient: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)'
    },
    
    overview: {
      mainTitle: { en: 'Defending the Zeta Station', zh: '保卫泽塔空间站' },
      content: { en: "As a security robot onboard a deep space station, you were created to stop any threats that may appear. On this fateful day, you have been awoken from stasis sleep to stop a gang of pirates that have overtaken the station. Navigate through the corridors of the Zeta Station, collect weapon upgrades, defeat the invaders, and fulfill your prime directive!", zh: '你是深空站上的安保机器人，被制造用来消灭一切威胁。在这注定的一天，你从休眠中苏醒，去阻止占领空间站的海盗团伙。穿越泽塔站的走廊、收集武器升级、击败入侵者，完成你的首要指令。' },
      challenge: { en: 'How to create an engaging 2D platformer with unique vector graphics and combat mechanics?', zh: '如何用独特的矢量美术与战斗机制打造引人入胜的 2D 平台游戏？' }
    },
    
    sections: [
      {
        id: 'game-mechanics',
        title: 'Game Concept & Mechanics',
        mainTitle: 'Action-Platformer with Weapon Collection',
        icon: '🎮',
        content:[ '"Prime Directive" incorporates exploration and combat within 2D platforming levels. Players can collect power-ups and weapon upgrades to enhance their abilities. The unique mechanics allows player to collect different weapons, affecting gameplay and strategy. The final boss encounter suggests a shift in mechanics to a "shoot-em-up" style, adding variety to the core platforming gameplay.',
        'The core idea of "Prime Directive" is a classic action-platformer experience with a science fiction setting. The game places players in the role of a security robot tasked with defending a space station from a pirate invasion. Inspiration likely comes from classic platformers and sci-fi tropes, such as sentient robots, space stations, and alien pirates, calling back to the golden age of arcade games while incorporating modern game mechanics.',
        ],
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/primedirective/Illustration.jpg',
            alt: 'Concept Art',
            caption: 'Space Illustration'
          },
          {
            src: '/media/projects/primedirective/CharacterDesign.png',
            alt: 'Character Design',
            caption: 'Character Design & Illustration'
          },
          {
            src: '/media/projects/primedirective/EnemyDesign.jpg',
            alt: 'Enemy Design',
            caption: 'Enemy Design'
          },
        ]
      },

      {
        id: 'storyline-narrative',
        title: 'Storyline and Narrative',
        mainTitle: 'A Security Robot\'s Mission',
        icon: '📖',
        content: 'The narrative follows a security robot activated to defend the Zeta Station against pirates. As the robot progresses through levels, it encounters various enemies. The storyline unfolds through level progression, culminating in a final boss battle.',
        imageDisplayMode: 'grid',
        images: [
          {
            src: '/media/projects/primedirective/Narrative.png',
            alt: 'Story Scene 1',
          },
          {
            src: '/media/projects/primedirective/Narrative2.png',
            alt: 'Story Scene 2',
          }
        ]
      },

      {
        id: 'level-environment',
        title: 'Level and Environment Design',
        mainTitle: 'Vector Graphics Space Station Corridors',
        icon: '🏗️',
        content: 'I crafted 2D levels set within the network of passageways that make up Zeta Station. Drawing inspiration from cinematic depictions of space station corridors and spacecraft interiors, I designed the levels with a vector graphic style. To enrich the backdrop and add depth to the environment, numerous windows have been integrated, through which dynamic cosmic scenes are visible, creating a sense of image parallelism. The adversaries are modeled after traditional alien archetypes and spaceships in final boss battle, supplemented with various drones, and flying objects serving as additional enemies. This combination not only enhances the visual appeal but also diversifies the gameplay experience.',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/primedirective/LevelDesign.png',
            alt: 'Level Design 1',
            caption: 'Space station corridor design with vector graphics'
          },
          {
            src: '/media/projects/primedirective/LevelDesign2.png',
            alt: 'Level Design 2',
          },
        ]
      },

      {
        id: 'challenges-solutions',
        title: 'Challenges and Solutions',
        mainTitle: 'Choosing Vector Graphics Over Traditional Styles',
        icon: '⚡',
        content: 'A recurrent challenge in game design is the task of infusing familiar mechanics with a fresh and captivating allure. Many science fiction games conventionally gravitate towards pixel art or 3D photorealistic styles. In our endeavor, we opted for a vector graphic art style, which imparts a vibrant and distinct visual character to the project. This approach yields a cleaner and more individualistic aesthetic, setting our game apart and enhancing its uniqueness.',
      },

      {
        id: 'player-experience',
        title: 'Player Experience Goals',
        mainTitle: 'Intense Combat-Centric Action',
        icon: '🎯',
        content: 'The primary ambition for players of "Prime Directive" is to deliver an exhilarating combat-centric gaming experience. The game is designed to immerse players in intense shootouts, challenging them to survive onslaughts from multiple enemies and to effectively defend the station. Emphasis is placed on mastering the shooting mechanics, and strategically utilizing the environment to ensure the station\'s security. The aim is to provide a thrilling sense of achievement through overcoming the escalating challenges presented throughout the game.',
      },

      {
        id: 'final-showcase',
        title: 'Final Showcase',
        mainTitle: 'Thrilling Combat and Station Defense',
        icon: '🚀',
        content: 'The objective for players within "Prime Directive" is to revel in a thrilling combat experience, focusing on the satisfaction that comes from engaging shootouts. Players are tasked to protecting the Zeta Station. The design of the game is such that it not only tests the players\' reflexes and tactical skills but also immerses them in a narrative of survival and defense. This player-centric approach to game design ensures that those who embark on the "Prime Directive" journey will find themselves captivated by the intense action and the rewarding feeling of safeguarding their space station against formidable adversaries.',
        images: [{
          src: '/media/projects/primedirective/Hero.png',
          alt: 'Boss Battle',
          caption: 'Final boss encounter with alien spaceships and drones'
        },
        {
          src: '/media/projects/primedirective/Hero2.png',
          alt: 'Finished Gameplay',
          caption: 'Finished Gameplay'
        }
      ]
      }
    ]
  };
