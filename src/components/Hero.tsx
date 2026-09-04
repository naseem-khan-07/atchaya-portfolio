import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Trophy, Sparkles, Code2, Compass, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) / (width / 2);
    const y = (e.clientY - (top + height / 2)) / (height / 2);
    setMousePos({ x: x * 12, y: y * 12 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-sand-50 bg-noise overflow-hidden"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 rounded-full bg-ocean-100/50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-5%] w-[450px] h-[450px] rounded-full bg-olive-100/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8 z-10">
            
            {/* Availability & Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-sand-300 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-charcoal-800 uppercase">
                  {PERSONAL_INFO.statusText}
                </span>
              </div>

              <span className="hidden sm:inline text-sand-400 font-mono text-xs">•</span>

              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-olive-800 bg-olive-100/70 px-3 py-1.5 rounded-full border border-olive-200">
                {PERSONAL_INFO.eyebrow}
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-charcoal-900 leading-[1.08]"
            >
              I build ideas into{' '}
              <span className="font-serif italic font-normal text-ocean-800 underline decoration-sand-300 decoration-wavy underline-offset-8">
                meaningful
              </span>{' '}
              digital experiences.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-charcoal-700 font-normal leading-relaxed max-w-2xl"
            >
              I’m <strong className="font-semibold text-charcoal-900">{PERSONAL_INFO.name}</strong>, a 2nd-year computer science student at Rathinam Technical Campus. I channel logic into code, compete in national hackathons, tell visual stories through editing, communicate ideas with clarity, and express energy through dance.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton
                onClick={() => {
                  const el = document.getElementById('achievements');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-ocean-800 hover:bg-olive-800 text-sand-50 font-display font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Explore Achievements</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>

              <MagneticButton
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white/90 hover:bg-sand-100 text-charcoal-900 border border-sand-300 font-display font-semibold text-sm rounded-full shadow-sm hover:shadow transition-all duration-300"
              >
                <span>Get In Touch</span>
                <span className="w-1.5 h-1.5 rounded-full bg-olive-700 group-hover:scale-150 transition-transform"></span>
              </MagneticButton>
            </motion.div>

            {/* Quick Summary Pill Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-sand-200/80 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-charcoal-700"
            >
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-ocean-700" />
                <span>C • JAVA • PYTHON • WEB</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-olive-700" />
                <span>SIH & NIDAR FINALIST '25</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>VISAI WINNER</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Portrait Card & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Organic Portrait Image Container */}
              <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-b from-white via-sand-100 to-sand-200/80 shadow-2xl border border-sand-300/70 group">
                
                {/* Image Aspect Container */}
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-gradient-to-br from-ocean-100/60 via-sand-200 to-olive-100/50 flex flex-col items-center justify-center text-center border border-sand-200/50 group">
                  
                  {/* Grid Lines Pattern Background */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0a2540_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Native Profile Image Loader */}
                  <img
                    src="./profile.png"
                    alt={PERSONAL_INFO.name}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src.includes('profile.png')) {
                        target.src = './profile.jpg';
                      } else if (target.src.includes('profile.jpg')) {
                        target.src = '/profile.png';
                      } else {
                        target.style.display = 'none';
                        const fallback = document.getElementById('hero-img-fallback');
                        if (fallback) fallback.style.display = 'flex';
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 relative z-10"
                  />

                  {/* Fallback UI if /profile.jpg is not yet added */}
                  <div id="hero-img-fallback" className="hidden flex-col items-center justify-center p-8">
                    <div className="relative z-10 w-24 h-24 rounded-full bg-white/80 backdrop-blur border border-sand-300 shadow-inner flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                      <Sparkles className="w-10 h-10 text-ocean-800 stroke-[1.5]" />
                    </div>

                    <div className="relative z-10 font-mono font-bold text-xs uppercase tracking-widest text-ocean-900 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm border border-ocean-100">
                      {PERSONAL_INFO.profileImagePlaceholder}
                    </div>

                    <p className="relative z-10 text-[11px] text-charcoal-700 mt-3 max-w-[200px] leading-relaxed">
                      Save your photo as profile.jpg in public/ folder.
                    </p>
                  </div>

                  {/* Subtle Corner Accents */}
                  <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-charcoal-800 font-semibold tracking-wider bg-white/80 backdrop-blur px-2.5 py-1 rounded-md shadow-sm">
                    ATCHAYA R
                  </div>
                  <div className="absolute bottom-4 right-4 z-20 font-mono text-[9px] text-olive-900 font-bold tracking-wider bg-white/80 backdrop-blur px-2.5 py-1 rounded-md shadow-sm">
                    PORTFOLIO 2025
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badge: 10+ Hackathons */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: 'easeOut' }}
                className="absolute -bottom-4 -right-4 sm:-right-6 z-30 glass-card p-3.5 rounded-2xl shadow-xl border border-sand-200/80 flex items-center gap-3 backdrop-blur-md"
                style={{ animation: 'float 6s ease-in-out infinite 1.5s' }}
              >
                <div className="w-10 h-10 rounded-xl bg-olive-800 text-sand-50 flex items-center justify-center shadow-inner">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-lg text-charcoal-900 leading-none">
                    10+
                  </div>
                  <div className="text-[11px] font-semibold text-olive-800">
                    HACKATHONS
                  </div>
                  <div className="text-[9px] font-mono text-charcoal-700">Circuit Competitor</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
