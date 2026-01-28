export type Language = 'FR' | 'EN';

export interface SkillCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
  languages: string[];
  frameworks?: string[];
  architectures?: string[];
  tests?: string[];
  methods?: string[];
  libraries?: string[];
  tools: string[];
  color: string;
  gradient: string;
}

export interface SkillsProps {
  currentLanguage: Language;
}

export interface MousePosition {
  x: number;
  y: number;
}
