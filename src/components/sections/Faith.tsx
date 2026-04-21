'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TerminalText } from '../ui/TerminalText';
import { RetroCard } from '../ui/RetroCard';
import { Heart, Star, BookOpen, Quote, Shield, Info } from 'lucide-react';

const bibleVerses = [
  { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", ref: "John 3:16" },
  { text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.", ref: "Colossians 3:23" },
  { text: "Commit to the Lord whatever you do, and he will establish your plans.", ref: "Proverbs 16:3" },
  { text: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.", ref: "Matthew 5:16" }
];

export const Faith: React.FC = () => {
  const [verseIdx, setVerseIdx] = useState(0);

  useEffect(() => {
    // Rotation logic (could be daily or just periodic)
    const interval = setInterval(() => {
       setVerseIdx(prev => (prev + 1) % bibleVerses.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="faith" className="py-32 px-4 relative overflow-hidden">
      {/* Visual background element (subtle cross or glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-phosphor/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        <div className="text-center space-y-6">
          <TerminalText 
            text="FAITH_BASED_CORE_VALUES"
            as="h2"
            className="text-3xl md:text-5xl font-vt323 text-phosphor glow-text"
          />
          <div className="flex justify-center gap-4">
             <div className="h-px w-8 sm:w-12 bg-phosphor/20 mt-4" />
             <Heart className="text-phosphor animate-pulse" size={24} />
             <div className="h-px w-8 sm:w-12 bg-phosphor/20 mt-4" />
          </div>
          <p className="text-phosphor/70 max-w-2xl mx-auto font-jetbrains text-base sm:text-lg leading-relaxed px-2">
            Everything I build, every venture I start, and every photo I take is rooted in my identity as a follower of Christ. 
            My engineering is a form of worship, and my business is a platform for service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
           {/* Values Cards */}
           <RetroCard className="p-6 sm:p-8 h-full space-y-4 border-amber/30 group hover:border-amber transition-colors" title="IDENTITY_LOG">
              <div className="flex items-center gap-4">
                 <Shield className="text-amber" size={24} />
                 <h3 className="text-xl sm:text-2xl font-vt323 text-amber glow-amber uppercase tracking-widest">FOUNDATION</h3>
              </div>
              <p className="text-phosphor/60 font-jetbrains text-xs sm:text-sm leading-relaxed">
                 I believe that integrity, excellence, and compassion are the bedrock of any successful system—technical or human. 
                 My faith provides the moral compass for my engineering decisions.
              </p>
           </RetroCard>

           <RetroCard className="p-6 sm:p-8 h-full space-y-4 group hover:border-phosphor/80 transition-colors" title="MISSION_LOG">
              <div className="flex items-center gap-4">
                 <Star className="text-phosphor" size={24} />
                 <h3 className="text-xl sm:text-2xl font-vt323 text-phosphor glow-text uppercase tracking-widest">PURPOSE</h3>
              </div>
              <p className="text-phosphor/60 font-jetbrains text-xs sm:text-sm leading-relaxed">
                 Beyond the lines of code and profit margins, I am driven by the Great Commission. 
                 I seek to leverage technology to solve real-world problems and share the hope of the Gospel.
              </p>
           </RetroCard>
        </div>

        {/* Verse of the Day (Stylized Terminal Card) */}
        <RetroCard className="p-0 border-phosphor relative overflow-hidden group" title="VERSE_OF_THE_DAY">
           <div className="bg-phosphor/10 p-3 sm:p-4 border-b border-phosphor/30 flex justify-between items-center">
              <div className="flex items-center gap-2">
                 <BookOpen className="text-phosphor/60" size={14} />
                 <span className="text-[8px] sm:text-[10px] font-vt323 text-phosphor/40 tracking-[0.2em] sm:tracking-[0.3em]">RETRIVING_SCRIPTURE...</span>
              </div>
              <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 bg-phosphor/40 rounded-full" />
                 <div className="w-1.5 h-1.5 bg-phosphor/40 rounded-full" />
                 <div className="w-1.5 h-1.5 bg-phosphor rounded-full animate-pulse" />
              </div>
           </div>
           
           <div className="p-8 sm:p-12 text-center relative">
              <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 text-phosphor/10" size={64} />
              
              <motion.div
                key={verseIdx}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-4 sm:space-y-6"
              >
                 <p className="text-xl sm:text-2xl md:text-3xl font-vt323 text-phosphor tracking-widest leading-relaxed italic glow-text">
                    "{bibleVerses[verseIdx].text}"
                 </p>
                 <div className="flex flex-col items-center">
                    <span className="h-px w-16 sm:w-24 bg-phosphor/30 mb-2 sm:mb-4" />
                    <span className="text-base sm:text-lg font-vt323 text-phosphor uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                       — {bibleVerses[verseIdx].ref}
                    </span>
                 </div>
              </motion.div>
              
              <Quote className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-phosphor/10 rotate-180" size={64} />
           </div>

           {/* Progress bar for rotation */}
           <div className="h-1 bg-phosphor/10 w-full overflow-hidden">
              <motion.div 
                key={verseIdx}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 15, ease: "linear" }}
                className="h-full bg-phosphor"
              />
           </div>
        </RetroCard>

        {/* Footer style ending */}
        <div className="pt-16 border-t border-phosphor/10 text-center space-y-4">
           <div className="flex justify-center items-center gap-3 text-phosphor/20 text-[10px] font-vt323 tracking-[0.8em] uppercase">
              <span>FAITH</span>
              <div className="w-1 h-1 bg-phosphor/20 rounded-full" />
              <span>LOGIC</span>
              <div className="w-1 h-1 bg-phosphor/20 rounded-full" />
              <span>GRACE</span>
           </div>
           <p className="text-phosphor/30 font-jetbrains text-xs">
              Soli Deo Gloria.
           </p>
        </div>
      </div>
    </section>
  );
};
