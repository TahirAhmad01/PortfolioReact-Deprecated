import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useWindowScrollPositions } from "./../hook/useWindowScrollPositions";

export default function NavbarP() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme);
  const [sticky, setSticky] = useState(false);
  const { scrollX, scrollY } = useWindowScrollPositions();

  const colorTheme = theme === "dark" ? "light" : "dark";
  console.log(theme);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (theme === "dark") {
      setDarkMode(true);
    }

    localStorage.setItem("theme", theme);
  }, [colorTheme, isDarkMode, theme]);

  useEffect(() => {
    if (scrollY > 5) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, [scrollY]);

  return (
    <div
      className={`flex items-center justify-between backdrop-blur-xl bg-slate-100/40 dark:bg-[#0b1327]/70 container py-4 w-full top-0 z-50 absolute h-20 transition-all ${
        sticky && "sticky"
      }
      }`}
      // onScroll={stickNavbar}
    >
      <div>logo</div>
      <div>menu</div>
      <di className="w-28">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
        />
      </di>
    </div>
  );
}
