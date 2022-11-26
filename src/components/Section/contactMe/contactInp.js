import React from "react";
import { Fade } from "react-reveal";

export default function ContactInp({ delay, type, placeholder, ...rest }) {
  return (
    <>
      <Fade left delay={delay}>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md shadow-md [&:nth-child(2)]:my-2 border-1 border-gray-200 focus:border-transparent focus:outline-transparent focus:ring-0 p-3 text-black"
          required
          {...rest}
        />
      </Fade>
    </>
  );
}
