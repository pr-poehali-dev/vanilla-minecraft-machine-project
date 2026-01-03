import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Icon name="Cpu" className="text-primary" size={24} />
            <span className="font-bold">Redstone Engineering</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Redstone Engineering. Vanilla Minecraft Projects.
          </p>
        </div>
      </div>
    </footer>
  );
}
