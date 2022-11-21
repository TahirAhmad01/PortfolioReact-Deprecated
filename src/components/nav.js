import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "../assets/css/mobileMenu.css";
import useWindowDimensions from "../hook/getWindowDimensions";
import { useWindowScrollPositions } from "../hook/useWindowScrollPositions";
import menuList from "../utils/manuList";

export default function NavbarP() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme);
  const [openMenu, setOpenMenu] = useState(false);
  const { width } = useWindowDimensions();

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

  useEffect(() => {
    if (width > 768 && openMenu) {
      setOpenMenu(false);
    }
  }, [openMenu, width]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className={`backdrop-blur-xl bg-slate-100/40 dark:bg-[#0b1327]/70 w-full top-0 left-0 fixed z-50 py-6 transition-all duration-200 border-b-2 border-gray-100 dark:border-gray-700 ${
        scrollY > 80 && "py-5"
      }`}
    >
      <div className="containerCustom flex items-center justify-between h-full">
        <div>logo</div>
        <div className="flex items-center">
          <div className=" hidden md:block">
            <ul className="flex">
              {menuList.map((menu, idx) => (
                <Link to={menu?.link}>
                  <li className="px-3" key={idx}>
                    {menu.name}
                  </li>
                </Link>
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
          <div
            className={`md:hidden  menu_icon flex flex-col items-start ${
              openMenu && "change"
            }`}
            onClick={toggleMenu}
          >
            <div className="bar1 bg-black dark:bg-white"></div>
            <div className="bar2 bg-black dark:bg-white"></div>
            <div className="bar3 bg-black dark:bg-white"></div>
          </div>
        </div>
      </div>

      <div
        className={`transition-all containerCustom pt-5 ${
          openMenu ? "block " : "hidden"
        } `}
      >
        <ul>
          {menuList.map((menu, idx) => (
            <Link to={menu?.link}>
              <li key={idx} className="py-1 block w-full">
                {menu.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
