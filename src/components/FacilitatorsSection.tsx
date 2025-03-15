
import { motion } from 'framer-motion';

const FacilitatorsSection = () => {
  const facilitators = [
    {
      name: "Rafaela Valente",
      image: "/lovable-uploads/273568c5-d216-47e1-90de-8f51aba1c0d9.png",
      bio: "Psicóloga especialista em Transpessoal com base corporal (Instituto Serra da Portaria); Especialista em desprogramação de crenças; Reprogramadora mental e vibracional; Terapeuta do Inconsciente; Mestra em Reiki; Terapeuta holística (radiestesia, ayurveda, cromoterapia, reflexologia); Consteladora Sistêmica Familiar (IDESV); Neuroterapeuta Hertz; Terapeuta de Holococriação da Realidade"
    },
    {
      name: "Wilma Ferreira",
      image: "/lovable-uploads/273568c5-d216-47e1-90de-8f51aba1c0d9.png",
      bio: "Psicóloga especialista em Transpessoal de base corporal-Instituto Serra da Portaria; Psicoterapia em DMP( regressão de memória) (Roger J. Woolger); Biomagnetista( escola superior de Biomagnetismo médico Isaac Goiz Durán); Formação em psicologia do trânsito; TRE exercícios para liberação do trauma (David Berceli); Terapeuta em Reiki; Terapeuta em Thetaheling; Terapeuta em Massoterapia"
    }
  ];

  return (
    <section id="facilitadoras" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-cursive text-yoga-teal mb-6">
            Facilitadoras
          </h2>
          <p className="text-lg text-yoga-gray/90">
            Profissionais especializadas para guiar sua jornada de autoconhecimento e transformação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {facilitators.map((facilitator, index) => (
            <motion.div 
              key={index}
              className="bg-yoga-light-cream rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={facilitator.image} 
                      alt={facilitator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-cursive text-yoga-teal mb-3">
                    {facilitator.name}
                  </h3>
                  <p className="text-yoga-gray text-sm">
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
