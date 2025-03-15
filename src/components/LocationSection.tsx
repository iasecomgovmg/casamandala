
import { motion } from 'framer-motion';

const LocationSection = () => {
  return (
    <section id="local" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center">
            <div className="w-12 h-0.5 bg-slate-400 mr-4"></div>
            <span className="text-slate-500 uppercase tracking-widest text-xs">localização</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 md:mb-0">
              Contato
            </h2>
            
            <p className="text-slate-600 max-w-md">
              Situado em Garopaba, SC, um refúgio natural perfeito para sua jornada de autoconhecimento.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <motion.div 
              className="overflow-hidden h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113759.43416584634!2d-48.70244535659396!3d-28.023975594057824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952735cc01e4c0d1%3A0xce67866f33ecc179!2sGaropaba%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1679421554965!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5">
            <motion.div 
              className="h-full flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-light mb-6">
                Centro de Yoga Montanha Encantada
              </h3>
              
              <ul className="space-y-6">
                <li className="pt-6 border-t border-slate-200">
                  <p className="text-slate-600">
                    <span className="block text-slate-800 mb-1">Endereço</span>
                    Garopaba, SC<br />
                    Brasil
                  </p>
                </li>
                
                <li className="pt-6 border-t border-slate-200">
                  <p className="text-slate-600">
                    <span className="block text-slate-800 mb-1">Email</span>
                    contato@montanhaencantada.com.br
                  </p>
                </li>
                
                <li className="pt-6 border-t border-slate-200">
                  <p className="text-slate-600">
                    <span className="block text-slate-800 mb-1">Telefone</span>
                    (00) 00000-0000
                  </p>
                </li>
              </ul>
              
              <div className="mt-12">
                <a 
                  href="#reservas" 
                  className="px-8 py-3 bg-green-700 text-white uppercase tracking-wider text-sm font-medium hover:bg-green-800 transition-all inline-block"
                >
                  agende uma visita
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
