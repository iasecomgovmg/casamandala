import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';

const ScheduleSection = () => {
  return (
    <section id="cronograma" className="section bg-sage-lightest relative">
      <div className="absolute inset-0 bg-pattern opacity-50 z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Calendar className="h-6 w-6 text-sage" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-sage-darkest mb-6">
            Cronograma da Vivência
          </h2>
          
          <p className="text-lg text-sage-darkest/80 mb-6">
            Vivência de Dois Dias: conexão com sua essência e liberação da Criança Ferida, Trabalhos Corporais Reichianos, TRE, Mandalas, Meditação, Visualizações Jungianas e Trabalhos com Sintomas (Léo Matos)
          </p>
          
          <p className="text-sage-darkest/80 mb-6 font-medium">
            Objetivo: Promover a liberação de traumas e padrões que adoecem e travam relacionamentos, acessando a criança ferida através de práticas corporais, simbólicas e espirituais.
          </p>
        </motion.div>

        {/* Day 1 */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-2xl font-serif text-sage-darkest mb-4 flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-sage" />
              DIA 1: Reconexão e Acolhimento da Criança Interior
            </h3>
            
            <div className="space-y-8">
              {/* Morning */}
              <div>
                <h4 className="text-xl font-medium text-sage mb-4">Manhã:</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">9h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Chegada e Acolhimento</p>
                      <p className="text-sage-darkest/70">Ritual de abertura, música suave e círculo de boas-vindas.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">9h30</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Apresentação e Intenção</p>
                      <p className="text-sage-darkest/70">Compartilhamento breve das expectativas e intenções.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">10h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Exercício Corporal Reichiano</p>
                      <p className="text-sage-darkest/70">Respiração profunda e desbloqueio do segmento ocular (olhos e testa) para liberar tensões iniciais.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">10h30</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Meditação Guiada</p>
                      <p className="text-sage-darkest/70">Reconexão com a criança interior, visualizando um lugar seguro.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">11h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Intervalo</p>
                      <p className="text-sage-darkest/70">Chá, frutas e silêncio contemplativo.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Afternoon */}
              <div>
                <h4 className="text-xl font-medium text-sage mb-4">Tarde:</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">13h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">TRE (Exercícios de Liberação de Trauma)</p>
                      <p className="text-sage-darkest/70">Série de exercícios suaves para ativar tremores neurogênicos, liberando tensões profundas do corpo.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">13h45</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Trabalho com Sintomas (Léo Matos)</p>
                      <p className="text-sage-darkest/70">Identificação de sintomas corporais e diálogo com essas sensações, permitindo que o corpo expresse o que precisa ser ouvido.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">14h30</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Visualização Ativa (Jung)</p>
                      <p className="text-sage-darkest/70">Encontro com a criança interior, acolhendo suas dores e necessidades.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">15h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Criação de Mandalas</p>
                      <p className="text-sage-darkest/70">Expressão simbólica do encontro com a criança ferida.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">15h45</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Partilha</p>
                      <p className="text-sage-darkest/70">Momento de escuta no círculo, integrando as experiências.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">16h30</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Ritual de Acolhimento</p>
                      <p className="text-sage-darkest/70">Abraço simbólico à própria criança interior, com música suave.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Night */}
              <div>
                <h4 className="text-xl font-medium text-sage mb-4">Noite:</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">19h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Meditação Noturna</p>
                      <p className="text-sage-darkest/70">Relaxamento profundo e integração do dia.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">20h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Silêncio Sagrado</p>
                      <p className="text-sage-darkest/70">Noite de recolhimento, permitindo que as experiências ressoem internamente.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Day 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-serif text-sage-darkest mb-4 flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-sage" />
              DIA 2: Liberação e Reconstrução
            </h3>
            
            <div className="space-y-8">
              {/* Morning */}
              <div>
                <h4 className="text-xl font-medium text-sage mb-4">Manhã:</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">7h30</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Caminhada Meditativa</p>
                      <p className="text-sage-darkest/70">Conexão com a natureza, em silêncio.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">8h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Exercício Corporal</p>
                      <p className="text-sage-darkest/70">Foco no segmento torácico e abdominal, liberando emoções contidas.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">8h30</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Trabalho Corporal</p>
                      <p className="text-sage-darkest/70">Bioenergética.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">9h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Trabalho com Sintomas</p>
                      <p className="text-sage-darkest/70">Exploração dos sinais do corpo, acolhendo mensagens emocionais guardadas.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">9h30</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Visualização Ativa</p>
                      <p className="text-sage-darkest/70">Reencontro com a criança curada, projetando um novo futuro.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">10h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Mandala Final</p>
                      <p className="text-sage-darkest/70">Representação simbólica do renascimento e integração.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Afternoon */}
              <div>
                <h4 className="text-xl font-medium text-sage mb-4">Tarde:</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">13h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Ritual de Liberação</p>
                      <p className="text-sage-darkest/70">Escrita de cartas de perdão e soltura, queimando-as em um ritual simbólico.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">14h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Banho de Renovação</p>
                      <p className="text-sage-darkest/70">Banho consciente, permitindo a sensação de purificação e leveza.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">15h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Círculo de Encerramento</p>
                      <p className="text-sage-darkest/70">Compartilhamento das vivências, gratidão e fechamento do ciclo.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 flex-shrink-0 text-sage-dark font-medium w-14">16h</div>
                    <div>
                      <p className="font-medium text-sage-darkest">Partida</p>
                      <p className="text-sage-darkest/70">Despedida e integração do aprendizado.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;