import React from "react";
import About from "../components/Section/about/about";
import Blog from "../components/Section/blog/blog";
import ContactMe from "../components/Section/contactMe/contactMe";
import Index from "../components/Section/home/home";
import Project from "../components/Section/project/project";
import Resume from "../components/Section/resume/resume";
import Skill from "../components/Section/skill/skill";
import Testimonial from "../components/Section/testimonial/testimonial";

export default function Home(props) {
  return (
    <>
      <Index />
      <About />
      <Skill />
      <Project />
      <Resume />
      <Blog />
      <Testimonial />
      <ContactMe />
    </>
  );
}
