import React from 'react';
import type { TimelineStep, ProfessionalExperience } from '../types';
import { ICON_MAP } from '../constants';
import { Briefcase, Search } from 'lucide-react';

interface TimelineItemProps {
  step: TimelineStep;
  index: number;
  progressHeight: number;
  totalSteps: number;
  onMouseMove: (e: MouseEvent, el: HTMLElement | null) => void;
  translations: {
    experiences_label: string;
    status_completed: string;
    status_in_progress: string;
    status_searching: string;
  };
}

const ExperienceCard: React.FC<{ exp: ProfessionalExperience; translations: TimelineItemProps['translations'] }> = ({ exp, translations }) => {
  const getStatusBadge = () => {
    switch (exp.status) {
      case 'completed':
        return <span className="exp-status completed">✓ {translations.status_completed}</span>;
      case 'in-progress':
        return <span className="exp-status in-progress">● {translations.status_in_progress}</span>;
      case 'searching':
        return <span className="exp-status searching"><Search size={12} /> {translations.status_searching}</span>;
    }
  };

  return (
    <div className={`timeline-experience ${exp.status === 'searching' ? 'searching' : ''}`}>
      <div className="exp-header">
        <div className="exp-company">
          {exp.status !== 'searching' && <Briefcase size={14} />}
          <span className="exp-company-name">{exp.company}</span>
        </div>
        {getStatusBadge()}
      </div>
      <div className="exp-position">{exp.position}</div>
      <div className="exp-duration">{exp.duration}</div>
      <p className="exp-description">{exp.description}</p>
    </div>
  );
};

export const TimelineItem: React.FC<TimelineItemProps> = ({step, index, progressHeight, totalSteps, onMouseMove, translations}) => {
  const isEven = index % 2 === 0;
  const isReached = progressHeight > ((index + 0.5) / totalSteps) * 100;

  return (
    <div className={`timeline-item ${isEven ? 'left' : 'right'}`}>
      <div className="timeline-content-wrapper" ref={(el) => {
          if (el) {
            el.addEventListener('mousemove', (e) => onMouseMove(e, el));
          }
        }}>
        <span className="arrow"></span>
        <span className="timeline-year">
          {step.year}
        </span>
        <h3 className="timeline-item-title">{step.title}</h3>
        <p className="timeline-item-desc">{step.description}</p>

        {step.experiences && step.experiences.length > 0 && (
          <div className="timeline-experiences">
            <div className="experiences-label">{translations.experiences_label}</div>
            {step.experiences.map((exp, expIndex) => (
              <ExperienceCard key={expIndex} exp={exp} translations={translations} />
            ))}
          </div>
        )}
      </div>
      <div className={`timeline-dot ${isReached || index === 0 ? 'active' : ''}`}>
        {ICON_MAP[step.icon] || ICON_MAP.Star}
      </div>
    </div>
  );
};
