import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { TechnologySection, MachinesSection, BlueprintsSection, GallerySection, ContactsSection } from '@/components/SectionsGroup';
import Footer from '@/components/Footer';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <TechnologySection />
      <MachinesSection />
      <BlueprintsSection />
      <GallerySection />
      <ContactsSection />
      <Footer />
    </div>
  );
}
