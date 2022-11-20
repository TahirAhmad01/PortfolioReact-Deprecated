import React, { useState } from "react";
import buttonList from "./buttonList";
import projectList from "./projectList";

export default function ProjectButton({ setItem, items }) {
  const [activeBtn, setActiveBtn] = useState("all");
  const filterItem = (category) => {
    setActiveBtn(category);
    if (category === "all") {
      setItem(projectList);
    } else {
      const updateItem = projectList.filter((item) =>
        item.category.includes(category)
      );
      setItem(updateItem);
    }
  };

  return (
    <>
      <div className="text-center mb-6">
        {buttonList.map((btn, idx) => (
          <button
            className={`mx-1 my-1 px-3 md:px-5 py-1 capitalize bg-slate-200 hover:bg-slate-300 rounded-3xl text-sm  ${
              activeBtn === btn.category
                ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl !text-white"
                : "dark:text-black"
            }`}
            onClick={() => filterItem(btn.category)}
            key={idx}
          >
            {btn.name}
          </button>
        ))}
      </div>
    </>
  );
}
