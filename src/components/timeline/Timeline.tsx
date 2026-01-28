import React, { useRef } from 'react';
import { translations } from '@/constants/translations';
import { useTimelineScroll, useCardMouseTracking } from './hooks';
import type { TimelineProps, TimelineStep } from './types';
import { TimelineHeader, TimelineBackground, TimelineTrack } from './components';

import './styles/index.css';

const Timeline: React.FC<TimelineProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage].timeline;
  const sectionRef = useRef<HTMLDivElement>(null);

  const progressHeight = useTimelineScroll(sectionRef);
  const { handleCardMouseMove } = useCardMouseTracking();

  return (
    <section className="timeline-section" id="timeline" ref={sectionRef}>
      <TimelineBackground />

      <div className="timeline-container">
        <TimelineHeader tag={t.tag} title={t.title} subtitle={t.subtitle} />
          <TimelineTrack steps={t.steps as TimelineStep[]} progressHeight={progressHeight} onMouseMove={handleCardMouseMove}
            translations={{
              experiences_label: t.experiences_label,
              status_completed: t.status_completed,
              status_in_progress: t.status_in_progress,
              status_searching: t.status_searching,
            }}/>
      </div>
    </section>
  );
};

export default Timeline;
