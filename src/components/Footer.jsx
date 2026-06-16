import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 relative backdrop-blur-sm"
      style={{
        background: 'var(--surface-scrim-strong)',
        borderTop: '1px solid var(--hud-line)',
        color: 'var(--text-hero)',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo和描述 */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Serena Cao
            </h3>
            <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Creative Developer & Designer specializing in innovative digital experiences. 
              Let's create something amazing together.
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Work', href: '#work' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="transition-colors duration-300 hover:text-[var(--text-accent)]" style={{ color: 'var(--text-muted)' }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2" style={{ color: 'var(--text-muted)' }}>
              <p>cqyestateyuki@gmail.com</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="pt-8" style={{ borderTop: '1px solid var(--card-glass-border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0" style={{ color: 'var(--text-muted)' }}>
              © {currentYear} Serena Cao. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              and lots of coffee.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Built with React & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        style={{
          color: 'var(--hud-fg)',
          border: '1px solid var(--hud-line-strong)',
          background: 'var(--card-glass-bg)',
          boxShadow: '0 0 16px var(--hud-glow)',
        }}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;

