import React from "react";
import "./assets/css/main.css";
import Layout from "./components/layout";
import About from "./components/Section/about/about";
import Home from "./components/Section/home/home";
import Project from "./components/Section/project/project";
import Resume from "./components/Section/resume/resume";

import Skill from "./components/Section/skill/skill";
import TestimonialCom from "./components/Section/testimonial/testimonial";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skill />
      <Project />
      <Resume />
      <TestimonialCom />
    </Layout>
  );
}

export default App;
