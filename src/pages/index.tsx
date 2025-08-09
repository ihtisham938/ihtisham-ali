import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth loading animation
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div 
      className={`relative w-full min-h-screen transition-colors duration-500 scroll-smooth ${
        theme === 'dark' 
          ? 'bg-slate-900' 
          : 'bg-slate-50'
      }`}
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 origin-left"
        style={{ scaleX }}
      />
      
      {/* Floating scroll indicator */}
      <motion.div 
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className={`w-1 h-32 rounded-full overflow-hidden ${
          theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
        }`}>
          <motion.div 
            className="w-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full origin-top"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      </motion.div>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className={`absolute top-20 right-20 w-2 h-2 rounded-full ${
            theme === 'dark' ? 'bg-cyan-400/20' : 'bg-cyan-600/20'
          }`}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={`absolute bottom-40 left-20 w-3 h-3 rounded-full ${
            theme === 'dark' ? 'bg-purple-400/20' : 'bg-purple-600/20'
          }`}
          animate={{
            y: [0, 150, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </motion.div>
  );
}