import React from "react";
import Title from "../title";
import ContactInp from "./contactInp";

export default function ContactMe() {
  return (
    <>
      <div className="containerCustom gap">
        <Title title="CONTACT" />
        <div className="grid md:gap-4 grid-cols-1 md:grid-cols-2 w-full">
          <div className="w-full pr-2">
            {/*  */}
            <ContactInp />
            <ContactInp />
            <ContactInp />
          </div>
          <div className="w-full pl-2">
            <textarea className="w-full h-full rounded-md shadow-md pr-5 border-1 border-gray-200 text-black focus:border-transparent focus:outline-transparent focus:ring-0" />
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            type="button"
            class=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-7 py-3.5 text-center mr-2 mb-2 text-white   "
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
