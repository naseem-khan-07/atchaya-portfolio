import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Storytelling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-olive-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-olive-800">
                STORY & MINDSET
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-900 tracking-tight leading-tight">
              A little about the person behind the code.
            </h2>

            <div className="space-y-4 text-charcoal-700 text-base leading-relaxed font-sans">
              <p>
                Currently in my 2nd year at <strong className="text-charcoal-900 font-semibold">Rathinam Technical Campus</strong>, I approach computer science not just as coursework, but as an active arena for building, competing, and refining logic.
              </p>
              
              <p>
                My foundation lies in <span className="font-mono text-xs bg-sand-200/80 px-2 py-1 rounded text-ocean-900 font-bold">Java & DSA</span>, <span className="font-mono text-xs bg-sand-200/80 px-2 py-1 rounded text-ocean-900 font-bold">C</span>, <span className="font-mono text-xs bg-sand-200/80 px-2 py-1 rounded text-ocean-900 font-bold">Python</span>, and <span className="font-mono text-xs bg-sand-200/80 px-2 py-1 rounded text-ocean-900 font-bold">Web Development</span>. What drives me most is taking a blank code editor and converting complex problem statements into functional digital prototypes under high-pressure hackathon environments.
              </p>

              <p className="font-serif italic text-lg text-ocean-800 border-l-2 border-olive-500 pl-4 py-1">
                “Building software is about analytical precision; expressing it is about human connection.”
              </p>

              <p>
                Beyond standard development, I cultivate creative expression through <strong className="text-charcoal-900 font-semibold">video and photo editing</strong>, present technical ideas clearly through strong <strong className="text-charcoal-900 font-semibold">communication and presentation</strong>, and maintain discipline and rhythm through <strong className="text-charcoal-900 font-semibold">dance</strong>.
              </p>
            </div>

            {/* Core Values / Tags */}
            <div className="pt-4 flex flex-wrap gap-2">
              {["Problem Solving", "Rapid Execution", "Team Collaboration", "Visual Storytelling", "Stage Confidence", "Continuous Growth"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-white border border-sand-300 text-charcoal-800 px-3 py-1.5 rounded-full shadow-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Verified Metric Side Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-sand-100 to-sand-200/60 border border-sand-300 shadow-xl relative overflow-hidden">
              
              {/* Corner Watermark */}
              <div className="absolute top-4 right-4 text-sand-300 opacity-40">
                <Sparkles className="w-16 h-16 stroke-[1]" />
              </div>

              <h3 className="font-display font-bold text-lg text-charcoal-900 mb-8 pb-4 border-b border-sand-300/80 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-ocean-700" />
                <span>Verified Milestones</span>
              </h3>

              <div className="space-y-8">
                
                {/* Metric 01 */}
                <div className="flex items-start gap-5">
                  <div className="font-display font-extrabold text-4xl sm:text-5xl text-ocean-800 tracking-tight leading-none w-16">
                    02
                  </div>
                  <div>
                    <div className="font-display font-bold text-base text-charcoal-900">
                      Years Academic Journey
                    </div>
                    <div className="text-xs text-charcoal-700 mt-1">
                      Current 2nd-year computer science engineering student at Rathinam Technical Campus.
                    </div>
                  </div>
                </div>

                {/* Metric 02 */}
                <div className="flex items-start gap-5 pt-6 border-t border-sand-200">
                  <div className="font-display font-extrabold text-4xl sm:text-5xl text-olive-800 tracking-tight leading-none w-16">
                    10+
                  </div>
                  <div>
                    <div className="font-display font-bold text-base text-charcoal-900">
                      Hackathons Participated
                    </div>
                    <div className="text-xs text-charcoal-700 mt-1">
                      Tested across regional & national arenas building solutions under time constraints.
                    </div>
                  </div>
                </div>

                {/* Metric 03 */}
                <div className="flex items-start gap-5 pt-6 border-t border-sand-200">
                  <div className="font-display font-extrabold text-4xl sm:text-5xl text-amber-800 tracking-tight leading-none w-16">
                    03
                  </div>
                  <div>
                    <div className="font-display font-bold text-base text-charcoal-900">
                      Major Hackathon Highlights
                    </div>
                    <div className="text-xs text-charcoal-700 mt-1">
                      SIH 2025 Finalist • NIDAR 2025 Finalist • VISAI Hackathon Winner.
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-8 pt-6 border-t border-sand-300/80 bg-white/60 -mx-8 -mb-10 p-6 rounded-b-3xl text-center">
                <p className="text-xs font-mono font-semibold text-olive-900">
                  "{PERSONAL_INFO.identityStatement}"
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
