'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootSequence = [
  "INITIALIZING ENGINEERING CORE...",
  "LOADING FAITH-BASED MODULES...",
  "ESTABLISHING ENTREPRENEURIAL DATA...",
  "LOADING SUBSYSTEMS: PHOTOGRAPHY",
  "LOADING SUBSYSTEMS: PROJECTS",
  "CONNECTING TO GITHUB (Aaron-pweb)...",
  "MEMORY CHECK: OK",
  "NETWORK STATUS: OK",
  "SYSTEM STATUS: ONLINE",
  "BOOT COMPLETE."
];

export const BootIntro: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < bootSequence.length) {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, bootSequence[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, Math.random() * 300 + 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[2000] bg-retro-black p-8 font-jetbrains flex flex-col items-start overflow-hidden pointer-events-none"
    >
      <div className="w-full max-w-4xl mx-auto space-y-2">
        {lines.map((line, idx) => (
          <div key={idx} className="flex gap-4">
            <span className="text-retro-gray/50">[{new Date().toLocaleTimeString()}]</span>
            <span className={idx === lines.length - 1 ? "text-phosphor animate-pulse" : "text-phosphor/80"}>
              {line}
            </span>
          </div>
        ))}
        {currentIndex < bootSequence.length && (
          <div className="w-2 h-5 bg-phosphor animate-pulse" />
        )}
      </div>
      
      {/* Percentage bar */}
      <div className="absolute bottom-12 left-8 right-8 max-w-4xl mx-auto h-2 border border-phosphor">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${(currentIndex / bootSequence.length) * 100}%` }}
          className="h-full bg-phosphor"
        />
      </div>
    </motion.div>
  );
};
