import React from 'react';
import { TECH_STACK_STRIP } from '../data/portfolioData';

export const TechStackStrip: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const items = [...TECH_STACK_STRIP, ...TECH_STACK_STRIP, ...TECH_STACK_STRIP];

  return (
    <div className="py-8 bg-ocean-800 text-sand-50 border-y border-ocean-900 overflow-hidden relative selection:bg-olive-700">
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {items.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-8 text-xs font-mono font-bold uppercase tracking-widest text-sand-200/90 whitespace-nowrap hover:text-white transition-colors cursor-default"
          >
            <span>{tech}</span>
            <span className="text-olive-400 font-normal">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
