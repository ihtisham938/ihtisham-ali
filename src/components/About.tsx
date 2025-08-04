import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export default function About() {
  const { theme } = useTheme();
  
  return (
    <section id="about" className={`w-full py-8 px-8 transition-colors duration-500 ${
      theme === 'dark' ? 'bg-slate-800' : 'bg-white'
    }`}>
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

        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-24">
          <motion.div 
            className="flex justify-center lg:flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
    </section>
  );
}