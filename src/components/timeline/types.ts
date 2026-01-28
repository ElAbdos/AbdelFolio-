import React from "react";

export type Language = 'FR' | 'EN';

export interface ProfessionalExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  status: 'completed' | 'in-progress' | 'searching';
}

export interface TimelineStep {
  year: string;
  title: string;
  description: string;
  icon: string;
  experiences?: ProfessionalExperience[];
}

export interface TimelineProps {
  currentLanguage: Language;
}

export type IconMapType = Record<string, React.ReactNode>;
