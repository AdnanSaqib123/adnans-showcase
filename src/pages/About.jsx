import React from 'react';

const About = () => {
  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem 2rem 2rem'
    },
    container: {
      maxWidth: '1000px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },
    title: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '1rem'
    },
    subtitle: {
      color: '#22c55e',
      fontSize: '1.25rem',
      fontWeight: '500',
      marginBottom: '1rem'
    },
    description: {
      color: '#cbd5e1',
      fontSize: '1.125rem',
      lineHeight: '1.8',
      marginBottom: '2rem'
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.5rem',
      marginTop: '2rem'
    },
    stat: {
      background: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid #475569',
      textAlign: 'center'
    },
    statNumber: {
      color: '#22c55e',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    statLabel: {
      color: '#94a3b8',
      fontSize: '1rem',
      fontWeight: '500'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    profileImage: {
      width: '300px',
      height: '300px',
      background: 'linear-gradient(135deg, #fb923c 0%, #ec4899 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '8rem',
      boxShadow: '0 0 40px rgba(34, 197, 94, 0.3)',
      animation: 'pulse-glow 2s ease-in-out infinite'
    },
    experienceList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    experienceItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '0.5rem',
      transition: 'background 0.3s ease'
    },
    experienceIcon: {
      fontSize: '1.5rem'
    },
    experienceText: {
      color: '#ffffff',
      fontSize: '1rem'
    }
  };

  const experiences = [
    { icon: '🎓', text: 'Bachelor in Computer Science' },
    { icon: '💼', text: '5+ years of design experience' },
    { icon: '🏆', text: '50+ successful projects completed' },
    { icon: '🌍', text: 'Worked with clients worldwide' }
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>About Me</h2>
          <p style={styles.subtitle}>Passionate Designer & Developer</p>
          <p style={styles.description}>
            I'm a creative professional with a passion for designing meaningful digital experiences. 
            With over 5 years of experience in both design and development, I bridge the gap between 
            beautiful aesthetics and functional user experiences.
          </p>
          <p style={styles.description}>
            My approach combines user-centered design principles with modern development practices, 
            ensuring that every project not only looks great but also delivers exceptional functionality 
            and user satisfaction.
          </p>
          
          <div style={styles.experienceList}>
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                style={styles.experienceItem}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(34, 197, 94, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <span style={styles.experienceIcon}>{exp.icon}</span>
                <span style={styles.experienceText}>{exp.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div style={styles.imageContainer}>
          <div style={styles.profileImage}>
            👨‍💻
          </div>
        </div>
      </div>
      
      <div style={styles.statsContainer}>
        <div style={styles.stat}>
          <div style={styles.statNumber}>5+</div>
          <div style={styles.statLabel}>Years Experience</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>50+</div>
          <div style={styles.statLabel}>Projects Completed</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>30+</div>
          <div style={styles.statLabel}>Happy Clients</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>100%</div>
          <div style={styles.statLabel}>Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
};

export default About; 