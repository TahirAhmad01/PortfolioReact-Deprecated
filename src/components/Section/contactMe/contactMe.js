import React from "react";
import { Fade } from "react-reveal";
import Title from "../title";
import ContactInp from "./contactInp";

export default function ContactMe() {
  return (
    <>
      <div className="containerCustom gap">
        <Title title="CONTACT" />
        <div className="md:grid md:gap-4 grid-cols-1 md:grid-cols-2 w-full">
          <div className="w-full">
            {/*  */}
            <ContactInp />
            <ContactInp delay={150} />
            <ContactInp delay={200} />
          </div>
          <div className="w-full mt-2 md:mt-0">
            <Fade right>
              <textarea className="w-full h-full rounded-md shadow-md pr-5 border-1 border-gray-200 text-black focus:border-transparent focus:outline-transparent focus:ring-0 min-h-[100px]" />
            </Fade>
          </div>
        </div>

        <Fade up>
          <div className="text-center mt-4">
            <button
              type="button"
              className=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-7 py-3.5 text-center mr-2 mb-2 text-white   "
            >
              Send Message
            </button>
          </div>
        </Fade>
      </div>
    </>
  );
}
