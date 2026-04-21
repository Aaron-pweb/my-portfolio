'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TerminalTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const TerminalText: React.FC<TerminalTextProps> = ({ 
  text, 
  className, 
  delay = 0, 
  speed = 40,
  as: Component = 'span'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isInView && !isStarted) {
      const timeout = setTimeout(() => {
        setIsStarted(true);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay, isStarted]);

  useEffect(() => {
    if (isStarted && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [isStarted, displayedText, text, speed]);

  return (
    <Component ref={ref} className={className}>
      {displayedText}
      {isStarted && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-[1em] bg-phosphor ml-1"
        />
      )}
    </Component>
  );
};
