
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Cloud background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white opacity-90"></div>
        <img 
          src="/lovable-uploads/9c569f7d-6836-4173-8de9-dec7a5aa7824.png" 
          alt="Clouds background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 flex items-center justify-center lg:justify-start">
              <div className="w-12 h-0.5 bg-green-700 mr-4"></div>
              <span className="text-green-800 uppercase tracking-widest text-xs font-medium">20-23 fevereiro 2025</span>
            </div>
            
            <h1 className="mb-8">
              <span className="block text-2xl mb-1 font-light text-slate-800">encontre seu</span>
              <span className="block text-[8rem] leading-[1] font-serif text-slate-900 font-light">YOGA</span>
              <span className="block text-2xl mt-2 font-light tracking-wide text-slate-800">equilíbrio</span>
            </h1>
            
            <div className="max-w-md mx-auto lg:mx-0">
              <p className="text-slate-700 mb-10">
                Um retiro transformador no Centro de Yoga Montanha Encantada, 
                onde você poderá desacelerar, olhar para dentro e reencontrar sua essência.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="#reservas" 
                  className="px-8 py-3 bg-green-700 text-white rounded-none uppercase tracking-wider text-sm font-medium hover:bg-green-800 transition-all"
                >
                  reservar agora
                </a>
                <a 
                  href="#sobre" 
                  className="px-8 py-3 border border-green-700 text-green-700 rounded-none uppercase tracking-wider text-sm font-medium hover:bg-green-700 hover:text-white transition-all"
                >
                  saiba mais
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
              alt="Yoga pose" 
              className="w-[80%] lg:w-[90%] h-auto object-cover object-center rounded-lg shadow-xl"
            />
            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-white p-4 shadow-md">
              <span className="text-xs text-slate-500 uppercase tracking-widest">Garopaba, SC</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,58.7C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
