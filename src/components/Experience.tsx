import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Calendar, MapPin, Building2 } from 'lucide-react';
import { INTERNSHIP_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-sand-100/50 border-t border-sand-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-ocean-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ocean-800">
                PRACTICAL EXPOSURE
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
              Internship & Industry Experience.
            </h2>
          </div>
          <p className="text-charcoal-700 text-sm max-w-md leading-relaxed">
            Applying academic fundamentals, Java logic, and web engineering to real-world development environments.
          </p>
        </div>

        {/* Internship Experience Cards */}
        <div className="space-y-6">
          {INTERNSHIP_EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-sand-300 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-sand-200">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-olive-800 bg-olive-100 px-3 py-1 rounded-full border border-olive-200">
                      {exp.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-charcoal-900">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-charcoal-700">
                    <div className="flex items-center gap-1.5 font-semibold text-ocean-800">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-sand-400" />
                      <span>{exp.period}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-sand-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-ocean-100 text-ocean-800 flex items-center justify-center shadow-inner self-start">
                  <Briefcase className="w-6 h-6" />
                </div>
              </div>

              {/* Bullet Points */}
              <div className="pt-6 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-olive-800 mb-2">
                  KEY CONTRIBUTIONS & LEARNINGS:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-sand-50 border border-sand-200 text-xs text-charcoal-800 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
