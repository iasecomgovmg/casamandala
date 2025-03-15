
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const pricingOptions = [
    {
      id: 1,
      title: "1º lote",
      description: "Disponível até 24 de janeiro",
      options: [
        {
          room: "Quarto Duplo",
          price: "R$ 3.800,00",
          buttonColor: "bg-yoga-teal",
        },
        {
          room: "Quarto Triplo",
          price: "R$ 3.500,00",
          buttonColor: "bg-blue-900",
        }
      ]
    },
    {
      id: 2,
      title: "2º lote",
      description: "Virada de lote, 25 de janeiro",
      options: [
        {
          room: "Quarto Duplo",
          price: "R$ 4.100,00",
          buttonColor: "bg-gray-500",
        },
        {
          room: "Quarto Triplo",
          price: "R$ 3.800,00",
          buttonColor: "bg-gray-500",
        }
      ]
    }
  ];

  return (
    <section id="reservas" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-cursive text-yoga-teal mb-6">
            Compre agora
          </h2>
          <p className="text-lg text-yoga-gray/90">
            Garanta sua vaga nesta jornada transformadora de 20 a 23 de fevereiro de 2025.
          </p>
          <div className="flex items-center justify-center mt-6">
            <Check className="text-yoga-teal mr-2" size={20} />
            <p className="text-yoga-gray">
              O valor do investimento inclui: Hospedagem, alimentação completa e todas as atividades.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pricingOptions.map((option) => (
            <motion.div 
              key={option.id}
              className="bg-yoga-light-cream rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (option.id - 1) * 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-cursive text-yoga-teal mb-2">
                  {option.title}
                </h3>
                <p className="text-yoga-gray mb-6">
                  {option.description}
                </p>

                <div className="space-y-4">
                  {option.options.map((roomOption, index) => (
                    <motion.div 
                      key={index}
                      className="pricing-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      whileHover={{ y: -5 }}
                    >
                      <h4 className="text-xl font-medium text-yoga-gray mb-2">
                        {roomOption.room}
                      </h4>
                      <p className="text-2xl font-bold text-yoga-teal mb-6">
                        {roomOption.price}
                      </p>
                      <button 
                        className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all hover:shadow-md active:scale-95 ${roomOption.buttonColor}`}
                      >
                        Clique aqui e faça sua reserva
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-yoga-teal font-cursive text-2xl italic">
            Vagas são limitadas!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
