
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="portfolio-section bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <h2 className="portfolio-heading text-center mb-8">О междисциплинарном курсе</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="portfolio-subheading">МДК.02.03 - Методическое обеспечение внеурочной деятельности</h3>
            <p className="portfolio-text">
              Данный междисциплинарный курс направлен на формирование компетенций по организации и методическому 
              обеспечению внеурочной деятельности в начальном общем образовании, а также в компенсирующем и 
              коррекционно-развивающем образовании.
            </p>
            
            <p className="portfolio-text">
              В рамках курса изучаются современные подходы к организации внеурочной деятельности, методы и формы работы, 
              особенности планирования и документационное обеспечение.
            </p>
            
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Icon name="BookOpen" className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Теоретическая подготовка</h4>
                  <p className="text-sm text-gray-600">
                    Изучение нормативных документов, методик организации внеурочной деятельности
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Icon name="PencilRuler" className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Практическая подготовка</h4>
                  <p className="text-sm text-gray-600">
                    Разработка планов внеурочной деятельности, конспектов мероприятий, дидактических материалов
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Icon name="Heart" className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Инклюзивное образование</h4>
                  <p className="text-sm text-gray-600">
                    Особенности организации внеурочной деятельности для детей с особыми образовательными потребностями
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-primary/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Icon name="FileText" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Документация</h3>
                  <p className="text-sm text-gray-600">Планы, сценарии, рабочие программы</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-primary/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Icon name="PuzzlePiece" fallback="Puzzle" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Игровые методики</h3>
                  <p className="text-sm text-gray-600">Интерактивные формы работы с детьми</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-primary/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Icon name="Users" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Воспитательная работа</h3>
                  <p className="text-sm text-gray-600">Развитие личностных качеств учащихся</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-primary/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Icon name="Sparkles" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Творческий подход</h3>
                  <p className="text-sm text-gray-600">Развитие креативности и самовыражения</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
