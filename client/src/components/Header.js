import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <h2>Nihan Najeeb P</h2>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            {/* Mobile Logo - only visible on mobile */}
            <div className="logo mobile-logo">
              <h2>Nihan Najeeb P</h2>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
            
            {/* Mobile Hamburger */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
          
          {/* Dark Mode Toggle */}
          <button 
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          
          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <ul className="nav-list mobile-dropdown">
              <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;