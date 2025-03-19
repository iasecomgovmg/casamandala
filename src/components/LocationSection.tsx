
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import GoogleMapsDirections from './GoogleMapsDirections';

const LocationSection = () => {
  const images = [
    {
      src: "https://dominicanasemaus.com.br/site/wp-content/uploads/elementor/thumbs/23794891_824335124440248_8199652569603235745_n-p4gajox2x8b2l0x83h9b1njjrzulxyb5giawigx4xi.jpg",
      alt: "Prática ao ar livre"
    },
    {
      src: "https://dominicanasemaus.com.br/site/wp-content/uploads/2021/03/refeitorio-8.jpg",
      alt: "Atividade em grupo"
    },
    {
      src: "https://dominicanasemaus.com.br/site/wp-content/uploads/2021/03/24131271_827108374162923_3880128034000773436_n.jpg",
      alt: "Momento de conexão"
    },
    {
      src: "https://dominicanasemaus.com.br/site/wp-content/uploads/2021/03/44767728_1035196850020740_6966957040291807232_n.jpg",
      alt: "Espaço de meditação"
    },
    {
      src: "https://dominicanasemaus.com.br/site/wp-content/uploads/2021/03/48356761_1068230940050664_8914964187814297600_n.jpg",
      alt: "Espaço de meditação"
    },
    {
      src: "https://dominicanasemaus.com.br/site/wp-content/uploads/2021/03/29258587_882168148656945_2380953070868627456_o.jpg",
      alt: "Espaço de meditação"
    },
    {
      src: "https://dominicanasemaus.com.br/site/wp-content/uploads/2021/03/30440647_893538594186567_6479308467843629056_o.jpg",
      alt: "Espaço de meditação"
    },
    {
      src: "https://dominicanasemaus.com.br/site/wp-content/uploads/2021/03/33553682_917053035168456_7201811414019735552_o.jpg",
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
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <div className="bg-sage/10 p-3 rounded-full">
                  <Map className="h-5 w-5 text-sage" />
                </div>
              </div>
              <CardTitle className="text-center text-xl text-sage-darkest font-serif">Como Chegar</CardTitle>
              <CardDescription className="text-center text-sage-darkest/70">
                Localização e rotas de acesso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GoogleMapsDirections />
            </CardContent>
          </Card>
        </motion.div>

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
