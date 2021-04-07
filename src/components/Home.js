import React from "react";
import image from "../assets/img-1.svg";

export const Home = () => {
  return (
    <div className="home main" id="home">
      <div className="details">
        <h1>Lorena Trujillo Landeros</h1>
        <h3>Software Developer</h3>
        <p>
          Consectetur sunt reprehenderit sint proident ad quis consectetur esse
          dolore. Irure aliqua ex cillum exercitation aliquip adipisicing amet
          proident sint commodo Lorem id. Consequat fugiat exercitation proident
          aliqua sunt sint excepteur incididunt do aute culpa duis consequat
          duis. Deserunt ad ea exercitation ipsum aliquip nostrud excepteur qui
          et non sunt do.{" "}
        </p>
      </div>
      <div>
        <img src={image} alt="home" className="img-main" />
      </div>
    </div>
  );
};
