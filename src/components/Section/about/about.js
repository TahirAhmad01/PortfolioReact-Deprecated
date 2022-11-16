import React from "react";
import { Fade, Zoom } from "react-reveal";
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
      <div className="containerCustom gap overflow-hidden">
        {/* <h4 className="  mt-7 md:mt-0 text-3xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          About Me
        </h4> */}

        <Title title="about me" />

        <div className="md:grid items-center md:gap-3 lg:gap-4 grid-cols-9 md:col-start-9">
          <div className="md:col-span-5 lg:col-span-5 lg:pr-28">
            <Fade up cascade>
              <h3>Hello! I Am Tahir Ahmad.</h3>{" "}
              <p className="text-sm">
                I am a web designer. Also, I am a React front-end developer. I
                have been doing web design for the last many years. I have
                worked in web design with HTML5, CSS3, CSS3 Animation,
                Bootstrap, JavaScript, JQuery, JQuery Animation, React. I am
                ready to convert your Html conversion ( PSD, image, pdf to Html
                ). I know many wonderful effects of use on websites and how to
                keep the website clean. Effective and clean cross-browser
                support has been a priority in many of the projects I've worked
                on.
              </p>
              <div className="mt-5">
                <Fade up>
                  <Info name="email" details="tahirahmad0234@gamil.com" />
                  <Info name="phone" details="+8801610881871" />
                  <Info name="address" details="Rajshahi, Bangladesh" />
                  <Info name="status" details="Available" />
                </Fade>
              </div>
            </Fade>
          </div>
          <div className="h-auto w-full mt-5 md:mt-0 overflow-hidden rounded-xl md:col-span-4 lg:col-span-4 aspect-[4/4]">
            <Zoom>
              <img src={picture} alt="" className="w-full" />
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}
