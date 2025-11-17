import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Have a project in mind or just want to say hi? Feel free to reach out! 
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you need UI/UX design or frontend development, I'd love to help bring 
              your ideas to life.
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
                  <a href="https://github.com/nihan2010" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/nihan-najeeb-b287b22b9/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/nhnneei/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
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
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="form-message success">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="form-message error">
                  Sorry, there was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;