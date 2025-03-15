
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    "Exercícios de bioenergética e TRE para liberação de traumas e bloqueios",
    "Dinâmicas sistêmicas para tomar o seu lugar na vida, conectando com o seu propósito",
    "Meditações guiadas, práticas de respiração e dinâmicas emocionais",
    "Workshops sobre autocuidado, relações saudáveis e alinhamento com sua essência",
    "Alimentação consciente e momentos de conexão profunda com a natureza",
    "Ritual de encerramento para integrar os aprendizados à sua vida diária"
  ];

  const benefits = [
    "Lidar com suas emoções, desenvolvendo inteligência emocional e aprendendo a usar o poder da mente a seu favor",
    "Reconstruir sua conexão consigo mesmo e com os outros; através de técnicas para flexibilizar couraças musculares e respiração, construindo assim relações saudáveis",
    "Fortalecer suas emoções e encontrar equilíbrio interno através da meditação",
    "Transformar sua relação com as pessoas, com o trabalho, com o dinheiro e com a alimentação",
    "Autoconhecimento através dos trabalhos com mandalas e visualizações"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experiencia" className="py-20 bg-yoga-light-cream">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-cursive text-yoga-teal mb-6">
            O que você vai vivenciar?
          </h2>
          <p className="text-lg text-yoga-gray/90">
            Um programa completo para sua transformação interior e conexão com sua essência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.ul 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((item, index) => (
              <motion.li key={index} className="activity-item" variants={itemVariants}>
                <Leaf className="yoga-icon flex-shrink-0 mt-1" />
                <span className="text-yoga-gray">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/611440e6-7fea-446f-a7b4-c7b1aefad925.png" 
                alt="Experiência de meditação e yoga"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-cursive text-yoga-teal mb-6">
            Um espaço seguro, em meio à natureza
          </h2>
          <p className="text-lg text-yoga-gray/90 mb-8">
            Onde você aprenderá ferramentas práticas para:
          </p>
        </motion.div>

        <motion.ul 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((item, index) => (
            <motion.li key={index} className="activity-item" variants={itemVariants}>
              <Leaf className="yoga-icon flex-shrink-0 mt-1" />
              <span className="text-yoga-gray">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl font-cursive text-yoga-teal italic">
            É hora de voltar para o seu centro e viver de forma mais leve, plena e alinhada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
