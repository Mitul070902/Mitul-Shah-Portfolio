import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-signature ml-2">Mitul Shah</h1>
      </div>

      <ul className="md:flex hidden">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-3 sm:px-4 cursor-pointer capitalize font-medium text-gray-500 hover:underline hover:text-white transition duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul className={`flex md:hidden flex-col items-center justify-center w-full ${nav ? "block" : "hidden"}`}>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="py-2 cursor-pointer capitalize font-medium text-gray-500 hover:underline hover:text-white transition duration-200"
          >
            <Link
              onClick={() => setNav(false)}
              to={link}
              smooth
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
