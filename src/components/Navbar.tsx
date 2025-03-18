
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
          ? 'bg-white shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/8426d9ae-4074-473c-a73f-09f7284a7320.png" 
              alt="Casa Mandala Logo" 
              className="h-12 w-auto"
            />
            <span className="font-serif text-sage-dark text-2xl">Casa Mandala</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-sage-darkest hover:text-sage transition-colors">Sobre</a>
            <a href="#experiencia" className="text-sage-darkest hover:text-sage transition-colors">Experiência</a>
            <a href="#facilitadoras" className="text-sage-darkest hover:text-sage transition-colors">Facilitadoras</a>
            <a href="#local" className="text-sage-darkest hover:text-sage transition-colors">Local</a>
            <a href="#reservas" className="btn-primary">Reservar Agora</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sage"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#sobre" 
                className="text-sage-darkest hover:text-sage transition-colors py-2 border-b border-sand"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#experiencia" 
                className="text-sage-darkest hover:text-sage transition-colors py-2 border-b border-sand"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experiência
              </a>
              <a 
                href="#facilitadoras" 
                className="text-sage-darkest hover:text-sage transition-colors py-2 border-b border-sand"
                onClick={() => setMobileMenuOpen(false)}
              >
                Facilitadoras
              </a>
              <a 
                href="#local" 
                className="text-sage-darkest hover:text-sage transition-colors py-2 border-b border-sand"
                onClick={() => setMobileMenuOpen(false)}
              >
                Local
              </a>
              <a 
                href="#reservas" 
                className="btn-primary w-full text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservar Agora
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
