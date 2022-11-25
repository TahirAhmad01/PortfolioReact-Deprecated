import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import Layout from "./components/layout";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skill from "./pages/skill";

function App() {
  if (window.performance) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    alert("hello");
  }
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
