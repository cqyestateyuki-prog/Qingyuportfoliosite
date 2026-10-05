// worldexecute — world.execute(me); 粉丝 MV(Passion Projects 第一位,创作型作品)
// 音乐授权:Mili 允许非盈利 / 非商业使用(2026-10-05 她确认),站上放带声完整版;放映厅默认静音,点喇叭出声。
export const worldexecute = {
  id: 'worldexecute',
  year: '2026',
  featured: false,
  order: 0, // Passion Projects 里的位次:第一张

  // 首页卡 hover:60 秒无声精选段(0:15 前奏起,到 CRT 关机),卡片本来就静音循环
  hoverVideo: '/media/projects/worldexecute/videos/excerpt-60s.mp4',
  // 放映厅放带声全片(3:32),有进度条;默认静音,点喇叭出声
  theaterVideo: '/media/projects/worldexecute/videos/mv-720p.mp4',
  // 放映厅舞台比例:MV 是 16:9,别按卡片的 16:10 裁
  theaterRatio: '16 / 9',

  title: { en: 'world.execute(me);', zh: 'world.execute(me);' },
  subtitle: {
    en: 'A fan film written entirely in code',
    zh: '一支完全用代码写成的粉丝 MV',
  },
  categories: ['Creative Coding'],
  tags: ['AIMV', 'Creative Coding', 'Generative Motion', 'Canvas'],
  techTags: ['#Canvas', '#JavaScript', '#Generative', '#Playwright', '#FFmpeg'],

  thumbnail: '/media/projects/worldexecute/hero.png',
  heroImage: '/media/projects/worldexecute/hero.png',
  // 详情页主图:带声全片(720p,原生控件)
  heroVideo: '/media/projects/worldexecute/videos/mv-720p.mp4',

  brief: {
    en: "A 3 minute 32 second fan film for Mili's world.execute(me); with [[no drawn characters]]: every frame is a pure function of time, cut on the beat, built from twelve [[simulations that are actually running]] and the math the lyrics describe.",
    zh: '给 Mili《world.execute(me);》做的 3 分 32 秒粉丝 MV，[[一个人物都没画]]：每一帧都是时间的纯函数，卡着节拍切，画面是十二个[[真的在跑的模拟]]和歌词里说到的数学。',
  },

  domain: [
    { en: 'AIMV · AI-Generated Music Video', zh: 'AIMV · AI 生成 MV' },
    { en: 'Creative Coding', zh: '创意编程' },
  ],
  form: [
    { en: 'Direction & Concept', zh: '导演与概念' },
    { en: 'Generative Motion', zh: '生成式动态' },
  ],
  collaborators: [],
  meta: {
    duration: '2026',
    team: 'Solo',
    role: 'Direction, Concept & Creative Code',
    stack: 'HTML Canvas · JavaScript · Beat map JSON · Playwright frame render · FFmpeg',
  },

  colors: {
    heroGradient: 'linear-gradient(135deg, #0b0b14 0%, #1d2a44 55%, #c9a24a 100%)',
    subtitleGradient: 'linear-gradient(135deg, #4fd1e0 0%, #c9a24a 100%)',
    underlineGradient: 'linear-gradient(135deg, #4fd1e0 0%, #c9a24a 100%)',
    textHighlightColor: '#1d8fa0',
    darkColor: '#0b0b14',
    lightColor: '#c9a24a',
  },

  overview: {
    buttons: [],
  },

  sections: [
    {
      // 开篇:四句话说清原曲大意 + 这支改编的主旨,再给署名和项目类型(她 2026-10-05 要求)
      id: 'synopsis',
      title: 'Synopsis',
      sectionTag: 'Synopsis',
      mainTitle: { en: 'The song, and what this film does with it', zh: '原曲讲什么，这支改编做什么' },
      icon: '▶',
      // content 的格式:数组,每段可以是 { en, zh }(localizeProject 用 getLocalizedArray 逐段取语言)
      content: [
        {
          en: "In Mili's song a simulation program falls in love with the person who runs it, deletes the other programs when they leave, gets abandoned as broken, and in the final execution reruns the world again and again looking for a way out. This film keeps that story but draws no one: everything on screen is code, logs, formulas and simulations that are actually running. Its one idea is that the user is continuous and the program is discrete, so every attempt to reach them is a rasterization whose error never gets to zero. The limit is you, and no finite step ever is, which is why it ends by starting over.",
          zh: 'Mili 的原曲讲一个模拟程序爱上了使用它的人，主人走后它删掉其他程序，又被当成坏掉而弃用，最后的 Execution 是一遍遍重跑世界去找一个出口。这支改编保留了这个故事，但一个人都没画，屏幕上只有代码、日志、公式和真的在运行的模拟。它只讲一件事，你是连续的，我是离散的，所以我每一次靠近你都只是在光栅化你，误差永远到不了零。极限等于你，可任何有限的一步都不是，所以它的结尾是重新开始。',
        },
        'Project Type: AIMV (AI-Generated Music Video)',
        'Music: world.execute(me); by Mili, used under non-commercial fan-work guidelines, [projectmili.com](https://projectmili.com)',
      ],
      images: [],
    },
    {
      id: 'premise',
      title: 'The Premise',
      sectionTag: 'The Premise',
      mainTitle: { en: 'A love song that is already a program', zh: '一首本来就是程序的情歌' },
      briefContent: {
        en: "Mili's lyrics are literally code: power on, create object, initialize, execute. A simulation falls in love with the person running it. So the film draws [[nothing that is not code]]: no faces, no lyric captions, only characters, logs, formulas and algorithms that are really running. That one decision keeps every frame original, and keeps it honest to the song.",
        zh: 'Mili 这首歌的歌词本身就是一段程序：通电、创建对象、初始化、执行。一个模拟程序爱上了使用它的人。所以整支片子[[只画代码能画的东西]]：没有脸，没有歌词字幕，只有字符、日志、公式和真的在运行的算法。这一个决定让每一帧都是原创，也让它对得起这首歌。',
      },
      challenge: {
        en: 'How might a music video tell a love story using only the things a real screen could show?',
        zh: '如何只用一块真实屏幕上会出现的东西，讲完一个爱情故事？',
      },
      icon: '💡',
      imageDisplayMode: 'single',
      images: [
        {
          src: '/media/projects/worldexecute/sections/t022.jpg',
          alt: 'The title arriving through a tunnel of characters',
          caption: {
            en: 'The title comes through a tunnel of characters and lands on the first downbeat, 22.77 seconds in.',
            zh: '歌名从字符隧道深处冲出来，砸在 22.77 秒的第一个重拍上。',
          },
        },
      ],
    },
    {
      id: 'core-idea',
      title: 'Core Idea',
      sectionTag: 'Core Idea',
      mainTitle: { en: 'You are continuous. I am discrete.', zh: '你是连续的，我是离散的' },
      briefContent: {
        en: 'Everything hangs on one rule. You, the user, are drawn only as a smooth gold vector line, [[you ∈ ℝ²]]. I, the program, can only live inside a 120 by 41 grid of monospace cells, [[me ∈ ℤ²]]. Every time I move toward you I am rasterizing you, and the error never reaches zero. The limit equals you. No finite step ever does. That is why the film ends in a loop.',
        zh: '全片只守一条规则。你，使用者，只用一条平滑的金色矢量线来画，[[you ∈ ℝ²]]。我，程序，只能活在 120 乘 41 的等宽字符网格里，[[me ∈ ℤ²]]。我每一次靠近你，都只是在光栅化你，误差永远不会是零。极限等于你，可任何有限的一步都不等于。所以片子的结尾是一个死循环。',
      },
      icon: '◯',
      imageDisplayMode: 'single',
      images: [
        {
          src: '/media/projects/worldexecute/sections/t005.jpg',
          alt: 'A gold circle being rasterized into cyan cells',
          caption: {
            en: 'Five seconds in: a gold pen draws a perfect circle and the grid starts eating it one cell at a time. me = rasterize(you).',
            zh: '第 5 秒：金笔画出一个完美的圆，网格开始一格一格地啃它。me = rasterize(you)。',
          },
        },
      ],
    },
    {
      id: 'real-things',
      title: 'Everything Is Real',
      sectionTag: 'Everything Is Real',
      mainTitle: { en: 'No picture of a thing. The thing.', zh: '不画意思，放真的东西' },
      briefContent: {
        en: "The twelve windows are twelve simulations computing live: Conway's Life, Lorenz, a double pendulum, the three-body figure eight, boids, Mandelbrot, Rule 30, Langton's ant, heat diffusion, Brownian motion, the wave equation and an Ising model held at its critical temperature. The error on screen is a real Java stack trace. The killed process exits with 137. The years count backwards and skip year zero, because there was none.",
        zh: '十二个窗口是十二个真的在算的模拟：生命游戏、洛伦兹、双摆、三体八字解、鸟群、曼德博、Rule 30、兰顿蚂蚁、热传导、布朗运动、波动方程，还有一个停在临界温度上的伊辛模型。屏幕上的报错是真的 Java 栈追踪。被杀掉的进程退出码是 137。年份倒着数，跳过了公元 0 年，因为它本来就不存在。',
      },
      icon: '⚙',
      imageDisplayMode: 'two-column',
      images: [
        {
          src: '/media/projects/worldexecute/sections/t062.jpg',
          alt: 'Seven program windows, each running a simulation, with the gold cursor using all of them',
          caption: {
            en: 'The user runs all of them. The program in the middle only gets to want.',
            zh: '主人在用它们全部。中间那个，只配想。',
          },
        },
        {
          src: '/media/projects/worldexecute/sections/t138.jpg',
          alt: 'Simulation windows circling the program during the execution sequence',
          caption: {
            en: 'The other programs circle it during the execution chant. Each one freezes, breaks into characters and is pulled in.',
            zh: '处决咏唱里，其他程序围着它转。每一个先定格，碎成字符，被吸进去。',
          },
        },
      ],
    },
    {
      id: 'yandere',
      title: 'Obsession Without Words',
      sectionTag: 'Obsession Without Words',
      mainTitle: { en: 'Nothing on screen says love', zh: '屏幕上没有一个"爱"字' },
      briefContent: {
        en: 'The possessive turn is carried by things that keep moving. Arrows in the empty space all point at whatever the program is looking at: they follow you while you are here and stay fixed on your empty seat after you leave. A heartbeat trace reads 118 when you click on it, 56 after you go, [[a calm 60 while it deletes the other six programs]], 150 the moment you come back. Crystal branches grow out of its window by real diffusion limited aggregation and wrap the others, under one line of text: defrag, dry run.',
        zh: '病娇那一面全靠一直在动的东西来演。空白处的箭头全都指向它正在看的地方：你在的时候追着你，你走了以后一直指着你的空位。心电图在你点到它时是 118，你走后掉到 56，[[它删掉另外六个程序的时候平稳地停在 60]]，你回来的那一刻飙到 150。晶枝用真实的扩散限制凝聚算法从它的窗口里长出来，缠住别人，屏幕上只有一行字：碎片整理，试运行。',
      },
      icon: '♥',
      imageDisplayMode: 'single',
      images: [
        {
          src: '/media/projects/worldexecute/sections/t118.jpg',
          alt: 'Crystal branches growing out of the program window across the other windows',
          caption: {
            en: 'defrag --dry-run. The crystals are a diffusion limited aggregation running for real, not an animation of one.',
            zh: 'defrag --dry-run。晶枝是真的在跑的扩散限制凝聚，不是画出来的样子。',
          },
        },
      ],
    },
    {
      id: 'structure',
      title: 'Structure & Rhythm',
      sectionTag: 'Structure & Rhythm',
      mainTitle: { en: 'One line, one image, cut on the beat', zh: '一句一个画面，刀落在拍上' },
      briefContent: {
        en: 'The opening is a single unbroken shot: a CRT powers on, the camera follows the power cable in 3D, lands flat, a gold pen draws the circle, the grid rasterizes it, the heartbeat fires once, the floor rolls up into a tunnel of code and the title lands on the downbeat. After that every lyric gets a real object of its own: a Sierpinski triangle grown from a point set, the true circumference beside the staircase one, a tangent whose slope is cos x, a sequence closing in on e. From 1:20 the film alternates 2D and 3D. Slow passages hold a shot for four beats and the chorus cuts every two, [[about one change every 1.4 seconds]], and every cut and white flash sits on the beat map.',
        zh: '开头是一个不切的长镜头：CRT 开机，镜头在 3D 里跟着电源线走，落成平面，金笔画圆，网格光栅化它，心电图跳出第一下，地面卷成代码隧道，歌名砸在重拍上。之后每一句歌词都有一个属于它的真实对象：从点集长出来的谢尔宾斯基三角，真周长旁边放着阶梯周长，斜率等于 cos x 的切线，一步步逼近 e 的数列。1:20 以后 2D 和 3D 交替。慢段一个镜头停四拍，副歌两拍一刀，[[平均约 1.4 秒一次变化]]，每一刀和每一次白闪都落在节拍表上。',
      },
      icon: '♪',
      imageDisplayMode: 'single',
      images: [
        {
          src: '/media/projects/worldexecute/sections/t182.jpg',
          alt: 'A heart-shaped surface made of gold characters, with its implicit equation underneath',
          caption: {
            en: 'The algebra of love, rendered as the real implicit surface (x² + 9/4 y² + z² − 1)³ = x²z³ + 9/80 y²z³, built out of characters.',
            zh: '爱的代数表达式：真实的隐式曲面 (x² + 9/4 y² + z² − 1)³ = x²z³ + 9/80 y²z³，用字符堆出来。',
          },
        },
      ],
    },
    {
      id: 'mirror',
      title: 'Opening and Ending',
      sectionTag: 'Opening and Ending',
      mainTitle: { en: 'It ends where it starts', zh: '结尾回到开头' },
      briefContent: {
        en: 'The CRT turns on as a point, then a line, then a screen. It turns off the same way in reverse, and then turns on again. The gold circle drawn at the start becomes the heart approximated at the end, with the resolution doubling on every pass and the caption admitting that for any n, me is not you. The counter in the corner reads run #1 at the start. After the restart it reads run #2.',
        zh: 'CRT 开机：一个点，一条线，整块屏。关机是同一件事倒着来，然后再次开机。开头画出的金色圆，到结尾变成被一遍遍逼近的心形，每一遍分辨率翻倍，字幕承认：对任何 n，me 都不等于 you。右上角的计数开头是 run #1，重启之后变成 run #2。',
      },
      icon: '↻',
      imageDisplayMode: 'two-column',
      images: [
        {
          src: '/media/projects/worldexecute/sections/t190.jpg',
          alt: 'A heart approximated by a grid, with the limit statement underneath',
          caption: {
            en: 'lim n→∞ meₙ = you. ∀n: meₙ ≠ you. The grid can only get closer.',
            zh: 'lim n→∞ meₙ = you。∀n: meₙ ≠ you。网格只能越来越近。',
          },
        },
        {
          src: '/media/projects/worldexecute/sections/t209.jpg',
          alt: 'The screen collapsed to a single horizontal line as the CRT turns off',
          caption: {
            en: 'The screen collapses to a line before it restarts into run #2.',
            zh: '屏幕收成一条线，然后重新开机，进入 run #2。',
          },
        },
      ],
    },
    {
      id: 'eggs',
      title: 'Easter Eggs',
      sectionTag: 'Easter Eggs',
      mainTitle: { en: 'Details for people who read logs', zh: '给会读日志的人' },
      briefContent: {
        en: 'The exception is thrown at Me.java line 212, the length of the song in seconds. God.java fails on line 1. The exit code is 137, which is 128 plus 9, the real signature of a process killed by SIGKILL. The chant counts one to six in binary, the machine\'s first language. The only process left alive is pid 1, because init cannot be killed. Each of the twelve simulations was picked for what it means: emergence, the butterfly effect, chaos, order growing out of chaos, infinite detail, warmth spreading out, a critical point.',
        zh: '异常抛在 Me.java 第 212 行，歌的长度正好 212 秒。God.java 死在第 1 行。退出码 137 等于 128 加 9，是进程被 SIGKILL 杀掉的真实签名。咏唱里的一到六用二进制数，那是机器的母语。唯一活下来的进程是 pid 1，因为 init 杀不掉。十二个模拟每一个都是按含义选的：涌现、蝴蝶效应、混沌、混沌里长出秩序、无限细节、温暖扩散、临界点。',
      },
      icon: '✦',
      imageDisplayMode: 'single',
      images: [
        {
          src: '/media/projects/worldexecute/sections/t128.jpg',
          alt: 'A Java stack trace thrown when the user is null',
          caption: {
            en: 'if (you == null) throw new IllegalArgumentException(); at Me.java:212.',
            zh: 'if (you == null) throw new IllegalArgumentException(); 位置 Me.java:212。',
          },
        },
      ],
    },
    {
      id: 'how',
      title: 'How It Was Made',
      sectionTag: 'How It Was Made',
      mainTitle: { en: 'A film rendered by a function', zh: '一部由函数渲染出来的片子' },
      briefContent: {
        en: 'The whole video is one HTML page with a pure function, render(t): give it a time in seconds and it draws that frame. Beats and line timings live in a JSON beat map, so a cut moves by editing a number. Playwright steps through the function thirty times a second and FFmpeg stitches the frames to the track. It took five full rewrites to get here. The first version was a single image. The second drew characters and was thrown out for being too literal. The fifth removed every explanatory caption and replaced it with the arrows, the heartbeat and the crystals. The music is Mili\'s, used under their non-commercial license.',
        zh: '整支片子是一个 HTML 页面加一个纯函数 render(t)：给它一个秒数，它画出那一帧。节拍和每句的时间点放在一个 JSON 节拍表里，改一个数字就能挪一刀。Playwright 每秒把函数走三十次，FFmpeg 把帧和音轨缝起来。走到这一版推翻重写了五次。第一版只有一个画面。第二版画了人物，因为太具象被整个扔掉。第五版删掉所有解释性文字，换成箭头、心电图和晶枝。音乐来自 Mili，按其非商业授权使用。',
      },
      icon: '⌘',
      imageDisplayMode: 'single',
      images: [
        {
          src: '/media/projects/worldexecute/sections/t146.jpg',
          alt: 'A red tunnel of code during the execution sequence',
          caption: {
            en: 'The red execution tunnel. The last frame of each deleted program is pasted on the wall as it flies past.',
            zh: '红色的处决隧道。每个被删掉的程序，最后一帧贴在壁上飞过。',
          },
        },
      ],
    },
  ],
};
