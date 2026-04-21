'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, MessageCircle, Linkedin, Heart, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 px-4 bg-retro-black border-t border-phosphor/20 relative overflow-hidden">
      {/* Background decoration (radar) */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-phosphor/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-phosphor/10 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        {/* Brand/Identity */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <Terminal className="text-phosphor animate-pulse" size={28} />
             <span className="text-3xl font-vt323 tracking-[0.2em] text-phosphor glow-text">
                AARON_TESHALE
             </span>
          </div>
          <p className="text-phosphor/50 font-jetbrains text-sm leading-relaxed max-w-sm">
             Engineering professional, serial entrepreneur, and devoted follower of Christ. 
             Based in Mekelle, Ethiopia, operating globally.
          </p>
          <div className="flex gap-4">
             <a href="https://github.com/Aaron-pweb" target="_blank" rel="noopener noreferrer" className="p-2 border border-phosphor/30 text-phosphor/60 hover:text-phosphor hover:bg-phosphor/10 transition-all">
                <Github size={20} />
             </a>
             <a href="https://t.me/The_Aaron_perspective" target="_blank" rel="noopener noreferrer" className="p-2 border border-phosphor/30 text-phosphor/60 hover:text-phosphor hover:bg-phosphor/10 transition-all">
                <MessageCircle size={20} />
             </a>
             <a href="https://www.linkedin.com/in/aaron-teshale/" target="_blank" rel="noopener noreferrer" className="p-2 border border-phosphor/30 text-phosphor/60 hover:text-phosphor hover:bg-phosphor/10 transition-all">
                <Linkedin size={20} />
             </a>
             <a href="mailto:aaronteshale138@gmail.com" className="p-2 border border-phosphor/30 text-phosphor/60 hover:text-phosphor hover:bg-phosphor/10 transition-all">
                <Mail size={20} />
             </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
           <h3 className="text-xl font-vt323 text-phosphor tracking-widest uppercase border-b border-phosphor/20 pb-2">
              NAVIGATION_CORE
           </h3>
           <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'HOME', href: '#hero' },
                { name: 'PROJECTS', href: '#projects' },
                { name: 'GALLERY', href: '#gallery' },
                { name: 'MAP', href: '#map' },
                { name: 'JOURNAL', href: '#journal' },
                { name: 'FAITH', href: '#faith' },
              ].map(link => (
                <a key={link.name} href={link.href} className="text-sm font-vt323 text-phosphor/40 hover:text-phosphor hover:translate-x-1 transition-all flex items-center gap-2">
                   <div className="w-1 h-1 bg-phosphor/40 rounded-full" />
                   {link.name}
                </a>
              ))}
           </div>
        </div>

        {/* System Info */}
        <div className="space-y-6">
           <h3 className="text-xl font-vt323 text-phosphor tracking-widest uppercase border-b border-phosphor/20 pb-2">
              SYSTEM_METADATA
           </h3>
           <div className="space-y-3 font-jetbrains text-[10px] text-phosphor/40">
              <div className="flex justify-between items-center border-b border-phosphor/5 pb-1">
                 <span>VERSION</span>
                 <span className="text-phosphor/80">V2026.3.13</span>
              </div>
              <div className="flex justify-between items-center border-b border-phosphor/5 pb-1">
                 <span>ENVIRONMENT</span>
                 <span className="text-phosphor/80">PRODUCTION_MAIN</span>
              </div>
              <div className="flex justify-between items-center border-b border-phosphor/5 pb-1">
                 <span>LOCALE</span>
                 <span className="text-phosphor/80">EN_US.UTF-8</span>
              </div>
              <div className="flex justify-between items-center border-b border-phosphor/5 pb-1">
                 <span>UPTIME</span>
                 <span className="text-phosphor/80">99.99%</span>
              </div>
           </div>
           
           <div className="pt-4 flex items-center justify-center gap-4 border border-phosphor/20 p-4 bg-phosphor/5 rounded-sm">
              <div className="flex flex-col items-center">
                 <span className="text-[10px] font-vt323 text-phosphor/40">POWERED_BY</span>
                 <span className="text-xs font-vt323 text-phosphor">REACT_NEXT_TS</span>
              </div>
              <div className="w-px h-8 bg-phosphor/20" />
              <div className="flex flex-col items-center">
                 <span className="text-[10px] font-vt323 text-phosphor/40">SECURED_BY</span>
                 <span className="text-xs font-vt323 text-phosphor">FAITH_PROTOCOLS</span>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-phosphor/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
         <div className="text-[10px] font-vt323 text-phosphor/30 tracking-widest flex items-center gap-2">
            <span>&copy; {currentYear} AARON_TESHALE_ENGINEERING. ALL_RIGHTS_RESERVED.</span>
         </div>
         <div className="text-[10px] font-vt323 text-phosphor/30 flex items-center gap-4">
            <a href="#" className="hover:text-phosphor transition-colors">PRIVACY_POLICY</a>
            <a href="#" className="hover:text-phosphor transition-colors">TERMS_OF_SERVICE</a>
            <div className="flex items-center gap-1">
               <span>MADE_WITH</span>
               <Heart size={10} className="text-phosphor animate-pulse fill-phosphor" />
               <span>BY_AARON_TESHALE</span>
            </div>
         </div>
      </div>
    </footer>
  );
};
