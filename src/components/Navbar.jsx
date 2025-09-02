"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
// Pages
import Projects from "../pages/Projects";
import Blogpost from "../pages/Blogpost";
import Certification from "../pages/Certification";
import Footer from "./Footer";
// components
import Logo from "../components/Logo";
// Icons
import { ArrowRight } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { LuCodeXml } from "react-icons/lu";
import { RiContactsBook3Line } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";
import { FlipWordsDemo } from "../components/flip-words-demo";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("visited", "true");
        setTimeout(() => setShowContent(true), 100);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, [loading]);

  if (loading) return <Preloader />;
  if (location.pathname !== "/") return null;

  const navItems = [
    { name: "About", path: "/about", icon: <CiUser /> },
    { name: "Articles", path: "#blogpost", icon: <IoBookOutline /> },
    { name: "Projects", path: "#projects", icon: <LuCodeXml /> },
    { name: "Contact", path: "/contact", icon: <RiContactsBook3Line /> },
    {
      name: "Certification",
      path: "#certification",
      icon: <LiaCertificateSolid />,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-black via-[#111] to-black min-h-screen overflow-hidden">
      <div
        className={`relative z-20 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          showContent
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Navbar */}
        <div className="flex justify-between lg:px-28 items-center px-6 py-6 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="text-white/50 text-[1rem] flex gap-5 font-light">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-2 hover:text-stone-400 transition-colors duration-500"
                >
                  <p>{item.icon}</p>
                  <Link
                    to={item.path}
                    className="hover:text-stone-400 text-white transition-colors duration-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute top-16 right-6 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg p-6 md:hidden">
              <ul className="flex flex-col gap-4 text-white text-lg">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 hover:text-stone-400 transition-colors duration-500"
                  >
                    <p>{item.icon}</p>
                    <Link
                      to={item.path}
                      className="hover:text-stone-400 transition-colors duration-500"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center min-h-screen px-6 space-y-6">
          <FlipWordsDemo />
        </div>

        {/* Projects */}
        <Projects />

        {/* Articles */}
        <Blogpost />

        {/* Certification */}
        <Certification />

        {/* Footer CTA */}
        <div className="mt-[20%] lg:text-center text-left bg-black py-20 px-5 lg:px-0">
          <div className="inline-flex flex-col items-center gap-6 lg:px-16 px-5 py-16 rounded-3xl border-2 border-white/20">
            <div className="text-gray-300 space-y-4">
              <h3 className="text-4xl lg:text-5xl font-light">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-xl text-stone-600">
                Let's create something amazing
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="px-8 py-3 bg-white inline-flex gap-2 hover:bg-[#ECE7E1] text-black rounded transition-colors duration-300 group"
              >
                Let's Work Together{" "}
                <ArrowRight className="h-3 w-3 group-hover:animate-bounce mt-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Homepage;
