
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';

const LocationSection = () => {
  const images = [
    {
      src: "https://drive.google.com/file/d/1GNYVekNIWh3PvObag6n5je6a9bxCa-Tt/view?usp=drive_link",
      alt: "Prática ao ar livre"
    },
    {
      src: "https://drive.google.com/file/d/1T3-G0ph3Siqqwa1EI8BxVgSNBFgY1Hht/view?usp=drive_link",
      alt: "Atividade em grupo"
    },
    {
      src: "https://drive.google.com/file/d/143Ppktc6msJqSbJuMkEHsrN-DW-eHOST/view?usp=drive_link",
      alt: "Momento de conexão"
    },
    {
      src: "https://drive.google.com/file/d/11Wh01b7-v8_8ApUylb2dIQ6W1WYSJV6u/view?usp=drive_link",
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
            Chácara Caminho de Emaús
          </h2>
          
          <p className="text-lg text-sage-darkest/80">
            Situada em Goiânia, GO, um refúgio natural perfeito para sua jornada de autoconhecimento.
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
              src="https://dominicanasemaus.com.br/site/wp-content/uploads/2021/03/PISCINA-2.jpg" 
              alt="Chácara Caminho de Emaús"
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
              A Chácara Caminho de Emaús é um espaço especialmente concebido para permitir a reconexão com sua essência. Rodeado pela natureza exuberante de Goiânia, o local oferece a tranquilidade necessária para sua jornada de transformação interior.
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
