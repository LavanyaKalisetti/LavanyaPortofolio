/* =====================================================================
   PORTFOLIO DATA: everything on the website comes from this file.
   ---------------------------------------------------------------------
   This "resources" folder holds everything you'll want to change:
     - portfolio.js  -> all text content (this file)
     - profile.png   -> your photo
     - resume.pdf    -> the resume behind the "Resume" button

   To replace the photo or resume, overwrite the file with the same name
   (or change the import path below).

   Tips
   - Delete an item from a list to hide it. An empty list ([]) hides the
     whole section.
   - Skill icons use Devicon names (https://devicon.dev). If an icon
     can't load, the skill's initials are shown instead.
     Add `invert: true` for icons that are black (e.g. GitHub).
   - Add `level: 0-100` to any skill to show a progress bar.
   ===================================================================== */

import avatar from './profile.png';
import resume from './resume.pdf?url';
import ventureImage from './gomata-dairy.png';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

const portfolio = {
  profile: {
    name: 'Sudhir Buddepu',
    // Words that flash one by one in the opening animation, before your name appears
    intro: ['Think.', 'Build.', 'Deliver.'],
    roles: [
      'Java Full Stack Developer',
      'Senior Software Engineer',
      'Spring Boot & Microservices',
      'React.js Developer',
    ],
    tagline:
      'Senior Software Engineer specializing in Java backend and full-stack development: RESTful APIs, Spring Boot microservices and React.js applications.',
    avatar,
    resume,
    location: 'Bengaluru, Karnataka',
    email: 'sudhirbuddepu@gmail.com',
    phone: '+91 9347450695',
    availability: 'Senior Software Engineer @ Happiest Minds',
    bio: [
      'I am a Senior Software Engineer with nearly 3 years of professional experience in software development, specializing in Java backend and full-stack application development. I design and develop RESTful APIs and enterprise applications using Java, Spring Boot, Microservices and React.js.',
      'I am skilled in implementing JWT-based authentication, writing unit tests with JUnit and Mockito, and working with Docker and AWS infrastructure. My experience spans backend modernization, enterprise application development, client collaboration and cross-functional team environments.',
    ],
  },

  // icon options: github, linkedin, x, twitter, instagram, youtube, dribbble,
  // behance, medium, stackoverflow, facebook, leetcode, hackerrank, codechef,
  // geeksforgeeks, email, website
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sudhir-buddepu-504a3a226/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/sudhirbuddepu0695?tab=repositories', icon: 'github' },
    { name: 'Email', url: 'mailto:sudhirbuddepu@gmail.com', icon: 'email' },
  ],

  stats: [
    { label: 'Years of professional experience', value: 3, suffix: '' },
    { label: 'Enterprise projects delivered', value: 4, suffix: '' },
    { label: 'Students trained in Java & C', value: 250, suffix: '+' },
    { label: 'Certifications', value: 5, suffix: '' },
  ],

  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'Java', icon: 'java' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'SQL', icon: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg` },
        { name: 'Python', icon: 'python' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Spring Boot', icon: 'spring' },
        { name: 'Spring MVC', icon: 'spring' },
        { name: 'Microservices' },
        { name: 'RESTful APIs' },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React.js', icon: 'react' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'Bootstrap', icon: 'bootstrap' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'MongoDB', icon: 'mongodb' },
      ],
    },
    {
      category: 'Security & Testing',
      items: [
        { name: 'Spring Security', icon: 'spring' },
        { name: 'JWT Authentication' },
        { name: 'JUnit', icon: 'junit' },
        { name: 'Mockito' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS (EC2, S3, Lambda)', icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
        { name: 'Docker', icon: 'docker' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github', invert: true },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Postman', icon: 'postman' },
        { name: 'Swagger', icon: 'swagger' },
        { name: 'Jira', icon: 'jira' },
        { name: 'OpenMetadata' },
      ],
    },
  ],

  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Happiest Minds Technologies',
      location: 'Bengaluru, India',
      period: '04/2024 – Present',
      description:
        'Contributed to developing enterprise applications from the ground up, gaining experience in both frontend and backend development. Transitioned from frontend development to backend-focused responsibilities while working on client projects, collaborating with cross-functional teams, and delivering reliable software solutions.',
      highlights: [
        'Car Modernization: building Java / Spring Boot microservices for Sabre’s car rental platform.',
        'KPI Metric Miner: full-stack development of an enterprise KPI management app for PepsiCo.',
        'HM Connect: built the frontend of an internal workplace and desk-booking application.',
      ],
      tech: ['Java', 'Spring Boot', 'Microservices', 'React.js', 'REST APIs'],
    },
    {
      role: 'Freelance Technical Trainer',
      company: 'Bytexl',
      location: 'Vadodara, Gujarat',
      period: '01/2024 – 04/2024',
      description:
        'Delivered programming training to approximately 250 college students, focusing on C programming, Core Java and Object-Oriented Programming concepts. Developed strong technical communication and knowledge-sharing skills while helping students understand programming fundamentals.',
      highlights: [],
      tech: ['C', 'Core Java', 'OOP'],
    },
    {
      role: 'Front-End Developer',
      company: 'My Company',
      location: 'Visakhapatnam, India',
      period: '06/2022 – 11/2022',
      description:
        'Worked as a front-end development intern, contributing to the development of user-friendly web applications. Gained practical experience in building application interfaces, creating responsive layouts, and improving user experience through frontend development.',
      highlights: [],
      tech: [],
    },
  ],

  // `category` drives the filter buttons. `image`, `github` and `live` are optional.
  projects: [
    {
      title: 'Car Modernization',
      client: 'Sabre',
      role: 'Senior Software Engineer · Java Backend Developer',
      period: '07/2026 – Present',
      category: 'Backend',
      description:
        'A modern car rental platform for Sabre, modernizing car rental business operations through scalable backend services and microservices architecture. Building backend components and RESTful APIs with Java and Spring Boot, translating business requirements into technical solutions, and working closely with client stakeholders on requirement analysis, API integration and backend implementation.',
      tags: ['Java', 'Spring Boot', 'Microservices', 'REST APIs'],
      image: '',
      github: '',
      live: '',
      featured: true,
    },
    {
      title: 'KPI Metric Miner',
      client: 'PepsiCo',
      role: 'Software Engineer · Java Full Stack Developer',
      period: '08/2025 – 07/2026',
      category: 'Full Stack',
      description:
        'An enterprise KPI management application for PepsiCo to create, manage and evaluate Key Performance Indicators by gathering relevant business data. Worked across frontend and backend: implementing features, developing RESTful APIs and integrating frontend components with backend services.',
      tags: ['Java', 'Spring Boot', 'React.js', 'REST APIs'],
      image: '',
      github: '',
      live: '',
      featured: true,
    },
    {
      title: 'HM Connect',
      client: 'Happiest Minds Technologies',
      role: 'Software Engineer · Front End Developer',
      period: '02/2025 – 07/2025',
      category: 'Frontend',
      description:
        'An internal workplace management application that improves office space utilization. Played a key role in building it from the ground up: interfaces that let employees view office floor layouts, locate available workstations, reserve desks and book meeting rooms.',
      tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
      image: '',
      github: '',
      live: '',
      featured: false,
    },
    {
      title: 'Get In Touch',
      client: 'Bytexl',
      role: 'Front-End Development Intern',
      period: '07/2022 – 08/2024',
      category: 'Frontend',
      description:
        'A user-friendly web application built from the ground up to connect users with products and services through a digital platform. Built interactive user interfaces and responsive layouts, and improved the overall user experience.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      image: '',
      github: '',
      live: '',
      featured: false,
    },
  ],

  // Startup / venture section. Set to null to hide it.
  venture: {
    badge: 'My Startup',
    role: 'Founder',
    name: 'Gomata Dairy',
    tagline: 'Dairy is a culture.',
    motto: 'Sustaining Quality, Nourishing Lives',
    description:
      'Beyond software, I am building Gomata Dairy, a dairy farming venture based in Rajam, Andhra Pradesh. It is built on the belief that dairy is more than a business: it is a culture, and quality is something we owe every family we serve.',
    image: ventureImage,
    location: 'Maredubaka, Rajam, 532127',
    phone: '+91 9347450695',
    email: 'sudhirbuddepu0695@gmail.com',
    website: 'https://sudhirbuddepu0695.wixsite.com/mysite',
  },

  education: [
    {
      degree: 'Bachelor of Technology in Information Technology',
      school: 'GMR Institute of Technology (GMRIT)',
      period: '2019 – 2023',
      details: 'Rajam, Andhra Pradesh, India',
    },
  ],

  certifications: [
    { name: 'Java Full Stack Development', issuer: 'Coursera', year: '', url: '' },
    { name: 'React Development', issuer: 'Coursera', year: '', url: '' },
    { name: 'Machine Learning', issuer: 'Coursera', year: '', url: '' },
    { name: 'Java Programming', issuer: 'Wipro', year: '', url: '' },
    { name: 'Front-End Development', issuer: 'MYC', year: '', url: '' },
  ],

  contact: {
    heading: "Let's build something great together",
    message:
      'Looking for a Java full-stack developer, have a project in mind, or just want to connect? Reach out through any of these.',
    ctaTitle: 'Want my resume?',
    ctaText: 'Everything about my experience, projects and skills, in one document.',
  },
};

export default portfolio;
