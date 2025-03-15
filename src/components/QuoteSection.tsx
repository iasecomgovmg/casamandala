
import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >          
          <h2 className="text-4xl lg:text-5xl font-light mb-12 mx-auto">
            "Reconecte-se com sua essência e fortaleça suas emoções"
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-600 mb-6 text-lg">
              Um final de semana transformador dentro da abordagem psicologia transpessoal centrada no corpo; 
              o cerne do nosso ser é o centro do universo, onde encontramos nosso verdadeiro Self.
            </p>
            
            <p className="text-slate-600 mb-10 text-lg">
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
            <a href="#reservas" className="btn-primary inline-block">
              garanta sua vaga
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
