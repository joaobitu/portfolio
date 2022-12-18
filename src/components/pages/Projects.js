import React from "react";
import { useState } from "react";
import ProjectCard from "../../element/ProjectCard";

const Projects = () => {
  const [projectFocus, setProjectFocus] = useState("all");
  return (
    <section
      id="projects"
      className="flex  flex-col items-center justify-center gap-4 py-20 "
    >
      <h2 className="text-4xl font-bold text-gray-900 md:text-6xl lg:text-8xl">
        Projects
      </h2>

      <ul className="hidden gap-10 text-xl text-gray-900 xl:flex">
        <li onClick={() => setProjectFocus("all")}>
          <button
            className={`project-sort-button ${
              projectFocus == "all" && "animate-pulse"
            }`}
          >
            All
          </button>
        </li>
        <li onClick={() => setProjectFocus("layout")}>
          <button
            className={`project-sort-button ${
              projectFocus == "layout" && "animate-pulse"
            }`}
          >
            Layout Focused
          </button>
        </li>
        <li onClick={() => setProjectFocus("logic")}>
          <button
            className={`project-sort-button ${
              projectFocus == "logic" && "animate-pulse"
            }`}
          >
            Logic Focused
          </button>
        </li>
      </ul>

      <ProjectCard projectFocusSelected={projectFocus} />
    </section>
  );
};

export default Projects;
