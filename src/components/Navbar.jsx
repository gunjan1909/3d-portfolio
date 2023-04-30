import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linktree } from "../assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img className="w-9 h-9 object-contain" src={logo} alt="logo" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Gunjan&nbsp;<span className="sm:block hidden">| BTech. CSE</span>
            </p>
          </Link>
        </motion.div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] hover:bg-circle-red p-2 hover:rounded-lg font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <div
            style={{
              height: "25px",
              width: "2px",
              background: "white",
              padding: 0,
              margin: "auto -12px",
            }}
          ></div>
          <li
            className={`hover:text-white text-[18px] font-medium cursor-pointer p-2`}
          >
            <a
              target="__blank"
              href="https://linktr.ee/gunjanab"
              className="flex gap-2 "
            >
              <img
                src={linktree}
                alt="Linktree"
                style={{
                  height: "20px",
                  margin: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              Linktree
            </a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`
          ${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
          `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a target="__blank" href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
              <li
                className={`hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <a
                  target="__blank"
                  href="https://linktr.ee/gunjanab"
                  className="flex gap-2"
                >
                  <img
                    src={linktree}
                    alt="Linktree"
                    style={{ height: "20px" }}
                  />
                  Linktree
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
