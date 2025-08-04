import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { theme } = useTheme();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitMessage("Thank you! I'll get back to you soon.");
    reset();
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 3000);
  };

  return (
    <section id="contact" className={`w-full py-8 px-8 transition-colors duration-500 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-100'
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
            className={`inline-flex items-center px-6 py-3 backdrop-blur-sm border rounded-full text-sm font-medium mb-6 transition-colors duration-500 ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20 text-white/80'
                : 'bg-gray-800/10 border-gray-600/30 text-gray-800'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            📨 Get In Touch
          </motion.div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight text-center transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Let&apos;s
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block">
              Connect
            </span>
          </h2>
          
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Ready to bring your next project to life? Let&apos;s discuss how we can work together.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-6 py-4 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/60'
                        : 'bg-gray-800/5 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-6 py-4 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/60'
                        : 'bg-gray-800/5 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>}
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className={`w-full px-6 py-4 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/20 text-white placeholder-white/60'
                      : 'bg-gray-800/5 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
                {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>}
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'hover:shadow-2xl hover:shadow-purple-500/25'
                    : 'hover:shadow-2xl hover:shadow-purple-500/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center transition-colors duration-500 ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`}
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="lg:w-80"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.div
                className={`p-6 backdrop-blur-sm rounded-2xl border transition-colors duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-gray-800/5 border-gray-300/20'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl">
                    📧
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg mb-2 transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Email</h3>
                    <p className={`transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                    }`}>your.email@example.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`p-6 backdrop-blur-sm rounded-2xl border transition-colors duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-gray-800/5 border-gray-300/20'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl">
                    💼
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg mb-2 transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>LinkedIn</h3>
                    <p className={`transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                    }`}>Connect with me</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`p-6 backdrop-blur-sm rounded-2xl border transition-colors duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-gray-800/5 border-gray-300/20'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg mb-2 transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>GitHub</h3>
                    <p className={`transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                    }`}>View my projects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}