import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagramSquare,
  faSnapchatSquare,
  faGithubSquare,
  faTelegram,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-primary pb-2">
      <h3 className="m-auto text-center">Follow my Socials:</h3>
      <div className="w-full p-8 flex justify-center align-center color-white gap-7 md:flex-nowrap flex-wrap">
        <FontAwesomeIcon
          icon={faLinkedin}
          beat
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
          icon={faInstagramSquare}
          beat
          size="2xl"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.instagram.com/bhanarkargunjan/", "_blank")
          }
          className="shakeit"
        />
        <FontAwesomeIcon
          icon={faSnapchatSquare}
          beat
          size="2xl"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.snapchat.com/add/gunjan.ab?share_id=LWuMHli3ALg&locale=en-GB",
              "_blank"
            )
          }
          className="shakeit"
        />
        <FontAwesomeIcon
          icon={faWhatsappSquare}
          beat
          size="2xl"
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://wa.me/919324561979", "_blank")}
          className="shakeit"
        />
        <FontAwesomeIcon
          icon={faTelegram}
          beat
          size="2xl"
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://t.me/bhanarkargunjan", "_blank")}
          className="shakeit"
        />
        <FontAwesomeIcon
          icon={faGithubSquare}
          beat
          size="2xl"
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://github.com/gunjan1909", "_blank")}
          className="shakeit"
        />
      </div>
      <p
        onClick={() => window.open("https://linktr.ee/gunjanab", "_blank")}
        className="m-auto text-center text-sm  blue-text-gradient cursor-pointer"
      >
        Made by Gunjan@2024
      </p>
    </div>
  );
};

export default Footer;
