import React from "react";
import image from "../assets/img-1.svg";

export const Home = () => {
  return (
    <div className="home main">
      <div>
        <h1>Lorena Trujillo Landeros</h1>
        <h3>Software Developer</h3>
      </div>
      <div>
        <img src={image} alt="home" className="img-main" />
      </div>
    </div>
  );
};
