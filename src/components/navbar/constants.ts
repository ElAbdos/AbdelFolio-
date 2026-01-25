import type { LanguageConfig } from './types';

export const LANGUAGES = ['FR', 'EN'] as const;

export const LANGUAGE_CONFIG: Record<string, LanguageConfig> = {
  FR: { flag: '🇫🇷', label: 'Français' },
  EN: { flag: '🇬🇧', label: 'English' },
};
export const SCROLL_THRESHOLD = 50;
export const ACTIVE_SECTION_OFFSET = 100;
