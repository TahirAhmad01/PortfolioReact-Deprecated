import React from "react";

export default function ContactInp(props) {
  return (
    <>
      <input
        type="text"
        placeholder="text"
        className="w-full rounded-md shadow-md [&:nth-child(2)]:my-2 border-1 border-gray-200 focus:border-transparent focus:outline-transparent focus:ring-0 p-3 text-black"
      />
    </>
  );
}
