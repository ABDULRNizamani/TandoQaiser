import React, { useEffect, useRef, useState } from 'react';
import { Apple, Wheat, Wind, Sunset } from 'lucide-react';
import './FamousFor.css';

const FamousFor = () => {
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

  const features = [
    {
      icon: Apple,
      title: "Mangoes Exported Worldwide",
      description: "Tando Qaiser is celebrated across continents for its premium Sindhri and Chaunsa mangoes. Each bite tells a story of sun-kissed orchards, careful cultivation, and the rich, golden sweetness that has made our mangoes a global treasure.",
      color: "#f59e0b"
    },
    {
      icon: Wheat,
      title: "Fresh Crops & Produce",
      description: "From golden wheat fields swaying in the breeze to lush guava orchards, thriving sugarcane, soft cotton, and vibrant vegetables — our land is generous and our farmers dedicated. Tando Qaiser stands proud as an agricultural powerhouse of the region.",
      color: "#10b981"
    },
    {
      icon: Wind,
      title: "Clean Air & Peaceful Environment",
      description: "Step into a world where open fields stretch to the horizon, where greenery blankets the earth, and pollution is a distant memory. Here, every breath is fresh, every moment is calm, and life flows in harmony with nature.",
      color: "#3b82f6"
    },
    {
      icon: Sunset,
      title: "Beautiful Evenings",
      description: "As the sun dips below the fields painting the sky in shades of amber and gold, cool winds whisper through the village. Our evenings are not just a time of day — they are moments of pure magic, where peace settles like a gentle embrace.",
      color: "#ef4444"
    }
  ];

  return (
    <section id="famous" className="famous" ref={sectionRef}>
      <div className="famous-container">
        
        <div className={`famous-header ${isVisible ? 'visible' : ''}`}>
          <div className="header-subtitle">What Makes Us Special</div>
          <h2 className="famous-title">Famous For</h2>
          <p className="header-description">
            Four treasures that define our village and touch hearts around the world
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="feature-icon-wrapper" style={{ background: feature.color }}>
                <feature.icon className="feature-icon" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-accent" style={{ background: feature.color }}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FamousFor;