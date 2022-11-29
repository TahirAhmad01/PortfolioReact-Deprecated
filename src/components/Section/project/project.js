import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import projectList from "../../../utils/projectList";
import Title from "../title";
import ProjectButton from "./projectButton";
import Projects from "./projects";

export default function Project() {
  const [items, setItems] = useState(projectList);

  return (
    <div className="containerCustom gap">
      <Title title="projects" />
      <ProjectButton setItem={setItems} items={items} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 columns-1 gap-1 justify-items-center">
        <AnimatePresence>
          <Projects items={items} />
        </AnimatePresence>
      </div>
    </div>
  );
}
