import React from "react";
import Title from "../title";
import ProgressBar from "./progressBar";

export default function Skill() {
  return (
    <>
      <div className=" containerCustom gap">
        <Title />
        <div className="flex flex-wrap">
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
        </div>
      </div>
    </>
  );
}
