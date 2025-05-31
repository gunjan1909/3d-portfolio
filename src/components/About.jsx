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
        <p className={styles.sectionSubText}>
          <span className="lowercase">console.log</span>(<b>Introduction.</b>)
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[18px] max-w-5xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <h1 className="text-3xl">&lt;&gt;</h1>
        An MBA student in IIM Raipur and an experienced Frontend Engineer with a
        B.Tech in Computer Science from IIIT Sonepat and 1.5+ year of work
        experience. Skilled in JavaScript, TypeScript, React, Angular, and
        modern UI/UX practices. Proven track record in optimizing code,
        enhancing user experience, and resolving production issues. Proficient
        in Agile methodologies and tools like GitLab, JIRA, and Google Cloud
        Console. Developed impactful web applications used by thousands as well
        as automation tools used by many non-technical support teams in the
        industry. Also have knowledge of programming, C++, OOPS, problem
        solving, DSA.
        {/* Frontend Engineer with a B.Tech in Computer Science and Engineering(CSE)
        from IIIT Sonepat and over 1.5 years of experience in web and UI
        development. Proficient in JavaScript, TypeScript, React, Angular, and
        modern UI/UX practices. Successfully optimized code, enhanced user
        experience, and developed impactful web applications. Experienced in
        Agile methodologies and tools like GitLab, JIRA, and Google Cloud
        Console etc. */}
        <h1 className="text-3xl">&lt;/&gt;</h1>
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
