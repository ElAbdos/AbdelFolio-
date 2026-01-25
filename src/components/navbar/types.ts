export type Language = 'FR' | 'EN';

export interface MenuItem {
  name: string;
  href: string;
  id: string;
}

export interface LanguageConfig {
  flag: string;
  label: string;
}

export interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  currentLanguage: Language;
  setCurrentLanguage: (lang: Language) => void;
}
