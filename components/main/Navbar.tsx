import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/jj.png"
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
            À propos de Nous
            </a>
            <a href="#skills" className="cursor-pointer">
            Compétences
            </a>
            <a href="#projects" className="cursor-pointer">
            Projets
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
