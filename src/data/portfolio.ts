export const skills = [
  { 
    name: '.NET Core', 
    icon: '🔷', 
    color: 'from-purple-600 via-purple-700 to-indigo-800', 
    glowColor: 'rgba(147, 51, 234, 0.5)',
    level: 90
  },
  { 
    name: 'C#', 
    icon: '💎', 
    color: 'from-blue-600 via-blue-700 to-blue-900', 
    glowColor: 'rgba(59, 130, 246, 0.5)',
    level: 95
  },
  { 
    name: 'Entity Framework', 
    icon: '🔗', 
    color: 'from-emerald-600 via-green-700 to-teal-800', 
    glowColor: 'rgba(16, 185, 129, 0.5)',
    level: 85
  },
  { 
    name: 'SQL Server', 
    icon: '🗃️', 
    color: 'from-red-600 via-red-700 to-rose-800', 
    glowColor: 'rgba(239, 68, 68, 0.5)',
    level: 88
  },
  { 
    name: 'React', 
    icon: '⚛️', 
    color: 'from-cyan-500 via-blue-600 to-blue-700', 
    glowColor: 'rgba(6, 182, 212, 0.5)',
    level: 92
  },
  { 
    name: 'Next.js', 
    icon: '⚡', 
    color: 'from-gray-800 via-gray-900 to-black', 
    glowColor: 'rgba(75, 85, 99, 0.5)',
    level: 87
  },
  { 
    name: 'TypeScript', 
    icon: '🔧', 
    color: 'from-blue-500 via-indigo-600 to-purple-700', 
    glowColor: 'rgba(99, 102, 241, 0.5)',
    level: 86
  },
  { 
    name: 'REST APIs', 
    icon: '🌐', 
    color: 'from-orange-500 via-amber-600 to-yellow-700', 
    glowColor: 'rgba(245, 158, 11, 0.5)',
    level: 90
  },
  { 
    name: 'Tailwind CSS', 
    icon: '🎨', 
    color: 'from-teal-500 via-cyan-600 to-blue-600', 
    glowColor: 'rgba(20, 184, 166, 0.5)',
    level: 93
  },
  { 
    name: 'Git/GitHub', 
    icon: '📋', 
    color: 'from-pink-600 via-rose-700 to-red-700', 
    glowColor: 'rgba(236, 72, 153, 0.5)',
    level: 89
  },
  { 
    name: 'Azure', 
    icon: '☁️', 
    color: 'from-indigo-600 via-blue-700 to-purple-800', 
    glowColor: 'rgba(99, 102, 241, 0.5)',
    level: 80
  },
  { 
    name: 'Docker', 
    icon: '🐳', 
    color: 'from-blue-500 via-cyan-600 to-teal-700', 
    glowColor: 'rgba(6, 182, 212, 0.5)',
    level: 75
  }
];

export const experiences = [
  {
    title: 'Software Engineer',
    company: 'Meraki IT',
    period: '2022 - Present',
    description: 'Building and maintaining enterprise-level applications. Designing REST APIs with .NET Core. Integrating frontends using React and Next.js.',
    technologies: ['.NET Core', 'React', 'SQL Server', 'Azure']
  }
];

export const fadeInUp = {
  initial: { opacity: 0, y: 80, rotateX: 45 },
  animate: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};