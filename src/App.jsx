import { useState } from 'react'
import React from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <div className='App'> 
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;