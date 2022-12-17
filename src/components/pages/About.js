import React from "react";
import ProfilePic from "../../assets/profile-pic.jpeg";

const About = () => {
  return (
    <section
      className="grid h-screen place-items-center bg-gray-900 px-2 sm:px-20 md:grid-cols-2"
      id="about"
    >
      <h5 className="  text-6xl    font-extrabold text-gray-500 md:text-8xl xl:text-9xl">
        Hello,
        <br />
        World
      </h5>
      <div className="flex  flex-col items-center gap-10">
        <img
          src={ProfilePic}
          className="w-48 rounded-full md:w-56"
          style={{ border: "3px solid #3d997d" }}
          alt="profile"
        />
        <p className="max-w-xs font-medium text-white">
          I'm a passionate programmer that enjoys the <span>thrill</span> of
          learning. I yearn to build products that solve real life problems, and
          have a positive impact in society at large. Talk to me if you need
          someone with the commitment and eagerness to push your product ahead.
        </p>
      </div>
    </section>
  );
};

export default About;
