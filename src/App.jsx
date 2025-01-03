import React from 'react'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
   <section className=' min-h-screen'>
    <Navbar />
    <Hero />
    <Stack />
    <Experience />
    <Projects/>
    <Footer/>
   </section>
  )
}

export default App