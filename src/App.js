import React from "react";
import "./assets/css/main.css";
import Layout from "./components/layout";
import About from "./components/Section/about";
import Home from "./components/Section/home";

function App() {
  return (
    <Layout>
      {/*  */}
      <Home />
      <About />
    </Layout>
  );
}

export default App;
