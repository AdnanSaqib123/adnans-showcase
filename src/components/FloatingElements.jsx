import React from 'react';

const FloatingElements = () => {
  const styles = {
    floatingElement: {
      position: 'absolute',
      color: '#22c55e',
      fontSize: '1.5rem',
      animation: 'float 6s ease-in-out infinite'
    },
    sparkleElement: {
      position: 'absolute',
      color: '#22c55e',
      fontSize: '1.25rem',
      animation: 'sparkle 3s ease-in-out infinite'
    }
  };

  return (
    <>
      {/* Floating Elements */}
      <div style={{...styles.floatingElement, top: '8rem', left: '5rem'}}>✦</div>
      <div style={{...styles.sparkleElement, top: '5rem', right: '8rem'}}>✧</div>
      <div style={{...styles.floatingElement, bottom: '10rem', left: '4rem'}}>✦</div>
      <div style={{...styles.sparkleElement, bottom: '8rem', right: '5rem'}}>✧</div>
      <div style={{...styles.floatingElement, top: '15rem', right: '4rem'}}>●</div>
      <div style={{...styles.sparkleElement, bottom: '15rem', right: '10rem'}}>✦</div>
      <div style={{...styles.floatingElement, bottom: '4rem', right: '4rem', fontSize: '4rem', opacity: 0.8}}>✦</div>
    </>
  );
};

export default FloatingElements; 