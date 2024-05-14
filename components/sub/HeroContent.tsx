"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Jemsit Company Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          Votre partenaire de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
               confiance {" "}
            </span>
            pour des solutions IT sur mesure.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Nous sommes spécialisés dans le développement de sites web, d&apos;applications mobiles, de logiciels clé en main et de design graphique, accompagnés de services de référencement SEO. Notre engagement envers la qualité, la transparence et l&apos;excellence assure votre succès numérique.
        </motion.p>
        <a href="http://www.jemsit.com">
  <motion.a
    variants={slideInFromLeft(1)}
    className="py-4 px-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[300px]"
  >
     Notre Site Web
  </motion.a>
</a>


      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={850}
          width={850}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
