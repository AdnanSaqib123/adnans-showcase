import React from 'react';

const skills = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Vue.js', icon: '🟩' },
  { name: 'Bootstrap', icon: '🅱️' },
  { name: 'Tailwind', icon: '🌬️' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Git', icon: '🔧' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'MS Office', icon: '💼' },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 py-4">
      <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3 text-center">Skills & Expertise</h2>
      <p className="text-slate-400 text-lg text-center mb-12 max-w-2xl">My technical skills and tools I use to bring ideas to life.</p>
      <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-slate-800/60 border border-slate-600 rounded-xl p-6 shadow-md hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300"
          >
            <span className="text-4xl mb-2">{skill.icon}</span>
            <span className="text-white text-base font-semibold text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 