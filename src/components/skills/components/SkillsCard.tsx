import React from 'react';
import { Code2, Layout, Terminal, ChevronRight } from 'lucide-react';
import type { SkillCategory } from '../types';
import { hexToRgb } from '../hooks';

interface SkillsCardProps {
  category: SkillCategory;
  mousePosition: { x: number; y: number };
  transform: string;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

// Composant pour afficher une carte de compétences avec effet 3D
export const SkillsCard: React.FC<SkillsCardProps> = ({category, mousePosition, transform, onMouseMove, onMouseLeave,}) => {
  const colorRgb = hexToRgb(category.color);
  return (
    <div className="skills-showcase">
      <div className="skill-card-3d" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} style={{
          transform,
          '--accent': category.color,
          '--gradient': category.gradient,
        } as React.CSSProperties}>
        <div className="card-spotlight" style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${category.color}20, transparent 40%)`,
          } as React.CSSProperties}/>
          <div className="skill-card-header">
          <div className="skill-header-icon">
            {category.icon}
          </div>
          <div className="skill-title-block">
            <h3 className="skill-card-title">{category.title}</h3>
            <p className="skill-card-subtitle-progression">{category.subtitle}</p>
          </div>
        </div>
          <p className="skill-card-description">{category.description}</p>

        <div className="skills-grid-container">
          {category.languages.length > 0 && (
            <div className="skills-column">
              <h4 className="section-label">
                <Code2 size={18} />
                <span>Technologies</span>
              </h4>
              <div className="skills-tags">
                {category.languages.map((lang, idx) => (
                  <SkillTag key={idx} label={lang} delay={idx * 0.06} color={category.color} colorRgb={colorRgb} gradient={category.gradient} />
                ))}
              </div>
            </div>
          )}
            {category.frameworks.length > 0 && (
            <div className="skills-column">
              <h4 className="section-label">
                <Layout size={18} />
                <span>Méthodes & Frameworks</span>
              </h4>
              <div className="skills-tags">
                {category.frameworks.map((fw, idx) => (
                  <SkillTag key={idx} label={fw} delay={idx * 0.06} color={category.color} colorRgb={colorRgb} gradient={category.gradient}/>
                ))}
              </div>
            </div>
          )}
            {category.tools.length > 0 && (
            <div className="skills-column">
              <h4 className="section-label">
                <Terminal size={18} />
                <span>Outils</span>
              </h4>
              <div className="tools-grid">
                {category.tools.map((tool, idx) => (
                  <ToolChip key={idx} label={tool} delay={idx * 0.04} color={category.color} colorRgb={colorRgb}/>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface SkillTagProps {
  label: string;
  delay: number;
  color: string;
  colorRgb: string;
  gradient: string;
}

// Composant pour afficher une étiquette de compétence avec animation
const SkillTag: React.FC<SkillTagProps> = ({ label, delay, color, colorRgb, gradient }) => {
  return (
    <div className="skill-tag" style={{
        '--delay': `${delay}s`,
        '--color': color,
        '--color-rgb': colorRgb,
        '--gradient': gradient,
      } as React.CSSProperties}>
      <span className="skill-tag-dot"></span>
      <span>{label}</span>
    </div>
  );
};

interface ToolChipProps {
  label: string;
  delay: number;
  color: string;
  colorRgb: string;
}

// Composant pour afficher une puce d'outil avec animation
const ToolChip: React.FC<ToolChipProps> = ({ label, delay, color, colorRgb }) => {
  return (
    <div className="tool-chip" style={{
        '--delay': `${delay}s`,
        '--color': color,
        '--color-rgb': colorRgb,
      } as React.CSSProperties}>
      <ChevronRight size={14} />
      <span>{label}</span>
    </div>
  );
};
