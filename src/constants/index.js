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
  sass,
  tech2edge,
  datastack,
  healthmanagement,
  streamchat,
  portfoliotemplate,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "C++ DSA",
    icon: creator,
  },
  {
    title: "Web Designing and Debugging",
    icon: backend,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "C++",
    icon: cpp,
  },
  /* {
    name: "TypeScript",
    icon: typescript,
  },*/
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: sass,
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
    name: "git",
    icon: git,
  },
  /*  {
    name: "figma",
    icon: figma,
  },*/
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Datastack Technologies",
    icon: datastack,
    iconBg: "#383E56",
    date: "Nov 2021 - Mar 2022",
    points: [
      "Worked on multiple projects",
      "Built a javascript quiz app with a team of 3",
      " Worked on businessinternet.us website: https://businessinternet-vcomy.ondigitalocean.app/",
      "Worked as frontend developer and backend debugging in django, flask,sql, nodejs",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Tech 2 Edge",
    icon: tech2edge,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Dec 2021",
    points: [
      "Worked as a frontend web developer",
      "Completed few tasks and learned a lot about frontend web development libraries",
      "Worked in a good team and on various company websites.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Lorem Ipsum",
    icon: logo,
    iconBg: "#383E56",
    date: "June 2023-Present",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
];

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
      "Chat applicatio built using react, typescript, fastify for backend, nodejs, vite and stream chat api, tailwindcss",
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
