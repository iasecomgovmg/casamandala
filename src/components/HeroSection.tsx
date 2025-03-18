
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-sage-lightest pt-24 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sage-light/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-sand/30 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
              Casa <span className="text-sage font-normal">Mandala</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-sage-darkest/80 mb-6 font-light">
              Reconecte-se com sua essência e fortaleça suas emoções
            </p>
            
            <p className="text-sage-darkest/70 mb-8 max-w-lg mx-auto lg:mx-0">
              Uma vivência transformadora na Chácara Caminho de Emaús, 
              onde você poderá desacelerar, olhar para dentro e reencontrar sua essência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#reservas" className="btn-primary">
                Reservar minha vaga
              </a>
              <a href="#sobre" className="btn-secondary group">
                Saiba mais
                <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mt-12">
              <div className="flex items-center">
                <Calendar className="text-sage mr-2 h-5 w-5" />
                <span className="text-sage-darkest/80">31 de maio a 01 de junho</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-sage mr-2 h-5 w-5" />
                <span className="text-sage-darkest/80">Goiânia, GO</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-xl mx-auto">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-xl img-hover-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                  alt="Retiro de yoga" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -left-5 h-24 w-24 bg-terracotta/10 rounded-full"></div>
              <div className="absolute -top-5 -right-5 h-32 w-32 bg-sage/10 rounded-full"></div>
              
              {/* Info cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 bg-white p-4 rounded-xl shadow-lg max-w-[200px]"
              >
                <p className="text-sm text-sage-darkest/70">
                  "Uma vivência transformadora dentro da abordagem da psicologia transpessoal"
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
