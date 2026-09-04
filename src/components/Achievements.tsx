import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Flame, Star, ArrowUpRight, CheckCircle2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Achievement } from '../types/portfolio';

export const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedAchievement(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openGallery = (item: Achievement) => {
    if (item.galleryImages && item.galleryImages.length > 0) {
      setSelectedAchievement(item);
      setCurrentImageIndex(0);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedAchievement?.galleryImages) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedAchievement.galleryImages!.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedAchievement?.galleryImages) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedAchievement.galleryImages!.length - 1 : prev - 1
    );
  };

  return (
    <section id="achievements" className="py-24 bg-ocean-50/40 relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-olive-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-ocean-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ocean-800">
                PROVEN COMPETITOR
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-900 tracking-tight">
              Proof of showing up.
            </h2>
          </div>
          <p className="text-charcoal-700 text-sm sm:text-base max-w-md leading-relaxed">
            Real competitive hackathons where code was written, ideas were pitched, and solutions were validated under time pressure.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            const hasGallery = item.galleryImages && item.galleryImages.length > 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                onClick={() => hasGallery && openGallery(item)}
                className={`group relative p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between border ${
                  hasGallery ? 'cursor-pointer' : ''
                } ${
                  item.highlight
                    ? 'bg-gradient-to-br from-white via-sand-50 to-ocean-50/60 border-ocean-200/80 shadow-md hover:shadow-2xl hover:border-ocean-400'
                    : 'bg-white/80 backdrop-blur-sm border-sand-200 shadow-sm hover:shadow-xl hover:border-olive-300 hover:bg-white'
                }`}
              >
                {/* Top Row: Icon & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        item.highlight
                          ? 'bg-ocean-800 text-sand-50 shadow-md group-hover:bg-olive-800'
                          : 'bg-sand-100 text-olive-800 group-hover:bg-ocean-800 group-hover:text-sand-50'
                      }`}
                    >
                      {item.id.includes('sih') && <Trophy className="w-6 h-6" />}
                      {item.id.includes('nidar') && <Award className="w-6 h-6" />}
                      {item.id.includes('visai') && <Star className="w-6 h-6" />}
                      {item.id.includes('10plus') && <Flame className="w-6 h-6" />}
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
                        item.badgeText === 'WINNER'
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : item.badgeText === 'FINALIST'
                          ? 'bg-ocean-100 text-ocean-900 border-ocean-200'
                          : 'bg-olive-100 text-olive-900 border-olive-200'
                      }`}
                    >
                      {item.badgeText}
                    </span>
                  </div>

                  {/* Event & Title */}
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                    {item.event}
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-charcoal-900 mb-2 group-hover:text-ocean-800 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-olive-800 mb-4 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.role}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-charcoal-700 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag & Reveal Action */}
                <div className="pt-4 border-t border-sand-200/80 flex items-center justify-between text-[11px] font-mono text-charcoal-700">
                  <span className={hasGallery ? 'font-bold text-ocean-800 flex items-center gap-1' : ''}>
                    {hasGallery && <Camera className="w-3.5 h-3.5 text-ocean-700 animate-pulse" />}
                    {item.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-sand-400 group-hover:text-ocean-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Photo Modal */}
      <AnimatePresence>
        {selectedAchievement && selectedAchievement.galleryImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            className="fixed inset-0 z-50 bg-charcoal-950/85 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-charcoal-900 border border-sand-100/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-sand-50"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-sand-100/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono font-bold text-olive-400 uppercase tracking-widest">
                    EVENT PHOTO GALLERY
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {selectedAchievement.galleryTitle || selectedAchievement.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Viewer */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center overflow-hidden group">
                <img
                  src={selectedAchievement.galleryImages[currentImageIndex]}
                  alt={`${selectedAchievement.title} photo ${currentImageIndex + 1}`}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src.includes('./')) {
                      target.src = target.src.replace('./', '/');
                    }
                  }}
                  className="w-full h-full object-contain"
                />

                {/* Left/Right Carousel Controls */}
                {selectedAchievement.galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 shadow-lg backdrop-blur-sm transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 shadow-lg backdrop-blur-sm transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Index Counter Indicator */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono border border-white/20 text-white">
                  Photo {currentImageIndex + 1} of {selectedAchievement.galleryImages.length}
                </div>
              </div>

              {/* Footer Caption */}
              <div className="p-5 sm:p-6 border-t border-sand-100/10 bg-charcoal-950/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-sand-300 leading-relaxed font-sans max-w-xl">
                  {selectedAchievement.galleryCaption}
                </p>

                {/* Thumbnail Previews */}
                <div className="flex items-center gap-2">
                  {selectedAchievement.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-12 h-8 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex ? 'border-amber-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt="thumbnail"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          if (target.src.includes('./')) {
                            target.src = target.src.replace('./', '/');
                          }
                        }}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
