export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 5,
    name: 'Resume',
    href: '#resume',
  },
];

export const myProjects = [
  {
    title: 'DreamNest - A Rental Application',
    desc: 'DreamNest is a comprehensive rental application designed to simplify the process of finding and managing rental properties. With features like property listings, tenant management, and payment processing, it provides a seamless experience for both landlords and tenants.',
    subdesc:
      'Built with Tech stack(MERN): MongoDB, Express.js, React.js and Node.js. DreamNest delivers a smooth, responsive experience while being robust and scalable for future growth.',
    href: 'https://dreamnest-project-frontend1.onrender.com/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    isDeployed: true,
    tags: [
      {
        id: 1,
        name: 'MongoDB',
        path: '/assets/mongo-db.png',
      },
      {
        id: 2,
        name: 'Express.js',
        path: 'assets/express-js.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/node.png',
      },
    ],
  },
  {
    title: 'Jobs Portal Application',
    desc: 'Developed a stunning frontend design using ReactJS where users can search for jobs and add/notify jobs in the application if any present. In this application the user can perform all the CRUD operations.',
    subdesc:
      'Built entirely with React.js, this application allows users to search, add and manage job listings directly within the app. It supports full CRUD operations. The intuitive user interface ensures a smooth user experience.',
    href: 'https://github.com/Nagalakshman410/React-Jobs-Project',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/jobPortal.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    isDeployed: false,
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'JavaScript',
        path: '/assets/js.jpg',
      },
    ],
  },
  {
    title: 'BestBags Ecommerce Solution',
    desc: 'BestBags is a cutting-edge ecommerce platform that simplifies the online shopping experience. With features like product listings, shopping cart functionality, and secure payment processing, it provides a seamless experience for both buyers and sellers.',
    subdesc:
      'Built with Tech stack(MERN): MongoDB, Express.js, React.js and Node.js. With Stripe for payment processing, this platform demonstrates full-stack development skills, efficient state management, and responsive design.',
    href: 'https://github.com/Nagalakshman410/BestBagsEcommerceWebsite',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/bestBags.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    isDeployed: false,
    tags: [
      {
        id: 1,
        name: 'MongoDB',
        path: '/assets/mongo-db.png',
      },
      {
        id: 2,
        name: 'Express.js',
        path: 'assets/express-js.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/node.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Target Corporation',
    pos: 'Software Developer Intern',
    duration: 'Feb - Aug 2025',
    title: "Worked as a Software Developer Intern building and maintaining backend services using Java Spring Boot. Designed secure, high-performance RESTful APIs, gained hands-on experience with Apache Kafka for real-time data streaming and collaborated in Agile teams using PostgreSQL and other technologies.",
    icon: '/assets/tgt.jpg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'CodSoft',
    pos: 'Web Developement Intern',
    duration: 'Oct - Nov 2023',
    title: "Worked as a Web Development Intern in CodSoft, gaining hands-on experience in frontend development using HTML, CSS and JavaScript, while enhancing technical skills and practical industry knowledge through project work.",
    icon: '/assets/codSoft.avif',
    animation: 'clapping',
  },
];
