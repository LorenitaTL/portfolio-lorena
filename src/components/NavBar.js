import React from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <p>
        <Link to="home" smooth={true} duration={1000}>
          Home
        </Link>
      </p>
      <p>
        <Link to="about-me" smooth={true} duration={1000}>
          About me
        </Link>
      </p>
      <p>
        <Link to="my-projects" smooth={true} duration={1000}>
          My Projects
        </Link>
      </p>
      <p>
        <Link to="technologies" smooth={true} duration={1000}>
          Technologies
        </Link>
      </p>
      <p>
        <Link to="contact" smooth={true} duration={1000}>
          Contact me
        </Link>
      </p>
    </nav>
  );
};
