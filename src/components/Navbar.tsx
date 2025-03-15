
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
          <a href="#" className="flex items-center">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path 
                  d="M12 3L19.2 17.4H4.8L12 3Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                />
                <path 
                  d="M12 12.6C13.3807 12.6 14.5 11.4807 14.5 10.1C14.5 8.71929 13.3807 7.6 12 7.6C10.6193 7.6 9.5 8.71929 9.5 10.1C9.5 11.4807 10.6193 12.6 12 12.6Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                />
              </svg>
            </div>
            <span className="ml-2 text-xl font-serif uppercase tracking-wider text-slate-900">RETORNO</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-slate-700 hover:text-green-700 transition-colors">sobre</a>
            <a href="#experiencia" className="text-slate-700 hover:text-green-700 transition-colors">experiência</a>
            <a href="#facilitadoras" className="text-slate-700 hover:text-green-700 transition-colors">facilitadoras</a>
            <a href="#local" className="text-slate-700 hover:text-green-700 transition-colors">local</a>
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
