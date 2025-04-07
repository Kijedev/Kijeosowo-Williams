import React, { useState, useEffect } from "react";
import image from "../Image/profilenew.jpg";
import Icons from "../components/Icons";
import Logo from "../components/Logo";
import { Link } from "react-router";
import Download from "../components/Download";
import ToggleTextComponent from "../components/ToggleTextComponent";

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#ECE7E1] text-[#1A1818] pb-20">
      {/* Slide-Up Animation */}
      <div className="animate-slideUp h-[100vh] bg-[#1A1818]"></div>

      {showContent && (
        <>
          <div>
            <Logo />
          </div>

          {/* Header */}
          <header className="px-6 lg:px-24 lg:mt-[-80vh] mt-[-90vh]">
            <h1 className="text-[5rem] md:text-8xl mt-10 md:mt-20 lg:mt-0 lg:text-[12rem] font-playfair animate-fade-up animate-once">
              About
            </h1>
          </header>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-24 mt-5">
            <aside>
              <div className="flex flex-col gap-6 text-sm md:text-base lg:text-md leading-6 lg:leading-[25px] text-stone-800 animate-fade-up animate-once animate-delay-[500ms]">
                <p>
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
                className="w-full max-w-md md:max-w-lg lg:max-w-[25vw] lg:max-h-[70vh] h-auto rounded-lg"
                alt="Profile"
              />
            </aside>
          </div>

          <div className="mt-10 lg:ml-20 lg:mr-20 ml-10 mr-10">
            <p className="text-[1.2rem] font-bold">
              TAOLTECH (Remote) —— Aug 2023 - December 2024{" "}
            </p>
            <p className="text-stone-800">Frontend Developer</p>
            <div>
              <ToggleTextComponent />
            </div>
          </div>

          <div>
            <Download />
          </div>

          {/* Icons Section */}
          <div className="mt-10 lg:ml-[5%] ml-[-55%]">
            <Icons />
          </div>
        </>
      )}
    </section>
  );
};

export default About;
