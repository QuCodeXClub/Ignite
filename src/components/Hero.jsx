import React from 'react';
import { ArrowRight, ArrowDown, Calendar, MapPin, Flame, ChevronRight, Zap } from 'lucide-react';
import data from '../data/data.json';

const Hero = () => {
  const hero = data.hero;
  const events = data.events;
  const nextEvent = events[0] ?? null;
  const collage = (hero.collage ?? []).slice(0, 4);

  return (
    <section
      className="relative flex flex-col w-full min-h-screen px-6 md:px-16"
      id="home"
    >
      {/* Content — constrained to left ~50% so 3D model is never covered */}
      <div className="relative z-10 flex flex-col justify-center h-full flex-1 w-full md:w-[55%] lg:w-[48%] max-w-2xl py-32 md:py-0 md:min-h-screen gap-5">

        {/* Eyebrow */}
        <div className="font-mono text-xs tracking-[0.3em] font-semibold text-[var(--color-secondary-text)] flex items-center gap-2">
          <span className="inline-block w-5 h-px bg-[var(--color-accent)]" />
          {hero.eyebrow}
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-[-4px] leading-[0.85] font-['Space_Grotesk'] text-white">
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
          <span className="block text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-accent)] mt-2 font-['Space_Grotesk']">
            {hero.subheading}
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-[var(--color-secondary-text)] leading-relaxed font-sans max-w-xs md:max-w-sm">
          {hero.description}
        </p>

        {/* Date + Venue */}
        <div className="flex flex-wrap gap-4 text-xs font-medium text-white font-mono">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-[var(--color-accent)]" />
            <span>{hero.dates}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[var(--color-accent)]" />
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
                className="bg-[var(--color-accent)] text-black px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-all hover:bg-white hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] group"
              >
                {btn.label}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            ) : (
              <a
                key={i}
                href={btn.href}
                className="border border-[var(--color-border-light)] bg-white/5 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {btn.label}
                <ArrowDown size={14} />
              </a>
            )
          )}
        </div>

        {/* Next Event Preview */}
        {nextEvent && (
          <a
            href="#events"
            className="flex items-center gap-3 bg-white/[0.04] border border-[var(--color-border-light)] rounded-xl px-3.5 py-2.5 backdrop-blur-sm w-fit max-w-full hover:border-[var(--color-accent)]/40 transition-colors group"
          >
            <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center shrink-0">
              <Zap size={13} className="text-[var(--color-accent)]" />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] font-mono tracking-widest text-[var(--color-secondary-text)] uppercase mb-0.5">Next Event</div>
              <div className="text-sm font-bold text-white font-['Space_Grotesk'] truncate leading-tight">{nextEvent.name}</div>
              <div className="text-[10px] text-[var(--color-secondary-text)] font-mono">{nextEvent.date} · {nextEvent.time}</div>
            </div>
            <ChevronRight size={15} className="ml-1 shrink-0 text-[var(--color-secondary-text)] group-hover:text-[var(--color-accent)] transition-colors" />
          </a>
        )}

        {/* Compact photo collage — 4 small thumbnails */}
        {collage.length > 0 && (
          <div className="flex gap-2 mt-1">
            {collage.map((src, i) => (
              <div
                key={i}
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0 border border-white/10"
                style={{ transform: `rotate(${[-2, 1.5, -1, 2][i] ?? 0}deg)` }}
              >
                <img
                  src={src}
                  alt={`Event ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl shrink-0 border border-[var(--color-border-light)] bg-[var(--color-accent)]/5 flex flex-col items-center justify-center">
              <span className="text-lg font-black text-white font-['Space_Grotesk']">{data.events.length}</span>
              <span className="text-[9px] font-mono text-[var(--color-accent)] tracking-widest uppercase">Events</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
