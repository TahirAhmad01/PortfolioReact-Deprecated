import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/main.css";
import Layout from "./components/layout";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/Resume";
import Home from "./pages/home";
import PageNotFound from "./pages/pageNotFound";
import Projects from "./pages/projects";
import Skill from "./pages/skill";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
