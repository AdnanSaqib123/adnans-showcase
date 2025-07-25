import React, { useState, useEffect } from 'react';
import { projects } from '../assets/data.js';
import { FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function useResponsivePerPage() {
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    function updatePerPage() {
      if (window.innerWidth >= 1024) {
        setPerPage(3); // lg:grid-cols-3
      } else if (window.innerWidth >= 768) {
        setPerPage(2); // md:grid-cols-2
      } else {
        setPerPage(1); // grid-cols-1
      }
    }
    updatePerPage();
    window.addEventListener('resize', updatePerPage);
    return () => window.removeEventListener('resize', updatePerPage);
  }, []);
  return perPage;
}

const Work = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = useResponsivePerPage();
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(0);
    }
  }, [projectsPerPage, totalPages]);

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

  const currentProjects = getCurrentProjects();

  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <section id="work" className="flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-3 text-center">
          My Work
        </h2>
        <p className="text-slate-400 text-xl text-center mb-12 max-w-4xl">
          Here's a collection of projects I've worked on, showcasing my skills in design and development.
        </p>

        {/* Responsive grid and pagination */}
        {projectsPerPage === 1 ? (
          <>
            <div className="grid grid-cols-1 gap-8 max-w-7xl w-full mb-8">
              {currentProjects.map((project) => (
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
                    <FiEye size={20} />
                    Preview Project
                  </button>
                </div>
              ))}
            </div>
            {/* Pagination below single card */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <button
                onClick={handlePrevPage}
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 0}
              >
                <FiChevronLeft size={20} />
                Previous
              </button>
              <div className="text-white font-semibold text-base">
                {currentPage + 1} of {totalPages}
              </div>
              <button
                onClick={handleNextPage}
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages - 1}
              >
                Next
                <FiChevronRight size={20} />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={`grid ${projectsPerPage === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8 max-w-7xl w-full mb-12`}>
              {currentProjects.map((project) => (
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
                    <FiEye size={20} />
                    Preview Project
                  </button>
                </div>
              ))}
            </div>
            {/* Pagination below grid */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <button
                onClick={handlePrevPage}
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 0}
              >
                <FiChevronLeft size={20} />
                Previous
              </button>
              <div className="text-white font-semibold text-base">
                {currentPage + 1} of {totalPages}
              </div>
              <button
                onClick={handleNextPage}
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages - 1}
              >
                Next
                <FiChevronRight size={20} />
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Work;