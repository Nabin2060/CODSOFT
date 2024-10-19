import React from "react";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import react from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import html from "../../public/html.png";
import javascript from "../../public/javascript.png";
import bootstrap from "../../public/Bootstrap.png";
import tailwind from "../../public/tailwind.png";
import mysql from "../../public/mysql.png";
import nextjs from "../../public/nextjsimg.png";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: react,
      name: "ReactJs",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJs",
    },
    {
      id: 5,
      logo: html,
      name: "HTML",
    },
    {
      id: 6,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 7,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 8,
      logo: tailwind,
      name: "TailWind",
    },
    {
      id: 9,
      logo: mysql,
      name: "MySQL",
    },
    {
      id: 10,
      logo: nextjs,
      name: "NextJs",
    },
  ];
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="font-bold text-xl mb-3">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus, corrupti.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
