import React from "react";
import Logo from "../components/Logo";
import Blogfeed from "../components/Blogfeed";

const Blogpost = () => {
  return (
    <section className="bg-[#ECE7E1]">
      <div>
        <Logo />
      </div>
      
      {/* Slide-Up Animation */}
      <div className="animate-slideUp h-[100vh] bg-[#1A1818]"></div>

      <div className="text-center pt-[7%] mt-[-100vh] lg:mt-[-100vh] md:mt-[-100%]">
        <h1 className="text-[3rem] lg:mt-0 mt-[20%] text-[#1A1818] font-playfair">
          Blog Post
        </h1>

        <div className="text-left mt-[3%] ml-[3%] lg:ml-[5%] lg:mt-[3%] md:ml-[5%]">
          <h1 className="text-[#1A1818] text-[2rem] md:ml-[3%]">React Native with (expo)</h1>
          <p className="mt-[1%] ml-[2%] mr-[2%] lg:ml-[3%] lg:mr-0 lg:mt-0 md:mr-[5%] md:ml-[4%] text-[15px] text-stone-600">
            I'm currently running a series where i document my journey of
            learning React Native. I share weekly updates on Medium & LinkedIn.
            Check it out!
          </p>
        </div>
      </div>

      <div>
        <Blogfeed />
      </div>
    </section>
  );
};

export default Blogpost;
