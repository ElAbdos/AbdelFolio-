import React from 'react';
import { Code2, Layout, Terminal, ChevronRight, FolderTree, FlaskConical, Target, Library } from 'lucide-react';
import type { SkillCategory } from '../types';
import { hexToRgb } from '../hooks';

interface SkillsCardProps {
  category: SkillCategory;
  mousePosition: { x: number; y: number };
  transform: string;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  sectionLabels: {
    technologies: string;
    frameworks: string;
    libraries: string;
    architectures: string;
    tests: string;
    methods: string;
    tools: string;
  };
}

// Composant pour afficher une carte de compétences avec effet 3D
export const SkillsCard: React.FC<SkillsCardProps> = ({category, mousePosition, transform, onMouseMove, onMouseLeave, sectionLabels}) => {
  const colorRgb = hexToRgb(category.color);
  return (
    <div className="skills-showcase">
      <div className="skill-card-3d" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} style={{
          transform, '--color': category.color, '--color-rgb': colorRgb, '--gradient': category.gradient,
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
                <span>{sectionLabels.technologies}</span>
              </h4>
              <div className="skills-tags">
                {category.languages.map((lang, idx) => (
                  <SkillTag key={idx} label={lang} delay={idx * 0.06} color={category.color} colorRgb={colorRgb} gradient={category.gradient} />
                ))}
              </div>
            </div>
          )}
            {(category.frameworks?.length ?? 0) > 0 && (
            <div className="skills-column">
              <h4 className="section-label">
                <Layout size={18} />
                <span>{sectionLabels.frameworks}</span>
              </h4>
              <div className="skills-tags">
                {category.frameworks?.map((fw, idx) => (
                  <SkillTag key={idx} label={fw} delay={idx * 0.06} color={category.color} colorRgb={colorRgb} gradient={category.gradient}/>
                ))}
              </div>
            </div>
          )}
          {(category.libraries?.length ?? 0) > 0 && (
            <div className="skills-column">
              <h4 className="section-label">
                <Library size={18} />
                <span>{sectionLabels.libraries}</span>
              </h4>
              <div className="skills-tags">
                {category.libraries!.map((lib, idx) => (
                  <SkillTag key={idx} label={lib} delay={idx * 0.06} color={category.color} colorRgb={colorRgb} gradient={category.gradient}/>
                ))}
              </div>
            </div>
          )}
          {(category.architectures?.length ?? 0) > 0 && (
            <div className="skills-column">
              <h4 className="section-label">
                <FolderTree size={18} />
                <span>{sectionLabels.architectures}</span>
              </h4>
              <div className="skills-tags">
                {category.architectures!.map((arch, idx) => (
                  <SkillTag key={idx} label={arch} delay={idx * 0.06} color={category.color} colorRgb={colorRgb} gradient={category.gradient}/>
                ))}
              </div>
            </div>
          )}
          {(category.tests?.length ?? 0) > 0 && (
            <div className="skills-column">
              <h4 className="section-label">
                <FlaskConical size={18} />
                <span>{sectionLabels.tests}</span>
              </h4>
              <div className="skills-tags">
                {category.tests!.map((test, idx) => (
                  <SkillTag key={idx} label={test} delay={idx * 0.06} color={category.color} colorRgb={colorRgb} gradient={category.gradient}/>
                ))}
              </div>
            </div>
          )}
          {(category.methods?.length ?? 0) > 0 && (
            <div className="skills-column">
              <h4 className="section-label">
                <Target size={18} />
                <span>{sectionLabels.methods}</span>
              </h4>
              <div className="skills-tags">
                {category.methods!.map((method, idx) => (
                  <SkillTag key={idx} label={method} delay={idx * 0.06} color={category.color} colorRgb={colorRgb} gradient={category.gradient}/>
                ))}
              </div>
            </div>
          )}
            {category.tools.length > 0 && (
            <div className="skills-column">
              <h4 className="section-label">
                <Terminal size={18} />
                <span>{sectionLabels.tools}</span>
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
