import React from "react";

export default function Footer() {
  return (
    <>
      <footer className=" bg-gray-100 rounded-sm shadow dark:bg-gray-800 ">
        <div className="lg:flex lg:items-center lg:justify-between text-center p-4 lg:p-2 containerCustom">
          <span className="text-sm text-gray-500 lg:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://Qubartech.com/" className="hover:underline">
              Qubartech
            </a>
            . All Rights Reserved.
          </span>
          <div className="icons text-gray-600 dark:text-white/60 flex justify-center flex-wrap mt-2 lg:mt-0">
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
              className="hover:bg-[#171515] customButton "
              rel="noreferrer"
            >
              <i className="fab fa-github "></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
