import React from 'react';

const experiences = [
  {
    title: 'Intern - Software Engineer',
    company: 'Arpatech (Pvt) Ltd',
    dates: '07/2024 - 09/2024',
    location: 'Islamabad, Pakistan',
    details: [
      'Internship with software engineering tasks, contributing to projects and gaining practical experience.'
    ]
  },
  {
    title: 'Front End Web Developer',
    company: 'U Group of Companies',
    dates: '02/2025 - Present',
    location: 'Islamabad, Pakistan',
    details: [
      'Developing modern front-end web applications using React.js and Tailwind CSS.',
      'Implementing responsive design alongside API integrations.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-gray-700">{exp.company}</span>
              </div>
              <div className="text-gray-500 text-sm md:text-right">
                <div>{exp.dates}</div>
                <div>{exp.location}</div>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 