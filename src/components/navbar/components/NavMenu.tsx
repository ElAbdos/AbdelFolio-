import React from 'react';
import type { MenuItem } from '../types';

interface NavMenuProps {
  menuItems: MenuItem[];
  activeSection: string;
  scrollToSection: (e: React.MouseEvent, sectionId: string) => void;
}

// Composant pour le menu de navigation
export const NavMenu: React.FC<NavMenuProps> = ({ menuItems, activeSection, scrollToSection }) => {
  return (
    <ul className="nav-menu">
      {menuItems.map((item) => (
        <li key={item.id} className="nav-item">
          <a href={item.href} className={`nav-link clickable ${activeSection === item.id ? 'active' : ''}`} onClick={(e) => scrollToSection(e, item.id)}>
            <span className="nav-link-text">{item.name}</span>
            <div className="nav-link-bg"></div>
            <div className="nav-link-underline"></div>
          </a>
        </li>
      ))}
    </ul>
  );
};
