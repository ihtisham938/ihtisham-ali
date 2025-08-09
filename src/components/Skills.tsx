import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { useState, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Skills() {
  const { theme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Advanced scroll animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const getGradientColors = (colorClass: string) => {
    const colorMap: { [key: string]: string } = {
      'from-purple-600 via-purple-700 to-indigo-800': '#9333ea, #7c3aed, #3730a3',
      'from-blue-600 via-blue-700 to-blue-900': '#2563eb, #1d4ed8, #1e3a8a',
      'from-emerald-600 via-green-700 to-teal-800': '#059669, #15803d, #115e59',
      'from-red-600 via-red-700 to-rose-800': '#dc2626, #b91c1c, #9f1239',
      'from-cyan-500 via-blue-600 to-blue-700': '#06b6d4, #2563eb, #1d4ed8',
      'from-gray-800 via-gray-900 to-black': '#1f2937, #111827, #000000',
      'from-blue-500 via-indigo-600 to-purple-700': '#3b82f6, #4f46e5, #7c3aed',
      'from-orange-500 via-amber-600 to-yellow-700': '#f97316, #d97706, #a16207',
      'from-teal-500 via-cyan-600 to-blue-600': '#14b8a6, #0891b2, #2563eb',
      'from-pink-600 via-rose-700 to-red-700': '#db2777, #be185d, #b91c1c',
      'from-indigo-600 via-blue-700 to-purple-800': '#4f46e5, #1d4ed8, #6b21a8',
      'from-blue-500 via-cyan-600 to-teal-700': '#3b82f6, #0891b2, #0f766e'
    };
    return colorMap[colorClass] || '#9333ea, #7c3aed, #3730a3';
  };

  return (
    <motion.section 
      id="skills" 
      ref={ref}
      className={`w-full py-8 px-8 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      {/* Dynamic background elements */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
          theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
          theme === 'dark' ? 'bg-purple-400' : 'bg-purple-500'
        }`}></div>
        <div className={`absolute top-1/2 right-1/3 w-48 h-48 rounded-full blur-2xl opacity-5 ${
          theme === 'dark' ? 'bg-pink-400' : 'bg-pink-500'
        }`}></div>
      </motion.div>
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 relative z-10"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          style={{ y: headerY }}
        >
          <motion.div 
            className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-6 transition-colors duration-500 ${
              theme === 'dark' 
                ? 'bg-cyan-900/30 text-cyan-300'
                : 'bg-cyan-100 text-cyan-700'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            🚀 Skills & Technologies
          </motion.div>
          
          <motion.h2 
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight text-center transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Tech
            <motion.span 
              className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block"
              style={{ backgroundSize: '300% 300%' }}
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Stack
            </motion.span>
          </motion.h2>
          
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, staggerChildren: 0.15 }}
          style={{ y: gridY }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut"
                }
              } : {}}
              whileHover={{ 
                scale: 1.08, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <div 
                className="relative p-6 sm:p-8 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${getGradientColors(skill.color || 'from-purple-600 to-purple-800')})`,
                  boxShadow: hoveredSkill === skill.name 
                    ? `0 25px 50px -12px ${skill.glowColor || 'rgba(147, 51, 234, 0.4)'}, 0 0 30px ${skill.glowColor || 'rgba(147, 51, 234, 0.3)'}` 
                    : undefined
                }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className="text-3xl sm:text-4xl mb-4 transform transition-transform duration-300"
                    animate={hoveredSkill === skill.name ? {
                      scale: 1.1,
                      rotate: 10
                    } : {}}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg leading-tight drop-shadow-lg">
                    {skill.name}
                  </h3>
                  
                  {/* Skill Level Indicator */}
                  <motion.div 
                    className="mt-3 w-full bg-white/20 rounded-full h-1 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="h-full bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredSkill === skill.name ? `${skill.level || 85}%` : 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}