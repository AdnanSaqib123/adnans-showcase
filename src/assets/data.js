import profile1 from './images/profile1.jpg';
import school from './images/school.jpg';
import university from './images/university.jpg';

// This is the data for the projects section 
export const projects = [
  {
    id: 1,
    title: 'Laywer Portfolio',
    description: 'A modern lawyer portfolio website with advanced features including user authentication, payment processing, and admin dashboard.',
    tags: ['React.js', 'Bootstrap'],
    image: profile1,
    link: 'https://adnansaqib123.github.io/lawyer-portfolio-in-React.js/'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing creative work with smooth animations and modern design principles.',
    tags: ['React', 'CSS3', 'JavaScript'],
    image: profile1,
    link: 'https://github.com/yourusername/portfolio-website'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    image: profile1,
    link: 'https://github.com/yourusername/task-management-app'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A real-time weather dashboard with location-based forecasts and interactive weather maps.',
    tags: ['React', 'API', 'Chart.js'],
    image: profile1,
    link: 'https://github.com/yourusername/weather-dashboard'
  },
  {
    id: 5,
    title: 'Social Media Clone',
    description: 'A social media platform clone with features like posts, comments, likes, and user profiles.',
    tags: ['React', 'Redux', 'Express'],
    image: profile1,
    link: 'https://github.com/yourusername/social-media-clone'
  },
  {
    id: 6,
    title: 'AI Chat Application',
    description: 'An AI-powered chat application with natural language processing and intelligent responses.',
    tags: ['React', 'OpenAI API', 'Socket.io'],
    image: profile1,
    link: 'https://github.com/yourusername/ai-chat-app'
  }
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