import { useState } from "react";
import Certificate from "../Image/certificate.png";
import Pdfcertificate from "../Image/certificate.pdf";
import { DownloadCloud } from "lucide-react";

const Certification = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  return (
    <div className="bg-gradient-to-br from-black via-[#111111] to-black lg:h-[100vh]">
      {/* Certification */}
      <div className="pt-10 mb-8 flex flex-col gap-4 text-center">
        <h1 className="text-white font-light text-2xl lg:text-5xl">
          Certification
        </h1>
        <p className="text-sm lg:text-lg text-stone-600">
          Credentials and courses i have completed to sharpen my skills <br />{" "}
          as a Frontend Developer.
        </p>
      </div>

      {/* Image */}
      <div className="flex flex-col justify-center items-center">
        <img
          src={Certificate}
          alt="certificate"
          className="rounded-[10px] lg:w-[50%] lg:h-[50%] px-10 lg:px-0"
        />
        {/* Download button */}
        <div className="flex py-10">
          <a
            href={Pdfcertificate}
            download
            className="text-white border border-stone-700 rounded-lg py-3 px-10 flex gap-2 group"
          >
            Download{" "}
            <DownloadCloud className="mt-2 h-3 w-3 group-hover:animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certification;
