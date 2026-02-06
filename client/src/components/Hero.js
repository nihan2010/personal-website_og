import React from 'react';
import './Hero.css';
import SocialIcon, { GitHubIcon, LinkedInIcon, InstagramIcon, EmailIcon, PhoneIcon } from './SocialIcon';

const Hero = ({ onGetQuote }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              I help individuals and small businesses build fast, modern, and responsive websites that convert.
            </h1>
            <p className="hero-subtitle">
              Student Web Developer | Clean Design • Fast Performance • Mobile First
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={onGetQuote}
              >
                Get a Quote
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>
            <div className="hero-links">
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
              <SocialIcon 
                href="tel:+918547137703" 
                icon={<PhoneIcon />} 
                label="Call Phone"
              />
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="profile-image-wrapper">
                <img 
                  src="https://i.ibb.co/HLzPtDNQ/nihandp.png" 
                  alt="Nihan Najeeb P"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
