import React, { useEffect, useRef, useState } from 'react';
import { Heart, Users, Facebook, Video, Camera, Shield, Sparkles, CheckCircle } from 'lucide-react';
import Amir from './assets/amir.png';
import Tandoqaiser from "./assets/tandoQaiser-page.png"
import './Community.css';

const Community = () => {
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

  const careItems = [
    {
      icon: Shield,
      title: "Roads",
      items: ["Cleanliness maintained", "Timely repairs", "Public property respected"]
    },
    {
      icon: Heart,
      title: "Public Buildings",
      items: ["Community effort", "Regular donations", "Volunteer work", "Collective ownership"]
    }
  ];

  const values = [
    "Invests in education",
    "Supports quality healthcare",
    "Protects government facilities",
    "Uses modern energy solutions",
    "Maintains strong cultural values",
    "Encourages youth to study & work abroad",
    "Practices unity, generosity & responsibility"
  ];

  return (
    <section id="community" className="community" ref={sectionRef}>
      <div className="community-container">
        
        {/* Header */}
        <div className={`community-header ${isVisible ? 'visible' : ''}`}>
          <Users className="header-icon" />
          <h2 className="community-title">Community Spirit</h2>
          <p className="community-tagline">By the People, For the People</p>
        </div>

        {/* Hero Statement */}
        <div className={`hero-statement ${isVisible ? 'visible' : ''}`}>
          <Sparkles className="sparkle-icon" />
          <p className="statement-text">
            What makes Tando Qaiser truly special is how its people <strong>protect and care</strong> for 
            everything given to them. This isn't just a village — it's a <strong>living example</strong> of 
            collective guardianship.
          </p>
        </div>

        {/* Care Cards */}
        <div className="care-grid">
          {careItems.map((item, index) => (
            <div 
              key={index}
              className={`care-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <item.icon className="care-icon" />
              <h3 className="care-title">{item.title}</h3>
              <ul className="care-list">
                {item.items.map((listItem, i) => (
                  <li key={i}>
                    <CheckCircle className="check-icon" />
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Influencers Section */}
        <div className={`influencers-section ${isVisible ? 'visible' : ''}`}>
          <div className="influencers-header">
            <Camera className="influencers-icon" />
            <h3 className="influencers-title">Voices of Our Village</h3>
            <p className="influencers-subtitle">Community storytellers sharing our journey with the world</p>
          </div>

          <div className="influencer-card">
            <div className="influencer-image">
              <img 
                src={Amir} 
                alt="Amir Nizamani" 
                className="influencer-img"
              />
            </div>
            <div className="influencer-content">
              <h4 className="influencer-name">Amir Nizamani</h4>
              <p className="influencer-bio">
                A dedicated voice highlighting village challenges, celebrating community efforts, and sharing 
                everyday life through engaging videos and vlogs. Bridging the gap between needs and solutions.
              </p>
              <div className="influencer-stats">
                <div className="stat">
                  <Facebook className="stat-icon" />
                  <span><strong>25K</strong> Facebook</span>
                </div>
                <div className="stat">
                  <Video className="stat-icon" />
                  <span><strong>25K</strong> TikTok</span>
                </div>
              </div>
              <a 
                href="https://www.facebook.com/amir.nizamani.146366" 
                target="_blank" 
                rel="noopener noreferrer"
                className="influencer-link"
              >
                Visit Profile →
              </a>
            </div>
          </div>

          <div className="influencer-card reverse">
            <div className="influencer-image">
              <img 
                src={Tandoqaiser}
                alt="Tando Qaiser Page" 
                className="influencer-img"
              />
            </div>
            <div className="influencer-content">
              <h4 className="influencer-name">Tando Qaiser Page</h4>
              <p className="influencer-bio">
                Your window into village life — showcasing community activities, cultural celebrations, 
                daily lifestyle, and the heartwarming stories that make Tando Qaiser feel like home.
              </p>
              <div className="influencer-stats">
                <div className="stat">
                  <Facebook className="stat-icon" />
                  <span><strong>45K+</strong> Followers</span>
                </div>
              </div>
              <a 
                href="https://www.facebook.com/search/top?q=tando%20qaiser%20page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="influencer-link"
              >
                Visit Page →
              </a>
            </div>
          </div>
        </div>

        {/* Why We Stand Out */}
        <div className={`standout-section ${isVisible ? 'visible' : ''}`}>
          <h3 className="standout-title">Why Tando Qaiser Stands Out</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="value-icon" />
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="standout-quote">
            <p>
              Real development is not just about <strong>buildings</strong> — 
              it's about <span className="people-highlight">people who care</span> ❤️
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Community;