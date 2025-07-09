import React from 'react';
import profileImg from '../assets/images/profile1.jpg';

const HeroSection = () => {
  // Smooth scroll to contact section
  const handleLetsTalkClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
      {/* Profile Section */}
      <div className="mb-8 flex flex-col items-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover mb-4 shadow-lg border-4 border-orange-400 animate-pulse-glow"
        />
        <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-full px-4 py-2 border border-slate-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-300">Available for opportunities</span>
        </div>
      </div>

      {/* Hero Text */}
      <div className="font-bold text-white mb-2 leading-tight text-center max-w-4xl text-[clamp(2.5rem,8vw,4.5rem)]">
        Muhammad Adnan Saqib
      </div>
      <div className="font-bold text-white mb-6 leading-tight text-center max-w-4xl text-3xl">
        Welcome to
        <br />
        <span className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
          my digital front end showcase
        </span>
      </div>

      <div className="mb-12">
        <p className="text-slate-400 text-lg my-2 text-center">
          I'm a passionate Front End Web Developer.
        </p>
        <p className="text-slate-400 text-lg my-2 text-center">
          I specialize in building interactive, user-friendly web applications with modern technologies.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          className="bg-white text-slate-900 py-4 px-8 rounded-full font-medium border-none cursor-pointer flex items-center gap-2 transition-all duration-300 shadow hover:bg-slate-100 hover:scale-105 primary-button"
          onClick={handleLetsTalkClick}
        >
          <span>👋</span>
          <span>Let's talk</span>
        </button>
        <a
          href="/MuhammadAdnanSaqibResume.pdf"
          download
          className="bg-slate-900 text-white py-4 px-8 rounded-full font-medium border border-slate-600 cursor-pointer flex items-center gap-2 transition-all duration-300 hover:bg-slate-800 hover:scale-105 secondary-button"
        >
          <span>Download CV</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection; 