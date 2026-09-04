import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Skills', href: '#skills' },
  { name: 'Beyond Code', href: '#beyond-code' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for highlight
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo / Monogram */}
        <a
          href="#hero"
          className="pointer-events-auto group flex items-center gap-2.5 px-4 py-2 rounded-full glass-nav shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-ocean-800 text-sand-50 font-display font-bold flex items-center justify-center text-xs tracking-wider group-hover:bg-olive-700 transition-colors">
            AR
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-charcoal-900 group-hover:text-ocean-800 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] text-charcoal-700 font-medium tracking-wider uppercase">
              2nd Year • Rathinam
            </span>
          </div>
        </a>

        {/* Desktop Navigation Center Floating Bar */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 pointer-events-auto ${
            isScrolled
              ? 'glass-nav shadow-lg border border-sand-300/60 backdrop-blur-xl scale-95'
              : 'bg-sand-100/60 backdrop-blur-md border border-sand-200/50'
          }`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-ocean-800 font-bold'
                    : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-sand-200/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-ocean-100/80 rounded-full -z-10 border border-ocean-200/60"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-3 pointer-events-auto">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-sand-50 bg-ocean-800 hover:bg-olive-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          className="md:hidden pointer-events-auto p-2.5 rounded-full glass-nav text-charcoal-900 shadow-md focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden pointer-events-auto mt-3 mx-2 p-5 rounded-2xl glass-nav shadow-2xl border border-sand-300 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between pb-3 border-b border-sand-200">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-ocean-700" />
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-700">Navigation</span>
              </div>
              <span className="text-[11px] font-mono text-olive-700 font-semibold">{PERSONAL_INFO.academicYear}</span>
            </div>

            <div className="flex flex-col gap-1 py-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-semibold text-charcoal-800 hover:text-ocean-800 hover:bg-ocean-50 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-sand-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-sand-200">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-sand-50 bg-ocean-800 hover:bg-olive-800 rounded-xl shadow transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
