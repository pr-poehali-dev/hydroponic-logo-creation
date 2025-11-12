import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/ee068924-b2ec-4c65-b24a-027bbd771d9e.png" 
              alt="Hydroponical" 
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-foreground">Hydroponical</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Гидропоника <br />
                <span className="text-primary">нового поколения</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Выращивайте свежие овощи, зелень и ягоды круглый год без почвы. 
                Экологично, эффективно, современно.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Каталог продукции
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/ee068924-b2ec-4c65-b24a-027bbd771d9e.png" 
                alt="Гидропоника" 
                className="w-full max-w-md mx-auto drop-shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Почему Hydroponical?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные технологии выращивания для вашего дома и бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Droplets" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Экономия воды</h3>
                <p className="text-muted-foreground">
                  На 90% меньше расход воды по сравнению с традиционным земледелием
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="TrendingUp" size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Быстрый рост</h3>
                <p className="text-muted-foreground">
                  Урожай на 30-50% быстрее благодаря оптимальному питанию растений
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Leaf" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">100% Эко</h3>
                <p className="text-muted-foreground">
                  Без пестицидов, гербицидов и вредных химикатов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональные гидропонные системы для любых задач
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hydroponical Home",
                description: "Компактная система для дома",
                price: "от 15 000 ₽",
                features: ["До 12 растений", "Автополив", "LED-подсветка"],
                icon: "Home"
              },
              {
                title: "Hydroponical Pro",
                description: "Для профессионального использования",
                price: "от 45 000 ₽",
                features: ["До 48 растений", "Автоматика", "Мониторинг"],
                icon: "Briefcase"
              },
              {
                title: "Hydroponical Farm",
                description: "Промышленные масштабы",
                price: "от 150 000 ₽",
                features: ["200+ растений", "Полная автоматизация", "Облачный контроль"],
                icon: "Factory"
              }
            ].map((product, i) => (
              <Card key={i} className="bg-white border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={product.icon as any} size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <p className="text-3xl font-bold text-primary">{product.price}</p>
                  </div>
                  <ul className="space-y-2">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Check" size={18} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                О технологии гидропоники
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Гидропоника — это метод выращивания растений без почвы, где корневая 
                система получает все необходимые питательные вещества из водного раствора.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наши системы оснащены автоматическим контролем pH, температуры и 
                концентрации питательных веществ, что гарантирует идеальные условия 
                для роста растений.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">90%</p>
                  <p className="text-sm text-muted-foreground mt-2">Экономия воды</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-secondary">50%</p>
                  <p className="text-sm text-muted-foreground mt-2">Быстрее рост</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">100%</p>
                  <p className="text-sm text-muted-foreground mt-2">Эко чистота</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/ee068924-b2ec-4c65-b24a-027bbd771d9e.png" 
                alt="О Hydroponical" 
                className="w-full max-w-md mx-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Начните выращивать уже сегодня
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Получите бесплатную консультацию и подберите идеальную систему для ваших задач
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/ee068924-b2ec-4c65-b24a-027bbd771d9e.png" 
                  alt="Hydroponical" 
                  className="h-8 w-8 brightness-0 invert"
                />
                <span className="text-xl font-bold">Hydroponical</span>
              </div>
              <p className="text-white/70">
                Современные гидропонные системы для дома и бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Hydroponical Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hydroponical Pro</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hydroponical Farm</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@hydroponical.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 Hydroponical. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
