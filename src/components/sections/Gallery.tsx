'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalText } from '../ui/TerminalText';
import { RetroCard } from '../ui/RetroCard';
import { photos, Photo } from '../../data/photos';
import { X, Maximize2, Camera, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedPhotos = showAll ? photos : photos.slice(0, 3);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <TerminalText 
          text="PHOTOGRAPHY_SUBSYSTEM"
          as="h2"
          className="text-3xl md:text-5xl font-vt323 text-phosphor glow-text"
        />
        <p className="text-phosphor/50 max-w-2xl mx-auto font-jetbrains text-xs md:text-sm">
          Capturing the intersection of engineering and natural beauty. 
          Visual data stored in high-fidelity formats...
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {displayedPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: showAll ? 0 : idx * 0.1 }}
              className="cursor-pointer group relative h-64 overflow-hidden beveled-edge"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="absolute inset-0 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-retro-black/40 group-hover:bg-transparent transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <Maximize2 className="text-phosphor opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                <span className="text-phosphor font-vt323 text-sm opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">
                  EXPAND_IMAGE
                </span>
              </div>

              {/* Title Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-retro-black/80 border-t border-phosphor p-2 flex justify-between items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-phosphor font-vt323 text-xs tracking-widest uppercase">
                  {photo.title}
                </span>
                <span className="text-phosphor/40 font-vt323 text-[10px] tracking-widest">
                  {photo.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Expand/Collapse Button */}
      {photos.length > 3 && (
        <div className="flex justify-center pt-8">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex flex-col items-center gap-2 text-phosphor/60 hover:text-phosphor transition-all"
          >
            <span className="text-xs font-vt323 tracking-[0.4em] uppercase">
              {showAll ? 'COMPRESS_ARCHIVES' : 'ACCESS_FULL_VISUAL_ARCHIVES'}
            </span>
            <div className="flex items-center gap-4">
               <div className="h-px w-12 bg-phosphor/20 group-hover:w-24 transition-all" />
               <div className="px-6 py-2 border border-phosphor/40 group-hover:border-phosphor font-vt323 text-xl tracking-widest flex items-center gap-3">
                  {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  {showAll ? 'COLLAPSE.LOG' : 'VIEW_MORE.EXE'}
               </div>
               <div className="h-px w-12 bg-phosphor/20 group-hover:w-24 transition-all" />
            </div>
          </button>
        </div>
      )}

      {/* Cinematic Zoom Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[5000] bg-retro-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-6xl w-full h-full flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal UI Header */}
              <div className="flex justify-between items-center border-b border-phosphor/30 pb-4">
                <div className="flex flex-col">
                  <span className="text-phosphor font-vt323 text-xl tracking-[0.2em]">
                    IMAGE_VIEWER_PRO_V2.0
                  </span>
                  <span className="text-phosphor/40 text-[10px] font-jetbrains">
                    IMG_ID: {selectedPhoto.id} | FORMAT: RAW_VISUAL_DATA
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedPhoto(null)}
                  className="text-phosphor hover:bg-phosphor/20 p-2 border border-phosphor/30 transition-all hover:scale-110"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Main Image Container */}
              <div className="flex-grow relative beveled-edge overflow-hidden border-2 border-phosphor/50">
                <img 
                  src={selectedPhoto.url} 
                  alt={selectedPhoto.title} 
                  className="w-full h-full object-contain bg-retro-gray/10"
                />
                
                {/* Visual Analysis Overlays */}
                <div className="absolute top-4 left-4 flex flex-col gap-1 pointer-events-none">
                  <div className="text-[10px] font-vt323 text-phosphor bg-retro-black/50 px-2 py-0.5 border border-phosphor/20">
                    SCAN_READY...
                  </div>
                  <div className="text-[10px] font-vt323 text-phosphor bg-retro-black/50 px-2 py-0.5 border border-phosphor/20">
                    RES: 4K_ENHANCED
                  </div>
                </div>
              </div>

              {/* Info Bar */}
              <div className="flex flex-col md:flex-row gap-8 pt-4">
                <div className="flex-grow space-y-2">
                  <h3 className="text-2xl font-vt323 text-phosphor tracking-widest">{selectedPhoto.title}</h3>
                  <p className="text-phosphor/60 font-jetbrains text-sm">{selectedPhoto.description}</p>
                </div>
                <div className="flex gap-4 items-end">
                   <div className="flex flex-col items-center gap-1">
                      <Camera className="text-phosphor/30" size={16} />
                      <span className="text-[10px] font-vt323 text-phosphor/40">CAMERA_LOG</span>
                   </div>
                   <div className="flex flex-col items-center gap-1">
                      <MapPin className="text-phosphor/30" size={16} />
                      <span className="text-[10px] font-vt323 text-phosphor/40">COORDS_MAP</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
