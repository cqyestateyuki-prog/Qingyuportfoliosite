import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NextProject = ({ nextProject }) => {
  if (!nextProject) return null;

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-[#F7F7F8] border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Header — same structure as ProjectDetail sections (Section Tag + Main Title + Brief) */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div
            className="text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[2px] mb-3 md:mb-4"
            style={{ color: 'var(--custom-purple)' }}
          >
            Next
          </div>
          <h2
            className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight"
            style={{
              color: '#0D0D0D',
              fontFamily: "'Poppins', 'Inter', sans-serif"
            }}
          >
            Curious yet? Check out another project.
          </h2>
        </div>

        {/* Next project card: horizontal (image left, text right), same content format as project sections */}
        <Link
          to={`/project/${nextProject.id}`}
          className="group flex flex-col md:flex-row w-full overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
          onClick={() => window.scrollTo(0, 0)}
        >
          {/* 左侧：缩略图 */}
          <div className="md:w-[45%] aspect-[16/10] md:aspect-auto md:min-h-[280px] flex-shrink-0 overflow-hidden bg-gray-100">
            <img
              src={nextProject.heroImage || nextProject.thumbnail}
              alt={nextProject.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* 右侧：标题 + 副标题 + CTA */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-10 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[var(--custom-purple)] transition-colors" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
              {nextProject.title}
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 line-clamp-2">
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
