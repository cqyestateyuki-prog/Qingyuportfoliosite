import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MoonIcon from '../hud/MoonIcon';

const NextProject = ({ nextProject }) => {
  if (!nextProject) return null;

  return (
    <section
      className="py-10 md:py-14 px-4 md:px-6"
      style={{ borderTop: '1px solid var(--hud-line)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header — same structure as ProjectDetail sections (Section Tag + Main Title + Brief) */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div
            className="text-[11px] tracking-[0.4em] uppercase mb-3 md:mb-4 font-['Poppins']"
            style={{ color: 'var(--section-tag)' }}
          >
            ✦ Next Project <MoonIcon />
          </div>
          <h2
            className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight"
            style={{
              color: 'var(--text-hero)',
              fontFamily: "'Poppins', 'Inter', sans-serif"
            }}
          >
            Curious yet? Check out another project.
          </h2>
        </div>

        {/* Next project card: horizontal (image left, text right), same content format as project sections */}
        <Link
          to={`/project/${nextProject.id}`}
          className="group flex flex-col md:flex-row w-full overflow-hidden rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
          style={{
            background: 'var(--card-glass-bg)',
            border: '1px solid var(--card-glass-border)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15), 0 0 24px var(--hud-glow)',
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          {/* 左侧：缩略图 */}
          <div className="md:w-[45%] aspect-[16/10] md:aspect-auto md:min-h-[280px] flex-shrink-0 overflow-hidden">
            <img
              src={nextProject.heroImage || nextProject.thumbnail}
              alt={nextProject.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* 右侧：标题 + 副标题 + CTA */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-10 text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[var(--custom-purple)] transition-colors" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
              {nextProject.title}
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-6 line-clamp-2" style={{ color: 'var(--text-body)' }}>
              {nextProject.subtitle}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--custom-purple)] group-hover:gap-3 transition-all">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NextProject;
