
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cursive text-yoga-teal leading-tight mb-6">
              Retorno ao Centro
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-yoga-gray mb-8">
              Reconecte-se com sua essência e fortaleça suas emoções
            </h2>
            <p className="text-lg text-yoga-gray/90 mb-10 max-w-2xl mx-auto lg:mx-0">
              Um retiro transformador no Centro de Yoga Montanha Encantada, 
              onde você poderá desacelerar, olhar para dentro e reencontrar sua essência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#reservas" className="yoga-button">
                Reservar minha vaga
              </a>
              <a href="#sobre" className="yoga-button-secondary">
                Saiba mais
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              <motion.div 
                className="w-full h-auto overflow-hidden rounded-3xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/lovable-uploads/9065d10c-886e-4d12-942d-1c1c61a1c9bd.png" 
                  alt="Yoga na Montanha Encantada" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="font-cursive text-yoga-teal text-xl mb-1">Quando?</div>
                <div className="text-yoga-gray">De 20 a 23 de fevereiro de 2025</div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="font-cursive text-yoga-teal text-xl mb-1">Onde?</div>
                <div className="text-yoga-gray">Garopaba, SC</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
