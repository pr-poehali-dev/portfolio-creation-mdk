
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="portfolio-nav">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={24} className="text-primary" />
            <h1 className="text-xl font-bold">Портфолио МДК.02.03</h1>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className="px-4 py-2 text-sm font-medium">
                  О курсе
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Материалы</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink href="#methodical" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Методические разработки</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Планы, конспекты занятий и мероприятий
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#presentations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Презентации</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Наглядные материалы для внеурочной деятельности
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#activities" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Виды деятельности</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Различные формы и методы работы
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#inclusive" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Коррекционно-развивающая работа</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Материалы по инклюзивному образованию
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="#portfolio" className="px-4 py-2 text-sm font-medium">
                  Портфолио
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="px-4 py-2 text-sm font-medium">
                  Контакты
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Icon name="Download" className="mr-2 h-4 w-4" />
            Скачать материалы
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
