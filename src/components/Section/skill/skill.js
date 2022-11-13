import React from "react";
import Title from "../title";
import ProgressBar from "./progressBar";

export default function Skill() {
  return (
    <>
      <div className=" containerCustom py-20">
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
