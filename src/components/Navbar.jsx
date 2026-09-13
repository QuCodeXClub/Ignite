import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/ignite-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-[#050505]/95 backdrop-blur-md shadow-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between relative z-50">
        <a href="#home" className="flex items-center gap-3 group z-50">
          <img src={logo} alt="Ignite Logo" className="h-14 md:h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-widest uppercase text-[var(--color-secondary-text)]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors relative group py-2">
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--color-accent)]"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#events" className="bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-2.5 rounded-sm font-semibold tracking-wide flex items-center gap-2 transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-black hover:shadow-[0_0_15px_rgba(6,190,252,0.4)]">
            Explore Events
          </a>
        </div>

        {/* Mobile Toggle Button (Animated Hamburger) */}
        <button 
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white hover:text-[var(--color-accent)] transition-colors group focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 translate-x-2' : 'opacity-100'}`} />
          <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Nav Overlay (Smooth Dropdown) */}
      <div 
        className={`fixed inset-x-0 top-[88px] bg-[#050505] border-b border-white/5 md:hidden transition-all duration-500 ease-out origin-top ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto shadow-2xl pb-6' : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-8 gap-6 pt-12">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`text-2xl font-bold font-['Space_Grotesk'] text-white hover:text-[var(--color-accent)] transition-all duration-300 tracking-wide`}
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-full h-px bg-white/10 my-4" />

          <a 
            href="#events" 
            onClick={() => setIsOpen(false)} 
            className="w-full text-center border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-4 rounded-xl font-bold text-lg mt-2 hover:bg-[var(--color-accent)] hover:text-black hover:shadow-[0_0_20px_rgba(6,190,252,0.3)] transition-all duration-300"
            style={{ transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms' }}
          >
            Explore Events
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
