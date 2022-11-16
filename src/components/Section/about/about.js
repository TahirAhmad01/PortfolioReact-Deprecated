import React from "react";
import { Fade } from "react-reveal";
import picture from "../../.../../../assets/images/myPic.jpg";
import Title from "../title";
import Info from "./info";

export default function About(props) {
  return (
    <div className=" flex items-center flex-wrap relative">
      {/* <div className="w-full lg:w-1/2 ">
        <Zoom>
          <img src={picture} alt="" className="w-full" />
        </Zoom>
      </div> */}
      <div className="containerCustom gap">
        {/* <h4 className="  mt-7 md:mt-0 text-3xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          About Me
        </h4> */}

        <Title title="about me" />

        <div className="md:grid md:grid-cols-2 items-center md:col-end-3 gap-4">
          <div className="col-span-2">
            <Fade up>
              My name is Tahir Ahmad. I am a web designer. Also, I am a React
              front-end developer. I have been doing web design for the last
              many years. I have worked in web design with HTML5, CSS3, CSS3
              Animation, Bootstrap, JavaScript, JQuery, JQuery Animation, React.
              I am ready to convert your Html conversion ( PSD, image, pdf to
              Html ). I know many wonderful effects of use on websites and how
              to keep the website clean. Effective and clean cross-browser
              support has been a priority in many of the projects I've worked
              on.
              <div>
                <Info />
                <Info />
                <Info />
                <Info />
                <Info />
                <Info />
                <Info />
              </div>{" "}
            </Fade>
          </div>
          <div className="h-96 w-96 overflow-hidden rounded-md col-end-7">
            <img src={picture} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
