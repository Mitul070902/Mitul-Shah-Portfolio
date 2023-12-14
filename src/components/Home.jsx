import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
          <div className="absolute text-white text-4xl md:text-6xl"> {/* Adjust text size for small and medium/larger screens */}
        {/* <span role="img" aria-label="wave-hand">👋</span> Hello! */}
          </div>
          <br></br>
           I'm a Developer and a Product enthusiast
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Hello! I'm Mitul Shah, and this is my portfolio—a showcase of expertise in software development and strategic product management. Explore my professional journey where technical proficiency meets a strategic mindset, delivering impactful solutions and contributing to corporate success.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;