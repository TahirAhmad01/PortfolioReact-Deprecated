import React from "react";
import Typed from "react-typed";
import avatar from "../../../assets/images/avater.webp";

export default function Home() {
  return (
    <div className={`h-[100vh] background`}>
      {" "}
      <div className="h-full bg-black/15 pb-7 pt-28 containerCustom">
        <div className="backdrop-blur-xl bg-white/40 dark:bg-white/20 rounded-2xl h-full w-full flex items-center justify-center flex-col overflow-hidden px-28">
          <div className="h-36 w-36 overflow-hidden rounded-full bg-white mb-4">
            <img src={avatar} alt="avatar" />
          </div>
          <div>Hello i'm</div>
          <h2 className="text-4xl font-medium pb-4 pt-2 ">
            Tahir Ahmad (Sani)
          </h2>
          <Typed
            strings={["Web developer", "Web designer", "ui/ux designer"]}
            typeSpeed={90}
            backSpeed={80}
            loop
            className="text-xl text-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
