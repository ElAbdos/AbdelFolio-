import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Award } from 'lucide-react';
import type { ProjectItem } from '../types';
import { getCategoryColor, getCategoryName } from '../constants';

interface ProjectCardProps {
  project: ProjectItem;
  positionClass: string;
  isActive: boolean;
  onSelect: () => void;
  viewSkillsLabel?: string;
  technicalStackLabel?: string;
  onSkillClick?: (categoryId: string) => void;
  currentLanguage?: 'FR' | 'EN';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  positionClass,
  onSelect,
  viewSkillsLabel = 'Compétences utilisées',
  technicalStackLabel = 'Stack technique',
  onSkillClick,
  currentLanguage = 'FR',
}) => {
  const [imageError, setImageError] = useState(false);
  const hasSkills = project.skills && project.skills.length > 0;
  const cardColorRgb = hexToRgb(project.color);

  const handleSkillBadgeClick = (e: React.MouseEvent, categoryId: string) => {
    e.stopPropagation();
    if (onSkillClick) {
      onSkillClick(categoryId);
    }
  };

  const hasImage = project.image && !imageError;

  return (
    <div
      className={`project-card-3d ${positionClass}`}
      onClick={onSelect}
      style={{
        '--card-color': project.color,
        '--card-color-rgb': cardColorRgb,
      } as React.CSSProperties}
    >
      <div className="project-visual">
        <div className="project-visual-overlay"></div>
        {hasImage ? (
          <img
            src={project.image}
            alt={`${project.title} logo`}
            className="project-logo"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="project-initials" style={{ background: project.color }}>
            {project.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
          </div>
        )}
        <div className="project-year">{project.year}</div>
      </div>

      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {/* Stack technique - Tags */}
        <div className="project-section">
          <div className="project-section-label">
            <Code2 size={14} />
            <span>{technicalStackLabel}</span>
          </div>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Compétences métier (catégories) */}
        {hasSkills && (
          <div className="project-section project-skills-section">
            <div className="project-section-label">
              <Award size={14} />
              <span className="section-label-text">{viewSkillsLabel}</span>
            </div>
            <div className="skills-badges">
              {project.skills?.map((skill) => {
                const categoryColor = getCategoryColor(skill.categoryId);
                const categoryName = getCategoryName(skill.categoryId, currentLanguage);
                return (
                  <button
                    key={skill.categoryId}
                    className="skill-category-badge"
                    onClick={(e) => handleSkillBadgeClick(e, skill.categoryId)}
                    style={{
                      '--skill-color': categoryColor,
                      '--skill-color-rgb': hexToRgb(categoryColor),
                    } as React.CSSProperties}
                    title={`Cliquez pour voir ${categoryName}`}
                  >
                    {categoryName}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Liens GitHub et Demo */}
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn github"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} />
            GitHub
          </a>
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn demo"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper pour convertir hex en RGB
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '143, 122, 255';
};
