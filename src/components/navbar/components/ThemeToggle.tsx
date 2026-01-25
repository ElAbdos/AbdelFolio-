import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

// Composant pour basculer entre le thème clair et sombre
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button onClick={onToggle} aria-label="Toggle theme" className="btn-theme clickable">
      <div className="btn-bg"></div>
      <span className={`btn-icon ${isDark ? '' : 'rotated'}`}>
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </button>
  );
};
