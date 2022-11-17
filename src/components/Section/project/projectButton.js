import React from "react";
import buttonList from "./buttonList";
import projectList from "./projectList";

export default function ProjectButton({ setItem, items }) {
  const filterItem = (category) => {
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
      {buttonList.map((btn) => (
        <button
          className="mx-3 px-4 py-2 bg-slate-200 rounded-md"
          onClick={() => filterItem(btn.category)}
        >
          {btn.name}
        </button>
      ))}
    </>
  );
}
