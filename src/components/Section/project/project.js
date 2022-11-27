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
      <AnimatePresence>
        <Projects items={items} />
      </AnimatePresence>
    </div>
  );
}
