import { useState } from "react";
import Certificate from "../Image/certificate.png";
import Pdfcertificate from "../Image/certificate.pdf";
import { DownloadCloud } from "lucide-react";
import { motion } from "framer-motion";

const Certification = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="certification"
      className="bg-gradient-to-br from-black via-[#111] to-[#111]
                 py-16 sm:py-20 lg:py-24"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="mb-10 text-center space-y-3"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Certification
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-neutral-400">
            Credentials and courses I have completed to sharpen my skills as a
            Frontend Developer.
          </p>
        </motion.div>

        {/* Certificate Image */}
        <div className="flex justify-center">
          <motion.img
            src={Certificate}
            alt="certificate"
            className="
              w-full
              max-w-md sm:max-w-lg lg:max-w-xl
              rounded-xl
              shadow-lg
            "
            variants={popupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>

      </div>
    </section>
  );
};

export default Certification;
