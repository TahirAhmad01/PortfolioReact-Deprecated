import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function NavbarP() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme);

  const colorTheme = theme === "dark" ? "light" : "dark";
  // console.log(theme);

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
      className={`backdrop-blur-xl bg-slate-100/40 dark:bg-[#0b1327]/70 w-full top-0 left-0 fixed z-50 h-20 transition-all`}
    >
      <div className="containerCustom flex items-center justify-between h-full">
        <div>logo</div>
        <div className="flex items-center">
          <div>menu</div>
          <div className="w-28">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
