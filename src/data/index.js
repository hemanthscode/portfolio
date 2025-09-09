export const personal = {
  name: "Hemanth",
  title: "Full Stack Developer",
  bio: "I'm a passionate developer with a knack for building scalable web applications and crafting seamless user experiences.",
  location: "India",
};

export const skills = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "MongoDB", category: "Database" },
];

export const projects = [
  {
    id: "1",
    title: "Trackle - Terminal Task Manager",
    slug: "trackle-terminal-task-manager",
    description:
      "A sleek, cyberpunk-inspired task management app with terminal interface aesthetics and persistent local storage.",
    image: "/assets/trackle-project.jpg",
    tech: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript",
      "Local Storage",
      "Font Awesome",
    ],
    liveLink: "https://trackled.netlify.app/",
    codeLink: "https://github.com/hemanthscode/trackle",
    category: "Web",
    status: "Completed",
    year: "2025",
  },
  {
    id: "2",
    title: "SkyPulse - Weather Dashboard",
    slug: "skypulse-weather-dashboard",
    description:
      "A cutting-edge, real-time weather dashboard with glassmorphism UI, global city search, and comprehensive forecasts.",
    image: "/assets/skypulse-project.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Open-Meteo API"],
    liveLink: "https://skypulse07.netlify.app/",
    codeLink: "https://github.com/hemanthscode/skypulse",
    category: "Web",
    status: "Completed",
    year: "2025",
  },
  {
    id: "3",
    title: "User Vault API",
    slug: "user-vault-api",
    description:
      "A secure REST API for user management with JWT authentication.",
    image: "/assets/project-two.jpg",
    tech: ["Node.js", "Express", "MongoDB"],
    codeLink: "https://github.com/hemanthscode/user-vault-api",
    category: "Backend",
    status: "In Progress",
    year: "2025",
  },
];

export const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Work", to: "/work" },
  { name: "Contact", to: "/contact" },
];

export const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hemanthscode",
    label: "@hemanthscode",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hemanthcodes",
    label: "hemanthscode",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hemanthscode",
    label: "@hemanthscode",
    icon: "Twitter",
  },
  {
    name: "Email",
    href: "mailto:hemanths7.dev@gmail.com",
    label: "hemanths7.dev@gmail.com",
    icon: "Mail",
  },
];
