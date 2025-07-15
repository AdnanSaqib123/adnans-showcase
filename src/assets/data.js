import profile1 from './images/profile1.jpg';
import school from './images/school.jpg';
import university from './images/university.jpg';
import project1 from './images/Project1.jpg';
import project2 from './images/Project2.jpg';
import project3 from './images/Project3.jpg';
import project4 from './images/Project4.jpg';
import project5 from './images/Project5.jpg';

// This is the data for the projects section 
export const projects = [
  {
    id: 1,
    title: 'U Right Way',
    description: 'A responsive web application built using React.js, Vite, and Tailwind CSS.',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'Responsiveness', 'API Integration', 'Redux', 'RTK Query'],
    image: project1,
    link: 'https://www.urightway.com'
  },
  {
    id: 2,
    title: 'U Right Way Admin',
    description: 'An Admin Dashboard for the Urightway. This dashboard allows administrators to manage users, tests, results, and other content.',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'Responsiveness', 'API Integration', 'Redux', 'RTK Query'],
    image: project2,
    link: 'https://urightway-admin.netlify.app'
  },
  {
    id: 3,
    title: 'Client Portfolio',
    description: 'A responsive portfolio website showcasing creative work with smooth animations and modern design principles.',
    tags: ['HTML', 'CSS', 'Javascript', 'Responsiveness'],
    image: project3,
    link: 'https://adnansaqib123.github.io/Portfolio/'
  },
  {
    id: 4,
    title: 'Laywer Portfolio',
    description: 'A modern lawyer portfolio website with advanced features including user authentication, payment processing, and admin dashboard.',
    tags: ['React.js', 'Bootstrap', 'Google Search API', 'Responsiveness'],
    image: project4,
    link: 'https://adnansaqib123.github.io/lawyer-portfolio-in-React.js/'
  },
  {
    id: 5,
    title: 'Blogger Website',
    description: 'A blog website with features like posts, comments, likes, and user profiles.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API Integration', 'JsonPlaceholder API', 'Ninjas API'],
    image: project5,
    link: 'https://adnansaqib123.github.io/Blog-Website-/'
  },
];

// This is the data for the contact section
export const contactInfo = [
  { icon: '📧', label: 'Email', value: 'adnansaqib205@gmail.com' },
  { icon: '📱', label: 'Phone', value: '0319-5923729 & 0348-0014289' },
  { icon: '📍', label: 'Location', value: 'Rawalpindi, Pakistan' },
  { icon: '💼', label: 'Availability', value: 'Open for opportunities' }
];

// This is the data for the social links section
export const socialLinks = [
  { icon: '🐙', url: 'https://github.com' },
  { icon: '💼', url: 'https://linkedin.com' },
  { icon: '🐦', url: 'https://twitter.com' },
  { icon: '📸', url: 'https://instagram.com' }
];

// This is the data for the courses section
export const coursesData = [
  {
    id: 1,
    name: 'Web Development',
    issuer: 'Sololearn',
    status: 'completed',
    description: 'Covers the fundamentals of web development including HTML, CSS, and JavaScript for building interactive websites.',
    duration: '2 months',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    name: 'Introduction to SQL',
    issuer: 'Sololearn',
    status: 'completed',
    description: 'Introduction to SQL databases, queries, and data manipulation for backend and data-driven applications.',
    duration: '1 month',
    skills: ['SQL', 'Databases', 'Queries']
  },
  {
    id: 3,
    name: 'Freelancing',
    issuer: 'DigiSkills',
    status: 'completed',
    description: 'Covers the essentials of freelancing, including finding clients, managing projects, and building a successful freelance career.',
    duration: '3 months',
    skills: ['Freelancing', 'Client Management', 'Project Management']
  },
  {
    id: 4,
    name: 'Communication and Soft Skills',
    issuer: 'DigiSkills',
    status: 'completed',
    description: 'Focuses on effective communication, teamwork, and soft skills for professional growth.',
    duration: '3 months',
    skills: ['Communication', 'Teamwork', 'Soft Skills']
  },
  {
    id: 5,
    name: 'Introduction to Networks',
    issuer: 'VU-Cisco',
    status: 'completed',
    description: 'Introduction to computer networks, networking concepts, and protocols.',
    duration: '2 months',
    skills: ['Networking', 'Protocols', 'Cisco']
  },
  {
    id: 6,
    name: 'Seerat-Circle Course',
    issuer: 'Al-Burhan',
    status: 'in-progress',
    description: 'A course focused on the life and teachings of the Prophet Muhammad (PBUH).',
    duration: '6 months',
    skills: ['Islamic Studies', 'History']
  },
  {
    id: 7,
    name: "Believer's Journey Course",
    issuer: 'Al-Burhan',
    status: 'completed',
    description: 'A course designed to guide believers on their spiritual journey.',
    duration: '3 months',
    skills: ['Spirituality', 'Islamic Studies']
  }
];

// This is the data for the education section
export const educationData = [
  {
    id: 1,
    degree: 'BS in Computer Science',
    institution: 'Virtual University of Pakistan',
    year: 'Current 6th Semester',
    image: school,
  },
  {
    id: 2,
    degree: 'FSC (Pre-Engineering)',
    institution: 'Army Public School and College, Sialkot Cantt',
    year: 'Completed in 2021',
    image: school,
  },
  {
    id: 3,
    degree: 'Matric (Science)',
    institution: 'Army Public School Gul Mohar, Malir Cantt, Karachi',
    year: 'Completed in 2019',
    image: university,
  }
]; 