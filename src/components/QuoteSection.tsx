
import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="py-20 bg-yoga-light-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <img 
          src="/lovable-uploads/50c674e5-15e3-41a7-8e9a-1388504b6e80.png" 
          alt="Decorative leaf" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
        <img 
          src="/lovable-uploads/50c674e5-15e3-41a7-8e9a-1388504b6e80.png" 
          alt="Decorative leaf" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <img 
              src="/lovable-uploads/bed45ced-b9ba-43d0-ae2a-f878903ae484.png" 
              alt="Logo do Centro de Yoga" 
              className="h-16 mx-auto"
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-cursive text-yoga-teal mb-8">
            "Reconecte-se com sua essência e fortaleça suas emoções"
          </h2>
          
          <p className="text-yoga-gray mb-8">
            Um final de semana transformador dentro da abordagem psicologia transpessoal centrada no corpo; 
            o cerne do nosso ser é o centro do universo, onde encontramos nosso verdadeiro Self.
          </p>
          
          <p className="text-yoga-gray mb-8">
            Venha desacelerar, se reconectar com quem você realmente é, e fortalecer suas emoções 
            para viver relações mais saudáveis e alinhadas.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#reservas" className="yoga-button inline-block">
              Garanta sua vaga agora
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
