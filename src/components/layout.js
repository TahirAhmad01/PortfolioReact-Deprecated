import React, { useEffect, useState } from "react";
import { useWindowScrollPositions } from "../hook/useWindowScrollPositions";
import Footer from "./footer";
import Navbar from "./nav";

export default function Layout({ children }) {
  const [theme, setTheme] = useState(localStorage.theme);
  const [loading, setLoading] = useState(true);

  const { scrollY } = useWindowScrollPositions();
  const colorTheme = theme === "dark" ? "light" : "dark";

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme === undefined ? "dark" : theme);

    localStorage.setItem("theme", theme === undefined ? "dark" : theme);
    setLoading(false);
  }, [colorTheme, theme]);

  return (
    <div>
      {!loading && (
        <div className="relative dark:text-white bg-gray-50 dark:bg-[#111827] transition-all overflow-hidden font-nunito">
          <Navbar theme={theme} toggleDarkMode={toggleDarkMode} />
          {children}
          <Footer />

          <button
            x-data="topBtn"
            id="topButton"
            className={`fixed z-10 p-3 bg-gray-100 text-black rounded-full shadow-md bottom-10 right-10 animate-bounce ${
              scrollY > 250 ? "block" : "hidden"
            }`}
            onClick={backToTop}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}