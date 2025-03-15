
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 flex items-center">
                <div className="w-12 h-0.5 bg-slate-400 mr-4"></div>
                <span className="text-slate-500 uppercase tracking-widest text-xs">sobre o retiro</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light mb-6">Classes</h2>
              <p className="text-slate-600 mb-6">
                Este retiro de 3 dias é uma imersão transformadora dentro da abordagem da 
                psicologia transpessoal centrada no corpo. Um espaço seguro, em meio à natureza, 
                onde você aprenderá ferramentas práticas para fortalecer suas emoções e viver 
                relações mais saudáveis e alinhadas.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white p-8 shadow-sm border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-medium mb-4">
                  Você tem vivido ou sobrevivido?
                </h3>
                
                <p className="text-slate-600">
                  Você sente que a correria do dia a dia desconecta você do que realmente importa?
                  Está sobrecarregado(a) pelas emoções?
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 shadow-sm border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-medium mb-4">
                  Reconexão com o corpo
                </h3>
                
                <p className="text-slate-600">
                  Toda perturbação emocional se manifesta no corpo, assim como bloqueios corporais expressam 
                  paralisações em nossa capacidade de sentir e expressar.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 shadow-sm border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-medium mb-4">
                  Transformação interior
                </h3>
                
                <p className="text-slate-600">
                  Permita-se a fazer essa viagem para dentro de si, e encontre a verdadeira 
                  realidade que está por trás dos sintomas, libertando-se das couraças.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="mt-20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl font-light italic text-slate-700 mb-4">
            "Se nos entregamos ao corpo e nos permitimos ouvi-lo, focando a consciência nos 
            sintomas emergentes, ele se desvela e nos conta a sua história"
          </p>
          
          <p className="text-slate-500">
            — Nilton Ferreira
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
