import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className={`w-full min-h-screen transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-slate-900' 
        : 'bg-slate-50'
    }`}>
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}