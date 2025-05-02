
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const InclusiveSection = () => {
  return (
    <section id="inclusive" className="portfolio-section bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <h2 className="portfolio-heading text-center">Коррекционно-развивающая работа</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Материалы по организации внеурочной деятельности для детей с особыми образовательными потребностями
        </p>
        
        <Tabs defaultValue="general" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="general">Общие подходы</TabsTrigger>
            <TabsTrigger value="materials">Адаптированные материалы</TabsTrigger>
            <TabsTrigger value="methods">Методы и приемы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4">
                <div className="text-center mb-4">
                  <div className="bg-accent/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Icon name="Clipboard" className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Нормативные основы</h3>
                </div>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">Федеральный закон "Об образовании в РФ"</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">ФГОС НОО обучающихся с ОВЗ</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">СанПиН для обучающихся с ОВЗ</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="text-center mb-4">
                  <div className="bg-accent/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Icon name="FileSpreadsheet" className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Документация</h3>
                </div>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">Структура АООП НОО</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">Адаптированная программа внеурочной деятельности</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">Индивидуальный образовательный маршрут</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="text-center mb-4">
                  <div className="bg-accent/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Icon name="UserCheck" className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Взаимодействие</h3>
                </div>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">Работа с родителями детей с ОВЗ</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">Сотрудничество со специалистами</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">Инклюзивная образовательная среда</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="materials">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">Адаптированные материалы для детей с ОВЗ</h3>
                <p className="text-gray-700 mb-4">
                  Эффективная внеурочная деятельность для детей с особыми образовательными потребностями требует 
                  адаптации учебных материалов с учетом особенностей восприятия и обработки информации.
                </p>
                
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Крупный шрифт и четкие изображения для детей с нарушениями зрения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Визуальные подсказки и структурированные материалы для детей с РАС</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Тактильные материалы и рельефные изображения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Упрощенные инструкции с пошаговыми алгоритмами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Аудиоматериалы и видеоматериалы с субтитрами</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="portfolio-card">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-primary/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                        <Icon name="PencilLine" className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Рабочие листы</h3>
                      <p className="text-sm text-gray-600">Адаптированные под различные нозологии</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="portfolio-card">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-primary/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                        <Icon name="ImagePlus" className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Визуальное расписание</h3>
                      <p className="text-sm text-gray-600">Карточки и шаблоны расписаний</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="portfolio-card">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-primary/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                        <Icon name="Gamepad2" className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Дидактические игры</h3>
                      <p className="text-sm text-gray-600">Адаптированные правила и материалы</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="portfolio-card">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-primary/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
                        <Icon name="Lightbulb" className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Сенсорные материалы</h3>
                      <p className="text-sm text-gray-600">Для развития тактильного восприятия</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="methods">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="portfolio-card h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-4">
                      <div className="bg-accent/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full">
                        <Icon name="Brain" className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg mt-3">Когнитивное развитие</h3>
                    </div>
                    
                    <ul className="space-y-3 mt-2 flex-grow">
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Методика "Step by Step" (пошаговое обучение)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Визуализация учебного материала</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Мнемотехники и ассоциативные связи</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="portfolio-card h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-4">
                      <div className="bg-accent/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full">
                        <Icon name="UserPlus" className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg mt-3">Социальное развитие</h3>
                    </div>
                    
                    <ul className="space-y-3 mt-2 flex-grow">
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Методы тьюторского сопровождения</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Социальные истории (для детей с РАС)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Организация групповых форм работы с учетом индивидуальных особенностей</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="portfolio-card h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-4">
                      <div className="bg-accent/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full">
                        <Icon name="Handshake" fallback="UserPlus" className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg mt-3">Эмоциональное развитие</h3>
                    </div>
                    
                    <ul className="space-y-3 mt-2 flex-grow">
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Техники арт-терапии (рисование, лепка, коллажирование)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Психогимнастика и релаксационные методы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Методы развития эмоционального интеллекта</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InclusiveSection;
