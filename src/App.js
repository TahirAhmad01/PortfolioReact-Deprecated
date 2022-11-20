import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import Layout from "./components/layout";
import About from "./components/Section/about/about";
import ContactMe from "./components/Section/contactMe/contactMe";
import Project from "./components/Section/project/project";
import Skill from "./components/Section/skill/skill";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
