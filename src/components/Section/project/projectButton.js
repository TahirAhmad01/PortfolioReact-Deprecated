import React from "react";
import buttonList from "./buttonList";

export default function ProjectButton(props) {
  return (
    <>
      {buttonList.map((btn) => (
        <button className="mx-3 px-4 py-2 bg-slate-200 rounded-md">
          {btn.name}
        </button>
      ))}
    </>
  );
}
