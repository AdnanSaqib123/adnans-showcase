import React from 'react';
import HeroSection from '../components/HeroSection';
import Work from './Work';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from '../components/Footer';
// import Works from './Works';
// import FAQ from './FAQ';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Work />
      <Skills />
      <About />
      <Contact />
      <Footer />
      {/* <Works />
      <FAQ /> */}
    </>
  );
};

export default Home;