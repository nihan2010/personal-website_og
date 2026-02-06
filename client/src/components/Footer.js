import React from 'react';
import './Footer.css';
import SocialIcon, { GitHubIcon, LinkedInIcon, InstagramIcon, EmailIcon } from './SocialIcon';

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
              Web developer specializing in creating fast, modern, and responsive websites for individuals and small businesses.
            </p>
            <div className="social-links">
              <SocialIcon 
                href="https://github.com/nihan2010" 
                icon={<GitHubIcon />} 
                label="GitHub Profile"
              />
              <SocialIcon 
                href="https://www.linkedin.com/in/nihan-najeeb-b287b22b9/" 
                icon={<LinkedInIcon />} 
                label="LinkedIn Profile"
              />
              <SocialIcon 
                href="https://www.instagram.com/nhnneei/" 
                icon={<InstagramIcon />} 
                label="Instagram Profile"
              />
              <SocialIcon 
                href="mailto:nihannajeebpmkd@gmail.com" 
                icon={<EmailIcon />} 
                label="Send Email"
              />
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Current Focus</h4>
            <ul className="footer-links">
              <li>React & JavaScript</li>
              <li>CSS Animations</li>
              <li>Responsive Design</li>
              <li>UI/UX Design</li>
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
          <p>Built with focus, discipline, and clean code.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;