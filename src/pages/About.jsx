import { useState, useEffect } from "react";
import image from "../Image/profilepic.jpg";
import { Link } from "react-router";
import Download from "../components/Download";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import "@fontsource/birthstone";
import Logo from "../components/Logo";
// import ToggleTextComponent from "../components/ToggleTextComponent";

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
    <section className="bg-gradient-to-br from-black via-[#111] to-black text-stone-400 pb-20">
      {/* Slide-Up Animation */}
      <div className="animate-slideUp h-[100vh] g-gradient-to-br from-black via-[red] to-black z-50" />

      {showContent && (
        <>
          {/* Header */}
          <header className="px-6 lg:px-24 lg:mt-[-95vh] mt-[-95vh]">
            <h1 className="text-[5rem] text-white font-light md:text-8xl mt-10 md:mt-20 lg:mt-10 lg:text-[10rem] Birthstone animate-fade-up animate-once animate-delay-[500ms]">
              About
            </h1>
          </header>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-24">
            <aside className="lg:py-20">
              <div className="flex flex-col gap-6 text-sm md:text-base lg:text-md leading-6 lg:leading-[25px] text-stone-800 animate-fade-up animate-once animate-delay-[500ms]">
                <p className="text-justify dark:text-neutral-600 lg:text-[1.2rem] flex flex-col gap-1">
                  <motion.span
                    variants={popupVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    As a passionate Frontend Web Developer with 3 years of
                    experience, I specialize in transforming complex ideas into
                    seamless, user-centric web experiences. My expertise spans
                    technologies like{" "}
                    <b>
                      HTML, CSS, Tailwind CSS, JavaScript, React.js, React
                      Native, TypeScript, Vue.js
                    </b>
                    , and version control systems such as <b>Git and GitHub</b>.
                  </motion.span>{" "}
                  <br />
                  <motion.span
                    variants={popupVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    I excel at building responsive, high-performance websites
                    that not only look exceptional but also function flawlessly
                    across various devices and browsers. I thrive in
                    collaborative environments, working closely with designers,
                    backend developers, and product managers to deliver
                    innovative solutions that align with user needs and business
                    goals.
                  </motion.span>{" "}
                  <br />
                  <motion.span
                    variants={popupVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    With a commitment to continuous learning, I stay updated on
                    industry trends to leverage the latest technologies and best
                    practices. My focus on writing clean, maintainable code and
                    following agile methodologies ensures efficient and
                    effective project delivery.
                  </motion.span>{" "}
                  <br />
                  <motion.span
                    variants={popupVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    I am eager to contribute to dynamic teams, bring fresh
                    perspectives to frontend development challenges, and create
                    impactful digital experiences. Feel free to{" "}
                    <Link to="/contact" className="underline font-bold">
                      reach out
                    </Link>{" "}
                    if you will like to discuss web development, industry
                    trends, or potential collaboration opportunities!
                  </motion.span>
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
              <h1 className="lg:text-3xl text-2xl font-[300] flex lg:flex-row lg:gap-0 flex-col hover:text-stone-500 transition-ease duration-300">
                AiTeacha (Lagos, Nigeria ) - Oct 2025 - Nov 2025
              </h1>
              <p className="dark:text-neutral-500 py-3">
                Frontend Engineer (On-Site)
              </p>
              <p className="dark:text-neutral-500 py-3 bg-white/5 p-5 rounded">
                I helped with the redesign of the AiTeacha learning platform,
                transforming an outdated interface into a high-performance,
                responsive web app that improved user retention by 35 percent
                and reduced navigation time by 40 percent. I designed and
                implemented major product interfaces including the homepage,
                teacher dashboard, student dashboard, and AI tools using
                React.js, TypeScript, and Tailwind CSS, and collaborated with
                backend engineers to integrate RESTful APIs for classroom
                operations such as automated pre test generation and progress
                tracking. I rebuilt the tools page architecture to improve
                scalability and UI and UX, cutting load time by 50 percent and
                boosting user efficiency, and partnered with designers to
                convert Figma prototypes into pixel perfect, reusable React
                components with responsive layouts and accessibility in mind. I
                also optimized frontend performance with efficient state
                management, code splitting, and lazy loading, reducing page load
                times by 30 percent. Throughout the project I participated in
                agile sprint planning, code reviews, and testing to maintain
                product quality and ensure timely delivery. The upgraded
                platform was delivered ahead of schedule, supporting a strong
                internal demo and beta rollout, and the work leveraged React.js,
                TypeScript, Tailwind CSS, Axios, and Git and GitHub.
              </p>
            </div>

            <div className="lg:my-10 my-10 lg:mx-20 mx-5 border-t border-stone-700 py-5">
              <h1 className="lg:text-3xl text-2xl font-[300] flex lg:flex-row lg:gap-0 flex-col hover:text-stone-500 transition-ease duration-300">
                WebInfluencers (United Arab Emirates ) - June 2025 - Present
              </h1>
              <p className="dark:text-neutral-500 py-3">
                Junior Developer (Remote)
              </p>
              <p className="dark:text-neutral-500 py-3 bg-white/5 p-5 rounded">
                I collaborated with a Senior Developer to build Imo Talent Hub,
                a React.js web application for the Imo State Government that
                serves over 100,000 users seeking tech skills, and also
                contributed to the development of the FindExperts web
                application using React.js. I worked on the Eye on Imo website,
                an investment performance platform that helps the citizens of
                Imo State make informed investment decisions. In addition, I
                managed and updated all Techsoma Blog websites (techsoma.me,
                techsoma.africa, techsoma.ca) with WordPress, which drove a 15%
                increase in monthly traffic through consistent updates and
                optimizations. I designed and developed the FindBlack Experts
                website with WordPress and Elementor, creating a fully
                responsive and SEO-friendly platform that improved search
                rankings, and also built a custom WordPress template from
                scratch for the redesigned Techsoma websites, enhancing site
                speed by 25% while delivering a cohesive brand experience.
                Furthermore, I maintained and optimized a client’s WordPress
                e-commerce store (Afromaya), resulting in an 8% improvement in
                page load time and higher sales conversions.
              </p>
            </div>

            <div className="lg:my-10 my-10 lg:mx-20 mx-5 border-t border-stone-700 py-5">
              <h1 className="lg:text-3xl text-2xl font-[300] flex lg:flex-row flex-col hover:text-stone-500 transition-ease duration-300">
                Postivus (Lagos, Nigeria) - Feb 2025
              </h1>
              <p className="dark:text-neutral-500 py-3">
                Frontend Developer (Contract)
              </p>
              <p className="dark:text-neutral-500 py-3 bg-white/5 p-5 rounded">
                I developed a frontend web application for a digital agency
                serving 15+ clients, automating workflows for SEO, PPC, and
                content services, which significantly improved operational
                efficiency. I designed a responsive UI using React.js and
                Tailwind CSS, boosting mobile engagement, and optimized
                performance to reduce page load time by 15%, driving an increase
                in inorganic traffic. I also built reusable and scalable
                components following solid design principles, cutting down
                future development time, and ensured cross-browser and
                cross-device compatibility, which reduced UI-related support
                tickets. Additionally, I executed over 50 unit and integration
                tests, resolving 90% of bugs pre-launch and ensuring a smooth,
                stable production rollout.
              </p>
            </div>

            <div className="lg:my-10 my-10 lg:mx-20 mx-5 border-t border-stone-700 py-5">
              <h1 className="lg:text-3xl text-2xl font-[300] flex lg:flex-row flex-col hover:text-stone-500 transition-ease duration-300">
                Taoltech (Lagos, Nigeria) - Aug 2023 - Dec 2024
              </h1>
              <p className="dark:text-neutral-500 py-3">
                Frontend Developer (Remote)
              </p>
              <p className="dark:text-neutral-500 py-3 bg-white/5 p-5 rounded">
                I helped develop a secure Electronic Medical Record (EMR) system
                used by 100+ healthcare professionals across 20+ clinics,
                improving patient data access and workflow efficiency. I built a
                compliant and accessible UI in React.js that streamlined doctor
                workflows and reduced form errors, while applying performance
                best practices that cut page load times by half. I also
                delivered interactive features such as patient search and record
                filters, boosting task efficiency by 50%. To ensure reliability,
                I conducted cross-browser testing and resolved UI/UX
                inconsistencies. Working closely with cross-functional teams, we
                launched the system ahead of schedule and fully met client
                requirements.
              </p>
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
