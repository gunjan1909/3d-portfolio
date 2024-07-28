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
    date: "July 2023-July 2024",
    points: [
      // "Tech Stack and skills: Angular, PDS library, HTML, SCSS, TypeScript, CSS, GitLab, JIRA, BEM Methodology, Modern UI/UX Practices, Google Apps Script, Core Web Vitals, Git Branching, Agile Methodology Concepts.",
      // "Minified and optimized 20k+ lines of TypeScript and CSS, enhancing system efficiency and reducing LOC and bundle sizes in deployment. Resolved 10-11 production bugs, launched 5-6 new features, addressed over 30+ JIRA tickets.",
      // "Conducted UI sanity checks, ensuring optimal UX; acquired proficiency in BEM methodology and modern UI/UX practices, reduced main-thread utilization of browser from 4+ seconds to 3+ seconds.",
      // "Solved tasks outside my usual domain, demonstrating flexibility, adaptability, solving skills.",
      // "Worked together closely with 2-3 teams like UI/UX, QA, etc., demonstrated flexibility by solving tasks outside the usual domain.",
      // "Developed an automation tool in 1 week for the catalog team to generate product content, leveraged by 5+ members.",
      // "Integrated PDS(Purplle Design System) library in listing and product modules/pages. Executed auto-scroll restore in Angular and fixed login popup errors in 2-3 days each.",
      // "Generated an A+ content automation tool in 5 days and presented it to the product managers, implemented customer support features in 1 day.",
      // "Added vernacular support in webview providing the feature to 30-50% users in 1 month of beta testing.",
      // "Revamped the font family of the entire application in 2 days reducing the CSS bundle size by 50%, analyzed browser render engines for 3+ OS and devices.",
      // "Fixed critical header/footer UI bugs (3-4), achieved pincode syncing feature in 1 week, resolved pageview event errors, product widget UI fixes, payment and wishlist page bugs in 2 days.",
      "Tech Stack: Angular, PDS library, HTML, SCSS, TypeScript, CSS, GitLab, JIRA, BEM Methodology, Modern UI/UX Practices, Google Apps Script, Core Web Vitals, Git Branching, Agile Methodology.",
      "Optimized System Performance: Minified and optimized 20k+ lines of TypeScript and CSS, launched 5-6 new features, and resolved 10-11 production bugs, enhancing system efficiency and reducing deployment bundle sizes.",
      "UI/UX Enhancements: Conducted UI sanity checks, acquired proficiency in BEM methodology, and reduced main-thread utilization from 4+ to 3+ seconds, ensuring optimal user experience.",
      "Cross-Team Collaboration: Worked closely with UI/UX and QA teams, demonstrated flexibility by solving tasks outside the usual domain, and addressed over 30+ JIRA tickets.",
      "Automation and Tools Development: Developed an automation tool for the catalog team in 1 week, used by 5+ members, and generated an A+ content automation tool in 5 days, presented to product managers.",
      "Feature Integration and Bug Fixes: Integrated PDS library, added vernacular support to webview for 30-50% of users, and fixed critical UI bugs and payment/wishlist page issues, achieving significant improvements within tight deadlines",
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
      "Tech Stack & Skills: HTML, CSS, JavaScript, Bootstrap, jQuery, AJAX, Chart.js, p5.js, Django, Flask, Docker, SASS, SCSS, Linux-based server management, SSH for secure server connections.",
      "Efficiently overhauled a production-ready website for a US-based company, revamped it within 4 months, catering to 1000+ users.",
      "Conducted thorough debugging of backend API responses and coordinated with 2 backend developers to ensure a seamless user experience.",
      "Cocreated a JavaScript-based grit assessment app, engaged with a team of 3, showcasing strong teamwork and collaboration skills.",
      "Regularly built and containerized the web application using Docker, and deployed it on a remotely hosted server, leading to a 30% reduction in deployment time.",
      "Expertly managed Linux-based servers and utilized SSH for secure connections, establishing the same setup for 2 other developers.",
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
      "Tech Stack & Skills: HTML, CSS, JavaScript, Bootstrap, DOM Manipulation, Dev Tools, Figma.",
      "Coded and engineered the UI for the Fashion Panda website using HTML, CSS, JavaScript, and Bootstrap, catering to 1500+ users.",
      "Learned and gained knowledge of 2-3 new frontend libraries and frameworks, including Bootstrap.",
      "Reinforced and strengthened web development fundamentals in HTML, CSS, JavaScript, DOM manipulation, Bootstrap, 2-3 CSS libraries, dev tools, and Figma.",
      "Designed and assembled 1-2 website clones, updated the UIs, and converted wireframes and Figma designs into pixel-perfect code.",
      "Delivered high-quality, pixel-perfect implementation of 4-5 Figma designs for optimal user experience showcasing scrupulousness.",
    ],
  },
];

// Testimonials if any
const testimonials = [
  {
    testimonial:
      "Gunjan's expertise in Frontend development and deep knowledge of CSS are unparalleled. Working with Gunjan on different critical tasks was a pleasure for me.",
    name: "Adnan Ahmad",
    designation: "SDE Associate",
    company: "Purplle.com",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    image:
      "https://media.licdn.com/dms/image/D4D03AQEQaenl5MDZiQ/profile-displayphoto-shrink_800_800/0/1691626109448?e=1727913600&v=beta&t=z6nhF1yzmXCyB5GDUOFENVrHoxHMynypvPKrMlJ5_iY",
  },
  {
    testimonial:
      "Gunjan's rapid learning ability and enthusiastic approach make him a valuable asset. His strong knowledge base and disciplined work ethic set him apart.",
    name: "Varun Rana",
    designation: "SDE-II(Frontend)",
    company: "Purplle.com",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
    image:
      "https://media.licdn.com/dms/image/C4D03AQGbGGeBYiJcsQ/profile-displayphoto-shrink_800_800/0/1660215048331?e=1727913600&v=beta&t=CsuxtAsANF9dI2EllcH6LeXd5dxWk1ClKo8xau0TDn8",
  },
  {
    testimonial:
      "I was consistently impressed by Gunjan's enthusiasm and quick learning. His tech skills, disciplined work ethic make him a standout team member.",
    name: "Jyotikant Nadi",
    designation: "SDE-II(Frontend)",
    company: "Purplle.com",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    image:
      "https://media.licdn.com/dms/image/C5603AQHzd-QlQ3t-Xw/profile-displayphoto-shrink_800_800/0/1619694793305?e=1727913600&v=beta&t=Gx6OgrfSQXlrw-iRc0w9gUZws4sQ8ogtzw6TdBQQ-uw",
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
