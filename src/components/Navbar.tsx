
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="font-cursive text-yoga-teal text-2xl md:text-3xl">Retorno ao Centro</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-yoga-gray hover:text-yoga-teal transition-colors">Sobre</a>
            <a href="#experiencia" className="text-yoga-gray hover:text-yoga-teal transition-colors">Experiência</a>
            <a href="#facilitadoras" className="text-yoga-gray hover:text-yoga-teal transition-colors">Facilitadoras</a>
            <a href="#local" className="text-yoga-gray hover:text-yoga-teal transition-colors">Local</a>
            <a href="#reservas" className="yoga-button">Reservar Agora</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yoga-teal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#sobre" 
                className="text-yoga-gray hover:text-yoga-teal transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#experiencia" 
                className="text-yoga-gray hover:text-yoga-teal transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experiência
              </a>
              <a 
                href="#facilitadoras" 
                className="text-yoga-gray hover:text-yoga-teal transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Facilitadoras
              </a>
              <a 
                href="#local" 
                className="text-yoga-gray hover:text-yoga-teal transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Local
              </a>
              <a 
                href="#reservas" 
                className="yoga-button w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservar Agora
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
