'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TerminalText } from '../ui/TerminalText';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Profile Image with Retro Filter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-48 h-48 mx-auto mb-12"
        >
          <div className="absolute inset-0 rounded-full border-2 border-phosphor/50 p-1 overflow-hidden group">
            <div className="w-full h-full rounded-full overflow-hidden grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700 relative">
              <img 
                src="/my-portfolio/profile.jpg" 
                alt="Aaron" 
                className="w-full h-full object-cover"
              />
              {/* Retro scanline overlay specifically for the image */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-40" />
            </div>
          </div>
          
          {/* Rotating decorative ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 border-t-2 border-b-2 border-phosphor/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border-l-2 border-r-2 border-phosphor/10 rounded-full"
          />
        </motion.div>

        <div className="space-y-4">
          <TerminalText 
            text="AARON TESHALE // ENGINEER • ENTREPRENEUR • CHRISTIAN"
            as="h1"
            className="text-2xl sm:text-3xl md:text-5xl font-vt323 tracking-[0.1em] sm:tracking-[0.2em] text-phosphor glow-text leading-tight"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-base md:text-xl font-jetbrains text-phosphor/60 max-w-2xl mx-auto px-2"
          >
            I’m Aaron, a Python developer building purposeful solutions through clean engineering. From backend services with Flask to smart automation, I’m committed to delivering software that is both powerful and precise.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 pt-8"
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-vt323 text-phosphor/40 mb-1 sm:mb-2">SYSTEM_ARCH</span>
            <span className="w-full sm:w-auto px-4 py-2 border border-phosphor/20 text-phosphor bg-phosphor/5 font-vt323 text-lg sm:text-xl hover:bg-phosphor/20 transition-colors cursor-default">
              FULL_STACK
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-vt323 text-phosphor/40 mb-1 sm:mb-2">VENTURE_EXP</span>
            <span className="w-full sm:w-auto px-4 py-2 border border-phosphor/20 text-phosphor bg-phosphor/5 font-vt323 text-lg sm:text-xl hover:bg-phosphor/20 transition-colors cursor-default">
              EMERGING
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-vt323 text-phosphor/40 mb-1 sm:mb-2">CORE_VALUES</span>
            <span className="w-full sm:w-auto px-4 py-2 border border-phosphor/20 text-phosphor bg-phosphor/5 font-vt323 text-lg sm:text-xl hover:bg-phosphor/20 transition-colors cursor-default">
              FAITH_FIRST
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#projects"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-phosphor/40 hover:text-phosphor transition-colors"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};
