import React from "react";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoInstagram, BiLogoPinterest } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div
          className="sm:flex text-center justify-between items-center
             ">
          <h1>BEACHES.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
            <IoLogoWhatsapp className="icon" />
            <BiLogoInstagram className="icon" />
            <BiLogoPinterest className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
        <ul>
        <li>About</li>
        <li>Partnership</li>
        <li>Carrers</li>
        <li>Newsroom</li>
        <li>Advertisement </li>
      </ul>
      <ul className="text-right lg:flex ">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Book</li>
      </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
