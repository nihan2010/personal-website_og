import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Royal Decorations Website",
      description: "A beautiful and responsive website for an event decoration service. Features elegant design, service showcase, gallery, and contact functionality with modern UI/UX principles.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
      liveUrl: "https://royaldecorations.github.io/site/",
      githubUrl: "https://github.com/nihannajeeb/royal-decorations",
      featured: true
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing UI/UX design and development skills. Features smooth animations, clean design, and optimized user experience.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "UI/UX Design"],
      liveUrl: "https://nihannajeeb.github.io/portfolio/",
      githubUrl: "https://github.com/nihannajeeb/portfolio",
      featured: true
    },
    {
      title: "E-Commerce UI Design",
      description: "Modern e-commerce website UI design with clean aesthetics, intuitive navigation, and user-friendly shopping experience design.",
      image: "/api/placeholder/400/250",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      liveUrl: "https://figma.com/design-link",
      githubUrl: "https://github.com/nihannajeeb/ecommerce-ui",
      featured: false
    },
    {
      title: "Restaurant Website",
      description: "Responsive restaurant website with elegant design, menu showcase, online reservation system, and location integration.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "https://restaurant-demo.com",
      githubUrl: "https://github.com/nihannajeeb/restaurant-site",
      featured: false
    },
    {
      title: "Mobile App UI Kit",
      description: "Comprehensive UI kit for mobile applications featuring modern components, consistent design system, and multiple screen designs.",
      image: "/api/placeholder/400/250",
      technologies: ["Figma", "UI Design", "Design System", "Mobile UX"],
      liveUrl: "https://figma.com/ui-kit-link",
      githubUrl: "https://github.com/nihannajeeb/mobile-ui-kit",
      featured: false
    },
    {
      title: "Landing Page Collection",
      description: "Collection of modern landing pages for various industries with focus on conversion optimization and user engagement.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      liveUrl: "https://landing-pages-demo.com",
      githubUrl: "https://github.com/nihannajeeb/landing-pages",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card featured">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Project Image</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="other-projects-title">Other Notable Projects</h3>
        <div className="other-projects">
          {otherProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h4 className="project-title">{project.title}</h4>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;