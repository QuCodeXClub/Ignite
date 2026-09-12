import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Terminal, Gamepad2, Presentation, Lightbulb, MapPin, ExternalLink, X, Clock } from 'lucide-react';
import data from '../data/data.json';
import logo from '../assets/ignite-logo.svg';

const getCategoryIcon = (category) => {
  switch (category?.toLowerCase()) {
    case 'coding':
      return <Terminal className="w-5 h-5" />;
    case 'gaming':
      return <Gamepad2 className="w-5 h-5" />;
    case 'exhibition':
    case 'showcase':
      return <Presentation className="w-5 h-5" />;
    case 'fun':
    case 'webinar':
    default:
      return <Lightbulb className="w-5 h-5" />;
  }
};

const EventCard = ({ event, onClick }) => {
  const isRegOpen = event.registrationLink && event.registrationLink.trim() !== "";

  return (
    <div
      onClick={() => onClick(event)}
      className="group relative bg-[#0d0d0d] border border-[var(--color-border-light)] rounded-2xl cursor-pointer flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[var(--color-accent)]/50 hover:shadow-[0_0_0_1px_rgba(6,190,252,0.15),0_12px_40px_-8px_rgba(6,190,252,0.18),0_4px_16px_rgba(0,0,0,0.6)]"
    >
      {/* Image container — isolated overflow so shadow on outer card is never clipped */}
      {event.image && (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl shrink-0">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Bottom fade so image blends into card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
          {/* Category badge */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 text-[var(--color-accent)] text-[10px] font-mono font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full">
            <span className="w-3 h-3 flex-shrink-0">{getCategoryIcon(event.category)}</span>
            {event.category}
          </div>
          {/* Day badge */}
          <div className="absolute top-2.5 right-2.5 bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">
            {event.day}
          </div>
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col gap-2.5 p-3.5">
        {/* Title */}
        <h4 className="text-sm font-bold text-white font-['Space_Grotesk'] group-hover:text-[var(--color-accent)] transition-colors duration-200 leading-snug line-clamp-2">
          {event.name}
        </h4>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[var(--color-secondary-text)] font-mono">
          <span className="flex items-center gap-1 min-w-0">
            <Clock className="w-2.5 h-2.5 text-[var(--color-accent)] shrink-0" />
            <span className="truncate">{event.time}</span>
          </span>
          {event.venue && (
            <span className="flex items-center gap-1 min-w-0">
              <MapPin className="w-2.5 h-2.5 text-[var(--color-accent)] shrink-0" />
              <span className="truncate">{event.venue}</span>
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-border-light)] mx-0.5" />

        {/* Action */}
        {isRegOpen ? (
          <a
            href={event.registrationLink}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-bold bg-[var(--color-accent)] text-black rounded-lg transition-all duration-200 hover:bg-white"
          >
            Register Now <ExternalLink className="w-2.5 h-2.5" />
          </a>
        ) : (
          <button
            disabled
            onClick={(e) => e.stopPropagation()}
            className="w-full flex items-center justify-center py-1.5 text-[11px] font-semibold bg-[#161616] text-[#444] rounded-lg cursor-not-allowed border border-[#222]"
          >
            Registration Closed
          </button>
        )}
      </div>
    </div>
  );
};


const EventModal = ({ event, onClose }) => {
  useEffect(() => {
    if (!event) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [event, onClose]);

  if (!event) return null;
  const isRegOpen = event.registrationLink && event.registrationLink.trim() !== "";

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-[#0a0a0a] border border-[var(--color-border-light)] w-full max-w-2xl rounded-xl shadow-[0_0_40px_rgba(6,190,252,0.15)] flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white hover:text-[var(--color-accent)] transition-colors rounded-full hover:bg-black/50 z-30 backdrop-blur-md"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="overflow-y-auto flex flex-col w-full h-full relative scrollbar-hide">
          {event.image && (
            <div className="w-full relative shrink-0 aspect-video md:aspect-[21/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10"></div>
              <img 
                src={event.image} 
                alt={event.name} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div className="p-8 sm:p-10 pt-0 md:pt-0 -mt-12 sm:-mt-16 z-20 flex flex-col gap-6 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-[0.03] blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="flex items-center gap-3 text-[var(--color-accent)] font-mono text-sm tracking-widest font-semibold uppercase">
              {getCategoryIcon(event.category)}
              <span>{event.category}</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk'] leading-tight text-white drop-shadow-md">
              {event.name}
            </h2>
            
            <div className="flex flex-wrap gap-4 sm:gap-8 border-y border-[var(--color-border-light)] py-4 my-2 font-mono text-sm bg-[#0a0a0a]/80 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                <span>{event.day}, {event.date} <br className="sm:hidden" /> {event.time}</span>
              </div>
              {event.venue && (
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>
            
            <div className="text-[var(--color-secondary-text)] text-lg leading-relaxed font-sans min-h-[100px]">
              {event.description}
            </div>
            
            <div className="mt-8 pt-4 border-t border-[var(--color-border-light)]">
              {isRegOpen ? (
                <a 
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[var(--color-accent)] text-black font-bold rounded-sm transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] text-lg group"
                >
                  Register Now <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <button 
                  disabled
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#222] text-[#666] font-semibold rounded-sm cursor-not-allowed border border-[#333] text-lg"
                >
                  Registration Closed
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Events = () => {
  const day1Events = data.events.filter(e => e.day === "Day 1");
  const day2Events = data.events.filter(e => e.day === "Day 2");
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="px-8 py-12 md:px-16 bg-transparent relative z-10" id="events">
      <div className="text-center mb-16">
        <div className="font-mono text-sm tracking-[0.3em] font-semibold mb-4 text-[var(--color-secondary-text)]">COMPETITIONS & SHOWCASES</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none flex items-center justify-center gap-4 font-['Space_Grotesk'] text-white">
          EVENTS <img src={logo} alt="Ignite Logo" className="h-10 md:h-16 w-auto -translate-y-1 drop-shadow-[0_0_15px_rgba(6,190,252,0.4)]" />
        </h2>
      </div>

      <div className="flex flex-col gap-16 max-w-7xl mx-auto">
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-10 flex items-baseline gap-4 font-['Space_Grotesk'] text-white border-b border-[var(--color-border-light)] pb-4 inline-flex pr-12">
            Day 1 <span className="text-xl font-medium text-[var(--color-accent)] font-mono">— 15 Sep</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {day1Events.map((event) => (
              <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-10 flex items-baseline gap-4 font-['Space_Grotesk'] text-white border-b border-[var(--color-border-light)] pb-4 inline-flex pr-12">
            Day 2 <span className="text-xl font-medium text-[var(--color-accent)] font-mono">— 16 Sep</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {day2Events.map((event) => (
              <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
            ))}
          </div>
        </div>
      </div>
      
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
};

export default Events;
