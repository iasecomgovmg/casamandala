
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
    <section id="reservas" className="py-24 bg-slate-50 relative">
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,58.7C1120,43,1280,21,1360,10.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-serif font-light mb-6">
            Preços & Pacotes
          </h2>
          
          <p className="text-slate-600 max-w-xl mx-auto">
            Garanta sua vaga nesta jornada transformadora de 20 a 23 de fevereiro de 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingOptions.map((option) => (
            <motion.div 
              key={option.id}
              className="bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (option.id - 1) * 0.2 }}
            >
              <div className="mb-8">
                <span className="text-sm text-slate-500 uppercase tracking-wider">{option.title}</span>
                <h3 className="text-2xl font-medium mt-1">{option.description}</h3>
                <p className="text-slate-500 mt-1">{option.details}</p>
              </div>

              <div className="mb-8 flex items-baseline">
                <span className="text-green-700 text-lg">R$</span>
                <span className="text-5xl text-green-700 font-light ml-1">{option.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {option.features.map((feature, index) => (
                  <li key={index} className="text-slate-600 text-sm flex items-center">
                    <svg 
                      className="w-4 h-4 mr-3 text-green-700" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#" 
                className="w-full text-center block px-6 py-3 bg-green-700 text-white uppercase tracking-wider text-sm font-medium hover:bg-green-800 transition-all"
              >
                reservar
              </a>
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
