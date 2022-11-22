import React from "react";
import Title from "../title";
import WorkExperience from "./workExperience";

export default function Resume() {
  return (
    <>
      <div className="containerCustom gap">
        <Title title="experience" />

        <div className="grid grid-cols-1 gap-4">
          <WorkExperience />
          <WorkExperience />
          <WorkExperience />
          <WorkExperience />
        </div>
        {/* <div className="w-1/2">
            <h1>education</h1>
          </div> */}
      </div>
    </>
  );
}
