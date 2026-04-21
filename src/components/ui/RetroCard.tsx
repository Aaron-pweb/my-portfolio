'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface RetroCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  glow?: boolean;
}

export const RetroCard: React.FC<RetroCardProps> = ({ 
  children, 
  className, 
  title, 
  glow = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "beveled-edge bg-retro-gray/30 p-4 relative group transition-all duration-300",
        glow && "hover:shadow-[0_0_20px_rgba(51,255,51,0.3)]",
        className
      )}
    >
      {title && (
        <div className="absolute -top-3 left-4 bg-retro-black px-2 text-xs font-vt323 tracking-widest uppercase text-phosphor border border-phosphor">
          {title}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-phosphor" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-phosphor" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-phosphor" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-phosphor" />
    </motion.div>
  );
};
