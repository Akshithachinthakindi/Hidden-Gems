import React from "react";
import web from "../src/images/aboutpg.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        name="Know more about"
        info="India is a country with a rich cultural and historical heritage, offering a plethora of hidden gems and offbeat destinations that are worth exploring.
        Got any place in mind?
        Click on the button below and share your suggestions."
        imgsrc={web}
        visit="/contact"
        btname="Reach Out"
      />
    </>
  );
};

export default About;
