
import { motion } from 'framer-motion';
import { Check, DollarSign, Calendar } from 'lucide-react';

const PricingSection = () => {
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
            Garanta sua vaga
          </h2>
          
          <p className="text-lg text-sage-darkest/80">
            Participe desta jornada transformadora nos dias 31 de maio a 01 de junho.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 bg-sage/5 p-3 rounded-lg">
            <Calendar className="text-sage h-5 w-5" />
            <p className="text-sage-darkest/80">
              O valor do investimento inclui: Hospedagem, alimentação completa e todas as atividades.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12 max-w-2xl mx-auto">
          <motion.div 
            className="bg-sage-lightest rounded-2xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Calendar className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-sage-darkest">
                    Vivência de Dois Dias
                  </h3>
                  <p className="text-sage-darkest/70 text-sm">
                    31 de maio a 01 de junho
                  </p>
                </div>
              </div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-lg font-medium text-sage-darkest mb-2">
                  Investimento
                </h4>
                
                <p className="text-2xl font-bold text-sage mb-6">
                  10x de R$180
                </p>
                
                <p className="text-sage-darkest/70 mb-6">
                  Parcelamento em até 10x no cartão
                </p>
                
                <a 
                  href="https://payment-link-v3.ton.com.br/pl_kEzBKgMvx36nePAHk8CzaqeQdwO0JmW8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-md text-center transition-all btn-primary block"
                >
                  Clique aqui e faça sua reserva
                </a>
              </motion.div>
            </div>
          </motion.div>
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
