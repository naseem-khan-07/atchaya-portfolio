import React from 'react';
import { motion } from 'framer-motion';
import { Film, Sliders, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { CREATIVE_CRAFT } from '../data/portfolioData';

export const CreativeGallery: React.FC = () => {
  return (
    <section className="py-24 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-ocean-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ocean-800">
                VISUAL STORYTELLING
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-900 tracking-tight">
              Editing & Creative Craft.
            </h2>
          </div>
          <p className="text-charcoal-700 text-sm sm:text-base max-w-md leading-relaxed">
            Translating raw footage and imagery into rhythmic, high-impact visual edits and story sequences.
          </p>
        </div>

        {/* Clean Editorial Craft Cards (No Photo Placeholders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CREATIVE_CRAFT.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-sand-300 shadow-sm hover:shadow-xl hover:border-ocean-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-ocean-100 text-ocean-800 group-hover:bg-ocean-800 group-hover:text-sand-50 transition-colors duration-300 flex items-center justify-center shadow-inner">
                    {index === 0 && <Film className="w-6 h-6" />}
                    {index === 1 && <Sliders className="w-6 h-6" />}
                    {index === 2 && <Layers className="w-6 h-6" />}
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-olive-100 text-olive-900 border border-olive-200">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-3 group-hover:text-ocean-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-charcoal-700 leading-relaxed font-sans mb-6">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs font-mono text-charcoal-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-sand-200 flex items-center justify-between text-xs font-mono text-charcoal-700">
                <span>Visual Craft</span>
                <Sparkles className="w-4 h-4 text-sand-400 group-hover:text-amber-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
