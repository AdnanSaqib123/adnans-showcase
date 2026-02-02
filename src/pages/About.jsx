import React from 'react';
import profile2 from '../assets/images/profile2.jpg';

const About = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <section id="about" className="flex flex-col items-center justify-center px-4 py-16 bg-transparent">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Content Section */}
          <div className="flex flex-col gap-4 order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">About Me</h2>
            <p className="text-green-500 text-lg font-semibold mb-4 text-center md:text-left">Passionate Frontend Web Developer</p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Enthusiastic and detail-driven Front-End Web Developer with over 6 months of hands-on experience in creating modern, responsive, and pixel-perfect web applications. Skilled in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, and Vue.js, with a solid understanding of UI/UX principles and API integration.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Passionate about building clean, efficient, and visually engaging interfaces that deliver seamless user experiences. A fast learner and collaborative team player, eager to explore new technologies and contribute to impactful digital products.
            </p>
          </div>
          {/* Image Section */}
          <div data-aos="zoom-in" className="flex justify-center items-center order-2 mb-8 md:mb-0">
            <div className="w-72 h-80 bg-gradient-to-br from-orange-400 to-pink-500 rounded-md p-1 flex items-center justify-center shadow-2xl animate-pulse-glow overflow-hidden transform transition-all duration-500 ease-out hover:rotate-x-12 hover:rotate-y-6 hover:scale-105 hover:shadow-3xl">
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
    </div>
  );
};

export default About;
