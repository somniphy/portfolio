// import { useState, useEffect } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'


function App() {

  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Services />  
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
