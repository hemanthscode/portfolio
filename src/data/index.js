/**
 * Central export point for all data
 * Import all data from this single file
 */

// Personal data
export { default as personal } from './personal';

// Projects data
export {
  default as projects,
  getProjectsByCategory,
  getFeaturedProjects,
  getProjectBySlug,
  getCategories,
  getProjectsByStatus,
} from './projects';

// Skills data
export {
  default as skills,
  skillCategories,
  coreCompetencies,
  currentlyLearning,
} from './skills';

// Content data (NEW)
export {
  ABOUT_CONTENT,
  CONTACT_CONTENT,
  EXPERIENCE_CONTENT,
  FOOTER_CONTENT,
} from './content';

// Re-export everything for convenience
export * from './personal';
export * from './projects';
export * from './skills';
export * from './content';
