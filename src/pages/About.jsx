import React from 'react';
import profile2 from '../assets/images/profile2.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-10 sm:py-24 bg-transparent">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Content Section */}
        <div className="flex flex-col gap-4 order-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">About Me</h2>
          <p className="text-green-500 text-lg font-semibold mb-2 text-center md:text-left">Passionate Frontend Web Developer</p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            I'm Front End Web Developer with 6 months of experience building responsive
            web applications using HTML, CSS, JavaScript, React.js, Vite, and Tailwind
            CSS.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Currently pursuing a BS in Computer Science while applying hands-on
            skills in API integration and UI development. Passionate about problem-solving
            and continuous learning in a collaborative environment.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center order-2 mb-8 md:mb-0">
          <div className="w-60 h-60 md:w-72 md:h-80 bg-gradient-to-br from-orange-400 to-pink-500 rounded-md p-1 flex items-center justify-center shadow-2xl animate-pulse-glow overflow-hidden transform transition-all duration-500 ease-out hover:rotate-x-12 hover:rotate-y-6 hover:scale-105 hover:shadow-3xl">
            <img
              src={profile2}
              alt="Profile"
              className="w-full h-full object-cover rounded-md transition-transform duration-500 ease-out"
              style={{ objectPosition: 'top center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;