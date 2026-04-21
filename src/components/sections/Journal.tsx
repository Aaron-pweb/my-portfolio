'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TerminalText } from '../ui/TerminalText';
import { RetroCard } from '../ui/RetroCard';
import { journalPosts } from '../../data/journal';
import { Printer, Calendar, Tag, BookOpen } from 'lucide-react';

export const Journal: React.FC = () => {
  return (
    <section id="journal" className="py-24 px-4 max-w-5xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <TerminalText 
          text="MISSION_JOURNAL_LOGS"
          as="h2"
          className="text-4xl md:text-5xl font-vt323 text-phosphor glow-text"
        />
        <p className="text-phosphor/50 max-w-2xl mx-auto font-jetbrains text-sm italic">
          "The record of things done, lessons learned, and faith practiced."
          System print-outs stored in local archives...
        </p>
      </div>

      <div className="space-y-12">
        {journalPosts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <RetroCard className="p-0 overflow-hidden" glow={false}>
              {/* Terminal Header */}
              <div className="bg-phosphor/10 border-b border-phosphor p-4 flex justify-between items-center">
                 <div className="flex items-center gap-4">
                    <Printer className="text-phosphor" size={18} />
                    <span className="font-vt323 text-lg tracking-widest text-phosphor uppercase">
                      PRINT_JOB: {post.title}
                    </span>
                 </div>
                 <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-jetbrains text-phosphor/60">
                       <Calendar size={12} />
                       <span>DATE: {post.date}</span>
                    </div>
                 </div>
              </div>

              {/* Terminal Content (Styled as a print-out) */}
              <div className="p-8 bg-retro-black/50 font-jetbrains relative group">
                 <div className="max-w-3xl mx-auto space-y-6">
                    {/* Retro line numbering */}
                    <div className="flex gap-8 relative">
                       <div className="hidden sm:flex flex-col text-phosphor/20 text-[10px] text-right gap-6 pt-1 select-none">
                          <span>001</span>
                          <span>002</span>
                          <span>003</span>
                          <span>004</span>
                          <span>005</span>
                       </div>
                       
                       <div className="text-phosphor/80 leading-relaxed whitespace-pre-wrap">
                          {post.content.trim()}
                       </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-8 border-t border-phosphor/10">
                       {post.tags.map(tag => (
                          <span key={tag} className="flex items-center gap-1 text-[10px] font-vt323 text-phosphor/40 hover:text-phosphor transition-colors">
                             <Tag size={10} /> {tag}
                          </span>
                       ))}
                    </div>
                 </div>
                 
                 {/* Visual "glitch" overlay on hover */}
                 <div className="absolute inset-0 bg-phosphor/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              
              {/* Read More button (stylized) */}
              <div className="p-4 flex justify-center border-t border-phosphor/10">
                 <a 
                   href="https://www.bible.com/bible/59/REV.21.ESV" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-phosphor/60 hover:text-phosphor font-vt323 text-sm tracking-[0.3em] flex items-center gap-2 group"
                 >
                    <BookOpen size={16} />
                    <span>VIEW_FULL_LOG_DATA</span>
                    <span className="w-0 group-hover:w-4 h-px bg-phosphor transition-all" />
                 </a>
              </div>
            </RetroCard>
          </motion.div>
        ))}
      </div>
      
      {/* Scroll for more indicator */}
      <div className="flex justify-center pt-8">
         <div className="text-[10px] font-vt323 text-phosphor/30 animate-pulse uppercase tracking-[0.5em]">
            END_OF_RECENT_LOGS... ACCESSING_ARCHIVES...
         </div>
      </div>
    </section>
  );
};
