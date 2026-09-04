import React from 'react';
import { motion } from 'framer-motion';
import { Film, MessageSquare, Activity, Sparkles } from 'lucide-react';
import { BEYOND_CODE_ITEMS } from '../data/portfolioData';

export const BeyondCode: React.FC = () => {
  return (
    <section id="beyond-code" className="py-24 bg-sand-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-olive-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-olive-800">
                PERSONALITY & DIMENSION
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-900 tracking-tight">
              Beyond Code.
            </h2>
          </div>
          <p className="text-charcoal-700 text-sm sm:text-base max-w-md leading-relaxed">
            Software engineering is only one facet of who I am. Creative editing, stage presentation, and dance form my holistic perspective.
          </p>
        </div>

        {/* Three Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BEYOND_CODE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-white border border-sand-300 shadow-md hover:shadow-2xl hover:border-ocean-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-sand-100 text-ocean-800 group-hover:bg-ocean-800 group-hover:text-sand-50 transition-colors duration-300 flex items-center justify-center shadow-inner">
                    {item.icon === 'Film' && <Film className="w-7 h-7" />}
                    {item.icon === 'MessageSquare' && <MessageSquare className="w-7 h-7" />}
                    {item.icon === 'Activity' && <Activity className="w-7 h-7" />}
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-olive-100 text-olive-900 border border-olive-200">
                    {item.category}
                  </span>
                </div>

                <div className="text-xs font-mono font-bold uppercase tracking-wider text-olive-800 mb-2">
                  {item.tagline}
                </div>

                <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-4 group-hover:text-ocean-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-charcoal-700 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-sand-200 flex items-center justify-between text-xs font-mono text-charcoal-700">
                <span>{item.badge}</span>
                <Sparkles className="w-4 h-4 text-sand-400 group-hover:text-amber-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
