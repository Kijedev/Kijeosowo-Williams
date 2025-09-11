import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Blogfeed from "../components/Blogfeed";
import CodeSnippet from "../Image/Code Snippet.png";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const Blogpost = () => {
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  return (
    <section
      id="blogpost"
      className="bg-gradient-to-br from-[#111] via-[#000] to-black"
    >
      <div className="relative overflow-hidden">
        <div className="relative pb-10 py-24">
          <motion.div
            className="lg:px-20 px-5 text-left"
            variants={popupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl lg:text-5xl">
              Articles
            </h1> */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Read my Articles on React Native
            </h1>
            <p className="mt-3 lg:text-lg text-sm lg:leading-8 dark:text-neutral-600">
              I'm running a series where I document my journey of learning React
              Native. <br /> I share weekly updates on Medium & LinkedIn. Check
              it out!
            </p>
            <div className="mt-4 flex gap-2 text-sm text-stone-600 text-center">
              <Calendar className="h-4 w-4" />
              <span>Weekly Updates • React Native with Expo</span>
            </div>
            <div className="flex mt-10 mb-20">
              <Link to="/articles" className="text-white flex gap-3">
                View Articles
                <ArrowRight className="text-1xl bg-white/20 p-2 rounded-full w-8 h-8 flex items-center justify-center" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="lg:pr-20 px-5 lg:px-0 lg:-mt-56">
          <motion.div
            className=""
            variants={popupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.img
              variants={popupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              src={CodeSnippet}
              alt="Code Snippet"
              className="lg:w-[50%] rounded-[10px] lg:float-right md:float-right sm:float-none mb-20"
            />
          </motion.div>
        </div>
      </div>

      {/* <Blogfeed /> */}
    </section>
  );
};

export default Blogpost;
