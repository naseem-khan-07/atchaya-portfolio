import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Sparkles, Zap } from 'lucide-react';

export const DanceSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sand-100 via-sky-50 to-olive-50 text-charcoal-900 relative overflow-hidden border-y border-sand-300">
      
      {/* Soft Energetic Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-ocean-200/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-olive-200/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 shadow-md border border-sand-300 text-ocean-900 text-xs font-mono font-bold tracking-widest uppercase">
            <Activity className="w-4 h-4 text-olive-700" />
            <span>RHYTHM & ARTISTRY</span>
          </div>
        </div>

        {/* Big Editorial Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12">
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-charcoal-900 uppercase leading-none">
            CODE.{' '}
            <span className="font-serif italic font-normal text-ocean-800 lowercase border-b-2 border-olive-500 pb-1">
              create.
            </span>{' '}
            <span className="text-olive-800">MOVE.</span>
          </h2>

          <p className="font-serif italic text-lg sm:text-2xl text-charcoal-800 max-w-2xl mx-auto pt-2">
            “Technology is one way I express ideas. Dance is another.”
          </p>
        </div>

        {/* Three Vibrant Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 01: Rhythm & Timing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-sand-300 shadow-md hover:shadow-xl hover:border-ocean-300 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-ocean-100 text-ocean-800 flex items-center justify-center mb-6 shadow-inner">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-ocean-800 mb-1">
              PHYSICAL PRECISION
            </div>
            <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3">
              Rhythm & Timing
            </h3>
            <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
              Dance instills strict beat awareness and spatial timing, directly enhancing focus during intense coding sessions.
            </p>
          </motion.div>

          {/* Card 02: Creative Expression */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-sand-300 shadow-md hover:shadow-xl hover:border-olive-300 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-olive-100 text-olive-800 flex items-center justify-center mb-6 shadow-inner">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-olive-800 mb-1">
              CREATIVE OUTLET
            </div>
            <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3">
              Artistic Energy
            </h3>
            <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
              Expressing emotion without words builds visual instinct, stage confidence, and out-of-the-box creative thinking.
            </p>
          </motion.div>

          {/* Card 03: Stage Discipline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-sand-300 shadow-md hover:shadow-xl hover:border-amber-300 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-6 shadow-inner">
              <Flame className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 mb-1">
              PERFORMANCE MINDSET
            </div>
            <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3">
              Stage Discipline
            </h3>
            <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
              Performing under lights builds calm composure under pressure—essential for hackathon jury pitches and presentations.
            </p>
          </motion.div>

        </div>

        {/* Bottom Tag Bar */}
        <div className="mt-12 text-center text-xs font-mono font-semibold text-charcoal-700 uppercase tracking-widest flex items-center justify-center gap-4">
          <span>EXPRESSION</span>
          <span>•</span>
          <span>DISCIPLINE</span>
          <span>•</span>
          <span>CONFIDENCE</span>
        </div>

      </div>
    </section>
  );
};
