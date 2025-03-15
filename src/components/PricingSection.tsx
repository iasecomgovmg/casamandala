
import { motion } from 'framer-motion';
import { Check, DollarSign, Calendar } from 'lucide-react';

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
          buttonColor: "btn-primary",
        },
        {
          room: "Quarto Triplo",
          price: "R$ 3.500,00",
          buttonColor: "btn-secondary",
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
          buttonColor: "btn-primary",
        },
        {
          room: "Quarto Triplo",
          price: "R$ 3.800,00",
          buttonColor: "btn-secondary",
        }
      ]
    }
  ];

  return (
    <section id="reservas" className="section bg-white">
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
              <DollarSign className="h-6 w-6 text-sage" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-sage-darkest mb-6">
            Compre agora
          </h2>
          
          <p className="text-lg text-sage-darkest/80">
            Garanta sua vaga nesta jornada transformadora de 20 a 23 de fevereiro de 2025.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 bg-sage/5 p-3 rounded-lg">
            <Calendar className="text-sage h-5 w-5" />
            <p className="text-sage-darkest/80">
              O valor do investimento inclui: Hospedagem, alimentação completa e todas as atividades.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pricingOptions.map((option) => (
            <motion.div 
              key={option.id}
              className="bg-sage-lightest rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (option.id - 1) * 0.2 }}
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Calendar className="h-5 w-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-sage-darkest">
                      {option.title}
                    </h3>
                    <p className="text-sage-darkest/70 text-sm">
                      {option.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {option.options.map((roomOption, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-sm"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      whileHover={{ y: -5 }}
                    >
                      <h4 className="text-lg font-medium text-sage-darkest mb-2">
                        {roomOption.room}
                      </h4>
                      
                      <p className="text-2xl font-bold text-sage mb-6">
                        {roomOption.price}
                      </p>
                      
                      <button 
                        className={`w-full py-3 px-4 rounded-md text-center transition-all ${roomOption.buttonColor}`}
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
          transition={{ duration: 0.6 }}
        >
          <p className="text-sage font-serif text-2xl italic">
            Vagas são limitadas!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
