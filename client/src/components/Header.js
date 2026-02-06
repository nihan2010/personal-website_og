import React, { useState, useEffect } from 'react';
import './Header.css';

/* Dark mode default: read from localStorage (user preference) or default true.
   Sync with body on mount and on toggle to prevent light-mode flash. */
const getInitialDarkMode = () => {
  if (typeof window === 'undefined') return true;
  const stored = localStorage.getItem('darkMode');
  if (stored !== null) return stored === 'true';
  return true; // default dark
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Dark mode: apply to body immediately so no flash; persist preference */
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : ''}`}>
      <div className="header-container">
        {/* Single glass island: name + nav links + theme toggle */}
        <div className="nav-island">
          <div className="nav-island-logo">
            <span>Nihan Najeeb P</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button type="button" onClick={() => scrollToSection('hero')}>Home</button></li>
              <li><button type="button" onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button type="button" onClick={() => scrollToSection('about')}>About</button></li>
              <li><button type="button" onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button type="button" onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button type="button" onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </nav>

          {/* Minimalistic icon-only theme toggle (no box, no emoji) */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <svg className="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg className="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown: same glass style, no extra block */}
        {isMobileMenuOpen && (
          <ul className="nav-dropdown">
            <li><button type="button" onClick={() => scrollToSection('hero')}>Home</button></li>
            <li><button type="button" onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button type="button" onClick={() => scrollToSection('about')}>About</button></li>
            <li><button type="button" onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button type="button" onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button type="button" onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
