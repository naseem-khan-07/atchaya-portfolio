import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Trophy, Flame } from 'lucide-react';
import { HACKATHON_TIMELINE } from '../data/portfolioData';

export const HackathonJourney: React.FC = () => {
  return (
    <section id="hackathon-journey" className="py-24 bg-olive-50/40 relative overflow-hidden">
      
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4a5d4e_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive-100 text-olive-900 border border-olive-200 text-xs font-mono font-bold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>PRESSURE & RESILIENCE</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-900 tracking-tight">
            Built under pressure. Learned through experience.
          </h2>

          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
            The 7-phase execution cycle every hackathon demands. From stepping into the arena to presenting working prototypes and securing national recognition.
          </p>
        </div>

        {/* Timeline Desktop & Mobile Grid */}
        <div className="relative">
          
          {/* Horizontal Connecting Tube (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-sand-300 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            {HACKATHON_TIMELINE.map((item, index) => {
              const isWin = item.stage === 'Win';
              const isParticipate = item.stage === 'Participate';

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isWin
                      ? 'bg-gradient-to-b from-amber-500 to-amber-600 text-white border-amber-400 shadow-xl lg:scale-105'
                      : isParticipate
                      ? 'bg-ocean-800 text-sand-50 border-ocean-700 shadow-lg'
                      : 'bg-white/90 backdrop-blur-sm border-sand-200 text-charcoal-900 hover:border-olive-400 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Top Step Number & Stage */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          isWin
                            ? 'bg-white/20 text-white'
                            : isParticipate
                            ? 'bg-ocean-700 text-ocean-100'
                            : 'bg-sand-100 text-olive-800'
                        }`}
                      >
                        0{item.step}
                      </span>

                      {isWin && <Trophy className="w-5 h-5 text-amber-100" />}
                      {isParticipate && <Zap className="w-4 h-4 text-ocean-200" />}
                    </div>

                    <h3
                      className={`font-display font-extrabold text-lg uppercase tracking-wider mb-1 ${
                        isWin ? 'text-white' : isParticipate ? 'text-sand-50' : 'text-charcoal-900'
                      }`}
                    >
                      {item.stage}
                    </h3>

                    <div
                      className={`text-xs font-semibold mb-3 ${
                        isWin ? 'text-amber-100' : isParticipate ? 'text-ocean-200' : 'text-olive-800'
                      }`}
                    >
                      {item.title}
                    </div>

                    <p
                      className={`text-[11px] leading-normal ${
                        isWin ? 'text-amber-50/90' : isParticipate ? 'text-sand-200' : 'text-charcoal-700'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Highlight pill if applicable */}
                  {item.highlight && (
                    <div className="mt-4 pt-3 border-t border-current/20 text-[10px] font-mono font-bold tracking-tight uppercase">
                      ★ {item.highlight}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Linked Accomplishments Footer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-white border border-sand-300 shadow-md flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-charcoal-800"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Circuit Milestones Connected:</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-charcoal-900 font-bold">
            <span className="bg-sand-100 px-3 py-1 rounded-full border border-sand-200">10+ Hackathons</span>
            <span className="bg-ocean-100 text-ocean-900 px-3 py-1 rounded-full border border-ocean-200">SIH 2025 Finalist</span>
            <span className="bg-olive-100 text-olive-900 px-3 py-1 rounded-full border border-olive-200">NIDAR 2025 Finalist</span>
            <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full border border-amber-200">VISAI Winner</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
