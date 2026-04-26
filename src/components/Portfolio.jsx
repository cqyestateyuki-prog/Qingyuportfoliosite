import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { projects } from '../../data/projects.js';
import { trackProjectClick } from './Analytics';
import Showcase from './Showcase';
import BubbleMenu from './BubbleMenu';
import { useLanguage } from '../i18n';
import { getLocalizedText } from '../utils/localization';

/**
 * Portfolio 组件 - 项目展示网格
 */
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

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
    trackProjectClick(project.id, getLocalizedText(project.title, language));
  };

  return (
    <section id="work" className="relative">
      
      {/* Selected Work (Showcase) */}
      <Showcase projects={showcaseItems} />

      {/* Standard Grid Section - 深色背景，与 Hero 一致 */}
      <div 
        className="more-projects-dark-section py-20 px-5 max-w-full mx-auto"
      >
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white/95">
            {t('portfolio.moreProjects')}
          </h2>
          
          {/* Bubble Menu Filter */}
          <BubbleMenu 
            categories={filters} 
            activeCategory={activeFilter} 
            onSelect={handleFilterSelect}
            variant="dark"
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card-dark group block flex flex-col rounded-xl overflow-hidden"
            >
            <Link
              to={`/project/${project.id}`}
              onClick={() => handleProjectClick(project)}
              className="block flex flex-col flex-grow"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-white/5">
                <img
                  src={project.thumbnail || project.heroImage}
                  alt={getLocalizedText(project.title, language)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content Container - 三级层级：类别 → 标题 → 描述/tech */}
              <div className="p-6 flex flex-col flex-grow">
                {/* 二级：类别标签 - 小字号、次要色 */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: 'rgba(138, 129, 215, 0.2)',
                        color: 'rgba(196, 190, 240, 0.9)',
                        border: '1px solid rgba(138, 129, 215, 0.35)'
                      }}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* 一级：项目标题 */}
                <h3 className="text-xl font-semibold text-white/95 mb-2 group-hover:text-[#c4bef0] transition-colors">
                  {getLocalizedText(project.title, language)}
                </h3>

                {/* 三级：简介 - 小字号、低对比 */}
                <p className="text-sm text-white/60 line-clamp-2 leading-relaxed mb-4 font-['Poppins']">
                  {getLocalizedText(project.brief, language)}
                </p>
                
                {/* 三级：Tech Tags */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  {project.techTags && project.techTags.length > 0 ? (
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {project.techTags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-white/45"
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
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#8a81d7',
              border: 'none',
              boxShadow: '0 0 25px rgba(138, 129, 215, 0.4)'
            }}
          >
            {t('portfolio.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
