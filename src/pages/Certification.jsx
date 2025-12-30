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
    <div className="bg-gradient-to-br from-[#000] via-[#111] to-[#111] py-24 lg:h-screen md:h-screen h-[100vh]" id="certification">
      {/* Certification */}
      <motion.div
        className="pt-10 mb-8 flex flex-col gap-4 text-center"
        variants={popupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          Certification
        </h1>
        <p className="text-sm lg:text-lg dark:text-neutral-600">
          Credentials and courses i have completed to sharpen my skills as a
          Frontend Developer.
        </p>
      </motion.div>

      {/* Image */}
      <div className="flex flex-col justify-center items-center">
        <motion.img
          src={Certificate}
          alt="certificate"
          className="rounded-[10px] lg:w-[40%] lg:h-[40%] px-10 lg:px-0"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />
        {/* Download button */}
      </div>
    </div>
  );
};

export default Certification;
