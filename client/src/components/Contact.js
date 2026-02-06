import React, { useState } from 'react';
import './Contact.css';
import SocialIcon, { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcon';

const WHATSAPP_NUMBER = '918547137703';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const customMessage = `Hi, I'd like to get in touch.

*Name:* ${name}
*Email:* ${email}

*Message:*
${message}`;
    const encoded = encodeURIComponent(customMessage);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's build something amazing together</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Build Something Cool Together!</h3>
            <p>
              Got a wild idea for a website? Want to rant about bad UX design? Or maybe you just 
              want to chat about the latest CSS tricks? I'm all ears! Whether it's a serious project 
              or you just need someone to fix your cousin's broken website, let's make something 
              awesome happen. Fair warning: I might get way too excited about your project!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h4>Email</h4>
                <a href="mailto:nihannajeebpmkd@gmail.com">nihannajeebpmkd@gmail.com</a>
              </div>
              
              <div className="contact-method">
                <h4>Phone</h4>
                <a href="tel:+918547137703">+91 8547137703</a>
              </div>
              
              <div className="contact-method">
                <h4>Location</h4>
                <span>Moorkkanad, Malappuram, Kerala, India</span>
              </div>
              
              <div className="contact-method">
                <h4>Social Links</h4>
                <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
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
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send via WhatsApp
              </button>
              <p className="form-hint">Opens WhatsApp with your message so we can chat directly.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;