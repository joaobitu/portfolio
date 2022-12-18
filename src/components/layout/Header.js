import React from "react";
import LocationIcon from "../../assets/map-marker-outline.svg";

const Header = () => {
  return (
    <header
      className="flex h-screen flex-col items-center justify-center bg-hero-pattern bg-contain"
      id="hero"
    >
      <section className="flex flex-col gap-5 px-1 md:gap-10">
        <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-6xl">
          Hi,
          <br /> my name is <span>João</span>,<br /> I'm a Front-end Developer
        </h1>
        <div className="flex items-center">
          <img src={LocationIcon} className="w-6" alt="" />{" "}
          <p className="text-xs font-semibold text-white sm:text-base lg:text-lg">
            Brazil, a country I'm very <span>happy</span> to live in.
          </p>
        </div>
        <a href="#contact">
          <button
            className="duration-400 self-start rounded p-4 text-base font-bold text-white transition-all hover:bg-secondary active:translate-x-2 sm:text-lg lg:text-2xl"
            style={{ border: "1px solid #3d997d" }}
          >
            Let's get in touch!
          </button>
        </a>
      </section>
    </header>
  );
};

export default Header;
