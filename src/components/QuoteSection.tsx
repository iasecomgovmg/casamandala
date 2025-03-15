
import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-sky-50 to-white opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >          
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-12 mx-auto leading-relaxed">
            "Reconecte-se com sua essência e fortaleça suas emoções"
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-700 mb-6 text-lg">
              Um final de semana transformador dentro da abordagem psicologia transpessoal centrada no corpo; 
              o cerne do nosso ser é o centro do universo, onde encontramos nosso verdadeiro Self.
            </p>
            
            <p className="text-slate-700 mb-10 text-lg">
              Venha desacelerar, se reconectar com quem você realmente é, e fortalecer suas emoções 
              para viver relações mais saudáveis e alinhadas.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="#reservas" 
              className="px-8 py-3 bg-green-700 text-white uppercase tracking-wider text-sm font-medium hover:bg-green-800 transition-all inline-block"
            >
              garanta sua vaga
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom decorative wavy element */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="#f9fafb" 
            fillOpacity="1" 
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default QuoteSection;
