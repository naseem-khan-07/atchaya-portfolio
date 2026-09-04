import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

export const BrandQuote: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-sand-100/40 relative overflow-hidden border-y border-sand-200">
      
      {/* Decorative Quote Marks */}
      <div className="absolute top-8 left-10 text-sand-300 font-serif text-9xl opacity-30 select-none pointer-events-none">
        “
      </div>
      <div className="absolute bottom-4 right-10 text-sand-300 font-serif text-9xl opacity-30 select-none pointer-events-none">
        ”
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-olive-800 bg-olive-100/80 px-4 py-1.5 rounded-full border border-olive-200">
            PERSONAL BRAND PHILOSOPHY
          </span>

          <blockquote className="font-serif italic font-normal text-3xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-tight sm:leading-snug max-w-4xl mx-auto">
            “Build with curiosity. Compete with purpose. Create with personality.”
          </blockquote>

          <div className="pt-4 flex items-center justify-center gap-3">
            <span className="w-10 h-[1px] bg-sand-400"></span>
            <span className="font-display font-bold text-sm tracking-wider uppercase text-ocean-900">
              {PERSONAL_INFO.name}
            </span>
            <span className="w-10 h-[1px] bg-sand-400"></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
