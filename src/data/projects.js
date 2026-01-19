/**
 * Portfolio projects data
 * Organized by category with status constants
 */

export const projects = [
  {
  id: 'penthread',
  title: 'PenThread - Full-Stack Blog Platform',
  slug: 'penthread',
  category: 'Full-Stack',
  status: 'COMPLETED',
  featured: false,

  // Short description for cards
  tagline: 'Responsive blog platform with roles, posts, comments, and analytics',

  // Full description for project page
  description: 'PenThread is a modern full-stack blogging platform featuring user roles (User/Author/Admin), rich post creation with categories & tags, nested comments with moderation, interaction tracking, and analytics dashboards. Built with React (frontend) and Node.js/Express (backend) with a MongoDB database. It delivers a scalable content creation and consumption experience. Built using MERN architecture.',

  // Extended details
  challenge: 'Design and implement a production-style full-stack platform supporting authentication, content CRUD, real-time interactions, and analytics.',

  solution: 'Established a solid REST API in Express with JWT auth, a dynamic React frontend with Zustand state management, and integrated Mongoose models for posts, comments, users, and interactions.',

  outcome: 'Delivered a complete blog platform with role-based dashboards, social features (likes/favorites), and responsive UI demonstrating full-stack proficiency.',

  // Technical details
  tech: [
    'React',
    'Vite',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Zustand',
    'Axios',
  ],

  // Links
  liveLink: 'https://penthread.vercel.app/',
  codeLink: 'https://github.com/hemanthscode/penthread',

  // Media
  image: '/assets/penthread.png',
  images: [
    '/assets/penthread.png',
  ],

  // Features
  features: [
    'Role-based authentication (JWT)',
    'Rich post editor with categories & tags',
    'Nested comment system with moderation',
    'Analytics dashboards for users/authors/admins',
    'Interaction tracking (likes, favorites, views)',
    'Responsive UI and dark mode support',
  ],

  // Metadata
  year: '2025',
  duration: 'Varied',
  role: 'Full-Stack Developer',

  // Metrics (optional)
  metrics: {
    lines: 'N/A',
    files: 'Multiple (frontend + backend)',
    size: 'N/A',
  },
},
{
  id: 'connexus',
  title: 'Connexus - Real-Time Chat Platform',
  slug: 'connexus',
  category: 'Full-Stack',
  status: 'COMPLETED',
  featured: false,

  // Short description for cards
  tagline: 'Real-time chat application with instant messaging and sleek UI',

  // Full description for project page
  description: 'Connexus is a dynamic real-time chat platform that enables users to exchange messages instantly within a responsive web interface. The project demonstrates real-time communication features, front-end UI design, and backend support for socket-based messaging.',

  // Extended details
  challenge: 'Build a seamless real-time messaging experience with responsive design and efficient message delivery.',

  solution: 'Implemented real-time communication logic (e.g., sockets), frontend client UI, and backend event handling for message routing.',

  outcome: 'Delivered a user-friendly chat platform showcasing real-time updates and modern web app interactions.',

  // Technical details
  tech: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Node.js',
    'WebSockets or Socket.IO',
    'Responsive Design',
  ],

  // Links
  liveLink: 'https://connexus-ruddy.vercel.app/',
  codeLink: 'https://github.com/hemanthscode/connexus',

  // Media
  image: '/assets/connexus.png',
  images: [
    '/assets/connexus.png',
  ],

  // Features
  features: [
    'Real-time messaging',
    'Responsive UI',
    'Instant chat updates',
    'Frontend + backend integration',
    'Cross-device support',
  ],

  // Metadata
  year: '2025',
  duration: 'Varied',
  role: 'Full-Stack Developer',

  // Metrics (optional)
  metrics: {
    lines: 'N/A',
    files: 'Multiple (client + server)',
    size: 'N/A',
  },
},
{
  id: 'nutriflow',
  title: 'NutriFlow – Clinical Nutrition & Enteral Feeding Calculator',
  slug: 'nutriflow',
  category: 'Frontend',
  status: 'COMPLETED',
  featured: false,

  // Short description for cards
  tagline: 'Clinical nutrition calculator automating IBW, REE, and enteral feed prescriptions',

  // Full description for project page
  description: 'NutriFlow is a front-end web application that automates clinical nutrition calculations including Ideal Body Weight (IBW), Resting Energy Expenditure (REE), and enteral feeding prescriptions using validated clinical formulas. It emphasizes accuracy, clean UI logic, and responsive interactions without backend dependencies.',

  // Extended details
  challenge: 'Create an accurate, clinical-grade calculator for nutrition professionals and learners that handles multiple validated formulas and presents results intuitively.',

  solution: 'Structured the application into modular calculation logic (IBW, REE, protein, and dilution calculators), a nutrition product database, and clear UI components to render results dynamically.',

  outcome: 'Delivered a polished nutrition calculation tool demonstrating advanced JavaScript logic and responsive layout design.',

  // Technical details
  tech: [
    'HTML5',
    'CSS3',
    'Vanilla JavaScript',
    'Responsive Design',
  ],

  // Links
  liveLink: 'https://hemanthscode.github.io/nutriflow/',
  codeLink: 'https://github.com/hemanthscode/nutriflow',

  // Media
  image: '/assets/nutriflow.png',
  images: [
    '/assets/nutriflow.png',
  ],

  // Features
  features: [
    'IBW calculation (multiple methods)',
    'Resting Energy Expenditure algorithms',
    'Protein requirement estimation',
    'Enteral product nutritional database',
    'Responsive, accessible UI',
    'Framework-free implementation',
  ],

  // Metadata
  year: '2025',
  duration: 'Varied',
  role: 'Frontend Developer',

  // Metrics (optional)
  metrics: {
    lines: '~500',
    files: '~7',
    size: '~60KB',
  },
}
,
  {
    id: 'trackle-terminal-task-manager',
    title: 'Trackle - Terminal Task Manager',
    slug: 'trackle-terminal-task-manager',
    category: 'Frontend',
    status: 'COMPLETED',
    featured: true,
    
    // Short description for cards
    tagline: 'Cyberpunk-inspired task management with terminal aesthetics',
    
    // Full description for project page
    description: 'A sleek, cyberpunk-inspired task management application featuring terminal interface aesthetics and persistent local storage. Built with pure JavaScript, it demonstrates advanced DOM manipulation, state management, and modern UI design principles without framework dependencies.',
    
    // Extended details
    challenge: 'Create a functional task manager with a unique terminal-inspired interface while maintaining accessibility and usability standards.',
    solution: 'Implemented a custom state management system with localStorage persistence, designed a cyberpunk UI with careful attention to contrast and readability, and ensured full keyboard navigation support.',
    outcome: 'Delivered a production-ready application with zero dependencies, demonstrating strong vanilla JavaScript skills and design capabilities.',
    
    // Technical details
    tech: [
      'HTML5',
      'CSS3',
      'Vanilla JavaScript',
      'Local Storage API',
      'Font Awesome',
      'Responsive Design',
    ],
    
    // Links
    liveLink: 'https://trackled.netlify.app/',
    codeLink: 'https://github.com/hemanthscode/trackle',
    
    // Media
    image: '/assets/project_1.png',
    images: [
      '/assets/project_1.png',
    ],
    
    // Features
    features: [
      'Terminal-style interface design',
      'Local storage persistence',
      'Task priority management',
      'Keyboard shortcuts',
      'Responsive across all devices',
      'Zero framework dependencies',
    ],
    
    // Metadata
    year: '2025',
    duration: '2 weeks',
    role: 'Solo Developer',
    
    // Metrics (optional)
    metrics: {
      lines: '~500',
      files: '3',
      size: '~50KB',
    },
  },
  
  {
    id: 'skypulse-weather-dashboard',
    title: 'SkyPulse - Weather Dashboard',
    slug: 'skypulse-weather-dashboard',
    category: 'Frontend',
    status: 'COMPLETED',
    featured: true,
    
    tagline: 'Real-time weather dashboard with glassmorphism UI',
    
    description: 'A cutting-edge, real-time weather dashboard featuring glassmorphism UI design, global city search capabilities, and comprehensive weather forecasts. Integrates with Open-Meteo API for accurate weather data and showcases advanced frontend development with Tailwind CSS.',
    
    challenge: 'Build a visually appealing weather application with real-time data fetching, error handling, and responsive design across all device sizes.',
    solution: 'Leveraged Open-Meteo API for weather data, implemented glassmorphism design with Tailwind CSS, created a robust search system with debouncing, and ensured graceful error handling.',
    outcome: 'A production-ready weather application with excellent UX, fast performance, and modern design patterns.',
    
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript ES6+',
      'Tailwind CSS',
      'Open-Meteo API',
      'Fetch API',
    ],
    
    liveLink: 'https://skypulse07.netlify.app/',
    codeLink: 'https://github.com/hemanthscode/skypulse',
    
    image: '/assets/project_2.png',
    images: ['/assets/project_2.png'],
    
    features: [
      'Real-time weather updates',
      'Global city search',
      '7-day forecast',
      'Hourly weather breakdown',
      'Glassmorphism UI design',
      'Responsive layout',
      'Loading states & error handling',
    ],
    
    year: '2025',
    duration: '1 week',
    role: 'Solo Developer',
    
    metrics: {
      apiCalls: 'Optimized',
      performance: '95+ Lighthouse score',
    },
  },
  
  {
  id: 'momentix',
  title: 'Momentix',
  slug: 'momentix',
  category: 'Frontend',
  status: 'COMPLETED',
  featured: true,
  
  tagline: 'Modern countdown timer app with animations and sound effects',
  
  description: 'A production-grade countdown timer application built with React, featuring beautiful glassmorphism design, real-time updates, sound effects, and celebration animations. Create unlimited timers that persist across sessions with an intuitive, fully responsive interface.',
  
  challenge: 'Build a visually stunning timer application with real-time countdown updates, persistent storage, audio notifications, and smooth animations while maintaining optimal performance.',
  solution: 'Leveraged React hooks for state management, localStorage for persistence, Web Audio API for sound effects, and Framer Motion for smooth animations. Implemented a custom useCountdown hook for efficient timer logic.',
  outcome: 'A polished, user-friendly application demonstrating proficiency in React, animation libraries, audio management, and responsive design with production-ready code architecture.',
  
  tech: [
    'React 18',
    'Vite',
    'Tailwind CSS',
    'Framer Motion',
    'Web Audio API',
    'LocalStorage',
    'Lucide Icons',
  ],
  
  liveLink: 'https://momentix07.netlify.app/', 
  codeLink: 'https://github.com/hemanthscode/momentix',
  
  image: '/assets/project_3.png',
  images: [
    '/assets/project_3.png',
  ],
  
  features: [
    'Unlimited countdown timers',
    'Real-time updates with smooth animations',
    'Sound effects for completion and urgent states',
    'Confetti celebration on timer completion',
    'LocalStorage persistence',
    'Status indicators (Live, Urgent, Complete)',
    'Fully responsive glassmorphism design',
    'Dark mode optimized interface',
  ],
  
  year: '2025',
  duration: '2 weeks',
  role: 'Solo Developer',
  
  metrics: {
    timers: 'Unlimited',
    performance: '60 FPS',
    responsive: '100%',
  },
},
];

// Filter functions for easy categorization
export const getProjectsByCategory = (category) => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export const getCategories = () => {
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  return categories;
};

export const getProjectsByStatus = (status) => {
  return projects.filter(project => project.status === status);
};

export default projects;
