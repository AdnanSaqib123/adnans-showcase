import React from 'react';

const Skills = () => {
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
    skillsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      maxWidth: '1000px',
      width: '100%'
    },
    skillCategory: {
      background: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid #475569'
    },
    categoryTitle: {
      color: '#22c55e',
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    skillsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.75rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '0.5rem',
      transition: 'background 0.3s ease'
    },
    skillName: {
      color: '#ffffff',
      fontSize: '1rem',
      fontWeight: '500'
    },
    skillLevel: {
      display: 'flex',
      gap: '0.25rem'
    },
    levelDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#475569'
    },
    levelDotActive: {
      background: '#22c55e'
    }
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '💻',
      skills: [
        { name: 'React', level: 5 },
        { name: 'JavaScript', level: 5 },
        { name: 'HTML/CSS', level: 5 },
        { name: 'Vue.js', level: 4 },
        { name: 'TypeScript', level: 4 }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: '🎨',
      skills: [
        { name: 'Figma', level: 5 },
        { name: 'Adobe XD', level: 4 },
        { name: 'Photoshop', level: 4 },
        { name: 'Illustrator', level: 3 },
        { name: 'Prototyping', level: 5 }
      ]
    },
    {
      title: 'Backend & Tools',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 4 },
        { name: 'MongoDB', level: 4 },
        { name: 'Git', level: 5 },
        { name: 'Docker', level: 3 },
        { name: 'AWS', level: 3 }
      ]
    }
  ];

  const renderSkillLevel = (level) => {
    return (
      <div style={styles.skillLevel}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            style={{
              ...styles.levelDot,
              ...(dot <= level ? styles.levelDotActive : {})
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.title}>Skills & Expertise</h2>
      <p style={styles.subtitle}>
        My technical skills and tools I use to bring ideas to life.
      </p>
      
      <div style={styles.skillsContainer}>
        {skillCategories.map((category, index) => (
          <div key={index} style={styles.skillCategory}>
            <h3 style={styles.categoryTitle}>
              {category.icon} {category.title}
            </h3>
            <div style={styles.skillsList}>
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  style={styles.skillItem}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(34, 197, 94, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  <span style={styles.skillName}>{skill.name}</span>
                  {renderSkillLevel(skill.level)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 