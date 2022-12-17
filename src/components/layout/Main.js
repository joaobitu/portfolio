import React from "react";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Main = () => {
  return (
    <main className="flex flex-col">
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
