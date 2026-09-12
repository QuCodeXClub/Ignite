import React from 'react';
import hp from '../assets/hp-logo.svg';
import gfg from '../assets/gfg-logo.svg';
import codecrafters from '../assets/codecrafters-logo.svg';
import interviewBuddy from '../assets/interviewBuddy-logo.svg';
import memcode from '../assets/memcode-logo.svg';
import osen from '../assets/osen-logo.svg';
import unstop from '../assets/unstop-logo.svg';

const sponsors = [
  { name: 'HP', logo: hp },
  { name: 'GeeksforGeeks', logo: gfg },
  { name: 'CodeCrafters', logo: codecrafters },
  { name: 'InterviewBuddy', logo: interviewBuddy },
  { name: 'Memcode', logo: memcode },
  { name: 'OSEN', logo: osen },
  { name: 'Unstop', logo: unstop },
];

const Sponsors = () => (
  <section className="py-12 px-6 md:px-16 bg-transparent relative z-10" id="sponsors">
    <div className="max-w-5xl mx-auto flex flex-col items-center">

      {/* Section label */}
      <div className="font-mono text-sm tracking-[0.3em] font-semibold mb-3 text-[var(--color-secondary-text)]">
        POWERED BY
      </div>
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none font-['Space_Grotesk'] text-white mb-10 uppercase">
        Our Sponsors
      </h2>

      {/*
        Use flex-wrap + justify-center so incomplete final rows auto-center.
        Each card is a fixed w-[160px] so cards don't stretch on large screens.
      */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[140px] h-[110px] md:w-[160px] md:h-[120px] bg-black/40 backdrop-blur-md border border-white/10 rounded-xl hover:-translate-y-1.5 hover:border-[var(--color-accent)] hover:shadow-[0_8px_24px_rgba(6,190,252,0.12)] transition-all duration-300 group p-5"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className={`max-w-[100px] max-h-[52px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 ${sponsor.name === 'CodeCrafters' ? 'brightness-0 invert' : ''}`}
            />
          </a>
        ))}
      </div>

    </div>
  </section>
);

export default Sponsors;
