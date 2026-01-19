/**
 * Skills and technologies data
 * Organized by category with status-based levels
 */

export const skillCategories = {
  frontend: {
    name: 'Frontend',
    description: 'Building responsive, accessible user interfaces',
    icon: 'Layout',
    skills: [
      {
        name: 'React',
        level: 'EXPERT',
        description: 'Component-based architecture, hooks, context',
        icon: null,
      },
      {
        name: 'JavaScript',
        level: 'EXPERT',
        description: 'ES6+, async/await, DOM manipulation',
        icon: null,
      },
      {
        name: 'HTML5',
        level: 'EXPERT',
        description: 'Semantic markup, accessibility',
        icon: null,
      },
      {
        name: 'CSS3',
        level: 'EXPERT',
        description: 'Flexbox, Grid, animations',
        icon: null,
      },
      {
        name: 'Tailwind CSS',
        level: 'ADVANCED',
        description: 'Utility-first styling, responsive design',
        icon: null,
      },
      {
        name: 'TypeScript',
        level: 'INTERMEDIATE',
        description: 'Type-safe JavaScript development',
        icon: null,
      },
    ],
  },
  
  backend: {
    name: 'Backend',
    description: 'Building scalable server-side applications',
    icon: 'Server',
    skills: [
      {
        name: 'Node.js',
        level: 'EXPERT',
        description: 'Server-side JavaScript runtime',
        icon: null,
      },
      {
        name: 'Express.js',
        level: 'EXPERT',
        description: 'RESTful API development',
        icon: null,
      },
      {
        name: 'MongoDB',
        level: 'ADVANCED',
        description: 'NoSQL database design',
        icon: null,
      },
      {
        name: 'REST APIs',
        level: 'EXPERT',
        description: 'API design and implementation',
        icon: null,
      },
      {
        name: 'Authentication',
        level: 'ADVANCED',
        description: 'JWT, OAuth, session management',
        icon: null,
      },
    ],
  },
  
  tools: {
    name: 'Tools & Workflow',
    description: 'Development tools and version control',
    icon: 'Wrench',
    skills: [
      {
        name: 'Git',
        level: 'EXPERT',
        description: 'Version control, branching strategies',
        icon: null,
      },
      {
        name: 'GitHub',
        level: 'EXPERT',
        description: 'Collaboration, CI/CD',
        icon: null,
      },
      {
        name: 'VS Code',
        level: 'EXPERT',
        description: 'Primary development environment',
        icon: null,
      },
      {
        name: 'Postman',
        level: 'ADVANCED',
        description: 'API testing and documentation',
        icon: null,
      },
      {
        name: 'Vite',
        level: 'ADVANCED',
        description: 'Fast build tool',
        icon: null,
      },
    ],
  },
  
  additional: {
    name: 'Additional Skills',
    description: 'Other technical competencies',
    icon: 'Sparkles',
    skills: [
      {
        name: 'Responsive Design',
        level: 'EXPERT',
        description: 'Mobile-first approach',
        icon: null,
      },
      {
        name: 'UI/UX Design',
        level: 'ADVANCED',
        description: 'User-centered design principles',
        icon: null,
      },
      {
        name: 'Performance Optimization',
        level: 'ADVANCED',
        description: 'Web vitals, lazy loading',
        icon: null,
      },
      {
        name: 'Accessibility',
        level: 'ADVANCED',
        description: 'WCAG compliance, ARIA',
        icon: null,
      },
    ],
  },
};

// Flat list of all skills (for simple display)
export const skills = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 'EXPERT' },
  { name: 'JavaScript', category: 'Frontend', level: 'EXPERT' },
  { name: 'HTML5', category: 'Frontend', level: 'EXPERT' },
  { name: 'CSS3', category: 'Frontend', level: 'EXPERT' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'ADVANCED' },
  { name: 'TypeScript', category: 'Frontend', level: 'INTERMEDIATE' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', level: 'EXPERT' },
  { name: 'Express.js', category: 'Backend', level: 'EXPERT' },
  { name: 'MongoDB', category: 'Backend', level: 'ADVANCED' },
  { name: 'REST APIs', category: 'Backend', level: 'EXPERT' },
  
  // Tools
  { name: 'Git', category: 'Tools', level: 'EXPERT' },
  { name: 'GitHub', category: 'Tools', level: 'EXPERT' },
  { name: 'VS Code', category: 'Tools', level: 'EXPERT' },
  { name: 'Postman', category: 'Tools', level: 'ADVANCED' },
];

// Core competencies (highlight for About section)
export const coreCompetencies = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive, accessible, and performant user interfaces with React and modern CSS.',
    icon: 'Layout',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend Development',
    description: 'Building secure, scalable REST APIs with Node.js, Express, and MongoDB.',
    icon: 'Server',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
  },
  {
    title: 'Full Stack Integration',
    description: 'Seamlessly connecting frontend and backend for complete web applications.',
    icon: 'Layers',
    skills: ['MERN Stack', 'Authentication', 'State Management'],
  },
  {
    title: 'Development Workflow',
    description: 'Using modern tools and best practices for efficient, collaborative development.',
    icon: 'Workflow',
    skills: ['Git', 'GitHub', 'VS Code', 'Agile'],
  },
];

// Learning & improving
export const currentlyLearning = [
  {
    name: 'Advanced System Design',
    status: 'IN_PROGRESS',
    description: 'Microservices, scalability patterns',
  },
  {
    name: 'AI/ML Integration',
    status: 'IN_PROGRESS',
    description: 'Integrating AI models into web apps',
  },
  {
    name: 'DevOps Basics',
    status: 'LEARNING',
    description: 'Docker, CI/CD pipelines',
  },
];

export default skills;
