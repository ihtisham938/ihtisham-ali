import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useRef } from 'react';

export default function About() {
  const { theme } = useTheme();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Scroll-based parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  
  return (
    <motion.section 
      id="about" 
      ref={ref}
      className={`w-full py-8 px-8 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-white'
      }`}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-300'
        }`}></div>
      </motion.div>
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-6 transition-colors duration-500 ${
              theme === 'dark' 
                ? 'bg-purple-900/30 text-purple-300'
                : 'bg-purple-100 text-purple-700'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            👋 About Me
          </motion.div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight text-center transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Passionate
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Developer
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-24 relative z-10">
          <motion.div 
            className="flex justify-center lg:flex-1"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ y: imageY }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-20"></div>
              <motion.div 
                className={`relative w-full h-full rounded-3xl shadow-2xl overflow-hidden transition-colors duration-500 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700'
                    : 'bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200'
                }`}
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src="/Picture.png" 
                  alt="Ihtisham Ali" 
                  className="w-full h-full object-cover rounded-3xl"
                  style={{ objectPosition: 'center -3rem' }}
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-10 max-w-2xl"
            initial={{ opacity: 0, x: 100, y: 50 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            style={{ y: contentY }}
          >
              <div className={`space-y-8 text-lg sm:text-xl leading-relaxed transition-colors duration-500 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <p>
                  I&apos;m a passionate full stack developer with expertise in <span className={`font-semibold transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>.NET</span> and 
                  modern <span className={`font-semibold transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>JavaScript frameworks</span>. I deliver high-performance, 
                  scalable, and secure applications that make a difference.
                </p>
                
                <p>
                  Currently working full-time at a software house, I&apos;m also available for 
                  <span className={`font-semibold transition-colors duration-500 ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`}> freelance projects</span> and exciting collaborations.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {[
                  { icon: '🎯', text: 'Problem Solver' },
                  { icon: '⚡', text: 'Fast Learner' },
                  { icon: '🤝', text: 'Team Player' }
                ].map((item) => (
                  <div key={item.text} className={`flex items-center space-x-3 px-5 py-3 rounded-full transition-colors duration-500 ${
                    theme === 'dark' 
                      ? 'bg-slate-700 text-slate-200'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}