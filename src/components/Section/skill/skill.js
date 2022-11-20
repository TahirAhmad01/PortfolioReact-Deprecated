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

          {data.map((skill, idx) => (
            <ProgressBar
              name={skill.name}
              progress={skill.progress}
              key={idx}
            />
          ))}
        </div>
      </div>
    </>
  );
}
