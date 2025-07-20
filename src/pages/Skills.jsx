import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-500' },
  { name: 'CSS', icon: <SiCss3 />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
  { name: 'React.js', icon: <SiReact />, color: 'text-blue-400' },
  { name: 'Vue.js', icon: <SiVuedotjs />, color: 'text-green-500' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-500' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-400' },
  { name: 'Figma', icon: <SiFigma />, color: 'text-purple-400' },
  { name: 'Git', icon: <SiGit />, color: 'text-orange-600' },
  { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-200' },
  { name: 'MS Office', icon: <FaMicrosoft />, color: 'text-green-400' },
];

export default function Skills() {
      return (
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <section id="skills" className="flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3 text-center">Skills & Expertise</h2>
        <p className="text-slate-400 text-lg text-center mb-12 max-w-2xl">My technical skills and tools I use to bring ideas to life.</p>

        <div className="w-full max-w-6xl overflow-hidden pt-6">
          <div className="flex animate-scroll">
            {/* First set of skills */}
            {skills.map((skill, idx) => (
              <div
                key={`first-${idx}`}
                className="flex flex-col items-center justify-center bg-slate-800/60 border border-slate-600 rounded-xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 mx-3 min-w-[140px]"
              >
                <span className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</span>
                <span className="text-white text-base font-semibold text-center">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {skills.map((skill, idx) => (
              <div
                key={`second-${idx}`}
                className="flex flex-col items-center justify-center bg-slate-800/60 border border-slate-600 rounded-xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 mx-3 min-w-[140px]"
              >
                <span className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</span>
                <span className="text-white text-base font-semibold text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}