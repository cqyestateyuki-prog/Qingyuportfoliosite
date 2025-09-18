import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { projects, getProjectsByCategory } from '../../data/projects.js';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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

    const section = document.querySelector('#work');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const filters = ['All', 'UIUX', 'Game', 'Programming', 'Research', '3D', 'Graphic Design'];

  // 单选筛选逻辑
  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
  };

  // 筛选项目
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.categories?.includes(activeFilter);
  });

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 标题 */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work spanning UI/UX design, game development, 
            graphic design, and research projects.
          </p>
        </div>

        {/* 筛选器 */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterSelect(filter)}
              className={`filter-button px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter ? 'active' : ''
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={`project-card bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 block ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* 项目图片 */}
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={project.thumbnail || project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-medium">
                    <Eye size={16} className="inline mr-2" />
                    View Details
                  </div>
                </div>
              </div>

              {/* 项目信息 主页的卡片样式*/}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.brief}
                </p>
                
                {/* Category标签 - 替换原来的灰色标签 */}
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        category === 'UIUX' 
                          ? 'bg-purple-100 text-purple-700' 
                          : category === 'Game'
                          ? 'bg-blue-100 text-blue-700'
                          : category === 'Programming'
                          ? 'bg-green-100 text-green-700'
                          : category === 'Research'
                          ? 'bg-orange-100 text-orange-700'
                          : category === '3D'
                          ? 'bg-pink-100 text-pink-700'
                          : category === 'Graphic Design'
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'var(--gradient-secondary)',
              border: 'none'
            }}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

