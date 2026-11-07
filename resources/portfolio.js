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

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

const portfolio = {
  profile: {
    name: 'Lavanya Kalisetti',

    intro: ['Code.', 'Create.', 'Innovate.'],

    roles: [
      'Software Engineer',
      'Java Backend Developer',
      'Spring Boot Developer',
      'Microservices Developer',
    ],

    tagline:
      'Software Engineer specializing in Java backend development, Spring Boot microservices, RESTful APIs, secure authentication, and enterprise application development.',

    avatar,
    resume,

    location: 'Hyderabad, Telangana',

    email: 'lavanyakalisetti2002@gmail.com',

    phone: '9381002987',

    availability: 'Software Engineer @ Dhatvi Business Solutions',

    bio: [
      'I am a Software Engineer with 1 year of professional experience in software development, specializing in Java backend development and enterprise application development. I work with Java, Spring Boot, Spring Security, Microservices, JPA/Hibernate, and PostgreSQL to develop secure and scalable RESTful APIs.',
      
      'My experience includes implementing JWT-based authentication and authorization, API Gateway integration, database operations, input validation, centralized exception handling, and structured logging. I also work with JUnit, Postman, Swagger/OpenAPI, and React Native API integration to deliver reliable application features.',
    ],
  },

  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lavanya-kalisetti-115272299/',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:lavanyakalisetti2002@gmail.com',
      icon: 'email',
    },
  ],

  stats: [
    {
      label: 'Years of professional experience',
      value: 1,
      suffix: '+',
    },
    {
      label: 'Major enterprise projects',
      value: 2,
      suffix: '',
    },
    {
      label: 'Core backend technologies',
      value: 8,
      suffix: '+',
    },
    {
      label: 'Professional awards',
      value: 2,
      suffix: '',
    },
  ],

  skills: [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Java', icon: 'java' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'SQL' },
      ],
    },

    {
      category: 'Backend Development',
      items: [
        { name: 'Spring', icon: 'spring' },
        { name: 'Spring Boot', icon: 'spring' },
        { name: 'Spring MVC', icon: 'spring' },
        { name: 'Spring Security', icon: 'spring' },
        { name: 'Microservices' },
        { name: 'REST APIs' },
        { name: 'JPA / Hibernate' },
      ],
    },

    {
      category: 'Frontend & Mobile Development',
      items: [
        { name: 'React.js', icon: 'react' },
        { name: 'React Native', icon: 'react' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
      ],
    },

    {
      category: 'Databases',
      items: [
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'SQL', icon: 'sql' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'PL/SQL' },
      ],
    },

    {
      category: 'Security & Testing',
      items: [
        { name: 'JWT Authentication' },
        { name: 'JUnit', icon: 'junit' },
        { name: 'Unit Testing' },
        { name: 'Integration Testing' },
        { name: 'API Testing' },
      ],
    },

    {
      category: 'Development Tools',
      items: [
        { name: 'Postman', icon: 'postman' },
        { name: 'Swagger', icon: 'swagger' },
        { name: 'Maven', icon: 'maven' },
        { name: 'Gradle', icon: 'gradle' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github', invert: true },
        { name: 'Jenkins', icon: 'jenkins' },
        { name: 'Jira', icon: 'jira' },
        { name: 'SLF4J' },
      ],
    },
  ],

  experience: [
    {
      role: 'Software Engineer | Java Developer',

      company: 'Dhatvi Business Solutions Pvt. Ltd.',

      location: 'Hyderabad, Telangana, India',

      period: '08/2025 – Present',

      description:
        'Working as a Java Backend Developer, developing secure and scalable RESTful APIs and microservices for e-commerce applications using Java, Spring Boot, Spring Security, JWT, and PostgreSQL. Collaborating with frontend developers, QA engineers, and cross-functional teams to deliver stable and production-ready application features.',

      highlights: [
        'Developed secure RESTful APIs using Java, Spring Boot, Spring Security, and JWT authentication.',
        'Implemented microservices architecture with API Gateway routing and load balancing.',
        'Designed PostgreSQL database schemas and optimized SQL queries.',
        'Implemented request validation, centralized exception handling, and structured logging using SLF4J.',
        'Performed unit and integration testing using JUnit.',
        'Documented and tested APIs using Swagger/OpenAPI and Postman.',
        'Collaborated with frontend and QA teams on API integration, debugging, and code reviews.',
      ],

      tech: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Microservices',
        'JWT',
        'PostgreSQL',
        'JUnit',
      ],
    },
  ],

  projects: [
    {
      title: 'ZestBot – Vendor Application',

      client: 'Dhatvi Business Solutions',

      role: 'Java Backend Developer',

      period: '08/2025 – Present',

      category: 'Backend',

      description:
        'A vendor-side e-commerce platform that enables sellers to manage products, inventory, and orders through secure and scalable backend services. Developed RESTful APIs using Java, Spring Boot, Spring Security, and JWT authentication. Implemented microservices architecture with API Gateway routing, PostgreSQL database operations, DTOs, Bean Validation, centralized exception handling, and structured logging. Also contributed to unit testing, API documentation, debugging, and performance improvements.',

      tags: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Microservices',
        'JWT',
        'PostgreSQL',
        'JUnit',
        'Swagger',
      ],

      image: '',
      github: '',
      live: '',
      featured: true,
    },

    {
      title: 'ZestBot – Consumer Application',

      client: 'Dhatvi Business Solutions',

      role: 'Java Backend Developer',

      period: '08/2025 – Present',

      category: 'Full Stack',

      description:
        'A consumer-facing e-commerce application that allows customers to browse products, manage shopping carts, place orders, and track purchases through a mobile experience. Developed scalable REST APIs and microservices using Java and Spring Boot, implemented JWT-based authentication, pagination, filtering, and sorting, and designed PostgreSQL data models. Integrated React Native screens with backend APIs and handled loading, navigation, error, and empty states.',

      tags: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'React Native',
        'Microservices',
        'PostgreSQL',
        'REST APIs',
        'JWT',
      ],

      image: '',
      github: '',
      live: '',
      featured: true,
    },
  ],

  venture: null,

  education: [
    {
      degree: 'Bachelor of Technology',

      school: 'Sri Sivani College of Engineering – JNTU',

      period: '2020 – 2024',

      details: 'Chilakapalem, Andhra Pradesh, India',
    },
  ],

  certifications: [
    {
      name: 'Full Stack Java',
      issuer: 'Naresh i Technologies',
      year: '',
      url: '',
    },
    {
      name: 'Programming in Java',
      issuer: 'NPTEL',
      year: '',
      url: '',
    },
    {
      name: 'Career Edge – Young Professional',
      issuer: 'TCS iON',
      year: '',
      url: '',
    },
  ],

  awards: [
    {
      name: 'Best Employee of the Month',
      issuer: 'Dhatvi Business Solutions Pvt. Ltd.',
    },
    {
      name: 'Performer of the Year',
      issuer: 'Dhatvi Business Solutions Pvt. Ltd.',
    },
  ],

  contact: {
    heading: "Let's build something great together",

    message:
      'Looking for a Java Backend Developer, have an exciting project, or want to collaborate? Feel free to connect with me.',

    ctaTitle: 'Want my resume?',

    ctaText:
      'Explore my professional experience, technical skills, projects, and achievements.',
  },
};

export default portfolio;
