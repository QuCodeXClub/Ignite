import React from 'react';
import { ArrowRight, ArrowDown, Calendar, MapPin, Flame } from 'lucide-react';
import data from '../data/data.json';
import quantumLogo from '../assets/quantum-logo.svg';
import quIcon from '../assets/qu-icon.svg';
import codexLogo from '../assets/codex-logo.svg';
import velocityLogo from '../assets/velocity-logo.svg';
import ZoomableImage from './ZoomableImage';

const Hero = () => {
  const hero = data.hero;
  const collage = (hero.collage ?? []).slice(0, 4);

  return (
    <section
      className="relative w-full min-h-screen flex items-center px-6 md:px-16"
      id="home"
    >
      {/* Content column — left side only, never overlaps 3D model */}
      <div className="relative z-10 flex flex-col gap-4 md:gap-5 w-full md:w-[55%] lg:w-[46%] max-w-xl pt-24 pb-12 md:pt-0 md:pb-0">

        {/* ── 3-logo identity row ── */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="https://qucodex.com" target="_blank" rel="noopener noreferrer">
            <img
              src={codexLogo}
              alt="Codex Club"
              className="h-7 sm:h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>
          <div className="w-px h-6 bg-[var(--color-border-light)] shrink-0" />
          <a href="https://quantumuniversity.edu.in/" target="_blank" rel="noopener noreferrer">
            <img
              src={quIcon}
              alt="Quantum University"
              className="h-7 sm:h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>
          <div className="w-px h-6 bg-[var(--color-border-light)] shrink-0" />
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={velocityLogo}
              alt="Velocity Club"
              className="h-7 sm:h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] font-semibold text-[var(--color-secondary-text)] uppercase">
          <span className="inline-block w-5 h-px bg-[var(--color-accent)]" />
          {hero.eyebrow}
        </div>

        {/* Heading: IGNITE 2026 */}
        <div>
          <h1 className="font-['Space_Grotesk'] font-black leading-[0.88] tracking-[-3px] text-white text-5xl sm:text-6xl md:text-7xl xl:text-8xl flex flex-col md:flex-row items-start md:items-center md:gap-4">
            <span>IGNITE</span>
            <span className="flex items-center">
              2
              <span className="inline-flex items-center justify-center -mx-0.5 -translate-y-[0.06em]">
                <Flame
                  fill="var(--color-accent)"
                  color="var(--color-accent)"
                  strokeWidth={0}
                  className="w-[0.82em] h-[0.82em] drop-shadow-[0_0_20px_rgba(6,190,252,0.9)]"
                />
              </span>
              26
            </span>
          </h1>
          <p className="font-['Space_Grotesk'] font-bold text-xl sm:text-2xl md:text-3xl text-[var(--color-accent)] tracking-tight mt-1.5">
            {hero.subheading}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-[var(--color-secondary-text)] leading-relaxed font-sans max-w-xs md:max-w-sm">
          {hero.description}
        </p>

        {/* Date + Venue */}
        <div className="flex flex-wrap gap-3 text-xs font-mono font-medium text-white">
          <div className="flex items-center gap-1.5">
            <Calendar size={12} className="text-[var(--color-accent)]" />
            <span>{hero.dates}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={12} className="text-[var(--color-accent)]" />
            <span>{hero.venue}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          {hero.buttons.map((btn, i) =>
            btn.primary ? (
              <a
                key={i}
                href={btn.href}
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-black px-5 py-2.5 rounded-lg font-bold text-sm transition-all hover:bg-white hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] group"
              >
                {btn.label}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            ) : (
              <a
                key={i}
                href={btn.href}
                className="inline-flex items-center gap-2 border border-[var(--color-border-light)] bg-white/5 backdrop-blur-sm text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {btn.label}
                <ArrowDown size={14} />
              </a>
            )
          )}
        </div>

        {/* Quantum University identity block */}
        <div className="flex items-center gap-3 bg-white/[0.04] border border-[var(--color-border-light)] rounded-xl px-4 py-3 w-fit max-w-full backdrop-blur-sm">
          <a href="https://quantumuniversity.edu.in/" target="_blank" rel="noopener noreferrer">
            <img
              src={quantumLogo}
              alt="Quantum University"
              className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
          <div className="h-5 w-px bg-[var(--color-border-light)] shrink-0" />
          <span className="text-xs text-[var(--color-secondary-text)] font-sans leading-snug">
            An initiative by<br />
            <span className="text-white font-semibold">Quantum University</span>
          </span>
        </div>

        {/* Compact photo collage — small thumbnail row */}
        {collage.length > 0 && (
          <div className="flex items-end gap-2">
            {collage.map((src, i) => (
              <div
                key={i}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/10"
                style={{ transform: `rotate(${[-2, 1.5, -1, 2][i] ?? 0}deg)` }}
              >
                <ZoomableImage
                  src={src}
                  alt={`Event photo ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl shrink-0 border border-[var(--color-border-light)] bg-[var(--color-accent)]/5 flex flex-col items-center justify-center">
              <span className="text-base font-black text-white font-['Space_Grotesk']">{data.events.length}</span>
              <span className="text-[8px] font-mono text-[var(--color-accent)] tracking-widest uppercase">Events</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
