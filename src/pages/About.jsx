import React, { useState, useEffect } from "react";
import image from "../Image/profilepic.jpg";
import Logo from "../components/Logo";
import { Link } from "react-router";
import Download from "../components/Download";
import { CiLocationOn } from "react-icons/ci";
// import ToggleTextComponent from "../components/ToggleTextComponent";

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-black via-[#111] to-black text-stone-400 pb-20">
      {/* Slide-Up Animation */}
      <div className="animate-slideUp h-[100vh] g-gradient-to-br from-black via-[#111] to-black z-50" />

      {showContent && (
        <>
          {/* Header */}
          <header className="px-6 lg:px-24 lg:mt-[-90vh] mt-[-90vh]">
            <h1 className="text-[5rem] text-white font-light md:text-8xl mt-10 md:mt-20 lg:mt-0 lg:text-8xl animate-fade-up animate-once">
              About
            </h1>
          </header>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-24 mt-5">
            <aside className="lg:py-20">
              <div className="flex flex-col gap-6 text-sm md:text-base lg:text-md leading-6 lg:leading-[25px] text-stone-800 animate-fade-up animate-once animate-delay-[500ms]">
                <p className="text-justify text-stone-600 lg:text-[1.2rem]">
                  As a passionate Frontend Web Developer with 3 years of
                  experience, I specialize in transforming complex ideas into
                  seamless, user-centric web experiences. My expertise spans
                  technologies like{" "}
                  <b>
                    HTML, CSS, Tailwind CSS, JavaScript, React.js, React Native,
                    TypeScript, Vue.js
                  </b>
                  , and version control systems such as <b>Git and GitHub</b>.{" "}
                  <br /> <br /> I excel at building responsive, high-performance
                  websites that not only look exceptional but also function
                  flawlessly across various devices and browsers. I thrive in
                  collaborative environments, working closely with designers,
                  backend developers, and product managers to deliver innovative
                  solutions that align with user needs and business goals.{" "}
                  <br /> <br /> With a commitment to continuous learning, I stay
                  updated on industry trends to leverage the latest technologies
                  and best practices. My focus on writing clean, maintainable
                  code and following agile methodologies ensures efficient and
                  effective project delivery. <br /> <br /> I am eager to
                  contribute to dynamic teams, bring fresh perspectives to
                  frontend development challenges, and create impactful digital
                  experiences. Feel free to{" "}
                  <Link to="/contact" className="underline font-bold">
                    reach out
                  </Link>{" "}
                  if you will like to discuss web development, industry trends,
                  or potential collaboration opportunities!
                </p>
              </div>
            </aside>

            {/* Image Section */}
            <aside className="flex justify-center animate-fade-up animate-once animate-delay-[1000ms]">
              <img
                src={image}
                className="lg:w-full lg:max-w-md h-auto rounded-lg"
                alt="Profile"
              />
            </aside>
          </div>

          <div className="mt-10">
            <h1 className="text-white mx-5 lg:ml-20 text-5xl pt-5 font-light">
              Work History
            </h1>
            <div className="lg:my-10 my-10 lg:mx-20 mx-5 border-t border-stone-700 py-5">
              <p className="text-stone-500 font-light py-3">
                Junior Developer Intern
              </p>
              <Link
                className="lg:text-5xl text-2xl font-[300] flex lg:flex-row lg:gap-0 flex-col hover:text-stone-500 transition-ease duration-300"
                title="View Details">
                WebInfluencers (Remote) -{" "}
                <p className="flex">
                  <CiLocationOn className="lg:flex hidden" /> UAE ( Dubai )
                </p>
              </Link>
            </div>

            <div className="lg:my-10 my-10 lg:mx-20 mx-5 border-t border-stone-700 py-5">
              <p className="text-stone-500 font-light py-3">
                Frontend Developer
              </p>
              <Link
                className="lg:text-5xl text-2xl font-[300] flex lg:flex-row flex-col hover:text-stone-500 transition-ease duration-300"
                title="View Details">
                Taoltech (Remote) -{" "}
                <p className="flex">
                  <CiLocationOn className="lg:flex hidden" /> Lagos, Nigeria
                </p>
              </Link>
            </div>
          </div>

          <div>
            <Download />
          </div>
        </>
      )}
    </section>
  );
};

export default About;
