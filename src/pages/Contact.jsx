import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      alignItems: 'start'
    },
    title: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '3rem',
      textAlign: 'center',
      gridColumn: '1 / -1'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1.5rem',
      background: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      border: '1px solid #475569',
      transition: 'transform 0.3s ease'
    },
    infoIcon: {
      fontSize: '2rem',
      color: '#22c55e'
    },
    infoContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    },
    infoLabel: {
      color: '#94a3b8',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    infoValue: {
      color: '#ffffff',
      fontSize: '1rem',
      fontWeight: '500'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    label: {
      color: '#ffffff',
      fontSize: '1rem',
      fontWeight: '500'
    },
    input: {
      padding: '1rem',
      background: 'rgba(30, 41, 59, 0.6)',
      border: '1px solid #475569',
      borderRadius: '0.5rem',
      color: '#ffffff',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    textarea: {
      padding: '1rem',
      background: 'rgba(30, 41, 59, 0.6)',
      border: '1px solid #475569',
      borderRadius: '0.5rem',
      color: '#ffffff',
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical',
      transition: 'border-color 0.3s ease'
    },
    submitButton: {
      background: '#22c55e',
      color: '#ffffff',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      marginTop: '1rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem'
    },
    socialLink: {
      width: '50px',
      height: '50px',
      background: 'rgba(30, 41, 59, 0.6)',
      border: '1px solid #475569',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      color: '#22c55e',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@adnan.com' },
    { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: '📍', label: 'Location', value: 'New York, NY' },
    { icon: '💼', label: 'Availability', value: 'Open for opportunities' }
  ];

  const socialLinks = [
    { icon: '🐙', url: 'https://github.com' },
    { icon: '💼', url: 'https://linkedin.com' },
    { icon: '🐦', url: 'https://twitter.com' },
    { icon: '📸', url: 'https://instagram.com' }
  ];

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Get In Touch</h2>
      
      <div style={styles.container}>
        <div style={styles.contactInfo}>
          <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Let's Connect
          </h3>
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              style={styles.infoItem}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateX(0)';
              }}
            >
              <span style={styles.infoIcon}>{info.icon}</span>
              <div style={styles.infoContent}>
                <span style={styles.infoLabel}>{info.label}</span>
                <span style={styles.infoValue}>{info.value}</span>
              </div>
            </div>
          ))}
          
          <div style={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.target.style.background = '#22c55e';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(30, 41, 59, 0.6)';
                  e.target.style.color = '#22c55e';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <form style={styles.form} onSubmit={handleSubmit}>
          <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Send Message
          </h3>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={styles.input}
              required
              onFocus={(e) => {
                e.target.style.borderColor = '#22c55e';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#475569';
              }}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.input}
              required
              onFocus={(e) => {
                e.target.style.borderColor = '#22c55e';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#475569';
              }}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              style={styles.textarea}
              required
              onFocus={(e) => {
                e.target.style.borderColor = '#22c55e';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#475569';
              }}
            />
          </div>
          <button 
            type="submit" 
            style={styles.submitButton}
            onMouseEnter={(e) => {
              e.target.style.background = '#16a34a';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#22c55e';
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 