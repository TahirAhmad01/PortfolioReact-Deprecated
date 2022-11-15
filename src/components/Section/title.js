import React from "react";

export default function Title({ title, titleDes }) {
  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-100 via-blue-500 to-purple-600">
          {title || "Title"}
        </h1>
        <span className="text-sm text-gray-600">
          {titleDes || "Lorem ipsum, dolor sit amet consectetur"}
        </span>
      </div>
    </>
  );
}
