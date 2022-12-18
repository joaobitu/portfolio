import React from "react";
import portfolioGif from "../../src/assets/PortfolioPreview.gif";
import battleshipGif from "../../src/assets/BattleShipPreview.gif";
import waldoGif from "../../src/assets/WhereIsWaldoPreview.gif";
import blockTalkGif from "../../src/assets/BlockTalkPreview.gif";
import adminDashBoardImage from "../../src/assets/adminDashboardPreview.png";
import shoppingCartGif from "../../src/assets/ShoppingCartPreview.gif";
const ProjectCard = (props) => {
  return (
    <section className="grid gap-10 sm:gap-2 md:grid-cols-2 lg:grid-cols-3">
      <div
        className={`grid w-80 scale-100 grid-cols-2 rounded border-2 border-solid border-gray-900 text-white transition-all duration-300 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "layout") &&
            "block") ||
          "-translate-x-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={portfolioGif}
          alt="portfolio project animated"
          className={`col-span-2 rounded-t  `}
        />

        <button className="col-span-2 place-self-center hover:bg-gray-900">
          <a
            href="https://github.com/joaobitu/portfolio"
            target="_blank"
            rel="noreferrer"
            alt="Live"
          >
            {" "}
            Repository
          </a>
        </button>

        <p className="col-span-2 p-4">
          Well, you're already here! This project was built with React and
          TailwindCSS
        </p>
      </div>

      <div
        className={`grid w-80 scale-100 grid-cols-2  rounded border-2 border-solid border-gray-900 text-white transition-all duration-700 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "logic") &&
            "block") ||
          "-translate-y-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={battleshipGif}
          alt="battleship project animated"
          className={`col-span-2 rounded-t  `}
        />

        <button className="hover:bg-gray-900">
          {" "}
          <a
            href="https://github.com/joaobitu/Battleship"
            target="_blank"
            rel="noreferrer"
            alt="Repository"
          >
            Repository{" "}
          </a>
        </button>

        <button className="hover:bg-gray-900">
          <a
            href="https://joaobitu.github.io/Battleship/"
            target="_blank"
            rel="noreferrer"
            alt="Live"
          >
            Live{" "}
          </a>
        </button>

        <p className="col-span-2 p-4">
          BattleShip Project! This project was built with just vanilla
          JavaScript
        </p>
      </div>
      <div
        className={`grid w-80 scale-100 grid-cols-2 rounded border-2 border-solid border-gray-900 text-white transition-all duration-700 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "layout") &&
            "block") ||
          "translate-x-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={blockTalkGif}
          alt="block talk project animated"
          className={`col-span-2 rounded-t  `}
        />

        <button className="hover:bg-gray-900">
          {" "}
          <a
            href="https://github.com/joaobitu/block-talk"
            target="_blank"
            rel="noreferrer"
            alt="Repository"
          >
            Repository{" "}
          </a>
        </button>

        <button className="hover:bg-gray-900">
          {" "}
          <a
            href="https://dapper-meerkat-e86fe4.netlify.app/#/"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Live
          </a>
        </button>

        <p className="col-span-2 p-4">
          Block Talk, a full stack social media app built with React & Firebase
        </p>
      </div>
      <div
        className={`grid w-80 scale-100 grid-cols-2 rounded border-2 border-solid border-gray-900 text-white transition-all duration-700 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "logic") &&
            "block") ||
          "-translate-x-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={waldoGif}
          alt="where is waldo project animated"
          className={`col-span-2 rounded-t  `}
        />
        <button className="hover:bg-gray-900">
          <a
            href="https://github.com/joaobitu/where-is-waldo"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Repository
          </a>
        </button>
        <button className="hover:bg-gray-900">
          {" "}
          <a
            href="https://joaobitu.github.io/where-is-waldo/"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Live
          </a>
        </button>
        <p className="col-span-2 p-4">
          Where is Waldo? Try to find him in this classic game built with React.
        </p>
      </div>
      <div
        className={`grid w-80 scale-100 grid-cols-2 rounded border-2 border-solid border-gray-900 text-white transition-all duration-700 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "layout") &&
            "block") ||
          "translate-y-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={adminDashBoardImage}
          alt="admin dashboard"
          className={`col-span-2 rounded-t  `}
        />
        <button className="hover:bg-gray-900">
          <a
            href="https://github.com/joaobitu/admin-dashboard"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Repository
          </a>
        </button>
        <button className="hover:bg-gray-900">
          {" "}
          <a
            href="https://joaobitu.github.io/admin-dashboard/"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Live
          </a>
        </button>
        <p className="col-span-2 p-4">
          Admin Dashboard, CSS Grid is a very powerful tool!
        </p>
      </div>

      <div
        className={`grid w-80 scale-100 grid-cols-2 rounded border-2 border-solid border-gray-900 text-white transition-all duration-700 ${
          ((props.projectFocusSelected === "all" ||
            props.projectFocusSelected === "logic") &&
            "block") ||
          "translate-x-60 opacity-0"
        }`}
        style={{ backgroundColor: "#3d997d" }}
      >
        <img
          src={shoppingCartGif}
          alt="block talk project animated"
          className={`col-span-2 rounded-t  `}
        />
        <button className="hover:bg-gray-900">
          <a
            href="https://github.com/joaobitu/shopping-cart"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Repository
          </a>
        </button>
        <button className="hover:bg-gray-900">
          <a
            href="https://joaobitu.github.io/shopping-cart/"
            target="_blank"
            rel="noreferrer"
            alt="Repositoty"
          >
            Live
          </a>
        </button>
        <p className="col-span-2 p-4">
          Shopping Cart, buy Yu Gi Oh cards {"(called by an API)"} and get to
          Duel!
        </p>
      </div>
    </section>
  );
};

export default ProjectCard;
