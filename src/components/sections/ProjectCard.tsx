import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectItem } from '../../data/projectsData';
import { LiveProjectButton } from '../common/LiveProjectButton';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] relative flex items-start justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(clamp(4.5rem, 8vh, 7rem) + ${index * 28}px)`,
        }}
        className="sticky w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-[#D7E2EA]/20 gap-4">
          <div className="flex items-baseline gap-4 sm:gap-6 flex-wrap">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}
            >
              {project.id}
            </span>

            {/* Project Name */}
            <h3
              className="font-medium uppercase tracking-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)' }}
            >
              {project.name}
            </h3>

            {/* Category */}
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60 border border-[#D7E2EA]/30 rounded-full px-3 py-1">
              {project.category}
            </span>
          </div>

          <LiveProjectButton href={project.liveUrl} />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6">
          {/* Left column (40% width = 5 cols out of 12) */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div
              className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-[#161616]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover select-none"
              />
            </div>
            <div
              className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-[#161616]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover select-none"
              />
            </div>
          </div>

          {/* Right column (60% width = 7 cols out of 12) */}
          <div className="md:col-span-7 flex">
            <div className="w-full h-full min-h-[220px] sm:min-h-[280px] md:min-h-[380px] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-[#161616]">
              <img
                src={project.col2Img}
                alt={`${project.name} preview main`}
                loading="lazy"
                className="w-full h-full object-cover select-none"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
