import { ArrowRight, ArrowDown, Calendar, MapPin, Flame } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-label">IDEAS × SKILLS × PLAY</div>
        
        <h1 className="hero-title">
          IGN
          <div className="flame-wrapper">
            <Flame fill="#ff5722" color="#ff5722" strokeWidth={0} />
          </div>
          TE
        </h1>
        
        <div className="hero-subtitle">The Technical Fest </div> 
        
        <p className="hero-desc">
          Where innovation meets adrenaline.<br/>
          Build. Compete. Learn. Belong.
        </p>

        <div className="hero-meta">
          <div className="meta-item">
            <Calendar size={18} />
            <span>15- 16 September, 2026 </span>
          </div>
          <div className="meta-item">
            <MapPin size={18} />
            <span>Quantum University, Roorkee</span>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn-primary">
            Register Now <ArrowRight size={18} className="arrow" />
          </button>
          <button className="btn-secondary">
            Explore Events <ArrowDown size={18} />
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="floating-text">
          FEELING<br/>
          TOMORROW'S<br/>
          BUILDERS
        </div>

        <div className="side-list">
          TECH<br/>
          GAMING<br/>
          COMMUNITY<br/>
          AND MORE<br/>
          <div className="side-list-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
