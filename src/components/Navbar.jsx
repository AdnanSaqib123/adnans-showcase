import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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
      setMenuOpen(false);
    }
  };

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

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
    <nav className="sticky top-0 z-[1000] flex flex-col items-center pt-8 pb-4 w-full">
      {/* Hamburger button for mobile */}
      <button
        ref={buttonRef}
        className="sm:hidden flex items-center px-3 py-2 rounded text-slate-300 border border-slate-600 focus:outline-none mb-2 hover:bg-slate-800/50 transition-all duration-300"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="relative w-6 h-6">
          <div className={`absolute inset-0 transition-all duration-300 ${menuOpen ? 'rotate-360 opacity-0' : 'rotate-0 opacity-100'}`}>
            <FiMenu size={24} />
          </div>
          <div className={`absolute inset-0 transition-all duration-300 ${menuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
            <FiX size={24} />
          </div>
        </div>
      </button>

      {/* Nav links for desktop */}
      <div className="hidden sm:flex gap-4 sm:gap-6 md:gap-8 bg-slate-900/90 backdrop-blur-md rounded-full px-4 sm:px-8 py-2 border border-slate-600 flex-wrap max-w-full overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-slate-300 font-medium transition-all duration-300 cursor-pointer bg-none outline-none text-base px-2 py-1 relative group
              hover:text-green-500 focus:text-green-500
             `}
          >
            {item.label}
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Nav links for mobile dropdown */}
      <div
        ref={menuRef}
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out w-11/12 max-w-xs mt-2 ${menuOpen
          ? 'max-h-96 opacity-100 transform translate-y-0'
          : 'max-h-0 opacity-0 transform -translate-y-2'
          }`}
      >
        <div className="flex flex-col gap-2 bg-slate-900/90 backdrop-blur-md rounded-xl px-4 py-4 border border-slate-600">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-slate-300 font-medium transition-all duration-300 cursor-pointer bg-none outline-none text-lg px-2 py-2 text-left hover:text-green-500 focus:text-green-500 hover:bg-slate-700/50 rounded-lg transform transition-transform relative group ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
              style={{
                transitionDelay: menuOpen ? `${index * 100}ms` : '0ms'
              }}
            >
              {item.label}
              {/* Animated underline for mobile */}
              <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;