export const personal = {
  name: "Hemanth",
  title: "Full Stack Developer",
  bio: "I'm a passionate developer with a knack for building scalable web applications and crafting seamless user experiences.",
  location: "India"
};

export const skills = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "MongoDB", category: "Database" }
];

export const projects = [
  {
    id: "1",
    title: "Portfolio Website",
    slug: "portfolio-website",
    description: "A modern portfolio showcasing my work and skills.",
    image: "/assets/project-one.jpg",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveLink: "https://hemanth-portfolio.example.com",
    codeLink: "https://github.com/hemanthscode/portfolio",
    category: "Web",
    status: "Completed",
    year: "2023"
  },
  {
    id: "2",
    title: "User Vault API",
    slug: "user-vault-api",
    description: "A secure REST API for user management with JWT authentication.",
    image: "/assets/project-two.jpg",
    tech: ["Node.js", "Express", "MongoDB"],
    codeLink: "https://github.com/hemanthscode/user-vault-api",
    category: "Backend",
    status: "In Progress",
    year: "2023"
  },
  {
    id: "3",
    title: "Soul Craft Society",
    slug: "soul-craft-society",
    description: "A community platform for creative professionals.",
    image: "/assets/project-three.jpg",
    tech: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://soul-craft-society.example.com",
    codeLink: "https://github.com/hemanthscode/soul-craft-society",
    category: "Web",
    status: "Completed",
    year: "2022"
  }
];

export const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Work", to: "/work" },
  { name: "Contact", to: "/contact" }
];

export const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hemanthscode",
    label: "@hemanthscode",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hemanthcodes",
    label: "hemanthscode",
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hemanthscode",
    label: "@hemanthscode",
    icon: "Twitter"
  },
  {
    name: "Email",
    href: "mailto:hemanths7.dev@gmail.com",
    label: "hemanths7.dev@gmail.com",
    icon: "Mail"
  }
];