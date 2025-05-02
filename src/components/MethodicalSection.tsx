
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MethodicalSection = () => {
  return (
    <section id="methodical" className="portfolio-section bg-white">
      <div className="container mx-auto">
        <h2 className="portfolio-heading text-center">Методические разработки</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          В данном разделе представлены разработанные методические материалы для обеспечения внеурочной 
          деятельности в начальном общем образовании
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="portfolio-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Методическая разработка</Badge>
                <Button variant="ghost" size="icon">
                  <Icon name="Download" className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="mt-3">План внеурочной деятельности</CardTitle>
              <CardDescription>Направление: общеинтеллектуальное</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Разработка содержит годовой план внеурочной деятельности для 2 класса по программе "Юный исследователь". 
                Включает тематическое планирование, формы работы и ожидаемые результаты.
              </p>
              <div className="flex gap-2 mt-4">
                <Badge variant="secondary">2 класс</Badge>
                <Badge variant="secondary">34 часа</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Посмотреть подробнее</Button>
            </CardFooter>
          </Card>
          
          <Card className="portfolio-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">Сценарий</Badge>
                <Button variant="ghost" size="icon">
                  <Icon name="Download" className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="mt-3">Сценарий экологического праздника</CardTitle>
              <CardDescription>Тема: "Друзья природы"</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Подробный сценарий экологического праздника для младших школьников. Включает игровые элементы, 
                творческие задания, музыкальное сопровождение и необходимое оформление.
              </p>
              <div className="flex gap-2 mt-4">
                <Badge variant="secondary">1-4 класс</Badge>
                <Badge variant="secondary">45 минут</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Посмотреть подробнее</Button>
            </CardFooter>
          </Card>
          
          <Card className="portfolio-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">Дидактические материалы</Badge>
                <Button variant="ghost" size="icon">
                  <Icon name="Download" className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="mt-3">Рабочая тетрадь</CardTitle>
              <CardDescription>Курс "Путешествие в мир профессий"</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Рабочая тетрадь для учащихся 3-4 классов с заданиями по профориентации. Содержит иллюстрации, 
                практические задания, творческие упражнения и рефлексивные вопросы.
              </p>
              <div className="flex gap-2 mt-4">
                <Badge variant="secondary">3-4 класс</Badge>
                <Badge variant="secondary">12 занятий</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Посмотреть подробнее</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <Button>
            Все методические материалы
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodicalSection;
