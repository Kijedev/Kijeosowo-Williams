import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
import Marquee from "../components/Marquee";

const Footer = () => {
  return (
    <section className="bg-gradient-to-br from-black via-[#111] to-black text-white">
      <Marquee />
      <div className="flex flex-col lg:flex-row justify-between items-center lg:py-10 py-10 lg:px-20 pr-10">
        {/* Icons */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center lg:ml-10 lg:mr-10">
          <div className="flex lg:flex-col text-[1.2rem] gap-5 lg:justify-start justify-left lg:mt-0 text-white -ml-[35%] lg:ml-0">
            <Link
              to="https://www.linkedin.com/in/williams-kijeosowo-237749224/"
              className="hover:text-stone-600 transition-colors duration-500"
              title="LinkedIn"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://github.com/Kijeosowo?tab=repositories"
              className="hover:text-stone-600 transition-colors duration-500"
              title="Github"
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://docs.google.com/document/d/1jD5IhwyadOyXQYBmC6Vg6MtcJY50buqClqaBotXe9zQ/edit?usp=sharing"
              className="hover:text-stone-600 transition-colors duration-500"
              title="Google Drive"
              target="_blank"
            >
              <FaGoogleDrive />
            </Link>
            <Link
              to="https://x.com/Kijeosowo1"
              className="hover:text-stone-600 transition-colors duration-500"
              title="X"
              target="_blank"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://wa.link/41kcfj"
              className="hover:text-stone-600 transition-colors duration-500"
              title="WhatsApp"
              target="_blank"
            >
              <FaWhatsapp />
            </Link>
          </div>

          <div className="flex flex-col gap-5 ml-5 lg:ml-0">
            <h1 className="lg:text-5xl text-3xl font-light Birthstone">Kije Williams</h1>
            <p className="text-base text-md dark:text-neutral-600">
              A Certified <strong>Altschool Africa</strong> Frontend Developer
              <br />
              dedicated to creating visually stunning and user-
              <br />
              friendly web and mobile applications.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="-ml-[50%] lg:ml-0">
          <p className="dark:text-neutral-600 py-5">Quick Links</p>
          <ul className="text-2xl flex flex-col gap-3 font-light">
            <li className="hover:text-stone-500 duration-300 transition-ease">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-stone-500 duration-300 transition-ease">
              <a href="#blogpost">Articles</a>
            </li>
            <li className="hover:text-stone-500 duration-300 transition-ease">
              <a href="/projects">Projects</a>
            </li>
            <li className="hover:text-stone-500 duration-300 transition-ease">
              <a href="/contact">Contact</a>
            </li>
            <li className="hover:text-stone-500 duration-300 transition-ease">
              <a href="#certification" className="flex">
                Certification
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t lg:mx-28 mx-5 border-stone-900">
        <p className="font-light py-10 text-sm">
          © 2025 Kije Williams. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
