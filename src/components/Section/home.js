import React from "react";
import Typed from "react-typed";
import male from "./../../assets/images/male.png";

export default function Home(props) {
  return (
    <div className="h-screen flex items-center overflow-hidden px-28">
      <div className="w-1/2">
        <div>Hello i'm</div>
        <h2 className="text-4xl font-medium py-4 ">Tahir Ahmad</h2>
        <Typed
          strings={["Web developer", "Web designer", "ui/ux designer"]}
          typeSpeed={90}
          backSpeed={80}
          loop
          className="text-xl text-gray-500"
        />
      </div>
      <div className="w-1/2 h-full relative  ">
        <img src={male} alt="male" className="absolute bottom-0" />
      </div>
    </div>
  );
}
