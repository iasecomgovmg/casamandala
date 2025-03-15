
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const FacilitatorsSection = () => {
  const facilitators = [
    {
      name: "Rafaela Valente",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Psicóloga especialista em Transpessoal com base corporal (Instituto Serra da Portaria); Especialista em desprogramação de crenças; Reprogramadora mental e vibracional; Terapeuta do Inconsciente; Mestra em Reiki; Terapeuta holística (radiestesia, ayurveda, cromoterapia, reflexologia); Consteladora Sistêmica Familiar (IDESV); Neuroterapeuta Hertz; Terapeuta de Holococriação da Realidade"
    },
    {
      name: "Wilma Ferreira",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bio: "Psicóloga especialista em Transpessoal de base corporal-Instituto Serra da Portaria; Psicoterapia em DMP( regressão de memória) (Roger J. Woolger); Biomagnetista( escola superior de Biomagnetismo médico Isaac Goiz Durán); Formação em psicologia do trânsito; TRE exercícios para liberação do trauma (David Berceli); Terapeuta em Reiki; Terapeuta em Thetaheling; Terapeuta em Massoterapia"
    }
  ];

  return (
    <section id="facilitadoras" className="section bg-white">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-sage/10 p-3 rounded-full">
              <Users className="h-6 w-6 text-sage" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-sage-darkest mb-6">
            Facilitadoras
          </h2>
          
          <p className="text-lg text-sage-darkest/80">
            Profissionais especializadas para guiar sua jornada de autoconhecimento e transformação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilitators.map((facilitator, index) => (
            <motion.div
              key={index}
              className="bg-sage-lightest rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 overflow-hidden">
                  <img 
                    src={facilitator.image} 
                    alt={facilitator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 lg:w-3/5 flex flex-col justify-center">
                  <div className="mb-1">
                    <div className="w-10 h-1 bg-sage rounded-full"></div>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-sage-darkest mb-4">
                    {facilitator.name}
                  </h3>
                  
                  <p className="text-sage-darkest/80 text-sm">
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
