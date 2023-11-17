import React from "react";
import Common from "./Common";
import laptopImage from "../src/images/laptop.jpg";

function About() {
  return (
    <>
       <Common
          name = 'Welcome to About Page '
          imgsrc = {laptopImage}
          visit="/contact" 
          btname="Contact Now"/>
    </>
  );
}

export default About;
