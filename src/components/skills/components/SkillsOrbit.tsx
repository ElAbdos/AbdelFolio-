import React from 'react';
import type { SkillCategory } from '../types';

interface SkillsOrbitProps {
  categories: SkillCategory[];
  activeTab: string;
  onTabChange: (id: string) => void;
  currentColor: string;
}

const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '143, 122, 255';
};

export const SkillsOrbit: React.FC<SkillsOrbitProps> = ({categories, activeTab, onTabChange, currentColor,}) => {
  const activeIndex = categories.findIndex(c => c.id === activeTab) + 1;

  return (
    <div className="skills-orbit-container" style={{ '--current-color': currentColor } as React.CSSProperties}>
      <div className="skills-orbit-ring">
        <div className="orbit-progress-line"></div>
        <div className="skills-orbit-center">
          <span className="orbit-center-label">Domaine</span>
          <span className="orbit-center-number">
            {String(activeIndex).padStart(2, '0')}
          </span>
          <span className="orbit-center-label">sur {String(categories.length).padStart(2, '0')}</span>
        </div>
        {categories.map((category, index) => {
          const angle = (index * 360) / categories.length - 90;
          const isActive = activeTab === category.id;

          return (
            <button
              key={category.id}
              className={`orbit-item ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(category.id)}
              style={{
                '--angle': `${angle}deg`,
                '--color': category.color,
                '--color-rgb': hexToRgb(category.color),
                '--gradient': category.gradient,
              } as React.CSSProperties}
              aria-label={`Voir compétences ${category.title}`}>
              <div className="orbit-item-inner">
                <span className="orbit-icon">{category.icon}</span>
                <span className="orbit-label">{category.title}</span>
              </div>
              {isActive && <div className="orbit-pulse"></div>}
              <div className="orbit-position-indicator"></div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
