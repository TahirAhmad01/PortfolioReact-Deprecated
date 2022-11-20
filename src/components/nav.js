import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useWindowScrollPositions } from "../hook/useWindowScrollPositions";
import menuList from "../utils/manuList";

export default function NavbarP() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme);

  const colorTheme = theme === "dark" ? "light" : "dark";
  // console.log(theme);
  const { scrollY } = useWindowScrollPositions();

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

  return (
    <div
      className={`backdrop-blur-xl bg-slate-100/40 dark:bg-[#0b1327]/70 w-full top-0 left-0 fixed z-50 h-20 transition-all duration-200 ${
        scrollY > 80 && "h-16"
      }`}
    >
      <div className="containerCustom flex items-center justify-between h-full">
        <div>logo</div>
        <div className="flex items-center">
          <div className=" hidden md:block">
            <ul className="flex">
              {menuList.map((menu, idx) => (
                <li className="px-3" key={idx}>
                  <Link to={menu?.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-7 flex justify-end">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={19}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
