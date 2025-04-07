import React from "react";
import { Link } from "react-router";
import Icons from "../components/Icons";
import image from "../Image/list.png";
import Logo from "../components/Logo";
import Form from "../components/Form";
import kijeLogo from "../Image/kije williams.png";

const Contact = () => {
  const logo = "<Kijeosowo />";
  return (
    <section className="bg-[#1A1818] text-[#ECE7E1]">
      {/* Animation */}
      <div className="animate-slideUp lg:h-[100vh] h-[100vh] bg-[#ECE7E1] relative z-100"></div>
      <div className="w-20 absolute pt-2 ml-[5%] pt-10 text-[15px] lg:text-[15px] absolute top-10 cursor-pointer hover:scale-110 text-[#1A1818] hover:text-stone-600 transition ease-in duration-300">
        <Link to="/">
          <img src={kijeLogo} />
        </Link>
      </div>

      <div className="lg:flex lg:justify-between lg:items-center lg:ml-20 lg:mt-[-100vh] lg:h-[100vh] -mt-[90vh] md:mt-[-70%] md:ml-[5%] ml-5 mr-5">
        <aside className="flex gap-5 mt-20 lg:mt-0">
          <div>
            <h1 className="text-[#ECE7E1] lg:text-[10rem] md:text-[10rem] text-[5rem] animate-fade-up animate-once animate-delay-[500ms] font-playfair">
              Hello!
            </h1>
            <p className="text-stone-500">
              Do you need a beautiful, well-structured website that <br /> you
              can own and maintain yourself?
            </p>
            <p className="mt-3 text-stone-500">
              Send a mail to:{" "}
              <Link
                className="hover:text-white"
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
