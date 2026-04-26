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

  // 导航项
  const navItems = [
    { name: t('nav.work'), href: '#work' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  // 导航点击处理
  const handleNavClick = (href) => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-medium gradient-text">
            {t('nav.home')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`nav-link font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-purple-600' 
                    : 'text-white hover:text-purple-200'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* 语言切换按钮 */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-purple-600 bg-gray-100 hover:bg-purple-50' 
                  : 'text-white/80 hover:text-white bg-white/10 hover:bg-white/20'
              }`}
              title={language === 'en' ? 'Switch to Chinese' : '切换到英文'}
            >
              <Globe size={14} />
              <span>{currentLanguage.shortName}</span>
            </button>
          </div>

          {/* Mobile: Language + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* 移动端语言切换 */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-600 bg-gray-100' 
                  : 'text-white/80 bg-white/10'
              }`}
            >
              {currentLanguage.shortName}
            </button>
            
            {/* 菜单按钮 */}
            <button
              className={`p-2 transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-purple-600' 
                  : 'text-white hover:text-purple-200'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 py-4 border-t ${
            isScrolled ? 'border-gray-200' : 'border-purple-200/30'
          }`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left font-medium transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-purple-600' 
                      : 'text-white hover:text-purple-200'
                  }`}
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
