
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type MaterialCardProps = {
  icon: string;
  title: string;
  description: string;
};

const MaterialCard = ({ icon, title, description }: MaterialCardProps) => (
  <Card className="portfolio-card">
    <CardContent className="p-6">
      <div className="text-center">
        <div className="bg-primary/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
          <Icon name={icon} className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <Icon name="Check" className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const TabMaterials = () => {
  const materials = [
    {
      icon: "PencilLine",
      title: "Рабочие листы",
      description: "Адаптированные под различные нозологии"
    },
    {
      icon: "ImagePlus",
      title: "Визуальное расписание",
      description: "Карточки и шаблоны расписаний"
    },
    {
      icon: "Gamepad2",
      title: "Дидактические игры",
      description: "Адаптированные правила и материалы"
    },
    {
      icon: "Lightbulb",
      title: "Сенсорные материалы",
      description: "Для развития тактильного восприятия"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-accent">Адаптированные материалы для детей с ОВЗ</h3>
        <p className="text-gray-700 mb-4">
          Эффективная внеурочная деятельность для детей с особыми образовательными потребностями требует 
          адаптации учебных материалов с учетом особенностей восприятия и обработки информации.
        </p>
        
        <ul className="space-y-2 mt-4">
          <CheckListItem>Крупный шрифт и четкие изображения для детей с нарушениями зрения</CheckListItem>
          <CheckListItem>Визуальные подсказки и структурированные материалы для детей с РАС</CheckListItem>
          <CheckListItem>Тактильные материалы и рельефные изображения</CheckListItem>
          <CheckListItem>Упрощенные инструкции с пошаговыми алгоритмами</CheckListItem>
          <CheckListItem>Аудиоматериалы и видеоматериалы с субтитрами</CheckListItem>
        </ul>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {materials.map((material, index) => (
          <MaterialCard 
            key={index}
            icon={material.icon}
            title={material.title}
            description={material.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TabMaterials;
