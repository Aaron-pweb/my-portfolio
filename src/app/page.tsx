'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BootIntro } from '@/components/BootIntro';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Gallery } from '@/components/sections/Gallery';
import { TheMap } from '@/components/sections/TheMap';
import { Journal } from '@/components/sections/Journal';
import { Faith } from '@/components/sections/Faith';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);

  // Smooth scroll logic (Native CSS is usually enough, but we can enhance it)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen bg-retro-black">
      {/* Cinematic Boot Intro */}
      <AnimatePresence>
        {!isBooted && <BootIntro onComplete={() => setIsBooted(true)} />}
      </AnimatePresence>

      {/* Main Content (Only visible after boot) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isBooted ? 1 : 0 }}
        transition={{ duration: 1 }}
        className={!isBooted ? "pointer-events-none overflow-hidden h-screen" : ""}
      >
        <Navbar />
        
        {/* Sections Wrapper */}
        <div className="space-y-0">
          <Hero />
          
          <div className="relative">
             {/* Divider effect */}
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-phosphor/20 to-transparent" />
             <Projects />
          </div>

          <div className="relative">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-phosphor/20 to-transparent" />
             <Gallery />
          </div>

          <div className="relative bg-retro-gray/5">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-phosphor/20 to-transparent" />
             <TheMap />
          </div>

          <div className="relative">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-phosphor/20 to-transparent" />
             <Journal />
          </div>

          <div className="relative bg-phosphor/[0.02]">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-phosphor/20 to-transparent" />
             <Faith />
          </div>
        </div>

        <Footer />
        
        {/* CRT Noise Overlay (Subtle) */}
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </motion.div>
    </main>
  );
}
