
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
        isScrolled ? 'bg-white/90 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="ml-2 text-xl font-serif uppercase tracking-wider text-slate-900">YOGA</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-slate-700 hover:text-green-700 transition-colors text-sm uppercase tracking-wide">sobre</a>
            <a href="#experiencia" className="text-slate-700 hover:text-green-700 transition-colors text-sm uppercase tracking-wide">experiência</a>
            <a href="#facilitadoras" className="text-slate-700 hover:text-green-700 transition-colors text-sm uppercase tracking-wide">facilitadoras</a>
            <a href="#local" className="text-slate-700 hover:text-green-700 transition-colors text-sm uppercase tracking-wide">local</a>
            <a 
              href="#reservas" 
              className="px-5 py-2 bg-green-700 text-white uppercase tracking-wider text-xs font-medium hover:bg-green-800 transition-all"
            >
              reservar
            </a>
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
          <div className="container mx-auto px-6 py-6">
            <nav className="flex flex-col space-y-6">
              <a 
                href="#sobre" 
                className="text-slate-900 py-2 border-b border-slate-100 uppercase text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                sobre
              </a>
              <a 
                href="#experiencia" 
                className="text-slate-900 py-2 border-b border-slate-100 uppercase text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                experiência
              </a>
              <a 
                href="#facilitadoras" 
                className="text-slate-900 py-2 border-b border-slate-100 uppercase text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                facilitadoras
              </a>
              <a 
                href="#local" 
                className="text-slate-900 py-2 border-b border-slate-100 uppercase text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                local
              </a>
              <a 
                href="#reservas" 
                className="px-6 py-3 bg-green-700 text-white uppercase tracking-wider text-sm font-medium text-center"
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
