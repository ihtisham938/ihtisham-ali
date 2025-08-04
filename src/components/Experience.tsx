import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';
import { useTheme } from '@/contexts/ThemeContext';

export default function Experience() {
  const { theme } = useTheme();
  
  return (
    <section id="experience" className={`w-full py-8 px-8 transition-colors duration-500 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="w-full max-w-6xl mx-auto">
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
                ? 'bg-pink-900/30 text-pink-300'
                : 'bg-pink-100 text-pink-700'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            💼 Professional Journey
          </motion.div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight text-center transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Work
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
              Experience
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions and delivering exceptional results
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12 border border-slate-100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group">
                {/* Timeline dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <h4 className="text-lg sm:text-xl text-purple-600 font-semibold mt-2">
                          {experience.company}
                        </h4>
                      </div>
                      <div className="flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-slate-700 font-medium text-sm">{experience.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}