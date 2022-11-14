import React from "react";
import Title from "../title";
import ContactInp from "./contactInp";

export default function ContactMe() {
  return (
    <>
      <div className="containerCustom gap">
        <Title title="CONTACT" />
        <div className="flex">
          <div className="w-1/2 pr-2">
            {/*  */}
            <ContactInp />
            <ContactInp />
            <ContactInp />
          </div>
          <div className="w-1/2 pl-2">
            <textarea className="h-full w-full mr-2 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
}
