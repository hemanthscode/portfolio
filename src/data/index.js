import projectOneImage from "../assets/project-one.jpg";
import projectTwoImage from "../assets/project-two.jpg";
import projectThreeImage from "../assets/project-three.jpg";

/**
 * Validates project data schema.
 * @param {Object} project - Project data to validate.
 * @returns {boolean} - True if valid, throws error if invalid.
 */
const validateProject = (project) => {
  const requiredFields = [
    "id",
    "title",
    "slug",
    "shortDescription",
    "image",
    "technologies",
    "status",
    "features",
    "lastUpdated",
  ];
  requiredFields.forEach((field) => {
    if (!project[field]) {
      throw new Error(`Project validation failed: ${field} is required`);
    }
  });
  if (
    !Array.isArray(project.technologies) ||
    !Array.isArray(project.features)
  ) {
    throw new Error(
      "Project validation failed: technologies and features must be arrays"
    );
  }
  return true;
};

/**
 * Centralized portfolio data.
 */
export const navLinks = [
  { name: "About", to: "/about" },
  { name: "Work", to: "/work" },
  { name: "Contact", to: "/contact" },
];

export const contactLinks = [
  { name: "Email", href: "mailto:hemanths7.dev@gmail.com", icon: "Mail" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hemanthcodes/",
    icon: "Linkedin",
  },
  { name: "GitHub", href: "https://github.com/hemanthscode", icon: "Github" },
  { name: "Twitter", href: "https://x.com/hemanthscode", icon: "Twitter" },
];

export const projects = [
  {
    id: "1",
    title: "Modern React Portfolio",
    slug: "portfolio",
    shortDescription:
      "Sleek, responsive portfolio built with React 19, Vite, and Tailwind CSS. Implements Atomic Design for scalable, maintainable UI.",
    detailedDescription:
      "A feature-rich developer portfolio showcasing projects and contact info. Built with the latest React (v19), Vite for lightning-fast builds, and Tailwind CSS for utility-first styling. Employs Atomic Design principles (atoms, molecules, organisms) for high reusability. Includes optimized images, structured data, Netlify deployment with flexible SPA routing, and ESLint/Vitest for code quality and reliability.",
    image: projectOneImage, 
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Atomic Design",
      "Netlify",
    ],
    status: "Completed",
    liveLink: "https://hemanthbuilds.netlify.app/",
    codeLink: "https://github.com/hemanthscode/portfolio",
    features: [
      "Atomic Design component architecture",
      "Instant navigation with React Router v7",
      "Fully responsive & accessible UI",
      "Optimized assets and performance (Vite + image optimizer)",
      "SPA routing with Netlify redirects",
      "Contact form with EmailJS integration",
      "Automated code linting and testing (ESLint, Vitest)",
    ],
    lastUpdated: "2025-07-17",
  },
  {
    id: "2",
    title: "User Vault API",
    slug: "user-management-api",
    shortDescription:
      "Secure and scalable user management API with JWT auth, built using Node.js, Express, and MongoDB.",
    detailedDescription:
      "A production-ready, modular REST API for user authentication and management. Developed with Node.js, Express, and MongoDB, applying clean architecture with clear separation between routing, controllers, services, and repositories. Features secure JWT-based authentication, bcrypt password hashing, middleware-protected routes, robust input validation, and admin-only management endpoints. Scalable and maintainable codebase—ideal as a starter template for larger backends.",
    image: projectTwoImage, 
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
    ],
    status: "Completed",
    liveLink: null,
    codeLink: "https://github.com/hemanthscode/user-vault",
    features: [
      "JWT-based authentication and authorization",
      "Protected routes with custom middleware",
      "User registration, login, and profile endpoints",
      "Secure password hashing (bcrypt)",
      "Admin-only user management APIs",
      "Layered clean architecture (controllers, services, repositories)",
      "Comprehensive input validation utilities",
      "Environment-based config with dotenv",
    ],
    lastUpdated: "2025-02-18",
  },
  {
    id: "3",
    title: "Soul Craft Society Landing Page",
    slug: "soul-craft-society",
    shortDescription:
      "Modern, responsive landing page for an NGO empowering creativity and craftsmanship, built with Next.js and Tailwind CSS.",
    detailedDescription:
      "A visually engaging landing page for Soul Craft Society, an NGO dedicated to empowering individuals through creativity and craftsmanship. Built using Next.js for lightning-fast performance and SEO, with Tailwind CSS for utility-first styling. Features modern UI/UX, dark mode support, smooth animations via Framer Motion, and interactive 3D graphics with Three.js. Codebase is modular—leveraging reusable components, clean file organization, and TypeScript for safety and scalability.",
    image: projectThreeImage, // Use a relevant asset or illustration
    technologies: [
      "Next.js 15",
      "React 18",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Three.js",
    ],
    status: "In Progress", 
    liveLink: null, 
    codeLink: "https://github.com/hemanthscode/soul-craft-society",
    features: [
      "Responsive, mobile-first design",
      "Sectioned layout: Hero, About, Programs, Impact, Donate",
      "Reusable component architecture (Button, Card, Section)",
      "Dark mode with next-themes integration",
      "Framer Motion animations for smooth UI experience",
      "3D/interactive visuals via Three.js",
      "SEO-friendly Next.js structure",
      "Strict TypeScript and linting for code quality",
    ],
    lastUpdated: "2025-04-14", 
  },
].map((project) => {
  validateProject(project);
  return project;
});

export const skills = ["React", "Node.js", "Tailwind CSS", "JavaScript"];
