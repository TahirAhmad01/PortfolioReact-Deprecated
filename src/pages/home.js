import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/Section/about";
import Blog from "../components/Section/blog";
import ContactMe from "../components/Section/contactMe";
import TopSec from "../components/Section/home";
import Project from "../components/Section/project";
import Resume from "../components/Section/resume";
import Skill from "../components/Section/skill";
import Testimonial from "../components/Section/testimonial";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tahir Ahmad - Portfolio</title>
      </Helmet>

      {/* <PageLayout> */}
      <TopSec />
      <About />
      <Skill />
      <Project />
      <Resume />
      <Blog />
      <Testimonial />
      <ContactMe />
      {/* </PageLayout> */}
    </>
  );
}
