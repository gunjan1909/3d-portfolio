import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i generally work on.</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      {/* ORIGINAL DESIGN BUT NOT WORKING IN PHONE CAUSE TOO MANY WEBGL CANVAS */}
      {!isMobile ? (
        <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p className="text-center">{technology.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          {technologies.map((technology, index) => (
            <motion.div
              animate={{
                y: [0, index % 2 ? 12 : -12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              key={technology.name}
            >
              <div className="w-28 h-28 flex items-center justify-center rounded-full bg-tertiary shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex-col">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center transform hover:rotate-15 transition-all duration-300">
                  <img
                    className="w-16 h-16"
                    src={technology.icon}
                    alt={technology.name}
                  />
                </div>
                <p className="text-center">{technology.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
