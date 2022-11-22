import BezierEasing from "bezier-easing";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SlideToggle from "react-slide-toggle";
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
    const root = document.documentElement;
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

  const bezierEaseInOutQuart = BezierEasing(0, 0.5, 0.4, 1);

  return (
    <React.Fragment>
      <SlideToggle
        duration={350}
        easeCollapse={bezierEaseInOutQuart}
        easeExpand={bezierEaseInOutQuart}
        onCollapsed={({ hasReversed }) => {
          /* optional event hook */
            hasReversed();
        }}
      >
        {({ toggle, setCollapsibleElement }) => (
          <div
            className={`backdrop-blur-xl bg-slate-100/40 dark:bg-[#0b1327]/70 w-full top-0 left-0 fixed z-50 py-6 transition-all duration-200 border-b-2 border-inherit dark:border-gray-700 my-collapsible my-collapsible ${
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
                  className={`md:hidden  menu_icon flex flex-col items-start my-collapsible__toggle ${
                    openMenu && "change"
                  }`}
                  onClick={() => {
                    toggle();
                    toggleMenu();
                  }}
                >
                  <div className="bar1 bg-black dark:bg-white"></div>
                  <div className="bar2 bg-black dark:bg-white"></div>
                  <div className="bar3 bg-black dark:bg-white"></div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all containerCustom my-collapsible__content `}
              ref={setCollapsibleElement}
            >
              <ul className="pt-5  ">
                {menuList.map((menu, idx) => (
                  <Link to={menu?.link} onClick={toggleMenu}>
                    <li key={idx} className="py-1 block w-full">
                      {menu.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </SlideToggle>
    </React.Fragment>
  );
}
