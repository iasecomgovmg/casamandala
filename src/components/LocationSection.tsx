
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';

const LocationSection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Prática ao ar livre"
    },
    {
      src: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      alt: "Atividade em grupo"
    },
    {
      src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Momento de conexão"
    },
    {
      src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Espaço de meditação"
    }
  ];

  return (
    <section id="local" className="section bg-sage-lightest">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <MapPin className="h-6 w-6 text-sage" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-sage-darkest mb-6">
            Centro de Yoga Montanha Encantada
          </h2>
          
          <p className="text-lg text-sage-darkest/80">
            Situado em Garopaba, SC, um refúgio natural perfeito para sua jornada de autoconhecimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div 
            className="overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1532117182044-031e7cd916ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
              alt="Centro de Yoga Montanha Encantada"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-sage-darkest mb-6">
              Um refúgio cercado pela natureza
            </h3>
            
            <p className="text-sage-darkest/80 mb-6">
              O Centro de Yoga Montanha Encantada é um espaço especialmente concebido para permitir a reconexão com sua essência. Rodeado pela natureza exuberante de Garopaba, o local oferece a tranquilidade necessária para sua jornada de transformação interior.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sage-darkest/80">Acomodações confortáveis e acolhedoras</span>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sage-darkest/80">Alimentação orgânica e consciente</span>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sage-darkest/80">Espaços adequados para todas as práticas</span>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sage-darkest/80">Áreas de integração com a natureza</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="rounded-lg overflow-hidden shadow-md aspect-square img-hover-zoom"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sage-darkest font-medium">
            O valor do investimento inclui: Hospedagem, alimentação completa e todas as atividades.
          </p>
          <p className="text-sage font-serif text-xl mt-2">
            Vagas são limitadas!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
