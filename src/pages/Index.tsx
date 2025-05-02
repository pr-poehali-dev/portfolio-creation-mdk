
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="portfolio-hero py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Система требований к содержанию внеурочных занятий по общеинтеллектуальному направлению
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Реферат по МДК.02.03 "Методическое обеспечение внеурочной деятельности"
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="FileDown" className="mr-2 h-4 w-4" />
                Скачать PDF
              </Button>
              <Button variant="outline">
                <Icon name="Printer" className="mr-2 h-4 w-4" />
                Печать
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Реферат */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-10 shadow-md">
          <CardContent className="p-8">
            <h2 id="introduction" className="text-2xl font-bold mb-4">Введение</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Внеурочная деятельность представляет собой важнейший компонент современного образовательного процесса, 
              организуемый в свободное от уроков время для социализации детей и подростков, формирования у них потребности 
              к участию в социально значимых практиках и самоуправлении, создания условий для развития значимых качеств 
              личности, реализации их творческой и познавательной активности, участия в содержательном досуге, 
              достижения обучающимися метапредметных и личностных результатов согласно ФГОС.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Общеинтеллектуальное направление внеурочной деятельности играет особую роль в современной системе 
              образования, поскольку интеллектуальное развитие детей является основой для формирования учебных 
              компетенций и конкурентоспособности в быстро меняющемся мире. Данное направление ориентировано на 
              развитие познавательных интересов обучающихся, их интеллектуальных способностей, формирование 
              целостной картины мира и расширение кругозора.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Цель данного реферата — систематизировать и представить актуальные требования к содержанию 
              внеурочных занятий по общеинтеллектуальному направлению, выявить ключевые принципы их организации 
              и определить критерии эффективности таких занятий в современной образовательной практике.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-10 shadow-md">
          <CardContent className="p-8">
            <h2 id="requirements" className="text-2xl font-bold mb-6">Нормативные требования к организации внеурочной деятельности</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">1. Нормативно-правовое регулирование внеурочной деятельности</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Внеурочная деятельность в современной школе регулируется рядом нормативных документов, определяющих 
              её содержание, направления и формы организации:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Федеральный закон №273-ФЗ "Об образовании в Российской Федерации"</li>
              <li>Федеральный государственный образовательный стандарт начального общего образования</li>
              <li>Федеральный государственный образовательный стандарт основного общего образования</li>
              <li>Письмо Минобрнауки России от 18.08.2017 N 09-1672 "О направлении Методических рекомендаций по 
                  уточнению понятия и содержания внеурочной деятельности в рамках реализации основных общеобразовательных программ"</li>
              <li>СанПиН 2.4.3648-20 "Санитарно-эпидемиологические требования к организациям воспитания и обучения, 
                  отдыха и оздоровления детей и молодежи"</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">2. Общие требования к содержанию внеурочной деятельности</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Согласно нормативным документам, внеурочная деятельность должна соответствовать следующим требованиям:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon name="CheckCircle" className="text-primary mr-2 h-5 w-5" />
                  Соответствие ФГОС
                </h4>
                <p className="text-sm text-gray-700">
                  Содержание деятельности должно способствовать достижению планируемых результатов освоения основной 
                  образовательной программы начального общего образования
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon name="CheckCircle" className="text-primary mr-2 h-5 w-5" />
                  Добровольность участия
                </h4>
                <p className="text-sm text-gray-700">
                  Внеурочная деятельность организуется на добровольной основе в соответствии с выбором участников 
                  образовательных отношений
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon name="CheckCircle" className="text-primary mr-2 h-5 w-5" />
                  Вариативность
                </h4>
                <p className="text-sm text-gray-700">
                  Образовательное учреждение самостоятельно разрабатывает и утверждает план внеурочной деятельности
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon name="CheckCircle" className="text-primary mr-2 h-5 w-5" />
                  Учет возрастных и индивидуальных особенностей
                </h4>
                <p className="text-sm text-gray-700">
                  Содержание внеурочной деятельности должно учитывать возрастные и индивидуальные особенности обучающихся
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-10 shadow-md">
          <CardContent className="p-8">
            <h2 id="content" className="text-2xl font-bold mb-6">Требования к содержанию внеурочных занятий по общеинтеллектуальному направлению</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">1. Целевые ориентиры общеинтеллектуального направления</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Общеинтеллектуальное направление внеурочной деятельности направлено на решение следующих задач:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Формирование навыков научно-интеллектуального труда</li>
              <li>Развитие культуры логического и алгоритмического мышления, воображения</li>
              <li>Формирование первоначального опыта практической преобразовательной деятельности</li>
              <li>Овладение навыками универсальных учебных действий</li>
              <li>Развитие познавательной активности и самостоятельности</li>
              <li>Формирование интереса к исследовательской и проектной деятельности</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">2. Принципы отбора содержания</h3>
            <div className="mb-6">
              <p className="mb-4 text-gray-700 leading-relaxed">
                При разработке содержания внеурочных занятий по общеинтеллектуальному направлению необходимо 
                руководствоваться следующими принципами:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-semibold mb-2 text-accent">Научность</h4>
                  <p className="text-sm text-gray-700">
                    Содержание должно отражать современные научные достижения, соответствовать уровню развития 
                    науки и не содержать ошибочных или псевдонаучных положений
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-semibold mb-2 text-accent">Доступность</h4>
                  <p className="text-sm text-gray-700">
                    Содержание должно быть адаптировано к возрастным особенностям обучающихся, учитывать их 
                    познавательные возможности и жизненный опыт
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-semibold mb-2 text-accent">Проблемность</h4>
                  <p className="text-sm text-gray-700">
                    Содержание должно включать проблемные задания, развивающие критическое мышление и умение 
                    находить нестандартные решения
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-semibold mb-2 text-accent">Практическая направленность</h4>
                  <p className="text-sm text-gray-700">
                    Содержание должно иметь связь с жизнью и практической деятельностью обучающихся
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-semibold mb-2 text-accent">Межпредметность</h4>
                  <p className="text-sm text-gray-700">
                    Содержание должно интегрировать знания из различных предметных областей
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-semibold mb-2 text-accent">Вариативность</h4>
                  <p className="text-sm text-gray-700">
                    Содержание должно предусматривать разные уровни сложности и возможность выбора заданий
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">3. Формы организации внеурочной деятельности по общеинтеллектуальному направлению</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Общеинтеллектуальное направление может быть реализовано через различные формы внеурочной деятельности:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Предметные кружки</h4>
                <p className="text-sm text-gray-700">
                  "Занимательная математика", "Юный физик", "Лингвистический калейдоскоп"
                </p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Интеллектуальные клубы</h4>
                <p className="text-sm text-gray-700">
                  "Что? Где? Когда?", "Эрудит", дискуссионные клубы
                </p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Проектная деятельность</h4>
                <p className="text-sm text-gray-700">
                  Индивидуальные и групповые проекты исследовательского характера
                </p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Олимпиады и конкурсы</h4>
                <p className="text-sm text-gray-700">
                  Подготовка к предметным олимпиадам, интеллектуальным марафонам
                </p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Образовательные экскурсии</h4>
                <p className="text-sm text-gray-700">
                  Посещение музеев, выставок, научных центров
                </p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Научные общества</h4>
                <p className="text-sm text-gray-700">
                  Сообщества юных исследователей, экспериментаторов
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">4. Требования к организации проектно-исследовательской деятельности</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Проектно-исследовательская деятельность является одной из ключевых форм организации 
              общеинтеллектуального направления и должна отвечать следующим требованиям:
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2">
                <h4 className="font-semibold mb-2 text-accent">Требования к тематике проектов</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                  <li>Соответствие возрастным интересам обучающихся</li>
                  <li>Актуальность и практическая значимость</li>
                  <li>Доступность необходимых источников информации</li>
                  <li>Возможность реализации в рамках имеющихся ресурсов</li>
                  <li>Потенциал для проявления творчества</li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <h4 className="font-semibold mb-2 text-accent">Этапы организации проектной деятельности</h4>
                <ol className="list-decimal pl-6 space-y-1 text-sm text-gray-700">
                  <li>Определение проблемы и цели проекта</li>
                  <li>Планирование деятельности</li>
                  <li>Поиск и обработка информации</li>
                  <li>Создание продукта проекта</li>
                  <li>Презентация результатов</li>
                  <li>Рефлексия и оценка результатов</li>
                </ol>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">5. Критерии оценки эффективности внеурочных занятий по общеинтеллектуальному направлению</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Эффективность внеурочных занятий по общеинтеллектуальному направлению может оцениваться по следующим критериям:
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="BrainCircuit" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Развитие познавательных процессов</h4>
                  <p className="text-sm text-gray-700">
                    Улучшение внимания, памяти, мышления, воображения у обучающихся
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="BookOpenCheck" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Сформированность учебных действий</h4>
                  <p className="text-sm text-gray-700">
                    Овладение универсальными учебными действиями: регулятивными, познавательными, коммуникативными
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Развитие исследовательских умений</h4>
                  <p className="text-sm text-gray-700">
                    Способность выдвигать гипотезы, планировать исследование, собирать и анализировать информацию
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Trophy" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Результативность участия в конкурсах</h4>
                  <p className="text-sm text-gray-700">
                    Достижения в интеллектуальных состязаниях, олимпиадах, конференциях
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-10 shadow-md">
          <CardContent className="p-8">
            <h2 id="conclusion" className="text-2xl font-bold mb-4">Заключение</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Система требований к содержанию внеурочных занятий по общеинтеллектуальному направлению представляет 
              собой комплекс взаимосвязанных нормативных, содержательных, организационных и методических аспектов, 
              которые в совокупности обеспечивают эффективное интеллектуальное развитие обучающихся.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Ключевыми факторами, определяющими качество внеурочной деятельности по общеинтеллектуальному направлению, 
              являются: соответствие нормативным требованиям, учет возрастных и индивидуальных особенностей обучающихся, 
              научность содержания, практическая направленность, разнообразие организационных форм, компетентность 
              педагогов и системность в организации мероприятий.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Современное содержание внеурочной деятельности по общеинтеллектуальному направлению должно ориентироваться 
              на развитие метапредметных навыков XXI века: критического мышления, креативности, коммуникации и кооперации. 
              Только при комплексном подходе к организации внеурочных занятий по общеинтеллектуальному направлению можно 
              достичь высоких результатов в развитии познавательных способностей обучающихся и формировании у них устойчивой 
              мотивации к интеллектуальной деятельности.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-10 shadow-md">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Список литературы</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                Федеральный закон "Об образовании в Российской Федерации" от 29.12.2012 N 273-ФЗ (последняя редакция).
              </li>
              <li>
                Федеральный государственный образовательный стандарт начального общего образования / М-во образования и науки Рос. Федерации. — М.: Просвещение, 2010.
              </li>
              <li>
                Байбородова Л.В. Внеурочная деятельность школьников в разновозрастных группах / Л. В. Байбородова. — М.: Просвещение, 2013. — 177 с.
              </li>
              <li>
                Григорьев Д.В. Внеурочная деятельность школьников: методический конструктор / Д.В. Григорьев, П.В. Степанов. — М.: Просвещение, 2014. — 223 с.
              </li>
              <li>
                Моделируем внеурочную деятельность обучающихся в различных условиях организации образовательного процесса: Методические рекомендации / Под ред. М.И. Солодковой. — Челябинск: ЧИППКРО, 2011. — 92 с.
              </li>
              <li>
                Попова И.Н. Организация внеурочной деятельности в условиях реализации ФГОС // Народное образование. — 2013. — № 1. — С. 219-226.
              </li>
              <li>
                Савенков А.И. Методика исследовательского обучения младших школьников. — Самара: Учебная литература, 2010. — 224 с.
              </li>
              <li>
                Шмаков С.А. Игры учащихся — феномен культуры. — М.: Новая школа, 2004. — 240 с.
              </li>
            </ol>
          </CardContent>
        </Card>
        
        <div className="flex justify-center mt-8 mb-16">
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="ArrowUpToLine" className="mr-2 h-4 w-4" />
            Вернуться в начало
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
