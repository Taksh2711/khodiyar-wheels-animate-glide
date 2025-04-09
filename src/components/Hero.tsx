
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToFleet = () => {
    const fleetSection = document.getElementById('fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in">
          AAI Shree Khodiyar <span className="block mt-2">Car Rental Service</span>
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-delay-1">
          Experience luxury and comfort with our premium car rental services.
          From economy to luxury, we have the perfect vehicle for your journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-2">
          <a href="#fleet" className="btn-primary">
            Explore Our Fleet
          </a>
          <a href="#contact" className="btn-secondary">
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer animate-bounce opacity-0 animate-fade-in-delay-3"
        onClick={scrollToFleet}
      >
        <ChevronDown size={36} />
      </div>
      
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-khodiyar-blue/30 to-khodiyar-blue/70 z-[-1]"></div>
    </section>
  );
};

export default Hero;
