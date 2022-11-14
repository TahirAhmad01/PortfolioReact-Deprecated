import React from "react";
import { Fade } from "react-reveal";

export default function ProgressBar({ name, progress }) {
  //   useCountUp({ ref: "counter", end: 1234567 });

  return (
    <React.Fragment>
      <div className="mb-4 w-1/2 px-2">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white uppercase">
            {name}
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            {progress}%{/* <span id="counter" /> */}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
          <Fade left>
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: progress + "%" }}
            ></div>{" "}
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
}
