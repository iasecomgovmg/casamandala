
import { Leaf, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yoga-teal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-cursive text-2xl mb-5">Retorno ao Centro</h3>
            <p className="text-white/80 mb-5">
              Uma jornada transformadora para reconexão com sua essência e fortalecimento emocional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-cursive text-xl mb-5">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-white/80 hover:text-white transition-colors">Sobre o Retiro</a>
              </li>
              <li>
                <a href="#experiencia" className="text-white/80 hover:text-white transition-colors">O que você vai vivenciar</a>
              </li>
              <li>
                <a href="#facilitadoras" className="text-white/80 hover:text-white transition-colors">Facilitadoras</a>
              </li>
              <li>
                <a href="#local" className="text-white/80 hover:text-white transition-colors">Local</a>
              </li>
              <li>
                <a href="#reservas" className="text-white/80 hover:text-white transition-colors">Reservas</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-cursive text-xl mb-5">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-white/80 flex-shrink-0 mt-1" size={18} />
                <span className="text-white/80">
                  Centro de Yoga Montanha Encantada<br />
                  Garopaba, SC
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-white/80" size={18} />
                <a href="tel:+5500000000000" className="text-white/80 hover:text-white transition-colors">
                  (00) 00000-0000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-white/80" size={18} />
                <a href="mailto:contato@montanhaencantada.com.br" className="text-white/80 hover:text-white transition-colors">
                  contato@montanhaencantada.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Centro de Yoga Montanha Encantada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
