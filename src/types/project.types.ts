// src/types/project.types.ts
export enum ProjectCategory {
  All = 'all',
  Web = 'web',
  Mobile = 'mobile',
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: ProjectCategory;
}