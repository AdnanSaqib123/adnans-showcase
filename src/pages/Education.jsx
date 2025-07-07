import React from 'react';
import profile1 from '../assets/images/profile1.jpg';

const educationData = [
  {
    id: 1,
    degree: 'BS in Computer Science',
    institution: 'Virtual University of Pakistan',
    year: 'Current 6th Semester',
    image: profile1,
  },
  {
    id: 2,
    degree: 'FSC (Pre-Engineering)',
    institution: 'Army Public School and College, Sialkot Cantt',
    year: 'Completed in 2021',
    image: profile1,
  },
  {
    id: 3,
    degree: 'Matric (Science)',
    institution: 'Army Public School Gul Mohar, Malir Cantt, Karachi',
    year: 'Completed in 2019',
    image: profile1,
  }
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3 text-center">Education</h2>
      <p className="text-slate-400 text-lg text-center mb-12 max-w-2xl">My academic journey and formal education background.</p>
      <div className="w-full max-w-5xl grid grid-cols-1 gap-4">
        {educationData.map((education) => (
          <div
            key={education.id}
            className="bg-slate-800/60 backdrop-blur-lg rounded-2xl px-2 py-4 sm:p-8 border border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 group overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={education.image} alt="Profile" className="w-12 sm:w-20 h-12 sm:h-20 rounded-full object-cover border-2 border-emerald-500" />
              <div className="flex-1">
                <h3 className="text-white text-xl font-semibold mb-1">{education.degree}</h3>
                <p className="text-emerald-400 text-base font-medium mb-0.5">{education.institution}</p>
                <p className="text-slate-400 text-sm">{education.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 