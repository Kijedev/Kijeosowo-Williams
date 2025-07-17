import React from "react";
import Certificate from "../Image/certificate.png";
import Pdfcertificate from "../Image/certificate.pdf";
import Logo from "../components/Logo";
import { DownloadCloud } from "lucide-react";
import { useState } from "react";

const Certification = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  return (
    <div className="bg-gradient-to-b from-black via-[#222222] to-black h-[100vh]">
      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Certification */}
      <div className="lg:pt-32 lg:px-20 mb-8 flex flex-col gap-4">
        <h1 className="text-white font-light lg:text-8xl">Certification</h1>
        <p className="text-lg text-stone-600">
          Credentials and courses i have completed to sharpen my skills <br />{" "}
          as a Frontend Developer.
        </p>
      </div>

      {/* Image */}
      <button className="lg:px-20">
        <img
          src={Certificate}
          alt="certificate"
          className="w-[30%] rounded-[10px]"
        />
      </button>

      {/* Download button */}
      <div className="flex py-10">
        <a
          href={Pdfcertificate}
          download
          className="text-white border border-stone-700 rounded-lg py-3 px-10 flex gap-2 group">
          Download{" "}
          <DownloadCloud className="mt-2 h-3 w-3 group-hover:animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default Certification;
