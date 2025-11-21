
import React from 'react';
import { Mail, Facebook, Heart, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'history', label: 'History' },
    { id: 'people', label: 'Our People' },
    { id: 'famous', label: 'Famous For' },
    { id: 'education', label: 'Education & Healthcare' },
    { id: 'community', label: 'Community' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          
          {/* About Column */}
          <div className="footer-column about-column">
            <div className="footer-logo">
              <div className="logo-circle">TQ</div>
              <div className="logo-text">
                <h3>Tando Qaiser</h3>
                <p>Heritage & Progress</p>
              </div>
            </div>
            <p className="footer-tagline">
              A place where <strong>everyone is welcomed</strong> with open hearts. 
              Experience the warmth of true Sindhi hospitality in our village.
            </p>
            <div className="footer-location">
              <MapPin className="location-icon" />
              <span>Sindh, Pakistan</span>
            </div>
          </div>

          {/* Quick Links & Contact Wrapper */}
          <div className="footer-links-wrapper">
            {/* Quick Links Column */}
            <div className="footer-column">
              <h4 className="column-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollToSection(link.id)} className="footer-link">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-column">
              <h4 className="column-title">Get In Touch</h4>
              <div className="contact-info">
                <a href="mailto:tandoqaiserr@gmail.com" className="contact-item">
                  <Mail className="contact-icon" />
                  <span>tandoqaiserr@gmail.com</span>
                </a>
                <a 
                  href="https://www.facebook.com/search/top?q=tando%20qaiser%20page" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <Facebook className="contact-icon" />
                  <span>Visit Our Facebook Page</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Tando Qaiser. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart className="heart-icon" /> for our community
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;