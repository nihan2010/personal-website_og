import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "React", level: 75 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Photoshop", level: 80 },
        { name: "Illustrator", level: 75 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Development & Others",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "WordPress", level: 80 },
        { name: "SEO Optimization", level: 75 },
        { name: "Performance Optimization", level: 70 },
        { name: "Cross-browser Testing", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;