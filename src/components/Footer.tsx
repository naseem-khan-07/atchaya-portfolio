import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-sand-100/80 border-t border-sand-300 text-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-sand-200">
          
          {/* Brand Left */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-display font-bold text-xl tracking-tight text-charcoal-900">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-mono text-olive-800 font-semibold">
              {PERSONAL_INFO.role}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-mono font-semibold text-charcoal-700">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="hover:text-ocean-800 transition-colors"
            >
              GMAIL
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ocean-800 transition-colors"
            >
              LINKEDIN
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ocean-800 transition-colors"
            >
              INSTAGRAM
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand-300 shadow-sm hover:border-ocean-300 text-xs font-mono font-bold text-charcoal-800 hover:text-ocean-800 transition-all duration-300"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-charcoal-700">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div>
            Rathinam Technical Campus • 2nd Year CSE
          </div>
        </div>

      </div>
    </footer>
  );
};
