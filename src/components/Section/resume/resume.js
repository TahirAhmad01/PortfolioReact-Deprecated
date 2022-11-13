import React from "react";
import Title from "../title";
import WorkExperience from "./workExperience";

export default function Resume(props) {
  return (
    <>
      <div className="containerCustom">
        <Title />

        <div className="flex flex-wrap">
          <div className="w-1/2">
            <h1>Work experience</h1>
            <WorkExperience />
          </div>
          <div className="w-1/2">
            <h1>education</h1>
          </div>
        </div>
      </div>
    </>
  );
}
