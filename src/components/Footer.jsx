import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo和描述 */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Qingyu Cao
            </h3>
            <p className="text-gray-400 leading-relaxed">
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
                    className="text-gray-400 hover:text-white transition-colors duration-300"
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
            <div className="space-y-2 text-gray-400">
              <p>cqyestateyuki@gmail.com</p>
              <p>3522849856</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Qingyu Cao. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              and lots of coffee.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                Built with React & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;

