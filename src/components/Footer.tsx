
import { Leaf, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-darkest text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-serif text-2xl text-white">Casa Mandala</h3>
            </div>
            
            <p className="text-white/70 mb-6">
              Uma jornada transformadora para reconexão com sua essência e fortalecimento emocional.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-white/70 hover:text-white transition-colors inline-block">Sobre o Retiro</a>
              </li>
              <li>
                <a href="#experiencia" className="text-white/70 hover:text-white transition-colors inline-block">O que você vai vivenciar</a>
              </li>
              <li>
                <a href="#facilitadoras" className="text-white/70 hover:text-white transition-colors inline-block">Facilitadoras</a>
              </li>
              <li>
                <a href="#local" className="text-white/70 hover:text-white transition-colors inline-block">Local</a>
              </li>
              <li>
                <a href="#reservas" className="text-white/70 hover:text-white transition-colors inline-block">Reservas</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-sage-light flex-shrink-0 mt-1" size={18} />
                <span className="text-white/70">
                Chácara Caminho de Emaús <br />
                Goiânia, GO
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-sage-light" size={18} />
                <a href="tel:+5562981394170" className="text-white/70 hover:text-white transition-colors">
                  (62) 98139-4170 

                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sage-light" size={18} />
                <a href="mailto:kathleenfms@icloud.com" className="text-white/70 hover:text-white transition-colors">
                kathleenfms@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sage-dark/30 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Casa Mandala. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
