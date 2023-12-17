import React from "react";
import github from "../assets/portfolio/Github image.jpeg";
import pro from "../assets/portfolio/product2.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: github,
      link: "https://github.com/Mitul070902",
    },
    {
      id: 2,
      src: pro,
      link: "https://drive.google.com/drive/u/0/folders/1Md3oqSGmtlwahzQW2gLtlJp0Z3IczX26",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="w-full flex flex-col gap-8 sm:flex-row sm:gap-12 pb-8 px-12 sm:px-0">
          {/* Single column layout for mobile responsiveness */}
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 mb-4 w-5/6 h-50 object-cover"
                />
              </a>
              <div className="flex items-center justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                    Visit Project
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
