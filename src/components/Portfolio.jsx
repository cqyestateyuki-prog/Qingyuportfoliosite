import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { projects } from '../../data/projects.js';
import { trackProjectClick } from './Analytics';
import Showcase from './Showcase';
import BubbleMenu from './BubbleMenu';

/**
 * Portfolio 组件 - 项目展示网格
 */
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

  const filters = ['All', 'AI','UIUX','Product Design','Programming',  'Game', 'Research'];

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
  };

  // Split projects into Showcase (featured) and Standard Grid (non-featured)
  // If no projects are featured, fall back to first 3
  const featuredProjects = projects.filter(p => p.featured);
  const showcaseItems = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);
  
  // For the grid, we show ALL projects that match the filter (including featured ones, usually user expects to see everything in "All")
  // Or should we exclude featured? The user asked for "Gallery for browsing... then Grid".
  // Usually "All Projects" grid should contain everything.
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.categories?.includes(activeFilter);
  });

  const handleProjectClick = (project) => {
    trackProjectClick(project.id, project.title);
  };

  return (
    <section id="work" className="bg-gray-50 relative">
      
      {/* Selected Work (Showcase) */}
      <Showcase projects={showcaseItems} />

      {/* Standard Grid Section */}
      <div className="py-20" style={{ maxWidth: '100%', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-normal mb-6" style={{ color: 'var(--custom-purple)' }}>
            More Projects
          </h2>
          
          {/* Bubble Menu Filter */}
          <BubbleMenu 
            categories={filters} 
            activeCategory={activeFilter} 
            onSelect={handleFilterSelect} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              onClick={() => handleProjectClick(project)}
              className={`project-card group bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-300 block flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-50 border-b border-gray-50">
                <img
                  src={project.thumbnail || project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Categories - Refined Colorful */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${
                        category === 'UIUX' 
                          ? 'bg-purple-50 text-purple-700 border-purple-200' 
                          : category === 'Game'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : category === 'Programming'
                          ? 'bg-green-50 text-green-700 border-green-200'
                          : category === 'Research'
                          ? 'bg-orange-50 text-orange-700 border-orange-200'
                          : category === 'Graphic Design'
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                          : category === 'AI'
                          ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                          : category === 'Product Design'
                          ? 'bg-pink-50 text-pink-700 border-pink-200'
                          : 'bg-gray-50 text-gray-700 border-gray-200'
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Title - Default Font */}
                <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-[var(--custom-purple)] transition-colors">
                  {project.title}
                </h3>

                {/* Brief */}
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4 font-['Poppins']">
                  {project.brief}
                </p>
                
                {/* Tech Tags - Subtle */}
                <div className="mt-auto pt-4 border-t border-gray-50">
                  {project.techTags && project.techTags.length > 0 ? (
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {project.techTags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-400"
                        >
                          #{tag.replace(/^#/, '')}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="h-4"></div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
