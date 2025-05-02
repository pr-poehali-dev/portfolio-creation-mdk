
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "@/components/inclusive/SectionHeader";
import TabGeneral from "@/components/inclusive/TabGeneral";
import TabMaterials from "@/components/inclusive/TabMaterials";
import TabMethods from "@/components/inclusive/TabMethods";

/**
 * Компонент раздела коррекционно-развивающей работы
 * 
 * Отображает информацию о материалах по организации внеурочной деятельности
 * для детей с особыми образовательными потребностями через три вкладки:
 * - Общие подходы
 * - Адаптированные материалы
 * - Методы и приемы
 */
const InclusiveSection = () => {
  const tabs = [
    { id: "general", label: "Общие подходы" },
    { id: "materials", label: "Адаптированные материалы" },
    { id: "methods", label: "Методы и приемы" }
  ];

  return (
    <section id="inclusive" className="portfolio-section bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <SectionHeader 
          title="Коррекционно-развивающая работа"
          description="Материалы по организации внеурочной деятельности для детей с особыми образовательными потребностями"
        />
        
        <Tabs defaultValue="general" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {tabs.map(tab => (
              <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="general">
            <TabGeneral />
          </TabsContent>
          
          <TabsContent value="materials">
            <TabMaterials />
          </TabsContent>
          
          <TabsContent value="methods">
            <TabMethods />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InclusiveSection;
