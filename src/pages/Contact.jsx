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
      <div className="lg:flex lg:justify-around lg:items-center lg:ml-20 lg:mt-[-100vh] lg:h-[100vh] -mt-[90vh] md:mt-[-70%] md:ml-[5%] ml-5 mr-5">
        <motion.aside
          className="flex gap-5 mt-20 lg:mt-0"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col">
            <h1 className="text-[#ECE7E1] py-10 lg:text-[10rem] md:text-[10rem] text-[5rem] animate-fade-up animate-once animate-delay-[500ms] Satisfy">
              Hello!
            </h1>
            <p className="text-stone-600 text-lg">
              Do you need a beautiful, well-structured website that <br /> you
              can own and maintain yourself?
            </p>
            <p className="mt-3 text-stone-500 text-lg">
              Reach me @:{" "}
              <Link
                className="text-stone-400"
                to="mailto:kijewilliams01@gmail.com?subject=Hello%20There&body=I%20want%20to%20create%20a%20website"
              >
                kijewilliams01@gmail.com
              </Link>
            </p>
            <br />
            <div className="-mt-[20%] md:ml-[-60%] lg:mt-0 -ml-[50%] lg:ml-0">
              <Icons />
            </div>
          </div>
        </motion.aside>

        <aside>
          <Form />
        </aside>
        <br />
      </div>

      {/*  */}
      <article className="prose prose-lg dark:prose-invert mx-auto px-4 py-12 max-w-3xl">
        {/* Breadcrumb */}
        <Link
          to="/articles"
          className="text-sm text-gray-500 hover:text-blue-500"
        >
          ← Back to Articles
        </Link>

        {/* Hero */}
        <div className="my-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Designing an Article Page for Your Portfolio Website
          </h1>
          <p className="text-gray-500 mt-2">
            Published Sep 4, 2025 · 5 min read
          </p>
        </div>

        <img
          src="/images/article-hero.jpg"
          alt="Article Hero"
          className="rounded-2xl shadow-lg mb-10"
        />

        {/* Article Content */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Your article page is not just about the content — it’s about how you
            present it. A clean design improves readability and helps you
            showcase your expertise.
          </p>

          <h2 className="text-2xl font-semibold">1. Start with Readability</h2>
          <p>
            Use a single column layout, with plenty of whitespace and larger
            line spacing. Readers should never feel overwhelmed.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400">
            "Good design is as little design as possible." – Dieter Rams
          </blockquote>

          <h2 className="text-2xl font-semibold">2. Add Code Blocks</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>{`function helloWorld() {
  console.log("Hello, world!");
}`}</code>
          </pre>

          <p>
            Code snippets are a great way to show technical knowledge. Make sure
            they are styled for readability.
          </p>
        </div>

        {/* Footer Section */}
        <div className="border-t mt-12 pt-6 flex justify-between text-sm text-gray-500">
          <Link to="/articles/previous" className="hover:text-blue-500">
            ← Previous Article
          </Link>
          <Link to="/articles/next" className="hover:text-blue-500">
            Next Article →
          </Link>
        </div>
      </article>
      );
    </section>
  );
};

export default Contact;
