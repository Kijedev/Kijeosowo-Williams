// import { FlipWords } from "./flip-words";
import FlipWords from "../components/flip-words";
import { Link } from "react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import Icons from "../components/Icons";

export function FlipWordsDemo() {
  const words = ["better", "user-friendly", "beautiful", "modern"];

  return (
    <div className="flex flex-col justify-left mx-auto">
      <div className="lg:text-7xl text-5xl text-neutral-500 dark:text-neutral-500">
        Build
        <FlipWords words={words} />
        websites <br /> and mobile apps with <br />
        <span className="text-[#ECE7E1] Satisfy">Kije Williams</span>{" "}
      </div>
      <p className="text-base lg:text-xl lg:leading-8 text-stone-600 py-8">
        A Certified <strong>Altschool Africa</strong> Frontend Developer
        dedicated to creating visually stunning and <br /> user- friendly web
        and mobile applications.
      </p>

      {/* Links / Icon */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-10 py-3 bg-white text-black rounded hover:bg-[#ECE7E1] transition-colors duration-300 group"
        >
          View Projects
          <ArrowRight className="w-3 h-3 group-hover:animate-bounce" />
        </Link>

        {/*  */}
        <div className="lg:mt-8 -mt-8">
          <Icons />
        </div>
      </div>

      {/* <div className="flex mt-5 float-right text-white">
        <p className="">Scroll Down</p>
        <p>
          <ChevronDown />
        </p>
      </div> */}
    </div>
  );
}
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
