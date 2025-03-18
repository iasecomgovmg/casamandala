
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="section bg-sage/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-30 z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full -translate-x-10 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-terracotta/5 rounded-full translate-x-10 translate-y-20"></div>
          
          <div className="text-center relative z-10">
            <motion.div 
              className="mb-8 inline-block"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-sage/10 p-3 rounded-full">
                <Quote className="h-6 w-6 text-sage" />
              </div>
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl font-serif text-sage-darkest mb-8">
              "Reconecte-se com sua essência e libere sua Criança Ferida"
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-sage-darkest/80 mb-6">
                Uma vivência transformadora dentro da abordagem psicologia transpessoal centrada no corpo; 
                o cerne do nosso ser é o centro do universo, onde encontramos nosso verdadeiro Self.
              </p>
              
              <p className="text-sage-darkest/80 mb-8">
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
              <a href="#reservas" className="btn-accent inline-block">
                Garanta sua vaga agora
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
