import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2 mb-4">
            <Icon name="Zap" className="text-primary" size={16} />
            <span className="text-sm font-mono text-muted-foreground">Vanilla Minecraft Engineering</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Машиностроение в <span className="text-primary">Minecraft</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Передовые редстоун-технологии и инновационные механизмы без использования модов
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg" onClick={() => scrollToSection('machines')} className="text-lg px-8">
              <Icon name="Boxes" className="mr-2" size={20} />
              Наши машины
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('technology')}>
              <Icon name="BookOpen" className="mr-2" size={20} />
              Технологии
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-scale-in">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Icon name="Lightbulb" className="text-primary" size={24} />
              </div>
              <CardTitle>Инновации</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Разработка уникальных механизмов и систем на основе редстоун-логики</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-scale-in [animation-delay:100ms]">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Icon name="Cog" className="text-primary" size={24} />
              </div>
              <CardTitle>Редстоун-механика</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Глубокое понимание и применение всех аспектов редстоун-схемотехники</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-scale-in [animation-delay:200ms]">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Icon name="Sparkles" className="text-primary" size={24} />
              </div>
              <CardTitle>Vanilla проекты</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Все машины работают в стандартном Minecraft без модификаций</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
