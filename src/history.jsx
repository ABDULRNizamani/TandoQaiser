import React, { useEffect, useRef, useState } from 'react';
import { Scroll, Castle, User, MapPin } from 'lucide-react';
import './History.css';

const History = () => {
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
    <section id="history" className="history" ref={sectionRef}>
      <div className="history-container">
        <div className={`history-header ${isVisible ? 'visible' : ''}`}>
          <Scroll className="header-icon" />
          <h2 className="history-title">Our Rich History</h2>
          <p className="history-subtitle">A legacy dating back to the 18th century</p>
        </div>

        <div className="history-content">
          <div className={`history-timeline ${isVisible ? 'visible' : ''}`}>
            <div className="timeline-item">
              <div className="timeline-icon">
                <MapPin />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-year">1750 AD</h3>
                <h4 className="timeline-title">The Arrival</h4>
                <p className="timeline-text">
                  During the Kalhora rule, <strong>Qaiser Khan Nizamani</strong>, a distinguished Baloch leader and descendant of Nizam Sakhi, journeyed to Sindh. His arrival marked the beginning of a remarkable legacy that would shape the region for centuries to come.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <User />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-year">Mid 18th Century</h3>
                <h4 className="timeline-title">A Father's Love</h4>
                <p className="timeline-text">
                  Following the tragic loss of his beloved son, <strong>Ghulam Ali</strong>, Qaiser Khan made a profound decision. In memory of his son, he chose to establish roots at this very location, transforming personal grief into a lasting community.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <Castle />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-year">Foundation Era</h3>
                <h4 className="timeline-title">Birth of Tando Qaiser</h4>
                <p className="timeline-text">
                  Qaiser Khan constructed a fortified settlement known as a <strong>"Tando"</strong> - a protected stronghold that served as both home and sanctuary. This fortress settlement grew and flourished, eventually becoming the village we know today as <strong>Tando Qaiser</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className={`history-card ${isVisible ? 'visible' : ''}`}>
            <div className="card-icon">
              <Scroll />
            </div>
            <h3 className="card-title">The Name's Meaning</h3>
            <p className="card-text">
              "Tando" in the local dialect refers to a fortified settlement or stronghold. Combined with "Qaiser," the name honors our founder and symbolizes strength, protection, and community - values that continue to define our village centuries later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;