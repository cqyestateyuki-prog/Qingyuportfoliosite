/**
 * Navbar Component
 * 
 * 导航栏组件
 * - 响应式设计（桌面/移动端）
 * - 滚动时背景变化
 * - 语言切换功能
 */

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n';
import ThemeToggle from '../hud/ThemeToggle';

const Navbar = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(!isHomePage); // 非首页默认使用实心导航样式
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // 国际化
  const { language, toggleLanguage, currentLanguage, t } = useLanguage();

  // 监听滚动（仅首页：顶部透明，滚动后实心；其他页面保持实心）
  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // 导航项(Resume 是 PDF,新标签打开;Contact 留在最后,保持最靠右)
  const navItems = [
    { name: t('nav.work'), href: '#work' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.resume'), href: '/files/Qingyu_Cao_Resume.pdf', external: true },
    { name: t('nav.contact'), href: '#contact' }
  ];

  // 导航点击处理
  const handleNavClick = (href, external) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      setIsMobileMenuOpen(false);
      return;
    }
    if (href.startsWith('#')) {
      // 非首页时，hash 链接需先跳转到首页对应区块
      if (!isHomePage) {
        navigate({ pathname: '/', hash: href.slice(1) });
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md' : 'bg-transparent'
      }`}
      style={isScrolled ? {
        background: 'var(--surface-scrim)',
        borderBottom: '1px solid var(--hud-line)',
      } : undefined}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-medium tracking-tight"
            style={{ color: 'var(--text-hero)' }}
          >
            {t('nav.home')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.external)}
                className="nav-link font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--hud-fg)' }}
              >
                {item.name}
              </button>
            ))}

            {/* 语言切换按钮 */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{
                color: 'var(--hud-fg)',
                border: '1px solid var(--hud-line)',
                background: 'var(--card-glass-bg)',
              }}
              title={language === 'en' ? 'Switch to Chinese' : '切换到英文'}
            >
              <Globe size={14} />
              <span>{currentLanguage.shortName}</span>
            </button>

            {/* 日/夜主题切换（与语言切换并列的"世界控制器"） */}
            <ThemeToggle />
          </div>

          {/* Mobile: Language + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* 移动端语言切换 */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-sm font-medium transition-colors"
              style={{ color: 'var(--hud-fg)', background: 'var(--card-glass-bg)', border: '1px solid var(--hud-line)' }}
            >
              {currentLanguage.shortName}
            </button>

            <ThemeToggle />

            {/* 菜单按钮 */}
            <button
              className="p-2 transition-colors hover:opacity-80"
              style={{ color: 'var(--hud-fg)' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t" style={{ borderColor: 'var(--hud-line)' }}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.external)}
                  className="text-left font-medium transition-colors hover:opacity-80"
                  style={{ color: 'var(--hud-fg)' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
