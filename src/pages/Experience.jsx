import React from 'react';
import { Briefcase, Calendar, MapPin } from 'phosphor-react';
import { experienceData } from '../assets/data.js';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-4 pt-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-3 text-center">
          Professional Journey
        </h2>
        <p className="text-slate-400 text-xl text-center mb-12 max-w-4xl mx-auto">
          My career path and professional experiences that have shaped my skills and expertise.
        </p>

        <div className="space-y-6 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-slate-600 transform -translate-x-1/2"></div>

          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 z-10"></div>

              <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-5 border border-slate-700 w-full md:w-5/12 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Briefcase size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar size={18} className="text-slate-400" />
                    <span>{exp.dates}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin size={18} className="text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-slate-300 flex gap-2">
                      <span className="text-blue-400 mt-1.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;