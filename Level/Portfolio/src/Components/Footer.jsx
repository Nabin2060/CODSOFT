import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return <>
  <hr />
  <footer className="py-12">
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-4">
          <FaFacebook size={25} />
          <FaLinkedin size={25} />
          <FaGithub size={25} />
          <FaDiscord size={25} />
          <FaTwitter size={25} />
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
          <p className="text-sm"> &copy; 2024 Your Company.All Rights Reserved.

          </p>
        </div>
      </div>

    </div>
  </footer>

  </>
};

export default Footer;
