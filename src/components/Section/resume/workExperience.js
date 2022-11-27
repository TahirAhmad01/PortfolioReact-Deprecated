import React from "react";
import { Fade, Zoom } from "react-reveal";
import Icon from "../../../assets/images/work.gif";

export default function WorkExperience({
  workTitle,
  startDate,
  endDate,
  description,
  position,
  location,
}) {
  return (
    <>
      <div className="mb-3 p-6 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden flex items-center">
        <div className=" mr-6 hidden lg:block overflow-hidden">
          <Zoom>
            <img src={Icon} alt="work_ico" className="w-56" />
          </Zoom>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <div className="overflow-hidden w-full">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <h2 className="font-medium text-lg">
                    <Fade left>{workTitle}</Fade>
                  </h2>
                  <div className="text-gray-500 dark:text-gray-200 text-sm">
                    <Fade left delay={150}>
                      <div className="flex items-center">
                        <span>
                          <i className="fa-solid fa-house-laptop text-xs"></i>{" "}
                          {position}
                        </span>
                        <span className="ml-3">
                          <i className="fa-solid fa-location-dot text-xs"></i>{" "}
                          {location}
                        </span>
                      </div>
                    </Fade>
                  </div>
                </div>

                <div className="text-gray-500 dark:text-gray-200 text-xs flex items-center mt-1 md:mt-0">
                  <div className="mr-1">
                    <i className="fa-regular fa-calendar-days text-xs"></i>
                  </div>
                  <div>{startDate}</div>
                  <div className="mx-1"> - </div>
                  <div>{endDate}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-3 text-sm">
              <Fade up>{description}</Fade>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
