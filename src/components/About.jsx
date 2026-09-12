import React from 'react';
import logo from '../assets/ignite-logo.svg';

const About = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-transparent relative z-10" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 flex flex-col items-start text-left">
          <div className="font-mono text-sm tracking-[0.3em] font-semibold mb-4 text-[var(--color-secondary-text)]">
            DISCOVER
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight font-['Space_Grotesk'] text-white mb-6">
            About Ignite 2026
          </h2>
          <p className="text-lg text-[var(--color-secondary-text)] mb-6 leading-relaxed font-sans">
            Ignite is the premier tech-fest and Engineers' Day celebration, bringing together the brightest minds to innovate, compete, and showcase their technical prowess. Join us for a two-day extravaganza of coding challenges, project exhibitions, gaming tournaments, and insightful webinars.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-sm font-semibold text-[var(--color-accent)]">
            <div className="px-4 py-2 bg-[var(--color-accent)]/10 rounded-sm border border-[var(--color-accent)]/30 backdrop-blur-sm shadow-[0_0_10px_rgba(6,190,252,0.1)]">INNOVATION</div>
            <div className="px-4 py-2 bg-[var(--color-accent)]/10 rounded-sm border border-[var(--color-accent)]/30 backdrop-blur-sm shadow-[0_0_10px_rgba(6,190,252,0.1)]">TECHNOLOGY</div>
            <div className="px-4 py-2 bg-[var(--color-accent)]/10 rounded-sm border border-[var(--color-accent)]/30 backdrop-blur-sm shadow-[0_0_10px_rgba(6,190,252,0.1)]">COMMUNITY</div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={logo} alt="Ignite Logo" className="w-[300px] md:w-[400px] h-auto drop-shadow-[0_0_30px_rgba(6,190,252,0.2)] hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
};

export default About;
