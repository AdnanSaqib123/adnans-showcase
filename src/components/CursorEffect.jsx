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

  return (
    <div
      className="absolute pointer-events-none z-20 w-6 h-6 bg-green-500 rounded-full opacity-20 blur-sm transition-all duration-300 ease-in-out"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
      }}
    />
  );
};

export default CursorEffect; 