import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { MdArrowRightAlt } from "react-icons/md";
import Icons from "./Icons";
import Logo from "../components/Logo";
import kijeLogo from "../Image/kije williams.png";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 1;
      });
    }, 20);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#1A1818] text-white space-y-4 relative">
      <img src={kijeLogo} className="animate-pulse w-48" alt="Loading..." />
      <div className="absolute inset-0 flex justify-center items-center">
      </div>
      <div className="w-64 bg-[#1A1818] rounded-full h-2 overflow-hidden">
        <div
          className="bg-[#ECE7E1] h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(
    location.pathname === "/" && sessionStorage.getItem("visited") !== "true"
  );

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("visited", "true");
      }, 3000);
    }
  }, [loading]);

  if (loading) return <Preloader />;

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <section className="bg-[#ECE7E1] text-[#1A1818] min-h-screen">
      <div className="animate-slideUp h-[100vh] bg-[#1A1818] relative z-100"></div>
      <div>
        <Logo />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:justify-around md:justify-around md:flex lg:items-center lg:pt-10 lg:h-screen gap-10 lg:gap-[20%] px-6 lg:mt-[-100vh] md:mt-[-80vh] -mt-[90vh]">
        <div className="space-y-6 lg:mt-[20%] mt-[15%] md:mt-[15%] lg:ml-0 lg:text-left text-center">
          <p className="text-3xl lg:text-[1.5rem] font-playfair">
            Kijeosowo Williams
          </p>
          <p className="text-sm sm:text-base text-stone-600">
            I am a passionate Frontend Developer dedicated <br /> to creating
            visually stunning and user-friendly <br /> web and mobile
            experiences.
          </p>
          <div>
            <Link
              to="/projects"
              className="mt-5 border border-[#1A1818] rounded-[5px] pt-2 pb-2 pl-10 pr-10 inline-flex bg-[#1A1818] text-[#ECE7E1] hover:bg-[#ECE7E1] hover:text-[#1A1818] transition ease-in duration-300">
              View Projects{" "}
              <MdArrowRightAlt className="mt-[5px] ml-2 text-white" />
            </Link>
          </div>
          <Icons />
        </div>
        <div className="lg:mt-[-5%] mt-[5%]">
          <nav className="lg:text-left text-center">
            <ul className="font-playfair text-6xl sm:text-7xl lg:text-[10rem] leading-[4rem] sm:leading-[5rem] lg:leading-[8rem] space-y-4 lg:space-y-6 xl:space-y-12 xl:mt-5">
              <li className="hover:italic hover:text-stone-700 hover:animate-headShake transition ease-in duration-300">
                <Link to={"/blogpost"}>Blog</Link>
              </li>
              <li className="hover:italic hover:text-stone-700 hover:animate-headShake transition ease-in duration-300">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="hover:italic hover:text-stone-700 hover:animate-headShake transition ease-in duration-300">
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li className="hover:italic hover:text-stone-700 hover:animate-headShake transition ease-in duration-300">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
