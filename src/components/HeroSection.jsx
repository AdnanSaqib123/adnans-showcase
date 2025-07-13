import React from 'react';
import { useState, useEffect } from 'react';
import profileImg from '../assets/images/profile1.jpg';
import resumePDF from '../assets/MuhammadAdnanSaqibResume.pdf';
import { Download } from 'phosphor-react';

const HeroSection = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const fullName = "Muhammad Adnan Saqib";
  const subtitles = [
    "Front End Web Developer",
    "React Developer",
  ];

  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [currentSubtitleTextIndex, setCurrentSubtitleTextIndex] = useState(0);
  const [isDeletingName, setIsDeletingName] = useState(false);
  const [isDeletingSubtitle, setIsDeletingSubtitle] = useState(false);

  // Name typing animation
  useEffect(() => {
    if (!isDeletingName) {
      if (currentNameIndex < fullName.length) {
        const timeout = setTimeout(() => {
          setDisplayedName(prev => prev + fullName[currentNameIndex]);
          setCurrentNameIndex(prev => prev + 1);
        }, 150);

        return () => clearTimeout(timeout);
      } else {

        setTimeout(() => setIsDeletingName(true), 2000);
      }
    } else {
      if (displayedName.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedName(prev => prev.slice(0, -1));
        }, 100);

        return () => clearTimeout(timeout);
      } else {
        setIsDeletingName(false);
        setCurrentNameIndex(0);
      }
    }
  }, [currentNameIndex, isDeletingName, displayedName]);

  // Subtitle typing animation
  useEffect(() => {
    if (!isDeletingSubtitle) {
      const currentSubtitle = subtitles[currentSubtitleTextIndex];
      if (currentSubtitleIndex < currentSubtitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedSubtitle(prev => prev + currentSubtitle[currentSubtitleIndex]);
          setCurrentSubtitleIndex(prev => prev + 1);
        }, 100);

        return () => clearTimeout(timeout);
      } else {

        setTimeout(() => setIsDeletingSubtitle(true), 1500);
      }
    } else {
      if (displayedSubtitle.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedSubtitle(prev => prev.slice(0, -1));
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        setIsDeletingSubtitle(false);
        setCurrentSubtitleIndex(0);
        setCurrentSubtitleTextIndex(prev => (prev + 1) % subtitles.length);
      }
    }
  }, [currentSubtitleIndex, isDeletingSubtitle, displayedSubtitle, currentSubtitleTextIndex]);

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

      <div className="font-bold text-green-500 mb-2 leading-tight text-center max-w-6xl text-[clamp(2.5rem,8vw,4.5rem)]">
        <span className="border-r-2 border-green-500 animate-blink">
          {displayedName}
        </span>
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
          I'm a passionate{' '}
          <span className="text-green-500 font-semibold border-r-2 border-green-500 animate-blink">
            {displayedSubtitle}
          </span>
        </p>
        <p className="text-slate-400 text-lg my-2 text-center">
          I specialize in building interactive, user-friendly web applications with modern technologies.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          className="bg-white text-slate-900 py-4 px-8 rounded-full font-medium border-none cursor-pointer flex items-center gap-2 transition-all duration-300 shadow hover:bg-slate-100 hover:scale-105 primary-button"
          onClick={handleLetsTalkClick}
        >
          <span>👋</span>
          <span>Let's talk</span>
        </button>
        <a
          href={resumePDF}
          download="MuhammadAdnanSaqib-Resume.pdf"
          className="bg-slate-900 text-white py-4 px-8 rounded-full font-medium border border-slate-600 cursor-pointer flex items-center gap-2 transition-all duration-300 hover:bg-slate-800 hover:scale-105 secondary-button"
        >
          <span>Download CV</span>
          <Download className='w-5 h-5' />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;