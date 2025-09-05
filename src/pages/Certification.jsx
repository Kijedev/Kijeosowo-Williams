import { useState } from "react";
import Certificate from "../Image/certificate.png";
import Pdfcertificate from "../Image/certificate.pdf";
import { DownloadCloud } from "lucide-react";
import { motion } from "framer-motion";

const Certification = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
    <div className="bg-gradient-to-br from-black via-[#111111] to-black">
      {/* Certification */}
      <motion.div
        className="pt-10 mb-8 flex flex-col gap-4 text-center"
        variants={popupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-white font-light text-2xl lg:text-5xl">
          Certification
        </h1>
        <p className="text-sm lg:text-lg text-stone-600">
          Credentials and courses i have completed to sharpen my skills as a
          Frontend Developer.
        </p>
      </motion.div>

      {/* Image */}
      <div className="flex flex-col justify-center items-center">
        <motion.img
          src={Certificate}
          alt="certificate"
          className="rounded-[10px] lg:w-[50%] lg:h-[50%] px-10 lg:px-0"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />
        {/* Download button */}
        <motion.div
          className="flex py-10"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <a
            href={Pdfcertificate}
            download
            className="text-white border border-stone-700 rounded-lg py-3 px-10 flex gap-2 group"
          >
            Download{" "}
            <DownloadCloud className="mt-2 h-3 w-3 group-hover:animate-bounce" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Certification;
