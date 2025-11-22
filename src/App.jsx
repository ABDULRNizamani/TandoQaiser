import { useState } from 'react'
import './App.css'
import Nav from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import History from "./History.jsx"
import People from "./People.jsx"
import FamousFor from "./FamousFor.jsx"
import Education from "./Education.jsx"
import Community from './Community.jsx'
import Footer from './Footer.jsx'
import { useSEO } from './hooks/useSEO';
import HeroIm from "./assets/hero.png";
function App() {
 
  useSEO({
    title: 'Tando Qaiser - Official Village Website',
    description: 'Welcome to Tando Qaiser village. Learn about our community, culture, history, and local services.',
    keywords: 'tando qaiser, village, community, local information, pakistan, sindh, hyderabad',
    ogImage: {HeroIm}, // Replace with actual image
  });
  return (
   
    
    <div className='app'>
       <Nav />
       <Hero />
       <History />
       <People />
       <FamousFor />
       <Education />
       <Community />
       <Footer />
    </div> 
   
    
  )
}

export default App
