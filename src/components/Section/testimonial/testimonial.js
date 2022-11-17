import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import { Slide } from "react-awesome-reveal";
import OwlCarousel from "react-owl-carousel";

import Title from "../title";
import Feedback from "./feedback";

export default function Testimonial() {
  const options = {
    margin: 30,
    responsiveClass: true,
    smartSpeed: 200,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div className="containerCustom gap">
        <Title title="CLIENT FEEDBACK" />
        <OwlCarousel className="owl-theme" loop margin={1} {...options}>
          <Slide direction="up" duration={900}>
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
          </Slide>
        </OwlCarousel>
      </div>
    </>
  );
}
