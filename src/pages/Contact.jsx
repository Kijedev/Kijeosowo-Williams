import React from "react";
import { Link } from "react-router";
import Icons from "../components/Icons";
import Form from "../components/Form";
import kijeLogo from "../Image/kije williams.png";
import { motion } from "framer-motion";
import { DotBackgroundDemo } from "../components/DotBackgroundDemo";

const Contact = () => {
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="bg-gradient-to-br from-black via-[#111] to-black text-[#ECE7E1]">
      {/* Animation */}
      <div className="animate-slideUp lg:h-[100vh] h-[100vh] bg-gradient-to-br from-black via-[#111] to-black relative z-100"></div>
      <div className="w-[10%] lg:w-[4%] pt-2 ml-[5%] pt-10 text-[15px] lg:text-[15px] absolute top-10 cursor-pointer hover:scale-110 text-[#1A1818] hover:text-stone-600 transition ease-in duration-300">
        <Link to="/">
          <img src={kijeLogo} />
        </Link>
      </div>

      <div className="lg:flex lg:justify-around lg:items-center lg:ml-20 lg:mt-[-100vh] lg:h-[100vh] -mt-[100vh] md:mt-[-70%] md:ml-[5%] ml-5 mr-5">
        <motion.aside
          className="flex gap-5 mt-20 lg:mt-0"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col">
            <h1 className="text-[#ECE7E1] lg:text-[12rem] md:text-[10rem] text-[7rem] Birthstone">
              Hello!
            </h1>
            <p className="dark:text-neutral-600 text-lg">
              Do you need a beautiful, well-structured website that <br /> you
              can own and maintain yourself?
            </p>
            <p className="mt-3 dark:text-neutral-600 text-lg">
              Reach me:{" "}
              <Link
                className="dark:text-neutral-500"
                to="mailto:kijewilliams01@gmail.com?subject=Hello%20There&body=I%20want%20to%20create%20a%20website"
              >
                @kijewilliams01@gmail.com
              </Link>
            </p>
            <br />
            <div className="-mt-[20%] md:ml-[-60%] lg:mt-0 -ml-[50%] lg:ml-0">
              <Icons />
            </div>
          </div>
        </motion.aside>

        <aside className="lg:mt-0 -mt-16">
          <Form />
        </aside>
        <br />
      </div>
    </section>
  );
};

export default Contact;
