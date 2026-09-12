import React from 'react';
import codex from '../assets/codex-logo.svg';
import velocity from '../assets/velocity-logo.svg';

const OrganizedBy = () => (
  <section className="py-12 px-6 md:px-16 bg-transparent relative z-10" id="organized-by">
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

      {/* Label */}
      <div className="font-mono text-sm tracking-[0.3em] font-semibold mb-3 text-[var(--color-secondary-text)] uppercase">
        Organized By
      </div>

      {/* Divider */}
      <div className="w-16 h-px bg-[var(--color-accent)]/40 mb-8" />

      {/* Logos */}
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
        <div className="flex flex-col items-center gap-3">
          <a href="https://qucodex.com" target="_blank" rel="noopener noreferrer">
            <img
              src={codex}
              alt="Codex Club"
              className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Vertical divider on desktop */}
        <div className="hidden md:block w-px h-16 bg-[var(--color-border-light)]" />

        <div className="flex flex-col items-center gap-3">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={velocity}
              alt="Velocity Club"
              className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

    </div>
  </section>
);

export default OrganizedBy;
