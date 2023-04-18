# 3D Portfolio Project

This is a portfolio website showcasing 3D models made using Three.js and React.

## [View Deployment](https://www.google.com)

## Installation

1. Clone the repository: `git clone https://github.com/gunjan1909/3d-portfolio.git`
2. Install dependencies: `npm install`
3. Make a .env file in root directory and add your email.js credentials <br/>
   `VITE_APP_EMAILJS_SERVICE_ID=...... 
VITE_APP_EMAILJS_TEMPLATE_ID=.......  
VITE_APP_EMAILJS_PUBLIC_KEY=.......  
VITE_APP_TO_EMAIL=your_email_id  `
4. To update your information, main data is in ./src/constants/index.js and other social links etc. in respective section files like footer, navbar etc.
5. Start the development server: `npm run dev`

## Technologies Used

- React: A JavaScript library for building user interfaces
- Three.js: A 3D graphics library built on top of WebGL
- Vite: A fast build tool for modern web applications
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs

## Features

Showcases 3D models in an interactive and visually appealing manner <br>
Responsive design for optimal viewing on different devices<br>
Smooth animations and transitions for a seamless user experience

## Usage

Navigate to the deployed website <br>
Use your mouse to drag and rotate the 3D models<br>
Click on the models to interact with them and see additional information

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
- Add more styles/colours if required ❓
- Add a footer/to navbar,socials(linktree,linkedin,github) and other stuff if required ✔️
- Add a scroll-to-top button(optional) ✔️
- Fix touch scroll for mobiles due to canvas ❌

#### The 3js webgl of ballcanvas had to be replaced because there were too many canvas and it was not supporting phone devices. - Added useEffect, u will see icosahedronGeometry sphere balls in devices width 768px and above, and normal circular divs in smaller devices

#### No resolve found for WebGL Canvas limit of 16 at once in browsers 😔

#### FIX: Kept the technologies at max 12 so limit is not exceeded.
