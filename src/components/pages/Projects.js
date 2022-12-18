import React from "react";
import { useState } from "react";
import ProjectCard from "../../element/ProjectCard";

const Projects = () => {
  const [projectFocus, setProjectFocus] = useState("all");
  return (
    <section
      id="projects"
      className="flex scroll-m-10 flex-col items-center justify-center gap-4 py-20 "
    >
      <h2 className="text-4xl font-bold text-gray-900 md:text-6xl lg:text-8xl">
        Projects
      </h2>

      <ul className="hidden gap-10 text-xl text-gray-900 xl:flex">
        <li>
          <button
            className={`project-sort-button ${
              projectFocus == "all" && "animate-pulse"
            }`}
            onClick={() => setProjectFocus("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={`project-sort-button ${
              projectFocus == "layout" && "animate-pulse"
            }`}
            onClick={() => setProjectFocus("layout")}
          >
            Layout Focused
          </button>
        </li>
        <li>
          <button
            className={`project-sort-button ${
              projectFocus == "logic" && "animate-pulse"
            }`}
            onClick={() => setProjectFocus("logic")}
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
