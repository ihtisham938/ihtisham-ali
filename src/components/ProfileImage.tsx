import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-64 h-64',
  md: 'w-80 h-80',
  lg: 'w-96 h-96',
  xl: 'w-[28rem] h-[28rem]'
};

export default function ProfileImage({ 
  src, 
  alt = "Profile photo", 
  size = 'md',
  className = '' 
}: ProfileImageProps) {
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl blur-xl opacity-20 scale-110"></div>
      
      <motion.div 
        className="relative w-full h-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 rounded-3xl shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.02, rotate: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
        
        {src ? (
          // Actual image
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
              priority
            />
            {/* Subtle overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        ) : (
          // Professional placeholder
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-lg sm:text-xl font-semibold text-slate-700">Add Your Photo</p>
            <p className="text-sm sm:text-base text-slate-500 mt-1">Professional headshot</p>
          </div>
        )}
      </motion.div>
    </div>
  );
} 