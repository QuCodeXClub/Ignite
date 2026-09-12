import { ArrowRight, Flame } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Flame size={24} fill="#ff5722" color="#ff5722" strokeWidth={0} />
        IGNITE '26
      </div>
      
      <div className="nav-links">
        <a href="#" className="active">Home</a>
        <a href="#">Events</a>
        <a href="#">Schedule</a>
        <a href="#">Sponsors</a>
        <a href="#">About</a>
      </div>

      <button className="nav-btn">
        Register <ArrowRight size={16} />
      </button>
    </nav>
  );
};

export default Navbar;
