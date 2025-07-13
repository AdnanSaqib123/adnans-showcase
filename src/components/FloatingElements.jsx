import React from 'react';

const FloatingElements = () => {
  return (
    <>
      <div className="absolute text-green-500 text-2xl animate-float" style={{ top: '8rem', left: '5rem' }}>✦</div>
      <div className="absolute text-green-500 text-xl animate-sparkle" style={{ top: '5rem', right: '8rem' }}>✧</div>
      <div className="absolute text-green-500 text-2xl animate-float" style={{ bottom: '10rem', left: '4rem' }}>✦</div>
      <div className="absolute text-green-500 text-xl animate-sparkle" style={{ bottom: '8rem', right: '5rem' }}>✧</div>
      <div className="absolute text-green-500 text-2xl animate-float" style={{ top: '15rem', right: '4rem' }}>●</div>
      <div className="absolute text-green-500 text-xl animate-sparkle" style={{ bottom: '15rem', right: '10rem' }}>✦</div>
      <div className="absolute text-green-500 text-6xl opacity-80 animate-float" style={{ bottom: '4rem', right: '4rem' }}>✦</div>
    </>
  );
};

export default FloatingElements; 