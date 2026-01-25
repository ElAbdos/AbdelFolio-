import React from 'react';

interface LogoProps {
  scrollToSection: (e: React.MouseEvent, sectionId: string) => void;
}

// Composant Logo cliquable pour naviguer vers la section "home"
export const Logo: React.FC<LogoProps> = ({ scrollToSection }) => {
  return (
    <a href="#home" role="button" onClick={(e) => scrollToSection(e, 'home')} className="logo-container group clickable">
      <div className="logo" aria-hidden="false">
        Abdel<span className="logo-folio">Folio</span>
      </div>
      <div className="logo-underline"></div>
    </a>
  );
};
