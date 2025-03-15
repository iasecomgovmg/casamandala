
import { motion } from 'framer-motion';

const FacilitatorsSection = () => {
  const facilitators = [
    {
      name: "Rafaela Valente",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      bio: "Psicóloga especialista em Transpessoal com base corporal (Instituto Serra da Portaria); Especialista em desprogramação de crenças; Reprogramadora mental e vibracional; Terapeuta do Inconsciente; Mestra em Reiki; Terapeuta holística (radiestesia, ayurveda, cromoterapia, reflexologia); Consteladora Sistêmica Familiar (IDESV); Neuroterapeuta Hertz; Terapeuta de Holococriação da Realidade"
    },
    {
      name: "Wilma Ferreira",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      bio: "Psicóloga especialista em Transpessoal de base corporal-Instituto Serra da Portaria; Psicoterapia em DMP( regressão de memória) (Roger J. Woolger); Biomagnetista( escola superior de Biomagnetismo médico Isaac Goiz Durán); Formação em psicologia do trânsito; TRE exercícios para liberação do trauma (David Berceli); Terapeuta em Reiki; Terapeuta em Thetaheling; Terapeuta em Massoterapia"
    }
  ];

  return (
    <section id="facilitadoras" className="py-24 bg-white">
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
            <span className="text-slate-500 uppercase tracking-widest text-xs">facilitadoras</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 md:mb-0">
              Nosso time
            </h2>
            
            <p className="text-slate-600 max-w-md">
              Profissionais especializadas para guiar sua jornada de autoconhecimento e transformação.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {facilitators.map((facilitator, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-12 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="md:col-span-5">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={facilitator.image} 
                    alt={facilitator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-7">
                <div className="pt-8">
                  <h3 className="text-2xl font-light mb-4">
                    {facilitator.name}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {facilitator.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitatorsSection;
