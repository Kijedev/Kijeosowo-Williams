import React, { useState } from "react";
// import { Button } from "@/components/ui/button";

const ToggleTextComponent = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleTextVisibility = () => {
    setShowAll(!showAll);
  };

  const items = [
    "I contributed to the development of a secure and user-friendly web section for a healthcare platform, focusing on enhancing usability for healthcare professionals. Using React, I developed a responsive and accessible user interface for an EMR website, implementing complex forms and data input features to enable seamless patient record management while ensuring compliance with data security standards. To provide real-time patient information and appointment schedules, I collaborated with back-end developers to integrate APIs within a user-friendly dashboard. I also enhanced the accessibility and efficiency of digital medical records, adhering to strict data privacy and compliance standards. I applied performance optimization best practices to reduce load times and improve website responsiveness, conducting cross-browser testing and debugging to ensure consistent functionality across various platforms and devices. Additionally, I created interactive features, such as patient search and record filtering, to streamline workflows for doctors and administrative staff. Throughout the project, I maintained documentation and version control using Git, facilitating smooth updates and future development efforts. I worked closely with a multidisciplinary team to deliver a high-quality product within tight deadlines, ensuring a seamless and efficient user experience.",
  ];

  return (
    <div className="bg-[#D6CDC2] rounded mt-3 text-sm md:text-base lg:text-md leading-6 lg:leading-[25px] text-stone-800 animate-fade-up animate-once animate-delay-[1000ms]">
      <p className="p-5">
        {items.slice(0, showAll ? items.length : 3).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </p>
      {/* <div className="bg-[#18181A] text-white mt-5 ml-3 cursor-pointer border border-[#18181A] rounded-[5px] pt-2 pb-2 pl-10 pr-10 inline-flex justify-center items-center hover:bg-[#ECE7E1] hover:text-[#18181A] transition ease-in duration-300">
        <a className="" onClick={toggleTextVisibility}>
          {showAll ? "Show Less" : "Show More"}
        </a>
      </div> */}
    </div>
  );
};

export default ToggleTextComponent;
