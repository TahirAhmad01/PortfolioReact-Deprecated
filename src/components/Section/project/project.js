import { AnimatePresence } from "framer-motion";
import React from "react";
import ProjectButton from "./projectButton";

export default function Project() {
  return (
    <div className="containerCustom">
      <ProjectButton />
      <AnimatePresence>{/*  */}</AnimatePresence>
    </div>
  );
}
