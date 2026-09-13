import React from 'react';
import { ChevronRight } from 'lucide-react';

import hp from '../assets/hp-logo.svg';
import gfg from '../assets/gfg-logo.svg';
import codecrafters from '../assets/codecrafters-logo.svg';
import interviewBuddy from '../assets/interviewBuddy-logo.svg';
import memcode from '../assets/memcode-logo.svg';
import osen from '../assets/osen-logo.svg';
import unstop from '../assets/unstop-logo.svg';

const logos = [
  { name: 'HP', src: hp, url: 'https://www.hp.com' },
  { name: 'GeeksforGeeks', src: gfg, url: 'https://www.geeksforgeeks.org' },
  { name: 'CodeCrafters', src: codecrafters, url: 'https://codecrafters.io' },
  { name: 'InterviewBuddy', src: interviewBuddy, url: 'https://interviewbuddy.in' },
  { name: 'Memcode', src: memcode, url: 'https://memcode.com' },
  { name: 'OSEN', src: osen, url: 'https://osen.in' },
  { name: 'Unstop', src: unstop, url: 'https://unstop.com' },
];

const SponsorStrip = () => (
  <div
    className="relative z-10 block w-full bg-white/80 backdrop-blur-md border-y border-white/20 hover:bg-white/90 transition-colors duration-200 group"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center gap-6">
      {/* Label */}
      <span className="text-[10px] font-mono tracking-[0.25em] font-semibold text-black/60 uppercase shrink-0 whitespace-nowrap">
        Powered by
      </span>

      {/* Divider */}
      <div className="w-px h-5 bg-black/20 shrink-0" />

      {/* Logos — horizontally scrollable on mobile, natural flex on desktop */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-none">
        <div className="flex items-center gap-8 min-w-max md:min-w-0 md:justify-between py-0.5">
          {logos.map((logo) => (
            <a key={logo.name} href={logo.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-5 md:h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Arrow hint */}
      <a href="#sponsors" aria-label="View our sponsors" className="shrink-0 text-black/50 hover:text-[var(--color-accent)] transition-all duration-200 cursor-pointer flex items-center group-hover:translate-x-0.5">
        <ChevronRight size={15} />
      </a>
    </div>
  </div>
);

export default SponsorStrip;
