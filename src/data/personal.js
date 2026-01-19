/**
 * Personal information and profile data
 */

export const personal = {
  // Basic Info
  name: 'Hemanth',
  fullName: 'Hemanth',
  title: 'Full Stack Developer (MERN + Python)',
  location: 'India',
  
  // Bio & Description
  tagline: 'Building scalable applications with MERN stack & Python data systems',
  bio: 'Full Stack Developer skilled in MERN stack and Python. I create production-ready web applications, data pipelines, and analytics systems with clean architecture and performance focus. MCA student building enterprise projects across web development and data engineering.',
  
  description: 'Passionate about building full-stack web applications with MERN and Python-powered backend systems. I combine frontend expertise with robust API development, data processing pipelines, and analytics solutions. My work delivers scalable, maintainable code for both web platforms and data-intensive applications.',
  
  // Current Status
  availability: {
    status: 'available', // available | busy | unavailable
    message: 'Available for Full Stack, Python Developer, and Data Analyst roles',
    updatedAt: '2026-01-11',
  },
  
  // Professional Stats
  stats: [
    {
      label: 'Experience',
      value: '6M+',
      description: 'Full Stack & Python Projects',
      icon: 'Briefcase',
    },
    {
      label: 'Projects',
      value: '10+',
      description: 'MERN + Python Applications',
      icon: 'Code2',
    },
    {
      label: 'Technologies',
      value: '20+',
      description: 'Web + Data Engineering',
      icon: 'Layers',
    },
    {
      label: 'Open Source',
      value: '100%',
      description: 'Public Repositories',
      icon: 'Github',
    },
  ],

  
  // Contact Information
  contact: {
    email: 'hemanths7.dev@gmail.com',
    phone: null,
    location: 'India',
  },
  
  // Social Profiles
  social: {
    github: {
      username: 'hemanthscode',
      url: 'https://github.com/hemanthscode',
    },
    linkedin: {
      username: 'hemanthcodes',
      url: 'https://linkedin.com/in/hemanthcodes',
    },
    twitter: {
      username: 'hemanthscode',
      url: 'https://twitter.com/hemanthscode',
    },
  },
  
  // Resume
  resume: {
    url: '/resume.pdf',
    lastUpdated: '2026-01-11',
  },
  
  // Education Timeline (ENHANCED with timeline data)
  education: [
    {
      id: 'mca',
      degree: 'Master of Computer Applications (MCA)',
      shortDegree: 'MCA',
      institution: 'Andhra University',
      location: 'Visakhapatnam, India',
      year: '2024 - 2026',
      period: 'Ongoing',
      startDate: '2024',
      endDate: '2026',
      status: 'ONGOING',
      mode: 'Online',
      type: 'education',
      description: 'Advanced studies in full stack development, Python data engineering, system design, and analytics.',
      story: 'Deepening expertise in MERN stack applications alongside Python for data processing, APIs, and analytics systems. Building production-grade projects that combine web development with data engineering.',
      achievements: [
        'Full Stack Development (MERN)',
        'Python Data Engineering & Analytics',
        'Microservices & System Design',
      ],
      learnings: [
        'MERN stack enterprise applications',
        'Python FastAPI & data pipelines',
        'Microservices & API architecture',
        'Database optimization & analytics',
      ],
      keyTakeaway: 'Mastering both web development and data systems for versatile full stack solutions',
    },
    {
      id: 'bsc',
      degree: 'Bachelor of Science in Computer Science',
      shortDegree: 'BSc CS',
      institution: 'Vignan Degree and PG College',
      location: 'Affiliated to Acharya Nagarjuna University',
      year: '2018 - 2021',
      period: '3 years',
      startDate: '2018',
      endDate: '2021',
      status: 'COMPLETED',
      mode: 'Regular',
      type: 'education',
      description: 'Foundation in programming, data structures, databases, and software development across multiple languages.',
      story: 'Built strong fundamentals in programming with C, Java, Python, and database systems. Developed problem-solving skills essential for both web development and data analysis.',
      achievements: [
        'Data Structures & Algorithms mastery',
        'Multi-language programming (C, Java, Python)',
        'Database design & SQL proficiency',
      ],
      learnings: [
        'Mastered core programming concepts',
        'Built DSA foundation for interviews',
        'Database design & query optimization',
        'Analytical problem-solving skills',
      ],
      keyTakeaway: 'Strong fundamentals enable versatile development across web and data domains',
    },
  ],
  
  // Professional Experience (ENHANCED with timeline data)
  experience: [
    {
      id: 'unified-mentor',
      role: 'Full Stack Developer Intern',
      company: 'Unified Mentor',
      companyType: 'EdTech / Training Platform',
      location: 'Remote, India',
      period: 'Jun 2025 - Dec 2025',
      year: 'Jun 2025 - Dec 2025',
      duration: '6 months',
      startDate: '2025-06',
      endDate: '2025-12',
      status: 'COMPLETED',
      type: 'experience',
      description: 'Developed full-stack MERN applications and Python backend services with microservices architecture for production platforms.',
      story: 'Professional experience building MERN web applications alongside Python APIs and data processing systems. Delivered production features used by real users across web and data layers.',
      responsibilities: [
        'Built MERN stack web applications',
        'Developed Python FastAPI services',
        'Implemented REST APIs with JWT auth',
        'Created responsive React UIs',
        'Database design & optimization',
      ],
      technologies: [
        'React', 'Node.js', 'Express', 'MongoDB',
        'Python', 'FastAPI', 'PostgreSQL',
        'Tailwind CSS', 'Git', 'Docker',
      ],
      achievements: [
        'Delivered 5+ production MERN apps',
        'Built Python data processing pipelines',
        'Implemented enterprise auth systems',
      ],
      learnings: [
        'Full stack MERN + Python architecture',
        'Microservices & API development',
        'Production deployment workflows',
        'Database optimization techniques',
      ],
      keyTakeaway: 'Real projects taught production-ready full stack + data engineering skills',
    },
  ],
  
  // Interests & Hobbies
  interests: [
    'Full-Stack Development (MERN)',
    'Python Data Engineering',
    'System Design & Microservices',
    'Data Analytics & APIs',
    'Open Source Contributions',
    'Crime Mystery Series',
  ],
  
  // Work Preferences
  workPreferences: {
    roles: [
      'Full Stack Developer',
      'MERN Stack Developer',
      'Python Developer',
      'Backend Developer',
      'Data Analyst',
      'Full Stack Engineer',
    ],
    workType: ['Remote', 'Hybrid', 'On-site'],
    availability: 'Immediate',
  },
};

export default personal;
