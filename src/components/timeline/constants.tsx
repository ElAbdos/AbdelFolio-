import {BookOpen, Briefcase, Code, Compass, Cpu, Rocket, Star} from 'lucide-react';
import type {IconMapType} from './types';

export const ICON_MAP: IconMapType = {
  Compass: <Compass size={24} />,
  Cpu: <Cpu size={24} />,
  Rocket: <Rocket size={24} />,
  Star: <Star size={24} />,
  BookOpen: <BookOpen size={24}/>,
  Code: <Code size={24}/>,
  Briefcase: <Briefcase size={24}/>,
};

export const TIMELINE_CONFIG = {
  windowHeightOffset: 2,
  visibilityThreshold: 0.85,
  scrollDetectionInterval: 100,
} as const;
