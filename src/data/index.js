import projectOneImage from '../assets/project-one.jpg'
import projectTwoImage from '../assets/project-two.jpg'
import projectThreeImage from '../assets/project-three.jpg'

/**
 * Centralized portfolio data
 */
export const navLinks = [
  { name: 'About', to: '/about' },
  { name: 'Work', to: '/work' },
  { name: 'Contact', to: '/contact' },
]

export const contactLinks = [
  { name: 'Email', href: 'mailto:hemanths7.dev@gmail.com', icon: 'Mail' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hemanthcodes/', icon: 'Linkedin' },
  { name: 'GitHub', href: 'https://github.com/hemanthscode', icon: 'Github' },
  { name: 'Twitter', href: 'https://x.com/hemanthscode', icon: 'Twitter' },
]

export const projects = [
  {
    id: '1',
    title: 'Portfolio',
    slug: 'portfolio',
    shortDescription: 'Modern portfolio with React 19, Vite, and Tailwind CSS. Sleek, responsive UI with Atomic Design principles.',
    detailedDescription:
      'A modern portfolio site built with React 19, Vite, and Tailwind CSS, featuring a sleek, responsive UI with Atomic Design. Showcases projects with local images, optimized for performance and accessibility.',
    image: projectOneImage,
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Stripe API'],
    status: 'Completed',
    liveLink: 'https://hemanth-portfolio.example.com',
    codeLink: 'https://github.com/hemanthscode/portfolio',
    features: ['Real-time inventory updates', 'Secure payment processing', 'Responsive design for all devices'],
    lastUpdated: '2025-06-01',
  },
  {
    id: '2',
    title: 'User Vault',
    slug: 'uservault',
    shortDescription: 'Modular User Management API with auth, profile, and admin control using Node.js, Express, and MongoDB.',
    detailedDescription:
      'A scalable and modular User Management API built with Node.js, Express, and MongoDB. It uses clean architecture with layered separation for routing, controllers, services, and repositories. Features include auth, profile, and admin controls.',
    image: projectTwoImage,
    technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Express'],
    status: 'In Progress',
    liveLink: 'https://uservault.example.com',
    codeLink: 'https://github.com/hemanthscode/user-vault',
    features: ['Real-time messaging', 'End-to-end encryption', 'User authentication'],
    lastUpdated: '2025-07-10',
  },
  {
    id: '3',
    title: 'Soul Craft Society',
    slug: 'soulcraftsociety',
    shortDescription: 'Responsive NGO landing page built with Next.js & Tailwind CSS to promote creativity and craftsmanship.',
    detailedDescription:
      'A responsive and modern landing page for Soul Craft Society, an NGO focused on empowering lives through creativity and craftsmanship. Built using Next.js and Tailwind CSS, it follows UI/UX best practices to deliver a meaningful user experience.',
    image: projectThreeImage,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'Completed',
    liveLink: 'https://soulcraftsociety.example.com',
    codeLink: 'https://github.com/hemanthscode/soul-craft-society',
    features: ['SEO optimization', 'WCAG-compliant accessibility', 'Smooth animations with Framer Motion'],
    lastUpdated: '2025-05-15',
  },
]

export const skills = ['React', 'Node.js', 'Tailwind CSS', 'JavaScript']