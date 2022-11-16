import React from "react";
import Typed from "react-typed";
import Wave from "react-wavify";
import avatar from "../../../assets/images/avater.webp";

export default function Home() {
  return (
    <div className={`h-[100vh] background relative`}>
      {" "}
      <div className="h-full bg-black/15 pb-7 pt-28 containerCustom relative z-20">
        <div className="backdrop-blur- bg-white/40 dark:bg-white/20 rounded-2xl h-full w-full flex items-center justify-center flex-col overflow-hidden px-28 relative">
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

          <Wave
            fill="#fff4"
            paused={false}
            options={{
              height: 50,
              amplitude: 50,
              speed: 0.15,
              points: 3,
            }}
            className="absolute bottom-0 z-10 "
          />
          <Wave
            fill="#fff5"
            paused={false}
            options={{
              height: 70,
              amplitude: 30,
              speed: 0.20,
              points: 5,
            }}
            className="absolute bottom-0 z-10 "
          />
        </div>
      </div>
      {/* <Wave
        fill="#fff7"
        paused={false}
        options={{
          height: 50,
          amplitude: 30,
          speed: 0.35,
          points: 3,
        }}
        className="absolute bottom-0 z-10 "
      /> */}
    </div>
  );
}
