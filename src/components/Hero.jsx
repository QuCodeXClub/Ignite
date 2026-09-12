import React from 'react';
import { ArrowRight, ArrowDown, Calendar, MapPin, Flame, ChevronRight, Zap } from 'lucide-react';
import data from '../data/data.json';

import hp from '../assets/hp-logo.svg';
import gfg from '../assets/gfg-logo.svg';
import codecrafters from '../assets/codecrafters-logo.svg';
import interviewBuddy from '../assets/interviewBuddy-logo.svg';
import memcode from '../assets/memcode-logo.svg';
import osen from '../assets/osen-logo.svg';
import unstop from '../assets/unstop-logo.svg';

const sponsorLogos = [
  { name: 'HP', logo: hp },
  { name: 'GeeksforGeeks', logo: gfg },
  { name: 'CodeCrafters', logo: codecrafters },
  { name: 'InterviewBuddy', logo: interviewBuddy },
  { name: 'Memcode', logo: memcode },
  { name: 'OSEN', logo: osen },
  { name: 'Unstop', logo: unstop },
];

const Hero = () => {
  const hero = data.hero;
  const events = data.events;

  // Determine next event (first event in data, since all are upcoming)
  const nextEvent = events[0] ?? null;

  const collage = hero.collage ?? [];

  return (
    <section
      className="relative flex flex-col w-full min-h-screen px-6 md:px-16 pt-28 md:pt-0 pb-0"
      id="home"
    >
      {/* ── Main two-column layout ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full flex-1 gap-10 py-10 md:py-16 lg:min-h-screen">

        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col gap-6 w-full lg:w-[48%] max-w-xl">
          {/* Eyebrow */}
          <div className="font-mono text-xs tracking-[0.3em] font-semibold text-[var(--color-secondary-text)] flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[var(--color-accent)]" />
            {hero.eyebrow}
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-[-4px] leading-[0.9] font-['Space_Grotesk'] text-white">
            IGN
            <span className="inline-flex items-center justify-center -mx-1 -translate-y-1">
              <Flame
                fill="var(--color-accent)"
                color="var(--color-accent)"
                strokeWidth={0}
                className="w-[0.85em] h-[0.85em] drop-shadow-[0_0_20px_rgba(6,190,252,0.9)]"
              />
            </span>
            TE
            <span className="block text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-accent)] mt-1">
              {hero.subheading}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-[var(--color-secondary-text)] leading-relaxed font-sans max-w-sm">
            {hero.description}
          </p>

          {/* Date + Venue */}
          <div className="flex flex-wrap gap-4 text-sm font-medium text-white font-sans">
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-[var(--color-accent)]" />
              <span>{hero.dates}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[var(--color-accent)]" />
              <span>{hero.venue}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 font-sans">
            {hero.buttons.map((btn, i) =>
              btn.primary ? (
                <a
                  key={i}
                  href={btn.href}
                  className="bg-[var(--color-accent)] text-black px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group"
                >
                  {btn.label}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <a
                  key={i}
                  href={btn.href}
                  className="border border-[var(--color-border-light)] bg-white/5 backdrop-blur-sm text-white px-7 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {btn.label}
                  <ArrowDown size={15} />
                </a>
              )
            )}
          </div>

          {/* ── Next Event Preview ── */}
          {nextEvent && (
            <div className="flex items-center gap-3 bg-white/[0.04] border border-[var(--color-border-light)] rounded-xl px-4 py-3 backdrop-blur-sm w-fit max-w-full">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center shrink-0">
                <Zap size={14} className="text-[var(--color-accent)]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono tracking-widest text-[var(--color-secondary-text)] uppercase mb-0.5">Next Event</div>
                <div className="text-sm font-bold text-white font-['Space_Grotesk'] truncate">{nextEvent.name}</div>
                <div className="text-[11px] text-[var(--color-secondary-text)] font-mono">{nextEvent.date} · {nextEvent.time}</div>
              </div>
              <a href="#events" className="ml-auto shrink-0 text-[var(--color-accent)] hover:text-white transition-colors">
                <ChevronRight size={18} />
              </a>
            </div>
          )}

          {/* ── About Ignite preview ── */}
          <div className="border-l-2 border-[var(--color-accent)]/40 pl-4">
            <p className="text-xs text-[var(--color-secondary-text)] leading-relaxed font-sans mb-2">
              {hero.aboutPreview}
            </p>
            <a href="#about" className="text-xs font-mono font-semibold text-[var(--color-accent)] hover:underline underline-offset-2 flex items-center gap-1">
              Learn more about Ignite <ChevronRight size={12} />
            </a>
          </div>
        </div>

        {/* ── RIGHT: Photo collage ── */}
        <div className="w-full lg:w-[48%] max-w-lg lg:max-w-none lg:flex-1">
          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            {/* Row 1: tall left + stack right */}
            <div className="row-span-2 overflow-hidden rounded-2xl relative">
              {collage[0] && (
                <img
                  src={collage[0]}
                  alt="Event photo 1"
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              {collage[1] && (
                <img
                  src={collage[1]}
                  alt="Event photo 2"
                  className="w-full h-full object-cover aspect-video"
                  loading="lazy"
                />
              )}
            </div>
            <div className="overflow-hidden rounded-2xl">
              {collage[2] && (
                <img
                  src={collage[2]}
                  alt="Event photo 3"
                  className="w-full h-full object-cover aspect-video"
                  loading="lazy"
                />
              )}
            </div>

            {/* Row 2: two square tiles */}
            <div className="overflow-hidden rounded-2xl">
              {collage[3] && (
                <img
                  src={collage[3]}
                  alt="Event photo 4"
                  className="w-full h-full object-cover aspect-square"
                  loading="lazy"
                />
              )}
            </div>
            <div className="overflow-hidden rounded-2xl relative">
              {collage[4] && (
                <img
                  src={collage[4]}
                  alt="Event photo 5"
                  className="w-full h-full object-cover aspect-square"
                  loading="lazy"
                />
              )}
              {/* Last tile overlay with event count */}
              {collage[5] && (
                <>
                  <img
                    src={collage[5]}
                    alt="Event photo 6"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
                    <div className="text-center">
                      <div className="text-2xl font-black text-white font-['Space_Grotesk']">{data.events.length}+</div>
                      <div className="text-[10px] font-mono text-[var(--color-accent)] tracking-widest uppercase">Events</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Sponsor Strip ── */}
      <a
        href="#sponsors"
        className="relative z-10 w-full border-t border-[var(--color-border-light)] bg-black/30 backdrop-blur-sm py-4 px-6 md:px-16 flex items-center gap-6 hover:bg-black/50 transition-colors group cursor-pointer"
        aria-label="View sponsors"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] font-semibold text-[var(--color-secondary-text)] shrink-0 uppercase">
          Powered by
        </span>
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-8">
            {sponsorLogos.map((s, i) => (
              <img
                key={i}
                src={s.logo}
                alt={s.name}
                className="h-6 w-auto object-contain filter grayscale opacity-50 group-hover:opacity-70 transition-opacity shrink-0"
              />
            ))}
          </div>
        </div>
        <ChevronRight size={16} className="text-[var(--color-secondary-text)] shrink-0 group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 transition-all" />
      </a>
    </section>
  );
};

export default Hero;
