// import { FlipWords } from "./flip-words";
import FlipWords from "../components/flip-words";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Icons from "../components/Icons";
import { motion } from "framer-motion";

// Animation variants
const popupVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  },
};

export function FlipWordsDemo() {
  const words = ["better", "user-friendly", "beautiful", "modern"];

  return (
    <div className="flex flex-col justify-left">
      {/* Heading */}
      <motion.div
        className="lg:text-7xl text-5xl text-neutral-500 dark:text-neutral-500"
        variants={popupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Build
        <FlipWords words={words} />
        websites <br /> and mobile apps with <br />
        <span className="text-[#ECE7E1] Satisfy">Kije Williams</span>{" "}
      </motion.div>

      {/* Paragraph */}
      <motion.p
        className="text-base lg:text-xl lg:leading-8 text-stone-600 py-8"
        variants={popupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        A Certified <strong>Altschool Africa</strong> Frontend Developer
        dedicated to creating visually stunning and <br /> user- friendly web
        and mobile applications.
      </motion.p>

      {/* Links / Icon */}
      <motion.div
        variants={popupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-10 py-3 bg-white text-black rounded hover:bg-[#ECE7E1] transition-colors duration-300 group"
        >
          View Projects
          <ArrowRight className="w-3 h-3 group-hover:animate-bounce" />
        </Link>

        {/* Icons */}
        <motion.div
          className="lg:mt-8 -mt-8"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Icons />
        </motion.div>
      </motion.div>
    </div>
  );
}
