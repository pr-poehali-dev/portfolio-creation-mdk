
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type CategoryProps = {
  icon: string;
  title: string;
  items: string[];
};

const Category = ({ icon, title, items }: CategoryProps) => (
  <div className="flex flex-col gap-4">
    <div className="text-center mb-4">
      <div className="bg-accent/20 mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4">
        <Icon name={icon} className="h-8 w-8 text-accent" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    
    {items.map((item, index) => (
      <Card key={index}>
        <CardContent className="p-4">
          <p className="text-sm">{item}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const TabGeneral = () => {
  const categories = [
    {
      icon: "Clipboard",
      title: "Нормативные основы",
      items: [
        "Федеральный закон \"Об образовании в РФ\"",
        "ФГОС НОО обучающихся с ОВЗ",
        "СанПиН для обучающихся с ОВЗ"
      ]
    },
    {
      icon: "FileSpreadsheet",
      title: "Документация",
      items: [
        "Структура АООП НОО",
        "Адаптированная программа внеурочной деятельности",
        "Индивидуальный образовательный маршрут"
      ]
    },
    {
      icon: "UserCheck",
      title: "Взаимодействие",
      items: [
        "Работа с родителями детей с ОВЗ",
        "Сотрудничество со специалистами",
        "Инклюзивная образовательная среда"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Category 
          key={index}
          icon={category.icon}
          title={category.title}
          items={category.items}
        />
      ))}
    </div>
  );
};

export default TabGeneral;
