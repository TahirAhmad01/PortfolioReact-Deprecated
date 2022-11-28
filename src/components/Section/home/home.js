import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import Wave from "react-wavify";
import avatar from "../../../assets/images/avater.webp";
import useWindowDimensions from "../../../hook/getWindowDimensions";
import Button from "./button";

export default function Home() {
  const { height, width } = useWindowDimensions();

  return (
    <div
      className={`background relative ${
        height > 650 && width > 992 && "md:h-[100vh]"
      }`}
    >
      {" "}
      <div className="h-auto pt-24 md:h-full bg-black/15 pb-8 md:pt-24 containerCustom relative z-20">
        <div className="backdrop-blur-xl bg-white/40 dark:bg-[#0b1327]/60 rounded-2xl h-full w-full relative overflow-hidden">
          <div
            className={` flex items-center justify-center flex-col overflow-hidden md:px-28 h-full w-full relative  z-20 py-16 pb-24 mx:py-0  ${
              height > 650 && width > 992 && "pb-16"
            }`}
          >
            <div className="h-28 w-28 md:h-36 md:w-36 overflow-hidden rounded-full bg-white mb-4">
              <img src={avatar} alt="avatar" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium pb-4 pt-2 ">
              <Fade up cascade>
                Tahir Ahmad (Sani)
              </Fade>
            </h2>{" "}
            <Typed
              strings={[
                "Web developer",
                "Web designer",
                "React Developer",
                "UI/UX designer",
              ]}
              typeSpeed={90}
              backSpeed={80}
              loop
              className="text-md md:text-xl text-gray-600 dark:text-gray-300"
            />
            <div className="icons mt-4 text-gray-600 dark:text-white/60 flex justify-center flex-wrap">
              <a
                href="https://www.facebook.com/TahirAhmad01/"
                target="_blank"
                className="hover:bg-[#4267b2] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tahirahmad01/"
                target="_blank"
                className="hover:bg-[#0A66C2] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/tahir_ahmad01"
                target="_blank"
                className="hover:bg-[#1da1f2] customButton"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/tahir_ahmad01"
                target="_blank"
                className="hover:instagram customButton"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/TahirAhmad01"
                target="_blank"
                className="hover:bg-[#171515]  customButton "
                rel="noreferrer"
              >
                <i className="fab fa-github "></i>
              </a>
            </div>
            <div className="flex mt-5">
              <Link to="/contact">
                <Button name="Get in touch" />
              </Link>

              <Button name="Download CV" />
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
