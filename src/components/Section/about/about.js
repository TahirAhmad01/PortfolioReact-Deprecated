import React from "react";
import { Fade } from "react-reveal";
import Zoom from "react-reveal/Zoom";
import picture from "./../../../assets/images/myPic.jpg";

export default function About(props) {
  return (
    <div className=" bg-slate-100 dark:bg-gray-600 flex items-center flex-wrap">
      <div className="w-full md:w-1/2 ">
        <Zoom>
          <img src={picture} alt="" />
        </Zoom>
      </div>
      <div className="w-full md:w-1/2 px-[15px] pb-[75px] md:pl-10  md:pr-28 md:pb-0">
        <h4 className="text-4xl text-center md:text-left mt-7 md:mt-0">
          About Me
        </h4>

        <p className="pt-12">
          <Fade up>
            My name is Tahir Ahmad. I am a web designer. Also, I am a React
            front-end developer. I have been doing web design for the last many
            years. I have worked in web design with HTML5, CSS3, CSS3 Animation,
            Bootstrap, JavaScript, JQuery, JQuery Animation, React. I am ready
            to convert your Html conversion ( PSD, image, pdf to Html ). I know
            many wonderful effects of use on websites and how to keep the
            website clean. Effective and clean cross-browser support has been a
            priority in many of the projects I've worked on.
          </Fade>
        </p>
      </div>
    </div>
  );
}
