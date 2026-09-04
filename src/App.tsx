import { motion, useScroll, useSpring } from 'framer-motion';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Achievements } from './components/Achievements';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { HackathonJourney } from './components/HackathonJourney';
import { Skills } from './components/Skills';
import { TechStackStrip } from './components/TechStackStrip';
import { BeyondCode } from './components/BeyondCode';
import { DanceSection } from './components/DanceSection';
import { CreativeGallery } from './components/CreativeGallery';
import { BrandQuote } from './components/BrandQuote';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative font-sans text-charcoal-900 bg-sand-50 selection:bg-ocean-100 selection:text-ocean-900 antialiased overflow-x-hidden">
      
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-ocean-700 via-olive-600 to-amber-500 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Custom Precision Cursor (Desktop) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="w-full">
        <Hero />
        <Achievements />
        <About />
        <Experience />
        <HackathonJourney />
        <Skills />
        <TechStackStrip />
        <BeyondCode />
        <DanceSection />
        <CreativeGallery />
        <BrandQuote />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
