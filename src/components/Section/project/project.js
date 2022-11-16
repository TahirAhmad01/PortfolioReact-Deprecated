import React from "react";
import { Slide } from "react-awesome-reveal";
import Title from "../title";

export default function Project(props) {
  return (
    <>
      <div className="containerCustom gap">
        <Title title="LETEST WORK" />
        <div>
          <Slide down direction="up">project list here</Slide>
        </div>
      </div>
    </>
  );
}
