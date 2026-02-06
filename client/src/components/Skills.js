import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState({});
  const [visibleCategories, setVisibleCategories] = useState({});

  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(prev => ({
              ...prev,
              [entry.target.dataset.skill]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-skill]').forEach(el => {
      skillObserver.observe(el);
    });

    return () => skillObserver.disconnect();
  }, []);

  useEffect(() => {
    const categoryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCategories(prev => ({
              ...prev,
              [entry.target.dataset.category]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-category]').forEach(el => {
      categoryObserver.observe(el);
    });

    return () => categoryObserver.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 75 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Design",
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Prototyping", level: 80 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Chrome DevTools", level: 85 },
        { name: "Photoshop", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`skill-category ${visibleCategories[categoryIndex] ? 'visible' : ''}`}
              data-category={categoryIndex}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`skill-item ${visibleSkills[`${categoryIndex}-${skillIndex}`] ? 'visible' : ''}`}
                    data-skill={`${categoryIndex}-${skillIndex}`}
                    style={{ '--delay': `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s` }}
                  >
                    <div className="skill-content">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          '--progress': `${skill.level}%`,
                          width: visibleSkills[`${categoryIndex}-${skillIndex}`] ? `${skill.level}%` : '0%'
                        }}
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