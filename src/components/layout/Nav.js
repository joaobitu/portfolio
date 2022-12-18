import React from "react";
import { useState, useEffect } from "react";
const Nav = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav
      className={`fixed z-10 flex w-screen flex-row items-center justify-between bg-gray-900 px-2 transition-all duration-500 sm:px-10 ${
        visible ? "opacity-0" : "opacity-100"
      }`}
    >
      <a href="#hero">
        <button className="text-2xl text-white">
          <span>{`{`}</span>joaobitu<span>{`}`}</span>
        </button>
      </a>
      <ul className="hidden flex-row flex-wrap gap-10 text-2xl text-white md:flex">
        <li>
          <a href="#about">
            <button>
              <span>01.</span>About
            </button>
          </a>
        </li>
        <li>
          <a href="#projects">
            <button>
              <span>02.</span>Projects
            </button>
          </a>
        </li>
        <li>
          <a href="#contact">
            <button>
              <span>03.</span>Contact
            </button>
          </a>
        </li>
      </ul>

      <button
        className="group relative block md:hidden"
        onClick={() => setHamburgerActive(!hamburgerActive)}
      >
        <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-slate-700 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4">
          <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
            <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:translate-x-10"></div>
            <div className="h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 group-focus:translate-x-10"></div>
            <div className="h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 group-focus:translate-x-10"></div>
          </div>
        </div>
      </button>

      <nav
        className={`absolute inset-0 bottom-0 flex h-screen w-screen flex-col items-center gap-20 bg-current py-2 transition-all duration-200 ${
          !hamburgerActive && "hidden"
        }`}
      >
        <button
          className="group relative"
          onClick={() => setHamburgerActive(!hamburgerActive)}
        >
          <div className="relative flex h-[50px] w-[50px] transform items-center justify-center self-start overflow-hidden rounded-full bg-slate-700 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4">
            <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
              <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:translate-x-10"></div>
              <div className="h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 group-focus:translate-x-10"></div>
              <div className="h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 group-focus:translate-x-10"></div>
            </div>
          </div>
        </button>
        <ul className="flex flex-col gap-10 text-2xl text-white ">
          <li>
            <a href="#about">
              <button onClick={() => setHamburgerActive(!hamburgerActive)}>
                <span>01.</span>About
              </button>
            </a>
          </li>
          <li>
            <a href="#projects">
              <button onClick={() => setHamburgerActive(!hamburgerActive)}>
                <span>02.</span>Projects
              </button>
            </a>
          </li>
          <li>
            <a href="#contact">
              <button onClick={() => setHamburgerActive(!hamburgerActive)}>
                <span>03.</span>Contact
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Nav;
