import React, { useState, useEffect } from 'react';
import { coursesData } from '../assets/data.js';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const getStatusClasses = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500 text-white';
    case 'in-progress':
      return 'bg-yellow-500 text-white';
    default:
      return 'bg-gray-400 text-white';
  }
};

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

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const coursesPerPage = useResponsivePerPage();
  const totalPages = Math.ceil(coursesData.length / coursesPerPage);

  useEffect(() => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(0);
    }
  }, [coursesPerPage, totalPages]);

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

  const getCurrentCourses = () => {
    const startIndex = currentPage * coursesPerPage;
    return coursesData.slice(startIndex, startIndex + coursesPerPage);
  };

  const currentCourses = getCurrentCourses();

  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <section id="courses" className="flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-3 text-center">Professional Certifications & Courses</h2>
        <p className="text-slate-400 text-md sm:text-xl text-center mb-12 max-w-4xl">Continuous learning journey through industry-recognized certifications and specialized courses.</p>
        {/* Responsive grid and pagination */}
        {coursesPerPage === 1 ? (
          <>
            <div className="grid grid-cols-1 gap-8 max-w-7xl w-full mb-8">
              {currentCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-7 border border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 group overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white ${getStatusClasses(course.status)}`}>
                      {course.name[0]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-semibold mb-1">{course.name}</h3>
                      <p className="text-green-500 text-base font-medium mb-0.5">{course.issuer}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed mb-4">{course.description}</p>
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center justify-between bg-white/5 rounded-md px-3 py-2">
                      <span className="text-slate-400 text-sm font-medium">Duration:</span>
                      <span className="text-white text-sm font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-md px-3 py-2">
                      <span className="text-slate-400 text-sm font-medium">Status:</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusClasses(course.status)}`}>{course.status.replace('-', ' ')}</span>
                    </div>
                  </div>
                  {/* Separator line before skills */}
                  <div className="w-full h-2 rounded-full bg-green-500/50 my-4"></div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {course.skills.map((skill, index) => (
                      <span key={index} className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
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
            <div className={`grid ${coursesPerPage === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8 max-w-7xl w-full mb-12`}>
              {currentCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-7 border border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 group overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white ${getStatusClasses(course.status)}`}>
                      {course.name[0]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-semibold mb-1">{course.name}</h3>
                      <p className="text-green-500 text-base font-medium mb-0.5">{course.issuer}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed mb-4">{course.description}</p>
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center justify-between bg-white/5 rounded-md px-3 py-2">
                      <span className="text-slate-400 text-sm font-medium">Duration:</span>
                      <span className="text-white text-sm font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-md px-3 py-2">
                      <span className="text-slate-400 text-sm font-medium">Status:</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusClasses(course.status)}`}>{course.status.replace('-', ' ')}</span>
                    </div>
                  </div>
                  {/* Separator line before skills */}
                  <div className="w-full h-2 rounded-full bg-green-500/50 my-4"></div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {course.skills.map((skill, index) => (
                      <span key={index} className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
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

export default Courses; 