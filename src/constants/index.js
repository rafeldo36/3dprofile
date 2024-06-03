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
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
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
    title: "Graphic Designer",
    company_name: "Noori",
    icon: noori,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Creating visually appealing graphics and layouts for web and print media using design software such as Adobe Creative Suite (Photoshop, Illustrator) & InkScape.",
      "Collaborating with cross-functional teams including designers, product managers, and developers to create high-quality visual content.",
      "Implementing design principles and ensuring visual consistency across different platforms and devices.",
      "Participating in design reviews and providing constructive feedback to other designers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Pafex Couriers & Cargo",
    icon: pafex,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using React.js, Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rafey does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rafey optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
    source_code_link: "https://github.com/rafeldo36/uyorooms/",
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
    source_code_link: "https://github.com/rafeldo36/cafe-delight",
  },
  {
    name: "Weather Info",
    description:
      "Weather Info using HTML,CSS,JavaScript and Weather API",
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
        name: "Weather API",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://rafeldo36.github.io/weather/",
  },
  {
    name: "Namaz Time Indicator",
    description:
      "Namaz Time Indicator using HTML,CSS,JavaScript and Salah API",
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
    source_code_link: "https://github.com/rafeldo36/face-recognition-based-attendancy-system",
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
    source_code_link: "https://rafeldo36.github.io/profile/",
  },
];

export { services, technologies, experiences, testimonials, projects };
