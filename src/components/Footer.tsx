import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`w-full py-4 px-4 transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-slate-900 text-white'
        : 'bg-gray-800 text-gray-100'
    }`}>
      <div className="w-full max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className={`border-t pt-3 mt-3 transition-colors duration-500 ${
            theme === 'dark' ? 'border-slate-800' : 'border-gray-700'
          }`}>
            <div className="space-y-3 p-3">
              <p className={`text-base sm:text-lg px-2 py-1 transition-colors duration-500 ${
                theme === 'dark' ? 'text-slate-400' : 'text-gray-300'
              }`}>
                © 2024 Ihtisham Ali. Crafted with ❤️ using Next.js & Tailwind CSS.
              </p>
              <p className={`text-sm sm:text-base px-2 py-1 transition-colors duration-500 ${
                theme === 'dark' ? 'text-slate-500' : 'text-gray-400'
              }`}>
                Designed for impact, built for performance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}