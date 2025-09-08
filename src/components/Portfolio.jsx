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

  const filteredProjects = getProjectsByCategory(activeFilter);

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
              onClick={() => setActiveFilter(filter)}
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
            <div
              key={project.id}
              className={`project-card bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* 项目图片 */}
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail || project.heroImage}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to={`/project/${project.id}`}>
                    <Button size="sm" className="bg-white/90 hover:bg-white text-gray-900 hover:text-gray-900">
                      <Eye size={16} className="mr-2" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* 项目信息 主页的卡片样式*/}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.category === 'UIUX' 
                      ? 'bg-purple-100 text-purple-700' 
                      : project.category === 'Game'
                      ? 'bg-blue-100 text-blue-700'
                      : project.category === 'Programming'
                      ? 'bg-green-100 text-green-700'
                      : project.category === 'Research'
                      ? 'bg-orange-100 text-orange-700'
                      : project.category === '3D'
                      ? 'bg-pink-100 text-pink-700'
                      : project.category === 'Graphic Design'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.brief}
                </p>
                
                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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

