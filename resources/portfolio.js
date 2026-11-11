
/* =====================================================================
   PORTFOLIO DATA: Everything on the website comes from this file.

   Files:
   - portfolio.js -> All portfolio content
   - profile.png  -> Your profile photo
   - resume.pdf   -> Your downloadable resume

   Update content here without modifying the React components.
   ===================================================================== */

import avatar from './profile.png';
import resume from './resume.pdf?url';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

const portfolio = {

  // ================================================================
  // PROFILE
  // ================================================================

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
      'Software Engineer with 1+ year of experience in Java backend development, building secure REST APIs and microservices using Spring Boot, Spring Security, JPA/Hibernate, and PostgreSQL.',

    avatar,
    resume,

    location: 'Hyderabad, Telangana, India',

    email: 'lavanyakalisetti2002@gmail.com',

    phone: '+91 9381002987',

    availability: 'Software Engineer @ Dhatvi Business Solutions',

    bio: [
      'I am a Software Engineer with 1+ year of professional experience at Dhatvi Business Solutions Pvt. Ltd., specializing in Java backend development and enterprise application development. I develop and maintain secure REST APIs and microservices for e-commerce applications using Java, Spring Boot, Spring Security, Spring Data JPA/Hibernate, and PostgreSQL.',

      'My experience includes implementing JWT-based authentication and role-based authorization, API Gateway routing, pagination, database indexing, request validation, centralized exception handling, and structured logging. I also work with JUnit for unit and integration testing, Postman, Swagger/OpenAPI, and collaborate with frontend, QA, and product teams in Agile environments.',

      'I have contributed to two e-commerce applications: ZestBot Vendor Application and ZestBot Consumer Application. I was also recognized with Best Employee of the Month and Performer of the Year awards for my contributions.'
    ],

  },

  // ================================================================
  // SOCIAL LINKS
  // ================================================================

  socials: [

    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lavanya-kalisetti-115272299/',
      icon: 'linkedin',
    },

    {
      name: 'GitHub',
      url: 'https://github.com/LavanyaKalisetti',
      icon: 'github',
    },

    {
      name: 'Email',
      url: 'mailto:lavanyakalisetti2002@gmail.com',
      icon: 'email',
    },

  ],

  // ================================================================
  // PROFESSIONAL STATISTICS
  // ================================================================

  stats: [

    {
      label: 'Years of professional experience',
      value: 1,
      suffix: '+',
    },

    {
      label: 'E-commerce applications',
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

  // ================================================================
  // TECHNICAL SKILLS
  // ================================================================

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
        { name: 'Spring Boot', icon: 'spring' },
        { name: 'Spring MVC', icon: 'spring' },
        { name: 'Spring Security', icon: 'spring' },
        { name: 'Spring Data JPA' },
        { name: 'Hibernate' },
        { name: 'Microservices' },
        { name: 'REST APIs' },
        { name: 'API Gateway' },
      ],
    },

    {
      category: 'Frontend Development',

      items: [
        { name: 'React', icon: 'react' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
      ],
    },

    {
      category: 'Databases',

      items: [
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'SQL' },
        { name: 'PL/SQL' },
        { name: 'MongoDB', icon: 'mongodb' },
      ],
    },

    {
      category: 'Security & Testing',

      items: [
        { name: 'JWT Authentication' },
        { name: 'Role-Based Authorization' },
        { name: 'JUnit' },
        { name: 'Unit Testing' },
        { name: 'Integration Testing' },
        { name: 'API Testing' },
      ],
    },

    {
      category: 'Development Tools',

      items: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github', invert: true },
        { name: 'Maven', icon: 'maven' },
        { name: 'Gradle', icon: 'gradle' },
        { name: 'Jenkins', icon: 'jenkins' },
        { name: 'Jira', icon: 'jira' },
        { name: 'Swagger/OpenAPI', icon: 'swagger' },
        { name: 'Postman', icon: 'postman' },
        { name: 'SLF4J' },
      ],
    },

  ],

  // ================================================================
  // PROFESSIONAL EXPERIENCE
  // ================================================================

  experience: [

    {

      role: 'Software Engineer | Java Developer',

      company: 'Dhatvi Business Solutions Pvt. Ltd.',

      location: 'Hyderabad, Telangana, India',

      period: 'Aug 2025 – Present',

      description:
        'Working as a Software Engineer specializing in Java backend development, developing and maintaining secure REST APIs and microservices for two e-commerce applications: Vendor and Consumer. Working with Java, Spring Boot, Spring Security, JWT, Spring Data JPA/Hibernate, and PostgreSQL to build reliable backend services.',

      highlights: [

        'Developed and maintained secure REST APIs and microservices using Java, Spring Boot, Spring Security, JWT, and PostgreSQL for vendor and consumer e-commerce applications.',

        'Optimized product-listing APIs by implementing pagination and database indexing to retrieve product records efficiently instead of loading the entire catalog.',

        'Implemented JWT-based authentication and role-based authorization to secure application resources and control user access.',

        'Designed database entities and repositories using Spring Data JPA/Hibernate and optimized PostgreSQL queries.',

        'Developed JUnit unit and integration tests for core services to help reduce regression issues across releases.',

        'Implemented request validation, centralized exception handling, and structured application logging.',

        'Collaborated with frontend, QA, and product teams through Agile sprints, code reviews, debugging, and release support.',

      ],

      tech: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Spring Data JPA',
        'Hibernate',
        'Microservices',
        'JWT',
        'PostgreSQL',
        'JUnit',
        'Swagger/OpenAPI',
      ],

    },

  ],

  // ================================================================
  // PROJECTS
  // ================================================================

  projects: [

    // --------------------------------------------------------------
    // PROJECT 1: ZESTBOT VENDOR APPLICATION
    // --------------------------------------------------------------

    {

      title: 'ZestBot – Vendor Application',

      client: 'Dhatvi Business Solutions',

      role: 'Java Backend Developer',

      period: 'Aug 2025 – Present',

      category: 'Backend',

      description:
        'A vendor-side e-commerce platform that enables sellers to manage products, inventory, and orders. Developed secure REST APIs using Java and Spring Boot, implementing Spring Security with JWT authentication and role-based authorization to ensure vendors can access only their own products and orders. Worked on microservices architecture, API Gateway routing, PostgreSQL database design, and optimized queries. Applied layered architecture with Spring Data JPA/Hibernate, DTOs, Bean Validation, centralized exception handling, SLF4J logging, and JUnit testing.',

      tags: [

        'Java',
        'Spring Boot',
        'Spring MVC',
        'Spring Security',
        'JWT',
        'Spring Data JPA',
        'Hibernate',
        'PostgreSQL',
        'Microservices',
        'API Gateway',
        'JUnit',
        'Swagger/OpenAPI',
        'Postman',

      ],

      image: '',
      github: '',
      live: '',
      featured: true,

    },

    // --------------------------------------------------------------
    // PROJECT 2: ZESTBOT CONSUMER APPLICATION
    // --------------------------------------------------------------

    {

      title: 'ZestBot – Consumer Application',

      client: 'Dhatvi Business Solutions',

      role: 'Java Backend Developer',

      period: 'Aug 2025 – Present',

      category: 'Backend',

      description:
        'A consumer-facing e-commerce platform that allows customers to browse products, place orders, and track purchases through a mobile application. Developed REST APIs using Java and Spring Boot for product browsing, pagination, filtering, sorting, order history, and order tracking. Implemented secure customer authentication using Spring Security and JWT. Designed PostgreSQL data models using Spring Data JPA/Hibernate, optimized database queries, and implemented request validation, centralized exception handling, and structured logging. Worked with JUnit, Postman, and Swagger/OpenAPI for testing and API documentation.',

      tags: [

        'Java',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'Spring Data JPA',
        'Hibernate',
        'PostgreSQL',
        'Microservices',
        'API Gateway',
        'REST APIs',
        'JUnit',
        'Swagger/OpenAPI',
        'Postman',

      ],

      image: '',
      github: '',
      live: '',
      featured: true,

    },

  ],

  // ================================================================
  // VENTURE
  // ================================================================

  venture: null,

  // ================================================================
  // EDUCATION
  // ================================================================

  education: [

    {

      degree: 'Bachelor of Technology (B.Tech) – Computer Science and Engineering',

      school: 'Sri Sivani College of Engineering',

      period: '2020 – 2024',

      details:
        'Chilakapalem, Andhra Pradesh, India | Affiliated to JNTU Vizianagaram | CGPA: 8.11',

    },

  ],

  // ================================================================
  // CERTIFICATIONS
  // ================================================================

  certifications: [

    {

      name: 'Full Stack Java',

      issuer: 'Naresh i Technologies',

      year: '2024',

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

  // ================================================================
  // AWARDS AND RECOGNITION
  // ================================================================

  awards: [

    {

      name: 'Best Employee of the Month',

      issuer: 'Dhatvi Business Solutions Pvt. Ltd.',

    },

    {

      name: 'Performer of the Year',

      issuer: 'Dhatvi Business Solutions Pvt. Ltd. – Anniversary Celebrations',

    },

  ],

  // ================================================================
  // CONTACT SECTION
  // ================================================================

  contact: {

    heading: "Let's build something great together",

    message:
      'Looking for a Java Backend Developer, have an exciting project, or want to collaborate? I would love to connect and discuss opportunities in Java, Spring Boot, backend development, and microservices.',

    ctaTitle: 'Want my resume?',

    ctaText:
      'Explore my professional experience, technical skills, e-commerce projects, certifications, and achievements. Download my resume to know more about my professional journey.',

  },

};

export default portfolio;
