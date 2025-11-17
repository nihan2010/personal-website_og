import React from 'react';
import './Hero.css';

const Hero = () => {
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
              Hi, I'm <span className="highlight">Nihan Najeeb P</span>
            </h1>
            <p className="hero-subtitle">
              UI/UX Designer & Frontend Developer
            </p>
            <p className="hero-description">
              Crafting beautiful and functional digital experiences. 
              I turn ideas into reality with code and design. With a strong foundation in modern web 
              technologies, I am dedicated to creating intuitive, engaging, and visually appealing 
              digital experiences.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
            <div className="hero-links">
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
              <a href="tel:+918547137703">
                Phone
              </a>
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