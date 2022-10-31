import React from "react";

import { data } from "../data/data.js";

const Portfolio = () => {
  const string2 = "Check out my work between the end of September and the last week of October";

  // projects file
  const project=data;

  return (
    <div
      name="portfolio"
      className="w-full pt-8 md:h-full text-gray-300 bg-gradient-to-t from-amber-200 via-violet-600 to-sky-900"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  text-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl  font-bold text-gray-300 inline border-b-4 border-pink-600">
            JavaScript30 days Challenge
          </p>
          <p className="text-left py-6 ">{string2}</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-3 md:grid-cols-4 justify-center gap-4">


          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div object-cover"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}                  
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
