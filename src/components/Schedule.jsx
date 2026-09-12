import React, { useState } from 'react';
import { MapPin, Star, Gavel, Trophy, Mic } from 'lucide-react';
import data from '../data/data.json';

const typeConfig = {
  ceremony: {
    icon: <Star className="w-3.5 h-3.5" />,
    accent: 'text-yellow-400',
    dot: 'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.7)]',
    badge: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
  },
  event: {
    icon: <Trophy className="w-3.5 h-3.5" />,
    accent: 'text-[var(--color-accent)]',
    dot: 'bg-[var(--color-accent)] shadow-[0_0_8px_rgba(6,190,252,0.7)]',
    badge: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/20',
  },
  judging: {
    icon: <Gavel className="w-3.5 h-3.5" />,
    accent: 'text-purple-400',
    dot: 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.7)]',
    badge: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
  },
};

const getConfig = (type) => typeConfig[type] || typeConfig.event;

const ScheduleItem = ({ item, isLast }) => {
  const cfg = getConfig(item.type);
  return (
    <div className="relative flex gap-4 md:gap-6 group">
      {/* Timeline spine + dot */}
      <div className="flex flex-col items-center shrink-0">
        <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 transition-transform duration-200 group-hover:scale-125 ${cfg.dot}`} />
        {!isLast && (
          <div className="w-px flex-1 mt-1.5 bg-gradient-to-b from-[var(--color-border-light)] to-transparent min-h-[36px]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-6 flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          {/* Time pill */}
          <span className={`inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full border ${cfg.badge}`}>
            {item.time}
          </span>
          {/* Type badge */}
          <span className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest opacity-70 ${cfg.accent}`}>
            {cfg.icon}
            {item.type}
          </span>
        </div>

        <h4 className="text-sm md:text-base font-bold text-white font-['Space_Grotesk'] leading-snug mb-1.5 group-hover:text-[var(--color-accent)] transition-colors duration-200">
          {item.activity}
        </h4>

        {item.venue && (
          <div className="flex items-center gap-1 text-[11px] text-[var(--color-secondary-text)]">
            <MapPin className="w-2.5 h-2.5 shrink-0" />
            <span>{item.venue}</span>
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
  const dateLabel = activeDay === 'Day 1' ? '15 Sep 2026' : '16 Sep 2026';

  return (
    <section className="px-6 py-10 md:px-16 bg-transparent relative z-10" id="schedule">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="font-mono text-sm tracking-[0.3em] font-semibold mb-4 text-[var(--color-secondary-text)]">TIMELINE</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none font-['Space_Grotesk'] text-white">
          SCHEDULE
        </h2>
      </div>

      {/* Day Switcher */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-1 p-1 bg-[#111] border border-[var(--color-border-light)] rounded-xl">
          {['Day 1', 'Day 2'].map((day) => {
            const isActive = activeDay === day;
            const date = day === 'Day 1' ? '15 Sep' : '16 Sep';
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`relative px-6 py-2 rounded-lg text-sm font-semibold font-mono transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-black shadow-[0_0_16px_rgba(6,190,252,0.3)]'
                    : 'text-[var(--color-secondary-text)] hover:text-white'
                }`}
              >
                <span>{day}</span>
                <span className={`ml-2 text-[10px] font-normal tracking-wider ${isActive ? 'text-black/60' : 'text-[var(--color-secondary-text)]/60'}`}>
                  {date}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-xl mx-auto">
        {/* Day label strip */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-[var(--color-border-light)]" />
          <span className="text-xs font-mono text-[var(--color-secondary-text)] tracking-widest uppercase">
            {activeDay} — {dateLabel}
          </span>
          <div className="h-px flex-1 bg-[var(--color-border-light)]" />
        </div>

        {/* Items */}
        <div>
          {items.map((item, index) => (
            <ScheduleItem key={item.id} item={item} isLast={index === items.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
