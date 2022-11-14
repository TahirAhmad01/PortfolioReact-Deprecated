import React from "react";
import Title from "../title";
import ProgressBar from "./progressBar";
import { data } from "./skillData";

export default function Skill() {
  return (
    <>
      <div className=" containerCustom gap">
        <Title title="skill" />
        <div className="flex flex-wrap">
          {/* <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar /> */}

          {data.map((skill) => (
            <ProgressBar name={skill.name} progress={skill.progress} />
          ))}
        </div>
      </div>
    </>
  );
}
