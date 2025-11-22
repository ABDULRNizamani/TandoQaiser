import { useState } from 'react'
import './App.css'
import Nav from "./navBar"
import Hero from "./hero"
import History from "./history"
import People from "./people"
import FamousFor from "./FamousFor"
import Education from "./Education"
import Community from './Comunity'
import Footer from './Footer'
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
