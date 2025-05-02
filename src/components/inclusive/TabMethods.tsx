
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type MethodCategoryProps = {
  icon: string;
  fallbackIcon?: string;
  title: string;
  methods: string[];
};

const MethodCategory = ({ icon, fallbackIcon, title, methods }: MethodCategoryProps) => (
  <Card className="portfolio-card h-full">
    <CardContent className="p-6">
      <div className="flex flex-col h-full">
        <div className="text-center mb-4">
          <div className="bg-accent/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full">
            <Icon name={icon} fallback={fallbackIcon} className="h-8 w-8 text-accent" />
          </div>
          <h3 className="font-semibold text-lg mt-3">{title}</h3>
        </div>
        
        <ul className="space-y-3 mt-2 flex-grow">
          {methods.map((method, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icon name="ArrowRight" className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-sm">{method}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

const TabMethods = () => {
  const methodCategories = [
    {
      icon: "Brain",
      title: "Когнитивное развитие",
      methods: [
        'Методика "Step by Step" (пошаговое обучение)',
        "Визуализация учебного материала",
        "Мнемотехники и ассоциативные связи"
      ]
    },
    {
      icon: "UserPlus",
      title: "Социальное развитие",
      methods: [
        "Методы тьюторского сопровождения",
        "Социальные истории (для детей с РАС)",
        "Организация групповых форм работы с учетом индивидуальных особенностей"
      ]
    },
    {
      icon: "Handshake",
      fallbackIcon: "UserPlus",
      title: "Эмоциональное развитие",
      methods: [
        "Техники арт-терапии (рисование, лепка, коллажирование)",
        "Психогимнастика и релаксационные методы",
        "Методы развития эмоционального интеллекта"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {methodCategories.map((category, index) => (
        <MethodCategory 
          key={index}
          icon={category.icon}
          fallbackIcon={category.fallbackIcon}
          title={category.title}
          methods={category.methods}
        />
      ))}
    </div>
  );
};

export default TabMethods;
