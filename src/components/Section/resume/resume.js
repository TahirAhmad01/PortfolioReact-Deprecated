import React from "react";
import workList from "../../../utils/workList";
import Title from "../title";
import WorkExperience from "./workExperience";

export default function Resume() {
  let content;

  content = workList.map((work, idx) => {
    const { description, endDate, startDate, workTitle, position, location } =
      work || {};

    return (
      <span key={idx}>
        <WorkExperience
          workTitle={workTitle}
          startDate={startDate}
          endDate={endDate}
          description={description}
          position={position}
          location={location}
        />
      </span>
    );
  });

  return (
    <>
      <div className="containerCustom gap">
        <Title title="experience" />
        <div className="grid grid-cols-1 gap-4">{content}</div>
      </div>
    </>
  );
}
