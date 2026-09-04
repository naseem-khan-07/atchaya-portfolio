import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Video, Users, Brain, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-ocean-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ocean-800">
                CAPABILITIES & TOOLKIT
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-900 tracking-tight">
              Tools I use to turn ideas into something real.
            </h2>
          </div>
          <p className="text-charcoal-700 text-sm sm:text-base max-w-md leading-relaxed">
            A balanced mix of technical programming fundamentals, visual storytelling, human communication, and analytical problem-solving mindset.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const isDev = category.title === 'Development';
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isDev
                    ? 'bg-gradient-to-br from-white via-sand-50 to-ocean-50/50 border-ocean-200/80 shadow-md hover:shadow-xl'
                    : 'bg-white/90 backdrop-blur-sm border-sand-300/80 shadow-sm hover:shadow-lg hover:border-olive-300'
                }`}
              >
                <div>
                  {/* Category Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isDev ? 'bg-ocean-800 text-sand-50' : 'bg-sand-100 text-olive-800'
                      }`}
                    >
                      {category.icon === 'Code2' && <Code2 className="w-6 h-6" />}
                      {category.icon === 'Video' && <Video className="w-6 h-6" />}
                      {category.icon === 'Users' && <Users className="w-6 h-6" />}
                      {category.icon === 'Brain' && <Brain className="w-6 h-6" />}
                    </div>

                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-sand-200/70 text-charcoal-700">
                      CATEGORY 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-2">
                    {category.title}
                  </h3>

                  <p className="text-xs text-charcoal-700 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skills Tags List */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full border flex items-center gap-1.5 ${
                          isDev
                            ? 'bg-white text-ocean-900 border-ocean-200 shadow-sm'
                            : 'bg-sand-100/80 text-charcoal-800 border-sand-300'
                        }`}
                      >
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-sand-200/80 text-[11px] font-mono text-charcoal-700 flex items-center justify-between">
                  <span>Verified Competency</span>
                  <span className="font-semibold text-olive-800">No Artificial Bars</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
