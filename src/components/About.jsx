// ABOUT ME COMPONENT

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      style={{
        cursor: "move",
        userSelect: "none",
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        style={{ boxShadow: "0px 0px 10px 5px rgba(152,25,207,0.58)" }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain shakeit"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="px-2 sm:px-4 ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction.</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[18px] max-w-4xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I'm a frontend web developer pursuing a B.Tech in Computer Science and
        Engineering at IIIT Sonepat. Passionate about learning and enjoy
        collaborating in teams with strong communication skills. Currently
        exploring the latest technologies. My skills include HTML, CSS,
        JavaScript, Bootstrap, ReactJS, Next.js, Node.js, Express.js, MongoDB,
        TypeScript, AngularJS, TailwindCSS, Firebase, Git/Github, Docker, SQL,
        C/C++, and more.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
