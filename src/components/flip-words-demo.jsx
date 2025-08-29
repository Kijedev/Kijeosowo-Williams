// import { FlipWords } from "./flip-words";
import FlipWords from "../components/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "user-friendly", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="text-7xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Kije Williams
        <p className="text-base lg:text-xl lg:leading-8 text-stone-600 py-10">
          A Certified <strong>Altschool Africa</strong> Frontend Developer
          dedicated to creating visually stunning and <br /> user- friendly web and
          mobile applications.
        </p>
      </div>
    </div>
  );
}
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
