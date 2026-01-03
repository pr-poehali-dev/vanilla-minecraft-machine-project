import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Технология</h2>
            <p className="text-xl text-muted-foreground">Принципы работы редстоун-механики</p>
          </div>

          <Tabs defaultValue="basics" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basics">Основы</TabsTrigger>
              <TabsTrigger value="advanced">Продвинутое</TabsTrigger>
              <TabsTrigger value="innovation">Инновации</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basics" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Zap" className="mr-2 text-primary" size={24} />
                    Редстоун-сигналы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    Редстоун-пыль передает энергию на расстояние до 15 блоков. Используется для создания логических схем и передачи сигналов между компонентами.
                  </p>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <code>Сила сигнала: 0-15 | Задержка: 1 tick (0.1s)</code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="GitBranch" className="mr-2 text-primary" size={24} />
                    Логические элементы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Компараторы, повторители и факелы позволяют создавать сложные логические схемы: AND, OR, NOT, XOR и другие базовые элементы цифровой логики.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Binary" className="mr-2 text-primary" size={24} />
                    Счетчики и таймеры
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Бинарные счетчики и прецизионные таймеры на основе компараторов позволяют создавать сложные временные последовательности и автоматические системы.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Cpu" className="mr-2 text-primary" size={24} />
                    Память и регистры
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    RS-триггеры, D-триггеры и многобитовые регистры для хранения состояний. Основа для создания программируемых устройств.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="innovation" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Sparkles" className="mr-2 text-primary" size={24} />
                    Наблюдатель-системы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Использование наблюдателей для создания мгновенных реакций на изменения блоков. Позволяет создавать сверхбыстрые механизмы и детекторы.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Layers" className="mr-2 text-primary" size={24} />
                    Модульная архитектура
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Разделение сложных систем на независимые модули для упрощения отладки и масштабирования проектов.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export function MachinesSection() {
  return (
    <section id="machines" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши машины</h2>
          <p className="text-xl text-muted-foreground">Готовые проекты и реализации</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 group">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/83bf07a0-f2cd-4e0a-bf5c-e37a167f43e0/files/2ce08489-34d6-443e-b5f2-de273e35b0a4.jpg" 
                alt="Автоматическая ферма"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                AUTO
              </div>
            </div>
            <CardHeader>
              <CardTitle>Автоматическая ферма</CardTitle>
              <CardDescription>Полностью автоматизированная система выращивания и сбора урожая</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Наблюдатели</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Поршни</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Воронки</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 group">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="DoorOpen" size={64} className="text-primary/40 group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                SECURE
              </div>
            </div>
            <CardHeader>
              <CardTitle>3x3 дверь с кодом</CardTitle>
              <CardDescription>Поршневая дверь с комбинационным замком</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Логика AND</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Память</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Поршни</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 group">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Pickaxe" size={64} className="text-primary/40 group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                TNT
              </div>
            </div>
            <CardHeader>
              <CardTitle>Буровая установка</CardTitle>
              <CardDescription>Автоматическая система для добычи ресурсов с TNT</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Таймеры</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Раздатчики</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Flying Machine</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 group">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Boxes" size={64} className="text-primary/40 group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                SORT
              </div>
            </div>
            <CardHeader>
              <CardTitle>Сортировщик предметов</CardTitle>
              <CardDescription>Многоканальная система сортировки с памятью</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Компараторы</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Воронки</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Фильтры</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 group">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/83bf07a0-f2cd-4e0a-bf5c-e37a167f43e0/files/ec537e21-2f9a-420b-aae2-989b11ef9e5b.jpg" 
                alt="Летающая машина"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                FLYING
              </div>
            </div>
            <CardHeader>
              <CardTitle>Летающая машина</CardTitle>
              <CardDescription>Двунаправленная flying machine с грузовым отсеком</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Наблюдатели</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Slime</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Поршни</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 group">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/83bf07a0-f2cd-4e0a-bf5c-e37a167f43e0/files/86976367-0017-4486-95e1-b167cadc8937.jpg" 
                alt="Калькулятор 8-bit"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                CALC
              </div>
            </div>
            <CardHeader>
              <CardTitle>Калькулятор 8-bit</CardTitle>
              <CardDescription>Полноценный арифметический калькулятор на редстоуне</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">ALU</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Регистры</span>
                <span className="bg-muted px-2 py-1 rounded text-xs font-mono">Дисплей</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function BlueprintsSection() {
  return (
    <section id="blueprints" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Чертежи</h2>
            <p className="text-xl text-muted-foreground">Технические схемы и инструкции</p>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">Библиотека чертежей</CardTitle>
                    <CardDescription className="mt-2">Детальные схемы всех наших проектов с пошаговыми инструкциями</CardDescription>
                  </div>
                  <Icon name="FileText" className="text-primary" size={48} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Icon name="FileCode" className="text-primary mr-2" size={20} />
                      <h4 className="font-semibold">Логические схемы</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Принципиальные схемы логических элементов и цепей</p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Icon name="Box" className="text-primary mr-2" size={20} />
                      <h4 className="font-semibold">3D модели</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Трехмерные чертежи для точной сборки</p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Icon name="ListChecks" className="text-primary mr-2" size={20} />
                      <h4 className="font-semibold">Списки материалов</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Полные спецификации необходимых ресурсов</p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Icon name="PlayCircle" className="text-primary mr-2" size={20} />
                      <h4 className="font-semibold">Видео-инструкции</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Пошаговые видеогайды по сборке</p>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Icon name="Info" className="text-primary mr-3 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Форматы чертежей</h4>
                      <p className="text-sm text-muted-foreground">
                        Все чертежи доступны в форматах: Litematica (.litematic), Schematic (.schem), World Download (.zip)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Популярные чертежи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Компактный генератор камня', size: '5x7x4', complexity: 'Легко' },
                    { name: 'Система сортировки на 27 слотов', size: '15x3x8', complexity: 'Средне' },
                    { name: 'Двунаправленная flying machine', size: '4x3x2', complexity: 'Средне' },
                    { name: 'Кодовый замок 4-digit', size: '8x6x5', complexity: 'Сложно' }
                  ].map((blueprint, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/70 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-3">
                        <Icon name="FileDown" className="text-primary group-hover:scale-110 transition-transform" size={20} />
                        <div>
                          <p className="font-medium font-mono text-sm">{blueprint.name}</p>
                          <p className="text-xs text-muted-foreground">Размер: {blueprint.size}</p>
                        </div>
                      </div>
                      <span className="text-xs bg-background px-2 py-1 rounded">{blueprint.complexity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Галерея</h2>
          <p className="text-xl text-muted-foreground">Визуальная витрина наших проектов</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer group relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Image" size={48} className="text-primary/40 group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-sm font-semibold">Проект #{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами для сотрудничества</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Отправить сообщение</CardTitle>
              <CardDescription>Мы ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Имя</label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Тема</label>
                  <Input id="subject" placeholder="О чем вы хотите поговорить?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                  <Textarea id="message" placeholder="Расскажите о вашем проекте..." rows={6} />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="MessageSquare" className="mx-auto text-primary mb-2" size={32} />
                <h4 className="font-semibold mb-1">Discord</h4>
                <p className="text-sm text-muted-foreground">redstone.engineering</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Youtube" className="mx-auto text-primary mb-2" size={32} />
                <h4 className="font-semibold mb-1">YouTube</h4>
                <p className="text-sm text-muted-foreground">@RedstoneEng</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Github" className="mx-auto text-primary mb-2" size={32} />
                <h4 className="font-semibold mb-1">GitHub</h4>
                <p className="text-sm text-muted-foreground">redstone-projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
