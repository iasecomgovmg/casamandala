
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-slate-50 pt-20 relative overflow-hidden flex items-center">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6 flex items-center">
              <div className="w-12 h-0.5 bg-slate-400 mr-4"></div>
              <span className="text-slate-500 uppercase tracking-widest text-xs">20-23 fevereiro 2025</span>
            </div>
            
            <h1 className="mb-8">
              <span className="block text-xl mb-3 font-light">encontre seu</span>
              <span className="hero-text-large text-[#333333]">YOGA</span>
              <span className="block text-xl mt-2 font-light tracking-wide">equilíbrio</span>
            </h1>
            
            <div className="max-w-md">
              <p className="text-slate-600 mb-10">
                Um retiro transformador no Centro de Yoga Montanha Encantada, 
                onde você poderá desacelerar, olhar para dentro e reencontrar sua essência.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#reservas" className="btn-primary">
                  reservar agora
                </a>
                <a href="#sobre" className="btn-secondary">
                  saiba mais
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
              alt="Yoga pose" 
              className="w-full h-[80vh] object-cover object-center"
            />
            <div className="absolute bottom-4 right-4 bg-white p-4 border border-slate-100 w-48">
              <span className="text-xs text-slate-500 uppercase tracking-widest">Garopaba, SC</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white"></div>
    </section>
  );
};

export default HeroSection;
