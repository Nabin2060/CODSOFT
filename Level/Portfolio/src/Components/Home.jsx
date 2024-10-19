import React from "react";
import profile from "../../public/profile.png";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container  mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My World</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-purple-700 font-bold"
                strings={[
                  "Full Stack Developer",
                  "MERN",
                  "Programmer",
                  "Coder",
                ]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
              ></ReactTyped>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              tempora, veritatis dignissimos blanditiis repellendus facere iste
              accusantium molestias rem ducimus fuga magnam vero, quas placeat
              ipsam debitis pariatur nostrum ut reprehenderit fugit adipisci
              doloremque. Eligendi fuga quod laborum cum sit quis error nam, ut,
              doloremque, molestiae reprehenderit unde labore hic.
            </p>
            <br />
            {/* Social media icons  */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-3">
                <h1 className="font-bold ">Available On :)</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/">
                      {""}
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      {""}
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/">
                      {""}
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/">
                      {""}
                      <FaYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold "> Currently Working On :)</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-x-110 rounded-s-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-x-110 rounded-s-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-x-110 rounded-s-full border-[2px]" />
                  <FaNode className="text-xl md:text-3xl hover:scale-x-110 rounded-s-full border-[2px]" />
                  <RiNextjsFill className="text-xl md:text-3xl hover:scale-x-110 rounded-s-full border-[2px]" />
                  <RiJavascriptFill className="text-xl md:text-3xl hover:scale-x-110 rounded-s-full border-[2px]" />
                  <SiMysql className="text-xl md:text-3xl hover:scale-x-110 rounded-s-full border-[2px]" />
                  <SiTailwindcss className="text-xl md:text-3xl hover:scale-x-110 rounded-s-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 mt-9 md:mt-20 order-1  ">
            <img
              src={profile}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
        <br />
        <br />
        <hr />
        <hr />
        <hr />
      </div>
    </>
  );
};

export default Home;
