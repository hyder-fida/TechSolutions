import React from "react";
import laptopImage from "../src/images/laptop.jpg";
import Common from "./Common";
function Home() {
  return (
    <>
      <Common
             name = 'Grow Your Business with '
             imgsrc = {laptopImage}
             visit="/service" 
             btname="Get Started"
      />
    </>
  );
}

export default Home;
