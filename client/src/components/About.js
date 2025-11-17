import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate and self-motivated 15-year-old UI/UX Designer and Frontend Developer 
              based in Kerala, India. With a strong foundation in modern web technologies, I am 
              dedicated to creating intuitive, engaging, and visually appealing digital experiences.
            </p>
            <p>
              Currently working as a freelancer, I specialize in crafting beautiful and functional 
              digital experiences. My approach combines creative design thinking with technical 
              implementation to deliver solutions that not only look great but also provide 
              exceptional user experiences.
            </p>
            <p>
              I'm always eager to learn and take on new challenges. Whether it's designing a new 
              interface or building a responsive website, I bring dedication and creativity to 
              every project I work on.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>15</h3>
              <p>Years Old</p>
            </div>
            <div className="stat-card">
              <h3>90%</h3>
              <p>UI/UX Proficiency</p>
            </div>
            <div className="stat-card">
              <h3>95%</h3>
              <p>HTML Proficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;