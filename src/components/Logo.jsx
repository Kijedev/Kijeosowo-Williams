import React from "react";
import { Link } from "react-router";
import kijeLogo from "../Image/kije williams.png";

const Logo = () => {
  return (
    <div className="w-[10%] lg:w-[4%] pt-2 ml-[5%] pt-10 text-[15px] lg:text-[15px] absolute top-10 cursor-pointer hover:scale-110 text-[#1A1818] hover:text-stone-600 transition ease-in duration-300">
      <Link to="/">
        <img src={kijeLogo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
