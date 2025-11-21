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
import SEO from './seo'
function App() {
 

  return (
    <>
    <SEO />
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
    </>
    
  )
}

export default App
