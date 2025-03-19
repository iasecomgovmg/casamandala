
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const FacilitatorsSection = () => {
  const facilitator = {
    name: "Wilma Ferreira",
    image: "/lovable-uploads/49eb7951-1573-403d-8d0e-729e857fe45f.png",
    bio: "Graduação em Psicologia pela Universidade Paulista- Goiás; Psicóloga Transpessoal de base corporal-Instituto Serra da Portaria; Psicoterapia em DMP( regressão de memória) (Roger J. Woolger); Biomagnetista( escola superior de Biomagnetismo médico Isaac Goiz Durán; Psicóloga especialista do trânsito- faculdade Alfa; TRE exercícios para liberação do trauma( David Berceli); Terapeuta em Reiki; Terapeuta em Thetaheling; Terapeuta em Massoterapia; Em formação; Neuropsicóloga; IPOG- Goiânia; Em Formação: EMDR (Terapia de Dessensibilização e Reprocessamento por Meio dos Movimentos Oculares, Táteis ou Auditivos)."
  };

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
            Facilitadora
          </h2>
          
          <p className="text-lg text-sage-darkest/80">
            Profissional especializada para guiar sua jornada de autoconhecimento e transformação.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-sage-lightest rounded-2xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
        </div>
      </div>
    </section>
  );
};

export default FacilitatorsSection;
