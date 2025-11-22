import React, { useEffect, useState } from 'react';
import { Wheat, GraduationCap, Users } from 'lucide-react';
import HeroIm from "./assets/hero.png"
import './Hero.css';

const Hero = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Force a reflow before adding the class
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-background">
        <img 
          src={HeroIm}
          alt="Tando Qaiser Village"
          className="hero-image"
          loading="eager"
        />
      </div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-title">
          Welcome to <span className="highlight">Tando Qaiser</span>
        </h1>

        <p className="hero-description">
          A modern village where <strong className='st1'>education</strong> and <strong className='st2'>argiculture</strong> thrive side by side
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <Wheat className="stat-icon" />
            <span className="stat-label">Agriculture</span>
          </div>
          <div className="stat-item">
            <GraduationCap className="stat-icon" />
            <span className="stat-label">Education</span>
          </div>
          <div className="stat-item">
            <Users className="stat-icon" />
            <span className="stat-label">Community</span>
          </div>
        </div>
      </div>

      <div className="hero-gradient-bottom"></div>
    </section>
  );
};

export default Hero;