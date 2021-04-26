import React, { useState } from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  const handleShowMenu = () => setShowMenu(!showMenu);
  return (
    <nav className="navbar">
      <div>
        <div className="button-menu" onClick={handleShowMenu}>
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>
      </div>
      <div className={`options ${showMenu ? "options" : "hide-options"}`}>
        <p>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            Home
          </Link>
        </p>
        <p>
          <Link
            to="about-me"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            About me
          </Link>
        </p>
        <p>
          <Link
            to="my-projects"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            My Projects
          </Link>
        </p>
        <p>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            Skills
          </Link>
        </p>
        <p>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            Contact me
          </Link>
        </p>
      </div>
    </nav>
  );
};
