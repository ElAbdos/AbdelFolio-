import React from 'react';
import type { SkillCategory } from '../types';
import { hexToRgb } from '../hooks';

interface SkillsMobileNavProps {
  categories: SkillCategory[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

// Composant de navigation mobile pour les compétences
export const SkillsMobileNav: React.FC<SkillsMobileNavProps> = ({categories, activeTab, onTabChange,}) => {
  return (
    <div className="skills-mobile-nav">
      {categories.map((category) => (
        <button key={category.id} className={`mobile-nav-item ${activeTab === category.id ? 'active' : ''}`} onClick={() => onTabChange(category.id)} style={{
            '--color': category.color,
            '--color-rgb': hexToRgb(category.color),
          } as React.CSSProperties}>
          {category.icon}
          <span>{category.title}</span>
        </button>
      ))}
    </div>
  );
};
