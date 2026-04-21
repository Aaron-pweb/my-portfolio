'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RetroCard } from '../ui/RetroCard';
import { TerminalText } from '../ui/TerminalText';
import { GitHubCalendar } from 'react-github-calendar';
import { projects } from '../../data/projects';
import { ExternalLink, Github, Code, Box } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <TerminalText 
          text="ENGINEERING_AND_VENTURES"
          as="h2"
          className="text-3xl md:text-5xl font-vt323 text-phosphor glow-text"
        />
        <p className="text-phosphor/50 max-w-2xl mx-auto font-jetbrains text-xs md:text-sm">
          A selection of technical projects and entrepreneurial ventures. 
          Pulling live data from GitHub subsystems...
        </p>
      </div>

      {/* GitHub Calendar Section */}
      <RetroCard title="GITHUB_CONTRIBUTION_LOG" className="p-4 sm:p-8 overflow-hidden">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="w-full flex justify-start sm:justify-center text-phosphor overflow-x-auto py-4 scrollbar-hide">
            <div className="min-w-[700px] sm:min-w-0">
              <GitHubCalendar 
                username="Aaron-pweb" 
                blockSize={12} 
                blockMargin={4} 
                fontSize={14} 
                colorScheme="dark"
                theme={{
                  light: ['#1a1a1a', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  dark: ['#1a1a1a', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-vt323 tracking-widest text-phosphor/40">
            <span className="flex items-center gap-2"><div className="w-3 h-3 bg-[#1a1a1a] border border-phosphor/20" /> INACTIVE</span>
            <span className="flex items-center gap-2"><div className="w-3 h-3 bg-[#39d353]" /> PEAK_PERFORMANCE</span>
          </div>
        </div>
      </RetroCard>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <RetroCard key={project.id} className="h-full flex flex-col group" title={project.status}>
            <div className="space-y-4 flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-vt323 text-phosphor group-hover:glow-text transition-all">
                  {project.title}
                </h3>
                <Box className="text-phosphor/20 group-hover:text-phosphor transition-colors" size={24} />
              </div>
              
              <p className="text-phosphor/60 font-jetbrains text-sm line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-vt323 px-2 py-0.5 border border-phosphor/30 text-phosphor/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 pt-6 mt-6 border-t border-phosphor/10">
              <a 
                href={project.repo} 
                className="text-phosphor/40 hover:text-phosphor transition-colors flex items-center gap-1 text-xs font-vt323 tracking-widest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} /> REPO_ACCESS
              </a>
            </div>
          </RetroCard>
        ))}
      </div>
    </section>
  );
};
