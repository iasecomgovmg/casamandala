
import { motion } from 'framer-motion';
import { Heart, Leaf, RefreshCw } from 'lucide-react';

const AboutSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="sobre" className="section bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-light opacity-30 z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-sage/10 p-3 rounded-full">
              <Heart className="h-6 w-6 text-sage" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-sage-darkest mb-6">
            Um convite para desacelerar e reencontrar sua essência
          </h2>
          
          <p className="text-lg text-sage-darkest/80">
            Este retiro de 3 dias é uma imersão transformadora dentro da abordagem da 
            psicologia transpessoal centrada no corpo. Um espaço seguro, em meio à natureza, 
            onde você aprenderá ferramentas práticas para fortalecer suas emoções e viver 
            relações mais saudáveis e alinhadas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-sage/10 p-3 rounded-full">
                <RefreshCw className="h-6 w-6 text-sage" />
              </div>
            </div>
            
            <h3 className="text-xl font-serif text-sage-darkest mb-4 text-center">
              Você tem vivido ou sobrevivido?
            </h3>
            
            <p className="text-sage-darkest/80 text-center">
              Você sente que a correria do dia a dia desconecta você do que realmente importa?
              Está sobrecarregado(a) pelas emoções, enfrentando dificuldades nos seus relacionamentos?
            </p>
          </motion.div>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-sage/10 p-3 rounded-full">
                <Leaf className="h-6 w-6 text-sage" />
              </div>
            </div>
            
            <h3 className="text-xl font-serif text-sage-darkest mb-4 text-center">
              Reconexão com o corpo
            </h3>
            
            <p className="text-sage-darkest/80 text-center">
              Toda perturbação emocional se manifesta no corpo, assim como bloqueios corporais expressam 
              paralisações em nossa capacidade de sentir e expressar.
            </p>
          </motion.div>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-sage/10 p-3 rounded-full">
                <Heart className="h-6 w-6 text-sage" />
              </div>
            </div>
            
            <h3 className="text-xl font-serif text-sage-darkest mb-4 text-center">
              Transformação interior
            </h3>
            
            <p className="text-sage-darkest/80 text-center">
              Permita-se a fazer essa viagem para dentro de si, e encontre a verdadeira 
              realidade que está por trás dos sintomas, libertando-se das couraças que te mantém num padrão de autossabotagem.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-sand/30 p-8 md:p-10 rounded-2xl text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-serif text-sage-darkest italic mb-4">
            "Se nos entregamos ao corpo e nos permitimos ouvi-lo, focando a consciência nos 
            sintomas emergentes, ele se desvela e nos conta a sua história"
          </p>
          
          <p className="text-sage-dark font-medium">
            — Nilton Ferreira
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
