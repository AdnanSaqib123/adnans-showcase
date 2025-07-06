import React from 'react';
import HeroSection from '../components/HeroSection';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Courses from './Courses';
import About from './About';
import Contact from './Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Work />
      <Skills />
      <Education />
      <Courses />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;