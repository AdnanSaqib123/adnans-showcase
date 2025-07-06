import React from 'react';

const Courses = () => {
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
    coursesContainer: {
      maxWidth: '1200px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    },
    courseCard: {
      background: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid #475569',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    courseHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    courseIcon: {
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
    courseInfo: {
      flex: 1
    },
    courseName: {
      color: '#ffffff',
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    courseIssuer: {
      color: '#22c55e',
      fontSize: '1rem',
      fontWeight: '500',
      marginBottom: '0.25rem'
    },
    courseDate: {
      color: '#94a3b8',
      fontSize: '0.875rem'
    },
    courseDescription: {
      color: '#cbd5e1',
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    courseDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    detailItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.75rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '0.5rem'
    },
    detailLabel: {
      color: '#94a3b8',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    detailValue: {
      color: '#ffffff',
      fontSize: '0.875rem',
      fontWeight: '600'
    },
    statusBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase'
    },
    statusCompleted: {
      background: '#22c55e',
      color: '#ffffff'
    },
    statusInProgress: {
      background: '#f59e0b',
      color: '#ffffff'
    },
    statusUpcoming: {
      background: '#6b7280',
      color: '#ffffff'
    },
    skillsLearned: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginTop: '1rem'
    },
    skillTag: {
      background: 'rgba(34, 197, 94, 0.2)',
      color: '#22c55e',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      border: '1px solid rgba(34, 197, 94, 0.3)'
    },
    progressBar: {
      width: '100%',
      height: '6px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '3px',
      marginTop: '1rem',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
      borderRadius: '3px',
      transition: 'width 0.3s ease'
    }
  };

  const coursesData = [
    {
      id: 1,
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      status: 'completed',
      progress: 100,
      description: 'Comprehensive course covering AWS development services, deployment, and best practices for cloud-native applications.',
      duration: '6 months',
      level: 'Intermediate',
      skills: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'CloudFormation', 'DevOps'],
      icon: '☁️'
    },
    {
      id: 2,
      name: 'Google UX Design',
      issuer: 'Google',
      date: '2023',
      status: 'completed',
      progress: 100,
      description: 'Professional UX design course covering user research, wireframing, prototyping, and user testing methodologies.',
      duration: '4 months',
      level: 'Beginner to Advanced',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'User Testing', 'Figma'],
      icon: '🎨'
    },
    {
      id: 3,
      name: 'React Developer',
      issuer: 'Meta',
      date: '2023',
      status: 'completed',
      progress: 100,
      description: 'Advanced React development course covering hooks, context, performance optimization, and modern React patterns.',
      duration: '3 months',
      level: 'Advanced',
      skills: ['React Hooks', 'Context API', 'Performance', 'Testing', 'TypeScript'],
      icon: '⚛️'
    },
    {
      id: 4,
      name: 'UI/UX Design Specialization',
      issuer: 'Coursera',
      date: '2022',
      status: 'completed',
      progress: 100,
      description: 'Comprehensive design specialization covering visual design, interaction design, and user experience principles.',
      duration: '5 months',
      level: 'Intermediate',
      skills: ['Visual Design', 'Interaction Design', 'User Experience', 'Adobe Creative Suite'],
      icon: '✨'
    },
    {
      id: 5,
      name: 'Advanced JavaScript',
      issuer: 'Udemy',
      date: '2024',
      status: 'in-progress',
      progress: 75,
      description: 'Deep dive into advanced JavaScript concepts including ES6+, async programming, and modern patterns.',
      duration: '2 months',
      level: 'Advanced',
      skills: ['ES6+', 'Async/Await', 'Promises', 'Modules', 'Design Patterns'],
      icon: '📚'
    },
    {
      id: 6,
      name: 'Machine Learning Basics',
      issuer: 'Coursera',
      date: '2024',
      status: 'upcoming',
      progress: 0,
      description: 'Introduction to machine learning concepts, algorithms, and practical applications in web development.',
      duration: '3 months',
      level: 'Beginner',
      skills: ['Python', 'TensorFlow', 'Data Analysis', 'ML Algorithms'],
      icon: '🤖'
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed':
        return { ...styles.statusBadge, ...styles.statusCompleted };
      case 'in-progress':
        return { ...styles.statusBadge, ...styles.statusInProgress };
      case 'upcoming':
        return { ...styles.statusBadge, ...styles.statusUpcoming };
      default:
        return styles.statusBadge;
    }
  };

  return (
    <section id="courses" style={styles.section}>
      <h2 style={styles.title}>Professional Certifications & Courses</h2>
      <p style={styles.subtitle}>
        Continuous learning journey through industry-recognized certifications and specialized courses.
      </p>
      
      <div style={styles.coursesContainer}>
        {coursesData.map((course) => (
          <div 
            key={course.id} 
            style={styles.courseCard}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <div style={styles.courseHeader}>
              <div style={styles.courseIcon}>
                {course.icon}
              </div>
              <div style={styles.courseInfo}>
                <h3 style={styles.courseName}>{course.name}</h3>
                <p style={styles.courseIssuer}>{course.issuer}</p>
                <p style={styles.courseDate}>{course.date}</p>
              </div>
            </div>
            
            <p style={styles.courseDescription}>{course.description}</p>
            
            <div style={styles.courseDetails}>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Duration:</span>
                <span style={styles.detailValue}>{course.duration}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Level:</span>
                <span style={styles.detailValue}>{course.level}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Status:</span>
                <span style={getStatusStyle(course.status)}>
                  {course.status.replace('-', ' ')}
                </span>
              </div>
            </div>

            {course.progress > 0 && (
              <div style={styles.progressBar}>
                <div 
                  style={{
                    ...styles.progressFill,
                    width: `${course.progress}%`
                  }}
                />
              </div>
            )}
            
            <div style={styles.skillsLearned}>
              {course.skills.map((skill, index) => (
                <span key={index} style={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses; 