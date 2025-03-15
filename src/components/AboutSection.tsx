
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-cursive text-yoga-teal mb-6">
            Um convite para desacelerar e reencontrar sua essência
          </h2>
          <p className="text-lg text-yoga-gray/90">
            Este retiro de 3 dias é uma imersão transformadora dentro da abordagem da 
            psicologia transpessoal centrada no corpo. Um espaço seguro, em meio à natureza, 
            onde você aprenderá ferramentas práticas para fortalecer suas emoções e viver 
            relações mais saudáveis e alinhadas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className="bg-yoga-light-cream p-8 rounded-2xl shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-cursive text-yoga-teal mb-4">
                Você tem vivido ou sobrevivido?
              </h3>
              <p className="text-yoga-gray">
                Você sente que a correria do dia a dia desconecta você do que realmente importa?
                Está sobrecarregado(a) pelas emoções, enfrentando dificuldades nos seus relacionamentos 
                pessoais, amorosos, familiares ou profissionais?
              </p>
            </div>
            
            <div>
              <p className="text-yoga-gray mb-4">
                A aceleração dos tempos atuais tem gerado inúmeros prejuízos, te desconectando 
                cada vez mais do seu verdadeiro propósito, onde o esforço e a insatisfação vão 
                tomando o espaço da leveza e alegria de viver.
              </p>
              <p className="text-yoga-gray">
                Toda perturbação emocional, como angústia, depressão, ansiedade, sentimentos de vazio, 
                confusão mental, se manifesta no corpo, assim como bloqueios corporais expressam 
                paralisações em nossa capacidade de sentir e expressar.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <blockquote className="bg-yoga-light-cream p-8 rounded-2xl shadow-sm mb-10">
              <p className="text-yoga-gray italic mb-4">
                "Se nos entregamos ao corpo e nos permitimos ouvi-lo, focando a consciência nos 
                sintomas emergentes, ele se desvela e nos conta a sua história"
              </p>
              <footer className="text-right text-yoga-teal font-cursive text-xl">
                — Nilton Ferreira
              </footer>
            </blockquote>

            <div className="bg-yoga-light-cream p-8 rounded-2xl shadow-sm">
              <p className="text-yoga-gray mb-6">
                Permita-se a fazer essa viagem para dentro de si, e encontre a verdadeira 
                realidade que está por trás dos sintomas, nesse lugar encantado, numa imersão 
                transformadora dentro da abordagem da psicologia transpessoal centrada no corpo;
                libertando-se das couraças que te mantém num padrão de autossabotagem e adoecimento.
              </p>
              <p className="text-yoga-teal font-medium">
                Este retiro de 3 dias é um convite para desacelerar, olhar para dentro e 
                reencontrar sua essência.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
