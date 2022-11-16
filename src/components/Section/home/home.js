import React from "react";
import { Fade } from "react-reveal";
import Typed from "react-typed";
import Wave from "react-wavify";
import avatar from "../../../assets/images/avater.webp";

export default function Home() {
  return (
    <div className={`h-[100vh] background relative`}>
      {" "}
      <div className="h-full bg-black/15 pb-7 pt-28 containerCustom relative z-20">
        <div className="backdrop-blur- bg-white/40 dark:bg-white/20 rounded-2xl h-full w-full relative overflow-hidden">
          <div className=" flex items-center justify-center flex-col overflow-hidden px-28 h-full w-full relative pb-10 z-20">
            <div className="h-36 w-36 overflow-hidden rounded-full bg-white mb-4">
              <img src={avatar} alt="avatar" />
            </div>
            {/* <div>
              <Fade up cascade>
                Hello i'm
              </Fade>
            </div> */}
            <h2 className="text-4xl font-medium pb-4 pt-2 ">
              <Fade up cascade>
                Tahir Ahmad (Sani)
              </Fade>
            </h2>{" "}
            <Typed
              strings={["Web developer", "Web designer", "ui/ux designer"]}
              typeSpeed={90}
              backSpeed={80}
              loop
              className="text-xl text-gray-500"
            />
            <div className="icons mt-4 text-gray-600 dark:text-white/60 flex justify-center flex-wrap">
              <a
                href="https://www.facebook.com/TahirAhmad01/"
                target="_blank"
                className="hover:text-[#4267b2] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tahirahmad01/"
                target="_blank"
                className="hover:text-[#0A66C2] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/tahir_ahmad01"
                target="_blank"
                className="hover:text-[#1da1f2] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/tahir_ahmad01"
                target="_blank"
                className="hover:text-[#e1306c] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/TahirAhmad01"
                target="_blank"
                className="hover:text-[#333333] hover:dark:text-red-400 customButton "
                rel="noreferrer"
              >
                <i className="fab fa-github "></i>
              </a>
            </div>
            <div className="flex mt-5">
              <button
                type="button"
                class=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-9 py-3.5 text-center mr-2 mb-2 text-white   "
              >
                Get in touch
              </button>

              <button
                type="button"
                class=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-9 py-3.5 text-center mr-2 mb-2 text-white   "
              >
                Download CV
              </button>
            </div>
          </div>
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
              speed: 0.2,
              points: 5,
            }}
            className="absolute bottom-0 z-10 "
          />
        </div>
      </div>
    </div>
  );
}