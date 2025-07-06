import React from 'react';

const Work = () => {
  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem 2rem 2rem'
    },
    title: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '3rem',
      textAlign: 'center'
    },
    subtitle: {
      color: '#94a3b8',
      fontSize: '1.25rem',
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '48rem'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      width: '100%'
    },
    projectCard: {
      background: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid #475569',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    },
    projectImage: {
      width: '100%',
      height: '200px',
      background: 'linear-gradient(135deg, #475569 0%, #64748b 100%)',
      borderRadius: '0.5rem',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '3rem'
    },
    projectTitle: {
      color: '#ffffff',
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    projectDescription: {
      color: '#cbd5e1',
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    projectTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    tag: {
      background: '#22c55e',
      color: '#ffffff',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500'
    }
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with advanced features including user authentication, payment processing, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB'],
      icon: '🛒'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work with smooth animations and modern design principles.',
      tags: ['React', 'CSS3', 'JavaScript'],
      icon: '🎨'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
      tags: ['Vue.js', 'Firebase', 'Tailwind'],
      icon: '📋'
    }
  ];

  return (
    <section id="work" style={styles.section}>
      <h2 style={styles.title}>My Work</h2>
      <p style={styles.subtitle}>
        Here's a collection of projects I've worked on, showcasing my skills in design and development.
      </p>
      
      <div style={styles.projectsGrid}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            style={styles.projectCard}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <div style={styles.projectImage}>
              {project.icon}
            </div>
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <div style={styles.projectTags}>
              {project.tags.map((tag, index) => (
                <span key={index} style={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work; 