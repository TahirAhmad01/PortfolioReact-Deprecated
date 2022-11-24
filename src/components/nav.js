import React, { useState } from "react";
import { Link } from "react-router-dom";
import SlideToggle from "react-slide-toggle";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "../assets/css/mobileMenu.css";
import avatar from "../assets/images/logo.webp";
import useWindowDimensions from "../hook/getWindowDimensions";
import { useWindowScrollPositions } from "../hook/useWindowScrollPositions";
import menuList from "../utils/manuList";

export default function NavbarP({ theme, toggleDarkMode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [toggleEvent, setToggleEvent] = useState(0);

  const { width } = useWindowDimensions();
  const { scrollY } = useWindowScrollPositions();

  const toggle = () => setToggleEvent(Date.now());

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <React.Fragment>
      <div
        className={`backdrop-blur-xl bg-slate-100/40 dark:bg-[#0b1327]/70 w-full top-0 left-0 fixed z-50 py-4 transition-all duration-200 border-b-2 border-inherit dark:border-gray-700 my-collapsible my-collapsible ${
          scrollY > 80 && "py-3"
        }`}
      >
        <div className="containerCustom flex items-center justify-between h-full">
          <div>
            <h4 className="flex items-center text-xl">
              <div className="h-9 w-9 overflow-hidden rounded-full bg-transparent">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="ml-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18c8fd] to-purple-600 font-extrabold text-2xl">
                  Tahir Ahmad
                </span>
              </div>
            </h4>
          </div>
          <div className="flex items-center">
            <div className=" hidden md:block">
              <ul className="flex">
                {menuList.map((menu, idx) => (
                  <Link to={menu?.link} className="capitalize">
                    <li className="px-3" key={idx}>
                      {menu.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="w-7 flex justify-end">
              <DarkModeSwitch
                checked={
                  theme === undefined ? true : theme === "dark" ? true : false
                }
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
        <SlideToggle duration={500} toggleEvent={toggleEvent} collapsed>
          {({ setCollapsibleElement }) => (
            <div className={`${width > 768 && "hidden"}`}>
              <div
                className={`transition-all containerCustom my-collapsible__content `}
                ref={setCollapsibleElement}
              >
                <ul className="pt-5 ">
                  {menuList.map((menu, idx) => (
                    <Link
                      to={menu?.link}
                      onClick={() => {
                        toggle();
                        toggleMenu();
                      }}
                    >
                      <li key={idx} className="py-1 block w-full capitalize">
                        {menu.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </SlideToggle>
      </div>
    </React.Fragment>
  );
}
