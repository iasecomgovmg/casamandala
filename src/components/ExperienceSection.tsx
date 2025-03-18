
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Liberação de traumas",
      description: "Exercícios de bioenergética e TRE para liberação de traumas e bloqueios",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1820&q=80"
    },
    {
      title: "Práticas respiratórias",
      description: "Meditações guiadas, práticas de respiração e dinâmicas emocionais",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Conexão com a natureza",
      description: "Alimentação consciente e momentos de conexão profunda com a natureza",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="experiencia" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center">
            <div className="w-12 h-0.5 bg-slate-400 mr-4"></div>
            <span className="text-slate-500 uppercase tracking-widest text-xs">nossa programação</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 md:mb-0">
              O que você vai<br />vivenciar?
            </h2>
            
            <p className="text-slate-600 max-w-md">
              Um programa completo para sua transformação interior e conexão com sua essência.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl font-light text-slate-700">
            É hora de voltar para o seu centro e viver de forma mais leve, plena e alinhada.
          </p>
          
          <a href="#reservas" className="mt-8 inline-block px-8 py-3 bg-green-700 text-white rounded-none uppercase tracking-wider text-sm font-medium hover:bg-green-800 transition-all">
            reserve sua vaga
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
