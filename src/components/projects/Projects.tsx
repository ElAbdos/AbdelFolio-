import React, { useEffect } from 'react';
import { translations } from '@/constants/translations';
import { useCarousel } from './hooks';
import { PROJECTS_DATA } from './constants';
import type { ProjectsProps } from './types';
import { ProjectsHeader, Carousel3D, CarouselIndicators } from './components';
import './styles/index.css';

const Projects: React.FC<ProjectsProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage].projects;

  const projects = PROJECTS_DATA.map(project => {
    const translatedItem = t.items.find((item: any) => item.id === project.id);
    return {
      ...project,
      ...(translatedItem || {}),
      image: project.image, // Toujours conserver l'image depuis PROJECTS_DATA
    };
  });

  const { activeIndex, nextProject, prevProject, selectProject, getCardStyle } = useCarousel(projects.length);

  // Gère le clic sur une compétence dans le carrousel
  const handleSkillClick = (categoryId: string) => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const event = new CustomEvent('highlightSkill', {
      detail: { categoryId }
    });
    window.dispatchEvent(event);
  };

  // Gère la navigation au clavier pour le carrousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevProject();
      } else if (e.key === 'ArrowRight') {
        nextProject();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevProject, nextProject]);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <ProjectsHeader tag={t.tag} title={t.title} subtitle={t.subtitle} />

        <Carousel3D projects={projects} activeIndex={activeIndex} onPrev={prevProject} onNext={nextProject}
          onSelect={selectProject} getCardStyle={getCardStyle} viewSkillsLabel={t.skillsUsed || 'Compétences utilisées'}
          technicalStackLabel={t.technicalStack || 'Stack technique'} onSkillClick={handleSkillClick} currentLanguage={currentLanguage}/>

        <CarouselIndicators count={projects.length} activeIndex={activeIndex} onSelect={selectProject}/>
      </div>
    </section>
  );
};

export default Projects;
