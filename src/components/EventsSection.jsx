import React from 'react';
import { CodeXml, Gamepad2, ArrowRight } from 'lucide-react';

const EventsSection = () => {
  return (
    <section className="events-section">
      <div className="events-header-top">
        <div className="section-label-group">
          <span className="section-number">03</span>
          <div className="section-line"></div>
          <span className="section-label">EVENTS</span>
        </div>
        <div className="events-tags">
          <span>DISCOVER</span>
          <span>×</span>
          <span>COMPETE</span>
          <span>×</span>
          <span>BELONG</span>
        </div>
      </div>

      <div className="events-header-main">
        <div className="events-title-area">
          <h2 className="events-title">
            Two Worlds.<br/>
            One <span className="title-orange">Ignite.</span>
          </h2>
          <p className="events-subtitle">
            From coding to clutch plays — there's<br/>
            something for everyone.
          </p>
        </div>  
        </div>
      <div className="events-cards">
        <div className="event-card technical-card">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Technical background" className="card-bg" />
          <div className="card-overlay"></div>
          
          <div className="card-top">
            <div className="card-number">
              <span>01</span>
              <div className="card-line"></div>
            </div>
            <div className="card-floating-text right-align">
              BUILD<br/>
              SOLVE<br/>
              INNOVATE
            </div>
          </div>

          <div className="card-content">
            <div className="card-icon-wrapper">
              <CodeXml size={24} color="#fff" />
            </div>
            <h3 className="card-title">TECHNICAL</h3>
            <p className="card-desc">
              Solve real problems.<br/>
              Build what's next.
            </p>
            
            <ul className="card-list">
              <li>SIH HACKATHON GRAND FINALS</li>
              <li>DSA HACKATHON</li>
              <li>TECHNICAL TREASURE HUNT</li>
              <li>And more</li>
            </ul>

            <button className="card-explore-btn">
              <span className="circle-arrow"><ArrowRight size={16} /></span>
              Explore Technical Events
            </button>
          </div>
        </div>

        {/* Gaming Card */}
        <div className="event-card gaming-card">
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" alt="Gaming background" className="card-bg" />
          <div className="card-overlay"></div>
          
          <div className="card-top">
            <div className="card-number">
              <span>02</span>
              <div className="card-line"></div>
            </div>
            <div className="card-floating-text right-align">
              PLAY<br/>
              COMPETE<br/>
              CONNECT
            </div>
          </div>

          <div className="card-content">
            <div className="card-icon-wrapper">
              <Gamepad2 size={24} color="#fff" />
            </div>
            <h3 className="card-title">GAMING</h3>
            <p className="card-desc">
              Play. Compete.<br/>
              Be the best.
            </p>
            
            <ul className="card-list">
              <li>BGMI</li>
            </ul>

            <button className="card-explore-btn">
              <span className="circle-arrow"><ArrowRight size={16} /></span>
              Explore Gaming Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
