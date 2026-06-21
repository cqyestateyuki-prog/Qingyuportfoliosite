// eternal-dreams
export const eternalDreams = {
    id: 'eternal-dreams',
    year: '2024',
    title: { en: 'Eternal Dreams', zh: '永恒之梦' },
    subtitle: { en: 'Third Person Role Playing Game', zh: '第三人称角色扮演游戏' },
    categories: ['Game', 'Programming','3D Art',], // 多分类支持
    tags: ['Game Design', 'Unity', '3D Environment Design', 'C#'],
    techTags: ['#Unity', 'C#', '#Maya', '#Blender', '#3D Modeling'],
    
    thumbnail: '/media/projects/eternaldreams/HeroCover.jpg',
    brief: { en: 'A Third Person 3D Role-playing game made in Unity. You are the chosen adventurer, who came into this fantastic world.', zh: '一款用 Unity 制作的第三人称 3D 角色扮演游戏。你是被选中的冒险者，踏入这片奇幻世界。' },
    
    heroImage: '/media/projects/eternaldreams/HeroCover.jpg',
    heroVideo: null,  // 游戏可以有预告片
    
    domain: [
      { en: 'Video Game', zh: '电子游戏' },
      { en: 'Entertainment', zh: '娱乐' },
      { en: '3D Art', zh: '3D 美术' }
    ],
    form: [
      { en: 'Game Design & Development', zh: '游戏设计与开发' },
      { en: 'Level Design', zh: '关卡设计' },
      { en: '3D Modeling', zh: '3D 建模' },
      { en: 'C# Programming', zh: 'C# 编程' }
    ],
    collaborators: ['Solo Project','University of Florida'],
    
    // ========== 项目颜色配置 ==========
    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 蓝色到青色
      subtitleGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 蓝色到青色
      underlineGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 蓝色到青色
      darkColor: 'rgb(27, 74, 168)', // mainTitle 使用的深色（蓝色）
      lightColor: '#4ECDC4' // sectionTag 使用的浅色（青色）
    },
    
    overview: {
      mainTitle: { en: 'A Journey Through Fantasy and Dreams', zh: '穿越幻想与梦境之旅' },
      content: { en: "Eternal Dream takes place in a fantasy world known as 'Dream', featuring an art style that leans towards 3D anime and is non-realistic. Players awaken in this fantasy-styled world, as if they are in an eternal nightmare/dream. They need to defeat unknown monsters and travel to towns as beautiful as those in fairy tales. Players will start their journey, and end up going home or being the hero of this world.", zh: '《永恒之梦》发生在名为「梦」的幻想世界，采用偏 3D 动漫的非写实美术风格。玩家在奇幻世界中苏醒，仿佛置身永恒梦魇/美梦，需击败未知怪物、造访如童话般的小镇，开启旅程，最终归家或成为世界英雄。' },
      challenge: { en: 'How to create an engaging narrative that adapts to player choices?', zh: '如何创造能随玩家选择而变化的引人入胜的叙事？' }
    },
    
    sections: [
      {
        id: 'mechanics',
        title: 'Game Mechanics',
        mainTitle: 'Two Contrasting Worlds of Dream and Fantasy',
        icon: '🎮',
        content: 'The dreamland is divided into two different parts, a dangerous "dream" environment where bad creature skeletons live; and a beautiful fantasy village environment where good creatures live. As a third person role-playing game, the player will act as an archer, fight against the skeletons in bad "dream" and enjoy peach in the good "dream."',
        images: [
          {
            src: '/media/projects/eternaldreams/environment/largeshot.png',
            alt: 'Fantasy village'
          },
          {
            src: '/media/projects/eternaldreams/environment/4.png',
            alt: 'Dream world'
          }
        ]
      },

      {
        id: 'inspirations',
        title: 'Concept and Inspirations',
        mainTitle: 'From Personal Dreams to Game Reality',
        icon: '⚙️',
        content: "The core idea of this game, Eternal Dream,stems from my own dreams, as I am a person with a vivid imagination who frequently experiences fantastical dreams. These dreams often involve battling alongside or against a myriad of mythical creatures, leaving me questioning their reality upon awakening. Inspired by this personal experience, I created a game that encapsulates the essence of navigating through a dreamlike world, offering players the choice to either escape the dream or become engrossed within it.",
        imageDisplayMode: 'two-column', // 网格模式
        images: [
          {
            src: '/media/projects/eternaldreams/0.jpg',
            alt: 'Concept art'
          },
          {
            src: '/media/projects/eternaldreams/0-1.jpg',
            alt: 'Concept art2'
          }
        ]
      },
      {
        id: 'narrative',
        title: 'Story and Narrative',
        mainTitle: 'Awakening in an Unknown Dream World',
        icon: '🎨',
        content:[
          "Players awaken in an unknown place, believing themselves to be in a nightmare. Surrounded by a dangerous, dark forest inhabited by skeleton monsters, they embark on a journey to explore this world. By defeating the skeletons, players eventually reach a village where elves and humans live in harmony, and are hailed as heroes for protecting the village from the skeletons.",
          "The primary goal for player experience in Eternal Dream is to immerse players in a vivid, dreamlike world that blurs the lines between fantasy and reality, challenging them to question what is real and what is not. We aim to provide an experience that is both captivating and thought-provoking, where players feel a deep sense of adventure and exploration as they navigate through the contrasting environments of the dream world.",
        ],
        images: [
          {
            src: '/media/projects/eternaldreams/environment/3.png',
            alt: 'Concept art'
          },
          {
            src: '/media/projects/eternaldreams/dialogue.png',
            alt: 'Concept art'
          },
        ]
      },

      {
        id: 'levelEnvironmentDesign',
        title: 'Level and Environment Design',
        mainTitle: 'Genshin-Inspired 2D Style Rendering',
        icon: '⚙️',
        content: [
          "The game comprises two distinct levels: a gloomy, dilapidated forest filled with low visibility and skeleton monsters that players must defeat; and a village inhabited by elves and humans, characterized by harmony and beauty. Unique to this game, the elves' homes are built into the mountains with distinctive shapes, made from trees, leaves, and mushrooms, contrasting with the human's more conventional houses. The focus on environmental construction utilized Maya and Blender for building different houses, trees, decorations, and flora, with shaders applied in Unity to render the game world in a cute, two-dimensional style.",
          "I was inspired by the two-dimensional game environment style of Genshin Impact and aimed to achieve a similar effect. However, I had no prior knowledge in this area. Through self-study on YouTube, I learned how to use shaders in Unity to achieve this style of rendering. Completing the entire game construction alone was time-consuming. Initially, my plan also included developing the game's storyline, quests, and combat system, but due to time constraints, I focused mainly on environment design and polishing. I am still satisfied with the outcome.",
        ],
        imageDisplayMode: 'two-column', // 网格模式
        images: [
          {
            src: '/media/projects/eternaldreams/1.png',
            alt: 'Environment Art Design'
          },
          {
            src: '/media/projects/eternaldreams/2.png',
            alt: 'Environment Art Design2'
          },
          {
            src: '/media/projects/eternaldreams/3.png',
            alt: 'Environment Art Design3'
          },
          {
            src: '/media/projects/eternaldreams/4.png',
            alt: 'Environment Art Design4'
          },
          {
            src: '/media/projects/eternaldreams/5.png',
            alt: 'Environment Art Design5'
          },
          {
            src: '/media/projects/eternaldreams/6.png',
            alt: 'Level Design'
          },
          {
            src: '/media/projects/eternaldreams/7.png',
            alt: 'Level Design2'
          },
          {
            src: '/media/projects/eternaldreams/Shader3.png',
            alt: 'Shader3'
          },
          {
            src: '/media/projects/eternaldreams/Shader1.png',
            alt: 'Shader'
          }
        ]
      },

      {
        id: 'showcase',
        title: 'Final Showcase',
        mainTitle: 'A Journey of Growth and Discovery',
        icon: '🏆',
        content: "The key takeaways from the Eternal Dream project include the importance of a cohesive game world that captivates players' imaginations, and the balance between exploration and combat. This project taught me the significance of environmental storytelling and how it can be used to enhance the narrative and player immersion. The challenges faced during development, particularly in achieving a specific art style and refining gameplay mechanics, have greatly contributed to my growth as a game designer. This experience has improved my skills in environmental design and narrative construction to create a more engaging and enjoyable game. Eternal Dream represents not just a journey for the player, but also a significant step in my journey as a game designer, underscoring the importance of vision, adaptability, and the continuous pursuit of improvement.",
        images: [
          {
            src: '/media/projects/eternaldreams/environment/StartScreen.png',
            alt: 'Game Start Screen'
          },
          {
            src: '/media/projects/eternaldreams/environment/closeup.png',
            alt: 'Closeup Environment'
          },
          {
            src: '/media/projects/eternaldreams/environment/closeup2.png',
            alt: 'Closeup Environment2'
          },
          {
            src: '/media/projects/eternaldreams/environment/closeup3.png',
            alt: 'Closeup Environment3'
          },
          {
            src: '/media/projects/eternaldreams/environment/largeshot2.png',
            alt: 'Large Shot'
          },
          {
            src: '/media/projects/eternaldreams/environment/largeshot.png',
            alt: 'Large Shot2'
          },
          {
            src: '/media/projects/eternaldreams/environment/5.png',
            alt: 'Large Shot3'
          },
          {
            src: '/media/projects/eternaldreams/environment/4.png',
            alt: 'Battle'
          },
        ]
      }
    ]
  };
