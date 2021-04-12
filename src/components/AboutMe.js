import React from "react";
import img2 from "../assets/img-2.svg";
import img3 from "../assets/img-3.svg";
import img4 from "../assets/img-4.svg";
import { CardAbMe } from "./CardAbMe";

export const AboutMe = () => {
  return (
    <div className="about-me main " id="about-me">
      <h2 className="subtitle text-grey">About me</h2>
      <div className="cards">
        <CardAbMe img={img2} title={"Education"} />
        <CardAbMe img={img3} title={"My Work"} />
        <CardAbMe img={img4} title={"Soft Skills"} />
      </div>
    </div>
  );
};
