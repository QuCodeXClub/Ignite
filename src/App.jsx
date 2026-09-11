import Navbar from './components/Navbar';
import HeroModel from './components/HeroModel';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import Hero from './components/Hero';
import FooterElements from './components/FooterElements';

function App() {
  return (
    <div className="app-container">
      <div className="canvas-container">
        <HeroModel />
      </div>
      <Navbar />
      <Hero />
      <AboutSection />
      <EventsSection />
      <FooterElements />
    </div>
  );
}

export default App;
