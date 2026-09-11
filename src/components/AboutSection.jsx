import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <div className="glass-card">
          <div className="about-header">
            <span className="section-number">02</span>
            <div className="section-line"></div>
            <span className="section-label">ABOUT IGNITE</span>
          </div>

          <h2 className="about-title">
            <span className="title-orange">ABOUT IGNITE</span><br/>
            More than<br/>
            a <span className="title-orange">Fest.</span>
          </h2>

          <p className="about-desc">
            IGNITE is the annual tech and gaming fest that brings together curious minds, problem solvers, and passionate players. Through competitions, workshops, and experiences, we create a platform to learn, build, and grow — together.
          </p>

          <button className="btn-secondary know-more-btn">
            Know More <span className="arrow">→</span>
          </button>

          <div className="stats-grid">
            <div className="stat-item">
              <h3>10+ </h3>
              <p>Events</p>
            </div>
            <div className="stat-item">
              <h3>400+ </h3>
              <p>Participants</p>
            </div>
            <div className="stat-item">
              <h3>6 Lakhs+</h3>
              <p>Prize Pool Worth</p>
            </div>
            <div className="stat-item">
              <h3>∞</h3>
              <p>Possibilities</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-right">
        <div className="image-placeholder">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80" alt="Campus" className="campus-img" />
          <div className="placeholder-overlay">
            <div className="timeline">
              <div className="timeline-item active">
                <span className="dot"></span>
                <div>
                  <span className="num">01</span>
                  <span className="text">Learn</span>
                </div>
              </div>
              <div className="timeline-item">
                <span className="dot"></span>
                <div>
                  <span className="num">02</span>
                  <span className="text">Build</span>
                </div>
              </div>
              <div className="timeline-item">
                <span className="dot"></span>
                <div>
                  <span className="num">03</span>
                  <span className="text">Compete</span>
                </div>
              </div>
              <div className="timeline-item">
                <span className="dot"></span>
                <div>
                  <span className="num">04</span>
                  <span className="text">Network</span>
                </div>
              </div>
            </div>
            
            <div className="image-footer">
              <div className="vertical-words">
                <span>IDEAS</span>
                <span>PEOPLE</span>
                <span>SKILLS</span>
                <span>IMPACT</span>
                <div className="short-line"></div>
              </div>
              
              <div className="image-location">
                <span>XYZ COLLEGE CAMPUS</span><br/>
                <span>15 - 17 NOV 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
