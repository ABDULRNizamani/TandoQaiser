import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Home, BookOpen, Users, Award,  Building2, MessagesSquare } from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const scrollToSection = (sectionId) => {
  // Map 'about' to 'history'
  const targetId = sectionId === 'about' ? 'history' : sectionId;

  // Handle home - scroll to top
  if (sectionId === 'home') {
    smoothScrollTo(window.pageYOffset, 0, 800);
    setActiveSection('home');
    setIsMobileMenuOpen(false);
    return;
  }
  
  // Map 'contact' to footer (scroll to bottom)
  if (sectionId === 'contact') {
    const start = window.pageYOffset;
    const end = document.documentElement.scrollHeight - window.innerHeight;
    smoothScrollTo(start, end, 800);
    return;
  }
  
  const element = document.getElementById(targetId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    // Use custom smooth scroll instead of native
    smoothScrollTo(window.pageYOffset, offsetPosition, 800);
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  }
};

// Add this custom smooth scroll function
const smoothScrollTo = (start, end, duration) => {
  const change = end - start;
  const startTime = performance.now();
  
  const easeInOutCubic = (t) => {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  
  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easedProgress = easeInOutCubic(progress);
    window.scrollTo(0, start + change * easedProgress);
    
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };
  
  requestAnimationFrame(animateScroll);
};

  


  // Desktop: Only essential items
  const desktopNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  // Mobile: All items organized
  const mobileNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'history', label: 'History', icon: BookOpen },
    { id: 'people', label: 'Our People', icon: Users },
    { id: 'famous', label: 'Famous For', icon: Award },
    { id: 'education', label: 'Education & Health', icon: Building2 },
    { id: 'community', label: 'Community', icon: MessagesSquare },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand" onClick={() => scrollToSection('home')}>
            <div className="logo">TQ</div>
            <div className="brand-text">
              <span className="brand-name">Tando Qaiser</span>
              <span className="brand-tagline">Heritage & Progress</span>
            </div>
          </div>

          <ul className="nav-menu desktop-only">
            {desktopNavItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-brand">
            <div className="logo-mobile">TQ</div>
            <div>
              <h3>Tando Qaiser</h3>
              <p>Explore Our Village</p>
            </div>
          </div>
          <button 
            className="close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav">
         {mobileNavItems.map((item, index) => {
           const Icon = item.icon;
           const isActive = activeSection === item.id;
           return (
             <button
               key={item.id}
               onClick={() => scrollToSection(item.id)}
               className={`mobile-nav-item ${isActive ? 'active' : ''}`}
               
             >
               <span className="nav-icon">
                 <Icon 
                   size={22} 
                   strokeWidth={isActive ? 2.5 : 2}
                   className={isActive ? 'text-current' : ''}
                 />
               </span>
               <span className="nav-label">{item.label}</span>
               <span className="nav-arrow">→</span>
             </button>
           );
         })}
       </nav>
      </div>
    </>
  );
};

export default Navbar;