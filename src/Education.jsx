import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, School, Heart, Users, Sparkles, Stethoscope, Activity, Shield } from 'lucide-react';
import './Education.css';

const Education = () => {
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

  const schools = [
    { name: "Haji Muhammad Khan Memorial School", type: "Private Primary" },
    { name: "Government Boys Primary School", type: "Primary" },
    { name: "Government Girls Primary School", type: "Primary" },
    { name: "Government Boys High School", type: "High School" },
    { name: "Government Girls High School", type: "High School" }
  ];

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="education-container">
        
        {/* Education Section */}
        <div className={`education-block ${isVisible ? 'visible' : ''}`}>
          <div className="block-header">
            <GraduationCap className="section-icon" />
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">Our Pride, Our Future</p>
          </div>

          <div className="hero-card">
            <Sparkles className="hero-icon" />
            <h3 className="hero-title">A Model Village in Education</h3>
            <p className="hero-text">
              Tando Qaiser stands proud as a beacon of educational excellence in the region. 
              With <strong>five thriving schools</strong> serving hundreds of students, 
              we're building futures — one student at a time.
            </p>
          </div>

          <div className="schools-grid">
            {schools.map((school, index) => (
              <div 
                key={index} 
                className={`school-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <School className="school-icon" />
                <h4 className="school-name">{school.name}</h4>
                <span className="school-type">{school.type}</span>
              </div>
            ))}
          </div>

          <div className="community-support">
            <div className="support-header">
              <Heart className="support-icon" />
              <h3 className="support-title">Powered by Community Love</h3>
            </div>
            
            <div className="support-content">
              <div className="support-highlight">
                <div className="highlight-number">PKR 500,000+</div>
                <div className="highlight-label">Donated in 2025 Alone</div>
              </div>

              <div className="support-list">
                <div className="support-item">
                  <span className="bullet">✓</span>
                  <span>Overseas Nizamanis & locals invest in desks, solar systems, repairs</span>
                </div>
                <div className="support-item">
                  <span className="bullet">✓</span>
                  <span>Community members regularly visit schools to ensure quality</span>
                </div>
                <div className="support-item">
                  <span className="bullet">✓</span>
                  <span><strong>Equal support for both boys' and girls' education</strong></span>
                </div>
                <div className="support-item">
                  <span className="bullet">✓</span>
                  <span>Youth encouraged to pursue colleges, universities & global careers</span>
                </div>
              </div>
            </div>

            <div className="belief-quote">
              <div className="quote-icon">"</div>
              <p className="quote-text">Education is our <span className="real-investment">real investment</span></p>
            </div>
          </div>
        </div>

        {/* Healthcare Section */}
        <div className={`healthcare-block ${isVisible ? 'visible' : ''}`}>
          <div className="block-header">
            <Stethoscope className="section-icon healthcare-icon" />
            <h2 className="section-title">Healthcare</h2>
            <p className="section-subtitle">Always There for You</p>
          </div>

          <div className="healthcare-card">
            <div className="healthcare-badge">
              <Shield className="badge-icon" />
              <span>Government Health Center</span>
            </div>

            <div className="services-grid">
              <div className="service-item">
                <Users className="service-icon" />
                <div>
                  <h4>Qualified Doctors</h4>
                  <p>Expert medical professionals</p>
                </div>
              </div>
              <div className="service-item">
                <Activity className="service-icon" />
                <div>
                  <h4>Emergency Support</h4>
                  <p>Always ready to help</p>
                </div>
              </div>
              <div className="service-item">
                <Heart className="service-icon" />
                <div>
                  <h4>Maternal & Child Care</h4>
                  <p>Caring for families</p>
                </div>
              </div>
            </div>

            <div className="appreciation-box">
              <p className="appreciation-text">
                <Heart className="inline-heart" />
                Our dedicated medical staff is known for their <strong>commitment and availability</strong>. 
                The community actively supports maintenance, cleanliness, and ensuring a 
                <strong> safe, healthy environment for all</strong>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;