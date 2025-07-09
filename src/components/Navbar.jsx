import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const styles = {
    nav: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '2rem',
      paddingBottom: '1rem',
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(10px)'
    },
    navContainer: {
      display: 'flex',
      gap: '2rem',
      background: 'rgba(30, 41, 59, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '9999px',
      padding: '1rem 2rem',
      border: '1px solid #475569'
    },
    navLink: {
      color: '#cbd5e1',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      borderBottom: '2px solid transparent',
      paddingBottom: '0.25rem',
      background: 'none',
      border: 'none',
      fontSize: '1rem'
    },
    navLinkActive: {
      color: '#22c55e',
      borderBottom: '2px solid #22c55e'
    }
  };

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
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .nav-link:hover {
            color: #22c55e !important;
          }
        `
      }} />
      
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                ...styles.navLink,
                ...(activeSection === item.id ? styles.navLinkActive : {})
              }}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar; 