import React from 'react';
import quantum from '../assets/quantum-logo.svg';
import codex from '../assets/codex-logo.svg';
import velocity from '../assets/velocity-logo.svg';
import hp from '../assets/hp-logo.svg';
import gfg from '../assets/gfg-logo.svg';
import codecrafters from '../assets/codecrafters-logo.svg';
import interviewBuddy from '../assets/interviewBuddy-logo.svg';
import memcode from '../assets/memcode-logo.svg';
import osen from '../assets/osen-logo.svg';
import unstop from '../assets/unstop-logo.svg';

const Sponsors = () => {
  const sponsors = [
    { name: 'HP', logo: hp },
    { name: 'GeeksforGeeks', logo: gfg },
    { name: 'CodeCrafters', logo: codecrafters },
    { name: 'InterviewBuddy', logo: interviewBuddy },
    { name: 'Memcode', logo: memcode },
    { name: 'OSEN', logo: osen },
    { name: 'Unstop', logo: unstop },
  ];

  return (
    <section className="py-12 px-8 md:px-16 bg-transparent relative z-10" id="sponsors">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Hosted & Organized By */}
        <div className="w-full flex flex-col md:flex-row gap-10 justify-center items-center mb-12 border-b border-[var(--color-border-light)] pb-12">
          <div className="flex flex-col items-center gap-6">
            <div className="font-mono text-sm tracking-[0.3em] font-semibold text-[var(--color-secondary-text)]">HOSTED BY</div>
            <img src={quantum} alt="Quantum University" className="h-20 w-auto hover:scale-105 transition-transform duration-300 opacity-80 hover:opacity-100" />
          </div>
          
          <div className="hidden md:block w-px h-24 bg-[var(--color-border-light)]"></div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="font-mono text-sm tracking-[0.3em] font-semibold text-[var(--color-secondary-text)]">ORGANIZED BY</div>
            <div className="flex gap-10 items-center flex-wrap justify-center">
              <img src={codex} alt="Codex Club" className="h-16 w-auto hover:scale-105 transition-transform duration-300 opacity-80 hover:opacity-100" />
              <img src={velocity} alt="Velocity Club" className="h-16 w-auto hover:scale-105 transition-transform duration-300 opacity-80 hover:opacity-100" />
            </div>
          </div>
        </div>

        <div className="font-mono text-sm tracking-[0.3em] font-semibold mb-6 text-[var(--color-secondary-text)]">
          POWERED BY
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none flex items-center justify-center font-['Space_Grotesk'] text-white mb-8 uppercase">
          Our Sponsors
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-6 md:gap-10">
          {sponsors.map((sponsor, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-8 bg-[#111] border border-[var(--color-border-light)] rounded-sm hover:-translate-y-2 hover:border-[var(--color-accent)] hover:shadow-[0_10px_30px_rgba(6,190,252,0.15)] transition-all duration-300 w-[180px] h-[140px] group">
              <img src={sponsor.logo} alt={sponsor.name} className="max-w-[100px] max-h-[60px] object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
