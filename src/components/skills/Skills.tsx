import React, { useState, useEffect } from 'react';
import { translations } from '@/constants/translations';
import { SKILL_CATEGORIES } from './constants';
import type { SkillsProps } from './types';
import { use3DCardEffect } from './hooks';
import { SkillsHeader, SkillsOrbit, SkillsCard, SkillsMobileNav } from './components';

import './styles/index.css';

const Skills: React.FC<SkillsProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage].skills;
  const [activeTab, setActiveTab] = useState('realiser');

  const { cardRef, mousePosition, transform, handleMouseMove, handleMouseLeave } = use3DCardEffect();
  const skillCategories = SKILL_CATEGORIES.map(cat => ({
    ...cat,
    title: t.categories[cat.id as keyof typeof t.categories]?.title || cat.title,
    subtitle: t.categories[cat.id as keyof typeof t.categories]?.subtitle || cat.subtitle,
    description: t.categories[cat.id as keyof typeof t.categories]?.description || cat.description,
  }));

  const activeCategory = skillCategories.find(c => c.id === activeTab) || skillCategories[0];

  // Écouter l'événement de highlight depuis Projects
  useEffect(() => {
    const handleHighlight = (e: Event) => {
      const customEvent = e as CustomEvent<{ categoryId: string }>;
      const { categoryId } = customEvent.detail;

      // Vérifier que la catégorie existe et l'activer
      if (skillCategories.find(cat => cat.id === categoryId)) {
        setActiveTab(categoryId);
      }
    };

    window.addEventListener('highlightSkill', handleHighlight as EventListener);
    return () => window.removeEventListener('highlightSkill', handleHighlight as EventListener);
  }, [skillCategories]);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-grid-pattern" />

      <div className="skills-container-ultra">
        <div className="skills-header-wrapper">
          <SkillsHeader tag={t.tag} title={t.title} subtitle={t.subtitle} />
        </div>

        <div className="skills-content-grid">
          <div className="skills-nav-column">
            <SkillsOrbit categories={skillCategories} activeTab={activeTab} onTabChange={setActiveTab} currentColor={activeCategory.color}/>
          </div>

          <div ref={cardRef}>
            <SkillsCard
              category={activeCategory}
              mousePosition={mousePosition}
              transform={transform}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              sectionLabels={t.sectionLabels}
            />
          </div>
        </div>

        <SkillsMobileNav categories={skillCategories} activeTab={activeTab} onTabChange={setActiveTab}/>
      </div>
    </section>
  );
};

export default Skills;
