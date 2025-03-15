
import { motion } from 'framer-motion';

const PricingSection = () => {
  const pricingOptions = [
    {
      id: 1,
      title: "1º lote",
      price: "3.800",
      description: "Quarto Duplo",
      details: "Disponível até 24 de janeiro",
      features: [
        "Hospedagem em quarto duplo",
        "Alimentação completa",
        "Todas as atividades inclusas",
        "Material de apoio"
      ]
    },
    {
      id: 2,
      title: "2º lote",
      price: "4.100",
      description: "Quarto Duplo",
      details: "A partir de 25 de janeiro",
      features: [
        "Hospedagem em quarto duplo",
        "Alimentação completa",
        "Todas as atividades inclusas",
        "Material de apoio"
      ]
    },
    {
      id: 3,
      title: "1º lote",
      price: "3.500",
      description: "Quarto Triplo",
      details: "Disponível até 24 de janeiro",
      features: [
        "Hospedagem em quarto triplo",
        "Alimentação completa",
        "Todas as atividades inclusas",
        "Material de apoio"
      ]
    }
  ];

  return (
    <section id="reservas" className="section bg-white">
      <div className="container-custom">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center">
            <div className="w-12 h-0.5 bg-slate-400 mr-4"></div>
            <span className="text-slate-500 uppercase tracking-widest text-xs">investimento</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 md:mb-0">
              Preços e pacotes
            </h2>
            
            <p className="text-slate-600 max-w-md">
              Garanta sua vaga nesta jornada transformadora de 20 a 23 de fevereiro de 2025.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingOptions.map((option) => (
            <motion.div 
              key={option.id}
              className="border border-slate-100 group hover:border-slate-300 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (option.id - 1) * 0.2 }}
            >
              <div className="p-8">
                <div className="counter-item relative mb-8">
                  <div className="mb-2">
                    <span className="text-sm text-slate-500">{option.title}</span>
                  </div>
                  
                  <h3 className="text-2xl font-light">{option.description}</h3>
                  <p className="text-lg text-slate-500 mb-2">{option.details}</p>
                </div>

                <div className="mb-8">
                  <div className="text-xl">R$</div>
                  <div className="text-5xl font-light">{option.price}</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, index) => (
                    <li key={index} className="text-slate-600 text-sm flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-slate-800 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#" 
                  className="btn-primary w-full text-center block"
                >
                  reservar
                </a>
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
          <p className="text-slate-600 font-light text-xl italic">
            Vagas são limitadas!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
