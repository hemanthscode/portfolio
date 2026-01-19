/**
 * Application-wide constants
 * Centralized configuration for consistency across the app
 */

// ============================================
// SITE CONFIGURATION
// ============================================

export const SITE_CONFIG = {
  name: 'Hemanth',
  title: 'Full Stack MERN Developer',
  description: 'Full Stack MERN Developer specializing in scalable web applications, clean architecture, and modern UI/UX design.',
  url: import.meta.env.VITE_SITE_URL || 'http://localhost:3000',
  author: 'Hemanth',
  social: {
    github: 'hemanthscode',
    linkedin: 'hemanthcodes',
    twitter: 'hemanthscode',
    email: 'hemanths7.dev@gmail.com',
  },
};

// ============================================
// NAVIGATION
// ============================================

export const NAV_ITEMS = [
  { name: 'Home', path: '/', label: 'Home' },
  { name: 'About', path: '/about', label: 'About Me' },
  { name: 'Work', path: '/work', label: 'My Work' },
  { name: 'Contact', path: '/contact', label: 'Get In Touch' },
];

// ============================================
// STATUS TYPES & MAPPINGS
// ============================================

/**
 * Project status definitions
 */
export const PROJECT_STATUS = {
  LIVE: { 
    label: 'Live', 
    variant: 'success', 
    pulse: true,
    description: 'Currently deployed and accessible'
  },
  COMPLETED: { 
    label: 'Completed', 
    variant: 'success', 
    pulse: false,
    description: 'Development finished'
  },
  IN_PROGRESS: { 
    label: 'In Progress', 
    variant: 'progress', 
    pulse: true,
    description: 'Actively being developed'
  },
  BETA: { 
    label: 'Beta', 
    variant: 'warning', 
    pulse: true,
    description: 'In testing phase'
  },
  PLANNING: { 
    label: 'Planning', 
    variant: 'neutral', 
    pulse: false,
    description: 'In planning stage'
  },
  ARCHIVED: { 
    label: 'Archived', 
    variant: 'neutral', 
    pulse: false,
    description: 'No longer maintained'
  },
  FEATURED: { 
    label: 'Featured', 
    variant: 'featured', 
    pulse: false,
    description: 'Highlighted project'
  },
};

/**
 * Skill proficiency levels
 */
export const SKILL_LEVEL = {
  EXPERT: { 
    label: 'Expert', 
    variant: 'success',
    description: '5+ years / Production experience'
  },
  ADVANCED: { 
    label: 'Advanced', 
    variant: 'progress',
    description: '3+ years / Strong proficiency'
  },
  INTERMEDIATE: { 
    label: 'Intermediate', 
    variant: 'warning',
    description: '1-2 years / Working knowledge'
  },
  LEARNING: { 
    label: 'Learning', 
    variant: 'neutral',
    description: 'Currently studying'
  },
};

/**
 * Availability status
 */
export const AVAILABILITY_STATUS = {
  AVAILABLE: { 
    label: 'Available for work', 
    variant: 'success', 
    pulse: true 
  },
  BUSY: { 
    label: 'Currently busy', 
    variant: 'warning', 
    pulse: true 
  },
  UNAVAILABLE: { 
    label: 'Not available', 
    variant: 'error', 
    pulse: false 
  },
};

/**
 * Timeline/Experience status
 */
export const TIMELINE_STATUS = {
  CURRENT: { 
    label: 'Current', 
    variant: 'progress', 
    pulse: true 
  },
  COMPLETED: { 
    label: 'Completed', 
    variant: 'success', 
    pulse: false 
  },
  ONGOING: { 
    label: 'Ongoing', 
    variant: 'warning', 
    pulse: true 
  },
};

// ============================================
// SOCIAL LINKS
// ============================================

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: `https://github.com/${SITE_CONFIG.social.github}`,
    label: '@hemanthscode',
    icon: 'Github',
    ariaLabel: 'Visit my GitHub profile',
  },
  {
    name: 'LinkedIn',
    href: `https://linkedin.com/in/${SITE_CONFIG.social.linkedin}`,
    label: 'Hemanth',
    icon: 'Linkedin',
    ariaLabel: 'Connect with me on LinkedIn',
  },
  {
    name: 'Twitter',
    href: `https://twitter.com/${SITE_CONFIG.social.twitter}`,
    label: '@hemanthscode',
    icon: 'Twitter',
    ariaLabel: 'Follow me on Twitter',
  },
  {
    name: 'Email',
    href: `mailto:${SITE_CONFIG.social.email}`,
    label: SITE_CONFIG.social.email,
    icon: 'Mail',
    ariaLabel: 'Send me an email',
  },
];

// ============================================
// ANIMATION VARIANTS (Framer Motion)
// ============================================

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
  },

  slideUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  },

  slideDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  },

  slideLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  },

  slideRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  },

  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
  },

  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
};

// ============================================
// COMMON GRADIENT STYLES (NEW - Reusable)
// ============================================

export const GRADIENT_STYLES = {
  blue: {
    iconColor: 'text-blue-400',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
  },
  purple: {
    iconColor: 'text-purple-400',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/30',
  },
  green: {
    iconColor: 'text-green-400',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-500/30',
  },
  yellow: {
    iconColor: 'text-yellow-400',
    bgGradient: 'from-yellow-500/10 to-orange-500/10',
    borderColor: 'border-yellow-500/30',
  },
  red: {
    iconColor: 'text-red-400',
    bgGradient: 'from-red-500/10 to-pink-500/10',
    borderColor: 'border-red-500/30',
  },
};

// ============================================
// BREAKPOINTS (Match Tailwind)
// ============================================

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// ============================================
// TIMING
// ============================================

export const TIMING = {
  fast: 200,
  normal: 300,
  slow: 500,
  debounce: 300,
  toast: 3000,
};

// ============================================
// Z-INDEX LAYERS
// ============================================

export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
};

// ============================================
// EMAIL FORM CONFIG
// ============================================

export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// ============================================
// VALIDATION PATTERNS
// ============================================

export const VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
};

// ============================================
// STATUS MESSAGES
// ============================================

export const MESSAGES = {
  success: {
    contactForm: 'Thanks for reaching out! I\'ll get back to you within 24 hours.',
    generic: 'Success! Your action was completed.',
  },
  error: {
    contactForm: 'Failed to send message. Please try again or email me directly.',
    network: 'Network error. Please check your connection.',
    generic: 'Something went wrong. Please try again.',
    validation: 'Please check your input and try again.',
  },
  loading: {
    sending: 'Sending...',
    loading: 'Loading...',
  },
};

// ============================================
// API ENDPOINTS (if needed in future)
// ============================================

export const API_ENDPOINTS = {
  // Add API endpoints here when needed
};

// ============================================
// EXTERNAL LINKS
// ============================================

export const EXTERNAL_LINKS = {
  resume: '/resume.pdf',
  github: `https://github.com/${SITE_CONFIG.social.github}`,
  linkedin: `https://linkedin.com/in/${SITE_CONFIG.social.linkedin}`,
};
