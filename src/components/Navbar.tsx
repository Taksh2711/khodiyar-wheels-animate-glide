
import { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Car className={`h-8 w-8 ${isScrolled ? 'text-khodiyar-light-blue' : 'text-white'}`} />
          <span className={`ml-2 text-xl font-bold font-heading ${isScrolled ? 'text-khodiyar-blue' : 'text-white'}`}>
            AAI Shree Khodiyar
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className={`nav-link ${!isScrolled && 'text-white hover:text-white'}`}>Home</a>
          <a href="#fleet" className={`nav-link ${!isScrolled && 'text-white hover:text-white'}`}>Our Fleet</a>
          <a href="#services" className={`nav-link ${!isScrolled && 'text-white hover:text-white'}`}>Services</a>
          <a href="#testimonials" className={`nav-link ${!isScrolled && 'text-white hover:text-white'}`}>Testimonials</a>
          <a href="#contact" className={`nav-link ${!isScrolled && 'text-white hover:text-white'}`}>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`p-2 rounded-md ${isScrolled ? 'text-khodiyar-blue' : 'text-white'}`}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <a href="#home" className="py-2 nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#fleet" className="py-2 nav-link" onClick={() => setIsMenuOpen(false)}>Our Fleet</a>
            <a href="#services" className="py-2 nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#testimonials" className="py-2 nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="py-2 nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
