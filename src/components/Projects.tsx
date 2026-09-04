import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

export const Projects: React.FC = () => {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-24 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-olive-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-olive-800">
                PROJECT PORTFOLIO
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-900 tracking-tight">
              Selected Works & Software.
            </h2>
          </div>
          <p className="text-charcoal-700 text-sm sm:text-base max-w-md leading-relaxed">
            Architectural prototypes, hackathon builds, and algorithms presented through clean technical breakdown.
          </p>
        </div>

        {/* Featured Project (Asymmetric Large Typography Card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-3xl bg-gradient-to-br from-white via-sand-50 to-ocean-50/50 border border-sand-300 shadow-xl overflow-hidden group hover:border-ocean-300 transition-all duration-300 p-8 sm:p-12 relative"
        >
          {/* Subtle Background Icon */}
          <div className="absolute top-6 right-8 text-sand-300/40 pointer-events-none">
            <FolderGit2 className="w-32 h-32 stroke-[1]" />
          </div>

          <div className="max-w-3xl relative z-10 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-ocean-800 bg-ocean-100 px-3.5 py-1.5 rounded-full border border-ocean-200">
                FEATURED SHOWCASE
              </span>
              <span className="text-xs font-mono text-olive-800 font-semibold">{featuredProject.category}</span>
            </div>

            <div className="text-xs font-mono font-semibold text-olive-800 uppercase tracking-wider">
              {featuredProject.subtitle}
            </div>

            <h3 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-900 group-hover:text-ocean-800 transition-colors">
              {featuredProject.title}
            </h3>

            <p className="text-base text-charcoal-700 leading-relaxed font-sans">
              {featuredProject.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono font-semibold px-3.5 py-1.5 bg-white border border-sand-300 text-charcoal-900 rounded-full shadow-sm"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-sand-200">
              <MagneticButton className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-800 hover:bg-olive-800 text-sand-50 font-display font-semibold text-xs rounded-full shadow-md transition-all">
                <span>{featuredProject.liveUrl}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </MagneticButton>

              <MagneticButton className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-sand-300 hover:bg-sand-100 text-charcoal-900 font-display font-semibold text-xs rounded-full shadow-sm transition-all">
                <Github className="w-3.5 h-3.5" />
                <span>{featuredProject.githubUrl}</span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Secondary Projects Grid (Clean Detail Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-sand-300 shadow-sm hover:shadow-xl hover:border-olive-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-olive-800 bg-olive-100 px-3 py-1 rounded-full border border-olive-200">
                    {project.category}
                  </span>
                  <Code2 className="w-5 h-5 text-sand-400" />
                </div>

                <div className="text-xs font-mono font-semibold text-olive-800 uppercase tracking-wider">
                  {project.subtitle}
                </div>

                <h4 className="font-display font-bold text-2xl text-charcoal-900">
                  {project.title}
                </h4>

                <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-[11px] font-mono bg-sand-100 text-charcoal-800 px-3 py-1 rounded-full border border-sand-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-sand-200 text-xs font-mono">
                <span className="text-ocean-800 font-bold hover:underline cursor-pointer flex items-center gap-1">
                  {project.liveUrl}
                </span>
                <span className="text-charcoal-700 font-bold hover:underline cursor-pointer flex items-center gap-1">
                  {project.githubUrl}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
