
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="portfolio-nav">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={24} className="text-primary" />
            <h1 className="text-xl font-bold">Портфолио МДК.02.03</h1>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#introduction" className="text-gray-700 hover:text-primary transition-colors">Введение</a>
            <a href="#requirements" className="text-gray-700 hover:text-primary transition-colors">Требования</a>
            <a href="#content" className="text-gray-700 hover:text-primary transition-colors">Содержание</a>
            <a href="#conclusion" className="text-gray-700 hover:text-primary transition-colors">Заключение</a>
          </nav>
          
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Icon name="FileText" className="mr-2 h-4 w-4" />
            Скачать реферат
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
