import React from 'react';

const HeroSection = () => {
  const styles = {
    mainContent: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '0 1rem'
    },
    profileSection: {
      marginBottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      width: '5rem',
      height: '5rem',
      background: 'linear-gradient(135deg, #fb923c 0%, #ec4899 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      marginBottom: '1rem',
      boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
      animation: 'pulse-glow 2s ease-in-out infinite'
    },
    statusBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'rgba(30, 41, 59, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '9999px',
      padding: '0.5rem 1rem',
      border: '1px solid #475569'
    },
    statusDot: {
      width: '0.5rem',
      height: '0.5rem',
      background: '#22c55e',
      borderRadius: '50%',
      animation: 'pulse 2s infinite'
    },
    statusText: {
      fontSize: '0.875rem',
      color: '#cbd5e1'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '1.5rem',
      lineHeight: '1.2',
      textAlign: 'center',
      maxWidth: '64rem'
    },
    heroSubtitle: {
      background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    description: {
      marginBottom: '3rem'
    },
    descriptionText: {
      color: '#94a3b8',
      fontSize: '1.125rem',
      margin: '0.5rem 0',
      textAlign: 'center'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    primaryButton: {
      background: '#ffffff',
      color: '#0f172a',
      padding: '1rem 2rem',
      borderRadius: '9999px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      fontSize: '1rem'
    },
    secondaryButton: {
      background: '#1e293b',
      color: '#ffffff',
      padding: '1rem 2rem',
      borderRadius: '9999px',
      fontWeight: '500',
      border: '1px solid #475569',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    }
  };

  return (
    <div style={styles.mainContent}>
      {/* Profile Section */}
      <div style={styles.profileSection}>
        <div style={styles.avatar}>
          👨‍💻
        </div>
        <div style={styles.statusBadge}>
          <div style={styles.statusDot}></div>
          <span style={styles.statusText}>Available for opportunities</span>
        </div>
      </div>

      {/* Hero Text */}
      <div style={styles.heroTitle}>
        Welcome to
        <br />
        <span style={styles.heroSubtitle}>
          my digital humble abode
        </span>
      </div>
      
      <div style={styles.description}>
        <p style={styles.descriptionText}>
          I'm an independent designer.
        </p>
        <p style={styles.descriptionText}>
          My interest lies in brand experience, and user experience.
        </p>
      </div>

      {/* CTA Buttons */}
      <div style={styles.buttonContainer}>
        <button style={styles.primaryButton} className="primary-button">
          <span>👋</span>
          <span>Let's talk</span>
        </button>
        <button style={styles.secondaryButton} className="secondary-button">
          <span>Get Template</span>
          <span>↗</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection; 