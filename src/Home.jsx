import React from "react";
import web from "../src/images/home2.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Explore the Unseen"
        info="A platform for wanderers who loves to explore different places"
        imgsrc={web}
        visit="/service"
        btname="Explore"
      />
    </>
  );
};

export default Home;
