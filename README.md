# 3D Portfolio Project

This is a portfolio website showcasing 3D models made using Three.js and React.

## [View Deployment](https://3d-portfolio-kappa-two.vercel.app/)

## Installation

1. Clone the repository: `git clone https://github.com/gunjan1909/3d-portfolio.git`
2. Install dependencies: `npm install --legacy-peer-deps`
3. Make a .env file in root directory and add your email.js credentials(for contact form to work and send you email) <br/>
   `VITE_APP_EMAILJS_SERVICE_ID=...... 
VITE_APP_EMAILJS_TEMPLATE_ID=.......  
VITE_APP_EMAILJS_PUBLIC_KEY=.......  
VITE_APP_TO_EMAIL=your_email_id  `
4. To update your information, main data is in ./src/constants/index.js and other social links etc. in respective section files like footer, navbar etc.
5. Start the development server: `npm run dev`
6. NOTE: Needs hardware acceleration turned on in some browsers to work smoothly(eg: brave browser etc.).

## Technologies Used

- React: A JavaScript library for building user interfaces
- Three.js: A 3D graphics library built on top of WebGL
- Vite: A fast build tool for modern web applications
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs
- Framer: Framer Motion is a simple yet powerful motion library for React. It powers the amazing animations and interactions in Framer, the web builder for creative pros. Zero code, maximum speed.

## Features

Showcases 3D models in an interactive and visually appealing manner <br>
Responsive design for optimal viewing on different devices<br> PS: Due to canvas and memory limits in phone devices, 3js webgl canvas models are reduced to normal animated components.<br>
Smooth animations and transitions for a seamless user experience

## Usage

Navigate to the deployed website <br>
Use your mouse to drag and rotate the 3D models<br>
Click on the models to interact with them and see additional information
NOTE: The effects and most 3js canvas and webgl models will be best visible on pc/laptop/desktop, due to memory and canvas limits, they have been reduced in phone browser for optimisation.

## Credits

- [Tutorial video followed](https://youtu.be/0fYi8SGA20k)
- [React docs](https://react.dev/learn)
- [Three.js docs](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
- [Vite docs](https://vitejs.dev/guide/)
- [Tailwind CSS docs](https://tailwindcss.com/docs)
- #### Other packages and libraries used can be viewed in dependencies in package.json file in root directory.

- ### [Click here for download assets](https://drive.google.com/drive/folders/1KVU8iaH0E_JFtShNiR3BgCSA3pawXY4Z)
<br/>

#### To do (personal)

- Update the projects, and testimonials and other personal information ⏳
- Add more styles/colours if required ✔️
- Add a footer/to navbar,socials(linktree,linkedin,github) and other stuff if required ✔️
- Add a scroll-to-top button(optional) ✔️
- Fix touch scroll for mobiles due to canvas size ❌
- Media Queries needed for smaller desktop sizes ❌

#### The 3js webgl of ballcanvas had to be replaced because there were too many canvas and it was not supporting phone devices. - Added useEffect, u will see icosahedronGeometry sphere balls in devices width 768px and above, and normal circular divs in smaller devices

#### No resolve found for WebGL Canvas limit of 16 at once in browsers 😔

#### FIX: Kept the technologies at max 12 so limit is not exceeded.

<br><br>

<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="140" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>

# Vite ⚡

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

Vite (French word for "quick", pronounced [`/vit/`](https://cdn.jsdelivr.net/gh/vitejs/vite@main/docs/public/vite.mp3), like "veet") is a new breed of frontend build tooling that significantly improves the frontend development experience. It consists of two major parts:

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vitejs.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vitejs.dev/guide/api-plugin.html) and [JavaScript API](https://vitejs.dev/guide/api-javascript.html) with full typing support.

[Read the Docs to Learn More](https://vitejs.dev).

## Packages

| Package                                           | Version (click for changelogs)                                                                                                       |
| ------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [vite](packages/vite)                             | [![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)](packages/vite/CHANGELOG.md)                                       |
| [@vitejs/plugin-vue](packages/plugin-vue)         | [![plugin-vue version](https://img.shields.io/npm/v/@vitejs/plugin-vue.svg?label=%20)](packages/plugin-vue/CHANGELOG.md)             |
| [@vitejs/plugin-vue-jsx](packages/plugin-vue-jsx) | [![plugin-vue-jsx version](https://img.shields.io/npm/v/@vitejs/plugin-vue-jsx.svg?label=%20)](packages/plugin-vue-jsx/CHANGELOG.md) |
| [@vitejs/plugin-react](packages/plugin-react)     | [![plugin-react version](https://img.shields.io/npm/v/@vitejs/plugin-react.svg?label=%20)](packages/plugin-react/CHANGELOG.md)       |
| [@vitejs/plugin-legacy](packages/plugin-legacy)   | [![plugin-legacy version](https://img.shields.io/npm/v/@vitejs/plugin-legacy.svg?label=%20)](packages/plugin-legacy/CHANGELOG.md)    |
| [create-vite](packages/create-vite)               | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)                  |
