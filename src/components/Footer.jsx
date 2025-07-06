import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      background: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid #475569',
      padding: '2rem 0',
      textAlign: 'center'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    },
    logo: {
      color: '#22c55e',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    description: {
      color: '#94a3b8',
      fontSize: '1rem',
      maxWidth: '600px',
      lineHeight: '1.6'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem'
    },
    socialLink: {
      color: '#94a3b8',
      fontSize: '1.25rem',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    copyright: {
      color: '#64748b',
      fontSize: '0.875rem',
      marginTop: '2rem',
      paddingTop: '1rem',
      borderTop: '1px solid #475569'
    }
  };

  const socialLinks = [
    { icon: '🐙', label: 'GitHub' },
    { icon: '💼', label: 'LinkedIn' },
    { icon: '🐦', label: 'Twitter' },
    { icon: '📸', label: 'Instagram' }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.logo}>Adnan Showcase</div>
          <p style={styles.description}>
            Creating meaningful digital experiences through thoughtful design and innovative development. 
            Let's bring your ideas to life together.
          </p>
          
          <div style={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <span
                key={index}
                style={styles.socialLink}
                title={social.label}
                onMouseEnter={(e) => {
                  e.target.style.color = '#22c55e';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#94a3b8';
                }}
              >
                {social.icon}
              </span>
            ))}
          </div>
          
          <div style={styles.copyright}>
            © 2024 Adnan Showcase. All rights reserved. Made with ❤️ and ☕
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 