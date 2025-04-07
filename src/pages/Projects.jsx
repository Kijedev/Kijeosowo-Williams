import React from "react";
import image from "../Image/list.png";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import Icons from "../components/Icons";
import { FiExternalLink } from "react-icons/fi";
import kijeLogo from "../Image/kije williams.png";

const projects = [
  {
    id: 1,
    title: "Apple Galaxy",
    description:
      "The Apple Galaxy is a combination of the best of both worlds from two industry giants Apple and Samsung.",
    techStack: "React.js & Tailwindcss",
    link: "https://bejewelled-marigold-8aea56.netlify.app/",
    github: "https://github.com/Kijeosowo/Apple-Galaxy",
  },
  {
    id: 2,
    title: "Unsplash",
    description:
      "Unsplash is a personal web project designed to replicate the popular image gallery website Unsplash.",
    techStack: "React.js, Tailwindcss & Unsplash API",
    link: "https://kijeunsplash.netlify.app/",
    github: "https://github.com/Kijeosowo/Unsplash",
  },
  {
    id: 3,
    title: "Positivus",
    description:
      "A digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
    techStack: "React.js, Tailwindcss, Framer motion",
    link: "https://positivusco.netlify.app/",
    github: "https://github.com/Kijeosowo/Positivus-Website",
  },
  {
    id: 4,
    title: "Dara Williams",
    description: "A Portfolio website for a Product videographer.",
    techStack: "Html, Tailwindcss & JavaScript",
    link: "https://darawiliams.netlify.app/",
    github: "https://github.com/Kijeosowo/KEN-WILLIAMS",
  },
  {
    id: 5,
    title: "Netflix Clone",
    description: "A replica of the Netflix streaming website.",
    techStack: "Html, Tailwindcss & JavaScript",
    link: "https://roaring-pie-2681cc.netlify.app/",
    github: "https://github.com/Kijeosowo/NETFLIX",
  },
  {
    id: 6,
    title: "Shotr",
    description:
      "A link shortener web app that helps shorten links professionally.",
    techStack: "JavaScript & Bitly API",
    link: "https://adorable-marshmallow-d5a5f6.netlify.app/",
    github: "https://github.com/Kijeosowo/Shotr",
  },
  {
    id: 7,
    title: "Taskify",
    description: "A Todo App that uses CRUD functionality.",
    techStack: "React.js & Tailwindcsss",
    link: "https://super-crisp-62761d.netlify.app/",
    github: "https://github.com/Kijeosowo/Todo-App-Second-semester-Exam",
  },
  {
    id: 8,
    title: "Trackers",
    description:
      "A Shipping website that sends products to customers anywhere in the world.",
    techStack: "HTML & Tailwindcsss",
    link: "https://timely-jalebi-1414d3.netlify.app/",
    github: "https://github.com/Kijeosowo/Trackers.ng",
  },
];

const logo = "<Kijeosowo />";

const Projects = () => {
  return (
    <section className="bg-[#1A1818] text-[#ECE7E1] min-h-screen">
      <div className="animate-slideUp h-screen bg-[#ECE7E1] lg:z-[100] relative"></div>
      <div className="w-20 absolute pt-2 ml-[5%] pt-10 text-[15px] lg:text-[15px] absolute top-10 cursor-pointer hover:scale-110 text-[#1A1818] hover:text-stone-600 transition ease-in duration-300">
        <Link to="/">
          <img src={kijeLogo} />
        </Link>
      </div>

      {/* Scroll Down */}
      <div className="text-[17px] flex items-center float-right lg:-mt-[25%] md:mt-[-40%] -mt-[80%]">
        <span className="transform rotate-90 text-stone-600">Scroll Down</span>
      </div>

      <div className="flex justify-center items-start mt-[-100vh] lg:mt-10">
        <div className="lg:fixed lg:left-20 lg:bottom-20 lg:flex lg:gap-3 lg:ml-0 md:ml-[-50%] md:mt-[20%] mt-[40%] ml-[-5%] gap-5 flex animate-fade-up animate-once animate-delay-[1000ms]">
          {/* <img src={image} alt="list" className="lg:w-2 w-1" /> */}
          <div className="mt-10">
            <h1 className="text-3xl font-playfair text-[#ECE7E1]">
              My Projects
            </h1>
            <p className="mt-5 text-stone-500 text-[14px] leading-relaxed">
              This is a curation of both my personal projects and the ones{" "}
              <br /> I've worked on with teams of developers.
            </p>
            <div>
              <div className="mt-5 border border-stone-600 rounded-[5px] pt-2 pb-2 pl-10 pr-10 inline-flex hover:bg-[#ECE7E1] hover:text-[#1A1818] transition ease-in duration-300">
                <Link to={"/Blogpost"}>Read my Blog Post </Link>
                <FaBookmark className="mt-1 ml-2" />
              </div>
              <div className="mt-[-15%] lg:mt-5 ml-[-55%] lg:ml-0">
                <Icons />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="flex flex-col items-start mt-16 ml-[20%] pb-10 space-y-12 lg:-mt-[45%]">
        {projects.map((project) => (
          <div key={project.id} className="max-w-4xl lg:ml-[40%] ml-[-20%]">
            <Link
              to={project.link}
              className="text-[#ECE7E1] lg:text-6xl text-[2rem] text-white hover:text-stone-500 font-playfair transition ease-in duration-300 inline-flex"
              target="_blank">
              {project.title}{" "}
              <FiExternalLink className="text-[20px] ml-2 text-stone-600" />
            </Link>
            <p className="text-stone-600 mt-2 text-[14px]">
              ~ {project.description}
              <br />
              <b>Built using {project.techStack}.</b>
            </p>
            <div className="mt-4">
              <Link
                to={project.github}
                target="_blank"
                className="text-[#ECE7E1] text-sm inline-flex border border-stone-600 rounded-[5px] p-3 hover:bg-[#ECE7E1] hover:text-[#1A1818] transition ease-in duration-300">
                View on Github <FaGithub className="text-sm mt-1 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
