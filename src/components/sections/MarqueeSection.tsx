import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, Sparkles, ArrowUpRight, Play, Maximize2 } from 'lucide-react';
import { marqueeRow1, marqueeRow2, MarqueeItem } from '../../data/marqueeImages';
import { FadeIn } from '../common/FadeIn';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MarqueeItem | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateOffset = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOffset);
        ticking = true;
      }
    };

    updateOffset();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Tripled lists for seamless scroll continuity
  const row1Tripled = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
  const row2Tripled = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

  const tickerKeywords = [
    "3D MODELING",
    "WEBGL / THREE.JS",
    "MOTION GRAPHICS",
    "BLENDER",
    "REACT & TYPESCRIPT",
    "AI AGENTS & LLMS",
    "CUSTOM SHADERS",
    "SPATIAL DESIGN",
    "FULLSTACK ARCHITECTURE"
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-16 overflow-hidden flex flex-col gap-6 select-none"
    >
      {/* Section Header: Title & Context */}
      <div className="max-w-6xl mx-auto px-6 w-full text-center flex flex-col items-center mb-4 sm:mb-8">
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/80 font-medium">
              Concept Lab &amp; Motion Gallery
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={25}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-4 select-none"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 90px)' }}
          >
            Selected Explorations
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p className="text-sm sm:text-base font-light text-[#D7E2EA]/70 max-w-xl mx-auto leading-relaxed">
            A dynamic stream of interactive 3D spatial environments, brand identities, and next-gen interface studies. Hover or click any concept to inspect.
          </p>
        </FadeIn>
      </div>

      {/* Row 1: Moves RIGHT on scroll */}
      <div
        className="flex gap-4 w-max transition-transform duration-75"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {row1Tripled.map((item, idx) => (
          <div
            key={`row1-${item.id}-${idx}`}
            onClick={() => setSelectedItem(item)}
            className="group relative w-[360px] sm:w-[420px] h-[230px] sm:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-white/10 hover:border-[#B600A8]/80 transition-all duration-300 cursor-pointer hover:shadow-[0_0_35px_rgba(182,0,168,0.35)]"
          >
            <img
              src={item.url}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
            />

            {/* Subtle always-on gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Quick action top-right badge */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] uppercase tracking-wider text-white">
                <Maximize2 className="w-3 h-3 text-[#BBCCD7]" />
                <span>Inspect</span>
              </div>
            </div>

            {/* Bottom info card overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col justify-end transform transition-transform duration-300">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-medium text-[#BBCCD7] px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                  {item.tag}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/60 font-light">
                  {item.category}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold uppercase text-white tracking-wide group-hover:text-[#D7E2EA] transition-colors truncate">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div
        className="flex gap-4 w-max transition-transform duration-75"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {row2Tripled.map((item, idx) => (
          <div
            key={`row2-${item.id}-${idx}`}
            onClick={() => setSelectedItem(item)}
            className="group relative w-[360px] sm:w-[420px] h-[230px] sm:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-white/10 hover:border-[#B600A8]/80 transition-all duration-300 cursor-pointer hover:shadow-[0_0_35px_rgba(182,0,168,0.35)]"
          >
            <img
              src={item.url}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
            />

            {/* Subtle always-on gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Quick action top-right badge */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] uppercase tracking-wider text-white">
                <Maximize2 className="w-3 h-3 text-[#BBCCD7]" />
                <span>Inspect</span>
              </div>
            </div>

            {/* Bottom info card overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col justify-end transform transition-transform duration-300">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-medium text-[#BBCCD7] px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                  {item.tag}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/60 font-light">
                  {item.category}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold uppercase text-white tracking-wide group-hover:text-[#D7E2EA] transition-colors truncate">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Technical Keywords Ticker */}
      <div className="mt-8 border-y border-white/10 py-3 overflow-hidden bg-black/40 backdrop-blur-sm">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {[...tickerKeywords, ...tickerKeywords, ...tickerKeywords].map((kw, i) => (
            <div key={i} className="flex items-center gap-4 text-xs uppercase tracking-widest font-medium text-[#D7E2EA]/60 hover:text-white transition-colors">
              <span className="text-[#B600A8]">✦</span>
              <span>{kw}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Concept Inspection Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-[#121212] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 shadow-2xl text-[#D7E2EA] z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Preview */}
              <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-black/60 border border-white/10 mb-6 shadow-inner">
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover select-none"
                />
              </div>

              {/* Meta details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs uppercase tracking-widest font-medium text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                      {selectedItem.tag}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60">
                      {selectedItem.category}
                    </span>
                  </div>
                  <h3 className="hero-heading font-black uppercase text-2xl sm:text-3xl tracking-tight">
                    {selectedItem.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white uppercase text-xs tracking-widest font-medium border border-white/20 transition-all duration-200"
                >
                  <span>Close Preview</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
