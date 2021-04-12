import React from "react";

export const CardAbMe = (props) => {
  return (
    <div className="flip-card card">
      <div className="flip-card-inner ">
        <div
          className="flip-card-front shadow-card card-front"
          style={{ padding: "1rem" }}
        >
          <img src={props.img} alt="avatar" />
          <h2>{props.title}</h2>
        </div>
        <div className="flip-card-back shadow-card">
          <h1>Lorenita TL</h1>
          <p>Engineer</p>
          <p>I love my husband</p>
        </div>
      </div>
    </div>
  );
};
