import { VscSend } from "react-icons/vsc";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8bjvfdz",
        "template_ibv4bus",
        form.current,
        "fIbMF0nnFpZ7R0fDF"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const sweetAlert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Email has been sent!",
      showConfirmButton: false,
      timer: 2000,
      background: "#ECE7E1",
    });
  };
  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[50%] lg:w-[100%] mt-[10%]">
        <div>
          <label className="font-light text-stone-300">Name</label>
          <br />
          <input
            type="text"
            placeholder="Your Full Name..."
            name="user_name"
            className="placeholder:text-stone-600 bg-transparent text-stone-400 border border-stone-800 rounded-[10px] lg:p-4 p-3 lg:w-[200%] w-[200%] md:w-[100%] mt-3 outline-none"
          />
        </div>
        <br />
        <div>
          <label className="font-light text-stone-300">E-mail</label>
          <br />
          <input
            type="text"
            placeholder="Your E-mail..."
            name="user_email"
            className="placeholder:text-stone-600 bg-transparent text-stone-400 border border-stone-800 rounded-[10px] lg:p-4 p-3 lg:w-[200%] w-[200%] md:w-[100%] mt-3 outline-none"
          />
        </div>
        <br />
        <div>
          <label className="font-light text-stone-300">Message</label>
          <br />
          <textarea
            name="message"
            className="placeholder:text-stone-600 bg-transparent text-stone-400 border border-stone-800 rounded-[10px] lg:p-4 p-3 lg:w-[200%] w-[200%] md:w-[100%] h-[15vh] mt-3 outline-none"
            placeholder="Talk to me, how can i help you?"></textarea>
        </div>

        <button
          type="submit"
          onClick={sweetAlert}
          className="mt-5 bg-[#FFFFFF] hover:bg-[#ECE7E1] text-[#1A1818] rounded-[10px] p-3 lg:w-[200%] w-[200%] md:w-[100%] flex justify-center">
          Send Message <VscSend className="mt-1 ml-1" />
        </button>
      </form>
    </div>
  );
};

export default Form;
