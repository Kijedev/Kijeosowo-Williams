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
    <div className="rounded-[5px] py-2 px-10 lg:mx-20 mx-5 my-5 inline-flex justify-center items-center bg-white text-black hover:bg-[#ECE7E1] transition-colors duration-300 group">
      <a
        href="/KIJEOSOWO WILLIAMS.docx"
        download="Kijeosowo Williams.docx"
        className="inline-flex">
        Download my cv{" "}
        <AiOutlineCloudDownload className="mt-1 ml-2 group-hover:animate-bounce" />
      </a>
    </div>
  );
};

export default Download;
