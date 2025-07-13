import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FloatingElements from './components/FloatingElements';
import CursorEffect from './components/CursorEffect';
import Loader from './components/Loader';
import Home from './pages/Home';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and hide loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden font-sans">
      {/* Floating Elements */}
      <FloatingElements />

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      <Home />

      {/* Interactive cursor effect */}
      <CursorEffect />
    </div>
  );
}

export default App;
