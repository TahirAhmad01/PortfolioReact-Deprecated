import React from "react";
import picture from "../../assets/images/myPic.jpg";

export default function About(props) {
  return (
    <div className=" bg-slate-100 flex items-center">
      <div className="w-1/2">
        <img src={picture} alt="" />
      </div>
      <div className="w-1/2 pl-10 pr-28">
        <h4 className="text-4xl">About Me</h4>

        <p className="pt-12">
          My name is Tahir Ahmad. I am a web designer. Also, I am a React
          front-end developer. I have been doing web design for the last many
          years. I have worked in web design with HTML5, CSS3, CSS3 Animation,
          Bootstrap, JavaScript, JQuery, JQuery Animation, React. I am ready to
          convert your Html conversion ( PSD, image, pdf to Html ). I know many
          wonderful effects of use on websites and how to keep the website
          clean. Effective and clean cross-browser support has been a priority
          in many of the projects I've worked on.
        </p>
      </div>
    </div>
  );
}
