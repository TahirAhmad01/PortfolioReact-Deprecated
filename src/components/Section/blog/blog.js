import React from "react";
import { Fade } from "react-reveal";
import Title from "../title";
import BlogCard from "./blogCard";

export default function Blog(props) {
  return (
    <>
      <div className="containerCustom">
        <Title title="blog" />
        <div className="grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Fade left>
            <BlogCard />
          </Fade>
          <Fade up>
            <BlogCard />
          </Fade>
          <Fade right>
            <BlogCard />
          </Fade>
        </div>
      </div>
    </>
  );
}
