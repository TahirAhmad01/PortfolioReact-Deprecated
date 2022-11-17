import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Title from "../title";
import ProjectButton from "./projectButton";
import projectList from "./projectList";
import Projects from "./projects";

export default function Project() {
  const [items, setItems] = useState(projectList);

  return (
    <div className="containerCustom">
      <Title title="projects" />
      <ProjectButton setItem={setItems} items={items} />
      <AnimatePresence>
        <Projects items={items} />
      </AnimatePresence>
    </div>
  );
}
