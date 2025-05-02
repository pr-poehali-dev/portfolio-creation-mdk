
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import MethodicalSection from "@/components/MethodicalSection";
import InclusiveSection from "@/components/InclusiveSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Методическое обеспечение внеурочной деятельности
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Портфолио материалов для организации внеурочной работы в начальном общем, 
                компенсирующем и коррекционно-развивающем образовании
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Files" className="mr-2 h-4 w-4" />
                  Методические материалы
                </Button>
                <Button variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                alt="Внеурочная деятельность" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <AboutSection />
      
      <MethodicalSection />
      
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="portfolio-heading text-center">Портфолио материалов</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Представленные материалы отражают опыт организации внеурочной деятельности 
            с учетом особенностей обучающихся
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="portfolio-card overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Презентации" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Презентации</h3>
                <p className="text-gray-600 mb-4">
                  Наглядные материалы для внеурочных занятий и мероприятий
                </p>
                <Button variant="outline" size="sm">Смотреть презентации</Button>
              </div>
            </div>
            
            <div className="portfolio-card overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Конспекты занятий" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Конспекты занятий</h3>
                <p className="text-gray-600 mb-4">
                  Подробные разработки внеурочных занятий по различным направлениям
                </p>
                <Button variant="outline" size="sm">Смотреть конспекты</Button>
              </div>
            </div>
            
            <div className="portfolio-card overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Дидактические материалы" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Дидактические материалы</h3>
                <p className="text-gray-600 mb-4">
                  Раздаточные материалы, карточки, схемы и игры для внеурочных занятий
                </p>
                <Button variant="outline" size="sm">Смотреть материалы</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <InclusiveSection />
      
      <Footer />
    </div>
  );
};

export default Index;
