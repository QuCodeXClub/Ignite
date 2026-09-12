import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import SponsorStrip from './components/SponsorStrip';
import OrganizedBy from './components/OrganizedBy';
import Footer from './components/Footer';
import HeroModel from './components/HeroModel';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden text-[var(--color-primary-text)] font-sans bg-[#050505]">
      
      {/* Global 3D Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <HeroModel />
        {/* Universal Dark Shading from Hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-[5] md:w-2/3 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-[5] pointer-events-none md:hidden"></div>
        {/* Extra base darkening for overall readability */}
        <div className="absolute inset-0 bg-black/20 z-[6] pointer-events-none"></div>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col w-full">
        <div className="min-h-screen flex flex-col relative">
          <Navbar />
          <Hero />
        </div>
        <div className="relative w-full bg-black/40 backdrop-blur-md">
          <SponsorStrip />
          <Events />
          <Schedule />
          <Sponsors />
          <About />
          <OrganizedBy />
          <Footer />
        </div>
      </div>
      
    </div>
  );
}

export default App;
