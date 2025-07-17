"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import Icons from "./Icons";
import Logo from "../components/Logo";
import Marquee from "../components/Marquee";
import { ArrowRight } from "lucide-react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-black via-[#111] to-black text-white space-y-6">
      <p className="text-4xl lg:text-6xl font-light animate-pulse">
        Kije Williams
      </p>
      <p className="text-sm text-stone-400">Loading Amazing Stuff...</p>
      <div className="w-64 bg-[#1A1818] rounded-full h-2">
        <div
          className="bg-[#ECE7E1] h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

const Homepage = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(
    location.pathname === "/" && !sessionStorage.getItem("visited")
  );
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("visited", "true");
        // Small delay to ensure smooth transition
        setTimeout(() => setShowContent(true), 100);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, [loading]);

  if (loading) return <Preloader />;
  if (location.pathname !== "/") return null;

  return (
    <section className="bg-gradient-to-br from-black via-[#111] to-black min-h-screen overflow-hidden">
      {/* Main content with slide-in animation */}
      <div
        className={`relative z-20 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          showContent
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}>
        <Logo />

        {/* Hero and Navigation Grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:px-32 lg:items-center lg:h-[100vh] px-6 pt-20 pt-32">
          {/* <img src={Certificatebg} alt="Certificatebg" /> */}
          {/* Hero Section */}
          <div className="space-y-6 text-left relative">
            <h1 className="text-stone-600 text-xl flex gap-2">
              Hey there! <p className="text-3xl animate-wiggle -mt-2">👋</p>
            </h1>
            <h2 className="text-4xl lg:text-6xl font-light text-white">
              I'm Kije Williams
            </h2>
            <p className="text-base lg:text-xl lg:leading-8 text-stone-600">
              A Certified <strong>Altschool Africa</strong> Frontend Developer
              <br />
              dedicated to creating visually stunning and user-
              <br />
              friendly web and mobile applications.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center flex gap-2 px-10 py-3 bg-white text-black rounded hover:bg-[#ECE7E1] transition-colors duration-300 group">
              View Projects
              <ArrowRight className="w-3 h-3 group-hover:animate-bounce" />
            </Link>
            <Icons />
          </div>

          {/* Navigation Links */}
          <nav className="text-left lg:-mt-10 mt-10">
            <ul className="text-white/50 text-6xl lg:text-[5rem] lg:leading-[4rem] font-light space-y-6">
              {[
                { name: "About", path: "/about" },
                { name: "Articles", path: "/blogpost" },
                { name: "Projects", path: "/projects" },

                { name: "Contact", path: "/contact" },
                { name: "iFashion", path: "/fashion" },
                {
                  name: "Certification",
                  path: "/certification",
                  icon: "🌟",
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-stone-600 transition-colors duration-500 flex">
                    {item.name}
                    <p className="text-2xl animate-pulse">{item.icon}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Marquee */}
        <Marquee />

        {/* Footer CTA */}
        <div className="text-center bg-black py-20">
          <div className="inline-flex flex-col items-center gap-6 px-16 py-16 rounded-3xl border-2 border-white/20">
            <div className="text-gray-300 space-y-4">
              <h3 className="text-3xl lg:text-5xl font-light">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-xl text-stone-600">
                Let's create something amazing
              </p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white flex gap-2 hover:bg-[#ECE7E1] text-black rounded transition-colors duration-300 group">
              Let's Work Together{" "}
              <ArrowRight className="h-3 w-3 group-hover:animate-bounce mt-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
