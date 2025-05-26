import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Tractor" size={32} className="text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Гранд-АгроТех
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#equipment"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Техника
              </a>
              <a
                href="#parts"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Запчасти
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">
              <Icon name="Phone" size={16} />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Современная сельхозтехника
            <span className="text-green-600"> для вашего бизнеса</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Полный спектр сельскохозяйственной техники и запасных частей.
            Качество, надежность и сервис мирового уровня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Icon name="Search" size={20} />
              Каталог техники
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Settings" size={20} />
              Запасные части
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Сельскохозяйственная техника
            </h3>
            <p className="text-gray-600">
              Широкий выбор современного оборудования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Tractor" size={24} className="text-green-600" />
                </div>
                <CardTitle>Тракторы</CardTitle>
                <CardDescription>
                  Мощные и надежные тракторы для любых сельхозработ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Мощность от 50 до 400 л.с.</li>
                  <li>• Экономичные двигатели</li>
                  <li>• Комфортные кабины</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Truck" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Комбайны</CardTitle>
                <CardDescription>
                  Зерноуборочные комбайны высокой производительности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Автопилот и GPS</li>
                  <li>• Низкие потери зерна</li>
                  <li>• Быстрая разгрузка</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={24} className="text-orange-600" />
                </div>
                <CardTitle>Почвообработка</CardTitle>
                <CardDescription>
                  Плуги, культиваторы, бороны и другое оборудование
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Прочная конструкция</li>
                  <li>• Точная настройка</li>
                  <li>• Долгий срок службы</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parts Section */}
      <section id="parts" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Запасные части
            </h3>
            <p className="text-gray-600">
              Оригинальные детали для любой техники
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Cog"
                  size={32}
                  className="text-gray-600 mx-auto mb-2"
                />
                <CardTitle className="text-lg">Двигатели</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Поршни, кольца, фильтры</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Circle"
                  size={32}
                  className="text-gray-600 mx-auto mb-2"
                />
                <CardTitle className="text-lg">Трансмиссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Шестерни, муфты, валы</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Zap"
                  size={32}
                  className="text-gray-600 mx-auto mb-2"
                />
                <CardTitle className="text-lg">Электрика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Стартеры, генераторы, проводка
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Droplets"
                  size={32}
                  className="text-gray-600 mx-auto mb-2"
                />
                <CardTitle className="text-lg">Гидравлика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Насосы, шланги, фитинги</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Search" size={20} />
              Найти запчасти
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Нужна консультация?</h3>
          <p className="text-xl mb-8 opacity-90">
            Наши специалисты помогут подобрать технику и запчасти под ваши
            задачи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" size={20} />
              +7 (800) 123-45-67
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-600"
            >
              <Icon name="Mail" size={20} />
              Написать письмо
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Tractor" size={24} className="text-green-500" />
            <span className="text-xl font-bold">Гранд-АгроТех</span>
          </div>
          <p className="text-gray-400">
            © 2024 Гранд-АгроТех. Надежная сельхозтехника для эффективного
            земледелия.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
