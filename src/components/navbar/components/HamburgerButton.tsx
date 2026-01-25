import React from 'react';
import { Menu, X } from 'lucide-react';

interface HamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

// Bouton mobile pour ouvrir/fermer le menu
export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <button onClick={onToggle} className="btn-hamburger clickable" aria-label="Toggle menu">
      <div className="btn-bg"></div>
      <span className="hamburger-icon">
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </span>
    </button>
  );
};
