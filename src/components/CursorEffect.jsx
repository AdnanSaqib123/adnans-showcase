import React, { useState, useEffect } from 'react';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const styles = {
    cursorEffect: {
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: 20,
      width: '1.5rem',
      height: '1.5rem',
      background: '#22c55e',
      borderRadius: '50%',
      opacity: 0.2,
      filter: 'blur(2px)',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div 
      style={{
        ...styles.cursorEffect,
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
      }}
    />
  );
};

export default CursorEffect; 