import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Ihtisham';
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const typeTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeTimer);
      }
    }, 150);

    return () => clearInterval(typeTimer);
  }, []);

  // Cursor blinking
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
      {/* Interactive Background with animated gradient */}
      <div className="absolute inset-0 w-full h-full">
        <div className={`absolute inset-0 transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
        }`}></div>
        <div 
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: theme === 'dark' 
              ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, transparent 50%)`
              : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 25%, transparent 50%)`
          }}
        ></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full particle-glow ${
              theme === 'dark' ? 'bg-white/20' : 'bg-purple-400/30'
            }`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl ${
            theme === 'dark' 
              ? 'bg-purple-500 opacity-20' 
              : 'bg-purple-300 opacity-10'
          }`}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl ${
            theme === 'dark' 
              ? 'bg-cyan-500 opacity-20' 
              : 'bg-cyan-300 opacity-10'
          }`}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
      >
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className={`inline-flex items-center px-6 py-3 backdrop-blur-sm border rounded-full text-sm font-medium ${
            theme === 'dark'
              ? 'bg-white/10 border-white/20 text-white/80'
              : 'bg-black/5 border-black/10 text-gray-700'
          }`}>
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            Available for freelance work
          </div>
        </motion.div>

        <motion.h1 
          className={`text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-10 leading-tight text-center transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I&apos;m{' '}
          <motion.span 
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block sm:inline relative name-effect-3 transition-all duration-500"
            whileHover={{
              scale: 1.02,
              rotateY: 5
            }}
            transition={{ duration: 0.3 }}
            style={{
              filter: "drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))",
              transformStyle: "preserve-3d"
            }}
          >
            {displayText}
            {showCursor && displayText.length < fullText.length && (
              <span className="animate-pulse text-purple-400">|</span>
            )}
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          className={`text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center transition-colors duration-500 ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-800'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Full Stack Developer
        </motion.h2>
        
        <motion.p 
          className={`text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-center px-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Crafting exceptional digital experiences with{' '}
          <span className="text-purple-400 font-semibold">.NET</span>,{' '}
          <span className="text-cyan-400 font-semibold">React</span> &{' '}
          <span className="text-pink-400 font-semibold">Next.js</span>
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl text-lg overflow-hidden transition-all duration-300 ${
              theme === 'dark' 
                ? 'hover:shadow-2xl hover:shadow-purple-500/25'
                : 'hover:shadow-2xl hover:shadow-purple-500/40'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Work Together
          </motion.button>
          
          <motion.button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-10 py-4 border-2 font-semibold rounded-xl text-lg backdrop-blur-sm transition-all duration-300 ${
              theme === 'dark'
                ? 'border-white/30 text-white hover:bg-white/10'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}