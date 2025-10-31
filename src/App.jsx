import React, { useState } from 'react'
// import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar';
import Home from './section/Home';
import About from './section/About';
import Skills from './section/Skills';
import Project from './section/Project';
import Experience from './section/Experience';
import Testimonials from './section/Testimonials';
import Contact from './section/Contact';
import Footer from './section/Footer';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';

const App = () => {

  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className='relative gradient text-white'>
          <CustomCursor />
          {/* <ParticleBackground /> */}

          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
