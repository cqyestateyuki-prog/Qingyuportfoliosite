import { useState, useEffect } from 'react';
import { Code, Palette, Gamepad2, Search, BarChart3, Instagram } from 'lucide-react';
import { useLanguage } from '../i18n';

const About = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: t('about.skillUIUX'),
      description: t('about.skillUIUXDesc'),
      color: 'var(--main-blue)'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: t('about.skillGame'),
      description: t('about.skillGameDesc'),
      color: 'var(--main-blue)'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('about.skillMarketing'),
      description: t('about.skillMarketingDesc'),
      color: 'var(--main-blue)'
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: t('about.skillSocial'),
      description: t('about.skillSocialDesc'),
      color: 'var(--main-blue)'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧内容 */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
          <h2 className="text-4xl md:text-5xl font-normal mb-6 gradient-text">
            {t('about.title')}
          </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                {t('about.tag1')}
              </div>
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                {t('about.tag2')}
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                {t('about.tag3')}
              </div>
            </div>
          </div>

          {/* 右侧技能卡片 */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 统计数据 */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: '15+', label: t('about.projectsCompleted') },
            { number: '3+', label: t('about.yearsExperience') }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-normal gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

