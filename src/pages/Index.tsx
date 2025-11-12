import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const products = [
    {
      title: "Домашняя система Старт",
      description: "Компактная система для выращивания зелени на подоконнике",
      features: ["До 12 растений", "Автополив", "LED подсветка"],
      image: "https://cdn.poehali.dev/projects/c710b559-b037-4726-88bf-3d9a24b360cd/files/fec4a716-f80e-4fd2-ab15-f60dc2ac6d31.jpg"
    },
    {
      title: "VitaBase Стандарт",
      description: "Универсальная система для томатов, огурцов и перцев",
      features: ["До 24 растений", "Контроль pH", "Умный полив"],
      image: "https://cdn.poehali.dev/projects/c710b559-b037-4726-88bf-3d9a24b360cd/files/02785200-066c-4aac-91a7-c7236269997f.jpg"
    },
    {
      title: "VitaBase Про",
      description: "Профессиональная система для круглогодичного выращивания",
      features: ["До 48 растений", "Автоматизация", "Мобильное приложение"],
      image: "https://cdn.poehali.dev/projects/c710b559-b037-4726-88bf-3d9a24b360cd/files/3e43ddf2-c514-4f43-806b-4aefd699e86b.jpg"
    }
  ];

  const benefits = [
    {
      icon: "Droplets",
      title: "Экономия воды",
      description: "До 90% меньше воды по сравнению с традиционным земледелием"
    },
    {
      icon: "Sprout",
      title: "Быстрый рост",
      description: "Растения растут на 30-50% быстрее благодаря оптимальному питанию"
    },
    {
      icon: "Shield",
      title: "Без химии",
      description: "Чистая продукция без пестицидов и гербицидов"
    },
    {
      icon: "Home",
      title: "Домашнее выращивание",
      description: "Свежая зелень и овощи круглый год прямо у вас дома"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/projects/c710b559-b037-4726-88bf-3d9a24b360cd/files/fec4a716-f80e-4fd2-ab15-f60dc2ac6d31.jpg" 
              alt="VitaBase" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-primary">VitaBase</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
            <a href="#technology" className="text-foreground hover:text-primary transition-colors">О технологии</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Выращивайте свежие овощи
                <span className="text-primary block mt-2">прямо дома</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                VitaBase — современные гидропонные системы для домашнего выращивания зелени, томатов, огурцов и других культур круглый год
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Выбрать систему
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors hover-scale">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={benefit.icon as any} className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Наша продукция</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите систему, которая идеально подойдет для вашего дома
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden hover-scale">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={20} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      Узнать подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-foreground mb-12">
                Как работает гидропоника
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Питательный раствор</h3>
                      <p className="text-muted-foreground">
                        Корни растений получают все необходимые минералы напрямую из водного раствора
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Автоматизация</h3>
                      <p className="text-muted-foreground">
                        Система сама контролирует подачу воды, питательных веществ и освещения
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Оптимальные условия</h3>
                      <p className="text-muted-foreground">
                        Растения получают идеальное соотношение света, воды и питания для быстрого роста
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Урожай круглый год</h3>
                      <p className="text-muted-foreground">
                        Независимо от сезона получайте свежую зелень и овощи на своем столе
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-gradient-to-r from-green-50 to-lime-50 border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Lightbulb" className="text-primary flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Почему гидропоника эффективнее?</h3>
                      <p className="text-muted-foreground">
                        Растения тратят меньше энергии на поиск питательных веществ в почве и направляют все силы на рост. 
                        Результат — урожай на 30-50% быстрее, экономия воды до 90%, и полный контроль над процессом выращивания.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
                <p className="text-lg text-muted-foreground">
                  Остались вопросы? Мы с радостью на них ответим!
                </p>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea
                        placeholder="Расскажите, что вас интересует..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить сообщение
                      <Icon name="Send" className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Mail" className="mx-auto mb-2 text-primary" size={32} />
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">info@vitabase.ru</p>
                </div>
                <div>
                  <Icon name="Phone" className="mx-auto mb-2 text-primary" size={32} />
                  <p className="font-semibold">Телефон</p>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
                <div>
                  <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={32} />
                  <p className="font-semibold">Адрес</p>
                  <p className="text-muted-foreground">Москва, ул. Садовая, 1</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://cdn.poehali.dev/projects/c710b559-b037-4726-88bf-3d9a24b360cd/files/fec4a716-f80e-4fd2-ab15-f60dc2ac6d31.jpg" 
              alt="VitaBase" 
              className="h-8 w-8 object-contain bg-white rounded-full p-1"
            />
            <span className="text-xl font-bold">VitaBase</span>
          </div>
          <p className="text-white/80">© 2024 VitaBase. Все права защищены.</p>
          <p className="text-white/60 mt-2">Домашняя гидропоника для здорового образа жизни</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
