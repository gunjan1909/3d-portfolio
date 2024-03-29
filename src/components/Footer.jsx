import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-primary pb-2">
      <h3 className="m-auto text-center">Follow my Socials:</h3>
      <div className="w-full p-10 flex justify-center align-center color-white gap-10">
        <FontAwesomeIcon
          icon={faLinkedin}
          bounce
          size="2xl"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/gunjan-bhanarkar/",
              "_blank"
            )
          }
          className="shakeit"
        />

        <FontAwesomeIcon
          icon={faGithub}
          bounce
          size="2xl"
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://github.com/gunjan1909", "_blank")}
          className="shakeit"
        />

        <FontAwesomeIcon
          icon={faInstagramSquare}
          bounce
          size="2xl"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.instagram.com/gunjan.ab/", "_blank")
          }
          className="shakeit"
        />
      </div>
      <p
        onClick={() => window.open("https://linktr.ee/gunjanab", "_blank")}
        className="m-auto text-center text-sm  blue-text-gradient cursor-pointer"
      >
        Made by Gunjan@2023
      </p>
    </div>
  );
};

export default Footer;
