import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Fade } from "react-reveal";
import swal from "sweetalert";
import Title from "../title";
import ContactInp from "./contactInp";

export default function ContactMe() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    await emailjs
      .sendForm(
        "service_sob3n6t", //SERVICE ID
        "template_ol3bs8a", //TEMPLATE ID
        form.current,
        "q-Wr4qVce_T4pGFt2" // PUBLIC KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          swal({
            title: "E-mail sent successful",
            icon: "success",
            button: "Close",
            dangerMode: true,
          });
        },
        (error) => {
          console.log(error.text);
          swal({
            title: "Something went wrong",
            icon: "error",
            button: "close",
            dangerMode: true,
          });
        }
      );

    setLoading(false);
  };

  if (loading) {
    swal({
      title: "Sending message",
      icon: "warning",
      text: "Please wait ...",
      button: false,
      closeOnClickOutside: false,
    });
  }

  return (
    <>
      <div className="containerCustom gap">
        <Title title="CONTACT" />
        <form ref={form} onSubmit={sendEmail}>
          <div className="md:grid md:gap-4 grid-cols-1 md:grid-cols-2 w-full">
            <div className="w-full">
              <ContactInp
                placeholder="Your Name"
                type="text"
                name="from_name"
              />
              <ContactInp
                placeholder="Your Email"
                type="email"
                delay={150}
                name="email"
              />
              <ContactInp
                placeholder="Subject"
                type="text"
                delay={200}
                name="subject"
              />
            </div>
            <div className="w-full mt-2 md:mt-0">
              <Fade right>
                <textarea
                  className="w-full h-full rounded-md shadow-md pr-5 border-1 border-gray-200 text-black focus:border-transparent focus:outline-transparent focus:ring-0 min-h-[100px]"
                  placeholder="Message"
                  name="message"
                  required
                />
              </Fade>
            </div>
          </div>

          <Fade up>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-7 md:hover:px-12 py-3.5 text-center mr-2 mb-2 text-white transition-all disabled:opacity-75 disabled:cursor-progress"
                name="message"
                disabled={loading}
              >
                Send Message
              </button>
            </div>
          </Fade>
        </form>
      </div>
    </>
  );
}
