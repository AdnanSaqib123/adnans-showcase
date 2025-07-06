import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: '🐙', label: 'GitHub' },
    { icon: '💼', label: 'LinkedIn' },
    { icon: '🐦', label: 'Twitter' },
    { icon: '📸', label: 'Instagram' }
  ];

  return (
    <footer className="bg-slate-900/90 backdrop-blur border-t border-slate-600 py-8 text-center w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-green-500 text-2xl font-bold mb-2">Adnan's Showcase</div>
          <p className="text-slate-400 text-base max-w-xl leading-relaxed">
            Creating meaningful digital experiences through thoughtful design and innovative development. <br className="block" />
            Let's bring your ideas to life together.
          </p>
          <div className="flex gap-4 mt-2">
            {socialLinks.map((social, index) => (
              <span
                key={index}
                title={social.label}
                className="text-slate-400 text-xl transition-colors duration-300 cursor-pointer"
                tabIndex={0}
              >
                {social.icon}
              </span>
            ))}
          </div>
          <div className="text-slate-500 text-sm mt-8 pt-4 border-t border-slate-600 w-full">
            © 2025 Adnan's Showcase. All rights reserved. Made with <span role="img" aria-label="love">❤️</span> by <span className="text-green-500 font-bold">MUHAMMAD ADNAN SAQIB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 