import React from "react";
import { Link } from "react-router";
import Icons from "../components/Icons";
import Form from "../components/Form";
import kijeLogo from "../Image/kije williams.png";

const Contact = () => {
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
        <aside className="flex gap-5 mt-20 lg:mt-0">
          <div className="flex flex-col">
            <h1 className="text-[#ECE7E1] py-10 lg:text-8xl md:text-[10rem] text-[5rem] animate-fade-up animate-once animate-delay-[500ms]">
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
                to="mailto:kijewilliams01@gmail.com?subject=Hello%20There&body=I%20want%20to%20create%20a%20website">
                kijewilliams01@gmail.com
              </Link>
            </p>
            <br />
            <div className="-mt-[20%] md:ml-[-60%] lg:mt-0 -ml-[50%] lg:ml-0">
              <Icons />
            </div>
          </div>
        </aside>

        <aside>
          <Form />
        </aside>
        <br />
      </div>
    </section>
  );
};

export default Contact;
