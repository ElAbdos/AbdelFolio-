import React from 'react';

interface ProjectsHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
}

export const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ tag, title, subtitle }) => {
  return (
    <div className="projects-header">
      <div className="projects-badge">
        <span>{tag}</span>
      </div>
      <h2 className="projects-title">{title}</h2>
      <p className="projects-subtitle">{subtitle}</p>
    </div>
  );
};
