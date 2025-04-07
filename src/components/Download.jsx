import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Download = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://v1.nocodeapi.com/kijeosowo/medium/qNGYhvrkenjzcCCV",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return (
    <div>
      <div className="ml-[8%] lg:ml-[6%] lg:mt-[3%] mt-[10%] border border-[#18181A] rounded-[5px] pt-2 pb-2 pl-10 pr-10 inline-flex justify-center items-center hover:bg-[#18181A] hover:text-white transition ease-in duration-300">
        <a
          href="/KIJEOSOWO_WILLIAMS.pdf"
          download="Kijeosowo Williams.pdf"
          className="inline-flex">
          Download cv <AiOutlineCloudDownload className="mt-1 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Download;
