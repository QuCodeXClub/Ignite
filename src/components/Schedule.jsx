import React, { useState } from 'react';
import { MapPin, Star, Gavel, Trophy } from 'lucide-react';
import data from '../data/data.json';

const typeConfig = {
  ceremony: {
    icon: <Star className="w-3 h-3" />,
    dot: 'bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)] border-2 border-yellow-300',
    badge: 'bg-yellow-400/15 text-yellow-300 border border-yellow-400/30',
    hover: 'group-hover:text-yellow-300',
    line: 'via-yellow-400/20',
  },
  event: {
    icon: <Trophy className="w-3 h-3" />,
    dot: 'bg-[var(--color-accent)] shadow-[0_0_10px_rgba(6,190,252,0.8)] border-2 border-[var(--color-accent)]',
    badge: 'bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30',
    hover: 'group-hover:text-[var(--color-accent)]',
    line: 'via-[var(--color-accent)]/20',
  },
  judging: {
    icon: <Gavel className="w-3 h-3" />,
    dot: 'bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)] border-2 border-purple-300',
    badge: 'bg-purple-400/15 text-purple-300 border border-purple-400/30',
    hover: 'group-hover:text-purple-300',
    line: 'via-purple-400/20',
  },
};

const getConfig = (type) => typeConfig[type] || typeConfig.event;

/* ── Mobile: vertical timeline item ── */
const MobileItem = ({ item, isLast }) => {
  const cfg = getConfig(item.type);
  return (
    <div className="relative flex flex-col items-center group pb-10">
      {/* Connecting line behind everything */}
      {!isLast && <div className="absolute top-2 bottom-[-20px] w-px bg-white/10 z-0" />}
      
      {/* Glowing dot */}
      <div className={`relative z-10 w-3 h-3 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-125 bg-[#050505] shadow-[0_0_0_4px_#050505] ${cfg.dot}`} />
      
      {/* Content */}
      <div className="relative z-10 mt-4 text-center px-4 bg-black/40 backdrop-blur-md py-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col items-center border border-white/10 rounded-2xl w-full max-w-[280px]">
        {/* Time badge */}
        <span className={`inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full mb-2 ${cfg.badge}`}>
          {item.time}
        </span>
        <h4 className={`text-sm font-bold text-white font-['Space_Grotesk'] leading-snug transition-colors ${cfg.hover}`}>
          {item.activity}
        </h4>
        {item.venue && (
          <div className="flex items-center justify-center gap-1 text-[11px] text-[var(--color-secondary-text)] mt-1.5">
            <MapPin className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate">{item.venue}</span>
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Desktop: horizontal timeline node ── */
const DesktopItem = ({ item }) => {
  const cfg = getConfig(item.type);
  return (
    <div className="flex-1 flex flex-col items-center group relative min-w-0 px-2">
      {/* Glowing dot */}
      <div className={`w-3.5 h-3.5 rounded-full shrink-0 z-10 transition-transform duration-200 group-hover:scale-125 ${cfg.dot}`} />

      {/* Card below dot */}
      <div className="mt-5 w-full text-center">
        {/* Time badge */}
        <span className={`inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full mb-2 ${cfg.badge}`}>
          {cfg.icon}
          {item.time}
        </span>
        {/* Activity name */}
        <h4 className={`text-sm font-bold text-white font-['Space_Grotesk'] leading-snug transition-colors line-clamp-2 ${cfg.hover}`}>
          {item.activity}
        </h4>
        {/* Venue */}
        {item.venue && (
          <div className="flex items-center justify-center gap-1 text-[11px] text-[var(--color-secondary-text)] mt-1.5">
            <MapPin className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate max-w-[100px]">{item.venue}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Day 1');

  const day1 = data.schedule.filter(s => s.day === 'Day 1');
  const day2 = data.schedule.filter(s => s.day === 'Day 2');
  const items = activeDay === 'Day 1' ? day1 : day2;

  return (
    <section className="px-6 py-10 md:px-16 bg-transparent relative z-10" id="schedule">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="font-mono text-sm tracking-[0.3em] font-semibold mb-3 text-[var(--color-secondary-text)]">TIMELINE</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none font-['Space_Grotesk'] text-white">
          SCHEDULE
        </h2>
      </div>

      {/* Day Switcher — dates are on the buttons, no repeat needed below */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-1 p-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl">
          {[
            { key: 'Day 1', label: 'Day 1', date: '15 Sep' },
            { key: 'Day 2', label: 'Day 2', date: '16 Sep' },
          ].map(({ key, label, date }) => {
            const isActive = activeDay === key;
            return (
              <button
                key={key}
                onClick={() => setActiveDay(key)}
                className={`relative px-6 py-2 rounded-lg text-sm font-semibold font-mono transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-black shadow-[0_0_16px_rgba(6,190,252,0.3)]'
                    : 'text-[var(--color-secondary-text)] hover:text-white'
                }`}
              >
                {label}
                <span className={`ml-2 text-[11px] font-normal tracking-wide ${isActive ? 'text-black/60' : 'text-[var(--color-secondary-text)]/60'}`}>
                  · {date}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: vertical timeline (hidden on md+) ── */}
      <div className="md:hidden max-w-xs mx-auto">
        {items.map((item, index) => (
          <MobileItem key={item.id} item={item} isLast={index === items.length - 1} />
        ))}
      </div>

      {/* ── Desktop: horizontal timeline (hidden below md) ── */}
      <div className="hidden md:block max-w-5xl mx-auto">
        <div className="relative flex items-start">
          {/* Full-width background line — more visible now */}
          <div className="absolute top-[7px] left-0 right-0 h-px bg-white/15" />
          {items.map((item) => (
            <DesktopItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
