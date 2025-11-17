import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nihan Najeeb P</h3>
            <p>
              15-year-old UI/UX Designer & Frontend Developer from Kerala, India. 
              Crafting beautiful and functional digital experiences.
            </p>
            <div className="social-links">
              <a href="https://github.com/nihan2010" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nihan-najeeb-b287b22b9/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/nhnneei/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="mailto:nihannajeebpmkd@gmail.com">
                Email
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul className="footer-links">
              <li>React & JavaScript</li>
              <li>Node.js & Express</li>
              <li>MongoDB & MySQL</li>
              <li>Python & Django</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <button onClick={scrollToTop} className="back-to-top">
              ↑ Back to Top
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Nihan Najeeb P. All rights reserved.</p>
          <p>Built with React and lots of ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;