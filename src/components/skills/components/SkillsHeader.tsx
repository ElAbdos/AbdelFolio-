import React from 'react';

interface SkillsHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
}

// En-tête de la section Skills
export const SkillsHeader: React.FC<SkillsHeaderProps> = ({ tag, title, subtitle }) => {
  return (
    <div className="skills-header-ultra">
      <div className="skills-badge">
        <span>{tag}</span>
      </div>
      <h2 className="skills-title-ultra">{title}</h2>
      <p className="skills-subtitle-ultra">{subtitle}</p>
    </div>
  );
};
