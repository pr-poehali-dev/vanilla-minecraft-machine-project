import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2">
          <Icon name="Cpu" className="text-primary" size={32} />
          <span className="text-xl font-bold">Redstone Engineering</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('home')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}>
            Главная
          </button>
          <button onClick={() => scrollToSection('technology')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'technology' ? 'text-primary' : 'text-muted-foreground'}`}>
            Технология
          </button>
          <button onClick={() => scrollToSection('machines')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'machines' ? 'text-primary' : 'text-muted-foreground'}`}>
            Машины
          </button>
          <button onClick={() => scrollToSection('blueprints')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'blueprints' ? 'text-primary' : 'text-muted-foreground'}`}>
            Чертежи
          </button>
          <button onClick={() => scrollToSection('gallery')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'gallery' ? 'text-primary' : 'text-muted-foreground'}`}>
            Галерея
          </button>
          <button onClick={() => scrollToSection('contacts')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}>
            Контакты
          </button>
        </div>

        <Button onClick={() => scrollToSection('contacts')} className="hidden md:inline-flex">
          Связаться
        </Button>
      </nav>
    </header>
  );
}
