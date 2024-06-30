//update the index.js and assets accordingly in ./src/assets to import here
// This file can be edited according to ur personal details to be reflected everywhere throughout the website, instead of updating it in every components, also Home.jsx in ./src/components

import {
  logo,
  mobile,
  backend,
  creator,
  web,
  github,
  javascript,
  bootstrap,
  cpp,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  angular,
  sass,
  tech2edge,
  datastack,
  healthmanagement,
  streamchat,
  portfoliotemplate,
  purplle,
  nextjs,
} from "../assets";

//array of links for navbar
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

// services object array(used in overview)
const services = [
  {
    title: "Frontend Engineer, UI/UX Development",
    icon: backend,
  },
  {
    title: "Web Developer (MERN & MEAN Stack)",
    icon: web,
  },
  {
    title: "C++ DSA, OOPS, Problem Solving",
    icon: creator,
  },
  {
    title: "Debugging, Testing, Deployment",
    icon: mobile,
  },
];

// technologies I know, there are many more
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3, SASS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "C++",
    icon: cpp,
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Git/Github",
    icon: github,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "NextJS",
    icon: nextjs,
  },
];

// experiences object array(used in experience)
const experiences = [
  {
    title: "Frontend Engineering Intern",
    company_name: "Purplle.com",
    company_url: "https://www.purplle.com/",
    icon: purplle,
    iconBg: "#f9d3e8",
    date: "July 2023-Present",
    points: [
      "Optimized and minified 20k+ lines of code, enhancing system efficiency, and conducted UI sanity checks and testing to ensure optimal user experience.",
      "Successfully resolved 8-9 production bugs, implemented 4-5 new features, and addressed 30+ JIRA tickets in collaboration with QA and UI/UX teams.",
      "Proficiency in BEM methodology, modern UI/UX practices, web vitals, GitLab, and Git branching, JIRA and Agile methodology concepts.",
      "Solved tasks outside my usual domain, demonstrating flexibility, adaptability, solving skills.",
      "Developed an automation tool which was used by the catalog team of 5+ members to generate product content.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Datastack Technologies",
    company_url: "https://www.datastack.tech/",
    icon: datastack,
    iconBg: "#fff",
    date: "Nov 2021 - Mar 2022",
    points: [
      "Worked as Web developer for 5 months.",
      "Revamped production ready website for a US based company in 4 months with 1000+ users and performed debugging.",
      "Co-created a JavaScript grit assessment app with a team of 3.",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Tech 2 Edge",
    company_url: "https://tech2edge.co/home",
    icon: tech2edge,
    iconBg: "#000",
    date: "Oct 2021 - Dec 2021",
    points: [
      "Contributed as an assistant frontend developer for 2 months.",
      "Developed the UI for Fashion Panda website with 1500+ users.",
      "Learned about new 2-3 frontend libraries and frameworks.",
    ],
  },
];

// Testimonials if any
const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Jane Doe",
    designation: "CFO",
    company: "Lorem Ipsum",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "John Doe",
    designation: "COO",
    company: "Ipsum Lorem",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Jane John",
    designation: "CFO",
    company: "Lorem Ipsum",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

// My projects, need to update
const projects = [
  {
    name: "Simple Portfolio Template",
    description:
      "Simple portfolio template built in html, css, javascript, with good ux ui and can be used by anyone to have a simple portfolio website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfoliotemplate,
    source_code_link: "https://github.com/gunjan1909/portfolio-template",
  },
  {
    name: "Stream Chat",
    description:
      "Chat applicatio built using react, typescript, fastify for backend, nodejs, vite and stream chat api, tailwindcss.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "stream",
        color: "orange-text-gradient",
      },
    ],
    image: streamchat,
    source_code_link: "https://github.com/gunjan1909/react-stream-chatapp",
  },

  {
    name: "Health Management",
    description:
      "Health management and appointment web app with multiple features like appointment booking, diet/calories tracker etc.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: healthmanagement,
    source_code_link: "https://github.com/gunjan1909/Health-Management",
  },
];

export { services, technologies, experiences, testimonials, projects };
