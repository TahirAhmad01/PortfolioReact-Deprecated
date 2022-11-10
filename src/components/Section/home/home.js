import React from "react";
import Typed from "react-typed";

export default function Home() {
  return (
    <div className="h-[100vh] flex items-center justify-center flex-col overflow-hidden px-28">
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
  );
}
