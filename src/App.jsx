import React from 'react';
import Navbar from './components/Navbar';
import FloatingElements from './components/FloatingElements';
import CursorEffect from './components/CursorEffect';
import Home from './pages/Home';
import './App.css';

function App() {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
            50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.6); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          .primary-button:hover {
            background: #f1f5f9 !important;
            transform: scale(1.05);
          }
          
          .secondary-button:hover {
            background: #334155 !important;
            transform: scale(1.05);
          }
        `
      }} />

      <div style={styles.container}>
        {/* Floating Elements */}
        <FloatingElements />

        {/* Navigation */}
        <Navbar />

        {/* Page Content */}
        <Home />

        {/* Interactive cursor effect */}
        <CursorEffect />
      </div>
    </>
  );
}

export default App;
