
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="GraduationCap" size={20} />
              Портфолио МДК.02.03
            </h3>
            <p className="text-gray-400 mb-4">
              Методическое обеспечение внеурочной деятельности в начальном общем 
              образовании и в компенсирующем и коррекционно-развивающем образовании
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Mail" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="PhoneCall" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" size={18} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">О курсе</a>
              </li>
              <li>
                <a href="#methodical" className="text-gray-400 hover:text-white transition-colors">Методические разработки</a>
              </li>
              <li>
                <a href="#inclusive" className="text-gray-400 hover:text-white transition-colors">Коррекционно-развивающая работа</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Портфолио</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-400">
                <Icon name="Mail" size={16} className="text-primary" />
                <span>portfolio@example.com</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Icon name="PhoneCall" size={16} className="text-primary" />
                <span>+7 (123) 456-78-90</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span>г. Москва, ул. Педагогическая, 123</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Портфолио по МДК.02.03. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            Создано в образовательных целях
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
