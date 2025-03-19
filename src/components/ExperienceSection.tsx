
import { motion } from 'framer-motion';
import { Activity, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    "Visualização e a poderosa Imaginação Ativa de Carl Jung",
    "Liberação dos Sete Anéis Corporais de Reich",
    "Trabalhos com autoimagem de Léo Matos",
    "Flexibilização e Aterramento na abordagem de Reich",
    "Mandalas para integrar a Psique e as Emoções",
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

  return (
    <section id="experiencia" className="section bg-sage-lightest relative">
      <div className="absolute inset-0 bg-pattern opacity-50 z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Activity className="h-6 w-6 text-sage" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-sage-darkest mb-6">
            O que você irá vivenciar?
          </h2>
          
          <p className="text-lg text-sage-darkest/80">
            Um programa completo para sua transformação interior.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-2">
            <motion.div 
              className="relative h-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden h-full shadow-lg img-hover-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80" 
                  alt="Experiência de yoga e meditação"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-terracotta/10 rounded-full"></div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-3">
            <motion.div
              className="stagger-fade-in"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                {experiences.map((experience, index) => (
                  <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-sage-darkest/80">{experience}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-sage-darkest mb-6">
            Um espaço seguro, em meio à natureza
          </h3>
          
          <p className="text-lg text-sage-darkest/80 mb-2">
            Onde você aprenderá ferramentas práticas para:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <div className="bg-sage/10 p-2 rounded-full flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-sage" />
                </div>
                <p className="text-sage-darkest/80">{benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-serif text-sage italic">
            É hora de voltar para o seu centro e viver de forma mais leve, plena e alinhada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
