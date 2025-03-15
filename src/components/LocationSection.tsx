
import { motion } from 'framer-motion';

const LocationSection = () => {
  const images = [
    {
      src: "/lovable-uploads/59be8866-83fc-437c-a5a5-34a7f2125031.png",
      alt: "Prática ao ar livre"
    },
    {
      src: "/lovable-uploads/59be8866-83fc-437c-a5a5-34a7f2125031.png",
      alt: "Atividade em grupo"
    },
    {
      src: "/lovable-uploads/59be8866-83fc-437c-a5a5-34a7f2125031.png",
      alt: "Momento de conexão"
    },
    {
      src: "/lovable-uploads/59be8866-83fc-437c-a5a5-34a7f2125031.png",
      alt: "Ritual com fogo"
    },
    {
      src: "/lovable-uploads/59be8866-83fc-437c-a5a5-34a7f2125031.png",
      alt: "Cabanas equipadas"
    },
    {
      src: "/lovable-uploads/59be8866-83fc-437c-a5a5-34a7f2125031.png",
      alt: "Integração com a natureza"
    }
  ];

  return (
    <section id="local" className="py-20 bg-yoga-light-cream">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-cursive text-yoga-teal mb-6">
            Centro de Yoga Montanha Encantada
          </h2>
          <p className="text-lg text-yoga-gray/90">
            Situado em Garopaba, SC, um refúgio natural perfeito para sua jornada de autoconhecimento.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/lovable-uploads/3a2cff1b-9b3c-413e-98a0-5d609b0254e9.png" 
              alt="Centro de Yoga Montanha Encantada"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="image-gallery-item rounded-lg overflow-hidden shadow-md aspect-square"
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
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-yoga-teal font-medium text-lg">
            O valor do investimento inclui: Hospedagem, alimentação completa e todas as atividades.
          </p>
          <p className="text-yoga-teal font-cursive text-xl mt-4">
            Vagas são limitadas!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
