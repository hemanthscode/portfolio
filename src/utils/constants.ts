// src/utils/constants.ts
import { NavItem } from '@/types/nav.types';
import { Project } from '@/types/project.types';

export enum ProjectCategory {
  All = 'all',
  Web = 'web',
  Mobile = 'mobile',
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A modern web application built with React and TypeScript.',
    image: '/assets/projects/project1.jpg',
    link: 'https://example.com/project1',
    category: ProjectCategory.Web,
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'A mobile app with seamless user experience.',
    image: '/assets/projects/project2.jpg',
    link: 'https://example.com/project2',
    category: ProjectCategory.Mobile,
  },
];

export const SOCIAL_LINKS: { href: string; name: 'Github' | 'Linkedin'; label: string }[] = [
  { href: 'https://github.com', name: 'Github', label: 'GitHub Profile' },
  { href: 'https://linkedin.com', name: 'Linkedin', label: 'LinkedIn Profile' },
];