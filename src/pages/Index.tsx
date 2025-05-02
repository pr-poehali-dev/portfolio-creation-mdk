
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="portfolio-hero min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 max-w-4xl">
              Методическое обеспечение внеурочной деятельности
            </h1>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Info" className="mr-2 h-4 w-4" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
