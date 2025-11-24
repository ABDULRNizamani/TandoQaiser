import React, { useEffect, useRef, useState } from 'react';
import { Heart, Users, Globe, Music, Home, Shirt } from 'lucide-react';
import './People.css';

const People = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="people" className="people" ref={sectionRef}>
      <div className="people-container">
        
        {/* Header */}
        <div className={`people-header ${isVisible ? 'visible' : ''}`}>
          <Heart className="header-icon" />
          <h2 className="people-title">Our People</h2>
          <p className="people-tagline">The Heart & Soul of Tando Qaiser</p>
        </div>

        {/* Hero Statement */}
        <div className={`hero-statement ${isVisible ? 'visible' : ''}`}>
          <p className="statement-text">
            Warm, welcoming, and <span className="highlight">proud of their roots</span> — 
            the people of Tando Qaiser embody true <span className="highlight">Sindhi hospitality</span>
          </p>
        </div>

        {/* Main Tribe Card */}
        <div className={`tribe-card ${isVisible ? 'visible' : ''}`}>
          <div className="tribe-icon-wrapper">
            <Users className="tribe-icon" />
          </div>
          <h3 className="tribe-title">The Nizamani Tribe</h3>
          <p className="tribe-description">
            The beating heart of our village — known far and wide for their legendary hospitality, 
            deep agricultural heritage, and remarkable global presence across <strong>Australia, Malaysia, 
            USA, Canada, and Europe</strong>.
          </p>
          <div className="tribe-badge">Predominantly Nizamani, enriched by diverse Sindhi families</div>
        </div>

        {/* Culture Section */}
        <div className={`culture-section ${isVisible ? 'visible' : ''}`}>
          <h3 className="culture-title">
            <Music className="inline-icon" />
            Our Living Culture
          </h3>
          <p className="culture-intro">
            Colorful, humble, and <strong>deeply rooted in Sindhi values</strong> — 
            our culture is not just tradition, it's a way of life
          </p>

          <div className="culture-grid">
            <div className="culture-item">
              <Shirt className="culture-icon" />
              <h4>Sindhi Heritage</h4>
              <p>Sindhi language, iconic <strong>Ajrak</strong> & <strong>Sindhi Topi</strong></p>
            </div>

            <div className="culture-item">
              <Heart className="culture-icon" />
              <h4>Mehmaan-nawaazi</h4>
              <p>Traditional hospitality that treats every guest like <strong>family</strong></p>
            </div>

            <div className="culture-item">
              <Music className="culture-icon" />
              <h4>Joyful Celebrations</h4>
              <p>Filled with <strong>dhol beats</strong>, dance & vibrant cultural gatherings</p>
            </div>

            <div className="culture-item">
              <Home className="culture-icon" />
              <h4>Strong Bonds</h4>
              <p>Deep family systems & unbreakable <strong>community connections</strong></p>
            </div>
          </div>
        </div>

        {/* Lifestyle Quote */}
        <div className={`lifestyle-quote ${isVisible ? 'visible' : ''}`}>
          <div className="quote-mark">"</div>
          <p className="quote-text">
            Whether it's a wedding, a festival, or a simple evening in the fields — 
            life here feels <span className="peaceful">peaceful</span> and <span className="timeless">timeless</span>
          </p>
        </div>

        {/* Global Diaspora */}
        <div className={`diaspora-card ${isVisible ? 'visible' : ''}`}>
          <Globe className="diaspora-icon" />
          <h3 className="diaspora-title">Our Global Family</h3>
          <p className="diaspora-text">
            Many families from Tando Qaiser now thrive abroad, creating a <strong>global diaspora</strong> that 
            strengthens our village, brings financial stability, and inspires the young generation to 
            <strong> pursue education</strong> and <strong>broaden their horizons</strong>.
          </p>
        </div>

        {/* Stats */}
        <div className={`stats-section ${isVisible ? 'visible' : ''}`}>
          <div className="stat-card">
            <div className="stat-number">25K - 30K</div>
            <div className="stat-label">Population</div>
          </div>
          <div className="stat-card highlight-stat">
            <div className="stat-number">∞</div>
            <div className="stat-label">Community Spirit</div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className={`closing-statement ${isVisible ? 'visible' : ''}`}>
          <p className="closing-text">
            A tight-knit community where <strong>everyone knows everyone</strong> — 
            and every visitor is treated like <span className="family-highlight">family</span> ❤️
          </p>
        </div>

      </div>
    </section>
  );
};

export default People;