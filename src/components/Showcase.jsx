import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Showcase = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Section Title - Optional */}
        {/* <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Selected Work</h2>
        </div> */}

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
          >
            {/* Text Content */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {project.categories?.map((cat) => (
                  <span 
                    key={cat} 
                    className="px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide"
                    style={{ backgroundColor: 'rgba(137, 129, 215, 0.18)', color: 'var(--custom-purple)' }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-500 font-light">
                  {project.brief || project.overview?.briefContent?.substring(0, 60) + "..."}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {project.techTags?.slice(0, 4).map(tag => (
                  <span key={tag} className="text-gray-400 text-sm">#{tag.replace(/^#/, '')}</span>
                ))}
              </div>

              <div className="pt-4">
                <Link to={`/project/${project.id}`}>
                  <button
                    className="group text-white px-8 py-4 rounded-full text-lg font-medium tracking-wide inline-flex items-center gap-2 transition-all hover:scale-105 hover:brightness-95"
                    style={{ backgroundColor: 'var(--custom-purple)' }}
                  >
                    View Case Study
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Image / Visual */}
            <div className="flex-1 w-full">
              <Link to={`/project/${project.id}`} className="block group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] lg:aspect-[16/10]">
                  <img
                    src={project.heroImage || project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Optional Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
