import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectItem } from '../types';
import type { CardPosition } from '../types';
import { ProjectCard } from './ProjectCard';

interface Carousel3DProps {
  projects: ProjectItem[];
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  getCardStyle: (index: number) => CardPosition;
  viewSkillsLabel?: string;
  technicalStackLabel?: string;
  onSkillClick?: (categoryId: string) => void;
  currentLanguage?: 'FR' | 'EN';
}

export const Carousel3D: React.FC<Carousel3DProps> = ({projects, activeIndex, onPrev, onNext, onSelect, getCardStyle, viewSkillsLabel, technicalStackLabel, onSkillClick, currentLanguage,}) => {
  return (
    <div className="carousel-3d-wrapper">
      <button className="carousel-control prev" onClick={onPrev} disabled={activeIndex === 0} aria-label="Projet précédent">
        <ChevronLeft size={32} />
      </button>

      <div className="carousel-scene">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} positionClass={getCardStyle(index)} isActive={index === activeIndex} onSelect={() => onSelect(index)} viewSkillsLabel={viewSkillsLabel} technicalStackLabel={technicalStackLabel} onSkillClick={onSkillClick} currentLanguage={currentLanguage}/>
        ))}
      </div>

      <button className="carousel-control next" onClick={onNext} disabled={activeIndex === projects.length - 1} aria-label="Projet suivant">
        <ChevronRight size={32} />
      </button>
    </div>
  );
};
