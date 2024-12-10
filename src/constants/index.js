import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  pafex,
  noori,
  real,
  cafe,
  weather,
  dalle,
  saas,
  profile,
  face,
  namaz,
  threejs,
  iphone,
  imaginify,
  live,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN/MEAN Stack Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Node.JS Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "TechCharm",
    icon: noori,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Developed scalable applications using Angular, NgRx, and REST API integration, achieving a 20% improvement in data processing efficiency.",
      "Implemented comprehensive state management with NgRx, enhancing component interaction across complex UI elements.",
      "Lead developer in creating customer-focused Angular-based web applications",
      "Provide technical mentorship and solutions to enhance team performance.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Pafex Courier & Cargo",
    icon: pafex,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Aug 2024",
    points: [
      "Mentored junior developers, conducting code reviews and knowledge-sharing sessions to foster professional growth and skill enhancement.",
      "Coordinated cross-functional teams, facilitating seamless collaboration between frontend, backend, and design teams to meet project deadlines effectively.",
      "Implementing design principles and ensuring visual consistency across different platforms and devices.",
      "Participating in design reviews and providing constructive feedback to other designers.",
    ],
  },

  {
    title: "Full Stack Developer Intern",
    company_name: "Pafex Courier & Cargo",
    icon: pafex,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Nov 2023",
    points: [
      "Built dynamic frontend interfaces with React.js and Tailwind CSS, ensuring seamless user experiences.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented RESTful APIs to facilitate efficient communication between the frontend and backend, optimizing data flow and reducing latency by 15%.",
      "Designed and maintained MongoDB databases to ensure efficient data storage and retrieval, enhancing application performance",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rafey proved me wrong.",
    name: "Mudakkir Shaikh",
    designation: "CEO",
    company: "Pafex Co",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rafey does.",
    name: "Khalid Ansari",
    designation: "Chairman",
    company: "TechCharm India",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rafey optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Amaan Shaikh",
    designation: "GM",
    company: "Pafex Co",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "TshirtJS",
    description:
      "A fully-responsive 3d SaaS website using ReactJS, ThreeJS, ExpressJS and OpenAI API for customizing the Tshirt using color images and with the help of AI to generate logos and patterns and one can download it",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },
    ],
    image: saas,
    logo: live,
    source_code_link: "https://tshirtjs.netlify.app/",
  },
  {
    name: "NooriAI-Image Generator",
    description:
      "A fully-responsive interactive website using MERN Stack, Cloudinary and OpenAI API for generating the image using text/voice with the help of AI and customize it using effects like grayscale,sepia and blur and also user can share it on the community and one can download it",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    logo: live,
    source_code_link: "https://nooriai.netlify.app/",
  },
  {
    name: "Real Estate Management",
    description:
      "Real Estate Management Website using ReactJS NodeJS ExpressJS and MongoDB with user creation and verification and email response to client !",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: real,
    logo: live,
    source_code_link: "https://uyorooms.netlify.app/",
  },
  {
    name: "Online Cafe",
    description:
      "Python project for small cafe's on Online Promotion & Selling services and products on large scale",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "json",
        color: "pink-text-gradient",
      },
    ],
    image: cafe,
    logo: github,
    source_code_link: "https://github.com/rafeldo36/cafe-delight",
  },
  // {
  //   name: "Weather Info",
  //   description:
  //     "Weather Info using HTML,CSS,JavaScript and Weather API",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Weather API",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: weather,
  //   logo: live,
  //   source_code_link: "https://rafeldo36.github.io/weather/",
  // },
  {
    name: "Namaz Time Indicator",
    description: "Namaz Time Indicator using HTML,CSS,JavaScript and Salah API",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Salah API",
        color: "pink-text-gradient",
      },
    ],
    image: namaz,
    logo: live,
    source_code_link: "https://rafeldo36.github.io/namaz/",
  },
  {
    name: "Face Recognition based Attendance System",
    description:
      "Face recognition based attendance system using Python. Third Year 6th Sem project for Machine Learning      ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: face,
    logo: github,
    source_code_link:
      "https://github.com/rafeldo36/face-recognition-based-attendancy-system",
  },
  {
    name: "PortFolio",
    description:
      "A fully-responsive portfolio website using HTML,CSS,JavaScript",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: profile,
    logo: live,
    source_code_link: "https://rafeldo36.github.io/profile/",
  },
  {
    name: "Imaginify",
    description:
      "A fully-responsive interactive website using NEXT.JS, TypeScript and Cloudinary AI for manipulating the image with the help of AI and customize it using features like image restore, generative fill, object remove, object recolor, and background remove, also user can share it on the community and one can download it",
    tags: [
      {
        name: "NEXT.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Cloudinary AI",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: imaginify,
    logo: live,
    source_code_link: "https://imaginify-kappa-two.vercel.app/",
  },
  {
    name: "Apple iPhone 15 Pro",
    description:
      "A fully-responsive interactive website using React.JS, GSAP animations and React Three Fiber for representing the new Apple iPhone 15 Pro with its 3d Model for closer view and titanium look and different color perception also we have implemented Sentry for optimizing the performance and to resolve issues.",
    tags: [
      {
        name: "React.JS",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "React Three Fiber",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    logo: live,
    source_code_link: "https://1phone15.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
