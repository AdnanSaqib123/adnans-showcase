import React from 'react';

const Education = () => {
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
    educationContainer: {
      maxWidth: '1000px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    educationCard: {
      background: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid #475569',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    },
    educationHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    educationIcon: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      color: '#ffffff'
    },
    educationInfo: {
      flex: 1
    },
    degree: {
      color: '#ffffff',
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    institution: {
      color: '#22c55e',
      fontSize: '1rem',
      fontWeight: '500',
      marginBottom: '0.25rem'
    },
    year: {
      color: '#94a3b8',
      fontSize: '0.875rem'
    },
    description: {
      color: '#cbd5e1',
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    achievements: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },
    achievement: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#cbd5e1',
      fontSize: '0.875rem'
    },
    achievementIcon: {
      color: '#22c55e',
      fontSize: '0.75rem'
    }
  };

  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      year: '2019 - 2023',
      description: 'Focused on software engineering, algorithms, and web development. Graduated with honors and completed several major projects.',
      achievements: [
        'Graduated with First Class Honors',
        'Dean\'s List for Academic Excellence',
        'Best Final Year Project Award',
        'President of Computer Science Society'
      ],
      icon: '🎓'
    },
    {
      id: 2,
      degree: 'High School Diploma',
      institution: 'Tech High School',
      year: '2017 - 2019',
      description: 'Specialized in Mathematics and Computer Science. Developed strong foundation in programming and problem-solving.',
      achievements: [
        'Valedictorian',
        'National Science Olympiad Winner',
        'Programming Club President',
        'Perfect GPA (4.0/4.0)'
      ],
      icon: '🏫'
    }
  ];

  return (
    <section id="education" style={styles.section}>
      <h2 style={styles.title}>Education</h2>
      <p style={styles.subtitle}>
        My academic journey and formal education background.
      </p>
      
      <div style={styles.educationContainer}>
        {educationData.map((education) => (
          <div 
            key={education.id} 
            style={styles.educationCard}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <div style={styles.educationHeader}>
              <div style={styles.educationIcon}>
                {education.icon}
              </div>
              <div style={styles.educationInfo}>
                <h3 style={styles.degree}>{education.degree}</h3>
                <p style={styles.institution}>{education.institution}</p>
                <p style={styles.year}>{education.year}</p>
              </div>
            </div>
            
            <p style={styles.description}>{education.description}</p>
            
            <div style={styles.achievements}>
              {education.achievements.map((achievement, index) => (
                <div key={index} style={styles.achievement}>
                  <span style={styles.achievementIcon}>✓</span>
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 