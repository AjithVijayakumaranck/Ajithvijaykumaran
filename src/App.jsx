import React, { useEffect, useState } from 'react'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {

    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Clean up when the component is unmounted or menu is toggled
      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.body.style.overflow = "auto"; // Reset overflow when unmounting
      };
    }, []);
  return (
   <section className=' min-h-screen'>
    <Navbar isScrolled={isScrolled}/>
    <Hero />
    <Stack />
    <Experience />
    <Projects/>
    <Footer isScrolled = {isScrolled}/>
   </section>
  )
}

export default App