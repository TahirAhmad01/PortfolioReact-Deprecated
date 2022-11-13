import React from "react";

export default function Title({ title, titleDes }) {
  return (
    <>
      <div className="text-center mb-9">
        <h1 className="text-3xl">{title || "Title"}</h1>
        <span>{titleDes || "Lorem ipsum, dolor sit amet consectetur"}</span>
      </div>
    </>
  );
}
