import { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import MoonIcon from '../hud/MoonIcon';
import { useLanguage } from '../i18n';

const Contact = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      // 阈值 0:移动端区块高于视口时也能可靠触发淡入(避免标题/表单卡在 opacity-0)
      { threshold: 0 }
    );

    const section = document.querySelector('#contact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    alert(t('contact.successMessage'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      content: 'cqyestateyuki@gmail.com',
      link: 'mailto:cqyestateyuki@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.location'),
      content: 'New York, NY',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/cqyestateyuki-prog',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/qingyu-cao-b1421b175/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-20 lg:px-28">
        {/* 标题 */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* HUD 区块标签(与 Work 章节统一) */}
          <p
            className="text-[11px] font-medium tracking-[0.3em] uppercase mb-4 font-['Poppins']"
            style={{ color: 'var(--section-tag)' }}
          >
            <MoonIcon /> 03 · {t('chapters.contact')} ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-normal mb-6"
            style={{ color: 'var(--text-hero)' }}
          >
            {t('contact.title')}
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-body)' }}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 联系信息 */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-semibold mb-8" style={{ color: 'var(--text-hero)' }}>
              {t('contact.getInTouch')}
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`flex items-center space-x-4 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 100}ms`,
                    background: 'var(--card-glass-bg)',
                    border: '1px solid var(--card-glass-border)',
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: 'var(--custom-purple)' }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--text-hero)' }}>{info.title}</h4>
                    <a
                      href={info.link}
                      className="hover:text-[var(--text-accent)] transition-colors"
                      style={{ color: 'var(--text-body)' }}
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* 社交媒体链接 */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-hero)' }}>
                {t('contact.followMe')}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:text-[var(--text-accent)] backdrop-blur-sm"
                    style={{
                      color: 'var(--text-body)',
                      background: 'var(--card-glass-bg)',
                      border: '1px solid var(--card-glass-border)',
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div
              className="rounded-xl p-8 backdrop-blur-md"
              style={{
                background: 'var(--surface-scrim)',
                border: '1px solid var(--card-glass-border)',
              }}
            >
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-hero)' }}>
                {t('contact.sendMessage')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-body)' }}>
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      style={{
                        background: 'var(--card-glass-bg)',
                        border: '1px solid var(--card-glass-border)',
                        color: 'var(--text-hero)',
                      }}
                      placeholder={t('contact.yourName')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-body)' }}>
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      style={{
                        background: 'var(--card-glass-bg)',
                        border: '1px solid var(--card-glass-border)',
                        color: 'var(--text-hero)',
                      }}
                      placeholder={t('contact.yourEmail')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-body)' }}>
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      style={{
                        background: 'var(--card-glass-bg)',
                        border: '1px solid var(--card-glass-border)',
                        color: 'var(--text-hero)',
                      }}
                    placeholder={t('contact.projectSubject')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-body)' }}>
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    style={{
                      background: 'var(--card-glass-bg)',
                      border: '1px solid var(--card-glass-border)',
                      color: 'var(--text-hero)',
                    }}
                    placeholder={t('contact.yourMessage')}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full px-8 py-4 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:opacity-90"
                  style={{ 
                    backgroundColor: 'var(--custom-purple)',
                    border: 'none'
                  }}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {t('contact.sendMessage')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

