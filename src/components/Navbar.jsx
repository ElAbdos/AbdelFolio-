import React, { useState, useEffect, useRef } from 'react';
import '../css/Navbar.css';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { translations } from '../constants/translations';

const Navbar = ({ isDark, setIsDark, currentLanguage, setCurrentLanguage }) => {
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const languageRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const t = translations[currentLanguage].nav;
    const languages = ['FR', 'EN'];

    const menuItems = React.useMemo(() => [
        { name: t.home, href: '#home', id: 'home' },
        { name: t.skills, href: '#skills', id: 'skills' },
        { name: t.projects, href: '#projects', id: 'projects' },
        { name: t.contact, href: '#contact', id: 'contact' }
    ], [t.home, t.skills, t.projects, t.contact]);

    const languageConfig = {
        FR: { flag: '🇫🇷', label: 'Français' },
        EN: { flag: '🇬🇧', label: 'English' }
    };

    /* =========================================================================
       EFFET : Gestion du scroll
       ========================================================================= */
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            const sections = menuItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled, menuItems]);

    /* =========================================================================
       EFFET : Fermeture des menus au click outside
       ========================================================================= */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (languageRef.current && !languageRef.current.contains(e.target)) {
                setShowLanguageMenu(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && !e.target.closest('.btn-hamburger')) {
                setShowMobileMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    /* =========================================================================
       FONCTIONS
       ========================================================================= */
    const toggleTheme = () => {setIsDark(!isDark);};
    const toggleLanguageMenu = () => {setShowLanguageMenu(!showLanguageMenu);};

    const selectLanguage = (lang) => {
        setCurrentLanguage(lang);
        setShowLanguageMenu(false);
    };

    const toggleMobileMenu = () => {setShowMobileMenu(!showMobileMenu);};

    /* ----- Animation -> Navigation vers une section ----- */
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId);
            setShowMobileMenu(false);
        }
    };
    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <a href="#home" role="button" onClick={(e) => scrollToSection(e, 'home')} className="logo-container group clickable">
                    <div className="logo" aria-hidden="false">
                        Abdel<span className="logo-folio">Folio</span>
                    </div>
                    <div className="logo-underline"></div>
                </a>

                {/* ----- Menu PC ----- */}
                <ul className="nav-menu">{
                    menuItems.map((item) => (
                        <li key={item.id} className="nav-item">
                            <a href={item.href} className={`nav-link clickable ${activeSection === item.id ? 'active' : ''}`} onClick={(e) => scrollToSection(e, item.id)}>
                                <span className="nav-link-text">{item.name}</span>
                                <div className="nav-link-bg"></div>
                                <div className="nav-link-underline"></div>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="actions">
                    <button onClick={toggleTheme} aria-label="Toggle theme" className="btn-theme clickable">
                        <div className="btn-bg"></div>
                        <span className={`btn-icon ${isDark ? '' : 'rotated'}`}>
                            {isDark ? <Moon size={18} /> : <Sun size={18} />}
                        </span>
                    </button>
                    <div className="language-wrapper" ref={languageRef}>
                        <button onClick={toggleLanguageMenu} className="btn-language clickable">
                            <div className="btn-bg"></div>
                            <span className="btn-language-content">
                                <span className="language-flag">{languageConfig[currentLanguage].flag}</span>
                                {currentLanguage}
                                <span className={`language-arrow ${showLanguageMenu ? 'rotate' : ''}`}>▼</span>
                            </span>
                        </button>
                        <div className={`language-dropdown ${showLanguageMenu ? 'show' : ''}`}>
                            {languages.map((lang) => (
                                <button key={lang} onClick={() => selectLanguage(lang)} className={`language-option clickable ${currentLanguage === lang ? 'active' : ''}`}>
                                    <span className="language-option-flag">{languageConfig[lang].flag}</span>
                                    <span className="language-option-text">{languageConfig[lang].label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* ----- Bouton hamburger ----- */}
                    <button onClick={toggleMobileMenu} className="btn-hamburger clickable" aria-label="Toggle menu">
                        <div className="btn-bg"></div>
                        <span className="hamburger-icon">
                            {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
                        </span>
                    </button>
                </div>
            </nav>
            {/* ----- Menu mobile ----- */}
            <div className={`mobile-menu ${showMobileMenu ? 'show' : ''}`} ref={mobileMenuRef}>
                <ul className="mobile-menu-list">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <a href={item.href} className={`mobile-menu-link clickable ${activeSection === item.id ? 'active' : ''}`} onClick={(e) => scrollToSection(e, item.id)}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {showMobileMenu && (
                <div className="mobile-menu-overlay" onClick={() => setShowMobileMenu(false)} />
            )}
        </>
    );
};
export default Navbar;