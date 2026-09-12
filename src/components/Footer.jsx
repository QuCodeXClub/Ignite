import React from 'react';
import { Flame } from 'lucide-react';
import logo from '../assets/ignite-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#050505] py-16 px-8 md:px-16 text-[var(--color-secondary-text)] font-sans relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
          <a href="#home" className="flex items-center gap-4 hover:opacity-80 transition-opacity w-fit">
            <img src={logo} alt="Ignite Logo" className="h-10 w-auto grayscale brightness-0 invert opacity-80" />
            <span className="font-['Space_Grotesk'] font-bold text-2xl tracking-tighter text-white flex flex-col md:flex-row items-start md:items-center md:gap-2 leading-[0.85] md:leading-none">
              <span>IGNITE</span>
              <span className="flex items-center text-[var(--color-accent)]">
                2
                <span className="inline-flex items-center justify-center mx-0 -translate-y-[0.06em]">
                  <Flame
                    fill="currentColor"
                    strokeWidth={0}
                    className="w-[0.85em] h-[0.85em] drop-shadow-[0_0_10px_rgba(6,190,252,0.5)]"
                  />
                </span>
                26
              </span>
            </span>
          </a>
          <p className="max-w-sm text-sm leading-relaxed">
            The premier tech-fest and Engineers' Day celebration. Building the future, one line of code at a time.
          </p>
          <div className="flex flex-col gap-2 mt-2 font-medium">
            <a href="https://qucodex.com/event-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">Event Policy</a>
            <a href="https://qucodex.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a>
            <a href="https://qucodex.com/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">Terms & Conditions</a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold font-mono tracking-widest text-sm mb-2">QUICK LINKS</h4>
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold font-mono tracking-widest text-sm mb-2">CONTACT</h4>
          <p className="text-sm">Quantum University Campus<br/>Roorkee, Uttarakhand</p>
          <a href="mailto:info@ignite26.com" className="hover:text-[var(--color-accent)] transition-colors mt-2">codex.club@quantumeducation.in</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--color-border-light)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; 2026 Ignite Tech Fest. All rights reserved.</p>
        <p>Organized by <span className="text-white font-semibold">Codex</span> & <span className="text-white font-semibold">Velocity</span></p>
      </div>
    </footer>
  );
};

export default Footer;
