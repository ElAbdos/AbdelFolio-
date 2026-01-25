export type Language = 'FR' | 'EN';

export interface SkillCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
  languages: string[];
  frameworks: string[];
  tools: string[];
  color: string;
  gradient: string;
}

export interface SkillsTranslations {
  tag: string;
  title: string;
  subtitle: string;
  categories: Record<string, {
    title: string;
    subtitle: string;
    description: string;
  }>;
}

export interface SkillsProps {
  currentLanguage: Language;
}

export interface MousePosition {
  x: number;
  y: number;
}
