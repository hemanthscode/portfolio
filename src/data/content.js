/**
 * Content data for sections
 * Centralized content for About, Contact, Experience sections
 */

// ============================================
// ABOUT SECTION CONTENT
// ============================================

export const ABOUT_CONTENT = {
  header: {
    title: 'The Developer Behind the Code',
    tagline: 'Building scalable web apps with MERN + Python data systems',
  },

  story: {
    title: 'Who I Am',
    paragraphs: [
      `Full Stack Developer skilled in MERN stack and Python development. Gained hands-on experience through internship at Unified Mentor building production web applications and data systems. BSc Computer Science graduate currently pursuing MCA (2026). I create scalable solutions combining frontend expertise with robust backend and data engineering.`,
      
      `My approach blends web development with Python-powered APIs, data processing, and analytics. From microservices architecture to responsive UIs and data pipelines, I focus on clean, maintainable code that scales. Continuous learning drives me to master both full-stack web development and modern data engineering practices.`,
      
      `I thrive on solving complex problems across the stack—whether architecting MERN applications, building Python FastAPI services, optimizing databases, or crafting intuitive user experiences. Late-night debugging, framework exploration, and production deployments fuel my passion for impactful software.`,
    ],
  },

  focusAreas: [
    {
      icon: 'Layers',
      iconColor: 'text-blue-400',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20',
      title: 'Full-Stack Development',
      description: 'Complete web applications from UI to database using MERN stack + Python backend services.',
      tech: ['React', 'Node.js', 'Python', 'MongoDB', 'FastAPI'],
    },
    {
      icon: 'Zap',
      iconColor: 'text-purple-400',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20',
      title: 'API & Data Systems',
      description: 'RESTful APIs, microservices, data pipelines, and real-time features with modern authentication.',
      tech: ['REST API', 'FastAPI', 'WebSockets', 'JWT', 'PostgreSQL'],
    },
    {
      icon: 'Sparkles',
      iconColor: 'text-green-400',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/20',
      title: 'Modern UI/UX + Analytics',
      description: 'Responsive interfaces with Tailwind CSS + data visualization and analytics dashboards.',
      tech: ['Tailwind CSS', 'Charts.js', 'Responsive', 'Analytics'],
    },
  ],

  workApproach: [
    {
      icon: 'Target',
      title: 'Problem-First Mindset',
      description: 'Deep problem analysis before coding. Solutions optimized for both web scale and data volume.',
    },
    {
      icon: 'Code2',
      title: 'Clean Code Advocate',
      description: 'Maintainable code across MERN apps, Python services, and data pipelines. Readability first.',
    },
    {
      icon: 'Rocket',
      title: 'Production-Ready Focus',
      description: 'Full stack from testing to deployment. Web apps and data systems ready for real users.',
    },
    {
      icon: 'Users',
      title: 'Collaborative Spirit',
      description: 'Team player experienced with Git workflows, code reviews, and cross-functional collaboration.',
    },
  ],

  interests: [
    { icon: 'Layers', label: 'System Design', color: 'text-blue-400' },
    { icon: 'Database', label: 'Data Engineering', color: 'text-green-400' },
    { icon: 'Code2', label: 'Python Development', color: 'text-orange-400' },
    { icon: 'Rss', label: 'Tech Blogs', color: 'text-yellow-400' },
    { icon: 'Headphones', label: 'Podcasts & Music', color: 'text-pink-400' },
    { icon: 'Github', label: 'Open Source', color: 'text-purple-400' },
    { icon: 'Sparkles', label: 'AI & Analytics', color: 'text-cyan-400' },
    { icon: 'Brain', label: 'Data Structures', color: 'text-amber-400' },
  ],

  interestsClosing: `I stay sharp through tech podcasts, Python/data engineering blogs, and developer communities. Music powers my deep work sessions while crime thrillers sharpen my analytical thinking. I'm excited about AI/ML integration in web apps and data systems. The best developers master both frontend craft and backend/data engineering—I'm building that versatility.`,
};

// ============================================
// CONTACT SECTION CONTENT
// ============================================

export const CONTACT_CONTENT = {
  header: {
    title: "Let's Build Something Great Together",
    description: "Need full-stack development, Python data systems, or API expertise? Available for freelance projects, full-time roles, or tech discussions. Let's create scalable solutions.",
  },

  availability: {
    responseTime: 'Within 24 hours',
    timezone: 'IST (UTC+5:30)',
    preferredHours: 'Mon-Fri, 9 AM - 6 PM',
  },
};

// ============================================
// EXPERIENCE SECTION CONTENT
// ============================================

export const EXPERIENCE_CONTENT = {
  header: {
    title: 'My Journey',
    subtitle: 'From Foundations to Full Stack + Data Engineering',
    description: `Started with computer science fundamentals, evolved through internship building production MERN applications and Python services. Now combining web development expertise with data engineering to create comprehensive solutions. This journey reflects growth from theory to scalable, real-world systems.`,
  },

  // Timeline will be generated from personal.education + personal.experience
  // But we add meta info here
  timeline: {
    education: {
      phase: 'Academic Foundation',
      icon: 'BookOpen',
      iconColor: 'text-blue-400',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
    },
    experience: {
      phase: 'Production Experience',
      icon: 'Code2',
      iconColor: 'text-green-400',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30',
    },
    advancedEducation: {
      phase: 'Advanced Specialization',
      icon: 'GraduationCap',
      iconColor: 'text-purple-400',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
    },
  },

  progressOverview: [
    {
      icon: 'GraduationCap',
      label: 'BSc Computer Science',
      duration: '2018-2021',
      bgGradient: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: 'Briefcase',
      label: 'Full Stack Internship',
      duration: '6 Months',
      bgGradient: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-500/30',
    },
    {
      icon: 'BookOpen',
      label: 'MCA (MERN + Python)',
      duration: '2024-2026',
      bgGradient: 'from-green-500/10 to-emerald-600/10',
      borderColor: 'border-green-500/30',
      highlight: true,
    },
  ],

  currentStatus: {
    title: 'Building the Future',
    description: `Currently shipping MERN applications, Python APIs, and data systems while completing MCA. Open to full-stack, Python developer, and data roles. Every project teaches new dimensions of scalable software engineering.`,
  },
};

// ============================================
// FOOTER CONTENT
// ============================================

export const FOOTER_CONTENT = {
  services: [
    'Full Stack Development',
    'MERN Stack Applications',
    'Python Backend Services',
    'API Development',
    'Data Engineering',
    'UI/UX Implementation',
    'Database Optimization',
    'Technical Consultation',
  ],

  copyright: {
    text: 'All rights reserved.',
    builtWith: 'Built with React, Tailwind CSS & Python',
  },
};

// Export all
export default {
  ABOUT_CONTENT,
  CONTACT_CONTENT,
  EXPERIENCE_CONTENT,
  FOOTER_CONTENT,
};
