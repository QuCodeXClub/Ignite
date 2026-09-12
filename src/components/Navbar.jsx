import React, { useState, useEffect } from 'react';
import logo from '../assets/ignite-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img src={logo} alt="Ignite Logo" className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-widest uppercase text-[var(--color-secondary-text)]">
          <a href="#home" className="hover:text-white transition-colors relative group py-2">
            Home
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--color-accent)]"></span>
          </a>
          <a href="#events" className="hover:text-white transition-colors relative group py-2">
            Events
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--color-accent)]"></span>
          </a>
          <a href="#schedule" className="hover:text-white transition-colors relative group py-2">
            Schedule
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--color-accent)]"></span>
          </a>
          <a href="#sponsors" className="hover:text-white transition-colors relative group py-2">
            Sponsors
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--color-accent)]"></span>
          </a>
          <a href="#about" className="hover:text-white transition-colors relative group py-2">
            About
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--color-accent)]"></span>
          </a>
        </div>

        <div className="hidden md:block">
          <a href="#events" className="bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-2.5 rounded-sm font-semibold tracking-wide flex items-center gap-2 transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-black hover:shadow-[0_0_15px_rgba(6,190,252,0.4)]">
            Explore Events
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-[var(--color-accent)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col p-8 gap-6 md:hidden z-50">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-[var(--color-accent)] transition-colors tracking-wide">Home</a>
          <a href="#events" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-[var(--color-accent)] transition-colors tracking-wide">Events</a>
          <a href="#schedule" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-[var(--color-accent)] transition-colors tracking-wide">Schedule</a>
          <a href="#sponsors" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-[var(--color-accent)] transition-colors tracking-wide">Sponsors</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-[var(--color-accent)] transition-colors tracking-wide">About</a>
          <a href="#events" onClick={() => setIsOpen(false)} className="w-full text-center border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-3 rounded-sm font-semibold mt-4 hover:bg-[var(--color-accent)] hover:text-black transition-colors">
            Explore Events
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
