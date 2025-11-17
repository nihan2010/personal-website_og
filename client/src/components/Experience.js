import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance UI/UX Designer & Frontend Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      description: "Working as a freelancer creating beautiful and functional digital experiences. Specializing in UI/UX design and frontend development for various clients.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma", "Bootstrap"]
    },
    {
      title: "Student & Self-Learner",
      company: "NHSS Kolathur",
      period: "2021 - Present",
      description: "Currently pursuing 11th standard education while continuously learning modern web technologies and design principles through self-study and online resources.",
      technologies: ["UI/UX Design", "HTML", "CSS", "JavaScript", "React"]
    }
  ];

  const education = [
    {
      degree: "Higher Secondary Education (Science)",
      institution: "NHSS Kolathur",
      period: "2021 - Present",
      description: "Currently pursuing 11th standard with a focus on science subjects, while simultaneously developing skills in UI/UX design and frontend development."
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="experience-content">
          <div className="experience-section">
            <h3 className="subsection-title">Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="job-title">{exp.title}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="period">{exp.period}</p>
                    <p className="description">{exp.description}</p>
                    <div className="technologies">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education-section">
            <h3 className="subsection-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="degree">{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <p className="period">{edu.period}</p>
                    <p className="description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;