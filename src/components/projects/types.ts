export type Language = 'FR' | 'EN';

export interface ProjectSkillLink {
  categoryId: string;
}

export interface ProjectItem {
  id: string | number;
  year: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  linkedSkills?: string[];
  skills?: ProjectSkillLink[];
  color: string;
  github: string;
  demo: string;
  image?: string;
}

export interface ProjectsTranslations {
  tag: string;
  title: string;
  subtitle: string;
  view_skills: string;
  technicalStack?: string;
  skillsUsed?: string;
  items: ProjectItem[];
}

export interface ProjectsProps {
  currentLanguage: Language;
}

export type CardPosition = 'active' | 'prev' | 'next' | 'hidden-left' | 'hidden-right' | 'hidden';
