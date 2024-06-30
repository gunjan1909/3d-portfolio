import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  #232631",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <a href={experience.company_url} target="__blank">
          <div className="flex justify-center items-center w-full h-full select-none">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </a>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold select-none">
          {experience.title}
        </h3>
        <a
          href={experience.company_url}
          target="__blank"
          className="flex items-center gap-2"
        >
          {/* url icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-link"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />{" "}
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />{" "}
          </svg>
          <p
            className="text-secondary text-[16px] font-semibold select-none"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </a>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2 select-none">
        {experience.points.map((point, index) => (
          <li
            key={`experience-poiny=${index}`}
            className="text-white text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          <span className="lowercase">console.log</span>(
          <b>What I have done so far.</b>)
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col select-none">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
