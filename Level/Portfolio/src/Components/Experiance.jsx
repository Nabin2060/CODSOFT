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

const Experiance = () => {
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
    <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          doloremque?
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] rounded-full"
                alt=""
              />
              <div>
                <div className="">{name}</div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
