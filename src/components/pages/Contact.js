import React from "react";
import linkedinIcon from "../../assets/linkedin.svg";
import gmailIcon from "../../assets/gmail.svg";
import githubIcon from "../../assets/github.svg";
import whatsappIcon from "../../assets/whatsapp.svg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="grid min-h-screen scroll-mt-12 scroll-px-2 place-items-center gap-10 bg-gray-900 py-20 px-2 sm:scroll-m-0 sm:gap-0 sm:px-40 md:grid-cols-2"
    >
      <section className="flex flex-col gap-5">
        <h2
          className="border-b-4  border-solid text-5xl  font-extrabold text-white md:text-6xl xl:text-7xl"
          style={{ borderColor: "#3d997d" }}
        >
          Contact <span>Me!</span>
        </h2>
        <section className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/joaobitu/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              className="h-24 w-24 hover:scale-125"
              alt=""
            />
          </a>
          <a href="mailto:joaovbitu@gmail.com">
            <img src={gmailIcon} className="h-24 w-24 hover:scale-125" alt="" />
          </a>

          <a
            href="https://github.com/joaobitu"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              className="h-24 w-24 hover:scale-125"
              alt=""
            />
          </a>
          <a
            href="https://wa.me/5547989196804"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={whatsappIcon}
              className="h-24 w-24 hover:scale-125"
              alt=""
            />
          </a>
        </section>
      </section>
      <form
        style={{ color: "#3d997d" }}
        className="flex flex-col gap-5 text-2xl"
        action="https://formspree.io/f/myyageyk"
        method="POST"
      >
        <label className="">
          Name:
          <br />
          <input
            type="text"
            className="rounded bg-slate-500 p-2 text-white"
            name="name"
            required
          />
        </label>

        <label className="">
          Email:
          <br />
          <input
            type="email"
            className="rounded bg-slate-500 p-2 text-white"
            name="email"
            required
          />
        </label>

        <label className="">
          Message:
          <br />
          <textarea
            type="text"
            className="w-full resize-none rounded bg-slate-500 p-2 text-white"
            placeholder="Type something here..."
            rows="5"
            name="message"
            required
          ></textarea>
        </label>

        <button
          className="duration-400 self-start rounded p-4 text-base font-bold text-white transition-all hover:bg-secondary active:translate-x-2 sm:text-lg lg:text-2xl"
          style={{ border: "1px solid #3d997d" }}
        >
          Let's get in touch!
        </button>
      </form>
    </section>
  );
};

export default Contact;
