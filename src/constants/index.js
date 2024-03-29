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
    title: "Frontend Developer",
    icon: backend,
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
  /*{
    name: "TypeScript",
    icon: typescript,
  },*/
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
  /*{
    name: "Git/Github",
    icon: git,
  },
    {
    name: "figma",
    icon: figma,
  },*/
];

// experiences object array(used in experience)
const experiences = [
  {
    title: "Frontend Engineering Intern-Web",
    company_name: "Purplle.com",
    company_url: "https://www.purplle.com/",
    icon: purplle,
    iconBg: "#f9d3e8",
    date: "July 2023-Present",
    points: [
      "Working as a Frontend Engineering Intern at Purplle.com",
      "Learned AngularJs as new tech stack",
      "Optimsed, cleaned and removed 2500+ lines of unused code",
      "Learned about BEM methodology, modern UI practicess understanding web vitals and lighthouse performance reports",
      "Have performed sanity tests and optimisied listing and product pages for the website",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Datastack Technologies",
    company_url: "https://www.datastack.tech/",
    icon: datastack,
    iconBg: "#383E56",
    date: "Nov 2021 - Mar 2022",
    points: [
      "Worked on multiple projects",
      "Built a javascript quiz app with a team of 3",
      "Worked on businessinternet.us website",
      "Worked as frontend developer and backend debugging in django, flask,sql, nodejs",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Tech 2 Edge",
    company_url: "https://tech2edge.co/home",
    icon: tech2edge,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Dec 2021",
    points: [
      "Worked as a frontend web developer",
      "Completed few tasks and learned a lot about frontend web development libraries",
      "Worked in a good team and on various company websites.",
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
