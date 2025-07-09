import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'courses', label: 'Courses' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu on mobile after click
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-[1000] flex flex-col items-center pt-8 pb-4 bg-slate-900/80 backdrop-blur-md w-full">
      {/* Hamburger button for mobile */}
      <button
        className="sm:hidden flex items-center px-3 py-2 rounded text-slate-300 border border-slate-600 focus:outline-none mb-2"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Nav links for desktop */}
      <div className="hidden sm:flex gap-4 sm:gap-6 md:gap-8 bg-slate-800/80 backdrop-blur-md rounded-full px-4 sm:px-8 py-2 border border-slate-600 flex-wrap max-w-full overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-slate-300 font-medium transition-colors duration-300 cursor-pointer border-b-2 border-transparent bg-none outline-none text-base px-2 py-1
              hover:text-green-500 focus:text-green-500
              ${activeSection === item.id ? 'text-green-500 border-green-500' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Nav links for mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-2 bg-slate-800/95 backdrop-blur-md rounded-xl px-4 py-4 border border-slate-600 w-11/12 max-w-xs mt-2 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-slate-300 font-medium transition-colors duration-300 cursor-pointer border-b-2 border-transparent bg-none outline-none text-lg px-2 py-2 text-left
                hover:text-green-500 focus:text-green-500
                ${activeSection === item.id ? 'text-green-500 border-green-500' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 