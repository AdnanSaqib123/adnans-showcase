import React, { useState } from 'react';
import { projects } from '../assets/data.js';
import { Eye, CaretLeft, CaretRight } from 'phosphor-react';

const Work = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePreviewClick = (link) => {
    window.open(link, '_blank');
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const getCurrentProjects = () => {
    const startIndex = currentPage * projectsPerPage;
    return projects.slice(startIndex, startIndex + projectsPerPage);
  };

  return (
    <section id="work" className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-3 text-center">
        My Work
      </h2>
      <p className="text-slate-400 text-xl text-center mb-12 max-w-4xl">
        Here's a collection of projects I've worked on, showcasing my skills in design and development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full mb-12">
        {getCurrentProjects().map((project) => (
          <div
            key={project.id}
            className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 group"
          >
            <div className="w-full h-48 bg-gradient-to-br from-slate-600 to-slate-500 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
              <img src={project.image} alt="Project" className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => handlePreviewClick(project.link)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <Eye size={20} weight="bold" />
              Preview Project
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-6">
        {/* Previous Button */}
        <button
          onClick={handlePrevPage}
          className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 0}
        >
          <CaretLeft size={20} weight="bold" />
          Previous
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${index === currentPage
                ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                : 'bg-gray-500 hover:bg-gray-400'
                }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextPage}
          className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages - 1}
        >
          Next
          <CaretRight size={20} weight="bold" />
        </button>
      </div>
    </section>
  );
};

export default Work; 