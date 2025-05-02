
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="portfolio-nav">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={24} className="text-primary" />
            <h1 className="text-xl font-bold">Портфолио МДК.02.03</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
