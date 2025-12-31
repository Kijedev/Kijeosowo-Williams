import FlipWords from "../components/flip-words";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Icons from "../components/Icons";
import { motion } from "framer-motion";
import "@fontsource/birthstone";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function FlipWordsDemo() {
  const words = ["better", "beautiful", "modern"];

  return (
    <motion.div
      className="flex flex-col justify-left px-5 lg:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Heading */}
      <motion.div
        variants={itemVariants}
        className="lg:text-7xl text-5xl text-neutral-500 dark:text-neutral-500 text-center"
      >
        Build <FlipWords words={words} /> websites <br />
        and mobile apps with <br />
        <span className="text-[#ECE7E1] Birthstone">Kije Williams</span>
      </motion.div>

      {/* Paragraph */}
      <motion.p
        variants={itemVariants}
        className="text-base lg:text-xl lg:leading-8 dark:text-neutral-600 py-8 max-w-2xl mx-auto text-center"
      >
        A Certified <strong>Altschool Africa</strong> Frontend Developer
        dedicated to creating visually stunning and user-friendly web and mobile
        applications.
      </motion.p>

      {/* Button */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 px-10 py-3 bg-white text-black rounded hover:bg-[#ECE7E1] transition-colors duration-300 group"
        >
          View Resumé
          <ArrowRight className="w-3 h-3 group-hover:animate-bounce" />
        </Link>
      </motion.div>

      {/* Icons */}
      <motion.div
        variants={itemVariants}
        className="lg:mt-8 -mt-8 flex justify-center"
      >
        <Icons />
      </motion.div>
    </motion.div>
  );
}
