
import { useState, useEffect } from 'react';
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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-slate-900 font-montserrat text-2xl tracking-wide font-light">
            RETORNO<span className="font-semibold">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-slate-700 hover-line">sobre</a>
            <a href="#experiencia" className="text-slate-700 hover-line">experiência</a>
            <a href="#facilitadoras" className="text-slate-700 hover-line">facilitadoras</a>
            <a href="#local" className="text-slate-700 hover-line">local</a>
            <a href="#reservas" className="btn-primary">reservar</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 top-0 w-full h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute left-0 top-4 w-full h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-6">
            <nav className="flex flex-col space-y-6">
              <a 
                href="#sobre" 
                className="text-slate-900 py-2 border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                sobre
              </a>
              <a 
                href="#experiencia" 
                className="text-slate-900 py-2 border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                experiência
              </a>
              <a 
                href="#facilitadoras" 
                className="text-slate-900 py-2 border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                facilitadoras
              </a>
              <a 
                href="#local" 
                className="text-slate-900 py-2 border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                local
              </a>
              <a 
                href="#reservas" 
                className="btn-primary w-full text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                reservar
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
